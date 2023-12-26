 



Two *objects S* (in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>) and *C* (in <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>) are defined to be <ClLinks  term={"similar"}><i>similar</i></ClLinks> if and only if they are both of one of the <ClLinks  term={"type"}><i>types</i></ClLinks> listed here (or defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>) and they both satisfy all additional requirements of <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> indicated for that <ClLinks  term={"type"}><i>type</i></ClLinks>. 



<DictionaryLink  term={"number"}><b>number</b></DictionaryLink> 



Two *numbers S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if they are of the same <ClLinks  term={"type"}><i>type</i></ClLinks> and represent the same mathematical value. 



<DictionaryLink  term={"character"}><b>character</b></DictionaryLink> 



Two *simple characters S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if they have *similar code attributes*. 



<ClLinks  term={"implementation"}><i>Implementations</i></ClLinks> providing additional, *implementation-defined attributes* must define whether and how *non-simple characters* can be regarded as <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



<DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink> 



Two *apparently uninterned symbols S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if their <ClLinks  term={"name"}><i>names</i></ClLinks> are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



Two <ClLinks  term={"interned"}><i>interned</i></ClLinks> symbols *S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if their <ClLinks  term={"name"}><i>names</i></ClLinks> are <ClLinks  term={"similar"}><i>similar</i></ClLinks> , and if either *S* is accessible in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at compile time and *C* is accessible in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> at load time, or *C* is accessible in the <ClLinks  term={"package"}><i>package</i></ClLinks> that is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of *S*. 



(Note that <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is dependent on neither the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> nor how the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> would parse the <ClLinks  term={"character"}><i>characters</i></ClLinks> in the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>.) 



<DictionaryLink  term={"package"}><b>package</b></DictionaryLink> 



Two *packages S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if their <ClLinks  term={"name"}><i>names</i></ClLinks> are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



Note that although a *package object* is an <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable object</i></GlossaryTerm>, the programmer is responsible for ensuring that the corresponding <ClLinks  term={"package"}><i>package</i></ClLinks> is already in existence when code  







referencing it as a *literal object* is *loaded*. The <ClLinks  term={"loader"}><i>loader</i></ClLinks> finds the corresponding *package object* as if by calling <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> with that <ClLinks  term={"name"}><i>name</i></ClLinks> as an <ClLinks  term={"argument"}><i>argument</i></ClLinks>. An error is signaled by the <ClLinks  term={"loader"}><i>loader</i></ClLinks> if no <ClLinks  term={"package"}><i>package</i></ClLinks> exists at load time. 



<DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink> 



Two *random states S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if *S* would always produce the same sequence of pseudo-random numbers as a <ClLinks  term={"copy"}><i>copy</i></ClLinks><sub>5</sub> of *C* when given as the *random-state argument* to the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"random"}><b>random</b></DictionaryLink>, assuming equivalent *limit arguments* in each case. 



(Note that since *C* has been processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> , it cannot be used directly as an <ClLinks  term={"argument"}><i>argument</i></ClLinks> to <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> because <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> would perform a side effect.) 



<DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink> 



Two *conses*, *S* and *C*, are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if the <ClLinks  term={"car"}><i>car</i></ClLinks> <sub>2</sub> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"car"}><i>car</i></ClLinks> <sub>2</sub> of *C*, and the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of *C*. 



<DictionaryLink  term={"array"}><b>array</b></DictionaryLink> 



Two one-dimensional <ClLinks  term={"array"}><i>arrays</i></ClLinks>, *S* and *C*, are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if the <ClLinks  term={"length"}><i>length</i></ClLinks> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"length"}><i>length</i></ClLinks> of *C*, the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *C*, and each *active element* of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks  term={"element"}><i>element</i></ClLinks> of *C*. 



Two <ClLinks  term={"array"}><i>arrays</i></ClLinks> of <ClLinks  term={"rank"}><i>rank</i></ClLinks> other than one, *S* and *C*, are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if the <ClLinks  term={"rank"}><i>rank</i></ClLinks> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <ClLinks  term={"rank"}><i>rank</i></ClLinks> of *C*, each <ClLinks  term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks  term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of *C*, the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of *C*, and each <ClLinks  term={"element"}><i>element</i></ClLinks> of *S* is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the corresponding <ClLinks  term={"element"}><i>element</i></ClLinks> of *C*. 



In addition, if *S* is a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>, then *C* must also be a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm>. If *S* is a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>, has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , or is <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>, *C* is permitted to lack any or all of these qualities. 



<DictionaryLink  term={"hash-table"}><b>hash-table</b></DictionaryLink> 



Two *hash tables S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if they meet the following three requirements: 1. They both have the same test (*e.g.*, they are both <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>). 



2\. There is a unique one-to-one correspondence between the keys of the two <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>, such that the corresponding keys are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



3\. For all keys, the values associated with two corresponding keys are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



If there is more than one possible one-to-one correspondence between the keys of *S* and *C*, the consequences are unspecified. A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> cannot use a table such as *S* as an *externalizable constant*.  







<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> 



Two *pathnames S* and *C* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if all corresponding *pathname components* are <ClLinks  term={"similar"}><i>similar</i></ClLinks> . 



<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> 



<ClLinks  term={"function"}><i>Functions</i></ClLinks> are not <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm>. 



<DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> and <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> 



A general-purpose concept of <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> does not exist for <ClLinks  term={"structure"}><i>structures</i></ClLinks> and <GlossaryTerm styled={true} term={"standard object"}><i>standard objects</i></GlossaryTerm>. However, a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> is permitted to define a <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> <ClLinks  term={"method"}><i>method</i></ClLinks> for any *class K* defined by that <ClLinks  term={"program"}><i>program</i></ClLinks> that is a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of either <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> or <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. The effect of such a <ClLinks  term={"method"}><i>method</i></ClLinks> is to define that an *object S* of *type K* in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to an *object C* of *type K* in <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> if *C* was constructed from <ClLinks  term={"code"}><i>code</i></ClLinks> produced by calling <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> on *S*. 



