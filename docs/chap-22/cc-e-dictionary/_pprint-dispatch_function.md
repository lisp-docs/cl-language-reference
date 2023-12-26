**pprint-dispatch** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pprint-dispatch"}><b>pprint-dispatch</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;optional *table → function, found-p* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*table*—a <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks>. <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . 



*found-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Retrieves the highest priority function in *table* that is associated with a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that matches <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The function is chosen by finding all of the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> in *table* that match the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> and selecting the highest priority function associated with any of these <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>. If there is more than one highest priority function, an arbitrary choice is made. If no <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> match the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a function is returned that prints <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> using <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks>. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *found-p*, is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if a matching <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> was found in *table*, or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> otherwise. 



If *table* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, retrieval is done in the <GlossaryTerm styled={true} term={"initial pprint dispatch table"}><i>initial pprint dispatch table</i></GlossaryTerm>. 



**Affected By:** 



The state of the *table*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *table* is neither a *pprint-dispatch-table* nor <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



 



 



**Notes:** 



(let ((\*print-pretty\* t)) 



(write object :stream s)) 



*≡* (funcall (pprint-dispatch object) s object) 



