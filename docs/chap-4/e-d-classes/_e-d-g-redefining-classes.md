 



A <ClLinks  term={"class"}><i>class</i></ClLinks> that is a *direct instance* of <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks> can be redefined if the new <ClLinks  term={"class"}><i>class</i></ClLinks> is also a *direct instance* of <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>. Redefining a <ClLinks  term={"class"}><i>class</i></ClLinks> modifies the existing *class object* to reflect the new <ClLinks  term={"class"}><i>class</i></ClLinks> definition; it does not create a new *class object* for the <ClLinks  term={"class"}><i>class</i></ClLinks>. Any *method object* created by a :reader, :writer, or :accessor option specified by the old <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form is removed from the corresponding *generic function*. *Methods* specified by the new <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form are added.  







When the class *C* is redefined, changes are propagated to its <ClLinks  term={"instance"}><i>instances</i></ClLinks> and to <ClLinks  term={"instance"}><i>instances</i></ClLinks> of any of its *subclasses*. Updating such an <ClLinks  term={"instance"}><i>instance</i></ClLinks> occurs at an <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> time, but no later than the next time a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of that <ClLinks  term={"instance"}><i>instance</i></ClLinks> is read or written. Updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> does not change its identity as defined by the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"eq"}><b>eq</b></ClLinks>. The updating process may change the <ClLinks  term={"slot"}><i>slots</i></ClLinks> of that particular <ClLinks  term={"instance"}><i>instance</i></ClLinks>, but it does not create a new <ClLinks  term={"instance"}><i>instance</i></ClLinks>. Whether updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> consumes storage is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



Note that redefining a <ClLinks  term={"class"}><i>class</i></ClLinks> may cause <ClLinks  term={"slot"}><i>slots</i></ClLinks> to be added or deleted. If a <ClLinks  term={"class"}><i>class</i></ClLinks> is redefined in a way that changes the set of *local slots accessible* in <ClLinks  term={"instance"}><i>instances</i></ClLinks>, the <ClLinks  term={"instance"}><i>instances</i></ClLinks> are updated. It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <ClLinks  term={"instance"}><i>instances</i></ClLinks> are updated if a <ClLinks  term={"class"}><i>class</i></ClLinks> is redefined in a way that does not change the set of *local slots accessible* in <ClLinks  term={"instance"}><i>instances</i></ClLinks>. 



The value of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> that is specified as shared both in the old <ClLinks  term={"class"}><i>class</i></ClLinks> and in the new <ClLinks  term={"class"}><i>class</i></ClLinks> is retained. If such a *shared slot* was unbound in the old <ClLinks  term={"class"}><i>class</i></ClLinks>, it is unbound in the new <ClLinks  term={"class"}><i>class</i></ClLinks>. <ClLinks  term={"slot"}><i>Slots</i></ClLinks> that were local in the old <ClLinks  term={"class"}><i>class</i></ClLinks> and that are shared in the new <ClLinks  term={"class"}><i>class</i></ClLinks> are initialized. Newly added *shared slots* are initialized. 



Each newly added *shared slot* is set to the result of evaluating the *captured initialization form* for the <ClLinks  term={"slot"}><i>slot</i></ClLinks> that was specified in the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> for the new <ClLinks  term={"class"}><i>class</i></ClLinks>. If there was no *initialization form*, the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is unbound. 



If a <ClLinks  term={"class"}><i>class</i></ClLinks> is redefined in such a way that the set of *local slots accessible* in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> is changed, a two-step process of updating the <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> takes place. The process may be explicitly started by invoking the generic function <ClLinks  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks>. This two-step process can happen in other circumstances in some implementations. For example, in some implementations this two-step process is triggered if the order of <ClLinks  term={"slot"}><i>slots</i></ClLinks> in storage is changed. 



The first step modifies the structure of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> by adding new *local slots* and discarding *local slots* that are not defined in the new version of the <ClLinks  term={"class"}><i>class</i></ClLinks>. The second step initializes the newly-added *local slots* and performs any other user-defined actions. These two steps are further specified in the next two sections. 



