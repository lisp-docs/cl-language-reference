**destructuring-bind** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> *lambda-list expression \{declaration\}*\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



→ \{result\}\* 



**Arguments and Values:** 



*lambda-list*—a <GlossaryTerm styled={true} term={"destructuring lambda list"}><i>destructuring lambda list</i></GlossaryTerm>. 



<GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> binds the variables specified in *lambda-list* to the corresponding values in the tree structure resulting from the evaluation of <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; then <DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> evaluates <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



The *lambda-list* supports destructuring as described in Section 3.4.5 (Destructuring Lambda Lists). 

**Examples:**
```lisp
(defun iota (n) (loop for i from 1 to n collect i)) ;helper 
(destructuring-bind ((a &optional (b ’bee)) one two three) 
    ‘((alpha) ,@(iota 3)) 
  (list a b three two one)) → (ALPHA BEE 3 2 1) 
Data and Control 

```
**Exceptional Situations:** 



If the result of evaluating the <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> does not match the destructuring pattern, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> should be signaled. 



**See Also:** 



<DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>, <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> 



