**invoke-debugger** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></ClLinks> *condition →* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a *condition object*. 



**Description:** 



<ClLinks styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></ClLinks> attempts to enter the debugger with <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



If <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, it should be a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (or the name of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) to be called prior to entry to the standard debugger. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called with <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> bound to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, and the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> must accept two arguments: the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> prior to binding it to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. If the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> returns normally, the standard debugger is entered. 



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



<ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> is bound to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, program execution is discontinued, and the debugger is entered. 



**Affected By:** 



**\*debug-io\*** and <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"break"}><b>break</b></ClLinks> 







 



 



<ClLinks styled={true} term={"break"}><b>break</b></ClLinks> 



