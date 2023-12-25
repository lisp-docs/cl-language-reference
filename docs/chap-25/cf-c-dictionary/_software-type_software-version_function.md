**software-type, software-version** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"software-type"}><b>software-type</b></ClLinks> *⟨no arguments⟩ → description* 



<ClLinks styled={true} term={"software-version"}><b>software-version</b></ClLinks> *⟨no arguments⟩ → description* 



**Arguments and Values:** 



*description*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"software-type"}><b>software-type</b></ClLinks> returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that identifies the generic name of any relevant supporting software, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no appropriate or relevant result can be produced. 



<ClLinks styled={true} term={"software-version"}><b>software-version</b></ClLinks> returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that identifies the version of any relevant supporting software, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no appropriate or relevant result can be produced. 



**Examples:**
```lisp
(software-type) → "Multics" 
(software-version) → "1.3x" 
```
**Affected By:** 



Operating system environment. 



**Notes:** 



This information should be of use to maintainers of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></ClLinks> 



