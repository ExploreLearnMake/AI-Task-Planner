# Setup

Plan on about an hour, most of it deciding your rules. Claude does the building; these steps tell you what to ask for and what to check.

## Before you start

- **Claude plan:** you need scheduled tasks (cloud) and published pages (artifacts) with a database. On Team and Enterprise plans an owner can turn scheduled tasks off for the whole organization, so check that first.
- **Connections in Claude:** Google Calendar (required). Gmail if you want ideas forwarded by email. Turn them on, then **start a new chat**, since connections attach when a conversation starts.
- **Policy:** check your organization's AI and data policies before connecting a work calendar.

## Step 1: Define your rules

Open a new Claude chat, paste [`prompts/setup-interview.md`](../../prompts/setup-interview.md), and answer its questions. It walks you through your workday, areas, priorities, protected time, and calendars, and ends with two outputs:

- a filled-in copy of [`config/example-config.md`](../../config/example-config.md)
- a **YOUR RULES** block to paste into the planner prompts

Budget 20–30 minutes. It's the step that makes the planner yours.

## Step 2: Find your calendar IDs

Ask Claude: *"List my calendars with their IDs."* Note the ID for:

- the calendar that will receive task blocks (usually your main calendar)
- a personal calendar to protect appointments from (optional, read-only)
- an organization events calendar (optional, read-only)
- a closures or holidays calendar (optional, read-only)

## Step 3: Publish the capture page

1. In [`app/capture-page.html`](../../app/capture-page.html), edit the `AREAS` list near the top of the script to match your areas and colors.
2. Give the file to Claude and ask: *"Publish this as a private artifact with the db capability, with access rule `{path: "", read: "admin", write: "admin"}` so only I can read or write it."*
3. Note the page's URL. Pin it in Claude, and on your phone add it to your home screen (Chrome menu → **Add to Home screen**).
4. Ask Claude to seed the database: `meta/status` with `{lastRun: null, summary: "Set up"}`, and `meta/config` with your org-event keywords.

## Step 4: Create the planner

1. Copy [`prompts/planner-daily.md`](../../prompts/planner-daily.md). Replace every `{{PLACEHOLDER}}` using your config, and paste your **YOUR RULES** block where marked.
2. Ask Claude to create a **scheduled task** with that prompt:
   - weekdays, early (before you start work)
   - a cron with your time zone, e.g. `CRON_TZ=America/Phoenix 56 4 * * 1-5`
   - avoid :00 and :30, which can start late when the system is busy
   - push notifications on
3. Do the same with [`prompts/planner-urgent.md`](../../prompts/planner-urgent.md) for an hourly check during work hours, e.g. `CRON_TZ=America/Phoenix 7 7-16 * * 1-5`, with completion notifications off.

## Step 5: Add colors (optional)

Follow [`scripts/apps-script-colors/README.md`](../../scripts/apps-script-colors/README.md). Takes about 3 minutes.

## Step 6: Test run

1. Capture one item of each kind: Normal, This week, Urgent tomorrow, and one with a due date.
2. Ask Claude to run the morning planner now.
3. Check:
   - [ ] Blocks appear with "◆" titles and your marker in the description
   - [ ] The page shows them under **Tasks**, and the status banner shows no problems
   - [ ] Drag one block; after the next run it's marked pinned
   - [ ] Delete one block; after the next run it's marked dropped
   - [ ] A personal appointment during work hours got an "Out of office" block
   - [ ] Only you can read the page's data (ask Claude to check with a lower access level)

## Keeping it updated

When you change a rule, update the planner prompt and add a line to your own copy of [`docs/design/decisions.md`](../design/decisions.md). Future conversations can read your decisions instead of working them out again.
