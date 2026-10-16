# Cloud backup and sync (Pro) — plan

Status: **Supabase approved (2026-10-16).** Nothing is built yet and billing is off.

## Goal
Let a church keep its Sundays safe off the laptop and open the same data on a second computer (home laptop → church laptop) without exporting files. This becomes the paid Pro feature ($9/mo, $79/yr). The free app stays fully local and offline.

## What syncs
Everything in `localStorage["churchx.v1"]`: church name, settings, services, songs (incl. licensed lyrics), the CCLI usage log, roles. **Visitor cards (`guests`) are opt-in, off by default**, because they are personal data. Media files (IndexedDB) are left out of phase 1 because of size.

## Options
| Option | Pros | Cons |
|---|---|---|
| A. Bring-your-own Google Drive / Dropbox (appDataFolder) | No server and no storage cost; the church owns the data | OAuth app verification; awkward for Pro gating; per-provider code |
| B. Managed BaaS (Supabase or Firebase) | Auth, DB and row-level security out of the box; free tier covers early churches | Vendor lock-in; data sits with a third party |
| C. Small own API (Cloudflare Worker + D1/R2) | Cheap, full control, easy to gate on Stripe status | We write and run auth, security and ops ourselves |

**Decision: B (Supabase), approved**, with a thin client module, so we could move to C later. Row-level security keeps each church's rows private without a custom server. Stripe webhooks (Supabase Edge Function) set `churches.pro_until`.

## Data model
- `churches(id, name, owner_user_id, pro_until, created_at)`
- `members(church_id, user_id, role: owner|editor)`
- `snapshots(id, church_id, device_id, rev, created_at, data jsonb)`: full state blob, newest N=30 kept (this also gives restore points)
- `services(church_id, service_id, rev, updated_at, updated_by, data jsonb, deleted bool)`: per-service rows (phase 2) so two computers editing different Sundays don't collide

## Auth
Email magic link (no passwords to forget). One owner invites editors by email. Keep the session token in localStorage; the app still works signed out and offline.

## Sync and conflicts
- Local-first: localStorage stays the source of truth while offline. Changes queue and push on reconnect.
- Phase 1: whole-state snapshots. On open, if the server `rev` is newer than the local base rev and there are local edits, show a styled dialog: "Keep this computer's / Use the cloud copy / Keep both (save this one as a copy)". Never overwrite silently.
- Phase 2: per-service last-writer-wins on `updated_at`, plus that dialog when the same service changed on both sides. Song and CCLI logs are merged as a union by id.

## Privacy
- Update privacy.html before launch: what's stored, where (region), retention, deleting an account.
- Guests are off by default. Licensed lyrics stay private to the church (no sharing between churches).
- Encrypted at rest (provider default) and over TLS. Optional later: client-side encryption with a church passphrase.
- Delete church → hard delete of all rows within 30 days.

## Cost (rough)
Supabase free tier (500 MB DB) covers ~hundreds of churches at about 50–200 KB of state each; Pro is $25/mo once needed. Stripe fees are about 2.9% + 30¢ per charge. A $9 plan nets about $8.44, so roughly 3 paying churches cover the $25 tier.

## Phased rollout
1. **Backup only**: sign in, "Back up to cloud" + restore from the last 30 snapshots. Private beta with 2–3 churches, free.
2. **Sync**: automatic pull on open and push after edits, with the conflict dialog.
3. **Pro gating**: turn on `billingEnabled` with real Stripe Payment Links. The webhook sets `pro_until`, with a 14-day grace period. Lapsed churches can still restore/export.
4. Team invites, per-service sync, optional media sync (R2/Storage, size caps).

## Keeping it cheap (plain words)
**Free tier** (Supabase Free plan, check supabase.com/pricing before signing up as limits change):
- 500 MB database. One church's Sundays are roughly 50–200 KB, so that's room for a few thousand churches.
- 1 GB file storage (we aren't syncing media at first), 5 GB of data transfer a month, 50,000 monthly signed-in users.
- 2 free projects. **A free project is paused after 1 week with no activity.** A paused project stops syncing until someone clicks "Restore" in the dashboard. The app still works offline, and nothing is lost.
- No credit card is needed for the free plan.

**When costs start:** only if we choose to upgrade. Pro is about $25/month per organization. Upgrade when one of these happens:
1. Paying churches rely on sync, so a pause isn't acceptable (the Pro plan doesn't pause), or
2. we approach 500 MB, or
3. we want daily backups of the database itself.

About 3 paying churches at $9 a month cover it. Set a spend cap (on by default in Pro) so there are no surprise bills.

**Account setup Church X would do (about 15 minutes):**
1. Go to supabase.com → Start your project → sign up with churchofx4u@gmail.com (or "Continue with GitHub" as churchofx4u).
2. New organization: "Church X", plan **Free**.
3. New project: name `worship-with-me`, a strong database password (save it in a password manager, never in the repo), region **East US**.
4. Wait about 2 minutes for it to finish setting up. Then open Project Settings → API (or "API Keys").
5. Copy the **Project URL** and the **anon / publishable key**. These two are **safe to put in the app** because every table will have Row Level Security turned on, so a user can only read their own church's rows. Paste them into config.js (in a later PR).
6. **Never share the `service_role` / secret key**, and never put it in the repo, the app, a chat or an email. It skips all security. It is only used on the server side (the Stripe webhook function), stored as a Supabase secret.
7. Authentication → Providers: keep **Email** on and enable magic links. Under URL Configuration, set Site URL to https://churchofx4u.github.io/church-x/.
8. Tell the developer (Grok Bot) "project created". We then add the tables and security rules as a reviewed migration.

## Open questions
- Data region: East US okay?
- Should visitor cards ever sync?
- Should a free tier keep 1 cloud backup?
