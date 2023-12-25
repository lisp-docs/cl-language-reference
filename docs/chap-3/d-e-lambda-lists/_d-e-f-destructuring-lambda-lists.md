 



A *destructuring lambda list* is used by <DictionaryLink styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink>. 



*Destructuring lambda lists* are closely related to *macro lambda lists*; see Section 3.4.4 (Macro Lambda Lists). A *destructuring lambda list* can contain all of the *lambda list keywords* listed for *macro lambda lists* except for **&amp;environment**, and supports destructuring in the same way. Inner *lambda lists* nested within a *macro lambda list* have the syntax of *destructuring lambda lists*. 



A *destructuring lambda list* has the following syntax: 



*reqvars::*=*\{var | ↓lambda-list\}*\* 



*optvars::*=[&amp;optional *\{var |* (*\{var | ↓lambda-list\}* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



*restvar::*=[*\{*&amp;rest *|* &amp;body*\} \{var | ↓lambda-list\}*] 



*keyvars::*=[&amp;key *\{var |* (*\{var |* (*keyword-name \{var | ↓lambda-list\}*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&amp;allow-other-keys]] 



*auxvars::*=[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*] 



*envvar::*=[&amp;environment *var*] 



*wholevar::*=[&amp;whole *var*] 



*lambda-list::*=(*↓wholevar ↓reqvars ↓optvars ↓restvar ↓keyvars ↓auxvars*) *|* 



(*↓wholevar ↓reqvars ↓optvars* . *var*) 



