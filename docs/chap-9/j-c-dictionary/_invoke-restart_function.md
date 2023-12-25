**invoke-restart** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink> <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> &amp;rest *arguments → \{result\}*\* 







 



 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>—a *restart designator* . 



<GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> associated with <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, if that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returns. 



**Description:** 



Calls the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> associated with <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, passing <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to it. <GlossaryTerm styled={true} term={"restart"}><i>Restart</i></GlossaryTerm> must be valid in the current *dynamic environment*. 



**Examples:**
```lisp

(defun add3 (x) (check-type x number) (+ x 3)) 
(foo ’seven) 
▷ Error: The value SEVEN was not of type NUMBER. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a different value to use. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> (invoke-restart ’store-value 7) 
*→* 10 

```
**Side Effects:** 



A non-local transfer of control might be done by the restart. 



**Affected By:** 



Existing restarts. 



**Exceptional Situations:** 



If <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is not valid, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"control-error"}><b>control-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>, <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> 



**Notes:** 



The most common use for <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink> is in a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> . It might be used explicitly, or implicitly through <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> or a *restart function*. 



*Restart functions* call <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, not vice versa. That is, *invoke-restart* provides primitive functionality, and *restart functions* are non-essential “syntactic sugar.” 







 



 



<DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> 



