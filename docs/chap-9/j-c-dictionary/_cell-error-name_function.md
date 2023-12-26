**cell-error-name** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"cell-error-name"}><b>cell-error-name</b></ClLinks> *condition → name* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"cell-error"}><b>cell-error</b></ClLinks>. 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Returns the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the offending cell involved in the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> represented by <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



The nature of the result depends on the specific <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. For example, if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"unbound-variable"}><b>unbound-variable</b></ClLinks>, the result is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <GlossaryTerm styled={true} term={"unbound variable"}><i>unbound variable</i></GlossaryTerm> which was being *accessed*, if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"undefined-function"}><b>undefined-function</b></ClLinks>, this is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <GlossaryTerm styled={true} term={"undefined function"}><i>undefined function</i></GlossaryTerm> which was being *accessed*, and if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"unbound-slot"}><b>unbound-slot</b></ClLinks>, this is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> which was being *accessed*. 



**See Also:** 



<ClLinks styled={true} term={"cell-error"}><b>cell-error</b></ClLinks>, <ClLinks styled={true} term={"unbound-slot"}><b>unbound-slot</b></ClLinks>, <ClLinks styled={true} term={"unbound-variable"}><b>unbound-variable</b></ClLinks>, <ClLinks styled={true} term={"undefined-function"}><b>undefined-function</b></ClLinks>, Section 9.1 (Condition System Concepts) 



