 



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> is used by <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> has the following syntax: 



*lambda-list::*=(*\{var\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* 



[&amp;allow-other-keys]] 



[&amp;environment *var*] 



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> can contain the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> shown in Figure 3–19. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;environment &amp;optional**</p>|

| :- |





**Figure 3–19. Lambda List Keywords used by Defsetf Lambda Lists** 



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> differs from an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> only in that it does not permit the use of **&amp;aux**, and that it permits use of **&amp;environment**, which introduces an <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> . 



