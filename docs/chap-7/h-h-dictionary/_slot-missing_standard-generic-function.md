**slot-missing** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> *class object slot-name operation* &amp;optional *new-value → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>) *object slot-name* 



*operation* &amp;optional *new-value* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*slot-name*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a would-be <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>). 



*operation*—one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, or <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>. *new-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The generic function <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked when an attempt is made to <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> is <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* is not a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The default <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> signals an error. 



The generic function <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for it. 



The generic function <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> may be called during evaluation of <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>, (setf slot-value), <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, and <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>. For each of these operations the corresponding <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> for the *operation* argument is <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, and <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> respectively. 



The optional *new-value* argument to <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is used when the operation is attempting to set the value of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



If <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> returns, its values will be treated as follows: 



*•* If the *operation* is <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> or <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> will be ignored by the caller. 



*•* If the *operation* is <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>, only the *primary value* will be used by the caller, and all other values will be ignored. 



*•* If the *operation* is <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, any *boolean equivalent* of the *primary value* of the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> might be is used, and all other values will be ignored. 







 



 



**Exceptional Situations:** 



The default <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> 



**Notes:** 



The set of arguments (including the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the instance) facilitates defining methods on the metaclass for <DictionaryLink styled={true} term={"slot-missing"}><b>slot-missing</b></DictionaryLink>. 



