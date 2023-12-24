 



A *macro lambda list* is used in describing <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> defined by the <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> in Figure 3–17. 



|<p>**define-compiler-macro defmacro macrolet** </p><p><ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks></p>|

| :- |





**Figure 3–17. Operators that use Macro Lambda Lists** 



With the additional restriction that an *environment parameter* may appear only once (at any of the positions indicated), a *macro lambda list* has the following syntax: 



*reqvars::*=*\{var | ↓pattern\}*\* 



*optvars::*=[&amp;optional *\{var |* (*\{var | ↓pattern\}* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



*restvar::*=[*\{*&amp;rest *|* &amp;body*\} \{var | ↓pattern\}*] 



*keyvars::*=[&amp;key *\{var |* (*\{var |* (*keyword-name \{var | ↓pattern\}*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&amp;allow-other-keys]] 



*auxvars::*=[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*] 



*envvar::*=[&amp;environment *var*] 



*wholevar::*=[&amp;whole *var*] 



*lambda-list::*=(*↓wholevar ↓envvar ↓reqvars ↓envvar ↓optvars ↓envvar* 



*↓restvar ↓envvar ↓keyvars ↓envvar ↓auxvars ↓envvar*) *|* 



(*↓wholevar ↓envvar ↓reqvars ↓envvar ↓optvars ↓envvar* . *var*) 



*pattern::*=(*↓wholevar ↓reqvars ↓optvars ↓restvar ↓keyvars ↓auxvars*) *|* 



(*↓wholevar ↓reqvars ↓optvars* . *var*) 



A *macro lambda list* can contain the *lambda list keywords* shown in Figure 3–18. 



|<p>**&amp;allow-other-keys &amp;environment &amp;rest** </p><p>**&amp;aux &amp;key &amp;whole** </p><p>**&amp;body &amp;optional**</p>|

| :- |





**Figure 3–18. Lambda List Keywords used by Macro Lambda Lists**  







*Optional parameters* (introduced by **&amp;optional**) and *keyword parameters* (introduced by **&amp;key**) can be supplied in a *macro lambda list*, just as in an *ordinary lambda list*. Both may contain default initialization forms and *supplied-p parameters*. 



**&amp;body** is identical in function to **&amp;rest**, but it can be used to inform certain output-formatting and editing functions that the remainder of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is treated as a body, and should be indented accordingly. Only one of **&amp;body** or **&amp;rest** can be used at any particular level; see Section 3.4.4.1 (Destructuring by Lambda Lists). **&amp;body** can appear at any level of a *macro lambda list*; for details, see Section 3.4.4.1 (Destructuring by Lambda Lists). 



**&amp;whole** is followed by a single variable that is bound to the entire macro-call form; this is the value that the *macro function* receives as its first argument. If **&amp;whole** and a following variable appear, they must appear first in *lambda-list*, before any other parameter or *lambda list keyword*. **&amp;whole** can appear at any level of a *macro lambda list*. At inner levels, the **&amp;whole** variable is bound to 



the corresponding part of the argument, as with **&amp;rest**, but unlike **&amp;rest**, other arguments are also allowed. The use of **&amp;whole** does not affect the pattern of arguments specified. 



**&amp;environment** is followed by a single variable that is bound to an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> representing the *lexical environment* in which the macro call is to be interpreted. This <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> should be used with <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks>, <ClLinks styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks>, and <ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> (for example) in computing the expansion of the macro, to ensure that any *lexical bindings* or definitions established in the *compilation environment* are taken into account. **&amp;environment** can only appear at the top level of a *macro lambda list*, and can only appear once, but can appear anywhere in that list; the **&amp;environment** <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> along with **&amp;whole** before any other <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> in the *lambda list*, regardless of where **&amp;environment** appears in the *lambda list*. The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is bound to the *environment parameter* has *dynamic extent*. 



Destructuring allows a *macro lambda list* to express the structure of a macro call syntax. If no *lambda list keywords* appear, then the *macro lambda list* is a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> containing parameter names at the leaves. The pattern and the *macro form* must have compatible *tree structure*; that is, their *tree structure* must be equivalent, or it must differ only in that some *leaves* of the pattern match *non-atomic objects* of the *macro form*. For information about error detection in this <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks>, see Section 3.5.1.7 (Destructuring Mismatch). 



A destructuring *lambda list* (whether at top level or embedded) can be dotted, ending in a parameter name. This situation is treated exactly as if the parameter name that ends the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> had appeared preceded by **&amp;rest**. 



It is permissible for a *macro form* (or a <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks> of a *macro form*) to be a *dotted list* only when (... &amp;rest var) or (... . var) is used to match it. It is the responsibility of the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> to recognize and deal with such situations. 



