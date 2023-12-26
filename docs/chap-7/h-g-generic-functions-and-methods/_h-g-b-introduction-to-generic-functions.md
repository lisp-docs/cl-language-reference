 



A <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is a function whose behavior depends on the *classes* or identities of the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> supplied to it. A *generic function object* is associated with a set of <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm><sub>2</sub>, and other information. 



Like an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> takes <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>, performs a series of operations, and perhaps returns useful <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>. An <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm> has a single body of <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> that is always *executed* when the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is called. A <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> has a set of bodies of <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> of which a subset is selected for *execution*. The selected bodies of <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> and the manner of their combination are determined by the *classes* or identities of one or more of the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and by its <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"ordinary function"}><i>Ordinary functions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> are called with identical syntax. 



<GlossaryTerm styled={true} term={"generic function"}><i>Generic functions</i></GlossaryTerm> are true <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that can be passed as <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> and used as the first <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> and <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>. 



A <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> can be *established* in one of several ways. It can be *established* in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> by <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> (implicitly, due to <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>) or <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> (also implicitly, due to <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>). No <GlossaryTerm  term={"standardized"}><i>standardized</i></GlossaryTerm> mechanism is provided for *establishing* a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



When a <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form is evaluated, one of three actions is taken (due to <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>): 



*•* If a generic function of the given name already exists, the existing generic function object is modified. Methods specified by the current <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form are added, and any methods in the existing generic function that were defined by a previous <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form are removed. Methods added by the current <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form might replace methods defined by <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>, or <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>. No other methods in the generic function are affected or replaced. 



*•* If the given name names an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an error is signaled. 



*•* Otherwise a generic function is created with the methods specified by the method definitions in the <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form. 



Some <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> permit specification of the options of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, such as the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> it uses or its <GlossaryTerm styled={true} term={"argument precedence order"}><i>argument precedence order</i></GlossaryTerm> . These <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> will be referred to as “operators that specify generic function options.” The only *standardized operator* in this category is <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>. 







 



 



Some <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> define <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. These <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> will be referred to as <GlossaryTerm styled={true} term={"method-defining operator"}><i>method-defining operators</i></GlossaryTerm>; their associated <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are called <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining forms</i></GlossaryTerm>. The *standardized method-defining operators* are listed in Figure 7–1. 



|<p>**defgeneric defmethod defclass** </p><p>**define-condition defstruct**</p>|

| :- |





**Figure 7–1. Standardized Method-Defining Operators** 



Note that of the *standardized method-defining operators* only <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> can specify <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> options. <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> and any *implementation-defined operators* that can specify <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> options are also referred to as “operators that specify generic function options.” 



