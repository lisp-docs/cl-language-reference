 



A *specialized lambda list* is used to <ClLinks styled={true} term={"specialize"}><i>specialize</i></ClLinks> a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for a particular <ClLinks styled={true} term={"signature"}><i>signature</i></ClLinks> and to describe how <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> matching that <ClLinks styled={true} term={"signature"}><i>signature</i></ClLinks> are received by the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. The *defined names* in Figure 3–15 use *specialized lambda lists* in some way; see the dictionary entry for each for information about how. 



|**defmethod defgeneric**|

| :- |





**Figure 3–15. Standardized Operators that use Specialized Lambda Lists** 



A *specialized lambda list* can contain the *lambda list keywords* shown in Figure 3–16. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;aux &amp;optional**</p>|

| :- |





**Figure 3–16. Lambda List Keywords used by Specialized Lambda Lists** 



A *specialized lambda list* is syntactically the same as an *ordinary lambda list* except that each *required parameter* may optionally be associated with a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> or <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> for which that <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is <ClLinks styled={true} term={"specialized"}><i>specialized</i></ClLinks>. 



*lambda-list::*=(*\{var |* (*var* [*specializer*])*\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&amp;allow-other-keys[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*])  







