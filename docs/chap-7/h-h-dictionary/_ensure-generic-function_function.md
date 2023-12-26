**ensure-generic-function** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink> *function-name* &amp;key *argument-precedence-order declare* 



*documentation environment* 



*generic-function-class lambda-list* 



*method-class method-combination* 



→ generic-function 



**Arguments and Values:** 



*function-name*—a *function name*. 



The keyword arguments correspond to the *option* arguments of <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, except that the :method-class and :generic-function-class arguments can be *class object*s as well as names. 



Method-combination – method combination object. 



Environment – the same as the **&amp;environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. 



*generic-function*—a *generic function object*. 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink> is used to define a globally named *generic function* with no <ClLinks  term={"method"}><i>methods</i></ClLinks> or to specify or modify options and declarations that pertain to a globally named *generic function* as a whole. 



If *function-name* is not <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*, a new *generic function* is created. If (fdefinition *function-name*) is an *ordinary function*, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a *special operator* , an error is signaled. 



If *function-name* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, it must be of the form (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>). If *function-name* specifies a *generic function* that has a different value for any of the following arguments, the *generic function* is modified to have the new value: :argument-precedence-order, :declare, :documentation, :method-combination. 



If *function-name* specifies a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that has a different value for the :lambda-list argument, and the new value is congruent with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm> of all existing <ClLinks  term={"method"}><i>methods</i></ClLinks> or there are no <ClLinks  term={"method"}><i>methods</i></ClLinks>, the value is changed; otherwise an error is signaled. 







 



 



If *function-name* specifies a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that has a different value for the :generic-function-class argument and if the new generic function class is compatible with the old, <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is called to change the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>; otherwise an error is signaled. 



If *function-name* specifies a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that has a different value for the :method-class argument, the value is changed, but any existing <ClLinks  term={"method"}><i>methods</i></ClLinks> are not changed. 



**Affected By:** 



Existing function binding of *function-name*. 



**Exceptional Situations:** 



If (fdefinition *function-name*) is an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If *function-name* specifies a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that has a different value for the :lambda-list argument, and the new value is not congruent with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any existing <ClLinks  term={"method"}><i>method</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If *function-name* specifies a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that has a different value for the :generic-function-class argument and if the new generic function class not is compatible with the old, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> 



