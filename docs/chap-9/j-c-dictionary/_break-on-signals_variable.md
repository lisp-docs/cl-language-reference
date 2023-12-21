*∗***break-on-signals***∗ Variable* 



**Value Type:** 



a *type specifier* . 



**Initial Value:** 



**nil**. 







 



 



*∗***break-on-signals***∗* 



**Description:** 



When (typep *condition* \*break-on-signals\*) returns *true*, calls to **signal**, and to other *operators* such as **error** that implicitly call **signal**, enter the debugger prior to *signaling* the *condition*. 



The **continue** *restart* can be used to continue with the normal *signaling* process when a break occurs process due to **\*break-on-signals\***. 



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



**break**, **signal**, **warn**, **error**, **typep**, Section 9.1 (Condition System Concepts) 



**Notes:** 



**\*break-on-signals\*** is intended primarily for use in debugging code that does signaling. When setting **\*break-on-signals\***, the user is encouraged to choose the most restrictive specification 







 



 



that suffices. Setting **\*break-on-signals\*** effectively violates the modular handling of *condition* signaling. In practice, the complete effect of setting **\*break-on-signals\*** might be unpredictable in some cases since the user might not be aware of the variety or number of calls to **signal** that are used in code called only incidentally. 



**\*break-on-signals\*** enables an early entry to the debugger but such an entry does not preclude an additional entry to the debugger in the case of operations such as **error** and **cerror**. 



