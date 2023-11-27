 

A *defsetf lambda list* is used by **defsetf**. 

A *defsetf lambda list* has the following syntax: 

*lambda-list::*=(*&#123;var&#125;*\* 

[&optional *&#123;var |* (*var* [*init-form* [*supplied-p-parameter*]])*&#125;*\*] 

[&rest *var*] 

[&key *&#123;var |* (*&#123;var |* (*keyword-name var*)*&#125;* [*init-form* [*supplied-p-parameter*]])*&#125;*\* 

[&allow-other-keys]] 

[&environment *var*] 

A *defsetf lambda list* can contain the *lambda list keywords* shown in Figure 3–19. 

|&#60;p&#62;**&allow-other-keys &key &rest** &#60;/p&#62;&#60;p&#62;**&environment &optional**&#60;/p&#62;|
| :- |


**Figure 3–19. Lambda List Keywords used by Defsetf Lambda Lists** 

A *defsetf lambda list* differs from an *ordinary lambda list* only in that it does not permit the use of **&aux**, and that it permits use of **&environment**, which introduces an *environment parameter* . 

