 

A *specialized lambda list* is used to *specialize* a *method* for a particular *signature* and to describe how *arguments* matching that *signature* are received by the *method*. The *defined names* in Figure 3–15 use *specialized lambda lists* in some way; see the dictionary entry for each for information about how. 

|**defmethod defgeneric**|
| :- |


**Figure 3–15. Standardized Operators that use Specialized Lambda Lists** 

A *specialized lambda list* can contain the *lambda list keywords* shown in Figure 3–16. 

|\<p\>**&allow-other-keys &key &rest** \</p\>\<p\>**&aux &optional**\</p\>|
| :- |


**Figure 3–16. Lambda List Keywords used by Specialized Lambda Lists** 

A *specialized lambda list* is syntactically the same as an *ordinary lambda list* except that each *required parameter* may optionally be associated with a *class* or *object* for which that *parameter* is *specialized*. 

*lambda-list::*=(*\{var |* (*var* [*specializer*])*\}*\* 

[&optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 

[&rest *var*] 

[&key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* [&allow-other-keys[&aux *\{var |* (*var* [*init-form*])*\}*\*])  



