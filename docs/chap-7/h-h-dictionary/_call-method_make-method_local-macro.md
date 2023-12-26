**call-method, make-method** *Local Macro* 



**Syntax:** 



<DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> <ClLinks  term={"method"}><i>method</i></ClLinks> &amp;optional *next-method-list → \{result\}*\* 



<DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> *form → method-object* 



**Arguments and Values:** 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a *method object*, or a <ClLinks  term={"list"}><i>list</i></ClLinks> (see below); not evaluated. 



*method-object*—a *method object*. 



*next-method-list*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *method objects*; not evaluated. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"method"}><i>method</i></ClLinks> invocation. 



**Description:** 



The macro <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> is used in method combination. It hides the <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> details of how <ClLinks  term={"method"}><i>methods</i></ClLinks> are called. The macro <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and can only be used within an *effective method form*. 



Whether or not <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> are the same as for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> which are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> outside of an *effective method form* are undefined. 



The macro <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> invokes the specified <ClLinks  term={"method"}><i>method</i></ClLinks>, supplying it with arguments and with definitions for <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and for <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink>. If the invocation of <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> is lexically inside of a <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink>, the arguments are those that were supplied to that method. Otherwise the arguments are those that were supplied to the generic function. The definitions of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> rely on the specified *next-method-list*. 



If <ClLinks  term={"method"}><i>method</i></ClLinks> is a <ClLinks  term={"list"}><i>list</i></ClLinks>, the first element of the <ClLinks  term={"list"}><i>list</i></ClLinks> must be the symbol <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> and the second element must be a <ClLinks  term={"form"}><i>form</i></ClLinks>. Such a <ClLinks  term={"list"}><i>list</i></ClLinks> specifies a *method object* whose <ClLinks  term={"method"}><i>method</i></ClLinks> function has a body that is the given <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Next-method-list* can contain *method objects* or <ClLinks  term={"list"}><i>lists</i></ClLinks>, the first element of which must be the symbol <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> and the second element of which must be a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Those are the only two places where <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> can be used. The <ClLinks  term={"form"}><i>form</i></ClLinks> used with <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> is evaluated in the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> augmented with a local macro definition for <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> and with bindings named by symbols not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> from the COMMON-LISP-USER <ClLinks  term={"package"}><i>package</i></ClLinks>. 



The <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available to <ClLinks  term={"method"}><i>method</i></ClLinks> will call the first <ClLinks  term={"method"}><i>method</i></ClLinks> in *next-method-list*. 



 



 



The <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available in that <ClLinks  term={"method"}><i>method</i></ClLinks>, in turn, will call the second <ClLinks  term={"method"}><i>method</i></ClLinks> in *next-method-list*, and so on, until the list of next <ClLinks  term={"method"}><i>methods</i></ClLinks> is exhausted. 



If *next-method-list* is not supplied, the <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available to <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"control-error"}><b>control-error</b></DictionaryLink> and the <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> function available to <ClLinks  term={"method"}><i>method</i></ClLinks> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

```
**See Also:** 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> 



