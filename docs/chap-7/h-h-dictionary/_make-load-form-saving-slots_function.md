**make-load-form-saving-slots** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;key *slot-names environment* 



*→ creation-form, initialization-form* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*slot-names*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. 



*creation-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*initialization-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that, when *evaluated*, will construct an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> equivalent to <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, without *executing initialization forms*. The <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> in the new <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that correspond to initialized <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> are initialized using the values from <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. Uninitialized <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> are not initialized in the new <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. <DictionaryLink styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> works for any <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>. 







 



 



*Slot-names* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the names of the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> to preserve. If *slot-names* is not supplied, its value is all of the *local slots*. 



<DictionaryLink styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> returns two values, thus it can deal with circular structures. Whether the result is useful in an application depends on whether the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and slot contents fully capture the application’s idea of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>’s state. 



<GlossaryTerm styled={true} term={"environment"}><i>Environment</i></GlossaryTerm> is the environment in which the forms will be processed. 



**See Also:** 



<DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> can be useful in user-written <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> methods. 



When the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> could return a creation form that <GlossaryTerm styled={true} term={"call"}><i>calls</i></GlossaryTerm> <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> and an initialization form that contains <GlossaryTerm styled={true} term={"call"}><i>calls</i></GlossaryTerm> to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> and <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, though other <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> of similar effect might actually be used. 



