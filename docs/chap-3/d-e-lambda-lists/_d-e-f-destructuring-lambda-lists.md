 



A *destructuring lambda list* is used by **destructuring-bind**. 



*Destructuring lambda lists* are closely related to *macro lambda lists*; see Section 3.4.4 (Macro Lambda Lists). A *destructuring lambda list* can contain all of the *lambda list keywords* listed for *macro lambda lists* except for **&environment**, and supports destructuring in the same way. Inner *lambda lists* nested within a *macro lambda list* have the syntax of *destructuring lambda lists*. 



A *destructuring lambda list* has the following syntax: 



*reqvars::*=*\&#123;var | ↓lambda-list\&#125;*\* 



*optvars::*=[&optional *\&#123;var |* (*\&#123;var | ↓lambda-list\&#125;* [*init-form* [*supplied-p-parameter*]])*\&#125;*\*] 



*restvar::*=[*\&#123;*&rest *|* &body*\&#125; \&#123;var | ↓lambda-list\&#125;*] 



*keyvars::*=[&key *\&#123;var |* (*\&#123;var |* (*keyword-name \&#123;var | ↓lambda-list\&#125;*)*\&#125;* [*init-form* [*supplied-p-parameter*]])*\&#125;*\* [&allow-other-keys]] 



*auxvars::*=[&aux *\&#123;var |* (*var* [*init-form*])*\&#125;*\*] 



*envvar::*=[&environment *var*] 



*wholevar::*=[&whole *var*] 



*lambda-list::*=(*↓wholevar ↓reqvars ↓optvars ↓restvar ↓keyvars ↓auxvars*) *|* 



(*↓wholevar ↓reqvars ↓optvars* . *var*) 



