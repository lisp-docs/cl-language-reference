**make-load-form-saving-slots** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> &amp;key *slot-names environment* 



*→ creation-form, initialization-form* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*slot-names*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



*creation-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*initialization-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> that, when *evaluated*, will construct an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> equivalent to <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, without *executing initialization forms*. The <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> in the new <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that correspond to initialized <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> in <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> are initialized using the values from <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. Uninitialized <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> in <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> are not initialized in the new <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. <DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> works for any <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>. 







 



 



*Slot-names* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the names of the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> to preserve. If *slot-names* is not supplied, its value is all of the <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm>. 



<DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> returns two values, thus it can deal with circular structures. Whether the result is useful in an application depends on whether the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>’s <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> and slot contents fully capture the application’s idea of the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>’s state. 



<GlossaryTerm  term={"environment"}><i>Environment</i></GlossaryTerm> is the environment in which the forms will be processed. 



**See Also:** 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink>, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> can be useful in user-written <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> methods. 



When the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> could return a creation form that <GlossaryTerm  term={"call"}><i>calls</i></GlossaryTerm> <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> and an initialization form that contains <GlossaryTerm  term={"call"}><i>calls</i></GlossaryTerm> to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> and <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, though other <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> of similar effect might actually be used. 



