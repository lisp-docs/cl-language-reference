 



A <GlossaryTerm styled={true} term={"destructuring lambda list"}><i>destructuring lambda list</i></GlossaryTerm> is used by <ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks>. 



<GlossaryTerm styled={true} term={"destructuring lambda list"}><i>Destructuring lambda lists</i></GlossaryTerm> are closely related to <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda lists</i></GlossaryTerm>; see Section 3.4.4 (Macro Lambda Lists). A <GlossaryTerm styled={true} term={"destructuring lambda list"}><i>destructuring lambda list</i></GlossaryTerm> can contain all of the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> listed for <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda lists</i></GlossaryTerm> except for **&amp;environment**, and supports destructuring in the same way. Inner <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm> nested within a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> have the syntax of <GlossaryTerm styled={true} term={"destructuring lambda list"}><i>destructuring lambda lists</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"destructuring lambda list"}><i>destructuring lambda list</i></GlossaryTerm> has the following syntax: 



*reqvars::*=*\{var | ↓lambda-list\}*\* 



*optvars::*=[&amp;optional *\{var |* (*\{var | ↓lambda-list\}* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



*restvar::*=[*\{*&amp;rest *|* &amp;body*\} \{var | ↓lambda-list\}*] 



*keyvars::*=[&amp;key *\{var |* (*\{var |* (*keyword-name \{var | ↓lambda-list\}*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&amp;allow-other-keys]] 



*auxvars::*=[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*] 



*envvar::*=[&amp;environment *var*] 



*wholevar::*=[&amp;whole *var*] 



*lambda-list::*=(*↓wholevar ↓reqvars ↓optvars ↓restvar ↓keyvars ↓auxvars*) *|* 



(*↓wholevar ↓reqvars ↓optvars* . *var*) 



