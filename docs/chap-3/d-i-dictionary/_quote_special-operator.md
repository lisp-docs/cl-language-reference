**quote** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> *object → object* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>; not evaluated. 



**Description:** 



The <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> just returns <ClLinks  term={"object"}><i>object</i></ClLinks>. 



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



The textual notation ’<ClLinks  term={"object"}><i>object</i></ClLinks> is equivalent to (quote <ClLinks  term={"object"}><i>object</i></ClLinks>); see Section 3.2.1 (Compiler Terminology). 



Some <ClLinks  term={"object"}><i>objects</i></ClLinks>, called <GlossaryTerm styled={true} term={"self-evaluating object"}><i>self-evaluating objects</i></GlossaryTerm>, do not require quotation by <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink>. However, <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> and <ClLinks  term={"list"}><i>lists</i></ClLinks> are used to represent parts of programs, and so would not be useable as constant data in a program without <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink>. Since <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> suppresses the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of these <ClLinks  term={"object"}><i>objects</i></ClLinks>, they become data rather than program. 



