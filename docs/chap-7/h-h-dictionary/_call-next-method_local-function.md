**call-next-method** *Local Function* 



**Syntax:** 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> &amp;rest *args → \{result\}*\* 



**Arguments and Values:** 



*arg*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> it calls. 



**Description:** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can be used within the body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> (but not the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>) of a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> to call the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



If there is no next <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>, the generic function <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is called. 



The type of method combination used determines which <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> can invoke <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. The standard <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> type allows <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> to be used within primary <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>. For generic functions using a type of method combination defined by the short form of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can be used in <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> only. 



When <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with no arguments, it passes the current <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>’s original arguments to the next <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. Neither argument defaulting, nor using <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>, nor rebinding variables with the same <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> as parameters of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> affects the values <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> passes to the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> it calls. 



When <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with arguments, the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> is called with those arguments. 



If <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with arguments but omits optional arguments, the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> called defaults those arguments. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> returns any <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> that are returned by the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



 



 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm> and can only be used within the body of a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm>. 



Whether or not <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> are the same as for <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> outside of a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> are undefined. 



**Affected By:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink>, <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. 



**Exceptional Situations:** 



When providing arguments to <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, the following rule must be satisfied or an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> should be signaled: the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for a changed set of arguments for <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be the same as the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for the original arguments to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Optimizations of the error checking are possible, but they must not change the semantics of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink>, <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink>, <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink>, Section 7.6.6 (Method Selection and Combination), Section 7.6.6.2 (Standard Method Combination), Section 7.6.6.4 (Built-in Method Combination Types) 



