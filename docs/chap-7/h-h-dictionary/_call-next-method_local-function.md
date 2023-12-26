**call-next-method** *Local Function* 



**Syntax:** 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> &amp;rest *args → \{result\}*\* 



**Arguments and Values:** 



*arg*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"method"}><i>method</i></ClLinks> it calls. 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can be used within the body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>) of a <ClLinks  term={"method"}><i>method</i></ClLinks> defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> to call the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



If there is no next <ClLinks  term={"method"}><i>method</i></ClLinks>, the generic function <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is called. 



The type of method combination used determines which <ClLinks  term={"method"}><i>methods</i></ClLinks> can invoke <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. The standard <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> type allows <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> to be used within primary <ClLinks  term={"method"}><i>methods</i></ClLinks> and <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>. For generic functions using a type of method combination defined by the short form of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can be used in <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> only. 



When <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with no arguments, it passes the current <ClLinks  term={"method"}><i>method</i></ClLinks>’s original arguments to the next <ClLinks  term={"method"}><i>method</i></ClLinks>. Neither argument defaulting, nor using <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>, nor rebinding variables with the same <ClLinks  term={"name"}><i>names</i></ClLinks> as parameters of the <ClLinks  term={"method"}><i>method</i></ClLinks> affects the values <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> passes to the <ClLinks  term={"method"}><i>method</i></ClLinks> it calls. 



When <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with arguments, the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> is called with those arguments. 



If <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with arguments but omits optional arguments, the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> called defaults those arguments. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> returns any <ClLinks  term={"value"}><i>values</i></ClLinks> that are returned by the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



 



 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm> and can only be used within the body of a <ClLinks  term={"method"}><i>method</i></ClLinks> defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm>. 



Whether or not <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> are the same as for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> which are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> outside of a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> are undefined. 



**Affected By:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink>, <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. 



**Exceptional Situations:** 



When providing arguments to <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, the following rule must be satisfied or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> should be signaled: the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for a changed set of arguments for <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be the same as the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for the original arguments to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Optimizations of the error checking are possible, but they must not change the semantics of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink>, <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink>, <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink>, Section 7.6.6 (Method Selection and Combination), Section 7.6.6.2 (Standard Method Combination), Section 7.6.6.4 (Built-in Method Combination Types) 



