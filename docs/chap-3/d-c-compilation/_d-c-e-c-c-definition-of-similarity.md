Two *objects S* (in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>) and *C* (in <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>) are defined to be <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if and only if they are both of one of the <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> listed here (or defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>) and they both satisfy all additional requirements of <GlossaryTerm  term={"similarity"}><i>similarity</i></GlossaryTerm> indicated for that <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>.



<DictionaryLink  term={"number"}><b>number</b></DictionaryLink> 



Two *numbers S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if they are of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> and represent the same mathematical value. 



<DictionaryLink  term={"character"}><b>character</b></DictionaryLink> 



Two *simple characters S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if they have *similar code attributes*. 



<GlossaryTerm  term={"implementation"}><i>Implementations</i></GlossaryTerm> providing additional, *implementation-defined attributes* must define whether and how *non-simple characters* can be regarded as <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm>.



<DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink> 



Two *apparently uninterned symbols S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if their <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm>.



Two <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm> symbols *S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if their <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> , and if either *S* is accessible in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at compile time and *C* is accessible in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at load time, or *C* is accessible in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> that is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of *S*. 



(Note that <GlossaryTerm  term={"similarity"}><i>similarity</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> is dependent on neither the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> nor how the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> would parse the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> in the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>.) 



<DictionaryLink  term={"package"}><b>package</b></DictionaryLink> 



Two *packages S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if their <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm>.



Note that although a *package object* is an <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable object</i></GlossaryTerm>, the programmer is responsible for ensuring that the corresponding <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is already in existence when code  







referencing it as a *literal object* is *loaded*. The <GlossaryTerm  term={"loader"}><i>loader</i></GlossaryTerm> finds the corresponding *package object* as if by calling <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> with that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as an <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>. An error is signaled by the <GlossaryTerm  term={"loader"}><i>loader</i></GlossaryTerm> if no <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> exists at load time.



<DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink> 



Two *random states S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if *S* would always produce the same sequence of pseudo-random numbers as a <GlossaryTerm  term={"copy"}><i>copy</i></GlossaryTerm><sub>5</sub> of *C* when given as the *random-state argument* to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"random"}><b>random</b></DictionaryLink>, assuming equivalent *limit arguments* in each case. 



(Note that since *C* has been processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm>, it cannot be used directly as an <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> because <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> would perform a side effect.)



<DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink> 



Two *conses*, *S* and *C*, are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> <sub>2</sub> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> <sub>2</sub> of *C*, and the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>2</sub> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>2</sub> of *C*. 



<DictionaryLink  term={"array"}><b>array</b></DictionaryLink> 



Two one-dimensional <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm>, *S* and *C*, are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of *C*, the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *C*, and each *active element* of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the corresponding <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *C*. 



Two <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> of <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> other than one, *S* and *C*, are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if the <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> of *C*, each <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm><sub>1</sub> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the corresponding <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm><sub>1</sub> of *C*, the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *C*, and each <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *S* is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the corresponding <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *C*. 



In addition, if *S* is a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>, then *C* must also be a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>. If *S* is a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>, has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm>, or is <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>, *C* is permitted to lack any or all of these qualities.



<DictionaryLink  term={"hash-table"}><b>hash-table</b></DictionaryLink> 



Two *hash tables S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if they meet the following three requirements: 1. They both have the same test (*e.g.*, they are both <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>). 



2\. There is a unique one-to-one correspondence between the keys of the two <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>, such that the corresponding keys are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> . 



3\. For all keys, the values associated with two corresponding keys are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> . 



If there is more than one possible one-to-one correspondence between the keys of *S* and *C*, the consequences are unspecified. A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> cannot use a table such as *S* as an *externalizable constant*.  







<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> 



Two *pathnames S* and *C* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if all corresponding *pathname components* are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm>.



<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> 



<GlossaryTerm  term={"function"}><i>Functions</i></GlossaryTerm> are not <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm>. 



<DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> and <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> 



A general-purpose concept of <GlossaryTerm  term={"similarity"}><i>similarity</i></GlossaryTerm> does not exist for <GlossaryTerm  term={"structure"}><i>structures</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"standard object"}><i>standard objects</i></GlossaryTerm>. However, a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> is permitted to define a <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for any *class K* defined by that <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> that is a <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> of either <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> or <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. The effect of such a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is to define that an *object S* of *type K* in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to an *object C* of *type K* in <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> if *C* was constructed from <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> produced by calling <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on *S*. 



