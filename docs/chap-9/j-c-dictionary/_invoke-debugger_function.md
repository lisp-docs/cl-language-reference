**invoke-debugger** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink> *condition →* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a *condition object*. 



**Description:** 



<DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink> attempts to enter the debugger with <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



If <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, it should be a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (or the name of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) to be called prior to entry to the standard debugger. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called with <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> bound to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, and the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> must accept two arguments: the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> prior to binding it to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. If the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returns normally, the standard debugger is entered. 



The standard debugger never directly returns. Return can occur only by a non-local transfer of control, such as the use of a restart function. 



**Examples:**
```lisp

(ignore-errors ;Normally, this would suppress debugger entry 
  (handler-bind ((error #’invoke-debugger)) ;But this forces debugger entry 
    (error "Foo."))) 
Debug: Foo. 
To continue, type :CONTINUE followed by an option number: 
1: Return to Lisp Toplevel. 
Debug> 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> is bound to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, program execution is discontinued, and the debugger is entered. 



**Affected By:** 



**\*debug-io\*** and <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> 







 



 



<DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink> 



