 



A <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> for <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> is that part of an <ClLinks  term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks  term={"binding"}><i>bindings</i></ClLinks> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of the <ClLinks  term={"form"}><i>form</i></ClLinks> that established the <ClLinks  term={"binding"}><i>binding</i></ClLinks>. A <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> contains, among other things, the following: 



*• bindings* for <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>. 



*•* information about *active catch tags*. 



*•* information about <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> established by <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks>. 



*•* information about *active handlers* and <ClLinks  term={"restart"}><i>restarts</i></ClLinks>. 



The <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> that is active at any given point in the *execution* of a <ClLinks  term={"program"}><i>program</i></ClLinks> is referred to by definite reference as “the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>,” or sometimes as just “the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>.” 



Within a given <ClLinks  term={"namespace"}><i>namespace</i></ClLinks>, a <ClLinks  term={"name"}><i>name</i></ClLinks> is said to be <ClLinks  term={"bound"}><i>bound</i></ClLinks> in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> if there is a <ClLinks  term={"binding"}><i>binding</i></ClLinks> associated with its <ClLinks  term={"name"}><i>name</i></ClLinks> in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> or, if not, there is a <ClLinks  term={"binding"}><i>binding</i></ClLinks> associated with its name in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



