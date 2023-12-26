**condition** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



All types of <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>, whether error or non-error, must inherit from this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



No additional <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> relationships among the specified <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks> are allowed, except when explicitly mentioned in the text; however implementations are permitted to introduce additional <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> and one of these <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> can be a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of any number of the <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>. 



Whether a user-defined *condition type* has <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that are accessible by *with-slots* is *implementation dependent*. Furthermore, even in an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> in which user-defined *condition types* would have <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether any *condition types* defined in this document have such <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> or, if they do, what their <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> might be; only the reader functions documented by this specification may be relied upon by portable code. 



<GlossaryTerm styled={true} term={"conforming code"}><i>Conforming code</i></GlossaryTerm> must observe the following restrictions related to <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>: 



*•* <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>, not <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, must be used to define new *condition types*. 



*•* <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, not <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>, must be used to create *condition objects* explicitly. 



*•* The :report option of <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>, not <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> for <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks>, must be used to define a condition reporter. 



*•* <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>, <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, and <ClLinks styled={true} term={"with-slots"}><b>with-slots</b></ClLinks> must not be used on *condition objects*. Instead, the appropriate accessor functions (defined by <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>) should be used. 



