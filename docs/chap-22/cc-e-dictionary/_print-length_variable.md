*∗<ClLinks styled={true} term={"print-length"}><b>*print-length*</b></ClLinks>∗ Variable* 



**Value Type:** 



a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Initial Value:** 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



**\*print-level\*** controls how many levels deep a nested <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> will print. If it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, then no control is exercised. Otherwise, it is an *integer* indicating the maximum level to be printed. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to be printed is at level 0; its components (as of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> or <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> ) are at level 1; and so on. If an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> 



to be recursively printed has components and is at a level equal to or greater than the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*print-level\***, then the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is printed as “#”. 



<ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> controls how many elements at a given level are printed. If it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, there is no limit to the number of components printed. Otherwise, it is an *integer* indicating the maximum number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to be printed. If exceeded, the printer will print “...” in place of the other <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>. In the case of a *dotted list*, if the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> contains exactly as many <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> as the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, the terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> is printed rather than printing “...” 



**\*print-level\*** and <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> affect the printing of an any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> printed with a list-like syntax. They do not affect the printing of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>, and *bit vectors*. 



**Examples:**
```lisp

(setq a ’(1 (2 (3 (4 (5 (6))))))) → (1 (2 (3 (4 (5 (6)))))) 
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
→ NIL 
(setq a ’(1 2 3 4 5 6)) → (1 2 3 4 5 6) 
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
→ NIL 
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
→ NIL 

```
**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> 



