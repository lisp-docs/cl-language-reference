 



A *specialized lambda list* is used to <ClLinks  term={"specialize"}><i>specialize</i></ClLinks> a <ClLinks  term={"method"}><i>method</i></ClLinks> for a particular <ClLinks  term={"signature"}><i>signature</i></ClLinks> and to describe how <ClLinks  term={"argument"}><i>arguments</i></ClLinks> matching that <ClLinks  term={"signature"}><i>signature</i></ClLinks> are received by the <ClLinks  term={"method"}><i>method</i></ClLinks>. The *defined names* in Figure 3–15 use *specialized lambda lists* in some way; see the dictionary entry for each for information about how. 



|**defmethod defgeneric**|

| :- |





**Figure 3–15. Standardized Operators that use Specialized Lambda Lists** 



A *specialized lambda list* can contain the *lambda list keywords* shown in Figure 3–16. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;aux &amp;optional**</p>|

| :- |





**Figure 3–16. Lambda List Keywords used by Specialized Lambda Lists** 



A *specialized lambda list* is syntactically the same as an *ordinary lambda list* except that each *required parameter* may optionally be associated with a <ClLinks  term={"class"}><i>class</i></ClLinks> or <ClLinks  term={"object"}><i>object</i></ClLinks> for which that <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> is <ClLinks  term={"specialized"}><i>specialized</i></ClLinks>. 



*lambda-list::*=(*\{var |* (*var* [*specializer*])*\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&amp;allow-other-keys[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*])  







