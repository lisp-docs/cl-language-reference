**quote** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> *object → object* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; not evaluated. 



**Description:** 



The <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> *special operator* just returns <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



The consequences are undefined if *literal objects* (including *quoted objects*) are destructively modified. 



**Examples:**
```lisp

(setq a 1) → 1 
(quote (setq a 3)) → (SETQ A 3) 
a → 1 
’a → A 
”a → (QUOTE A)  

”’a → (QUOTE (QUOTE A)) 
(setq a 43) → 43 
(list a (cons a 3)) → (43 (43 . 3)) 
(list (quote a) (quote (cons a 3))) → (A (CONS A 3)) 
1 → 1 
’1 → 1 
"foo" → "foo" 
’"foo" → "foo" 
(car ’(a b)) → A 
’(car ’(a b)) → (CAR (QUOTE (A B))) 
#(car ’(a b)) → #(CAR (QUOTE (A B))) 
’#(car ’(a b)) → #(CAR (QUOTE (A B))) 

```
**See Also:** 



Section 3.1 (Evaluation), Section 2.4.3 (Single-Quote), Section 3.2.1 (Compiler Terminology) 



**Notes:** 



The textual notation ’<ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is equivalent to (quote <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>); see Section 3.2.1 (Compiler Terminology). 



Some <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, called *self-evaluating objects*, do not require quotation by <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks>. However, <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> and <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> are used to represent parts of programs, and so would not be useable as constant data in a program without <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks>. Since <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> suppresses the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of these <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, they become data rather than program. 



