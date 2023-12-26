**call-method, make-method** *Local Macro* 



**Syntax:** 



<DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> &amp;optional *next-method-list → \{result\}*\* 



<DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> *form → method-object* 



**Arguments and Values:** 



<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>—a *method object*, or a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> (see below); not evaluated. 



*method-object*—a *method object*. 



*next-method-list*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *method objects*; not evaluated. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> invocation. 



**Description:** 



The macro <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> is used in method combination. It hides the <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> details of how <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are called. The macro <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and can only be used within an *effective method form*. 



Whether or not <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> is <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> are the same as for <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> outside of an *effective method form* are undefined. 



The macro <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> invokes the specified <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>, supplying it with arguments and with definitions for <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and for <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink>. If the invocation of <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> is lexically inside of a <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink>, the arguments are those that were supplied to that method. Otherwise the arguments are those that were supplied to the generic function. The definitions of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> rely on the specified *next-method-list*. 



If <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, the first element of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> must be the symbol <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> and the second element must be a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Such a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> specifies a *method object* whose <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> function has a body that is the given <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*Next-method-list* can contain *method objects* or <GlossaryTerm  term={"list"}><i>lists</i></GlossaryTerm>, the first element of which must be the symbol <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> and the second element of which must be a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



Those are the only two places where <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> can be used. The <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> used with <DictionaryLink  term={"make-method"}><b>make-method</b></DictionaryLink> is evaluated in the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> augmented with a local macro definition for <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> and with bindings named by symbols not <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> from the COMMON-LISP-USER <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



The <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available to <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> will call the first <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> in *next-method-list*. 



 



 



The <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available in that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>, in turn, will call the second <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> in *next-method-list*, and so on, until the list of next <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> is exhausted. 



If *next-method-list* is not supplied, the <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> function available to <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"control-error"}><b>control-error</b></DictionaryLink> and the <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> function available to <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

```
**See Also:** 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> 



