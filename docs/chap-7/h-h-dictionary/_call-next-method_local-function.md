**call-next-method** *Local Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> &amp;rest *args → \{result\}*\* 



**Arguments and Values:** 



*arg*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> it calls. 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can be used within the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> (but not the *lambda list*) of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> defined by a *method-defining form* to call the *next method*. 



If there is no next <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>, the generic function <DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is called. 



The type of method combination used determines which <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> can invoke <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. The standard *method combination* type allows <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> to be used within primary <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> and *around methods*. For generic functions using a type of method combination defined by the short form of <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can be used in *around methods* only. 



When <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with no arguments, it passes the current <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s original arguments to the next <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. Neither argument defaulting, nor using <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>, nor rebinding variables with the same <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> as parameters of the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> affects the values <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> passes to the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> it calls. 



When <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with arguments, the *next method* is called with those arguments. 



If <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with arguments but omits optional arguments, the *next method* called defaults those arguments. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> returns any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> that are returned by the *next method*. 



 



 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> has *lexical scope* and *indefinite extent* and can only be used within the body of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> defined by a *method-defining form*. 



Whether or not <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> are the same as for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*. The consequences of attempting to use <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> outside of a *method-defining form* are undefined. 



**Affected By:** 



<DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. 



**Exceptional Situations:** 



When providing arguments to <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, the following rule must be satisfied or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> should be signaled: the ordered set of *applicable methods* for a changed set of arguments for <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be the same as the ordered set of *applicable methods* for the original arguments to the *generic function*. Optimizations of the error checking are possible, but they must not change the semantics of <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink>, <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink>, Section 7.6.6 (Method Selection and Combination), Section 7.6.6.2 (Standard Method Combination), Section 7.6.6.4 (Built-in Method Combination Types) 



