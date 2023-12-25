**mapc, mapcar, mapcan, mapl, maplist, mapcon** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"mapc"}><b>mapc</b></ClLinks> <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> &amp;rest <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks><sup>+</sup> → list-1 



<ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks> <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> &amp;rest <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks><sup>+</sup> → result-list 



<ClLinks styled={true} term={"mapcan"}><b>mapcan</b></ClLinks> <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> &amp;rest <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks><sup>+</sup> → concatenated-results 



<ClLinks styled={true} term={"mapl"}><b>mapl</b></ClLinks> <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> &amp;rest <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks><sup>+</sup> → list-1 



<ClLinks styled={true} term={"maplist"}><b>maplist</b></ClLinks> <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> &amp;rest <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks><sup>+</sup> → result-list 







 



 



**mapc, mapcar, mapcan, mapl, maplist, mapcon** 



<ClLinks styled={true} term={"mapcon"}><b>mapcon</b></ClLinks> <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> &amp;rest <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks><sup>+</sup> → concatenated-results 



**Arguments and Values:** 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that must take as many <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> as there are <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>. <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a *proper list*. 



*list-1*—the first <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (which must be a *proper list*). 



*result-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*concatenated-results*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



The mapping operation involves applying <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to successive sets of arguments in which one argument is obtained from each *sequence*. Except for <ClLinks styled={true} term={"mapc"}><b>mapc</b></ClLinks> and <ClLinks styled={true} term={"mapl"}><b>mapl</b></ClLinks>, the result contains the results returned by <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. In the cases of <ClLinks styled={true} term={"mapc"}><b>mapc</b></ClLinks> and <ClLinks styled={true} term={"mapl"}><b>mapl</b></ClLinks>, the resulting *sequence* is <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called first on all the elements with index 0, then on all those with index 1, and so on. *result-type* specifies the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the resulting *sequence*. If <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, it is <ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks>d to a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> as if by <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks>. 



<ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks> operates on successive <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>. <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is applied to the first <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of each <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, then to the second <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of each <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and so on. The iteration terminates when the shortest <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> runs out, and excess elements in other lists are ignored. The value returned by <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks> is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the results of successive calls to <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



<ClLinks styled={true} term={"mapc"}><b>mapc</b></ClLinks> is like <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks> except that the results of applying <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> are not accumulated. The <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> argument is returned. 



<ClLinks styled={true} term={"maplist"}><b>maplist</b></ClLinks> is like <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks> except that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is applied to successive sublists of the <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>. <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is first applied to the <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> themselves, and then to the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of each <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and then to the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of each <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and so on. 



<ClLinks styled={true} term={"mapl"}><b>mapl</b></ClLinks> is like <ClLinks styled={true} term={"maplist"}><b>maplist</b></ClLinks> except that the results of applying <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> are not accumulated; *list-1* is returned. 



<ClLinks styled={true} term={"mapcan"}><b>mapcan</b></ClLinks> and <ClLinks styled={true} term={"mapcon"}><b>mapcon</b></ClLinks> are like <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks> and <ClLinks styled={true} term={"maplist"}><b>maplist</b></ClLinks> respectively, except that the results of applying <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> are combined into a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> by the use of <ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks> rather than <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>. That is, 



(mapcon f x1 ... xn) 



*≡* (apply #’nconc (maplist f x1 ... xn)) 



and similarly for the relationship between <ClLinks styled={true} term={"mapcan"}><b>mapcan</b></ClLinks> and <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks>. 



**Examples:**
```lisp
(mapcar #’car ’((1 a) (2 b) (3 c))) → (1 2 3) 
(mapcar #’abs ’(3 -4 2 -5 -6)) → (3 4 2 5 6) 

(mapcar #’cons ’(a b c) ’(1 2 3)) → ((A . 1) (B . 2) (C . 3)) 
(maplist #’append ’(1 2 3 4) ’(1 2) ’(1 2 3)) 
→ ((1 2 3 4 1 2 1 2 3) (2 3 4 2 2 3)) 
(maplist #’(lambda (x) (cons ’foo x)) ’(a b c d)) 
→ ((FOO A B C D) (FOO B C D) (FOO C D) (FOO D)) 
(maplist #’(lambda (x) (if (member (car x) (cdr x)) 0 1)) ’(a b a c d b c)) → (0 0 1 0 1 1 1) 
					;An entry is 1 if the corresponding element of the input 
					; list was the last instance of that element in the input list. 
(setq dummy nil) → NIL 
(mapc #’(lambda (&rest x) (setq dummy (append dummy x))) 
	’(1 2 3 4) 
	’(a b c d e) 
	’(x y z)) → (1 2 3 4) 
dummy → (1 A X 2 B Y 3 C Z) 
(setq dummy nil) → NIL 
(mapl #’(lambda (x) (push x dummy)) ’(1 2 3 4)) → (1 2 3 4) 
dummy → ((4) (3 4) (2 3 4) (1 2 3 4)) 
(mapcan #’(lambda (x y) (if (null x) nil (list x y))) 
	  ’(nil nil nil d e) 
	  ’(1 2 3 4 5 6)) → (D 4 E 5) 
(mapcan #’(lambda (x) (and (numberp x) (list x))) 
	  ’(a 1 b c 3 4 d 5)) 
→ (1 3 4 5) 
In this case the function serves as a filter; this is a standard Lisp idiom using **mapcan**. (mapcon #’list ’(1 2 3 4)) → ((1 2 3 4) (2 3 4) (3 4) (4)) 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if any <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not a *proper list*. 



**See Also:** 



<ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks>, <ClLinks styled={true} term={"map"}><b>map</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 







 



 



