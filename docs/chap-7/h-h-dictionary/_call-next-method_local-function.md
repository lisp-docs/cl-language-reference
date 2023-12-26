**call-next-method** *Local Function* 



**Syntax:** 



<ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> &amp;rest *args → \{result\}*\* 



**Arguments and Values:** 



*arg*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"method"}><i>method</i></ClLinks> it calls. 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> can be used within the body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>) of a <ClLinks  term={"method"}><i>method</i></ClLinks> defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> to call the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



If there is no next <ClLinks  term={"method"}><i>method</i></ClLinks>, the generic function <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> is called. 



The type of method combination used determines which <ClLinks  term={"method"}><i>methods</i></ClLinks> can invoke <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>. The standard <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> type allows <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> to be used within primary <ClLinks  term={"method"}><i>methods</i></ClLinks> and <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>. For generic functions using a type of method combination defined by the short form of <ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks>, <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> can be used in <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> only. 



When <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with no arguments, it passes the current <ClLinks  term={"method"}><i>method</i></ClLinks>’s original arguments to the next <ClLinks  term={"method"}><i>method</i></ClLinks>. Neither argument defaulting, nor using <ClLinks  term={"setq"}><b>setq</b></ClLinks>, nor rebinding variables with the same <ClLinks  term={"name"}><i>names</i></ClLinks> as parameters of the <ClLinks  term={"method"}><i>method</i></ClLinks> affects the values <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> passes to the <ClLinks  term={"method"}><i>method</i></ClLinks> it calls. 



When <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with arguments, the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> is called with those arguments. 



If <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with arguments but omits optional arguments, the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> called defaults those arguments. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> returns any <ClLinks  term={"value"}><i>values</i></ClLinks> that are returned by the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



 



 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm> and can only be used within the body of a <ClLinks  term={"method"}><i>method</i></ClLinks> defined by a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm>. 



Whether or not <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> are the same as for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> which are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> outside of a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> are undefined. 



**Affected By:** 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"call-method"}><b>call-method</b></ClLinks>, <ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. 



**Exceptional Situations:** 



When providing arguments to <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>, the following rule must be satisfied or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> should be signaled: the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for a changed set of arguments for <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> must be the same as the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for the original arguments to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Optimizations of the error checking are possible, but they must not change the semantics of <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks>, <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks>, <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks>, <ClLinks  term={"call-method"}><b>call-method</b></ClLinks>, Section 7.6.6 (Method Selection and Combination), Section 7.6.6.2 (Standard Method Combination), Section 7.6.6.4 (Built-in Method Combination Types) 



