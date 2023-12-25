 



An <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks> has zero or more named <ClLinks  term={"slot"}><i>slots</i></ClLinks>. The <ClLinks  term={"slot"}><i>slots</i></ClLinks> of an <ClLinks  term={"object"}><i>object</i></ClLinks> are determined by the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"object"}><i>object</i></ClLinks>. Each <ClLinks  term={"slot"}><i>slot</i></ClLinks> can hold one value. The <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is syntactically valid for use as a variable name. 



When a <ClLinks  term={"slot"}><i>slot</i></ClLinks> does not have a value, the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is said to be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>. When an unbound <ClLinks  term={"slot"}><i>slot</i></ClLinks> is read, the *generic function* <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> is invoked. The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> on <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks> signals an error. If <ClLinks  term={"slot-unbound"}><b>slot-unbound</b></ClLinks> returns, its *primary value* is used that time as the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



The default initial value form for a <ClLinks  term={"slot"}><i>slot</i></ClLinks> is defined by the :initform slot option. When the :initform form is used to supply a value, it is evaluated in the lexical environment in which the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form was evaluated. The :initform along with the lexical environment in which the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form was evaluated is called a *captured initialization form*. For more details, see Section 7.1 (Object Creation and Initialization). 



A *local slot* is defined to be a <ClLinks  term={"slot"}><i>slot</i></ClLinks> that is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> to exactly one <ClLinks  term={"instance"}><i>instance</i></ClLinks>, namely the one in which the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is allocated. A *shared slot* is defined to be a <ClLinks  term={"slot"}><i>slot</i></ClLinks> that is visible to more than one <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a given <ClLinks  term={"class"}><i>class</i></ClLinks> and its *subclasses*. 



A <ClLinks  term={"class"}><i>class</i></ClLinks> is said to define a <ClLinks  term={"slot"}><i>slot</i></ClLinks> with a given <ClLinks  term={"name"}><i>name</i></ClLinks> when the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form for that <ClLinks  term={"class"}><i>class</i></ClLinks> contains a *slot specifier* with that <ClLinks  term={"name"}><i>name</i></ClLinks>. Defining a *local slot* does not immediately create a <ClLinks  term={"slot"}><i>slot</i></ClLinks>; it causes a <ClLinks  term={"slot"}><i>slot</i></ClLinks> to be created each time an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> is created. Defining a *shared slot* immediately creates a <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



The :allocation slot option to <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> controls the kind of <ClLinks  term={"slot"}><i>slot</i></ClLinks> that is defined. If the value of the :allocation slot option is :instance, a *local slot* is created. If the value of :allocation is :class, a *shared slot* is created. 



A <ClLinks  term={"slot"}><i>slot</i></ClLinks> is said to be <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks> if the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is defined by the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> or is inherited from a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of that <ClLinks  term={"class"}><i>class</i></ClLinks>. At most one <ClLinks  term={"slot"}><i>slot</i></ClLinks> of a given <ClLinks  term={"name"}><i>name</i></ClLinks> can be <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in an <ClLinks  term={"instance"}><i>instance</i></ClLinks>. A *shared slot* defined by a <ClLinks  term={"class"}><i>class</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in all <ClLinks  term={"instance"}><i>instances</i></ClLinks> of that <ClLinks  term={"class"}><i>class</i></ClLinks>. A detailed explanation of the inheritance of <ClLinks  term={"slot"}><i>slots</i></ClLinks> is given in Section 7.5.3 (Inheritance of Slots and Slot Options). 



