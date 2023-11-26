 

A *macro lambda list* is used in describing *macros* defined by the *operators* in Figure 3–17. 

|\<p\>**define-compiler-macro defmacro macrolet** \</p\>\<p\>**define-setf-expander**\</p\>|
| :- |


**Figure 3–17. Operators that use Macro Lambda Lists** 

With the additional restriction that an *environment parameter* may appear only once (at any of the positions indicated), a *macro lambda list* has the following syntax: 

*reqvars::*=*\{var | ↓pattern\}*\* 

*optvars::*=[&optional *\{var |* (*\{var | ↓pattern\}* [*init-form* [*supplied-p-parameter*]])*\}*\*] 

*restvar::*=[*\{*&rest *|* &body*\} \{var | ↓pattern\}*] 

*keyvars::*=[&key *\{var |* (*\{var |* (*keyword-name \{var | ↓pattern\}*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&allow-other-keys]] 

*auxvars::*=[&aux *\{var |* (*var* [*init-form*])*\}*\*] 

*envvar::*=[&environment *var*] 

*wholevar::*=[&whole *var*] 

*lambda-list::*=(*↓wholevar ↓envvar ↓reqvars ↓envvar ↓optvars ↓envvar* 

*↓restvar ↓envvar ↓keyvars ↓envvar ↓auxvars ↓envvar*) *|* 

(*↓wholevar ↓envvar ↓reqvars ↓envvar ↓optvars ↓envvar* . *var*) 

*pattern::*=(*↓wholevar ↓reqvars ↓optvars ↓restvar ↓keyvars ↓auxvars*) *|* 

(*↓wholevar ↓reqvars ↓optvars* . *var*) 

A *macro lambda list* can contain the *lambda list keywords* shown in Figure 3–18. 

|\<p\>**&allow-other-keys &environment &rest** \</p\>\<p\>**&aux &key &whole** \</p\>\<p\>**&body &optional**\</p\>|
| :- |


**Figure 3–18. Lambda List Keywords used by Macro Lambda Lists**  



*Optional parameters* (introduced by **&optional**) and *keyword parameters* (introduced by **&key**) can be supplied in a *macro lambda list*, just as in an *ordinary lambda list*. Both may contain default initialization forms and *supplied-p parameters*. 

**&body** is identical in function to **&rest**, but it can be used to inform certain output-formatting and editing functions that the remainder of the *form* is treated as a body, and should be indented accordingly. Only one of **&body** or **&rest** can be used at any particular level; see Section 3.4.4.1 (Destructuring by Lambda Lists). **&body** can appear at any level of a *macro lambda list*; for details, see Section 3.4.4.1 (Destructuring by Lambda Lists). 

**&whole** is followed by a single variable that is bound to the entire macro-call form; this is the value that the *macro function* receives as its first argument. If **&whole** and a following variable appear, they must appear first in *lambda-list*, before any other parameter or *lambda list keyword*. **&whole** can appear at any level of a *macro lambda list*. At inner levels, the **&whole** variable is bound to 

the corresponding part of the argument, as with **&rest**, but unlike **&rest**, other arguments are also allowed. The use of **&whole** does not affect the pattern of arguments specified. 

**&environment** is followed by a single variable that is bound to an *environment* representing the *lexical environment* in which the macro call is to be interpreted. This *environment* should be used with **macro-function**, **get-setf-expansion**, **compiler-macro-function**, and **macroexpand** (for example) in computing the expansion of the macro, to ensure that any *lexical bindings* or definitions established in the *compilation environment* are taken into account. **&environment** can only appear at the top level of a *macro lambda list*, and can only appear once, but can appear anywhere in that list; the **&environment** *parameter* is *bound* along with **&whole** before any other *variables* in the *lambda list*, regardless of where **&environment** appears in the *lambda list*. The *object* that is bound to the *environment parameter* has *dynamic extent*. 

Destructuring allows a *macro lambda list* to express the structure of a macro call syntax. If no *lambda list keywords* appear, then the *macro lambda list* is a *tree* containing parameter names at the leaves. The pattern and the *macro form* must have compatible *tree structure*; that is, their *tree structure* must be equivalent, or it must differ only in that some *leaves* of the pattern match *non-atomic objects* of the *macro form*. For information about error detection in this *situation*, see Section 3.5.1.7 (Destructuring Mismatch). 

A destructuring *lambda list* (whether at top level or embedded) can be dotted, ending in a parameter name. This situation is treated exactly as if the parameter name that ends the *list* had appeared preceded by **&rest**. 

It is permissible for a *macro form* (or a *subexpression* of a *macro form*) to be a *dotted list* only when (... &rest var) or (... . var) is used to match it. It is the responsibility of the *macro* to recognize and deal with such situations. 

