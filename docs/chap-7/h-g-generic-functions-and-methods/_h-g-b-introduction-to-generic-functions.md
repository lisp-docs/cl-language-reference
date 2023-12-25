 



A *generic function* is a function whose behavior depends on the *classes* or identities of the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> supplied to it. A *generic function object* is associated with a set of <ClLinks  term={"method"}><i>methods</i></ClLinks>, a *lambda list*, a *method combination*<sub>2</sub>, and other information. 



Like an *ordinary function*, a *generic function* takes <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, performs a series of operations, and perhaps returns useful <ClLinks  term={"value"}><i>values</i></ClLinks>. An *ordinary function* has a single body of <ClLinks  term={"code"}><i>code</i></ClLinks> that is always *executed* when the <ClLinks  term={"function"}><i>function</i></ClLinks> is called. A *generic function* has a set of bodies of <ClLinks  term={"code"}><i>code</i></ClLinks> of which a subset is selected for *execution*. The selected bodies of <ClLinks  term={"code"}><i>code</i></ClLinks> and the manner of their combination are determined by the *classes* or identities of one or more of the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the *generic function* and by its *method combination*. 



*Ordinary functions* and *generic functions* are called with identical syntax. 



*Generic functions* are true <ClLinks  term={"function"}><i>functions</i></ClLinks> that can be passed as <ClLinks  term={"argument"}><i>arguments</i></ClLinks> and used as the first <ClLinks  term={"argument"}><i>argument</i></ClLinks> to <ClLinks  term={"funcall"}><b>funcall</b></ClLinks> and <ClLinks  term={"apply"}><b>apply</b></ClLinks>. 



A <ClLinks  term={"binding"}><i>binding</i></ClLinks> of a *function name* to a *generic function* can be *established* in one of several ways. It can be *established* in the *global environment* by <ClLinks  term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>, <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> (implicitly, due to <ClLinks  term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>) or <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> (also implicitly, due to <ClLinks  term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>). No <ClLinks  term={"standardized"}><i>standardized</i></ClLinks> mechanism is provided for *establishing* a <ClLinks  term={"binding"}><i>binding</i></ClLinks> of a *function name* to a *generic function* in the *lexical environment*. 



When a <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> form is evaluated, one of three actions is taken (due to <ClLinks  term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>): 



*•* If a generic function of the given name already exists, the existing generic function object is modified. Methods specified by the current <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> form are added, and any methods in the existing generic function that were defined by a previous <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> form are removed. Methods added by the current <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> form might replace methods defined by <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"define-condition"}><b>define-condition</b></ClLinks>, or <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks>. No other methods in the generic function are affected or replaced. 



*•* If the given name names an *ordinary function*, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a *special operator* , an error is signaled. 



*•* Otherwise a generic function is created with the methods specified by the method definitions in the <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> form. 



Some <ClLinks  term={"operator"}><i>operators</i></ClLinks> permit specification of the options of a *generic function*, such as the <ClLinks  term={"type"}><i>type</i></ClLinks> of *method combination* it uses or its *argument precedence order* . These <ClLinks  term={"operator"}><i>operators</i></ClLinks> will be referred to as “operators that specify generic function options.” The only *standardized operator* in this category is <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks>. 







 



 



Some <ClLinks  term={"operator"}><i>operators</i></ClLinks> define <ClLinks  term={"method"}><i>methods</i></ClLinks> for a *generic function*. These <ClLinks  term={"operator"}><i>operators</i></ClLinks> will be referred to as *method-defining operators*; their associated <ClLinks  term={"form"}><i>forms</i></ClLinks> are called *method-defining forms*. The *standardized method-defining operators* are listed in Figure 7–1. 



|<p>**defgeneric defmethod defclass** </p><p>**define-condition defstruct**</p>|

| :- |





**Figure 7–1. Standardized Method-Defining Operators** 



Note that of the *standardized method-defining operators* only <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> can specify *generic function* options. <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> and any *implementation-defined operators* that can specify *generic function* options are also referred to as “operators that specify generic function options.” 



