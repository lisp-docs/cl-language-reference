 



A <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> can be “associated with” a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> explicitly by <DictionaryLink styled={true} term={"with-condition-restarts"}><b>with-condition-restarts</b></DictionaryLink>, or implicitly by <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>. Such an assocation has *dynamic extent*. 



A single <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> may be associated with several <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> at the same time. A single <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> may have several associated <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> at the same time. 



Active restarts associated with a particular <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> can be detected by *calling* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink>, supplying that <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> as the *condition argument*. Active restarts can also be detected without regard to any associated <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> by calling such a function without a *condition argument*, or by supplying a value of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> for such an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



