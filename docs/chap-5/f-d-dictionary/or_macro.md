---
title: "or"
---

# or

import OrMacro from './_or_macro.md';

<OrMacro />

## Expanded Reference: or

<ClLinks styled={true} term={"or"}><b>or</b></ClLinks> is defined as a macro because it stops evaluating as soon as any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> evaluates to something other than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>.  If it were defined as a function, every <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> would be evaluated before the function was applied.  As a result of <ClLinks styled={true} term={"or"}><b>or</b></ClLinks> not being a function, it can not be used with <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks>.  In order to check that some value of a list is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the function <ClLinks styled={true} term={"some"}><b>some</b></ClLinks> could be used.
