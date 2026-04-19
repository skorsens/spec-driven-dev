## Prompt 1.1

We are writing AgentClinic, a place for AI agents to get relief from their humans. Look in the README.md for input from stakeholders.

## Prompt 1.2

Let's create a "constitution" in a specs directory:
- `mission.md`
- `tech-stack.md`
- `roadmap.md` for high-level implementation order, in very small phases of work.

Important: You *must* use your AskUserQuestion tool, grouped on these 3, before writing to disk.

## Prompt 1.3

Use server-side TypeScript and recommend a framework.

## Prompt 1.4

Add a target audience to the mission:
- Course students learning spec-driven development with AI coding agents
- Developers giving AI coding demos at conference booths

## Prompt 1.5

In tech stack add that we use SQLite.

## Prompt 2.1

Find the phase 1 (feature) on specs/roadmap.md and make a branch, ask me about the feature spec.
Create:
 - A new directory YYYY-MM-DD-feature-name under specs for this feature work
 - In there:
  - `plan.md` as a series of numbered task groups.
  - `requirements.md` for the scope, decisions, context
  - `validation.md` for how to know the implementation succeeded and can be merged

Refer to specs/mission.md and specs/tech-stack.md for guidance.

Important: You *must* use your AskUserQuestion tool, grouped on these 3, before writing to disk.

## Prompt 3.1

Implement the remaining task groups.

## Prompt 3.2

Add a task group to the plan to have a minimal AgentClinic home page and update the rest of the feature spec to be in sync.

## Prompt 4.1

Update specs/2026-04-18-project-setup/plan.md and implementation of a main layout component with a header/main/footer as three subcomponents. Make a CSS file, import it, and link to it.

## Prompt 4.2

Update the spec to capture that the header, footer, and main components should be in their own files.

## Prompt 5.1

Update the specs that the tests shall be in a separate folder outside the deployed code. Capture this decision for the current feature all next features in this project.

## Prompt 5.2

Aling the code to this decision

## Prompt 5.3

I want to keep a CHANGELOG.md in the project root, with headings for dates. If no changelog, examine git commits and add bullets for each date. Then, as we work, we will manually invoke this skill before merging. Help me write a skill for this.

## Prompt 5.4

Use your changelog skill to update the changelog.

