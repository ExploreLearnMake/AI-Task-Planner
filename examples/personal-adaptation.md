# Adapting the planner for personal life

The prompts in this repository are tuned for a workday. The same design also runs a home planner well, for projects, repairs, and errands. This page covers what changes. To work out your own rules, run [`prompts/setup-interview.md`](../prompts/setup-interview.md) and answer **PERSONAL**.

## What stays the same

- One capture page, a morning planner, approval on the calendar
- Never deleting events, pinned blocks, Someday parking, Adjust and re-plan
- 14 days on the calendar, a forecast beyond that
- Reporting problems word for word

## What changes

| Area | Work version | Personal version |
|---|---|---|
| When | Workday hours | Your free time: e.g. weekday evenings with a small cap, longer weekend mornings |
| Day types | Workday, closed, alternate schedule | Weekend-type days (Sat, Sun, and days off you declare), weekday evenings, prep evenings, blocked days (holidays, away) |
| Task kinds | deep, admin, prep, followup, learn | **desk** (research, ordering, forms), **light** (short hands-on, ≤60 min), **labor** (physical or long), **prep** |
| Where kinds go | Rhythm and energy rules | Desk and light tasks on weeknights; labor only on weekend-type days |
| What a task lists | Inputs and people involved | **Tools** and **materials**, so you can gather or buy them in time |
| Waiting | Approvals, replies | Drying and curing times, deliveries, 3D prints; also **"no later than"** windows (e.g. a utility locate request that expires) |
| Preparation | Meeting prep | A **prep block the evening before** hands-on days, with a checklist per block (tools, materials, water, gloves, sunscreen) |
| Weather | Not used | **Flags** outdoor blocks for rain, heat, cold, or wind from a public forecast page. It never moves blocks for weather; you decide. |
| Busy sources | Meetings, personal appointments | Family calendar, plus your work calendar's **free/busy** shared to your personal account, so evening work events are respected |
| Spillover | Ideas can arrive from a home planner | Work ideas captured at home can be **emailed** to your work address each morning in a fixed format, then removed |

## Rules worth borrowing

- **Schedule hands-on time, not machine time.** A 3D print or drying stain is a wait between two short tasks, not a long block.
- **"Starting in November" ≠ "in November."** The first sets only a start date.
- **Day limits.** "Only Saturday mornings" applies to hands-on tasks; paperwork for the same project can still happen on a weeknight.
- **Safety and legal steps get suggested automatically**, such as calling your local utility-locate service before digging, or checking local rules for fences and structures. They're marked *Suggested* with a one-line reason.
- **A project-level "check tools and materials" task** early in any multi-session project, so missing items surface weeks ahead.

## Keeping a home and a work planner in sync

If you run both, keep the shared design (this repository) as the source of truth and record version-specific choices separately. Give each planner its own event marker so neither touches the other's events. If the work planner reads your personal calendar, have it skip the personal planner's own task blocks.
