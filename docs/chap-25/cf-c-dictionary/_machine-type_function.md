**machine-type** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"machine-type"}><b>machine-type</b></DictionaryLink> *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the generic name of the computer hardware on which Common Lisp is running. 



**Examples:**
```lisp

(machine-type) 
*→* "DEC PDP-10" 
<i><sup>or</sup>→</i> "Symbolics LM-2" 

```
**Affected By:** 



The machine type. The implementation. 



**See Also:** 



<DictionaryLink styled={true} term={"machine-version"}><b>machine-version</b></DictionaryLink> 



