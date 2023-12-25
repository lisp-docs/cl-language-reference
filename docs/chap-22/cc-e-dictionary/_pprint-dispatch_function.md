**pprint-dispatch** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-dispatch"}><b>pprint-dispatch</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *table → function, found-p* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*table*—a *pprint dispatch table*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink>. <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a *function designator* . 



*found-p*—a *generalized boolean*. 



**Description:** 



Retrieves the highest priority function in *table* that is associated with a *type specifier* that matches <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The function is chosen by finding all of the *type specifiers* in *table* that match the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> and selecting the highest priority function associated with any of these *type specifiers*. If there is more than one highest priority function, an arbitrary choice is made. If no *type specifiers* match the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a function is returned that prints <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> using <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink>. 



The *secondary value*, *found-p*, is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if a matching *type specifier* was found in *table*, or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> otherwise. 



If *table* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, retrieval is done in the *initial pprint dispatch table*. 



**Affected By:** 



The state of the *table*. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *table* is neither a *pprint-dispatch-table* nor <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



 



 



**Notes:** 



(let ((\*print-pretty\* t)) 



(write object :stream s)) 



*≡* (funcall (pprint-dispatch object) s object) 



