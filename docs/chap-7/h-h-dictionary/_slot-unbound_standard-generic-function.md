**slot-unbound** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> *class instance slot-name → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>) *instance slot-name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> in which an attempt was made to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> the *unbound slot*. 



*slot-name*—the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *unbound slot*. 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The generic function <DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called when an unbound <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is read in an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> whose metaclass is <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>. The default <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>. The name slot of the <DictionaryLink styled={true} term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink> <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is initialized to the name of the offending variable, and the instance slot of the <DictionaryLink styled={true} term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink> <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is initialized to the offending instance. 



The generic function <DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for it. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called only indirectly by <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



If <DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> returns, only the *primary value* will be used by the caller, and all other values will be ignored. 



**Exceptional Situations:** 



The default <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink styled={true} term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> 







 



 



**Notes:** 



An unbound <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> may occur if no :initform form was specified for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> value has not been set, or if <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> has been called on the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



