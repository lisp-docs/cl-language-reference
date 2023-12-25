**slot-missing** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> *class object slot-name operation* &amp;optional *new-value → \{result\}*\* 



**Method Signatures:** 



<ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks>) *object slot-name* 



*operation* &amp;optional *new-value* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—the <ClLinks  term={"class"}><i>class</i></ClLinks> of <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*slot-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (the <ClLinks  term={"name"}><i>name</i></ClLinks> of a would-be <ClLinks  term={"slot"}><i>slot</i></ClLinks>). 



*operation*—one of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> <ClLinks  term={"setf"}><b>setf</b></ClLinks>, <ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, or <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>. *new-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> is invoked when an attempt is made to <ClLinks  term={"access"}><i>access</i></ClLinks> a <ClLinks  term={"slot"}><i>slot</i></ClLinks> in an <ClLinks  term={"object"}><i>object</i></ClLinks> whose <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> is <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks> and the <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the name *slot-name* is not a <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> in that <ClLinks  term={"class"}><i>class</i></ClLinks>. The default <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error. 



The generic function <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. 



The generic function <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> may be called during evaluation of <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>, (setf slot-value), <ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, and <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>. For each of these operations the corresponding <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> for the *operation* argument is <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>, <ClLinks  term={"setf"}><b>setf</b></ClLinks>, <ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, and <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks> respectively. 



The optional *new-value* argument to <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> is used when the operation is attempting to set the value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



If <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> returns, its values will be treated as follows: 



*•* If the *operation* is <ClLinks  term={"setf"}><b>setf</b></ClLinks> or <ClLinks  term={"slot-makunbound"}><b>slot-makunbound</b></ClLinks>, any <ClLinks  term={"value"}><i>values</i></ClLinks> will be ignored by the caller. 



*•* If the *operation* is <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>, only the *primary value* will be used by the caller, and all other values will be ignored. 



*•* If the *operation* is <ClLinks  term={"slot-boundp"}><b>slot-boundp</b></ClLinks>, any *boolean equivalent* of the *primary value* of the <ClLinks  term={"method"}><i>method</i></ClLinks> might be is used, and all other values will be ignored. 







 



 



**Exceptional Situations:** 



The default <ClLinks  term={"method"}><i>method</i></ClLinks> on <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"slot-exists-p"}><b>slot-exists-p</b></ClLinks>, <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks> 



**Notes:** 



The set of arguments (including the <ClLinks  term={"class"}><i>class</i></ClLinks> of the instance) facilitates defining methods on the metaclass for <ClLinks  term={"slot-missing"}><b>slot-missing</b></ClLinks>. 



