**/, //, ///** <ClLinks styled={true} term={"variable"}><i>Variable</i></ClLinks> 



**Value Type:** 



a *proper list*. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> <ClLinks styled={true} term={"/"}><b>/</b></ClLinks>, <ClLinks styled={true} term={"//"}><b>//</b></ClLinks>, and <ClLinks styled={true} term={"///"}><b>///</b></ClLinks> are maintained by the *Lisp read-eval-print loop* to save the values of results that were printed at the end of the loop. 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the most recent <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> that were printed, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"//"}><b>//</b></ClLinks> is the previous value of <ClLinks styled={true} term={"/"}><b>/</b></ClLinks>, and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"///"}><b>///</b></ClLinks> is the previous value of <ClLinks styled={true} term={"//"}><b>//</b></ClLinks>. 



The <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of <ClLinks styled={true} term={"/"}><b>/</b></ClLinks>, <ClLinks styled={true} term={"//"}><b>//</b></ClLinks>, and <ClLinks styled={true} term={"///"}><b>///</b></ClLinks> are updated immediately prior to printing the *return value* of a top-level <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> by the *Lisp read-eval-print loop*. If the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of such a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is aborted prior to its normal return, the values of <ClLinks styled={true} term={"/"}><b>/</b></ClLinks>, <ClLinks styled={true} term={"//"}><b>//</b></ClLinks>, and <ClLinks styled={true} term={"///"}><b>///</b></ClLinks> are not updated. 



**Examples:**
```lisp
 
(floor 22 7) → 3, 1 
(+ (\* (car /) 7) (cadr /)) → 22 
```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



<ClLinks styled={true} term={"-"}><b>-</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), <ClLinks styled={true} term={"+"}><b>+</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), **\*** (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), Section 25.1.1 (Top level loop) 







 



 



<b><sup>lisp-implementation-type, lisp-implementation</sup> version</b> <i>Function</i> 



**Syntax:** 



**lisp-implementation-type** *⟨no arguments⟩ → description* 



**lisp-implementation-version** *⟨no arguments⟩ → description* 



**Arguments and Values:** 



*description*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



**lisp-implementation-type** and **lisp-implementation-version** identify the current implementation of Common Lisp. 



**lisp-implementation-type** returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that identifies the generic name of the particular Common Lisp implementation. 



**lisp-implementation-version** returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that identifies the version of the particular Common Lisp implementation. 



If no appropriate and relevant result can be produced, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned instead of a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 

**Examples:**
```lisp
 
(lisp-implementation-type) 
→ "ACME Lisp" 
<i><sup>or</sup>→</i> "Joe’s Common Lisp" 
(lisp-implementation-version) 
→ "1.3a" 
→ "V2" 
<i><sup>or</sup>→</i> "Release 17.3, ECO #6" 
**short-site-name, long-site-name** *Function* 
```
**Syntax:** 



**short-site-name** *⟨no arguments⟩ → description* 



**long-site-name** *⟨no arguments⟩ → description* 







 



 



**Arguments and Values:** 



*description*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



**short-site-name** and **long-site-name** return a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that identifies the physical location of the computer hardware, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no appropriate *description* can be produced. 



**Examples:**
```lisp
(short-site-name) 
→ "MIT AI Lab" 
<i><sup>or</sup>→</i> "CMU-CSD" 
(long-site-name) 
→ "MIT Artificial Intelligence Laboratory" 
<i><sup>or</sup>→</i> "CMU Computer Science Department" 
```
**Affected By:** 



The implementation, the location of the computer hardware, and the installation/configuration process. 



