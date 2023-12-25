 



A *specialized lambda list* is used to <GlossaryTerm styled={true} term={"specialize"}><i>specialize</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for a particular <GlossaryTerm styled={true} term={"signature"}><i>signature</i></GlossaryTerm> and to describe how <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> matching that <GlossaryTerm styled={true} term={"signature"}><i>signature</i></GlossaryTerm> are received by the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. The *defined names* in Figure 3–15 use *specialized lambda lists* in some way; see the dictionary entry for each for information about how. 



|**defmethod defgeneric**|

| :- |





**Figure 3–15. Standardized Operators that use Specialized Lambda Lists** 



A *specialized lambda list* can contain the *lambda list keywords* shown in Figure 3–16. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;aux &amp;optional**</p>|

| :- |





**Figure 3–16. Lambda List Keywords used by Specialized Lambda Lists** 



A *specialized lambda list* is syntactically the same as an *ordinary lambda list* except that each *required parameter* may optionally be associated with a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> for which that <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"specialized"}><i>specialized</i></GlossaryTerm>. 



*lambda-list::*=(*\{var |* (*var* [*specializer*])*\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&amp;allow-other-keys[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*])  







