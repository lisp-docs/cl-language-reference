**slot-missing** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> *class object slot-name operation* &amp;optional *new-value → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>) *object slot-name* 



*operation* &amp;optional *new-value* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—the <ClLinks  term={"class"}><i>class</i></ClLinks> of <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (the <ClLinks  term={"name"}><i>name</i></ClLinks> of a would-be <ClLinks  term={"slot"}><i>slot</i></ClLinks>). 



*operation*—one of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, or <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>. *new-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is invoked when an attempt is made to <ClLinks  term={"access"}><i>access</i></ClLinks> a <ClLinks  term={"slot"}><i>slot</i></ClLinks> in an <ClLinks  term={"object"}><i>object</i></ClLinks> whose <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> is <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> and the <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* is not a <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> in that <ClLinks  term={"class"}><i>class</i></ClLinks>. The default <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error. 



The generic function <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. 



The generic function <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> may be called during evaluation of <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, (setf slot-value), <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, and <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>. For each of these operations the corresponding <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> for the *operation* argument is <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, and <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> respectively. 



The optional *new-value* argument to <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> is used when the operation is attempting to set the value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



If <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> returns, its values will be treated as follows: 



*•* If the *operation* is <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> or <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink>, any <ClLinks  term={"value"}><i>values</i></ClLinks> will be ignored by the caller. 



*•* If the *operation* is <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, only the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> will be used by the caller, and all other values will be ignored. 



*•* If the *operation* is <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink>, any <GlossaryTerm styled={true} term={"boolean equivalent"}><i>boolean equivalent</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of the <ClLinks  term={"method"}><i>method</i></ClLinks> might be is used, and all other values will be ignored. 







 



 



**Exceptional Situations:** 



The default <ClLinks  term={"method"}><i>method</i></ClLinks> on <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"slot-exists-p"}><b>slot-exists-p</b></DictionaryLink>, <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> 



**Notes:** 



The set of arguments (including the <ClLinks  term={"class"}><i>class</i></ClLinks> of the instance) facilitates defining methods on the metaclass for <DictionaryLink  term={"slot-missing"}><b>slot-missing</b></DictionaryLink>. 



