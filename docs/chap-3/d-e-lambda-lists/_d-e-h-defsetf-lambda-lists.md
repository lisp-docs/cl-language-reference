**3.4.7 Defsetf Lambda Lists** 

A *defsetf lambda list* is used by **defsetf**. 

A *defsetf lambda list* has the following syntax: 

*lambda-list::*=(*\{var\}*\* 

[&optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 

[&rest *var*] 

[&key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* 

[&allow-other-keys]] 

[&environment *var*] 

A *defsetf lambda list* can contain the *lambda list keywords* shown in Figure 3–19. 

|\<p\>**&allow-other-keys &key &rest** \</p\>\<p\>**&environment &optional**\</p\>|
| :- |


**Figure 3–19. Lambda List Keywords used by Defsetf Lambda Lists** 

A *defsetf lambda list* differs from an *ordinary lambda list* only in that it does not permit the use of **&aux**, and that it permits use of **&environment**, which introduces an *environment parameter* . 

