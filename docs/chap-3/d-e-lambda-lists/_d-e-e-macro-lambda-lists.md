 



A *macro lambda list* is used in describing <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> in Figure 3–17. 



|<p>**define-compiler-macro defmacro macrolet** </p><p><DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink></p>|

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



**&amp;body** is identical in function to **&amp;rest**, but it can be used to inform certain output-formatting and editing functions that the remainder of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is treated as a body, and should be indented accordingly. Only one of **&amp;body** or **&amp;rest** can be used at any particular level; see Section 3.4.4.1 (Destructuring by Lambda Lists). **&amp;body** can appear at any level of a *macro lambda list*; for details, see Section 3.4.4.1 (Destructuring by Lambda Lists). 



**&amp;whole** is followed by a single variable that is bound to the entire macro-call form; this is the value that the *macro function* receives as its first argument. If **&amp;whole** and a following variable appear, they must appear first in *lambda-list*, before any other parameter or *lambda list keyword*. **&amp;whole** can appear at any level of a *macro lambda list*. At inner levels, the **&amp;whole** variable is bound to 



the corresponding part of the argument, as with **&amp;rest**, but unlike **&amp;rest**, other arguments are also allowed. The use of **&amp;whole** does not affect the pattern of arguments specified. 



**&amp;environment** is followed by a single variable that is bound to an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> representing the *lexical environment* in which the macro call is to be interpreted. This <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> should be used with <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>, <DictionaryLink styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink>, and <DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> (for example) in computing the expansion of the macro, to ensure that any *lexical bindings* or definitions established in the *compilation environment* are taken into account. **&amp;environment** can only appear at the top level of a *macro lambda list*, and can only appear once, but can appear anywhere in that list; the **&amp;environment** <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> along with **&amp;whole** before any other <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> in the *lambda list*, regardless of where **&amp;environment** appears in the *lambda list*. The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is bound to the *environment parameter* has *dynamic extent*. 



Destructuring allows a *macro lambda list* to express the structure of a macro call syntax. If no *lambda list keywords* appear, then the *macro lambda list* is a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> containing parameter names at the leaves. The pattern and the *macro form* must have compatible *tree structure*; that is, their *tree structure* must be equivalent, or it must differ only in that some *leaves* of the pattern match *non-atomic objects* of the *macro form*. For information about error detection in this <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm>, see Section 3.5.1.7 (Destructuring Mismatch). 



A destructuring *lambda list* (whether at top level or embedded) can be dotted, ending in a parameter name. This situation is treated exactly as if the parameter name that ends the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> had appeared preceded by **&amp;rest**. 



It is permissible for a *macro form* (or a <GlossaryTerm styled={true} term={"subexpression"}><i>subexpression</i></GlossaryTerm> of a *macro form*) to be a *dotted list* only when (... &amp;rest var) or (... . var) is used to match it. It is the responsibility of the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> to recognize and deal with such situations. 



