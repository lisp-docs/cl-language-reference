**call-method, make-method** *Local Macro* 



**Syntax:** 



<ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> &amp;optional *next-method-list → \{result\}*\* 



<ClLinks styled={true} term={"make-method"}><b>make-method</b></ClLinks> *form → method-object* 



**Arguments and Values:** 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks>—a *method object*, or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (see below); not evaluated. 



*method-object*—a *method object*. 



*next-method-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *method objects*; not evaluated. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> invocation. 



**Description:** 



The macro <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> is used in method combination. It hides the <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> details of how <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are called. The macro <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> has *lexical scope* and can only be used within an *effective method form*. 



Whether or not <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> are the same as for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which are <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*. The consequences of attempting to use <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> outside of an *effective method form* are undefined. 



The macro <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> invokes the specified <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>, supplying it with arguments and with definitions for <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> and for <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks>. If the invocation of <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> is lexically inside of a <ClLinks styled={true} term={"make-method"}><b>make-method</b></ClLinks>, the arguments are those that were supplied to that method. Otherwise the arguments are those that were supplied to the generic function. The definitions of <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> and <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> rely on the specified *next-method-list*. 



If <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, the first element of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> must be the symbol <ClLinks styled={true} term={"make-method"}><b>make-method</b></ClLinks> and the second element must be a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Such a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> specifies a *method object* whose <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> function has a body that is the given <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*Next-method-list* can contain *method objects* or <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>, the first element of which must be the symbol <ClLinks styled={true} term={"make-method"}><b>make-method</b></ClLinks> and the second element of which must be a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



Those are the only two places where <ClLinks styled={true} term={"make-method"}><b>make-method</b></ClLinks> can be used. The <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> used with <ClLinks styled={true} term={"make-method"}><b>make-method</b></ClLinks> is evaluated in the *null lexical environment* augmented with a local macro definition for <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> and with bindings named by symbols not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> from the COMMON-LISP-USER <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



The <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> function available to <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> will call the first <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> in *next-method-list*. 



 



 



The <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> function available in that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>, in turn, will call the second <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> in *next-method-list*, and so on, until the list of next <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> is exhausted. 



If *next-method-list* is not supplied, the <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> function available to <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"control-error"}><b>control-error</b></ClLinks> and the <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> function available to <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp

```
**See Also:** 



<ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>, <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>, <ClLinks styled={true} term={"next-method-p"}><b>next-method-p</b></ClLinks> 



