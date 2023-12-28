**pprint-dispatch** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-dispatch"}><b>pprint-dispatch</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *table → function, found-p* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*table*—a <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink>. <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . 



*found-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Retrieves the highest priority function in *table* that is associated with a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that matches <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The function is chosen by finding all of the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> in *table* that match the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> and selecting the highest priority function associated with any of these <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>. If there is more than one highest priority function, an arbitrary choice is made. If no <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> match the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a function is returned that prints <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> using <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *found-p*, is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if a matching <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> was found in *table*, or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> otherwise. 



If *table* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, retrieval is done in the <GlossaryTerm styled={true} term={"initial pprint dispatch table"}><i>initial pprint dispatch table</i></GlossaryTerm>. 



**Affected By:** 



The state of the *table*. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *table* is neither a *pprint-dispatch-table* nor <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



 



 



**Notes:** 



(let ((\*print-pretty\* t)) 



(write object :stream s)) 



*≡* (funcall (pprint-dispatch object) s object) 



