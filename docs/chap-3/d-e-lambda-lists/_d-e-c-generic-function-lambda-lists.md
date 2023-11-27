 

A *generic function lambda list* is used to describe the overall shape of the argument list to be accepted by a *generic function*. Individual *method signatures* might contribute additional *keyword parameters* to the *lambda list* of the *effective method*. 

A *generic function lambda list* is used by **defgeneric**. 

A *generic function lambda list* has the following syntax: 

*lambda-list::*=(*&#123;var&#125;*\* 

[&optional *&#123;var |* (*var*)*&#125;*\*] 

[&rest *var*] 

[&key *&#123;var |* (*&#123;var |* (*keyword-name var*)*&#125;*)*&#125;*\* 

[&allow-other-keys]]) 

A *generic function lambda list* can contain the *lambda list keywords* shown in Figure 3–14. 

|&#60;p&#62;**&allow-other-keys &optional** &#60;/p&#62;&#60;p&#62;**&key &rest**&#60;/p&#62;|
| :- |


**Figure 3–14. Lambda List Keywords used by Generic Function Lambda Lists** Evaluation and Compilation **3–39**





A *generic function lambda list* differs from an *ordinary lambda list* in the following ways: 

**Required arguments** 

Zero or more *required parameters* must be specified. 

**Optional and keyword arguments** 

*Optional parameters* and *keyword parameters* may not have default initial value forms nor 

use supplied-p parameters. 

**Use of &aux** 

The use of **&aux** is not allowed. 

