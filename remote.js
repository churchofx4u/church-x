/* Phone remote over Supabase Realtime broadcast. Loads vendor/supabase.js only when configured. */
(function (global) {
  const SCRIPT_SRC = "./vendor/supabase.js";
  let loadPromise = null;
  let client = null;
  let channel = null;
  let role = null; // "host" | "phone"
  let roomCode = null;
  let onCommand = null;
  let statusHandler = null;

  function configured() {
    return typeof global.wwmRemoteConfigured === "function" && global.wwmRemoteConfigured();
  }

  function loadSupabase() {
    if (!configured()) return Promise.reject(new Error("Phone remote is off."));
    if (global.supabase && global.supabase.createClient) return Promise.resolve(global.supabase);
    if (loadPromise) return loadPromise;
    loadPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-wwm-supabase]');
      if (existing) {
        existing.addEventListener("load", () => resolve(global.supabase));
        existing.addEventListener("error", () => reject(new Error("Could not load supabase.js")));
        return;
      }
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.dataset.wwmSupabase = "1";
      s.onload = () => {
        if (!global.supabase || !global.supabase.createClient) {
          reject(new Error("supabase.js loaded without createClient"));
          return;
        }
        resolve(global.supabase);
      };
      s.onerror = () => {
        loadPromise = null;
        reject(new Error("Could not load vendor/supabase.js"));
      };
      document.head.appendChild(s);
    });
    return loadPromise;
  }

  function getClient() {
    return loadSupabase().then((sb) => {
      if (client) return client;
      const c = global.WWM_CONFIG || {};
      const url = String(c.supabaseUrl || "").trim().replace(/\/$/, "");
      const key = String(c.supabaseAnonKey || "").trim();
      client = sb.createClient(url, key, {
        auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
      });
      return client;
    });
  }

  function randomRoomCode() {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let out = "";
    const bytes = new Uint8Array(6);
    (global.crypto || window.crypto).getRandomValues(bytes);
    for (let i = 0; i < 6; i++) out += alphabet[bytes[i] % alphabet.length];
    return out;
  }

  function topicFor(code) {
    return "wwm-remote-" + String(code || "").toUpperCase();
  }

  function leave() {
    if (channel) {
      try { channel.unsubscribe(); } catch (err) {}
      if (client) {
        try { client.removeChannel(channel); } catch (err) {}
      }
    }
    channel = null;
    role = null;
    roomCode = null;
  }

  function subscribe(code, asRole, handlers) {
    handlers = handlers || {};
    onCommand = handlers.onCommand || null;
    statusHandler = handlers.onStatus || null;
    return getClient().then((sbClient) => {
      leave();
      roomCode = String(code || "").toUpperCase();
      role = asRole;
      channel = sbClient.channel(topicFor(roomCode), {
        config: { broadcast: { self: false } }
      });
      channel.on("broadcast", { event: "cmd" }, (payload) => {
        const data = (payload && payload.payload) || payload || {};
        if (role === "host" && typeof onCommand === "function") onCommand(data);
      });
      channel.on("broadcast", { event: "status" }, (payload) => {
        const data = (payload && payload.payload) || payload || {};
        if (role === "phone" && typeof statusHandler === "function") statusHandler(data);
      });
      return new Promise((resolve, reject) => {
        channel.subscribe((status) => {
          if (status === "SUBSCRIBED") resolve({ roomCode, role });
          else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") reject(new Error("Could not join remote room (" + status + ")"));
        });
      });
    });
  }

  function sendCommand(cmd, extra) {
    if (!channel) return Promise.reject(new Error("Not connected"));
    const payload = Object.assign({ cmd: cmd, at: Date.now() }, extra || {});
    return channel.send({ type: "broadcast", event: "cmd", payload: payload });
  }

  function sendStatus(info) {
    if (!channel || role !== "host") return Promise.resolve();
    return channel.send({ type: "broadcast", event: "status", payload: info || {} });
  }

  function startHost(handlers) {
    const code = randomRoomCode();
    return subscribe(code, "host", handlers).then(() => code);
  }

  function joinPhone(code, handlers) {
    const clean = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (clean.length < 4) return Promise.reject(new Error("Enter the room code from the laptop."));
    return subscribe(clean, "phone", handlers);
  }

  global.WwmRemote = {
    configured,
    loadSupabase,
    startHost,
    joinPhone,
    sendCommand,
    sendStatus,
    leave,
    randomRoomCode,
    get roomCode() { return roomCode; },
    get role() { return role; }
  };
})(typeof window !== "undefined" ? window : globalThis);
