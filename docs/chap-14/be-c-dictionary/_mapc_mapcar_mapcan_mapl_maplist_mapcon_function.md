**mapc, mapcar, mapcan, mapl, maplist, mapcon** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"mapc"}><b>mapc</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm><sup>+</sup> *→ list-1* 



<DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm><sup>+</sup> *→ result-list* 



<DictionaryLink styled={true} term={"mapcan"}><b>mapcan</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm><sup>+</sup> *→ concatenated-results* 



<DictionaryLink styled={true} term={"mapl"}><b>mapl</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm><sup>+</sup> *→ list-1* 



<DictionaryLink styled={true} term={"maplist"}><b>maplist</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm><sup>+</sup> *→ result-list* 







 



 



**mapc, mapcar, mapcan, mapl, maplist, mapcon** 



<DictionaryLink styled={true} term={"mapcon"}><b>mapcon</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm><sup>+</sup> *→ concatenated-results* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that must take as many <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> as there are <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a *proper list*. 



*list-1*—the first <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (which must be a *proper list*). 



*result-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*concatenated-results*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



The mapping operation involves applying <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to successive sets of arguments in which one argument is obtained from each *sequence*. Except for <DictionaryLink styled={true} term={"mapc"}><b>mapc</b></DictionaryLink> and <DictionaryLink styled={true} term={"mapl"}><b>mapl</b></DictionaryLink>, the result contains the results returned by <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. In the cases of <DictionaryLink styled={true} term={"mapc"}><b>mapc</b></DictionaryLink> and <DictionaryLink styled={true} term={"mapl"}><b>mapl</b></DictionaryLink>, the resulting *sequence* is <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called first on all the elements with index 0, then on all those with index 1, and so on. *result-type* specifies the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the resulting *sequence*. If <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, it is <DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink>d to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> as if by <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> operates on successive <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is applied to the first <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, then to the second <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and so on. The iteration terminates when the shortest <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> runs out, and excess elements in other lists are ignored. The value returned by <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the results of successive calls to <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"mapc"}><b>mapc</b></DictionaryLink> is like <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> except that the results of applying <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> are not accumulated. The <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> argument is returned. 



<DictionaryLink styled={true} term={"maplist"}><b>maplist</b></DictionaryLink> is like <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> except that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is applied to successive sublists of the <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is first applied to the <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> themselves, and then to the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and then to the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and so on. 



<DictionaryLink styled={true} term={"mapl"}><b>mapl</b></DictionaryLink> is like <DictionaryLink styled={true} term={"maplist"}><b>maplist</b></DictionaryLink> except that the results of applying <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> are not accumulated; *list-1* is returned. 



<DictionaryLink styled={true} term={"mapcan"}><b>mapcan</b></DictionaryLink> and <DictionaryLink styled={true} term={"mapcon"}><b>mapcon</b></DictionaryLink> are like <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> and <DictionaryLink styled={true} term={"maplist"}><b>maplist</b></DictionaryLink> respectively, except that the results of applying <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> are combined into a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> by the use of <DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>. That is, 



(mapcon f x1 ... xn) 



*≡* (apply #’nconc (maplist f x1 ... xn)) 



and similarly for the relationship between <DictionaryLink styled={true} term={"mapcan"}><b>mapcan</b></DictionaryLink> and <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink>. 



**Examples:**
```lisp

(mapcar #’car ’((1 a) (2 b) (3 c))) *→* (1 2 3) 
(mapcar #’abs ’(3 -4 2 -5 -6)) *→* (3 4 2 5 6) 



(mapcar #’cons ’(a b c) ’(1 2 3)) *→* ((A . 1) (B . 2) (C . 3)) 
(maplist #’append ’(1 2 3 4) ’(1 2) ’(1 2 3)) 
*→* ((1 2 3 4 1 2 1 2 3) (2 3 4 2 2 3)) 
(maplist #’(lambda (x) (cons ’foo x)) ’(a b c d)) 
*→* ((FOO A B C D) (FOO B C D) (FOO C D) (FOO D)) 
(maplist #’(lambda (x) (if (member (car x) (cdr x)) 0 1)) ’(a b a c d b c)) *→* (0 0 1 0 1 1 1) 
					;An entry is 1 if the corresponding element of the input 
					; list was the last instance of that element in the input list. 
(setq dummy nil) *→* NIL 
(mapc #’(lambda (&rest x) (setq dummy (append dummy x))) 
	’(1 2 3 4) 
	’(a b c d e) 
	’(x y z)) *→* (1 2 3 4) 
dummy *→* (1 A X 2 B Y 3 C Z) 
(setq dummy nil) *→* NIL 
(mapl #’(lambda (x) (push x dummy)) ’(1 2 3 4)) *→* (1 2 3 4) 
dummy *→* ((4) (3 4) (2 3 4) (1 2 3 4)) 
(mapcan #’(lambda (x y) (if (null x) nil (list x y))) 
	  ’(nil nil nil d e) 
	  ’(1 2 3 4 5 6)) *→* (D 4 E 5) 
(mapcan #’(lambda (x) (and (numberp x) (list x))) 
	  ’(a 1 b c 3 4 d 5)) 
*→* (1 3 4 5) 
In this case the function serves as a filter; this is a standard Lisp idiom using **mapcan**. (mapcon #’list ’(1 2 3 4)) *→* ((1 2 3 4) (2 3 4) (3 4) (4)) 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if any <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a *proper list*. 



**See Also:** 



<DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink>, <DictionaryLink styled={true} term={"map"}><b>map</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 







 



 



