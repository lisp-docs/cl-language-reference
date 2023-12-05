 



A *generic function lambda list* is used to describe the overall shape of the argument list to be accepted by a *generic function*. Individual *method signatures* might contribute additional *keyword parameters* to the *lambda list* of the *effective method*. 



A *generic function lambda list* is used by **defgeneric**. 



A *generic function lambda list* has the following syntax: 



*lambda-list::*=(*\{var\}*\* 



[&amp;optional *\{var |* (*var*)*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}*)*\}*\* 



[&amp;allow-other-keys]]) 



A *generic function lambda list* can contain the *lambda list keywords* shown in Figure 3–14. 



|<p>**&amp;allow-other-keys &amp;optional** </p><p>**&amp;key &amp;rest**</p>|

| :- |





**Figure 3–14. Lambda List Keywords used by Generic Function Lambda Lists** Evaluation and 











A *generic function lambda list* differs from an *ordinary lambda list* in the following ways: 



**Required arguments** 



Zero or more *required parameters* must be specified. 



**Optional and keyword arguments** 



*Optional parameters* and *keyword parameters* may not have default initial value forms nor 



use supplied-p parameters. 



**Use of &amp;aux** 



The use of **&amp;aux** is not allowed. 



