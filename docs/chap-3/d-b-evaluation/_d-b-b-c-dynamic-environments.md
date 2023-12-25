 



A *dynamic environment* for <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> is that part of an <ClLinks  term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks  term={"binding"}><i>bindings</i></ClLinks> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of the <ClLinks  term={"form"}><i>form</i></ClLinks> that established the <ClLinks  term={"binding"}><i>binding</i></ClLinks>. A *dynamic environment* contains, among other things, the following: 



*• bindings* for *dynamic variables*. 



*•* information about *active catch tags*. 



*•* information about *exit points* established by <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks>. 



*•* information about *active handlers* and <ClLinks  term={"restart"}><i>restarts</i></ClLinks>. 



The *dynamic environment* that is active at any given point in the *execution* of a <ClLinks  term={"program"}><i>program</i></ClLinks> is referred to by definite reference as “the current *dynamic environment*,” or sometimes as just “the *dynamic environment*.” 



Within a given <ClLinks  term={"namespace"}><i>namespace</i></ClLinks>, a <ClLinks  term={"name"}><i>name</i></ClLinks> is said to be <ClLinks  term={"bound"}><i>bound</i></ClLinks> in a *dynamic environment* if there is a <ClLinks  term={"binding"}><i>binding</i></ClLinks> associated with its <ClLinks  term={"name"}><i>name</i></ClLinks> in the *dynamic environment* or, if not, there is a <ClLinks  term={"binding"}><i>binding</i></ClLinks> associated with its name in the *global environment*. 



