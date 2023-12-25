**machine-version** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"machine-version"}><b>machine-version</b></ClLinks> *⟨no arguments⟩ → description* 



**Arguments and Values:** 



*description*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that identifies the version of the computer hardware on which Common Lisp is running, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no such value can be computed. 







 



 



**Examples:**
```lisp
(machine-version) → "KL-10, microcode 9" 
```
**Affected By:** 



The machine version, and the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"machine-type"}><b>machine-type</b></ClLinks>, <ClLinks styled={true} term={"machine-instance"}><b>machine-instance</b></ClLinks> 



