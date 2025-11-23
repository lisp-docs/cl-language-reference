A <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> for <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> is that part of an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that established the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> contains, among other things, the following:



*• bindings* for <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>.
*•* information about *active catch tags*.
*•* information about <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> established by `unwind-protect`.
*•* information about *active handlers* and <GlossaryTerm  term={"restart"}><i>restarts</i></GlossaryTerm>.

The <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> that is active at any given point in the *execution* of a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> is referred to by definite reference as “the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>,” or sometimes as just “the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>.”

Within a given <GlossaryTerm  term={"namespace"}><i>namespace</i></GlossaryTerm>, a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is said to be <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> if there is a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> associated with its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> or, if not, there is a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> associated with its name in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>.

