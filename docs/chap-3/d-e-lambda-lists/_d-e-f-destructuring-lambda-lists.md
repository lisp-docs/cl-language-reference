**3.4.5 Destructuring Lambda Lists** 

A *destructuring lambda list* is used by **destructuring-bind**. 

*Destructuring lambda lists* are closely related to *macro lambda lists*; see Section 3.4.4 (Macro Lambda Lists). A *destructuring lambda list* can contain all of the *lambda list keywords* listed for *macro lambda lists* except for **&environment**, and supports destructuring in the same way. Inner *lambda lists* nested within a *macro lambda list* have the syntax of *destructuring lambda lists*. 

A *destructuring lambda list* has the following syntax: 

*reqvars::*=*\{var | ↓lambda-list\}*\* 

*optvars::*=[&optional *\{var |* (*\{var | ↓lambda-list\}* [*init-form* [*supplied-p-parameter*]])*\}*\*] 

*restvar::*=[*\{*&rest *|* &body*\} \{var | ↓lambda-list\}*] 

*keyvars::*=[&key *\{var |* (*\{var |* (*keyword-name \{var | ↓lambda-list\}*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&allow-other-keys]] 

*auxvars::*=[&aux *\{var |* (*var* [*init-form*])*\}*\*] 

*envvar::*=[&environment *var*] 

*wholevar::*=[&whole *var*] 

*lambda-list::*=(*↓wholevar ↓reqvars ↓optvars ↓restvar ↓keyvars ↓auxvars*) *|* 

(*↓wholevar ↓reqvars ↓optvars* . *var*) 

