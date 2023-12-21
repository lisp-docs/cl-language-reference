---
title: "or"
---

# or

import OrMacro from './_or_macro.md';

<OrMacro />

## Expanded Reference: or

**or** is defined as a macro because it stops evaluating as soon as any *form* evaluates to something other than **nil**.  If it were defined as a function, every *form* would be evaluated before the function was applied.  As a result of **or** not being a function, it can not be used with **apply**.  In order to check that some value of a list is *true*, the function **some** could be used.
