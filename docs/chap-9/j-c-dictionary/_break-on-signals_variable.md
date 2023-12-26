*∗<ClLinks styled={true} term={"break-on-signals"}><b>*break-on-signals*</b></ClLinks>∗ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Initial Value:** 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



*∗<ClLinks styled={true} term={"break-on-signals"}><b>*break-on-signals*</b></ClLinks>∗* 



**Description:** 



When (typep <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> \*break-on-signals\*) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, calls to <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks>, and to other <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> such as <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> that implicitly call <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks>, enter the debugger prior to *signaling* the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



The **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> can be used to continue with the normal *signaling* process when a break occurs process due to <ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>. 



**Examples:**
```lisp
\*break-on-signals\* → NIL 
(ignore-errors (error ’simple-error :format-control "Fooey!")) 
→ NIL, #<SIMPLE-ERROR 32207172> 
(let ((\*break-on-signals\* ’error)) 
  (ignore-errors (error ’simple-error :format-control "Fooey!"))) 
▷ Break: Fooey! 
▷ BREAK entered because of \*BREAK-ON-SIGNALS\*. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Continue to signal. 
▷ 2: Top level. 
▷ Debug> :CONTINUE 1 
▷ Continue to signal. 
→ NIL, #<SIMPLE-ERROR 32212257> 
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



<ClLinks styled={true} term={"break"}><b>break</b></ClLinks>, <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks>, <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks>, <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks>, Section 9.1 (Condition System Concepts) 



**Notes:** 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> is intended primarily for use in debugging code that does signaling. When setting <ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>, the user is encouraged to choose the most restrictive specification 







 



 



that suffices. Setting <ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> effectively violates the modular handling of <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> signaling. In practice, the complete effect of setting <ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> might be unpredictable in some cases since the user might not be aware of the variety or number of calls to <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> that are used in code called only incidentally. 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> enables an early entry to the debugger but such an entry does not preclude an additional entry to the debugger in the case of operations such as <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> and <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>. 



