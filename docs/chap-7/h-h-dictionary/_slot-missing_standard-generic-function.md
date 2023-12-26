**slot-missing** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> *class object slot-name operation* &amp;optional *new-value → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>) *object slot-name* 



*operation* &amp;optional *new-value* 



**Arguments and Values:** 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*slot-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> (the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a would-be <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>). 



*operation*—one of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, or <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>. *new-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*result*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The generic function <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked when an attempt is made to <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> in an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> whose <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> is <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> and the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the name *slot-name* is not a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> in that <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The default <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> signals an error. 



The generic function <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for it. 



The generic function <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> may be called during evaluation of <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, (setf slot-value), <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, and <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>. For each of these operations the corresponding <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> for the *operation* argument is <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, and <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> respectively. 



The optional *new-value* argument to <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is used when the operation is attempting to set the value of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> returns, its values will be treated as follows: 



*•* If the *operation* is <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> or <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, any <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> will be ignored by the caller. 



*•* If the *operation* is <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, only the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> will be used by the caller, and all other values will be ignored. 



*•* If the *operation* is <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, any <GlossaryTerm styled={true} term={"boolean equivalent"}><i>boolean equivalent</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> might be is used, and all other values will be ignored. 







 



 



**Exceptional Situations:** 



The default <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink>, <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> 



**Notes:** 



The set of arguments (including the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the instance) facilitates defining methods on the metaclass for <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink>. 



