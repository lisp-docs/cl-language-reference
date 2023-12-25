*∗<DictionaryLink styled={true} term={"break-on-signals"}><b>*break-on-signals*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *type specifier* . 



**Initial Value:** 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



*∗<DictionaryLink styled={true} term={"break-on-signals"}><b>*break-on-signals*</b></DictionaryLink>∗* 



**Description:** 



When (typep <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> \*break-on-signals\*) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, calls to <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink>, and to other <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> that implicitly call <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink>, enter the debugger prior to *signaling* the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



The **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> can be used to continue with the normal *signaling* process when a break occurs process due to <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>. 



**Examples:**
```lisp

\*break-on-signals\* *→* NIL 
(ignore-errors (error ’simple-error :format-control "Fooey!")) 
*→* NIL, #<SIMPLE-ERROR 32207172> 
(let ((\*break-on-signals\* ’error)) 
  (ignore-errors (error ’simple-error :format-control "Fooey!"))) 
▷ Break: Fooey! 
▷ BREAK entered because of \*BREAK-ON-SIGNALS\*. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Continue to signal. 
▷ 2: Top level. 
▷ Debug> :CONTINUE 1 
▷ Continue to signal. 
*→* NIL, #<SIMPLE-ERROR 32212257> 
(let ((\*break-on-signals\* ’error)) 
  (error ’simple-error :format-control "Fooey!")) 
▷ Break: Fooey! 
▷ BREAK entered because of \*BREAK-ON-SIGNALS\*. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Continue to signal. 
▷ 2: Top level. 
▷ Debug> :CONTINUE 1 
▷ Continue to signal. 
▷ Error: Fooey! 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Top level. 
▷ Debug> :CONTINUE 1 
▷ Top level. 

```
**See Also:** 



<DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink>, <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink>, <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink>, Section 9.1 (Condition System Concepts) 



**Notes:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> is intended primarily for use in debugging code that does signaling. When setting <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>, the user is encouraged to choose the most restrictive specification 







 



 



that suffices. Setting <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> effectively violates the modular handling of <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> signaling. In practice, the complete effect of setting <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> might be unpredictable in some cases since the user might not be aware of the variety or number of calls to <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> that are used in code called only incidentally. 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> enables an early entry to the debugger but such an entry does not preclude an additional entry to the debugger in the case of operations such as <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> and <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>. 



