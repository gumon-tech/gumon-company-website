# Gumon UTM Convention Spec (New IA)

Last updated: February 13, 2026

## Objective
- Standardize campaign tracking for the new core landing pages
- Keep attribution consistent across GA4 / GTM / PostHog

## Required UTM Parameters
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`

## Optional
- `utm_term`
- `utm_id`

## Naming Rules
- Lowercase only
- Use `-` to separate words
- No spaces or special chars
- Keep campaign names stable for full lifecycle

## Landing Page Policy
Campaigns must land on one of these pages:
- `/platform`
- `/developers`
- `/partners`
- `/resources`
- `/company`
- `/contact`

## URL Examples
- `https://web.gumon.dev/platform?utm_source=linkedin&utm_medium=paid-social&utm_campaign=2026q1-demandgen-platform-awareness&utm_content=singleimage-v1-feed-a`
- `https://web.gumon.dev/developers?utm_source=google&utm_medium=cpc&utm_campaign=2026q1-demandgen-developer-onboarding&utm_content=textad-v2-top&utm_term=microservices-platform`
- `https://web.gumon.dev/partners?utm_source=newsletter&utm_medium=email&utm_campaign=2026q1-partner-expansion&utm_content=cta-primary-top`

## QA Checklist
- URL has required UTMs
- Landing page matches message intent
- Values follow naming rules
- Test click verified in GA4 Realtime

## Common Mistakes
- Reusing one campaign name for unrelated objectives
- Sending technical campaign to non-technical page
- Missing `utm_content`
