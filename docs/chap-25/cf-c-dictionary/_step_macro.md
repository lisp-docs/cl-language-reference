**step** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"step"}><b>step</b></ClLinks> *form → \{result\}*\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"step"}><b>step</b></ClLinks> implements a debugging paradigm wherein the programmer is allowed to <ClLinks styled={true} term={"step"}><i>step</i></ClLinks> through the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. The specific nature of the interaction, including which I/O streams are used and whether the stepping has lexical or dynamic scope, is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"step"}><b>step</b></ClLinks> evaluates <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the current <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. A call to <ClLinks styled={true} term={"step"}><b>step</b></ClLinks> can be compiled, but it is acceptable for an implementation to interactively step through only those parts of the computation that are interpreted. 



It is technically permissible for a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> to take no action at all other than normal *execution* of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. In such a situation, (step <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) is equivalent to, for example, (let () <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>). In implementations where this is the case, the associated documentation should mention that fact. 



**See Also:** 



<ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> are encouraged to respond to the typing of ? or the pressing of a “help key” by providing help including a list of commands. 



