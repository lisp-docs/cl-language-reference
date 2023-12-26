 



A <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> is used in describing <ClLinks  term={"macro"}><i>macros</i></ClLinks> defined by the <ClLinks  term={"operator"}><i>operators</i></ClLinks> in Figure 3–17. 



|<p>**define-compiler-macro defmacro macrolet** </p><p><DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink></p>|

| :- |





**Figure 3–17. Operators that use Macro Lambda Lists** 



With the additional restriction that an <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> may appear only once (at any of the positions indicated), a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> has the following syntax: 



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



A <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> can contain the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> shown in Figure 3–18. 



|<p>**&amp;allow-other-keys &amp;environment &amp;rest** </p><p>**&amp;aux &amp;key &amp;whole** </p><p>**&amp;body &amp;optional**</p>|

| :- |





**Figure 3–18. Lambda List Keywords used by Macro Lambda Lists**  







<GlossaryTerm styled={true} term={"optional parameter"}><i>Optional parameters</i></GlossaryTerm> (introduced by **&amp;optional**) and <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> (introduced by **&amp;key**) can be supplied in a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>, just as in an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. Both may contain default initialization forms and <GlossaryTerm styled={true} term={"supplied-p parameter"}><i>supplied-p parameters</i></GlossaryTerm>. 



**&amp;body** is identical in function to **&amp;rest**, but it can be used to inform certain output-formatting and editing functions that the remainder of the <ClLinks  term={"form"}><i>form</i></ClLinks> is treated as a body, and should be indented accordingly. Only one of **&amp;body** or **&amp;rest** can be used at any particular level; see Section 3.4.4.1 (Destructuring by Lambda Lists). **&amp;body** can appear at any level of a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>; for details, see Section 3.4.4.1 (Destructuring by Lambda Lists). 



**&amp;whole** is followed by a single variable that is bound to the entire macro-call form; this is the value that the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> receives as its first argument. If **&amp;whole** and a following variable appear, they must appear first in *lambda-list*, before any other parameter or <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keyword</i></GlossaryTerm>. **&amp;whole** can appear at any level of a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>. At inner levels, the **&amp;whole** variable is bound to 



the corresponding part of the argument, as with **&amp;rest**, but unlike **&amp;rest**, other arguments are also allowed. The use of **&amp;whole** does not affect the pattern of arguments specified. 



**&amp;environment** is followed by a single variable that is bound to an <ClLinks  term={"environment"}><i>environment</i></ClLinks> representing the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the macro call is to be interpreted. This <ClLinks  term={"environment"}><i>environment</i></ClLinks> should be used with <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>, <DictionaryLink  term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink>, and <DictionaryLink  term={"macroexpand"}><b>macroexpand</b></DictionaryLink> (for example) in computing the expansion of the macro, to ensure that any <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical bindings</i></GlossaryTerm> or definitions established in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> are taken into account. **&amp;environment** can only appear at the top level of a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>, and can only appear once, but can appear anywhere in that list; the **&amp;environment** <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> is <ClLinks  term={"bound"}><i>bound</i></ClLinks> along with **&amp;whole** before any other <ClLinks  term={"variable"}><i>variables</i></ClLinks> in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, regardless of where **&amp;environment** appears in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>. The <ClLinks  term={"object"}><i>object</i></ClLinks> that is bound to the <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. 



Destructuring allows a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> to express the structure of a macro call syntax. If no <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> appear, then the <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> is a <ClLinks  term={"tree"}><i>tree</i></ClLinks> containing parameter names at the leaves. The pattern and the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> must have compatible <GlossaryTerm styled={true} term={"tree structure"}><i>tree structure</i></GlossaryTerm>; that is, their <GlossaryTerm styled={true} term={"tree structure"}><i>tree structure</i></GlossaryTerm> must be equivalent, or it must differ only in that some *leaves* of the pattern match *non-atomic objects* of the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>. For information about error detection in this <ClLinks  term={"situation"}><i>situation</i></ClLinks>, see Section 3.5.1.7 (Destructuring Mismatch). 



A destructuring <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> (whether at top level or embedded) can be dotted, ending in a parameter name. This situation is treated exactly as if the parameter name that ends the <ClLinks  term={"list"}><i>list</i></ClLinks> had appeared preceded by **&amp;rest**. 



It is permissible for a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> (or a <ClLinks  term={"subexpression"}><i>subexpression</i></ClLinks> of a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>) to be a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm> only when (... &amp;rest var) or (... . var) is used to match it. It is the responsibility of the <ClLinks  term={"macro"}><i>macro</i></ClLinks> to recognize and deal with such situations. 



