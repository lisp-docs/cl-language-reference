 



A <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> is used to <GlossaryTerm  term={"specialize"}><i>specialize</i></GlossaryTerm> a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for a particular <GlossaryTerm  term={"signature"}><i>signature</i></GlossaryTerm> and to describe how <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> matching that <GlossaryTerm  term={"signature"}><i>signature</i></GlossaryTerm> are received by the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> in Figure 3–15 use <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda lists</i></GlossaryTerm> in some way; see the dictionary entry for each for information about how. 



|**defmethod defgeneric**|

| :- |





**Figure 3–15. Standardized Operators that use Specialized Lambda Lists** 



A <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> can contain the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> shown in Figure 3–16. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;aux &amp;optional**</p>|

| :- |





**Figure 3–16. Lambda List Keywords used by Specialized Lambda Lists** 



A <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> is syntactically the same as an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> except that each <GlossaryTerm styled={true} term={"required parameter"}><i>required parameter</i></GlossaryTerm> may optionally be associated with a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> or <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> for which that <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> is <GlossaryTerm  term={"specialized"}><i>specialized</i></GlossaryTerm>. 



*lambda-list::*=(*\{var |* (*var* [*specializer*])*\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&amp;allow-other-keys[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*])  







