**call-method, make-method** *Local Macro* 



**Syntax:** 



<ClLinks  term={"call-method"}><b>call-method</b></ClLinks> <ClLinks  term={"method"}><i>method</i></ClLinks> &amp;optional *next-method-list → \{result\}*\* 



<ClLinks  term={"make-method"}><b>make-method</b></ClLinks> *form → method-object* 



**Arguments and Values:** 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a *method object*, or a <ClLinks  term={"list"}><i>list</i></ClLinks> (see below); not evaluated. 



*method-object*—a *method object*. 



*next-method-list*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *method objects*; not evaluated. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"method"}><i>method</i></ClLinks> invocation. 



**Description:** 



The macro <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> is used in method combination. It hides the <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> details of how <ClLinks  term={"method"}><i>methods</i></ClLinks> are called. The macro <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and can only be used within an *effective method form*. 



Whether or not <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> are the same as for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> which are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> outside of an *effective method form* are undefined. 



The macro <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> invokes the specified <ClLinks  term={"method"}><i>method</i></ClLinks>, supplying it with arguments and with definitions for <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> and for <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks>. If the invocation of <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> is lexically inside of a <ClLinks  term={"make-method"}><b>make-method</b></ClLinks>, the arguments are those that were supplied to that method. Otherwise the arguments are those that were supplied to the generic function. The definitions of <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> and <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> rely on the specified *next-method-list*. 



If <ClLinks  term={"method"}><i>method</i></ClLinks> is a <ClLinks  term={"list"}><i>list</i></ClLinks>, the first element of the <ClLinks  term={"list"}><i>list</i></ClLinks> must be the symbol <ClLinks  term={"make-method"}><b>make-method</b></ClLinks> and the second element must be a <ClLinks  term={"form"}><i>form</i></ClLinks>. Such a <ClLinks  term={"list"}><i>list</i></ClLinks> specifies a *method object* whose <ClLinks  term={"method"}><i>method</i></ClLinks> function has a body that is the given <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Next-method-list* can contain *method objects* or <ClLinks  term={"list"}><i>lists</i></ClLinks>, the first element of which must be the symbol <ClLinks  term={"make-method"}><b>make-method</b></ClLinks> and the second element of which must be a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Those are the only two places where <ClLinks  term={"make-method"}><b>make-method</b></ClLinks> can be used. The <ClLinks  term={"form"}><i>form</i></ClLinks> used with <ClLinks  term={"make-method"}><b>make-method</b></ClLinks> is evaluated in the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> augmented with a local macro definition for <ClLinks  term={"call-method"}><b>call-method</b></ClLinks> and with bindings named by symbols not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> from the COMMON-LISP-USER <ClLinks  term={"package"}><i>package</i></ClLinks>. 



The <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> function available to <ClLinks  term={"method"}><i>method</i></ClLinks> will call the first <ClLinks  term={"method"}><i>method</i></ClLinks> in *next-method-list*. 



 



 



The <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> function available in that <ClLinks  term={"method"}><i>method</i></ClLinks>, in turn, will call the second <ClLinks  term={"method"}><i>method</i></ClLinks> in *next-method-list*, and so on, until the list of next <ClLinks  term={"method"}><i>methods</i></ClLinks> is exhausted. 



If *next-method-list* is not supplied, the <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> function available to <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"control-error"}><b>control-error</b></ClLinks> and the <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> function available to <ClLinks  term={"method"}><i>method</i></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp

```
**See Also:** 



<ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>, <ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks>, <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> 



