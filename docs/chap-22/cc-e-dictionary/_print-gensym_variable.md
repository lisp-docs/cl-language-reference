*∗<DictionaryLink styled={true} term={"print-gensym"}><b>*print-gensym*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**Description:** 



Controls whether the prefix “#:” is printed before *apparently uninterned symbols*. The prefix is printed before such <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> if and only if the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**Examples:**
```lisp

(let ((\*print-gensym\* nil)) 
  (print (gensym))) 
▷ G6040 
*→* #:G6040 

```
**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> 







 



 



*∗***print-level***∗***,** *∗<DictionaryLink styled={true} term={"print-length"}><b>*print-length*</b></DictionaryLink>∗* 



*∗***print-level***∗***,** 