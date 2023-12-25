*∗<DictionaryLink styled={true} term={"print-length"}><b>*print-length*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Initial Value:** 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



**\*print-level\*** controls how many levels deep a nested <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> will print. If it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, then no control is exercised. Otherwise, it is an *integer* indicating the maximum level to be printed. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to be printed is at level 0; its components (as of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> ) are at level 1; and so on. If an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> 



to be recursively printed has components and is at a level equal to or greater than the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*print-level\***, then the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is printed as “#”. 



<DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> controls how many elements at a given level are printed. If it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, there is no limit to the number of components printed. Otherwise, it is an *integer* indicating the maximum number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to be printed. If exceeded, the printer will print “...” in place of the other <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>. In the case of a *dotted list*, if the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> contains exactly as many <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, the terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> is printed rather than printing “...” 



**\*print-level\*** and <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> affect the printing of an any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> printed with a list-like syntax. They do not affect the printing of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, and *bit vectors*. 



**Examples:**
```lisp

(setq a ’(1 (2 (3 (4 (5 (6))))))) *→* (1 (2 (3 (4 (5 (6)))))) 
(dotimes (i 8) 
  (let ((\*print-level\* i)) 
    (format t "~&~D – ~S~%" i a))) 
▷ 0 – # 
▷ 1 – (1 #) 
▷ 2 – (1 (2 #)) 
▷ 3 – (1 (2 (3 #))) 
▷ 4 – (1 (2 (3 (4 #)))) 
▷ 5 – (1 (2 (3 (4 (5 #))))) 
▷ 6 – (1 (2 (3 (4 (5 (6)))))) 
▷ 7 – (1 (2 (3 (4 (5 (6)))))) 
*→* NIL 
(setq a ’(1 2 3 4 5 6)) *→* (1 2 3 4 5 6) 
(dotimes (i 7) 
  (let ((\*print-length\* i)) 

    
    
    (format t "~&~D – ~S~%" i a))) 
▷ 0 – (...) 
▷ 1 – (1 ...) 
▷ 2 – (1 2 ...) 
▷ 3 – (1 2 3 ...) 
▷ 4 – (1 2 3 4 ...) 
▷ 5 – (1 2 3 4 5 6) 
▷ 6 – (1 2 3 4 5 6) 
*→* NIL 
(dolist (level-length ’((0 1) (1 1) (1 2) (1 3) (1 4) 
			(2 1) (2 2) (2 3) (3 2) (3 3) (3 4))) 
  (let ((\*print-level\* (first level-length)) 
	(\*print-length\* (second level-length))) 
    (format t "~&~D ~D – ~S~%" 
	    \*print-level\* \*print-length\* 
	    ’(if (member x y) (+ (car x) 3) ’(foo . #(a b c d "Baz")))))) 
▷ 0 1 – # 
▷ 1 1 – (IF ...) 
▷ 1 2 – (IF # ...) 
▷ 1 3 – (IF # # ...) 
▷ 1 4 – (IF # # #) 
▷ 2 1 – (IF ...) 
▷ 2 2 – (IF (MEMBER X ...) ...) 
▷ 2 3 – (IF (MEMBER X Y) (+ # 3) ...) 
▷ 3 2 – (IF (MEMBER X ...) ...) 
▷ 3 3 – (IF (MEMBER X Y) (+ (CAR X) 3) ...) 
▷ 3 4 – (IF (MEMBER X Y) (+ (CAR X) 3) ’(FOO . #(A B C D ...))) 
*→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> 



