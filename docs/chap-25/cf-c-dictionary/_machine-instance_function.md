**machine-instance** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"machine-instance"}><b>machine-instance</b></ClLinks> *⟨no arguments⟩ → description* 



**Arguments and Values:** 



*description*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that identifies the particular instance of the computer hardware on which Common Lisp is running, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no such <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> can be computed. 



**Examples:**
```lisp

(machine-instance) 
→ "ACME.COM" 
<i><sup>or</sup>→</i> "S/N 123231" 
<i><sup>or</sup>→</i> "18.26.0.179" 
<i><sup>or</sup>→</i> "AA-00-04-00-A7-A4" 

```
**Affected By:** 



The machine instance, and the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"machine-type"}><b>machine-type</b></ClLinks>, <ClLinks styled={true} term={"machine-version"}><b>machine-version</b></ClLinks> 



