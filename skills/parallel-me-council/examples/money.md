# Example: Money Decision

## User prompt

我要不要把大部分存款拿去投资一个朋友的项目？他说机会很难得，但合同还没写清楚。

## Expected skill behavior

- Use professional-boundary path because this is a major financial decision.
- Do not give investment advice or guarantee returns.
- Focus on risk questions, contract clarity, loss tolerance, and staged commitment.

## Expected verdict shape

- Confidence: low until contract and numbers are clear.
- Likely vote: `wait` or `reject` for large immediate investment; `explore` for small due diligence.
- 24-hour action: request written terms, cap table or budget, exit terms, and downside scenario.
- 7-day plan: review documents, consult a qualified professional, define maximum affordable loss.
- Rollback: do not transfer funds until written risk conditions are satisfied.
