**slot-unbound** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> *class instance slot-name → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>) *instance slot-name* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—the <ClLinks  term={"instance"}><i>instance</i></ClLinks> in which an attempt was made to <ClLinks  term={"read"}><i>read</i></ClLinks> the *unbound slot*. 



*slot-name*—the <ClLinks  term={"name"}><i>name</i></ClLinks> of the *unbound slot*. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called when an unbound <ClLinks  term={"slot"}><i>slot</i></ClLinks> is read in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> whose metaclass is <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. The default <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>. The name slot of the <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink> <ClLinks  term={"condition"}><i>condition</i></ClLinks> is initialized to the name of the offending variable, and the instance slot of the <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink> <ClLinks  term={"condition"}><i>condition</i></ClLinks> is initialized to the offending instance. 



The generic function <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> is called only indirectly by <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



If <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> returns, only the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> will be used by the caller, and all other values will be ignored. 



**Exceptional Situations:** 



The default <ClLinks  term={"method"}><i>method</i></ClLinks> on <DictionaryLink  term={"slot-unbound"}><b>slot-unbound</b></DictionaryLink> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> 







 



 



**Notes:** 



An unbound <ClLinks  term={"slot"}><i>slot</i></ClLinks> may occur if no :initform form was specified for the <ClLinks  term={"slot"}><i>slot</i></ClLinks> and the <ClLinks  term={"slot"}><i>slot</i></ClLinks> value has not been set, or if <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> has been called on the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



