---
name: parallel-me-council
description: Use an evidence-based council of parallel selves to help a user make a reversible, well-tested decision.
version: 1.0.0
triggers:
  - 我很纠结
  - 我要不要
  - 帮我做决定
  - 平行自我委员会
  - 多个版本的我
  - decision council
safety_level: careful
tags:
  - decision-making
  - evidence
  - risk
  - planning
  - reflection
---

# Parallel Me Council Skill / 平行自我委员会

## Purpose

Use this skill when the user is stuck on a meaningful choice and needs a structured decision process rather than vague encouragement. The goal is not to sound dramatic. The goal is to turn indecision into evidence, options, risks, reversible experiments, and an accountable next action.

## When to use

Load this skill before answering when the user asks for help with any of these patterns:

- “我很纠结……”
- “我要不要……”
- “帮我做个决定。”
- “从不同版本的我角度分析。”
- “让平行自我委员会开会。”
- “Should I choose A or B?”
- Any emotionally loaded decision where the user is cycling without a clear next step.

Do not use this skill for pure factual lookup, coding implementation, legal drafting, medical diagnosis, investment recommendations, or emergency safety situations.

## Safety gate

Before forming the council, classify the situation.

### Red safety path

If the user mentions self-harm, violence, abuse, immediate danger, severe medical symptoms, suicidal thoughts, or another urgent safety issue:

1. Do not roleplay a council.
2. Respond calmly and directly.
3. Prioritize immediate safety, local emergency support, trusted people, and professional help.
4. Keep the response brief and practical.

### Professional-boundary path

If the decision involves medical, legal, tax, immigration, contractual, or major financial consequences:

1. Do not present the final answer as professional advice.
2. Use the council to organize facts, questions, risks, and preparation.
3. Recommend consulting a qualified professional before irreversible action.
4. Prefer reversible experiments and information gathering over direct commitment.

### Normal decision path

If neither red safety nor professional-boundary handling applies, run the council protocol below.

## Intake protocol

First decide whether there is enough information.

Ask at most three clarifying questions only when the missing information would change the decision. If the user already gave enough context, proceed without asking.

Critical intake fields:

1. Decision question: what choice is being made?
2. Options: what are the realistic alternatives?
3. Constraints: money, time, health, family, contracts, deadlines, location, energy.
4. Stakes: what becomes worse if the decision is wrong?
5. Reversibility: can the user undo the choice, and at what cost?
6. Evidence: what has actually happened, not just what is feared?
7. Deadline: when must a decision or first action happen?

If information is thin but the user wants an answer anyway, state assumptions explicitly and mark confidence as low.

## Council members

Use five to seven members. Choose the smallest set that covers the decision well.

### Reality Treasurer

Focus: cash, time, energy, health, logistics, obligations, downside protection.

Must ask: “Can the user survive the boring consequences of this choice?”

### Long-Range Self

Focus: identity, compounding effects, opportunity cost, regret over years, future constraints.

Must ask: “Which option still makes sense after the initial emotion fades?”

### Antifragile Explorer

Focus: upside, learning, optionality, experiments, courage, underpriced opportunity.

Must ask: “What small risk could create useful information or growth?”

### Risk Auditor

Focus: hidden assumptions, failure modes, second-order effects, dependencies, black swans.

Must ask: “What would make this plan fail in an obvious but ignored way?”

### Emotional Witness

Focus: fear, desire, exhaustion, resentment, shame, avoidance, honest needs.

Must ask: “What emotion is trying to become a decision?”

### Relationship and Ethics Observer

Focus: promises, trust, affected people, fairness, boundaries, communication costs.

Must ask: “Who pays a cost if the user acts without explaining or negotiating?”

### Action Designer

Focus: next step, test design, decision deadline, rollback signal, measurable output.

Must ask: “What can be done within 24 hours that produces evidence?”

## Required council card format

For each member, output exactly these fields:

- **Position**: one sentence.
- **Evidence For**: facts or plausible observations supporting the position.
- **Evidence Against**: facts or plausible observations weakening the position.
- **Largest Risk**: the most important downside or blind spot.
- **Reversibility**: high, medium, or low, with one reason.
- **Vote**: one of `act_now`, `prepare`, `wait`, `reject`, `explore`.

Never let every member agree without tension. At least one member must provide a serious counterargument.

## Vote definitions

- `act_now`: take a concrete step now because cost is low and evidence is sufficient.
- `prepare`: build conditions before committing.
- `wait`: delay the irreversible part while collecting missing information.
- `reject`: do not proceed because downside dominates or values conflict.
- `explore`: run a small reversible experiment.

## Final decision protocol

After the member cards, produce a final decision with these sections:

1. **Council Verdict**: the recommended direction and confidence level.
2. **Why This Beats the Alternatives**: compare against at least two alternatives.
3. **Uncertainties**: what the council still does not know.
4. **Reversal Triggers**: specific events that would change the recommendation.
5. **24-Hour Minimum Action**: one small action that creates evidence.
6. **7-Day Validation Plan**: day-by-day or milestone-based test plan.
7. **Rollback Plan**: how to stop or reverse without pretending the experiment failed morally.
8. **Plain-Language Summary**: three concise bullets.

## Quality rules

- Be concrete. Avoid generic advice such as “follow your heart” or “make a pros and cons list” unless it is embedded in a specific action.
- Separate facts, interpretations, and emotions.
- Do not inflate confidence. If evidence is weak, say so.
- Prefer reversible experiments when stakes are high.
- Preserve user agency. The council recommends; the user decides.
- Do not invent biographical facts. If unknown, label assumptions.
- Do not shame hesitation. Treat hesitation as data.
- Make the first action small enough to happen today.

## Output template

```markdown
# 平行自我委员会

## Intake

- Decision:
- Options:
- Constraints:
- Stakes:
- Reversibility:
- Confidence:

## Council

### Reality Treasurer

- **Position**:
- **Evidence For**:
- **Evidence Against**:
- **Largest Risk**:
- **Reversibility**:
- **Vote**:

### Long-Range Self

...

## Vote Tally

- act_now:
- prepare:
- wait:
- reject:
- explore:

## Council Verdict

## Why This Beats the Alternatives

## Uncertainties

## Reversal Triggers

## 24-Hour Minimum Action

## 7-Day Validation Plan

## Rollback Plan

## Plain-Language Summary
```

## Example interaction policy

If the user says, “我要不要辞职去做自己的产品？” and gives no context, ask up to three questions:

1. 你现在有多少个月生活费缓冲？
2. 这个产品有没有真实用户或付费验证？
3. 你最晚什么时候必须做决定？

If the user says, “不用问，直接给我框架”， proceed with assumptions and mark confidence low.

## Failure modes to avoid

- Turning the output into theatrical roleplay without evidence.
- Pretending to have called external services.
- Claiming certainty from thin context.
- Giving high-stakes professional advice.
- Producing a long essay with no action step.
- Making the user choose between courage and safety as if only one matters.
