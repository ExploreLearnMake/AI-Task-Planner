# Example: rules for a Maricopa Community Colleges employee

These rules were written for a staff member at one of the Maricopa County Community Colleges (Arizona). They show how employer-specific calendars and schedules can drive the planner. Adopt what applies and adapt the rest to your own institution.

Nothing here is official guidance from the district.

## Calendars used

| Role in the planner | Maricopa calendar | What it's used for |
|---|---|---|
| CLOSURES | **Maricopa Calendar** (district academic calendar, shared to employees) | Closed days, plus the dates that switch the summer schedule |
| ORG_EVENTS | Your **college's employee calendar** | Must-attend college-wide events |

Ask Claude to "list my calendars" to find their IDs; both appear for employees who have subscribed.

## Closed days

The district calendar labels closures in the title, e.g. *"Memorial Day (Colleges Closed)"*.

```text
CLOSED: a CLOSURES event that day whose title contains "Closed", or an all-day out-of-office on WORK.
```

## Summer 4×10 schedule

During summer, Maricopa employees work four 10-hour days with Fridays closed. The district calendar doesn't mark the schedule itself, but it does mark two dates that bracket it, and both always fall on a Friday:

- **"Last Day of Faculty Accountability"** (May): the 4×10 schedule starts the following Monday.
- **"First Day of Faculty Accountability"** (August): the regular schedule resumes the following Monday.

```text
ALT SCHEDULE: SUMMER = from the Monday after the CLOSURES event "Last Day of Faculty Accountability" (a Friday in May) until the day before the Monday after "First Day of Faculty Accountability" (a Friday in August). meta/config.altSchedule start/end override when set. WORKDAY in SUMMER = Mon–Thu. Task window 07:30–17:00, hard stop 17:00.
```

The capture page's **Settings → Alternate schedule** lets you override the dates if the district calendar changes.

## Must-attend college events

College-wide events are easy to miss if your college's calendar isn't shown on your phone. These title keywords catch the big ones:

```text
orgEventKeywords: ["College-Wide Meeting", "College Planning Day", "All Faculty Meeting"]
```

Planning days are typically in October and March. All Faculty Meetings are sometimes held in the evening; the planner copies them to your calendar but never schedules task work in the evening.

## Multi-site travel

Many staff work across campuses and labs. List your home campus as the HOME SITE. The planner adds travel time to in-person events whose location or description names another site, such as another Maricopa college, a downtown lab, or a street address.

```text
HOME SITE: <your main campus>. TRAVEL: 30 min each way.
```

## Data reminders for Maricopa staff

- Keep student records (names, IDs, grades) out of captures. The planner prompts also strip them if they slip in.
- Check current district guidance on AI tools and on connecting a work Google account before setup.
