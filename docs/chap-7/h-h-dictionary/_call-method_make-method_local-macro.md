**call-method, make-method** *Local Macro* 



**Syntax:** 



<DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> &amp;optional *next-method-list → \{result\}*\* 



<DictionaryLink styled={true} term={"make-method"}><b>make-method</b></DictionaryLink> *form → method-object* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>—a *method object*, or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (see below); not evaluated. 



*method-object*—a *method object*. 



*next-method-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *method objects*; not evaluated. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> invocation. 



**Description:** 



The macro <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> is used in method combination. It hides the <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> details of how <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are called. The macro <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> has *lexical scope* and can only be used within an *effective method form*. 



Whether or not <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> are the same as for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*. The consequences of attempting to use <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> outside of an *effective method form* are undefined. 



The macro <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> invokes the specified <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>, supplying it with arguments and with definitions for <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and for <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink>. If the invocation of <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> is lexically inside of a <DictionaryLink styled={true} term={"make-method"}><b>make-method</b></DictionaryLink>, the arguments are those that were supplied to that method. Otherwise the arguments are those that were supplied to the generic function. The definitions of <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> rely on the specified *next-method-list*. 



If <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the first element of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> must be the symbol <DictionaryLink styled={true} term={"make-method"}><b>make-method</b></DictionaryLink> and the second element must be a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Such a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> specifies a *method object* whose <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> function has a body that is the given <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*Next-method-list* can contain *method objects* or <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>, the first element of which must be the symbol <DictionaryLink styled={true} term={"make-method"}><b>make-method</b></DictionaryLink> and the second element of which must be a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



Those are the only two places where <DictionaryLink styled={true} term={"make-method"}><b>make-method</b></DictionaryLink> can be used. The <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> used with <DictionaryLink styled={true} term={"make-method"}><b>make-method</b></DictionaryLink> is evaluated in the *null lexical environment* augmented with a local macro definition for <DictionaryLink styled={true} term={"call-method"}><b>call-method</b></DictionaryLink> and with bindings named by symbols not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> from the COMMON-LISP-USER <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



The <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available to <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> will call the first <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> in *next-method-list*. 



 



 



The <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available in that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>, in turn, will call the second <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> in *next-method-list*, and so on, until the list of next <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> is exhausted. 



If *next-method-list* is not supplied, the <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available to <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"control-error"}><b>control-error</b></DictionaryLink> and the <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> function available to <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp


```
**See Also:** 



<DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink styled={true} term={"next-method-p"}><b>next-method-p</b></DictionaryLink> 



