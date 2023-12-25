 



Two *objects S* (in *source code*) and *C* (in *compiled code*) are defined to be <ClLinks  term={"similar"}><i>similar</i></ClLinks> if and only if they are both of one of the <ClLinks  term={"type"}><i>types</i></ClLinks> listed here (or defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>) and they both satisfy all additional requirements of <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> indicated for that <ClLinks  term={"type"}><i>type</i></ClLinks>. 



<ClLinks  term={"number"}><b>number</b></ClLinks> 



Two *numbers S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if they are of the same <ClLinks  term={"type"}><i>type</i></ClLinks> and represent the same mathematical value. 



<ClLinks  term={"character"}><b>character</b></ClLinks> 



Two *simple characters S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if they have *similar code attributes*. 



<ClLinks  term={"implementation"}><i>Implementations</i></ClLinks> providing additional, *implementation-defined attributes* must define whether and how *non-simple characters* can be regarded as <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



<ClLinks  term={"symbol"}><b>symbol</b></ClLinks> 



Two *apparently uninterned symbols S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if their <ClLinks  term={"name"}><i>names</i></ClLinks> are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



Two <ClLinks  term={"interned"}><i>interned</i></ClLinks> symbols *S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if their <ClLinks  term={"name"}><i>names</i></ClLinks> are <ClLinks  term={"similar"}><i>similar</i></ClLinks> , and if either *S* is accessible in the *current package* at compile time and *C* is accessible in the *current package* at load time, or *C* is accessible in the <ClLinks  term={"package"}><i>package</i></ClLinks> that is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the *home package* of *S*. 



(Note that <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is dependent on neither the *current readtable* nor how the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"read"}><b>read</b></ClLinks> would parse the <ClLinks  term={"character"}><i>characters</i></ClLinks> in the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>.) 



<ClLinks  term={"package"}><b>package</b></ClLinks> 



Two *packages S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if their <ClLinks  term={"name"}><i>names</i></ClLinks> are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



Note that although a *package object* is an *externalizable object*, the programmer is responsible for ensuring that the corresponding <ClLinks  term={"package"}><i>package</i></ClLinks> is already in existence when code  







referencing it as a *literal object* is *loaded*. The <ClLinks  term={"loader"}><i>loader</i></ClLinks> finds the corresponding *package object* as if by calling <ClLinks  term={"find-package"}><b>find-package</b></ClLinks> with that <ClLinks  term={"name"}><i>name</i></ClLinks> as an <ClLinks  term={"argument"}><i>argument</i></ClLinks>. An error is signaled by the <ClLinks  term={"loader"}><i>loader</i></ClLinks> if no <ClLinks  term={"package"}><i>package</i></ClLinks> exists at load time. 



<ClLinks  term={"random-state"}><b>random-state</b></ClLinks> 



Two *random states S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if *S* would always produce the same sequence of pseudo-random numbers as a <ClLinks  term={"copy"}><i>copy</i></ClLinks><sub>5</sub> of *C* when given as the *random-state argument* to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"random"}><b>random</b></ClLinks>, assuming equivalent *limit arguments* in each case. 



(Note that since *C* has been processed by the *file compiler* , it cannot be used directly as an <ClLinks  term={"argument"}><i>argument</i></ClLinks> to <ClLinks  term={"random"}><b>random</b></ClLinks> because <ClLinks  term={"random"}><b>random</b></ClLinks> would perform a side effect.) 



<ClLinks  term={"cons"}><b>cons</b></ClLinks> 



Two *conses*, *S* and *C*, are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if the <ClLinks  term={"car"}><i>car</i></ClLinks> <sub>2</sub> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"car"}><i>car</i></ClLinks> <sub>2</sub> of *C*, and the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of *C*. 



<ClLinks  term={"array"}><b>array</b></ClLinks> 



Two one-dimensional <ClLinks  term={"array"}><i>arrays</i></ClLinks>, *S* and *C*, are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if the <ClLinks  term={"length"}><i>length</i></ClLinks> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"length"}><i>length</i></ClLinks> of *C*, the *actual array element type* of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the *actual array element type* of *C*, and each *active element* of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks  term={"element"}><i>element</i></ClLinks> of *C*. 



Two <ClLinks  term={"array"}><i>arrays</i></ClLinks> of <ClLinks  term={"rank"}><i>rank</i></ClLinks> other than one, *S* and *C*, are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if the <ClLinks  term={"rank"}><i>rank</i></ClLinks> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"rank"}><i>rank</i></ClLinks> of *C*, each <ClLinks  term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks  term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of *C*, the *actual array element type* of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the *actual array element type* of *C*, and each <ClLinks  term={"element"}><i>element</i></ClLinks> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks  term={"element"}><i>element</i></ClLinks> of *C*. 



In addition, if *S* is a *simple array*, then *C* must also be a *simple array*. If *S* is a *displaced array*, has a *fill pointer* , or is *actually adjustable*, *C* is permitted to lack any or all of these qualities. 



<ClLinks  term={"hash-table"}><b>hash-table</b></ClLinks> 



Two *hash tables S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if they meet the following three requirements: 1. They both have the same test (*e.g.*, they are both <ClLinks  term={"eql"}><b>eql</b></ClLinks> *hash tables*). 



2\. There is a unique one-to-one correspondence between the keys of the two *hash tables*, such that the corresponding keys are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



3\. For all keys, the values associated with two corresponding keys are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



If there is more than one possible one-to-one correspondence between the keys of *S* and *C*, the consequences are unspecified. A *conforming program* cannot use a table such as *S* as an *externalizable constant*.  







<ClLinks  term={"pathname"}><b>pathname</b></ClLinks> 



Two *pathnames S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if all corresponding *pathname components* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



<ClLinks  term={"function"}><b>function</b></ClLinks> 



<ClLinks  term={"function"}><i>Functions</i></ClLinks> are not *externalizable objects*. 



<ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks> and <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks> 



A general-purpose concept of <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> does not exist for <ClLinks  term={"structure"}><i>structures</i></ClLinks> and *standard objects*. However, a *conforming program* is permitted to define a <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> <ClLinks  term={"method"}><i>method</i></ClLinks> for any *class K* defined by that <ClLinks  term={"program"}><i>program</i></ClLinks> that is a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of either <ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks> or <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>. The effect of such a <ClLinks  term={"method"}><i>method</i></ClLinks> is to define that an *object S* of *type K* in *source code* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to an *object C* of *type K* in *compiled code* if *C* was constructed from <ClLinks  term={"code"}><i>code</i></ClLinks> produced by calling <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> on *S*. 



