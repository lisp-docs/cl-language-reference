**call-next-method** *Local Function* 



**Syntax:** 



<ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> &amp;rest *args → \{result\}*\* 



**Arguments and Values:** 



*arg*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> it calls. 



**Description:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> can be used within the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> (but not the *lambda list*) of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> defined by a *method-defining form* to call the *next method*. 



If there is no next <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>, the generic function <ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks> is called. 



The type of method combination used determines which <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> can invoke <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>. The standard *method combination* type allows <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> to be used within primary <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> and *around methods*. For generic functions using a type of method combination defined by the short form of <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>, <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> can be used in *around methods* only. 



When <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with no arguments, it passes the current <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>’s original arguments to the next <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. Neither argument defaulting, nor using <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>, nor rebinding variables with the same <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> as parameters of the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> affects the values <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> passes to the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> it calls. 



When <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with arguments, the *next method* is called with those arguments. 



If <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with arguments but omits optional arguments, the *next method* called defaults those arguments. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> returns any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> that are returned by the *next method*. 



 



 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> has *lexical scope* and *indefinite extent* and can only be used within the body of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> defined by a *method-defining form*. 



Whether or not <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> are the same as for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which are <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*. The consequences of attempting to use <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> outside of a *method-defining form* are undefined. 



**Affected By:** 



<ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks>, <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. 



**Exceptional Situations:** 



When providing arguments to <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>, the following rule must be satisfied or an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> should be signaled: the ordered set of *applicable methods* for a changed set of arguments for <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> must be the same as the ordered set of *applicable methods* for the original arguments to the *generic function*. Optimizations of the error checking are possible, but they must not change the semantics of <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>, <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks>, <ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks>, <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks>, Section 7.6.6 (Method Selection and Combination), Section 7.6.6.2 (Standard Method Combination), Section 7.6.6.4 (Built-in Method Combination Types) 



