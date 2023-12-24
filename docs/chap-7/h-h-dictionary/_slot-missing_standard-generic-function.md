**slot-missing** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> *class object slot-name operation* &amp;optional *new-value → \{result\}*\* 



**Method Signatures:** 



<ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>) *object slot-name* 



*operation* &amp;optional *new-value* 



**Arguments and Values:** 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a would-be <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>). 



*operation*—one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, or <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>. *new-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is invoked when an attempt is made to <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> in an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> whose <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> is <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks> and the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* is not a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> in that <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The default <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> signals an error. 



The generic function <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for it. 



The generic function <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> may be called during evaluation of <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>, (setf slot-value), <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, and <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>. For each of these operations the corresponding <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> for the *operation* argument is <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, and <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> respectively. 



The optional *new-value* argument to <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> is used when the operation is attempting to set the value of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



If <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> returns, its values will be treated as follows: 



*•* If the *operation* is <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> or <ClLinks styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> will be ignored by the caller. 



*•* If the *operation* is <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks>, only the *primary value* will be used by the caller, and all other values will be ignored. 



*•* If the *operation* is <ClLinks styled={true} term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, any *boolean equivalent* of the *primary value* of the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> might be is used, and all other values will be ignored. 







 



 



**Exceptional Situations:** 



The default <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks styled={true} term={"slot-exists-p"}><b>slot-exists-p</b></ClLinks>, <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> 



**Notes:** 



The set of arguments (including the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the instance) facilitates defining methods on the metaclass for <ClLinks styled={true} term={"slot-missing"}><b>slot-missing</b></ClLinks>. 



