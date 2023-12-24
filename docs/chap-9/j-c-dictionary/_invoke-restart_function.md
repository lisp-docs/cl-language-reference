**invoke-restart** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks> <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> &amp;rest *arguments → \{result\}*\* 







 



 



**Arguments and Values:** 



<ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>—a *restart designator* . 



<ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> associated with <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, if that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> returns. 



**Description:** 



Calls the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> associated with <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, passing <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to it. <ClLinks styled={true} term={"restart"}><i>Restart</i></ClLinks> must be valid in the current *dynamic environment*. 



**Examples:**
```lisp

(defun add3 (x) (check-type x number) (+ x 3)) 
(foo ’seven) 
▷ Error: The value SEVEN was not of type NUMBER. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a different value to use. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> (invoke-restart ’store-value 7) 
→ 10 

```
**Side Effects:** 



A non-local transfer of control might be done by the restart. 



**Affected By:** 



Existing restarts. 



**Exceptional Situations:** 



If <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is not valid, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"control-error"}><b>control-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks>, <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks>, <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>, <ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> 



**Notes:** 



The most common use for <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks> is in a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> . It might be used explicitly, or implicitly through <ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> or a *restart function*. 



*Restart functions* call <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, not vice versa. That is, *invoke-restart* provides primitive functionality, and *restart functions* are non-essential “syntactic sugar.” 







 



 



<ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks> 



