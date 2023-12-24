 



Two *objects S* (in *source code*) and *C* (in *compiled code*) are defined to be <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if and only if they are both of one of the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> listed here (or defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>) and they both satisfy all additional requirements of <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> indicated for that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



<ClLinks styled={true} term={"number"}><b>number</b></ClLinks> 



Two *numbers S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if they are of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and represent the same mathematical value. 



<ClLinks styled={true} term={"character"}><b>character</b></ClLinks> 



Two *simple characters S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if they have *similar code attributes*. 



<ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> providing additional, *implementation-defined attributes* must define whether and how *non-simple characters* can be regarded as <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> . 



<ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks> 



Two *apparently uninterned symbols S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if their <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> . 



Two <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> symbols *S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if their <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> , and if either *S* is accessible in the *current package* at compile time and *C* is accessible in the *current package* at load time, or *C* is accessible in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the *home package* of *S*. 



(Note that <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is dependent on neither the *current readtable* nor how the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> would parse the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> in the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>.) 



<ClLinks styled={true} term={"package"}><b>package</b></ClLinks> 



Two *packages S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if their <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> . 



Note that although a *package object* is an *externalizable object*, the programmer is responsible for ensuring that the corresponding <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is already in existence when code  







referencing it as a *literal object* is *loaded*. The <ClLinks styled={true} term={"loader"}><i>loader</i></ClLinks> finds the corresponding *package object* as if by calling <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> with that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. An error is signaled by the <ClLinks styled={true} term={"loader"}><i>loader</i></ClLinks> if no <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> exists at load time. 



<ClLinks styled={true} term={"random-state"}><b>random-state</b></ClLinks> 



Two *random states S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if *S* would always produce the same sequence of pseudo-random numbers as a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks><sub>5</sub> of *C* when given as the *random-state argument* to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"random"}><b>random</b></ClLinks>, assuming equivalent *limit arguments* in each case. 



(Note that since *C* has been processed by the *file compiler* , it cannot be used directly as an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"random"}><b>random</b></ClLinks> because <ClLinks styled={true} term={"random"}><b>random</b></ClLinks> would perform a side effect.) 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> 



Two *conses*, *S* and *C*, are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> <sub>2</sub> of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> <sub>2</sub> of *C*, and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of *C*. 



<ClLinks styled={true} term={"array"}><b>array</b></ClLinks> 



Two one-dimensional <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks>, *S* and *C*, are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of *C*, the *actual array element type* of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the *actual array element type* of *C*, and each *active element* of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *C*. 



Two <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> of <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> other than one, *S* and *C*, are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if the <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> of *C*, each <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of *C*, the *actual array element type* of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the *actual array element type* of *C*, and each <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *S* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *C*. 



In addition, if *S* is a *simple array*, then *C* must also be a *simple array*. If *S* is a *displaced array*, has a *fill pointer* , or is *actually adjustable*, *C* is permitted to lack any or all of these qualities. 



<ClLinks styled={true} term={"hash-table"}><b>hash-table</b></ClLinks> 



Two *hash tables S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if they meet the following three requirements: 1. They both have the same test (*e.g.*, they are both <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> *hash tables*). 



2\. There is a unique one-to-one correspondence between the keys of the two *hash tables*, such that the corresponding keys are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> . 



3\. For all keys, the values associated with two corresponding keys are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> . 



If there is more than one possible one-to-one correspondence between the keys of *S* and *C*, the consequences are unspecified. A *conforming program* cannot use a table such as *S* as an *externalizable constant*.  







<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks> 



Two *pathnames S* and *C* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if all corresponding *pathname components* are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> . 



<ClLinks styled={true} term={"function"}><b>function</b></ClLinks> 



<ClLinks styled={true} term={"function"}><i>Functions</i></ClLinks> are not *externalizable objects*. 



<ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks> and <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> 



A general-purpose concept of <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> does not exist for <ClLinks styled={true} term={"structure"}><i>structures</i></ClLinks> and *standard objects*. However, a *conforming program* is permitted to define a <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for any *class K* defined by that <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> that is a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of either <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks> or <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>. The effect of such a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is to define that an *object S* of *type K* in *source code* is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to an *object C* of *type K* in *compiled code* if *C* was constructed from <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> produced by calling <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> on *S*. 



