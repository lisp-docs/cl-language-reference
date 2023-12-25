---
title: "or"
---

# or

import OrMacro from './_or_macro.md';

<OrMacro />

## Expanded Reference: or

<ClLinks  term={"or"}><b>or</b></ClLinks> is defined as a macro because it stops evaluating as soon as any <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> evaluates to something other than <ClLinks  term={"nil"}><b>nil</b></ClLinks>.  If it were defined as a function, every <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> would be evaluated before the function was applied.  As a result of <ClLinks  term={"or"}><b>or</b></ClLinks> not being a function, it can not be used with <ClLinks  term={"apply"}><b>apply</b></ClLinks>.  In order to check that some value of a list is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, the function <ClLinks  term={"some"}><b>some</b></ClLinks> could be used.
