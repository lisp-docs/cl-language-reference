 



Here are some examples involving *optional parameters* and *rest parameters*: 



((lambda (a b) (+ a (\* b 3))) 4 5) *→* 19 



((lambda (a &amp;optional (b 2)) (+ a (\* b 3))) 4 5) *→* 19 



((lambda (a &amp;optional (b 2)) (+ a (\* b 3))) 4) *→* 10 



((lambda (&amp;optional (a 2 b) (c 3 d) &amp;rest x) (list a b c d x))) 



*→* (2 NIL 3 NIL NIL)  







((lambda (&amp;optional (a 2 b) (c 3 d) &amp;rest x) (list a b c d x)) 6) 



*→* (6 T 3 NIL NIL) 



((lambda (&amp;optional (a 2 b) (c 3 d) &amp;rest x) (list a b c d x)) 6 3) 



*→* (6 T 3 T NIL) 



((lambda (&amp;optional (a 2 b) (c 3 d) &amp;rest x) (list a b c d x)) 6 3 8) 



*→* (6 T 3 T (8)) 



((lambda (&amp;optional (a 2 b) (c 3 d) &amp;rest x) (list a b c d x)) 



6 3 8 9 10 11) 



*→* (6 t 3 t (8 9 10 11)) 



Here are some examples involving *keyword parameters*: 



((lambda (a b &amp;key c d) (list a b c d)) 1 2) *→* (1 2 NIL NIL) 



((lambda (a b &amp;key c d) (list a b c d)) 1 2 :c 6) *→* (1 2 6 NIL) 



((lambda (a b &amp;key c d) (list a b c d)) 1 2 :d 8) *→* (1 2 NIL 8) 



((lambda (a b &amp;key c d) (list a b c d)) 1 2 :c 6 :d 8) *→* (1 2 6 8) 



((lambda (a b &amp;key c d) (list a b c d)) 1 2 :d 8 :c 6) *→* (1 2 6 8) 



((lambda (a b &amp;key c d) (list a b c d)) :a 1 :d 8 :c 6) *→* (:a 1 6 8) 



((lambda (a b &amp;key c d) (list a b c d)) :a :b :c :d) *→* (:a :b :d NIL) 



((lambda (a b &amp;key ((:sea c)) d) (list a b c d)) 1 2 :sea 6) *→* (1 2 6 NIL) 



((lambda (a b &amp;key ((c c)) d) (list a b c d)) 1 2 ’c 6) *→* (1 2 6 NIL) 



Here are some examples involving *optional parameters*, *rest parameters*, and *keyword parameters* together: 



((lambda (a &amp;optional (b 3) &amp;rest x &amp;key c (d a)) 



(list a b c d x)) 1) 



*→* (1 3 NIL 1 ()) 



((lambda (a &amp;optional (b 3) &amp;rest x &amp;key c (d a)) 



(list a b c d x)) 1 2) 



*→* (1 2 NIL 1 ()) 



((lambda (a &amp;optional (b 3) &amp;rest x &amp;key c (d a)) 



(list a b c d x)) :c 7) 



*→* (:c 7 NIL :c ()) 



((lambda (a &amp;optional (b 3) &amp;rest x &amp;key c (d a)) 



(list a b c d x)) 1 6 :c 7) 



*→* (1 6 7 1 (:c 7)) 



((lambda (a &amp;optional (b 3) &amp;rest x &amp;key c (d a)) 



(list a b c d x)) 1 6 :d 8) 



*→* (1 6 NIL 8 (:d 8)) 



((lambda (a &amp;optional (b 3) &amp;rest x &amp;key c (d a)) 



(list a b c d x)) 1 6 :d 8 :c 9 :d 10) 



*→* (1 6 9 8 (:d 8 :c 9 :d 10)) 



As an example of the use of **&amp;allow-other-keys** and :allow-other-keys, consider a *function* that takes two named arguments of its own and also accepts additional named arguments to be passed to **make-array**:  







(defun array-of-strings (str dims &amp;rest named-pairs 



&amp;key (start 0) end &amp;allow-other-keys) 



(apply #’make-array dims 



:initial-element (subseq str start end) 



:allow-other-keys t 



named-pairs)) 



This *function* takes a *string* and dimensioning information and returns an *array* of the specified dimensions, each of whose elements is the specified *string*. However, :start and :end named arguments may be used to specify that a substring of the given *string* should be used. In addition, the presence of **&amp;allow-other-keys** in the *lambda list* indicates that the caller may supply additional named arguments; the *rest parameter* provides access to them. These additional named arguments are passed to **make-array**. The *function* **make-array** normally does not allow the named arguments :start and :end to be used, and an error should be signaled if such named arguments are supplied to **make-array**. However, the presence in the call to **make-array** of the named argument :allow-other-keys with a *true* value causes any extraneous named arguments, including :start and :end, to be acceptable and ignored. 



