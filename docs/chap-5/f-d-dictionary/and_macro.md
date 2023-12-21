---
title: "and"
---

# and

import AndMacro from './_and_macro.md';

<AndMacro />

## Expanded Reference: and

**and** is defined as a macro because it stops evaluating as soon as any *form* evaluates to **nil**.  If it were defined as a function, every *form* would be evaluated before the function was applied.  As a result of **and** not being a function, it can not be used with **apply**.  In order to check that every value of a list is *true*, the function **every** could be used.
