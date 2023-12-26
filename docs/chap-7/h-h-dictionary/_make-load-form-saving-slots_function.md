**make-load-form-saving-slots** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> <ClLinks  term={"object"}><i>object</i></ClLinks> &amp;key *slot-names environment* 



*→ creation-form, initialization-form* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*slot-names*—a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



*creation-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*initialization-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



Returns <ClLinks  term={"form"}><i>forms</i></ClLinks> that, when *evaluated*, will construct an <ClLinks  term={"object"}><i>object</i></ClLinks> equivalent to <ClLinks  term={"object"}><i>object</i></ClLinks>, without *executing initialization forms*. The <ClLinks  term={"slot"}><i>slots</i></ClLinks> in the new <ClLinks  term={"object"}><i>object</i></ClLinks> that correspond to initialized <ClLinks  term={"slot"}><i>slots</i></ClLinks> in <ClLinks  term={"object"}><i>object</i></ClLinks> are initialized using the values from <ClLinks  term={"object"}><i>object</i></ClLinks>. Uninitialized <ClLinks  term={"slot"}><i>slots</i></ClLinks> in <ClLinks  term={"object"}><i>object</i></ClLinks> are not initialized in the new <ClLinks  term={"object"}><i>object</i></ClLinks>. <DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> works for any <ClLinks  term={"instance"}><i>instance</i></ClLinks> of <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>. 







 



 



*Slot-names* is a <ClLinks  term={"list"}><i>list</i></ClLinks> of the names of the <ClLinks  term={"slot"}><i>slots</i></ClLinks> to preserve. If *slot-names* is not supplied, its value is all of the <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm>. 



<DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> returns two values, thus it can deal with circular structures. Whether the result is useful in an application depends on whether the <ClLinks  term={"object"}><i>object</i></ClLinks>’s <ClLinks  term={"type"}><i>type</i></ClLinks> and slot contents fully capture the application’s idea of the <ClLinks  term={"object"}><i>object</i></ClLinks>’s state. 



<ClLinks  term={"environment"}><i>Environment</i></ClLinks> is the environment in which the forms will be processed. 



**See Also:** 



<DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink>, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> can be useful in user-written <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> methods. 



When the <ClLinks  term={"object"}><i>object</i></ClLinks> is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink  term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></DictionaryLink> could return a creation form that <ClLinks  term={"call"}><i>calls</i></ClLinks> <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> and an initialization form that contains <ClLinks  term={"call"}><i>calls</i></ClLinks> to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> and <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, though other <ClLinks  term={"function"}><i>functions</i></ClLinks> of similar effect might actually be used. 



