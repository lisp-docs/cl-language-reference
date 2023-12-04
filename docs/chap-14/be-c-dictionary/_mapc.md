**mapc, mapcar, mapcan, mapl, maplist, mapcon** *Function* 



**Syntax:** 



**mapc** *function* &rest *lists*<sup>+</sup> *→ list-1* 



**mapcar** *function* &rest *lists*<sup>+</sup> *→ result-list* 



**mapcan** *function* &rest *lists*<sup>+</sup> *→ concatenated-results* 



**mapl** *function* &rest *lists*<sup>+</sup> *→ list-1* 



**maplist** *function* &rest *lists*<sup>+</sup> *→ result-list* 







 



 



**mapc, mapcar, mapcan, mapl, maplist, mapcon** 



**mapcon** *function* &rest *lists*<sup>+</sup> *→ concatenated-results* 



**Arguments and Values:** 



*function*—a *designator* for a *function* that must take as many *arguments* as there are *lists*. *list*—a *proper list*. 



*list-1*—the first *list* (which must be a *proper list*). 



*result-list*—a *list*. 



*concatenated-results*—a *list*. 



**Description:** 



The mapping operation involves applying *function* to successive sets of arguments in which one argument is obtained from each *sequence*. Except for **mapc** and **mapl**, the result contains the results returned by *function*. In the cases of **mapc** and **mapl**, the resulting *sequence* is *list*. 



*function* is called first on all the elements with index 0, then on all those with index 1, and so on. *result-type* specifies the *type* of the resulting *sequence*. If *function* is a *symbol*, it is **coerce**d to a *function* as if by **symbol-function**. 



**mapcar** operates on successive *elements* of the *lists*. *function* is applied to the first *element* of each *list*, then to the second *element* of each *list*, and so on. The iteration terminates when the shortest *list* runs out, and excess elements in other lists are ignored. The value returned by **mapcar** is a *list* of the results of successive calls to *function*. 



**mapc** is like **mapcar** except that the results of applying *function* are not accumulated. The *list* argument is returned. 



**maplist** is like **mapcar** except that *function* is applied to successive sublists of the *lists*. *function* is first applied to the *lists* themselves, and then to the *cdr* of each *list*, and then to the *cdr* of the *cdr* of each *list*, and so on. 



**mapl** is like **maplist** except that the results of applying *function* are not accumulated; *list-1* is returned. 



**mapcan** and **mapcon** are like **mapcar** and **maplist** respectively, except that the results of applying *function* are combined into a *list* by the use of **nconc** rather than **list**. That is, 



(mapcon f x1 ... xn) 



*≡* (apply #’nconc (maplist f x1 ... xn)) 



and similarly for the relationship between **mapcan** and **mapcar**. 



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



Should be prepared to signal an error of *type* **type-error** if any *list* is not a *proper list*. 



**See Also:** 



**dolist**, **map**, Section 3.6 (Traversal Rules and Side Effects) 







 



 



