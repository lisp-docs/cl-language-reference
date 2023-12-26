**destructuring-bind** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> *lambda-list expression \{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*lambda-list*—a <GlossaryTerm styled={true} term={"destructuring lambda list"}><i>destructuring lambda list</i></GlossaryTerm>. 



<ClLinks  term={"expression"}><i>expression</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> binds the variables specified in *lambda-list* to the corresponding values in the tree structure resulting from the evaluation of <ClLinks  term={"expression"}><i>expression</i></ClLinks>; then <DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> evaluates <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



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



If the result of evaluating the <ClLinks  term={"expression"}><i>expression</i></ClLinks> does not match the destructuring pattern, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> should be signaled. 



**See Also:** 



<DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>, <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> 



