document.querySelector("#copy-post").onclick = async () => {
  const note = document.querySelector("#copied");
  try {
    await navigator.clipboard.writeText(document.querySelector("#post").textContent);
    note.textContent = "Copied. Paste it on X.";
  } catch (err) {
    note.textContent = "Select the post and copy it.";
  }
  note.hidden = false;
};
