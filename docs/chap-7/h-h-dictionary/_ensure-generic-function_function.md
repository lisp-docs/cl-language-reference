**ensure-generic-function** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink> *function-name* &amp;key *argument-precedence-order declare* 



*documentation environment* 



*generic-function-class lambda-list* 



*method-class method-combination* 



*→ generic-function* 



**Arguments and Values:** 



*function-name*—a *function name*. 



The keyword arguments correspond to the *option* arguments of <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, except that the :method-class and :generic-function-class arguments can be *class object*s as well as names. 



Method-combination – method combination object. 



Environment – the same as the **&amp;environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. 



*generic-function*—a *generic function object*. 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink> is used to define a globally named *generic function* with no <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> or to specify or modify options and declarations that pertain to a globally named *generic function* as a whole. 



If *function-name* is not <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*, a new *generic function* is created. If (fdefinition *function-name*) is an *ordinary function*, a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or a *special operator* , an error is signaled. 



If *function-name* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, it must be of the form (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). If *function-name* specifies a *generic function* that has a different value for any of the following arguments, the *generic function* is modified to have the new value: :argument-precedence-order, :declare, :documentation, :method-combination. 



If *function-name* specifies a *generic function* that has a different value for the :lambda-list argument, and the new value is congruent with the *lambda lists* of all existing <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> or there are no <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, the value is changed; otherwise an error is signaled. 







 



 



If *function-name* specifies a *generic function* that has a different value for the :generic-function-class argument and if the new generic function class is compatible with the old, <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> is called to change the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the *generic function*; otherwise an error is signaled. 



If *function-name* specifies a *generic function* that has a different value for the :method-class argument, the value is changed, but any existing <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are not changed. 



**Affected By:** 



Existing function binding of *function-name*. 



**Exceptional Situations:** 



If (fdefinition *function-name*) is an *ordinary function*, a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or a *special operator* , an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



If *function-name* specifies a *generic function* that has a different value for the :lambda-list argument, and the new value is not congruent with the *lambda list* of any existing <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



If *function-name* specifies a *generic function* that has a different value for the :generic-function-class argument and if the new generic function class not is compatible with the old, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> 



