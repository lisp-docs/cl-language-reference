**destructuring-bind** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> *lambda-list expression \{declaration\}*\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*lambda-list*—a *destructuring lambda list*. 



<GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> binds the variables specified in *lambda-list* to the corresponding values in the tree structure resulting from the evaluation of <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; then <DictionaryLink styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> evaluates <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



The *lambda-list* supports destructuring as described in Section 3.4.5 (Destructuring Lambda Lists). **Examples:**
```lisp

(defun iota (n) (loop for i from 1 to n collect i)) ;helper 
(destructuring-bind ((a &optional (b ’bee)) one two three) 
    ‘((alpha) ,@(iota 3)) 
  (list a b three two one)) *→* (ALPHA BEE 3 2 1) 
Data and Control 



```
**Exceptional Situations:** 



If the result of evaluating the <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> does not match the destructuring pattern, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> should be signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> 



