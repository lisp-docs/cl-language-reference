**make-load-form-saving-slots** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;key *slot-names environment* 



*→ creation-form, initialization-form* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*slot-names*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>—an *environment object*. 



*creation-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*initialization-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



Returns <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that, when *evaluated*, will construct an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> equivalent to <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, without *executing initialization forms*. The <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> in the new <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that correspond to initialized <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> in <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> are initialized using the values from <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. Uninitialized <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> in <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> are not initialized in the new <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. <ClLinks styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></ClLinks> works for any <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> or <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks>. 







 



 



*Slot-names* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the names of the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> to preserve. If *slot-names* is not supplied, its value is all of the *local slots*. 



<ClLinks styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></ClLinks> returns two values, thus it can deal with circular structures. Whether the result is useful in an application depends on whether the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>’s <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and slot contents fully capture the application’s idea of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>’s state. 



<ClLinks styled={true} term={"environment"}><i>Environment</i></ClLinks> is the environment in which the forms will be processed. 



**See Also:** 



<ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks>, <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>, <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></ClLinks> can be useful in user-written <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> methods. 



When the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>, <ClLinks styled={true} term={"make-load-form-saving-slots"}><b>make-load-form-saving-slots</b></ClLinks> could return a creation form that <ClLinks styled={true} term={"call"}><i>calls</i></ClLinks> <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> and an initialization form that contains <ClLinks styled={true} term={"call"}><i>calls</i></ClLinks> to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> and <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, though other <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> of similar effect might actually be used. 



