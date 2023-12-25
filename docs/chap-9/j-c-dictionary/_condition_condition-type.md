**condition** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



All types of <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>, whether error or non-error, must inherit from this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



No additional <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> relationships among the specified <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink> are allowed, except when explicitly mentioned in the text; however implementations are permitted to introduce additional <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> and one of these <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> can be a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of any number of the <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>. 



Whether a user-defined *condition type* has <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that are accessible by *with-slots* is *implementation dependent*. Furthermore, even in an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> in which user-defined *condition types* would have <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether any *condition types* defined in this document have such <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> or, if they do, what their <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> might be; only the reader functions documented by this specification may be relied upon by portable code. 



*Conforming code* must observe the following restrictions related to <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>: 



*•* <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, not <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, must be used to define new *condition types*. 



*•* <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, not <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, must be used to create *condition objects* explicitly. 



*•* The :report option of <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, not <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> for <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink>, must be used to define a condition reporter. 



*•* <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, and <DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink> must not be used on *condition objects*. Instead, the appropriate accessor functions (defined by <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>) should be used. 



