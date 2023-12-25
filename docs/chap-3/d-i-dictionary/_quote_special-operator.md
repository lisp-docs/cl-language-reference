**quote** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> *object → object* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; not evaluated. 



**Description:** 



The <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> *special operator* just returns <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



The consequences are undefined if *literal objects* (including *quoted objects*) are destructively modified. 



**Examples:**
```lisp

(setq a 1) *→* 1 
(quote (setq a 3)) *→* (SETQ A 3) 
a *→* 1 
’a *→* A 
”a *→* (QUOTE A)  

”’a *→* (QUOTE (QUOTE A)) 
(setq a 43) *→* 43 
(list a (cons a 3)) *→* (43 (43 . 3)) 
(list (quote a) (quote (cons a 3))) *→* (A (CONS A 3)) 
1 *→* 1 
’1 *→* 1 
"foo" *→* "foo" 
’"foo" *→* "foo" 
(car ’(a b)) *→* A 
’(car ’(a b)) *→* (CAR (QUOTE (A B))) 
#(car ’(a b)) *→* #(CAR (QUOTE (A B))) 
’#(car ’(a b)) *→* #(CAR (QUOTE (A B))) 

```
**See Also:** 



Section 3.1 (Evaluation), Section 2.4.3 (Single-Quote), Section 3.2.1 (Compiler Terminology) 



**Notes:** 



The textual notation ’<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is equivalent to (quote <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>); see Section 3.2.1 (Compiler Terminology). 



Some <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, called *self-evaluating objects*, do not require quotation by <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink>. However, <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> are used to represent parts of programs, and so would not be useable as constant data in a program without <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink>. Since <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> suppresses the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of these <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, they become data rather than program. 



