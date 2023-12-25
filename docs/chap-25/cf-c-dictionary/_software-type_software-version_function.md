**software-type, software-version** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"software-type"}><b>software-type</b></DictionaryLink> *hno argumentsi → description* 



<DictionaryLink styled={true} term={"software-version"}><b>software-version</b></DictionaryLink> *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"software-type"}><b>software-type</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the generic name of any relevant supporting software, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no appropriate or relevant result can be produced. 



<DictionaryLink styled={true} term={"software-version"}><b>software-version</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the version of any relevant supporting software, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no appropriate or relevant result can be produced. 



**Examples:**
```lisp

(software-type) *→* "Multics" 
(software-version) *→* "1.3x" 

```
**Affected By:** 



Operating system environment. 



**Notes:** 



This information should be of use to maintainers of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></DictionaryLink> 



