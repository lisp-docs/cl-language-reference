**machine-instance** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"machine-instance"}><b>machine-instance</b></DictionaryLink> *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the particular instance of the computer hardware on which Common Lisp is running, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no such <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> can be computed. 



**Examples:**
```lisp

(machine-instance) 
*→* "ACME.COM" 
<i><sup>or</sup>→</i> "S/N 123231" 
<i><sup>or</sup>→</i> "18.26.0.179" 
<i><sup>or</sup>→</i> "AA-00-04-00-A7-A4" 

```
**Affected By:** 



The machine instance, and the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"machine-type"}><b>machine-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"machine-version"}><b>machine-version</b></DictionaryLink> 



