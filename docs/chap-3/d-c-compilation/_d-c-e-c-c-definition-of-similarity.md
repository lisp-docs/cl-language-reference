 



Two *objects S* (in *source code*) and *C* (in *compiled code*) are defined to be <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if and only if they are both of one of the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> listed here (or defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>) and they both satisfy all additional requirements of <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> indicated for that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink> 



Two *numbers S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if they are of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and represent the same mathematical value. 



<DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> 



Two *simple characters S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if they have *similar code attributes*. 



<GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> providing additional, *implementation-defined attributes* must define whether and how *non-simple characters* can be regarded as <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> . 



<DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink> 



Two *apparently uninterned symbols S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if their <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> . 



Two <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> symbols *S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if their <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> , and if either *S* is accessible in the *current package* at compile time and *C* is accessible in the *current package* at load time, or *C* is accessible in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the *home package* of *S*. 



(Note that <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is dependent on neither the *current readtable* nor how the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> would parse the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>.) 



<DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink> 



Two *packages S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if their <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> . 



Note that although a *package object* is an *externalizable object*, the programmer is responsible for ensuring that the corresponding <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is already in existence when code  







referencing it as a *literal object* is *loaded*. The <GlossaryTerm styled={true} term={"loader"}><i>loader</i></GlossaryTerm> finds the corresponding *package object* as if by calling <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. An error is signaled by the <GlossaryTerm styled={true} term={"loader"}><i>loader</i></GlossaryTerm> if no <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> exists at load time. 



<DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink> 



Two *random states S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if *S* would always produce the same sequence of pseudo-random numbers as a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm><sub>5</sub> of *C* when given as the *random-state argument* to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink>, assuming equivalent *limit arguments* in each case. 



(Note that since *C* has been processed by the *file compiler* , it cannot be used directly as an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> because <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> would perform a side effect.) 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> 



Two *conses*, *S* and *C*, are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> <sub>2</sub> of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> <sub>2</sub> of *C*, and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>2</sub> of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>2</sub> of *C*. 



<DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink> 



Two one-dimensional <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm>, *S* and *C*, are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of *C*, the *actual array element type* of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the *actual array element type* of *C*, and each *active element* of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the corresponding <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *C*. 



Two <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> other than one, *S* and *C*, are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> of *C*, each <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm><sub>1</sub> of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the corresponding <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm><sub>1</sub> of *C*, the *actual array element type* of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the *actual array element type* of *C*, and each <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *S* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the corresponding <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *C*. 



In addition, if *S* is a *simple array*, then *C* must also be a *simple array*. If *S* is a *displaced array*, has a *fill pointer* , or is *actually adjustable*, *C* is permitted to lack any or all of these qualities. 



<DictionaryLink styled={true} term={"hash-table"}><b>hash-table</b></DictionaryLink> 



Two *hash tables S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if they meet the following three requirements: 1. They both have the same test (*e.g.*, they are both <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> *hash tables*). 



2\. There is a unique one-to-one correspondence between the keys of the two *hash tables*, such that the corresponding keys are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> . 



3\. For all keys, the values associated with two corresponding keys are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> . 



If there is more than one possible one-to-one correspondence between the keys of *S* and *C*, the consequences are unspecified. A *conforming program* cannot use a table such as *S* as an *externalizable constant*.  







<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink> 



Two *pathnames S* and *C* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if all corresponding *pathname components* are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> . 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> 



<GlossaryTerm styled={true} term={"function"}><i>Functions</i></GlossaryTerm> are not *externalizable objects*. 



<DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink> and <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> 



A general-purpose concept of <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> does not exist for <GlossaryTerm styled={true} term={"structure"}><i>structures</i></GlossaryTerm> and *standard objects*. However, a *conforming program* is permitted to define a <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for any *class K* defined by that <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of either <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink> or <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. The effect of such a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is to define that an *object S* of *type K* in *source code* is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to an *object C* of *type K* in *compiled code* if *C* was constructed from <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> produced by calling <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on *S*. 



