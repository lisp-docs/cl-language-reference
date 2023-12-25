 



A *defsetf lambda list* is used by <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink>. 



A *defsetf lambda list* has the following syntax: 



*lambda-list::*=(*\{var\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* 



[&amp;allow-other-keys]] 



[&amp;environment *var*] 



A *defsetf lambda list* can contain the *lambda list keywords* shown in Figure 3–19. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;environment &amp;optional**</p>|

| :- |





**Figure 3–19. Lambda List Keywords used by Defsetf Lambda Lists** 



A *defsetf lambda list* differs from an *ordinary lambda list* only in that it does not permit the use of **&amp;aux**, and that it permits use of **&amp;environment**, which introduces an *environment parameter* . 



