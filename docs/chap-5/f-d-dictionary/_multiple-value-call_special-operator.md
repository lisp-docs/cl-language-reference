**multiple-value-call** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> *function-form form*\* *! \{result\}*\* 



**Arguments and Values:** 



*function-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> resulting from the evaluation of *function-form*. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



Applies <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> to a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> collected from groups of <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub>. 



<DictionaryLink  term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> first evaluates the *function-form* to obtain <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, and then evaluates each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. All the values of each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> are gathered together (not just one value from each) and given as arguments to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Examples:**
```lisp
(multiple-value-call #’list 1 ’/ (values 2 3) ’/ (values) ’/ (floor 2.5)) 
*!* (1 / 2 3 / / 2 0.5) 
(+ (floor 5 3) (floor 19 4)) *⌘* (+ 1 4) 
*!* 5 
(multiple-value-call #’+ (floor 5 3) (floor 19 4)) *⌘* (+ 1 2 4 3) 
*!* 10 
```
**See Also:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink>, <DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> 



