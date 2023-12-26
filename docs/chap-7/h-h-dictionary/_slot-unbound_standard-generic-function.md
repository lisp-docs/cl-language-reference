**slot-unbound** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> *class instance slot-name → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>) *instance slot-name* 



**Arguments and Values:** 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>—the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> in which an attempt was made to <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> the *unbound slot*. 



*slot-name*—the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the *unbound slot*. 



*result*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The generic function <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called when an unbound <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is read in an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> whose metaclass is <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. The default <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>. The name slot of the <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink> <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> is initialized to the name of the offending variable, and the instance slot of the <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink> <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> is initialized to the offending instance. 



The generic function <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for it. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called only indirectly by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



If <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> returns, only the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> will be used by the caller, and all other values will be ignored. 



**Exceptional Situations:** 



The default <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> 







 



 



**Notes:** 



An unbound <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> may occur if no :initform form was specified for the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> and the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> value has not been set, or if <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> has been called on the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



