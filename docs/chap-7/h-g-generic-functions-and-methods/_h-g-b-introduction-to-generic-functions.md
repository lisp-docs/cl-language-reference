 



A *generic function* is a function whose behavior depends on the *classes* or identities of the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> supplied to it. A *generic function object* is associated with a set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, a *lambda list*, a *method combination*<sub>2</sub>, and other information. 



Like an *ordinary function*, a *generic function* takes <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, performs a series of operations, and perhaps returns useful <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. An *ordinary function* has a single body of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that is always *executed* when the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called. A *generic function* has a set of bodies of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> of which a subset is selected for *execution*. The selected bodies of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> and the manner of their combination are determined by the *classes* or identities of one or more of the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the *generic function* and by its *method combination*. 



*Ordinary functions* and *generic functions* are called with identical syntax. 



*Generic functions* are true <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that can be passed as <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> and used as the first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> and <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of a *function name* to a *generic function* can be *established* in one of several ways. It can be *established* in the *global environment* by <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> (implicitly, due to <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>) or <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> (also implicitly, due to <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>). No <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> mechanism is provided for *establishing* a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of a *function name* to a *generic function* in the *lexical environment*. 



When a <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form is evaluated, one of three actions is taken (due to <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>): 



*•* If a generic function of the given name already exists, the existing generic function object is modified. Methods specified by the current <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form are added, and any methods in the existing generic function that were defined by a previous <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form are removed. Methods added by the current <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form might replace methods defined by <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, or <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>. No other methods in the generic function are affected or replaced. 



*•* If the given name names an *ordinary function*, a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or a *special operator* , an error is signaled. 



*•* Otherwise a generic function is created with the methods specified by the method definitions in the <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form. 



Some <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> permit specification of the options of a *generic function*, such as the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of *method combination* it uses or its *argument precedence order* . These <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> will be referred to as “operators that specify generic function options.” The only *standardized operator* in this category is <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink>. 







 



 



Some <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> define <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for a *generic function*. These <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> will be referred to as *method-defining operators*; their associated <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are called *method-defining forms*. The *standardized method-defining operators* are listed in Figure 7–1. 



|<p>**defgeneric defmethod defclass** </p><p>**define-condition defstruct**</p>|

| :- |





**Figure 7–1. Standardized Method-Defining Operators** 



Note that of the *standardized method-defining operators* only <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> can specify *generic function* options. <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> and any *implementation-defined operators* that can specify *generic function* options are also referred to as “operators that specify generic function options.” 



