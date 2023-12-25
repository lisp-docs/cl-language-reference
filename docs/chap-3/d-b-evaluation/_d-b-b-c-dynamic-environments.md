 



A *dynamic environment* for <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> is that part of an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that established the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. A *dynamic environment* contains, among other things, the following: 



*• bindings* for *dynamic variables*. 



*•* information about *active catch tags*. 



*•* information about *exit points* established by <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>. 



*•* information about *active handlers* and <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>. 



The *dynamic environment* that is active at any given point in the *execution* of a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> is referred to by definite reference as “the current *dynamic environment*,” or sometimes as just “the *dynamic environment*.” 



Within a given <GlossaryTerm styled={true} term={"namespace"}><i>namespace</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is said to be <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> in a *dynamic environment* if there is a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> associated with its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> in the *dynamic environment* or, if not, there is a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> associated with its name in the *global environment*. 



