**machine-version** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"machine-version"}><b>machine-version</b></DictionaryLink> *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the version of the computer hardware on which Common Lisp is running, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no such value can be computed. 







 



 



**Examples:**
```lisp

(machine-version) *→* "KL-10, microcode 9" 

```
**Affected By:** 



The machine version, and the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"machine-type"}><b>machine-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"machine-instance"}><b>machine-instance</b></DictionaryLink> 



