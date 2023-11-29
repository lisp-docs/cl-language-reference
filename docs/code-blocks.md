
```lisp
 (defun foo (&key radix (type 'integer)) ...)

```


```lisp
 (defun foo (&key ((:radix radix)) ((:type type) 'integer)) ...)

```


```lisp
;;; The caller can supply :ALLOW-OTHER-KEYS T to suppress checking.
 ((lambda (&key x) x) :x 1 :y 2 :allow-other-keys t) *→* 1
;;; The callee can use &ALLOW-OTHER-KEYS to suppress checking.
 ((lambda (&key x &allow-other-keys) x) :x 1 :y 2) *→* 1
;;; :ALLOW-OTHER-KEYS NIL is always permitted.
 ((lambda (&key) t) :allow-other-keys nil) *→* T
;;; As with other keyword arguments, only the left-most pair
;;; named :ALLOW-OTHER-KEYS has any effect.
 ((lambda (&key x) x) 
  :x 1 :y 2 :allow-other-keys t :allow-other-keys nil)
*→* 1
;;; Only the left-most pair named :ALLOW-OTHER-KEYS has any effect,
;;; so in safe code this signals a PROGRAM-ERROR (and might enter the
;;; debugger).  In unsafe code, the consequences are undefined.
 ((lambda (&key x) x)                   ;This call is not valid
  :x 1 :y 2 :allow-other-keys nil :allow-other-keys t)

```


```lisp
 (lambda (x y &aux (a (car x)) (b 2) c) (list x y a b c))
    \EQ (lambda (x y) (let* ((a (car x)) (b 2) c) (list x y a b c)))

```


```lisp
 ((lambda (a b) (+ a (* b 3))) 4 5) *→* 19
 ((lambda (a &optional (b 2)) (+ a (* b 3))) 4 5) *→* 19
 ((lambda (a &optional (b 2)) (+ a (* b 3))) 4) *→* 10
 ((lambda (&optional (a 2 b) (c 3 d) &rest x) (list a b c d x)))
*→* (2 NIL 3 NIL NIL)
 ((lambda (&optional (a 2 b) (c 3 d) &rest x) (list a b c d x)) 6)
*→* (6 T 3 NIL NIL)
 ((lambda (&optional (a 2 b) (c 3 d) &rest x) (list a b c d x)) 6 3)
*→* (6 T 3 T NIL)
 ((lambda (&optional (a 2 b) (c 3 d) &rest x) (list a b c d x)) 6 3 8)
*→* (6 T 3 T (8))
 ((lambda (&optional (a 2 b) (c 3 d) &rest x) (list a b c d x))
  6 3 8 9 10 11)
*→* (6 t 3 t (8 9 10 11))

```


```lisp
 ((lambda (a b &key c d) (list a b c d)) 1 2) *→* (1 2 NIL NIL)
 ((lambda (a b &key c d) (list a b c d)) 1 2 :c 6) *→* (1 2 6 NIL)
 ((lambda (a b &key c d) (list a b c d)) 1 2 :d 8) *→* (1 2 NIL 8)
 ((lambda (a b &key c d) (list a b c d)) 1 2 :c 6 :d 8) *→* (1 2 6 8)
 ((lambda (a b &key c d) (list a b c d)) 1 2 :d 8 :c 6) *→* (1 2 6 8)
 ((lambda (a b &key c d) (list a b c d)) :a 1 :d 8 :c 6) *→* (:a 1 6 8)
 ((lambda (a b &key c d) (list a b c d)) :a :b :c :d) *→* (:a :b :d NIL)
 ((lambda (a b &key ((:sea c)) d) (list a b c d)) 1 2 :sea 6) *→* (1 2 6 NIL)
 ((lambda (a b &key ((c c)) d) (list a b c d)) 1 2 'c 6) *→* (1 2 6 NIL)

```


```lisp
 ((lambda (a &optional (b 3) &rest x &key c (d a))
    (list a b c d x)) 1)   
*→* (1 3 NIL 1 ()) 
 ((lambda (a &optional (b 3) &rest x &key c (d a))
    (list a b c d x)) 1 2)
*→* (1 2 NIL 1 ())
 ((lambda (a &optional (b 3) &rest x &key c (d a))
    (list a b c d x)) :c 7)
*→* (:c 7 NIL :c ())
 ((lambda (a &optional (b 3) &rest x &key c (d a))
    (list a b c d x)) 1 6 :c 7)
*→* (1 6 7 1 (:c 7))
 ((lambda (a &optional (b 3) &rest x &key c (d a))
    (list a b c d x)) 1 6 :d 8)
*→* (1 6 NIL 8 (:d 8))
 ((lambda (a &optional (b 3) &rest x &key c (d a))
    (list a b c d x)) 1 6 :d 8 :c 9 :d 10)
*→* (1 6 9 8 (:d 8 :c 9 :d 10))

```


```lisp
 (defun array-of-strings (str dims &rest named-pairs
                          &key (start 0) end &allow-other-keys)
   (apply #'make-array dims
          :initial-element (subseq str start end)
          :allow-other-keys t
          named-pairs))

```


```lisp
 (:constructor create-foo
         (a &optional b (c 'sea) &rest d &aux e (f 'eff)))

```


```lisp
 (defstruct (foo (:constructor CREATE-FOO (a &optional b (c 'sea)
                                             &key (d 2)
                                             &aux e (f 'eff))))
   (a 1) (b 2) (c 3) (d 4) (e 5) (f 6))
 
 (create-foo 10) *→* #S(FOO A 10 B 2 C SEA D 2 E \term{implemention-dependent} F EFF)
 (create-foo 10 'bee 'see :d 'dee) 
*→* #S(FOO A 10 B BEE C SEE D DEE E \term{implemention-dependent} F EFF)

```


```lisp
 (create-foo 1 2)

```


```lisp
 (make-foo :a 1 :b 2)

```


```lisp
 (defstruct (frob (:constructor create-frob
                  (a &key (b 3 have-b) (c-token 'c) 
                          (c (list c-token (if have-b 7 2))))))
         a b c)

```


```lisp
 A<B<C<D<E<F<G<H<I<J<K<L<M<N<O<P<Q<R<S<T<U<V<W<X<Y<Z
 a<b<c<d<e<f<g<h<i<j<k<l<m<n<o<p<q<r<s<t<u<v<w<x<y<z
 0<1<2<3<4<5<6<7<8<9
 either 9<A or Z<0
 either 9<a or z<0                                                      

```


```lisp
 (defclass C1 () 
     ((S1 :initform 5.4 :type number) 
      (S2 :allocation :class)))
 
 (defclass C2 (C1) 
     ((S1 :initform 5 :type integer)
      (S2 :allocation :instance)
      (S3 :accessor C2-S3)))

```


```lisp
 (defclass pie (apple cinnamon) ())
 
 (defclass apple (fruit) ())
 
 (defclass cinnamon (spice) ())
 
 (defclass fruit (food) ())

 (defclass spice (food) ())

 (defclass food () ())

```


```lisp
 (defclass new-class (fruit apple) ())
 
 (defclass apple (fruit) ())

```


```lisp
 (defclass pie (apple cinnamon) ())
 
 (defclass pastry (cinnamon apple) ())
 
 (defclass apple () ())
 
 (defclass cinnamon () ())

```


```lisp
 (defmacro foo (x) `(car ,x))
 (eval-when (:execute :compile-toplevel :load-toplevel)
   (print (foo '(a b c))))

```


```lisp
 (eval-when (:execute :compile-toplevel :load-toplevel)
   (defmacro foo (x) `(car ,x))
   (print (foo '(a b c))))

```


```lisp
 (typep \param{c} 'condition) *→ true*

```


```lisp
 (apply #'make-condition \param{datum} \param{arguments})

```


```lisp
 (make-condition \param{defaulted-type} 
                 :format-control \param{datum}
                 :format-arguments \param{arguments})

```


```lisp
(let ((c (make-condition 'arithmetic-error :operator '/ :operands '(7 0))))
  (error c))
\EQ (error 'arithmetic-error :operator '/ :operands '(7 0))

(error "Bad luck.")
\EQ (error 'simple-error :format-control "Bad luck." :format-arguments '())

```


```lisp
 (error "This is a message")  ; Not recommended
 (error "this is a message.") ; Not recommended

 (error "This is a message.") ; Recommended instead

```


```lisp
 (error "This is a message.~%")   ; Not recommended
 (error "~&This is a message.")   ; Not recommended
 (error "~&This is a message.~%") ; Not recommended

 (error "This is a message.")     ; Recommended instead

```


```lisp
 (defun test ()
   (error "This is an error message.~\%It has two lines."))

 ;; Implementation A
 (test)
 This is an error message.
 It has two lines.

 ;; Implementation B
 (test)
 ;; Error: This is an error message.
 ;;        It has two lines.

 ;; Implementation C
 (test)
 >> Error: This is an error message. 
           It has two lines.

```


```lisp
 (evenp most-positive-fixnum) *→* \term{implementation-dependent}
 (random) *→* \term{implementation-dependent}
 (> lambda-parameters-limit 93) *→* \term{implementation-dependent}
 (char-name #\\A) *→* \term{implementation-dependent}

```


```lisp
(defun foo ()
  \#+ACME (acme:initialize-something)
  (print 'hello-there))

```


```lisp
% %  (defun bar (x y)           ;[1] 1st occurrence of x
% %    (let ((old-x x)          ;[2] 2nd occurrence of x 
% %          (x y))             ;[3] 3rd occurrence of x
% %      (declare (special x))
% %      (list old-x x)))
% % 
```


```lisp
%  (let ((x 1))                ;[1] 1st occurrence of x
%    (declare (special x))     ;[2] 2nd occurrence of x
%    (let ((x 2))              ;[3] 3rd occurrence of x
%      (let ((old-x x)         ;[4] 4th occurrence of x
%            (x 3))            ;[5] 5th occurrence of x
%        (declare (special x)) ;[6] 6th occurrence of x
%        (list old-x x))))     ;[7] 7th occurrence of x
% *→* (2 3)
% 
```


```lisp
%  (lambda (&optional (x (foo 1))) ;[1]
%    (declare (notinline foo))     ;[2]
%    (foo x))                      ;[3]
% 
```


```lisp
%  (locally (declare (notinline foo)) ;[1]
%    (lambda (&optional (x (foo 1)))  ;[2]
%      (foo x)))                      ;[3]
% 
```


```lisp
%  (lambda (&optional                               ;[1]
%             (x (locally (declare (notinline foo)) ;[2]
%                  (foo 1))))                       ;[3]
%    (declare (notinline foo))                      ;[4]
%    (foo x))                                       ;[5]
% 
```


```lisp
%  (defun foo (x)                               ;[1]
%    (if (typep x 'integer)                     ;[2]
%        (list (let ((y (+ x 42)))              ;[3]
%                (declare (fixnum x y))         ;[4]
%                y)                             ;[5]
%              (+ x 42))                        ;[6]
%        `(foo ,x)))                            ;[7]
% 
```


```lisp
%  (foo (- most-negative-fixnum 1))
% 
```


```lisp
%  (defun foo (x)                               ;[1]
%    (if (typep x 'integer)                     ;[2]
%        (list (let ((y (+ x 42)))              ;[3]
%                (declare (fixnum x))           ;[4]
%                x                              ;[5]
%                y)                             ;[6]
%              (+ x 42))                        ;[7]
%        `(foo ,x)))                            ;[8]
% 
```


```lisp
%  (foo most-positive-fixnum)
% 
```


```lisp
%  (defun foo (x)                               ;[1]
%    (if (typep x 'integer)                     ;[2]
%        (list (let ((y (the fixnum (+ x 42)))) ;[3]
%                (declare (fixnum x y))         ;[4]
%                x                              ;[5]
%                y)                             ;[6]
%              (+ x 42))                        ;[7]
%        `(foo ,x)))                            ;[8]
% 
```


```lisp
 (let ((x 1))                ;[1] 1st occurrence of x
   (declare (special x))     ;[2] 2nd occurrence of x
   (let ((x 2))              ;[3] 3rd occurrence of x
     (let ((old-x x)         ;[4] 4th occurrence of x
           (x 3))            ;[5] 5th occurrence of x
       (declare (special x)) ;[6] 6th occurrence of x
       (list old-x x))))     ;[7] 7th occurrence of x
*→* (2 3)

```


```lisp
 (lambda (&optional (x (foo 1))) ;[1]
   (declare (notinline foo))     ;[2]
   (foo x))                      ;[3]

```


```lisp
 (locally (declare (notinline foo)) ;[1]
   (lambda (&optional (x (foo 1)))  ;[2]
     (foo x)))                      ;[3]

```


```lisp
 (lambda (&optional                               ;[1]
            (x (locally (declare (notinline foo)) ;[2]
                 (foo 1))))                       ;[3]
   (declare (notinline foo))                      ;[4]
   (foo x))                                       ;[5]

```


```lisp
 (let ((x  1))                     ;[1]
   (declare (special x))           ;[2]
     (let ((x 2))                  ;[3]
       (dotimes (i x x)            ;[4]
         (declare (special x)))))  ;[5]
*→* 1

```


```lisp
 (x y)
 (x B A C y)
 (x A B B B B B C y)
 (x C B A B B B y)

```


```lisp
 (x B B A A C C y)
 (x C B C y)

```


```lisp
 (x B y)
 (x B A C y)
 (x A B B B B B C y)
 (x C B A B B B y)

```


```lisp
 (x y)
 (x B B A A C C y)
 (x C B C y)

```


```lisp
 (x A B C y)
 (x A C B y)
 (x A B y)
 (x B A C y)
 (x B C A y)
 (x B A y)
 (x C A B y)
 (x C B A y)

```


```lisp
 (+ 4 5) *→* 9 

```


```lisp
 (truncate 7 5)
*→* 1 2
 (truncate 7 5) 
*→* 1
   2
 (truncate 7 5)
*→* 1, 2

```


```lisp
 (char-name #\\a)
*→* NIL
\OV "LOWERCASE-a"
\OV "Small-A"
\OV "LA01"

```


```lisp
 (char-name #\\a) *→* \term{implementation-dependent}

```


```lisp
 (function-lambda-expression 
    (funcall #'(lambda (x) #'(lambda () x)) nil))
*→* NIL, true, NIL
\OV (LAMBDA () X), true, NIL
\NV NIL, false, NIL
\NV (LAMBDA () X), false, NIL

```


```lisp
 (gcd x (gcd y z)) \EQ (gcd (gcd x y) z)

```


```lisp
 (+ 1 (print (+ (sqrt (read)) (sqrt (read)))))
\OUT \IN{9 16 }
\OUT 7
*→* 8

```


```lisp
 (progn (format t "~&Who? ") (read-line))
\OUT Who? \IN{Fred, Mary, and Sally\CRLF}
*→* "Fred, Mary, and Sally", false

```


```lisp
 (print ())                          ;avoided
 (defun three nil 3)                 ;avoided 
 '(nil nil)                          ;list of two symbols
 '(() ())                            ;list of empty lists
 (defun three () 3)                  ;Emphasize empty parameter list.
 (append '() '()) *→* ()              ;Emphasize use of empty lists
 (not nil) *→ true*                   ;Emphasize use as Boolean false
 (get 'nil 'color)                   ;Emphasize use as a symbol

```


```lisp
 (defun add-some (x) 
   (defun add-some (x) (+ x 2))
   (+ x 1)) *→* ADD-SOME
 (mapcar 'add-some '(1 2 3 4))
*→* (2 3 4 5)
\OV (2 4 5 6)

```


```lisp
 (defun foo (x) (+ x 1))

```


```lisp
 (find 'a '(a b . c))

```


```lisp
 (find 'd '(a b . c))

```


```lisp
 (find 'd '#1=(a b . #1#))

```


```lisp
 (let ((a (list 2 1 4 3 7 6 'five)))
   (ignore-errors (sort a #'<))
   a)
*→* (1 2 3 4 6 7 FIVE)
\OV (2 1 4 3 7 6 FIVE)
\OV (2)

 (prog foo ((a (list 1 2 3 4 5 6 7 8 9 10)))
   (sort a #'(lambda (x y) (if (zerop (random 5)) (return-from foo a) (> x y)))))
*→* (1 2 3 4 5 6 7 8 9 10)
\OV (3 4 5 6 2 7 8 9 10 1)
\OV (1 2 4 3)

```


```lisp
 (let ((x 1))            ;Binds a special variable X
   (declare (special x))
   (let ((x 2))          ;Binds a lexical variable X
     (+ x                ;Reads a lexical variable X
        (locally (declare (special x))
                 x))))   ;Reads a special variable X
*→* 3

```


```lisp
 (defun foo (x) (+ x 3))
 (defun bar () (setf (symbol-function 'foo) #'(lambda (x) (+ x 4))))
 (foo (progn (bar) 20))

```


```lisp
 3 *→* 3
 #c(2/3 5/8) *→* #C(2/3 5/8)
 #p"S:[BILL]OTHELLO.TXT" *→* #P"S:[BILL]OTHELLO.TXT"
 #(a b c) *→* #(A B C)
 "fred smith" *→* "fred smith"

```


```lisp
 (defun two-funs (x)
   (list (function (lambda () x))
         (function (lambda (y) (setq x y)))))
 (setq funs (two-funs 6))
 (funcall (car funs)) *→* 6
 (funcall (cadr funs) 43) *→* 43
 (funcall (car funs)) *→* 43

```


```lisp
 (let ((x 5) (funs '()))
   (dotimes (j 10)                          
     (push #'(lambda (z)                        
               (if (null z) (setq x 0) (+ x z)))
           funs))
   funs)

```


```lisp
 (let ((funs '()))     
   (dotimes (j 10)
     (let ((x 5))
       (push (function (lambda (z)
                        (if (null z) (setq x 0) (+ x z))))
             funs)))
  funs)

```


```lisp
 (let ((funs '()))
   (dotimes (j 10)
     (let ((x 5))
       (push (function (lambda (z) (+ x z)))
            funs)))
   funs)

```


```lisp
 (let ((funs '()))
   (dotimes (j 10)
     (push (function (lambda (z) (+ 5 z)))
           funs))
  funs)

```


```lisp
 (mapcar (function (lambda (x) (+ x 2))) y)

```


```lisp
 (defun test (x z)
   (let ((z (* x 2)))
     (print z))
   z)

```


```lisp
 (defun contorted-example (f g x)
   (if (= x 0)
       (funcall f)
       (block here
          (+ 5 (contorted-example g
                                  #'(lambda () (return-from here 4))
                                  (- x 1))))))

```


```lisp
 (contorted-example nil nil 2)
   (block here\ssso ...)
     (contorted-example nil #'(lambda () (return-from here\ssso 4)) 1)
       (block here\ssst ...)
         (contorted-example #'(lambda () (return-from here\ssso 4))
                            #'(lambda () (return-from here\ssst 4))
                            0)
             (funcall f)
                    where f *→* #'(lambda () (return-from here\ssso 4))
                 (return-from here\ssso 4)

```


```lisp
 (defun invalid-example ()
   (let ((y (block here #'(lambda (z) (return-from here z)))))
     (if (numberp y) y (funcall y 5))))

```


```lisp
 (defun fun1 (x)
   (catch 'trap (+ 3 (fun2 x))))
 (defun fun2 (y)
   (catch 'trap (* 5 (fun3 y))))
 (defun fun3 (z)
   (throw 'trap z))

```


```lisp
 (defun fun2 (y)
   (catch 'snare (* 5 (fun3 y))))

```


```lisp
 (format nil "~C" #\\A) *→* "A"
 (format nil "~C" #\\Space) *→* " "

```


```lisp
 (format nil "~:C" #\\A) *→* "A"
 (format nil "~:C" #\\Space) *→* "Space"
;; This next example assumes an implementation-defined "Control" attribute.
 (format nil "~:C" #\\Control-Space)
*→* "Control-Space"
\OV "c-Space"

```


```lisp
 (format nil "~:@C" #\\Control-Partial) *→* "Control-{\Partial} (Top-F)"  

```


```lisp
 (format nil "~,,' ,4:B" 13) *→* "1101"
 (format nil "~,,' ,4:B" 17) *→* "1 0001"
 (format nil "~19,0,' ,4:B" 3333) *→* "0000 1101 0000 0101"
 (format nil "~3,,,' ,2:R" 17) *→* "1 22"
 (format nil "~,,'|,2:D" #xFFFF) *→*  "6|55|35"

```


```lisp
 "~%;; ~\lbr\ ~<~%;; ~1:; ~S~>~\hat\ ,~\rbr\ .~%"

```


```lisp
 "~%;; ~\lbr\ ~<~%;; ~1,50:; ~S~>~\hat\ ,~\rbr \ .~%"

```


```lisp
 (setq *print-level* nil *print-length* 5)
 (format nil
        "~@[ print level = ~D~]~@[ print length = ~D~]"
        *print-level* *print-length*)
*→*  " print length = 5"

```


```lisp
 (format \param{stream} "...~@[\param{str}~]..." ...)
\EQ (format \param{stream} "...~:[~;~:*\param{str}~]..." ...)

```


```lisp
 (setq foo "Items:~#[ none~; ~S~; ~S and ~S~
           ~:;~@\{~#[~; and~] ~S~\hat\ ,~\}~].")
 (format nil foo) *→*  "Items: none."
 (format nil foo 'foo) *→*  "Items: FOO."
 (format nil foo 'foo 'bar) *→*  "Items: FOO and BAR."
 (format nil foo 'foo 'bar 'baz) *→*  "Items: FOO, BAR, and BAZ."
 (format nil foo 'foo 'bar 'baz 'quux) *→*  "Items: FOO, BAR, BAZ, and QUUX."

```


```lisp
 (format nil "The winners are:~\{ ~S~\}." 
         '(fred harry jill)) 
*→* "The winners are: FRED HARRY JILL."                           
 (format nil "Pairs:~\{ <~S,~S>~\}." 
         '(a 1 b 2 c 3))
*→* "Pairs: <A,1> <B,2> <C,3>."

```


```lisp
 (format nil "Pairs:~:\lbr <~S,~S>~\rbr\ ." 
                 '((a 1) (b 2) (c 3)))
*→* "Pairs: <A,1> <B,2> <C,3>."

```


```lisp
 (format nil "Pairs:~@\lbr <~S,~S>~\rbr\ ." 'a 1 'b 2 'c 3)
*→* "Pairs: <A,1> <B,2> <C,3>."

```


```lisp
 (format nil "Pairs:~:@\lbr <~S,~S>~\rbr\ ." 
              '(a 1) '(b 2) '(c 3)) 
*→* "Pairs: <A,1> <B,2> <C,3>."

```


```lisp
    (apply #'format stream string arguments)
 \EQ (format stream "~1\{~:\}" string arguments)

```


```lisp
 (format nil "~? ~D" "<~A ~D>" '("Foo" 5) 7) *→* "<Foo 5> 7"
 (format nil "~? ~D" "<~A ~D>" '("Foo" 5 14) 7) *→* "<Foo 5> 7"

```


```lisp
 (format nil "~@? ~D" "<~A ~D>" "Foo" 5 7) *→* "<Foo 5> 7"
 (format nil "~@? ~D" "<~A ~D>" "Foo" 5 14 7) *→* "<Foo 5> 14"

```


```lisp
 (format nil "~@R ~(~@R~)" 14 14) 
*→* "XIV xiv"
 (defun f (n) (format nil "~@(~R~) error~:P detected." n)) *→* F
 (f 0) *→* "Zero errors detected."
 (f 1) *→* "One error detected."
 (f 23) *→* "Twenty-three errors detected."

```


```lisp
 (format nil "~@(how is ~:(BOB SMITH~)?~)")
 *→* "How is bob smith?"
 \NV "How is Bob Smith?"

```


```lisp
 (format nil "~D tr~:@P/~D win~:P" 7 1) *→* "7 tries/1 win"
 (format nil "~D tr~:@P/~D win~:P" 1 0) *→* "1 try/0 wins"
 (format nil "~D tr~:@P/~D win~:P" 1 3) *→* "1 try/3 wins"

```


```lisp
 (setq donestr "Done.~{\hat} ~D warning~:P.~{\hat} ~D error~:P.")
*→* "Done.~{\hat} ~D warning~:P.~{\hat} ~D error~:P."
 (format nil donestr) *→* "Done."
 (format nil donestr 3) *→* "Done. 3 warnings."
 (format nil donestr 1 5) *→* "Done. 1 warning. 5 errors."

```


```lisp
 (format nil "~:\lbr\ ~@?~:\hat\ ...~\rbr\ " '(("a") ("b"))) *→* "a...b"

```


```lisp
 (setq tellstr "~@(~@[~R~]~{\hat} ~A!~)")
*→* "~@(~@[~R~]~{\hat} ~A!~)"
 (format nil tellstr 23) *→* "Twenty-three!"
 (format nil tellstr nil "losers") *→* " Losers!"
 (format nil tellstr 23 "losers") *→* "Twenty-three losers!"

```


```lisp
 (format nil "~15<~S~;~{\hat}~S~;~{\hat}~S~>" 'foo)
*→*  "            FOO"
 (format nil "~15<~S~;~{\hat}~S~;~{\hat}~S~>" 'foo 'bar)
*→*  "FOO         BAR"
 (format nil "~15<~S~;~{\hat}~S~;~{\hat}~S~>" 'foo 'bar 'baz)
*→*  "FOO   BAR   BAZ"

```


```lisp
 (defun type-clash-error (fn nargs argnum right-type wrong-type)
   (format *error-output*
           "~&~S requires its ~:[~:R~;~*~]~ 
           argument to be of type ~S,~%but it was called ~
           with an argument of type ~S.~%"
           fn (eql nargs 1) argnum right-type wrong-type))
 (type-clash-error 'aref nil 2 'integer 'vector)  prints:
AREF requires its second argument to be of type INTEGER,
but it was called with an argument of type VECTOR.
NIL
 (type-clash-error 'car 1 1 'list 'short-float)  prints:
CAR requires its argument to be of type LIST,
but it was called with an argument of type SHORT-FLOAT.
NIL

```


```lisp
 (format nil "~:[abc~:@(def~;ghi~
:@(jkl~]mno~)" x) ;Invalid!

```


```lisp
 (format nil "~@?ghi~)" "abc~@(def") ;Invalid!

```


```lisp
 (format nil "foo") *→* "foo"
 (setq x 5) *→* 5
 (format nil "The answer is ~D." x) *→* "The answer is 5."
 (format nil "The answer is ~3D." x) *→* "The answer is   5."
 (format nil "The answer is ~3,'0D." x) *→* "The answer is 005."
 (format nil "The answer is ~:D." (expt 47 x))
*→* "The answer is 229,345,007."
 (setq y "elephant") *→* "elephant"
 (format nil "Look at the ~A!" y) *→* "Look at the elephant!"
 (setq n 3) *→* 3
 (format nil "~D item~:P found." n) *→* "3 items found."
 (format nil "~R dog~:[s are~; is~] here." n (= n 1))
*→* "three dogs are here."
 (format nil "~R dog~:*~[s are~; is~:;s are~] here." n)
*→* "three dogs are here."
 (format nil "Here ~[are~;is~:;are~] ~:*~R pupp~:@P." n)
*→* "Here are three puppies."

```


```lisp
 (defun foo (x)
   (format nil "~6,2F|~6,2,1,'*F|~6,2,,'?F|~6F|~,2F|~F"
           x x x x x x)) *→* FOO
 (foo 3.14159)  *→* "  3.14| 31.42|  3.14|3.1416|3.14|3.14159"
 (foo -3.14159) *→* " -3.14|-31.42| -3.14|-3.142|-3.14|-3.14159"
 (foo 100.0)    *→* "100.00|******|100.00| 100.0|100.00|100.0"
 (foo 1234.0)   *→* "1234.00|******|??????|1234.0|1234.00|1234.0"
 (foo 0.006)    *→* "  0.01|  0.06|  0.01| 0.006|0.01|0.006"

```


```lisp
 (defun foo (x)  
    (format nil
           "~9,2,1,,'*E|~10,3,2,2,'?,,'\$E|~
            ~9,3,2,-2,'%@E|~9,2E"
           x x x x))
 (foo 3.14159)  *→* "  3.14E+0| 31.42\$-01|+.003E+03|  3.14E+0"
 (foo -3.14159) *→* " -3.14E+0|-31.42\$-01|-.003E+03| -3.14E+0"
 (foo 1100.0)   *→* "  1.10E+3| 11.00\$+02|+.001E+06|  1.10E+3"
 (foo 1100.0L0) *→* "  1.10L+3| 11.00\$+02|+.001L+06|  1.10L+3"
 (foo 1.1E13)   *→* "*********| 11.00\$+12|+.001E+16| 1.10E+13"
 (foo 1.1L120)  *→* "*********|??????????|%%%%%%%%%|1.10L+120"
 (foo 1.1L1200) *→* "*********|??????????|%%%%%%%%%|1.10L+1200"

```


```lisp
 (dotimes (k 13)
   (format t "~%Scale factor ~2D: |~13,6,2,VE|"
           (- k 5) (- k 5) 3.14159))

```


```lisp
Scale factor -5: | 0.000003E+06|
Scale factor -4: | 0.000031E+05|
Scale factor -3: | 0.000314E+04|
Scale factor -2: | 0.003142E+03|
Scale factor -1: | 0.031416E+02|
Scale factor  0: | 0.314159E+01|
Scale factor  1: | 3.141590E+00|
Scale factor  2: | 31.41590E-01|
Scale factor  3: | 314.1590E-02|
Scale factor  4: | 3141.590E-03|
Scale factor  5: | 31415.90E-04|
Scale factor  6: | 314159.0E-05|
Scale factor  7: | 3141590.E-06|

```


```lisp
 (defun foo (x)
   (format nil "~9,2,1,,'*G|~9,3,2,3,'?,,'\$G|~9,3,2,0,'%G|~9,2G"
          x x x x))                                     
 (foo 0.0314159) *→* "  3.14E-2|314.2\$-04|0.314E-01|  3.14E-2"
 (foo 0.314159)  *→* "  0.31   |0.314    |0.314    | 0.31    "
 (foo 3.14159)   *→* "   3.1   | 3.14    | 3.14    |  3.1    "
 (foo 31.4159)   *→* "   31.   | 31.4    | 31.4    |  31.    "
 (foo 314.159)   *→* "  3.14E+2| 314.    | 314.    |  3.14E+2"
 (foo 3141.59)   *→* "  3.14E+3|314.2\$+01|0.314E+04|  3.14E+3"
 (foo 3141.59L0) *→* "  3.14L+3|314.2\$+01|0.314L+04|  3.14L+3"
 (foo 3.14E12)   *→* "*********|314.0\$+10|0.314E+13| 3.14E+12"
 (foo 3.14L120)  *→* "*********|?????????|%%%%%%%%%|3.14L+120"
 (foo 3.14L1200) *→* "*********|?????????|%%%%%%%%%|3.14L+1200"

```


```lisp
 (format nil "~10<foo~;bar~>")   *→* "foo    bar"
 (format nil "~10:<foo~;bar~>")  *→* "  foo  bar"
 (format nil "~10<foobar~>")     *→* "    foobar"
 (format nil "~10:<foobar~>")    *→* "    foobar"
 (format nil "~10:@<foo~;bar~>") *→* "  foo bar "
 (format nil "~10@<foobar~>")    *→* "foobar    "
 (format nil "~10:@<foobar~>")   *→* "  foobar  "

```


```lisp
  (FORMAT NIL "Written to ~A." #P"foo.bin")
  *→* "Written to foo.bin."

```


```lisp
 (defmethod width ((c character-class) &key font) ...)
 
 (defmethod width ((p picture-class) &key pixel-size) ...)

```


```lisp
 (width (make-instance `character-class :char #\\Q) 
        :font 'baskerville :pixel-size 10)

```


```lisp
 (width (make-instance `picture-class :glyph (glyph #\\Q)) 
        :font 'baskerville :pixel-size 10)

```


```lisp
 (width (make-instance `character-picture-class :char #\\Q)
        :font 'baskerville :pixel-size 10)

```


```lisp
 (setq a (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32536573>
 (setf (gethash 'color a) 'brown) *→* BROWN
 (setf (gethash 'name a) 'fred) *→* FRED
 (gethash 'color a) *→* BROWN, true
 (gethash 'name a) *→* FRED, true
 (gethash 'pointy a) *→* NIL, false

```


```lisp
 (loop for i from 1 to (compute-top-value)       ; first clause
       while (not (unacceptable i))              ; second clause
       collect (square i)                        ; third clause
       do (format t "Working on ~D now" i)       ; fourth clause
       when (evenp i)                            ; fifth clause
         do (format t "~D is a non-odd number" i)
       finally (format t "About to exit!"))      ; sixth clause

```


```lisp
;;; This expression uses the old syntax for type specifiers.
 (loop for i fixnum upfrom 3 ...)
 
;;; This expression uses the new syntax for type specifiers.
 (loop for i of-type fixnum upfrom 3 ...)

;; Declare X and Y to be of type VECTOR and FIXNUM respectively.
 (loop for (x y) of-type (vector fixnum) 
       in l do ...)

```


```lisp
;; Collect values by using FOR constructs.
 (loop for numlist in '((1 2 4.0) (5 6 8.3) (8 9 10.4))
       for a of-type integer = (first numlist)
       and b of-type integer = (second numlist)
       and c of-type float = (third numlist)
       collect (list c b a))
*→* ((4.0 2 1) (8.3 6 5) (10.4 9 8))

```


```lisp
;; Destructuring simplifies the process.
 (loop for (a b c) of-type (integer integer float) in
       '((1 2 4.0) (5 6 8.3) (8 9 10.4))
       collect (list c b a))
*→* ((4.0 2 1) (8.3 6 5) (10.4 9 8))
 

;; If all the types are the same, this way is even simpler.
 (loop for (a b c) of-type float in
       '((1.0 2.0 4.0) (5.0 6.0 8.3) (8.0 9.0 10.4))
       collect (list c b a))
*→* ((4.0 2.0 1.0) (8.3 6.0 5.0) (10.4 9.0 8.0))

```


```lisp
;; Initialize and declare variables in parallel by using the AND construct.\kern-7pt
 (loop with (a b) of-type float = '(1.0 2.0)
       and (c d) of-type integer = '(3 4)
       and (e f)
       return (list a b c d e f))
*→* (1.0 2.0 3 4 NIL NIL)

```


```lisp
 (loop for (a nil b) = '(1 2 3)
       do (return (list a b)))
*→* (1 3)

```


```lisp
 (loop for (x . y) = '(1 . 2)
       do (return y))
*→* 2
 (loop for ((a . b) (c . d)) of-type ((float . float) (integer . integer)) in
       '(((1.2 . 2.4) (3 . 4)) ((3.4 . 4.6) (5 . 6)))
       collect (list a b c d))
*→* ((1.2 2.4 3 4) (3.4 4.6 5 6))

```


```lisp
(let ((x 1)) (loop for i from x by (incf x) to 10 collect i))
*→* (1 3 5 7 9)
(let ((x 1)) (loop for i by (incf x) from x to 10 collect i))
*→* (2 4 6 8 10)

```


```lisp
;; Print some numbers.
 (loop for i from 1 to 3
       do (print i))
\OUT 1
\OUT 2
\OUT 3
*→* NIL
 
;; Print every third number.
 (loop for i from 10 downto 1 by 3
       do (print i))
\OUT 10 
\OUT 7 
\OUT 4 
\OUT 1 
*→* NIL
 
;; Step incrementally from the default starting value.
 (loop for i below 3
       do (print i))
\OUT 0
\OUT 1
\OUT 2
*→* NIL

```


```lisp
;; Print every item in a list.
 (loop for item in '(1 2 3) do (print item))
\OUT 1
\OUT 2
\OUT 3
*→* NIL
 
;; Print every other item in a list.
 (loop for item in '(1 2 3 4 5) by #'cddr
       do (print item))
\OUT 1
\OUT 3
\OUT 5
*→* NIL
 
;; Destructure a list, and sum the x values using fixnum arithmetic.
 (loop for (item . x) of-type (t . fixnum) in '((A . 1) (B . 2) (C . 3))
       unless (eq item 'B) sum x)
*→* 4

```


```lisp
;; Collect successive tails of a list.
 (loop for sublist on '(a b c d)
       collect sublist)
*→* ((A B C D) (B C D) (C D) (D))
 
;; Print a list by using destructuring with the loop keyword ON.
 (loop for (item) on '(1 2 3)
       do (print item))
\OUT 1 
\OUT 2 
\OUT 3 
*→* NIL
 

```


```lisp
%;; The original code:
% (prog (...)
%       (setq x (some-value))
%   tag (print x)
%       (setq x (some-value))
%       (go tag))
% 
%;; The expanded code:
% (prog (...)
%   tag (setq x (some-value))
%       (print x)
%       (go tag))
%
```


```lisp
;; Collect some numbers.
 (loop for item = 1 then (+ item 10)
       for iteration from 1 to 5
       collect item)
*→* (1 11 21 31 41)

```


```lisp
 (loop for char across (the simple-string (find-message channel))
       do (write-char char stream))

```


```lisp
% being \lbracket\ each|the\rbracket \lbracket\ hash-value|hash-values|hash-key|hash-key\rbracket \lbracket\ in|of\rbracket 
% 
```


```lisp
% being \lbracket\ each|the\rbracket \lbracket\ \lbracket\ \lbracket\ 
% present|external\rbracket\ symbol\rbracket | \lbracket\ 
% \lbracket\ present|external\rbracket symbols\rbracket\rbracket \lbracket\ in|of\rbracket
% 
```


```lisp
 (let ((*package* (make-package "TEST-PACKAGE-1")))
   ;; For effect, intern some symbols
   (read-from-string "(THIS IS A TEST)")
   (export (intern "THIS"))
   (loop for x being each present-symbol of *package*
          do (print x)))
\OUT A 
\OUT TEST 
\OUT THIS
\OUT IS 
*→* NIL

```


```lisp
 (loop with a = 1 
       with b = (+ a 2) 
       with c = (+ b 3)
       return (list a b c))
*→* (1 3 6)

```


```lisp
 (block nil
   (let* ((a 1)
          (b (+ a 2))
          (c (+ b 3)))
     (tagbody
         (next-loop (return (list a b c))
                    (go next-loop)
                    end-loop))))

```


```lisp
 (loop with a = 1 
       and b = 2 
       and c = 3
       return (list a b c))
*→* (1 2 3)

```


```lisp
 (block nil
   (let ((a 1)
         (b 2)
         (c 3))
     (tagbody
         (next-loop (return (list a b c))
                    (go next-loop)
                    end-loop))))

```


```lisp
;; These bindings occur in sequence.
 (loop with a = 1 
       with b = (+ a 2) 
       with c = (+ b 3)
       return (list a b c))
*→* (1 3 6)
 
;; These bindings occur in parallel.
 (setq a 5 b 10)
*→* 10
 (loop with a = 1
       and b = (+ a 2)
       and c = (+ b 3)
       return (list a b c))
*→* (1 7 13)
 
;; This example shows a shorthand way to declare local variables 
;; that are of different types.
 (loop with (a b c) of-type (float integer float)
       return (format nil "~A ~A ~A" a b c))
*→* "0.0 0 0.0"
 
;; This example shows a shorthand way to declare local variables 
;; that are the same type.
 (loop with (a b c) of-type float 
       return (format nil "~A ~A ~A" a b c))
*→* "0.0 0.0 0.0"

```


```lisp
;; Collect every name and the kids in one list by using 
;; COLLECT and APPEND.
 (loop for name in '(fred sue alice joe june)
       for kids in '((bob ken) () () (kris sunshine) ())
       collect name
       append kids)
*→* (FRED BOB KEN SUE ALICE JOE KRIS SUNSHINE JUNE)

```


```lisp
%;; Count and collect names and ages.
% (loop for name in '(fred sue alice joe june)
%       as age in '(22 26 19 20 10)
%       append (list name age) into name-and-age-list
%       count name into name-count
%       sum age into total-age
%       finally
%       (return
%        (values (round total-age name-count)
%                 name-and-age-list)))
%*→* 19, (FRED 22 SUE 26 ALICE 19 JOE 20 JUNE 10)
%
```


```lisp
;; Collect all the symbols in a list.
 (loop for i in '(bird 3 4 turtle (1 . 4) horse cat)
       when (symbolp i) collect i)
*→* (BIRD TURTLE HORSE CAT)
 
;; Collect and return odd numbers.
 (loop for i from 1 to 10
       if (oddp i) collect i)
*→* (1 3 5 7 9)
 
;; Collect items into local variable, but don't return them.
 (loop for i in '(a b c d) by #'cddr
       collect i into my-list
       finally (print my-list))
\OUT (A C) 
*→* NIL

```


```lisp
;; Use APPEND to concatenate some sublists.
  (loop for x in '((a) (b) ((c)))
        append x)
*→* (A B (C))
 
;; NCONC some sublists together.  Note that only lists made by the
;; call to LIST are modified.
  (loop for i upfrom 0 
        as x in '(a b (c))
        nconc (if (evenp i) (list x) nil))
*→* (A (C))

```


```lisp
 (loop for i in '(a b nil c nil d e)
       count i)
*→* 5

```


```lisp
 (loop for i in '(2 1 5 3 4)
       maximize i)
*→* 5
 (loop for i in '(2 1 5 3 4)
       minimize i)
*→* 1
 
;; In this example, FIXNUM applies to the internal variable that holds
;; the maximum value.
 (setq series '(1.2 4.3 5.7))
*→* (1.2 4.3 5.7)
 (loop for v in series 
       maximize (round v) of-type fixnum)
*→* 6
 
;; In this example, FIXNUM applies to the variable RESULT.
 (loop for v of-type float in series
       minimize (round v) into result of-type fixnum
       finally (return result))
*→* 1

```


```lisp
 (loop for i of-type fixnum in '(1 2 3 4 5)
       sum i)
*→* 15
 (setq series '(1.2 4.3 5.7))
*→* (1.2 4.3 5.7)
 (loop for v in series 
       sum (* 2.0 v))
*→* 22.4

```


```lisp
 (loop repeat 3
       do (format t "~&What I say three times is true.~%"))
\OUT What I say three times is true.
\OUT What I say three times is true.
\OUT What I say three times is true.
*→* NIL
 (loop repeat -15
   do (format t "What you see is what you expect~%"))
*→* NIL

```


```lisp
;; Make sure I is always less than 11 (two ways).
;; The FOR construct terminates these loops.
 (loop for i from 0 to 10
       always (< i 11))
*→* T
 (loop for i from 0 to 10
       never (> i 11))
*→* T
 
;; If I exceeds 10 return I; otherwise, return NIL.
;; The THEREIS construct terminates this loop.
 (loop for i from 0
       thereis (when (> i 10) i) )
*→* 11

;;; The FINALLY clause is not evaluated in these examples.
 (loop for i from 0 to 10
       always (< i 9)
       finally (print "you won't see this"))
*→* NIL
 (loop never t
       finally (print "you won't see this"))
*→* NIL
 (loop thereis "Here is my value"
       finally (print "you won't see this"))
*→* "Here is my value"
 
;; The FOR construct terminates this loop, so the FINALLY clause 
;; is evaluated.
 (loop for i from 1 to 10
       thereis (> i 11)
       finally (prin1 'got-here))
\OUT GOT-HERE
*→* NIL
 
;; If this code could be used to find a counterexample to Fermat's
;; last theorem, it would still not return the value of the
;; counterexample because all of the THEREIS clauses in this example
;; only return T.  But if Fermat is right, that won't matter
;; because this won't terminate.
 
 (loop for z upfrom 2
       thereis
         (loop for n upfrom 3 below (log z 2)
               thereis
                 (loop for x below z
                       thereis
                         (loop for y below z
                               thereis (= (+ (expt x n) (expt y n))
                                          (expt z n))))))

```


```lisp
 (loop while (hungry-p) do (eat))
 
;; UNTIL NOT is equivalent to WHILE.
 (loop until (not (hungry-p)) do (eat))
 
;; Collect the length and the items of STACK.
 (let ((stack '(a b c d e f)))
   (loop for item = (length stack) then (pop stack)
         collect item
         while stack))
*→* (6 A B C D E F)
 
;; Use WHILE to terminate a loop that otherwise wouldn't terminate.
;; Note that WHILE occurs after the WHEN.
 (loop for i fixnum from 3
       when (oddp i) collect i
       while (< i 5))
*→* (3 5)

```


```lisp
;; Print numbers and their squares.
;; The DO construct applies to multiple forms.
 (loop for i from 1 to 3
       do (print i)
          (print (* i i)))
\OUT 1 
\OUT 1 
\OUT 2 
\OUT 4 
\OUT 3 
\OUT 9 
*→* NIL


```


```lisp
;; Signal an exceptional condition.
 (loop for item in '(1 2 3 a 4 5)
       when (not (numberp item))
        return (cerror "enter new value" "non-numeric value: ~s" item))
Error: non-numeric value: A
 
;; The previous example is equivalent to the following one.
 (loop for item in '(1 2 3 a 4 5)
       when (not (numberp item))
        do (return 
            (cerror "Enter new value" "non-numeric value: ~s" item)))
Error: non-numeric value: A

```


```lisp
;; This example parses a simple printed string representation from 
;; BUFFER (which is itself a string) and returns the index of the
;; closing double-quote character.
 (let ((buffer "\\"a\\" \\"b\\""))
   (loop initially (unless (char= (char buffer 0) #\\")
                     (loop-finish))
         for i of-type fixnum from 1 below (length (the string buffer))
         when (char= (char buffer i) #\\")
          return i))
*→* 2
 
;; The collected value is returned.
 (loop for i from 1 to 10
       when (> i 5)
         collect i
       finally (prin1 'got-here))
\OUT GOT-HERE
*→* (6 7 8 9 10) 

;; Return both the count of collected numbers and the numbers.
 (loop for i from 1 to 10
       when (> i 5)
         collect i into number-list
         and count i into number-count
       finally (return (values number-count number-list)))
*→* 5, (6 7 8 9 10)

```


```lisp
;; Just name and return.
 (loop named max
       for i from 1 to 10
       do (print i)
       do (return-from max 'done))
\OUT 1 
*→* DONE

```


```lisp
 (let ((i 0))                     ; no loop keywords are used
    (loop (incf i) (if (= i 3) (return i)))) *→* 3
 (let ((i 0)(j 0))
    (tagbody
      (loop (incf j 3) (incf i) (if (= i 3) (go exit)))
      exit)
    j) *→* 9

```


```lisp
 (loop for x from 1 to 10 
       for y = nil then x 
       collect (list x y))
*→* ((1 NIL) (2 2) (3 3) (4 4) (5 5) (6 6) (7 7) (8 8) (9 9) (10 10))

```


```lisp
 (loop for x from 1 to 10 
       and y = nil then x 
       collect (list x y))
*→* ((1 NIL) (2 1) (3 2) (4 3) (5 4) (6 5) (7 6) (8 7) (9 8) (10 9))

```


```lisp
;; Group conditional clauses.
 (loop for i in '(1 324 2345 323 2 4 235 252)
       when (oddp i)
         do (print i)
         and collect i into odd-numbers
         and do (terpri)
       else                              ; I is even.
         collect i into even-numbers
       finally
         (return (values odd-numbers even-numbers)))
\OUT 1 
\OUT 
\OUT 2345 
\OUT 
\OUT 323 
\OUT 
\OUT 235 
*→* (1 2345 323 235), (324 2 4 252)

;; Collect numbers larger than 3.
 (loop for i in '(1 2 3 4 5 6)
       when (and (> i 3) i)
       collect it)                      ; IT refers to (and (> i 3) i).
*→* (4 5 6)
 
;; Find a number in a list.
 (loop for i in '(1 2 3 4 5 6)
       when (and (> i 3) i)
       return it)
*→* 4
     
;; The above example is similar to the following one.
 (loop for i in '(1 2 3 4 5 6)
       thereis (and (> i 3) i))
*→* 4

\medbreak
;; Nest conditional clauses.
 (let ((list '(0 3.0 apple 4 5 9.8 orange banana)))
   (loop for i in list
         when (numberp i)
           when (floatp i)
             collect i into float-numbers
           else                                  ; Not (floatp i)
             collect i into other-numbers
         else                                    ; Not (numberp i)
           when (symbolp i) 
             collect i into symbol-list
           else                                  ; Not (symbolp i)
             do (error "found a funny value in list ~S, value ~S~%" list i)
         finally (return (values float-numbers other-numbers symbol-list))))
*→* (3.0 9.8), (0 4 5), (APPLE ORANGE BANANA)

;; Without the END preposition, the last AND would apply to the
;; inner IF rather than the outer one.
 (loop for x from 0 to 3 
       do (print x)
       if (zerop (mod x 2))
         do (princ " a")
          and if (zerop (floor x 2))
                do (princ " b")
                end
          and do (princ " c"))
\OUT 0  a b c
\OUT 1 
\OUT 2  a c
\OUT 3 
*→* NIL

```


```lisp
 (loop for \i{internal-variable} downfrom (- \i{n} 1) to 0 ...)

```


```lisp
 (a b c)

```


```lisp
% (defun traffic-light (color)
%   (case color
%     (green)
%     (red (stop))
%     (amber (accelerate))      ;Insert more colors after this line.
%     ))
%
```


```lisp
 (a b c . d)

```


```lisp
 (cons 'a (cons 'b (cons 'c 'd)))

```


```lisp
 (cons 'this-one 'that-one) *→* (this-one . that-one)

```


```lisp
 (a b c d . (e f . (g))) \EQ (a b c d e f g)

```


```lisp
 'foo *→* FOO
 ''foo *→* (QUOTE FOO)
 (car ''foo) *→* QUOTE

```


```lisp
 (+ 3 ; three
    4)
*→* 7    

```


```lisp
;;;; Math Utilities

;;; FIB computes the the Fibonacci function in the traditional
;;; recursive way.

(defun fib (n)
  (check-type n integer)
  ;; At this point we're sure we have an integer argument.
  ;; Now we can get down to some serious computation.
  (cond ((< n 0)
         ;; Hey, this is just supposed to be a simple example.
         ;; Did you really expect me to handle the general case?
         (error "FIB got ~D as an argument." n))
        ((< n 2) n)             ;fib[0]=0 and fib[1]=1
        ;; The cheap cases didn't work.
        ;; Nothing more to do but recurse.
        (t (+ (fib (- n 1))     ;The traditional formula
              (fib (- n 2)))))) ; is fib[n-1]+fib[n-2].

```


```lisp
 `(cond ((numberp ,x) ,@y) (t (print ,x) ,@y))

```


```lisp
 (list 'cond 
       (cons (list 'numberp x) y) 
       (list* 't (list 'print x) y))

```


```lisp
 `(x ,x ,@x foo ,(cadr x) bar ,(cdr x) baz ,@(cdr x))
*→* (x (a b c) a b c foo b bar (b c) baz b c)

```


```lisp
 (append \lbracket\ x1\rbracket \lbracket\ x2\rbracket \lbracket\ x3\rbracket ... \lbracket\ xn\rbracket (quote atom))

```


```lisp
 (append \lbracket\ x1\rbracket \lbracket\ x2\rbracket \lbracket\ x3\rbracket ... \lbracket\ xn\rbracket form)

```


```lisp
 `((,a b) ,c ,@d)

```


```lisp
 (append (list (append (list a) (list 'b) '\nil)) (list c) d '\nil)

```


```lisp
 (append (list (append (list a) (list 'b))) (list c) d)
 (append (list (append (list a) '(b))) (list c) d)
 (list* (cons a '(b)) c d)
 (list* (cons a (list 'b)) c d)
 (append (list (cons a '(b))) (list c) d)
 (list* (cons a '(b)) c (copy-list d))

```


```lisp
(apply #'+ l) \EQ (apply (function +) l)

```


```lisp
 #(a b c c c c)
 #6(a b c c c c)
 #6(a b c)
 #6(a b c c)

```


```lisp
 #(a b c)               ;A vector of length 3
 #(2 3 5 7 11 13 17 19 23 29 31 37 41 43 47)
                        ;A vector containing the primes below 50
 #()                    ;An empty vector

```


```lisp
  #*101111
 #6*101111
 #6*101
 #6*1011

```


```lisp
 #*         ;An empty bit-vector

```


```lisp
 #B1101 \EQ 13 ;1101\ssst
 #b101/11 \EQ 5/3

```


```lisp
 #o37/15 \EQ 31/13
 #o777 \EQ 511
 #o105 \EQ 69 ;105\ssse

```


```lisp
 #xF00 \EQ 3840             
 #x105 \EQ 261 ;105\ssss

```


```lisp
 0       1       5
 foo     2       (hot dog)

```


```lisp
 (0 1 5) (foo 2 (hot dog))

```


```lisp
 ((0 1 5) (foo 2 (hot dog)))

```


```lisp
 #.(cm keyword1 'value1 keyword2 'value2 ...)

```


```lisp
 (intern (string slotj) (find-package 'keyword))

```


```lisp
 (setq x (list 'p 'q))
 (setq y (list (list 'a 'b) x 'foo x))
 (rplacd (last y) (cdr y))

```


```lisp
 ((a b) . #1=(#2=(p q) foo #2# . #1#))

```


```lisp
 ((a b) (p q) foo (p q) (p q) foo (p q) (p q) foo (p q) ...)

```


```lisp
#-\param{test} \param{expression} \EQ #+(not \param{test}) \param{expression}

```


```lisp
;;; In this example, some debugging code is commented out with #|...|#
;;; Note that this kind of comment can occur in the middle of a line
;;; (because a delimiter marks where the end of the comment occurs)
;;; where a semicolon comment can only occur at the end of a line 
;;; (because it comments out the rest of the line).
 (defun add3 (n) #|(format t "~&Adding 3 to ~D." n)|# (+ n 3))
\goodbreak
;;; The examples that follow show issues related to #| ... |# nesting.

;;; In this first example, #| and |# always occur properly paired,
;;; so nesting works naturally.
 (defun mention-fun-fact-1a ()
   (format t "CL uses ; and #|...|# in comments."))
*→* MENTION-FUN-FACT-1A
 (mention-fun-fact-1a)
\OUT CL uses ; and #|...|# in comments.
*→* NIL
 #| (defun mention-fun-fact-1b ()
      (format t "CL uses ; and #|...|# in comments.")) |#
 (fboundp 'mention-fun-fact-1b) *→* NIL
\goodbreak
;;; In this example, vertical-bar followed by sharpsign needed to appear
;;; in a string without any matching sharpsign followed by vertical-bar
;;; having preceded this.  To compensate, the programmer has included a
;;; slash separating the two characters.  In case 2a, the slash is 
;;; unnecessary but harmless, but in case 2b, the slash is critical to
;;; allowing the outer #| ... |# pair match.  If the slash were not present,
;;; the outer comment would terminate prematurely.
 (defun mention-fun-fact-2a ()
   (format t "Don't use |\\# unmatched or you'll get in trouble!"))
*→* MENTION-FUN-FACT-2A
 (mention-fun-fact-2a)
\OUT Don't use |# unmatched or you'll get in trouble!
*→* NIL
 #| (defun mention-fun-fact-2b ()
      (format t "Don't use |\\# unmatched or you'll get in trouble!") |#
 (fboundp 'mention-fun-fact-2b) *→* NIL
\goodbreak
;;; In this example, the programmer attacks the mismatch problem in a
;;; different way.  The sharpsign vertical bar in the comment is not needed
;;; for the correct parsing of the program normally (as in case 3a), but 
;;; becomes important to avoid premature termination of a comment when such 
;;; a program is commented out (as in case 3b).
 (defun mention-fun-fact-3a () ; #|
   (format t "Don't use |# unmatched or you'll get in trouble!"))
*→* MENTION-FUN-FACT-3A
 (mention-fun-fact-3a)
\OUT Don't use |# unmatched or you'll get in trouble!
*→* NIL
 #|
 (defun mention-fun-fact-3b () ; #|
   (format t "Don't use |# unmatched or you'll get in trouble!"))
 |#
 (fboundp 'mention-fun-fact-3b) *→* NIL

```


```lisp
 #|| (+ #|| 3 ||# 4 5) ||# 

```


```lisp
 #| (+ #| 3 |# 4 5) |#

```


```lisp
 (+ 1/3 2/3 1.0d0 1.0 1.0e-15)

```


```lisp
 (+ (+ 1/3 2/3) (+ 1.0d0 1.0e-15) 1.0)

```


```lisp
 ;;;; Combining rationals with floats.
 ;;; This example assumes an implementation in which 
 ;;; (float-radix 0.5) is 2 (as in IEEE) or 16 (as in IBM/360),
 ;;; or else some other implementation in which 1/2 has an exact 
 ;;;  representation in floating point.
 (+ 1/2 0.5) *→* 1.0
 (- 1/2 0.5d0) *→* 0.0d0
 (+ 0.5 -0.5 1/2) *→* 0.5

 ;;;; Comparing rationals with floats.
 ;;; This example assumes an implementation in which the default float 
 ;;; format is IEEE single-float, IEEE double-float, or some other format
 ;;; in which 5/7 is rounded upwards by FLOAT.
 (< 5/7 (float 5/7)) *→ true*
 (< 5/7 (rational (float 5/7))) *→ true*
 (< (float 5/7) (float 5/7)) *→ false*

```


```lisp
 #c(1.0 1.0) *→* #C(1.0 1.0)
 #c(0.0 0.0) *→* #C(0.0 0.0)
 #c(1.0 1) *→* #C(1.0 1.0)
 #c(0.0 0) *→* #C(0.0 0.0)
 #c(1 1) *→* #C(1 1)
 #c(0 0) *→* 0
 (typep #c(1 1) '(complex (eql 1))) *→ true*
 (typep #c(0 0) '(complex (eql 0))) *→ false*

```


```lisp
 (defclass q () ((x :initarg a)))
 (defclass r (q) ((x :initarg b))
   (:default-initargs a 1 b 2))

```


```lisp
 (defmethod make-instance ((class standard-class) &rest initargs)
   ...
   (let ((instance (apply #'allocate-instance class initargs)))
     (apply #'initialize-instance instance initargs)
     instance))

 (defmethod make-instance ((class-name symbol) &rest initargs)
   (apply #'make-instance (find-class class-name) initargs))

```


```lisp
 (defmethod initialize-instance ((instance standard-object) &rest initargs)
   (apply #'shared-initialize instance t initargs)))

```


```lisp
 ;; In a TOPS-20 implementation, which uses {\hat}V to quote 
 (NAMESTRING (MAKE-PATHNAME :HOST "OZ" :NAME "<TEST>"))
*→* #P"OZ:PS:{\hat}V<TEST{\hat}V>"
\NV #P"OZ:PS:<TEST>"

```


```lisp
 (pathname-type 
   (merge-pathnames (make-pathname :type "LISP")
                    (make-pathname :type "TEXT")))
*→* "LISP"
\smallbreak
 (pathname-type 
   (merge-pathnames (make-pathname :type nil)
                    (make-pathname :type "LISP")))
*→* "LISP"
\smallbreak
 (pathname-type 
   (merge-pathnames (make-pathname :type :unspecific)
                    (make-pathname :type "LISP")))
*→* :UNSPECIFIC

```


```lisp
 (defmacro wrong-order (x y) `(getf ,y ,x))

```


```lisp
 (push value (wrong-order place1 place2))

```


```lisp
 (setf place1 value1 place2 value2 ...)

```


```lisp
 (let ((ref2 (list '())))
   (push (progn (princ "1") 'ref-1)
         (car (progn (princ "2") ref2)))) 
\OUT 12
*→* (REF1)

 (let (x)
    (push (setq x (list 'a))
          (car (setq x (list 'b))))
     x)
*→* (((A) . B))

```


```lisp
 (setq integer #x69) *→* #x69
 (rotatef (ldb (byte 4 4) integer) 
          (ldb (byte 4 0) integer))
 integer *→* #x96
;;; This example is trying to swap two independent bit fields 
;;; in an integer.  Note that the generalized variable of 
;;; interest here is just the (possibly local) program variable
;;; integer.

```


```lisp
 (setq s (setq r (list (list 'a 1 'b 2 'c 3)))) *→* ((a 1 b 2 c 3))
 (setf (getf (car r) 'b) 
       (progn (setq r nil) 6)) *→* 6
 r *→* NIL
 s *→* ((A 1 B 6 C 3))
;;; Note that the (setq r nil) does not affect the actions of 
;;; the SETF because the value of R had already been saved in 
;;; a temporary variable as part of the step 1. Only the CAR
;;; of this value will be retrieved, and subsequently modified 
;;; after the value computation.

```


```lisp
 (setf (the integer (cadr x)) (+ y 3))

```


```lisp
 (setf (cadr x) (the integer (+ y 3)))

```


```lisp
 (setf (apply \#'\param{name} \starparam{arg}) \param{val})
 \EQ (apply \#'(setf \param{name}) \param{val} \starparam{arg})

```


```lisp
 (let ((#:temp-1 arg1)          ;force correct order of evaluation
       (#:temp-2 arg2)
       ...
       (#:temp-0 \param{new-value}))
   (funcall (function (setf \param{f})) #:temp-0 #:temp-1 #:temp-2...))

```


```lisp
 (\term{operator} \starparam{preceding-form} \param{place} \starparam{following-form})

```


```lisp
 <-1---<--<--2---3->--4-->->
 000000000000000000000000000
 11 111111111111111111111111
           22 222
              333 3333
        44444444444444 44444

```


```lisp
(defun simple-pprint-defun (*standard-output* list)
  (pprint-logical-block (*standard-output* list :prefix "(" :suffix ")")
    (write (first list))
    (write-char #\\Space)
    (pprint-newline :miser)
    (pprint-indent :current 0)
    (write (second list))
    (write-char #\\Space)
    (pprint-newline :fill)
    (write (third list))
    (pprint-indent :block 1)
    (write-char #\\Space)
    (pprint-newline :linear)
    (write (fourth list))))

```


```lisp
(simple-pprint-defun *standard-output* '(defun prod (x y) (* x y)))

```


```lisp
 (DEFUN PROD (X Y) 
   (* X Y))

```


```lisp
(DEFUN PROD
       (X Y)
  (* X Y))

```


```lisp
 (DEFUN
  PROD
  (X Y)
  (* X Y))

```


```lisp
 (pprint-logical-block (*standard-output* nil :per-line-prefix ";;; ")
   (simple-pprint-defun *standard-output* '(defun prod (x y) (* x y))))
 
 ;;; (DEFUN PROD
 ;;;        (X Y)
 ;;;   (* X Y))

```


```lisp
 (defun pprint-let (*standard-output* list)
   (pprint-logical-block (nil list :prefix "(" :suffix ")")
     (write (pprint-pop))
     (pprint-exit-if-list-exhausted)
     (write-char #\\Space)
     (pprint-logical-block (nil (pprint-pop) :prefix "(" :suffix ")")
       (pprint-exit-if-list-exhausted)
       (loop (pprint-logical-block (nil (pprint-pop) :prefix "(" :suffix ")")
               (pprint-exit-if-list-exhausted)
               (loop (write (pprint-pop))
                     (pprint-exit-if-list-exhausted)
                     (write-char #\\Space)
                     (pprint-newline :linear)))
             (pprint-exit-if-list-exhausted)
             (write-char #\\Space)
             (pprint-newline :fill)))
     (pprint-indent :block 1)
     (loop (pprint-exit-if-list-exhausted)
           (write-char #\\Space)
           (pprint-newline :linear)
           (write (pprint-pop)))))

```


```lisp
 (pprint-let *standard-output*
             '#1=(let (x (*print-length* (f (g 3))) 
                       (z . 2) (k (car y)))
                   (setq x (sqrt z)) #1#))

```


```lisp
 #1=(LET (X (*PRINT-LENGTH* (F #)) (Z . 2) (K (CAR Y))) 
      (SETQ X (SQRT Z))
      #1#)

```


```lisp
 #1=(LET (X (*PRINT-PRETTY* (F #))
          (Z . 2) (K (CAR Y)))
      (SETQ X (SQRT Z))
      #1#)

```


```lisp
 (LET (X
       (*PRINT-LENGTH*
        (F #))
       (Z . 2) ...)
   (SETQ X (SQRT Z))
   ...)

```


```lisp
(defun pprint-vector (*standard-output* v)
  (pprint-logical-block (nil nil :prefix "#(" :suffix ")")
    (let ((end (length v)) (i 0))
      (when (plusp end)
        (loop (pprint-pop)
              (write (aref v i))
              (if (= (incf i) end) (return nil))
              (write-char #\\Space)
              (pprint-newline :fill))))))

```


```lisp
 (pprint-vector *standard-output* '#(12 34 567 8 9012 34 567 89 0 1 23))
 
 #(12 34 567 8 
   9012 34 567 
   89 0 1 23)

```


```lisp
(defun simple-pprint-defun (*standard-output* list)
  (format T "~:<~W ~@_~:I~W ~:_~W~1I ~_~W~:>" list))

(defun pprint-let (*standard-output* list)
  (format T "~:<~W~{\hat}~:<~@\{~:<~@\{~W~{\hat}~_~\}~:>~{\hat}~:_~\}~:>~1I~@\{~{\hat}~_~W~\}~:>" list)) 

```


```lisp
 (setq *print-pprint-dispatch* (copy-pprint-dispatch nil))

 (set-pprint-dispatch 'ratio
   #'(lambda (s obj)
       (format s "#.(/ ~W ~W)" 
                 (numerator obj) (denominator obj))))

 (set-pprint-dispatch '(and ratio (satisfies minusp))
   #'(lambda (s obj)
       (format s "#.(- (/ ~W ~W))" 
               (- (numerator obj)) (denominator obj)))
   5)

 (pprint '(1/3 -2/3))
 (#.(/ 1 3) \#.(- (/ 2 3)))

```


```lisp
 (set-pprint-dispatch '(cons (member quote)) () 
   #'(lambda (s list)
       (if (and (consp (cdr list)) (null (cddr list)))
          (funcall (formatter "'~W") s (cadr list))
          (pprint-fill s list))))
 
 (set-pprint-dispatch '(cons (member my-let)) 
                      (pprint-dispatch '(let) nil))

```


```lisp
 (set-pprint-dispatch '(cons (not (and symbol (satisfies fboundp))))
                      #'pprint-fill -5)
 
 ;; Assume a line length of 9
 (pprint '(0 b c d e f g h i j k))
 (0 b c d
  e f g h
  i j k)

```


```lisp
 (defstruct family mom kids)
 
 (set-pprint-dispatch 'family
   #'(lambda (s f)
       (funcall (formatter "~@<#<~;~W and ~2I~_~/pprint-fill/~;>~:>")
               s (family-mom f) (family-kids f))))

```


```lisp
 (write (list 'principal-family
              (make-family :mom "Lucy"
                           :kids '("Mark" "Bob" . "Dan")))
        :right-margin 25 :pretty T :escape nil :miser-width nil)
 (PRINCIPAL-FAMILY
  #<Lucy and
      Mark Bob . Dan>)

```


```lisp
 27    27.    #o33    #x1B    #b11011    #.(* 3 3 3)    81/3

```


```lisp
 (A B)    (a b)    (  a  b )    (\\A |B|) 
(|\\A|
  B
)

```


```lisp
 (let ((x (make-symbol "FOO"))) (list x x))

```


```lisp
 (defun test-readtable-case-printing ()
   (let ((*readtable* (copy-readtable nil))
         (*print-case* *print-case*))
     (format t "READTABLE-CASE *PRINT-CASE*  Symbol-name  Output~
              ~%--------------------------------------------------~
              ~%")
     (dolist (readtable-case '(:upcase :downcase :preserve :invert))
       (setf (readtable-case *readtable*) readtable-case)
       (dolist (print-case '(:upcase :downcase :capitalize))
         (dolist (symbol '(|ZEBRA| |Zebra| |zebra|))
           (setq *print-case* print-case)
           (format t "~&:~A~15T:~A~29T~A~42T~A"
                   (string-upcase readtable-case)
                   (string-upcase print-case)
                   (symbol-name symbol)
                   (prin1-to-string symbol)))))))

```


```lisp
    READTABLE-CASE *PRINT-CASE*  Symbol-name  Output
    --------------------------------------------------
    :UPCASE        :UPCASE       ZEBRA        ZEBRA
    :UPCASE        :UPCASE       Zebra        |Zebra|
    :UPCASE        :UPCASE       zebra        |zebra|
    :UPCASE        :DOWNCASE     ZEBRA        zebra
    :UPCASE        :DOWNCASE     Zebra        |Zebra|
    :UPCASE        :DOWNCASE     zebra        |zebra|
    :UPCASE        :CAPITALIZE   ZEBRA        Zebra
    :UPCASE        :CAPITALIZE   Zebra        |Zebra|
    :UPCASE        :CAPITALIZE   zebra        |zebra|
    :DOWNCASE      :UPCASE       ZEBRA        |ZEBRA|
    :DOWNCASE      :UPCASE       Zebra        |Zebra|
    :DOWNCASE      :UPCASE       zebra        ZEBRA
    :DOWNCASE      :DOWNCASE     ZEBRA        |ZEBRA|
    :DOWNCASE      :DOWNCASE     Zebra        |Zebra|
    :DOWNCASE      :DOWNCASE     zebra        zebra
    :DOWNCASE      :CAPITALIZE   ZEBRA        |ZEBRA|
    :DOWNCASE      :CAPITALIZE   Zebra        |Zebra|
    :DOWNCASE      :CAPITALIZE   zebra        Zebra
    :PRESERVE      :UPCASE       ZEBRA        ZEBRA
    :PRESERVE      :UPCASE       Zebra        Zebra
    :PRESERVE      :UPCASE       zebra        zebra
    :PRESERVE      :DOWNCASE     ZEBRA        ZEBRA
    :PRESERVE      :DOWNCASE     Zebra        Zebra
    :PRESERVE      :DOWNCASE     zebra        zebra
    :PRESERVE      :CAPITALIZE   ZEBRA        ZEBRA
    :PRESERVE      :CAPITALIZE   Zebra        Zebra
    :PRESERVE      :CAPITALIZE   zebra        zebra
    :INVERT        :UPCASE       ZEBRA        zebra
    :INVERT        :UPCASE       Zebra        Zebra
    :INVERT        :UPCASE       zebra        ZEBRA
    :INVERT        :DOWNCASE     ZEBRA        zebra
    :INVERT        :DOWNCASE     Zebra        Zebra
    :INVERT        :DOWNCASE     zebra        ZEBRA
    :INVERT        :CAPITALIZE   ZEBRA        zebra
    :INVERT        :CAPITALIZE   Zebra        Zebra
    :INVERT        :CAPITALIZE   zebra        ZEBRA

```


```lisp
 (a . (b . ((c . (d . nil)) . (e . nil))))
 (a b (c d) e)

```


```lisp
 (a . b)     ;A dotted pair of a and b
 (a.b)       ;A list of one element, the symbol named a.b
 (a. b)      ;A list of two elements a. and b
 (a .b)      ;A list of two elements a and .b
 (a b . c)   ;A dotted list of a and b with c at the end; two conses
 .iot        ;The symbol whose name is .iot
 (. b)       ;Invalid -- an error is signaled if an attempt is made to read 
             ;this syntax.
 (a .)       ;Invalid -- an error is signaled.
 (a .. b)    ;Invalid -- an error is signaled.
 (a . . b)   ;Invalid -- an error is signaled.
 (a b c ...) ;Invalid -- an error is signaled.
 (a \\. b)    ;A list of three elements a, ., and b
 (a |.| b)   ;A list of three elements a, ., and b
 (a \\... b)  ;A list of three elements a, ..., and b
 (a |...| b) ;A list of three elements a, ..., and b

```


```lisp
% #3A(
% ((#\\s #\\t #\\o #\\p) (#\\s #\\p #\\o #\\t))
% ((#\\p #\\o #\\s #\\t) (#\\p #\\o #\\t #\\s))
% ((#\\t #\\o #\\p #\\s) (#\\o #\\p #\\t #\\s)))
%
```


```lisp
% #3A(("stop" "spot") ("post" "pots") ("tops" "opts"))
%
```


```lisp
 (let ((a (make-array '(3 3)))
       (*print-pretty* t)
       (*print-array* t))
   (dotimes (i 3) (dotimes (j 3) (setf (aref a i j) (format nil "<~D,~D>" i j))))
   (print a)
   (print (make-array 9 :displaced-to a)))
\OUT #2A(("<0,0>" "<0,1>" "<0,2>") 
\OUT     ("<1,0>" "<1,1>" "<1,2>") 
\OUT     ("<2,0>" "<2,1>" "<2,2>")) 
\OUT #("<0,0>" "<0,1>" "<0,2>" "<1,0>" "<1,1>" "<1,2>" "<2,0>" "<2,1>" "<2,2>") 
*→* #<ARRAY 9 indirect 36363476>

```


```lisp
% #S(RANDOM-STATE DATA #(14 49 98436589 786345 8734658324 ... ))
%
```


```lisp
 #S(RANDOM-STATE :DATA #(14 49 98436589 786345 8734658324 ... ))

```


```lisp
 #S(\param{structure-name} \star{\curly{\param{slot-key} \param{slot-value}}})

```


```lisp
 (let ((*print-escape* t)) (fresh-line) (write #\\a))
\OUT #\\a
*→* #\\a
 (let ((*print-escape* nil) (*print-readably* nil))
   (fresh-line)
   (write #\\a))
\OUT a
*→* #\\a
 (progn (fresh-line) (prin1 #\\a))
\OUT #\\a
*→* #\\a
 (progn (fresh-line) (print #\\a))
\OUT 
\OUT #\\a
*→* #\\a
 (progn (fresh-line) (princ #\\a))
\OUT a
*→* #\\a
\medbreak
 (dolist (val '(t nil))
   (let ((*print-escape* val) (*print-readably* val))
     (print '#\\a) 
     (prin1 #\\a) (write-char #\\Space)
     (princ #\\a) (write-char #\\Space)
     (write #\\a)))
\OUT #\\a #\\a a #\\a
\OUT #\\a #\\a a a
*→* NIL
\medbreak
 (progn (fresh-line) (write '(let ((a 1) (b 2)) (+ a b))))
\OUT (LET ((A 1) (B 2)) (+ A B))
*→* (LET ((A 1) (B 2)) (+ A B))
\medbreak
 (progn (fresh-line) (pprint '(let ((a 1) (b 2)) (+ a b))))
\OUT (LET ((A 1)
\OUT       (B 2))               
\OUT   (+ A B))
*→* (LET ((A 1) (B 2)) (+ A B))
\medbreak
 (progn (fresh-line) 
        (write '(let ((a 1) (b 2)) (+ a b)) :pretty t))
\OUT (LET ((A 1)
\OUT       (B 2))
\OUT   (+ A B))                 
*→* (LET ((A 1) (B 2)) (+ A B))
\medbreak
 (with-output-to-string (s)  
    (write 'write :stream s)
    (prin1 'prin1 s))
*→* "WRITEPRIN1"

```


```lisp
 (defun test-readtable-case-reading ()
   (let ((*readtable* (copy-readtable nil)))
     (format t "READTABLE-CASE  Input   Symbol-name~
              ~%-----------------------------------~
              ~%")
     (dolist (readtable-case '(:upcase :downcase :preserve :invert))
       (setf (readtable-case *readtable*) readtable-case)
       (dolist (input '("ZEBRA" "Zebra" "zebra"))
         (format t "~&:~A~16T~A~24T~A"
                 (string-upcase readtable-case)
                 input
                 (symbol-name (read-from-string input)))))))

```


```lisp
 READTABLE-CASE     Input Symbol-name
 -------------------------------------
    :UPCASE         ZEBRA   ZEBRA
    :UPCASE         Zebra   ZEBRA
    :UPCASE         zebra   ZEBRA
    :DOWNCASE       ZEBRA   zebra
    :DOWNCASE       Zebra   zebra
    :DOWNCASE       zebra   zebra
    :PRESERVE       ZEBRA   ZEBRA
    :PRESERVE       Zebra   Zebra
    :PRESERVE       zebra   zebra
    :INVERT         ZEBRA   zebra
    :INVERT         Zebra   Zebra
    :INVERT         zebra   ZEBRA

```


```lisp
 (cons '#3=(p q r) '(x y . #3#))

```


```lisp
 (set-macro-character #\\'       ;incorrect
    #'(lambda (stream char)
         (declare (ignore char))
         (list 'quote (read stream))))

```


```lisp
 (set-macro-character #\\'       ;correct
    #'(lambda (stream char)
         (declare (ignore char))
         (list 'quote (read stream t nil t))))

```


```lisp
 ;; The following examples assume the readtable case of *readtable* 
 ;; and *print-case* are both :upcase.
 (eq 'abc 'ABC) *→ true*
 (eq 'abc '|ABC|) *→ true*
 (eq 'abc 'a|B|c) *→ true*
 (eq 'abc '|abc|) *→ false*

```


```lisp
 ;; The following examples assume the readtable case of *readtable* 
 ;; and *print-case* are both :upcase.
 (eq 'abc '\\A\\B\\C) *→ true*
 (eq 'abc 'a\\Bc) *→ true*
 (eq 'abc '\\ABC) *→ true*
 (eq 'abc '\\abc) *→ false*

```


```lisp
 (length '(this-that)) *→* 1
 (length '(this - that)) *→* 3
 (length '(a
           b)) *→* 2
 (+ 34) *→* 34
 (+ 3 4) *→* 7

```


```lisp
 (remove "FOO" '(foo bar "FOO" "BAR" "foo" "bar") :test #'equal)
*→* (foo bar "BAR" "foo" "bar")
 (remove "FOO" '(foo bar "FOO" "BAR" "foo" "bar") :test #'equalp)
*→* (foo bar "BAR" "bar")
 (remove "FOO" '(foo bar "FOO" "BAR" "foo" "bar") :test #'string-equal)
*→* (bar "BAR" "bar")
 (remove "FOO" '(foo bar "FOO" "BAR" "foo" "bar") :test #'string=)
*→* (BAR "BAR" "foo" "bar")

 (remove 1 '(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) :test-not #'eql)
*→* (1)
 (remove 1 '(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) :test-not #'=)
*→* (1 1.0 #C(1.0 0.0))
 (remove 1 '(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) :test (complement #'=))
*→* (1 1.0 #C(1.0 0.0))

 (count 1 '((one 1) (uno 1) (two 2) (dos 2)) :key #'cadr) *→* 2

 (count 2.0 '(1 2 3) :test #'eql :key #'float) *→* 1

 (count "FOO" (list (make-pathname :name "FOO" :type "X")  
                    (make-pathname :name "FOO" :type "Y"))
        :key #'pathname-name
        :test #'equal)
*→* 2

```


```lisp
 (count-if #'zerop '(1 #C(0.0 0.0) 0 0.0d0 0.0s0 3)) *→* 4

 (remove-if-not #'symbolp '(0 1 2 3 4 5 6 7 8 9 A B C D E F))
*→* (A B C D E F)
 (remove-if (complement #'symbolp) '(0 1 2 3 4 5 6 7 8 9 A B C D E F))
*→* (A B C D E F)

 (count-if #'zerop '("foo" "" "bar" "" "" "baz" "quux") :key #'length)
*→* 3

```


```lisp
 \\256   25\\64   1.0\\E6   |100|   3\\.14159   |3/4|   3\\/4   5||

```


```lisp
 (vector double-float 100)

```


```lisp
 (vector double-float *)

```


```lisp
 (vector * 100)                                      

```


```lisp
% (array integer 3)       ;Three-dimensional arrays of integers
% (array integer (* * *)) ;Three-dimensional arrays of integers
% (array * (4 5 6))       ;4-by-5-by-6 arrays
% (array character (3 *)) ;Two-dimensional arrays of characters that have 
%                         ;three rows
% (array short-float \empty)   ;Zero-rank arrays of short-floats
%
```


```lisp
% (typep foo '(array character))
%
```


```lisp
% (subtypep 'character (array-element-type foo))
%
```


```lisp
 (make-array '(4 2 3) :initial-contents
             '(((a b c) (1 2 3))
              ((d e f) (3 1 2))
              ((g h i) (2 3 1))
              ((j k l) (0 0 0))))

```


```lisp

 (make-array 5) ;; Creates a one-dimensional array of five elements.
 (make-array '(3 4) :element-type '(mod 16)) ;; Creates a 
                ;;two-dimensional array, 3 by 4, with four-bit elements.
 (make-array 5 :element-type 'single-float) ;; Creates an array of single-floats.

```


```lisp
 (make-array nil :initial-element nil) *→* #0ANIL
 (make-array 4 :initial-element nil) *→* #(NIL NIL NIL NIL)
 (make-array '(2 4) 
              :element-type '(unsigned-byte 2) 
              :initial-contents '((0 1 2 3) (3 2 1 0)))
*→* #2A((0 1 2 3) (3 2 1 0))
 (make-array 6
              :element-type 'character 
              :initial-element #\\a 
              :fill-pointer 3) *→* "aaa"

```


```lisp
 (setq a (make-array '(4 3))) 
*→* #<ARRAY 4x3 simple 32546632>
 (dotimes (i 4)
   (dotimes (j 3)
     (setf (aref a i j) (list i 'x j '= (* i j)))))
*→* NIL
 (setq b (make-array 8 :displaced-to a
                       :displaced-index-offset 2))
*→* #<ARRAY 8 indirect 32550757>
 (dotimes (i 8)
   (print (list i (aref b i))))
\OUT (0 (0 X 2 = 0)) 
\OUT (1 (1 X 0 = 0)) 
\OUT (2 (1 X 1 = 1)) 
\OUT (3 (1 X 2 = 2)) 
\OUT (4 (2 X 0 = 0)) 
\OUT (5 (2 X 1 = 2)) 
\OUT (6 (2 X 2 = 4)) 
\OUT (7 (3 X 0 = 0)) 
*→* NIL

```


```lisp
 (setq a1 (make-array 50))
*→* #<ARRAY 50 simple 32562043>
 (setq b1 (make-array 20 :displaced-to a1 :displaced-index-offset 10))
*→* #<ARRAY 20 indirect 32563346>
 (length b1) *→* 20

 (setq a2 (make-array 50 :fill-pointer 10))
*→* #<ARRAY 50 fill-pointer 10 46100216>
 (setq b2 (make-array 20 :displaced-to a2 :displaced-index-offset 10))
*→* #<ARRAY 20 indirect 46104010>
 (length a2) *→* 10
 (length b2) *→* 20

 (setq a3 (make-array 50 :fill-pointer 10))
*→* #<ARRAY 50 fill-pointer 10 46105663>
 (setq b3 (make-array 20 :displaced-to a3 :displaced-index-offset 10
                         :fill-pointer 5))
*→* #<ARRAY 20 indirect, fill-pointer 5 46107432>
 (length a3) *→* 10
 (length b3) *→* 5

```


```lisp
 (adjust-array A ...)

```


```lisp
 (adjust-array A ... :displaced-to C)

```


```lisp
 (adjust-array A ... :displaced-to B)
 (adjust-array A ... :displaced-to C)

```


```lisp
 (adjust-array A ... :displaced-to B)
 (adjust-array A ... :displaced-to nil)

```


```lisp
 (adjustable-array-p
  (setq ada (adjust-array
              (make-array '(2 3)
                          :adjustable t
                          :initial-contents '((a b c) (1 2 3)))
              '(4 6)))) *→* T 
 (array-dimensions ada) *→* (4 6) 
 (aref ada 1 1) *→* 2 
 (setq beta (make-array '(2 3) :adjustable t))
*→* #2A((NIL NIL NIL) (NIL NIL NIL)) 
 (adjust-array beta '(4 6) :displaced-to ada)
*→* #2A((A B C NIL NIL NIL)
       (1 2 3 NIL NIL NIL)
       (NIL NIL NIL NIL NIL NIL) 
       (NIL NIL NIL NIL NIL NIL))
 (array-dimensions beta) *→* (4 6)
 (aref beta 1 1) *→* 2 

```


```lisp
#2A(( alpha     beta      gamma     delta )
    ( epsilon   zeta      eta       theta )
    ( iota      kappa     lambda    mu    )
    ( nu        xi        omicron   pi    ))

```


```lisp
 (adjust-array m '(3 5) :initial-element 'baz)

```


```lisp
#2A(( alpha     beta      gamma     delta     baz )
    ( epsilon   zeta      eta       theta     baz )
    ( iota      kappa     lambda    mu        baz ))

```


```lisp
 (adjustable-array-p 
   (make-array 5
               :element-type 'character 
               :adjustable t 
               :fill-pointer 3)) *→ true*
 (adjustable-array-p (make-array 4)) *→* \term{implementation-dependent}

```


```lisp
 (aref (setq alpha (make-array 4)) 3) *→* \term{implementation-dependent}
 (setf (aref alpha 3) 'sirens) *→* SIRENS
 (aref alpha 3) *→* SIRENS
 (aref (setq beta (make-array '(2 4) 
                    :element-type '(unsigned-byte 2)
                    :initial-contents '((0 1 2 3) (3 2 1 0))))
        1 2) *→* 1
 (setq gamma '(0 2))
 (apply #'aref beta gamma) *→* 2
 (setf (apply #'aref beta gamma) 3) *→* 3
 (apply #'aref beta gamma) *→* 3
 (aref beta 0 2) *→* 3

```


```lisp
 (array-dimension (make-array 4) 0) *→* 4
 (array-dimension (make-array '(2 3)) 1) *→* 3

```


```lisp
 (array-dimension array n) \EQ (nth n (array-dimensions array))

```


```lisp
 (array-dimensions (make-array 4)) *→* (4)
 (array-dimensions (make-array '(2 3))) *→* (2 3)
 (array-dimensions (make-array 4 :fill-pointer 2)) *→* (4)

```


```lisp
 (array-element-type (make-array 4)) *→* T
 (array-element-type (make-array 12 :element-type '(unsigned-byte 8))) 
*→* \term{implementation-dependent}
 (array-element-type (make-array 12 :element-type '(unsigned-byte 5)))
*→* \term{implementation-dependent}

```


```lisp
 (array-element-type (make-array 5 :element-type '(mod 5)))

```


```lisp
 (array-has-fill-pointer-p (make-array 4)) *→* \term{implementation-dependent}
 (array-has-fill-pointer-p (make-array '(2 3))) *→ false*
 (array-has-fill-pointer-p
   (make-array 8 
               :fill-pointer 2 
               :initial-element 'filler)) *→ true*

```


```lisp
 (setq a1 (make-array 5)) *→* #<ARRAY 5 simple 46115576>
 (setq a2 (make-array 4 :displaced-to a1
                        :displaced-index-offset 1))
*→* #<ARRAY 4 indirect 46117134>
 (array-displacement a2)
*→* #<ARRAY 5 simple 46115576>, 1
 (setq a3 (make-array 2 :displaced-to a2
                        :displaced-index-offset 2))
*→* #<ARRAY 2 indirect 46122527>
 (array-displacement a3)
*→* #<ARRAY 4 indirect 46117134>, 2

```


```lisp
 (setq a (make-array '(7 11) :element-type 'string-char))
 (array-in-bounds-p a 0  0) *→ true*
 (array-in-bounds-p a 6 10) *→ true*
 (array-in-bounds-p a 0 -1) *→ false*
 (array-in-bounds-p a 0 11) *→ false*
 (array-in-bounds-p a 7  0) *→ false*

```


```lisp
 (array-in-bounds-p array subscripts)   
 \EQ (and (not (some #'minusp (list subscripts)))
         (every #'< (list subscripts) (array-dimensions array)))

```


```lisp
 (array-rank (make-array '())) *→* 0
 (array-rank (make-array 4)) *→* 1
 (array-rank (make-array '(4))) *→* 1
 (array-rank (make-array '(2 3))) *→* 2

```


```lisp
 (setq a (make-array '(4 7) :element-type '(unsigned-byte 8)))
 (array-row-major-index a 1 2) *→* 9
 (array-row-major-index 
    (make-array '(2 3 4) 
                :element-type '(unsigned-byte 8)
                :displaced-to a
                :displaced-index-offset 4)
    0 2 1) *→* 9

```


```lisp
 (defun array-row-major-index (a &rest subscripts)
   (apply #'+ (maplist #'(lambda (x y)
                            (* (car x) (apply #'* (cdr y))))
                       subscripts
                       (array-dimensions a))))

```


```lisp
 (array-total-size (make-array 4)) *→* 4
 (array-total-size (make-array 4 :fill-pointer 2)) *→* 4
 (array-total-size (make-array 0)) *→* 0
 (array-total-size (make-array '(4 2))) *→* 8
 (array-total-size (make-array '(4 0))) *→* 0
 (array-total-size (make-array '())) *→* 1

```


```lisp
 (array-total-size x)
    \EQ (apply #'* (array-dimensions x))
    \EQ (reduce #'* (array-dimensions x))

```


```lisp
 (arrayp (make-array '(2 3 4) :adjustable t)) *→ true*
 (arrayp (make-array 6)) *→ true*
 (arrayp #*1011) *→ true*
 (arrayp "hi") *→ true*
 (arrayp 'hi) *→ false*
 (arrayp 12) *→ false*

```


```lisp
 (arrayp \param{object}) \EQ (typep \param{object} 'array)

```


```lisp
 (setq a (make-array 8 :fill-pointer 4)) *→* #(NIL NIL NIL NIL)
 (fill-pointer a) *→* 4
 (dotimes (i (length a)) (setf (aref a i) (* i i))) *→* NIL
 a *→* #(0 1 4 9)
 (setf (fill-pointer a) 3) *→* 3
 (fill-pointer a) *→* 3
 a *→* #(0 1 4)
 (setf (fill-pointer a) 8) *→* 8
 a *→* #(0 1 4 9 NIL NIL NIL NIL)

```


```lisp
 (row-major-aref array index) \EQ
   (aref (make-array (array-total-size array)
                     :displaced-to array
                     :element-type (array-element-type array))
         index)

 (aref array i1 i2 ...) \EQ
     (row-major-aref array (array-row-major-index array i1 i2))

```


```lisp
 (defun upgraded-array-element-type (type &optional environment)
   (array-element-type (make-array 0 :element-type type)))

```


```lisp
 (simple-vector-p (make-array 6)) *→ true*
 (simple-vector-p "aaaaaa") *→ false*
 (simple-vector-p (make-array 6 :fill-pointer t)) *→ false*

```


```lisp
 (simple-vector-p \param{object}) \EQ (typep \param{object} 'simple-vector)

```


```lisp
 (simple-vector-p (setq v (vector 1 2 'sirens))) *→ true*
 (svref v 0) *→* 1
 (svref v 2) *→* SIRENS
 (setf (svref v 1) 'newcomer) *→* NEWCOMER               
 v *→* #(1 NEWCOMER SIRENS)

```


```lisp
 (svref \param{v} \param{i}) \EQ (aref (the simple-vector \param{v}) \param{i})

```


```lisp
 (arrayp (setq v (vector 1 2 'sirens))) *→ true*
 (vectorp v) *→ true*
 (simple-vector-p v) *→ true*         
 (length v) *→* 3

```


```lisp
 (vector a\ssso a\ssst ... a\sssn)
  \EQ (make-array (list \i{n}) :element-type t
                          :initial-contents 
                            (list a\ssso a\ssst ... a\sssn))

```


```lisp
 (vector-push (setq fable (list 'fable))
              (setq fa (make-array 8
                                   :fill-pointer 2
                                   :initial-element 'sisyphus))) *→* 2 
 (fill-pointer fa) *→* 3 
 (eq (vector-pop fa) fable) *→ true*
 (vector-pop fa) *→* SISYPHUS 
 (fill-pointer fa) *→* 1 

```


```lisp
 (vector-push (setq fable (list 'fable))
              (setq fa (make-array 8 
                                   :fill-pointer 2
                                   :initial-element 'first-one))) *→* 2 
 (fill-pointer fa) *→* 3 
 (eq (aref fa 2) fable) *→ true*
 (vector-push-extend #\\X
                    (setq aa 
                          (make-array 5
                                      :element-type 'character
                                      :adjustable t
                                      :fill-pointer 3))) *→* 3 
 (fill-pointer aa) *→* 4 
 (vector-push-extend #\\Y aa 4) *→* 4 
 (array-total-size aa) *→* at least 5 
 (vector-push-extend #\\Z aa 4) *→* 5 
 (array-total-size aa) *→* 9 ;(or more)

```


```lisp
 (vectorp "aaaaaa") *→ true*
 (vectorp (make-array 6 :fill-pointer t)) *→ true*
 (vectorp (make-array '(2 3 4))) *→ false*
 (vectorp #*11) *→ true*
 (vectorp #b11) *→ false*

```


```lisp
 (vectorp \param{object}) \EQ (typep \param{object} 'vector)

```


```lisp
 (bit (setq ba (make-array 8 
                            :element-type 'bit 
                            :initial-element 1))
       3) *→* 1
 (setf (bit ba 3) 0) *→* 0
 (bit ba 3) *→* 0
 (sbit ba 5) *→* 1
 (setf (sbit ba 5) 1) *→* 1
 (sbit ba 5) *→* 1

```


```lisp
 (bit-and (setq ba #*11101010) #*01101011) *→* #*01101010
 (bit-and #*1100 #*1010) *→* #*1000      
 (bit-andc1 #*1100 #*1010) *→* #*0010
 (setq rba (bit-andc2 ba #*00110011 t)) *→* #*11001000
 (eq rba ba) *→ true*
 (bit-not (setq ba #*11101010)) *→* #*00010101
 (setq rba (bit-not ba 
                     (setq tba (make-array 8 
                                           :element-type 'bit))))
*→* #*00010101
 (equal rba tba) *→ true*
 (bit-xor #*1100 #*1010) *→* #*0110

```


```lisp
 (bit-vector-p (make-array 6 
                           :element-type 'bit 
                           :fill-pointer t)) *→ true*
 (bit-vector-p #*) *→ true*
 (bit-vector-p (make-array 6)) *→ false*

```


```lisp
 (bit-vector-p \param{object}) \EQ (typep \param{object} 'bit-vector)

```


```lisp
 (simple-bit-vector-p (make-array 6)) *→ false*
 (simple-bit-vector-p #*) *→ true*

```


```lisp
 (simple-bit-vector-p \param{object}) \EQ (typep \param{object} 'simple-bit-vector)

```


```lisp
 (char= #\\d #\\d) *→ true*
 (char= #\\A #\\a) *→ false*
 (char= #\\d #\\x) *→ false*
 (char= #\\d #\\D) *→ false*
 (char/= #\\d #\\d) *→ false*
 (char/= #\\d #\\x) *→ true*
 (char/= #\\d #\\D) *→ true*
 (char= #\\d #\\d #\\d #\\d) *→ true*
 (char/= #\\d #\\d #\\d #\\d) *→ false*
 (char= #\\d #\\d #\\x #\\d) *→ false*
 (char/= #\\d #\\d #\\x #\\d) *→ false*
 (char= #\\d #\\y #\\x #\\c) *→ false*
 (char/= #\\d #\\y #\\x #\\c) *→ true*
 (char= #\\d #\\c #\\d) *→ false*
 (char/= #\\d #\\c #\\d) *→ false*
 (char< #\\d #\\x) *→ true*
 (char<= #\\d #\\x) *→ true*
 (char< #\\d #\\d) *→ false*
 (char<= #\\d #\\d) *→ true*
 (char< #\\a #\\e #\\y #\\z) *→ true*
 (char<= #\\a #\\e #\\y #\\z) *→ true*
 (char< #\\a #\\e #\\e #\\y) *→ false*
 (char<= #\\a #\\e #\\e #\\y) *→ true*
 (char> #\\e #\\d) *→ true*
 (char>= #\\e #\\d) *→ true*
 (char> #\\d #\\c #\\b #\\a) *→ true*
 (char>= #\\d #\\c #\\b #\\a) *→ true*
 (char> #\\d #\\d #\\c #\\a) *→ false*
 (char>= #\\d #\\d #\\c #\\a) *→ true*
 (char> #\\e #\\d #\\b #\\c #\\a) *→ false*
 (char>= #\\e #\\d #\\b #\\c #\\a) *→ false*
 (char> #\\z #\\A) *→* \term{implementation-dependent}
 (char> #\\Z #\\a) *→* \term{implementation-dependent}
 (char-equal #\\A #\\a) *→ true*
 (stable-sort (list #\\b #\\A #\\B #\\a #\\c #\\C) #'char-lessp)
*→* (#\\A #\\a #\\b #\\B #\\c #\\C)
 (stable-sort (list #\\b #\\A #\\B #\\a #\\c #\\C) #'char<)
*→* (#\\A #\\B #\\C #\\a #\\b #\\c) ;Implementation A
*→* (#\\a #\\b #\\c #\\A #\\B #\\C) ;Implementation B
*→* (#\\a #\\A #\\b #\\B #\\c #\\C) ;Implementation C
*→* (#\\A #\\a #\\B #\\b #\\C #\\c) ;Implementation D
*→* (#\\A #\\B #\\a #\\b #\\C #\\c) ;Implementation E

```


```lisp
 (character #\\a) *→* #\\a
 (character "a") *→* #\\a
 (character 'a) *→* #\\A
 (character '\\a) *→* #\\a
 (character 65.) is an error.
 (character 'apple) is an error.

```


```lisp
 (character \param{object}) \EQ (coerce \param{object} 'character)

```


```lisp
 (characterp #\\a) *→ true*
 (characterp 'a) *→ false*
 (characterp "a") *→ false*
 (characterp 65.) *→ false*
 (characterp #\\Newline) *→ true*
 ;; This next example presupposes an implementation 
 ;; in which #\\Rubout is an implementation-defined character.
 (characterp #\\Rubout) *→ true*

```


```lisp
 (characterp \param{object}) \EQ (typep \param{object} 'character)

```


```lisp
 (alpha-char-p #\\a) *→ true*
 (alpha-char-p #\\5) *→ false*
 (alpha-char-p #\\Newline) *→ false*
 ;; This next example presupposes an implementation
 ;; in which #\\\alfa is a defined character.
 (alpha-char-p #\\\alfa) *→* \term{implementation-dependent}

```


```lisp
 (alphanumericp #\\Z) *→ true*
 (alphanumericp #\\9) *→ true*
 (alphanumericp #\\Newline) *→ false*
 (alphanumericp #\\#) *→ false*

```


```lisp
 (alphanumericp x)
   \EQ (or (alpha-char-p x) (not (null (digit-char-p x))))

```


```lisp
 (digit-char 0) *→* #\\0
 (digit-char 10 11) *→* #\\A
 (digit-char 10 10) *→ false*
 (digit-char 7) *→* #\\7
 (digit-char 12) *→ false*
 (digit-char 12 16) *→* #\\C  ;not #\\c
 (digit-char 6 2) *→ false*
 (digit-char 1 2) *→* #\\1

```


```lisp
 (digit-char-p #\\5)    *→* 5
 (digit-char-p #\\5 2)  *→ false*
 (digit-char-p #\\A)    *→ false*
 (digit-char-p #\\a)    *→ false*
 (digit-char-p #\\A 11) *→* 10
 (digit-char-p #\\a 11) *→* 10
 (mapcar #'(lambda (radix) 
             (map 'list #'(lambda (x) (digit-char-p x radix)) 
                  "059AaFGZ"))
         '(2 8 10 16 36))
 *→* ((0 NIL NIL NIL NIL NIL NIL NIL)
     (0 5 NIL NIL NIL NIL NIL NIL)
     (0 5 9 NIL NIL NIL NIL NIL)
     (0 5 9 10 10 15 NIL NIL)
     (0 5 9 10 10 15 16 35))

```


```lisp
 (graphic-char-p #\\G) *→ true*
 (graphic-char-p #\\#) *→ true*
 (graphic-char-p #\\Space) *→ true*
 (graphic-char-p #\\Newline) *→ false*

```


```lisp
 (standard-char-p #\\Space) *→ true*
 (standard-char-p #\\~) *→ true*
 ;; This next example presupposes an implementation
 ;; in which #\\Bell is a defined character.
 (standard-char-p #\\Bell) *→ false*

```


```lisp
 (char-upcase #\\a) *→* #\\A
 (char-upcase #\\A) *→* #\\A
 (char-downcase #\\a) *→* #\\a
 (char-downcase #\\A) *→* #\\a
 (char-upcase #\\9) *→* #\\9
 (char-downcase #\\9) *→* #\\9
 (char-upcase #\\@) *→* #\\@
 (char-downcase #\\@) *→* #\\@
 ;; Note that this next example might run for a very long time in 
 ;; some implementations if CHAR-CODE-LIMIT happens to be very large
 ;; for that implementation.
 (dotimes (code char-code-limit)
   (let ((char (code-char code)))
     (when char
       (unless (cond ((upper-case-p char) (char= (char-upcase (char-downcase char)) char))
                     ((lower-case-p char) (char= (char-downcase (char-upcase char)) char))
                     (t (and (char= (char-upcase (char-downcase char)) char)
                             (char= (char-downcase (char-upcase char)) char))))
         (return char)))))
*→* NIL

```


```lisp
 (upper-case-p #\\A) *→ true*
 (upper-case-p #\\a) *→ false*
 (both-case-p #\\a) *→ true*
 (both-case-p #\\5) *→ false*
 (lower-case-p #\\5) *→ false*
 (upper-case-p #\\5) *→ false*
 ;; This next example presupposes an implementation 
 ;; in which #\\Bell is an implementation-defined character.
 (lower-case-p #\\Bell) *→ false*

```


```lisp
;; An implementation using ASCII character encoding 
;; might return these values:
(char-code #\\$) *→* 36
(char-code #\\a) *→* 97

```


```lisp
 (char= \i{c1} \i{c2}) \EQ (= (char-int \i{c1}) (char-int \i{c2}))

```


```lisp
 (char-int #\\A) *→* 65       ; implementation A
 (char-int #\\A) *→* 577      ; implementation B
 (char-int #\\A) *→* 262145   ; implementation C

```


```lisp
(code-char 65.) *→* #\\A  ;in an implementation using ASCII codes
(code-char (char-code #\\Space)) *→* #\\Space  ;in any implementation

```


```lisp
 (char-name #\\ ) *→* "Space"
 (char-name #\\Space) *→* "Space"
 (char-name #\\Page) *→* "Page"

 (char-name #\\a)
*→* NIL
\OV "LOWERCASE-a"
\OV "Small-A"
\OV "LA01"

 (char-name #\\A)
*→* NIL
\OV "UPPERCASE-A"
\OV "Capital-A"
\OV "LA02"

 ;; Even though its CHAR-NAME can vary, #\\A prints as #\\A
 (prin1-to-string (read-from-string (format nil "#\\\\~A" (or (char-name #\\A) "A"))))
*→* "#\\\\A"

```


```lisp
(name-char 'space) *→* #\\Space
(name-char "space") *→* #\\Space
(name-char "Space") *→* #\\Space
(let ((x (char-name #\\a)))
  (or (not x) (eql (name-char x) #\\a))) *→ true*

```


```lisp
 (setq x (make-array '(3 5) :initial-element 3))
*→* #2A((3 3 3 3 3) (3 3 3 3 3) (3 3 3 3 3))
 (setq y (make-array '(3 5) :initial-element 7))
*→* #2A((7 7 7 7 7) (7 7 7 7 7) (7 7 7 7 7))
 (defun matrix-multiply (a b)
   (let ((*print-array* nil))
     (assert (and (= (array-rank a) (array-rank b) 2)
                  (= (array-dimension a 1) (array-dimension b 0)))
             (a b)
             "Cannot multiply ~S by ~S." a b)
            (really-matrix-multiply a b))) *→* MATRIX-MULTIPLY
 (matrix-multiply x y)
\OUT Correctable error in MATRIX-MULTIPLY: 
\OUT Cannot multiply #<ARRAY ...> by #<ARRAY ...>.
\OUT Restart options:
\OUT  1: You will be prompted for one or more new values.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
\OUT Value for A: \IN{x}
\OUT Value for B: \IN{(make-array '(5 3) :initial-element 6)}
*→* #2A((54 54 54 54 54)
       (54 54 54 54 54)
       (54 54 54 54 54)
       (54 54 54 54 54)
       (54 54 54 54 54))

```


```lisp
 (defun double-safely (x) (assert (numberp x) (x)) (+ x x))
 (double-safely 4) 
*→* 8
 
 (double-safely t)
\OUT Correctable error in DOUBLE-SAFELY: The value of (NUMBERP X) must be non-NIL.
\OUT Restart options:
\OUT  1: You will be prompted for one or more new values.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
\OUT Value for X: \IN{7}
*→* 14

```


```lisp
 (defun factorial (x)
   (cond ((or (not (typep x 'integer)) (minusp x))
          (error "~S is not a valid argument to FACTORIAL." x))
         ((zerop x) 1)
         (t (* x (factorial (- x 1))))))
*→* FACTORIAL
(factorial 20)
*→* 2432902008176640000
(factorial -1)
\OUT Error: -1 is not a valid argument to FACTORIAL.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Return to Lisp Toplevel.
\OUT Debug> 

```


```lisp
 (setq a 'fred)
*→* FRED
 (if (numberp a) (1+ a) (error "~S is not a number." A))
\OUT Error: FRED is not a number.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Return to Lisp Toplevel.
\OUT Debug> \IN{:Continue 1}
\OUT Return to Lisp Toplevel.
 
 (define-condition not-a-number (error) 
                   ((argument :reader not-a-number-argument :initarg :argument))
   (:report (lambda (condition stream)
              (format stream "~S is not a number."
                      (not-a-number-argument condition)))))
*→* NOT-A-NUMBER
 
 (if (numberp a) (1+ a) (error 'not-a-number :argument a))
\OUT Error: FRED is not a number.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Return to Lisp Toplevel.
\OUT Debug> \IN{:Continue 1}
\OUT Return to Lisp Toplevel.

```


```lisp
 (defun wargames:no-win-scenario ()
   (if (error "pushing the button would be stupid."))
   (push-the-button))

```


```lisp
 (defun real-sqrt (n)
   (when (minusp n)
     (setq n (- n))
     (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n))
   (sqrt n))

 (real-sqrt 4)
*→* 2.0

 (real-sqrt -9)
\OUT Correctable error in REAL-SQRT: Tried to take sqrt(-9).
\OUT Restart options:
\OUT  1: Return sqrt(9) instead.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
*→* 3.0
 
 (define-condition not-a-number (error)
   ((argument :reader not-a-number-argument :initarg :argument))
   (:report (lambda (condition stream)
              (format stream "~S is not a number." 
                      (not-a-number-argument condition)))))
 
 (defun assure-number (n)
   (loop (when (numberp n) (return n))
         (cerror "Enter a number."
                 'not-a-number :argument n)
         (format t "~&Type a number: ")
         (setq n (read))
         (fresh-line)))

 (assure-number 'a)
\OUT Correctable error in ASSURE-NUMBER: A is not a number.
\OUT Restart options:
\OUT  1: Enter a number.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
\OUT Type a number: \IN{1/2}
*→* 1/2

 (defun assure-large-number (n)
   (loop (when (and (numberp n) (> n 73)) (return n))
         (cerror "Enter a number~:[~; a bit larger than ~D~]."
                 "~*~A is not a large number." 
                 (numberp n) n)
         (format t "~&Type a large number: ")
         (setq n (read))
         (fresh-line)))
 
 (assure-large-number 10000)
*→* 10000

 (assure-large-number 'a)
\OUT Correctable error in ASSURE-LARGE-NUMBER: A is not a large number.
\OUT Restart options:
\OUT  1: Enter a number.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
\OUT Type a large number: \IN{88}
*→* 88

 (assure-large-number 37)
\OUT Correctable error in ASSURE-LARGE-NUMBER: 37 is not a large number.
\OUT Restart options:
\OUT  1: Enter a number a bit larger than 37.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
\OUT Type a large number: \IN{259}
*→* 259
 
 (define-condition not-a-large-number (error)
   ((argument :reader not-a-large-number-argument :initarg :argument))
   (:report (lambda (condition stream)
              (format stream "~S is not a large number." 
                      (not-a-large-number-argument condition)))))
 
 (defun assure-large-number (n)
   (loop (when (and (numberp n) (> n 73)) (return n))
         (cerror "Enter a number~3*~:[~; a bit larger than ~*~D~]."
                 'not-a-large-number
                 :argument n 
                 :ignore (numberp n)
                 :ignore n
                 :allow-other-keys t)
         (format t "~&Type a large number: ")
         (setq n (read))
         (fresh-line)))
 

 (assure-large-number 'a)
\OUT Correctable error in ASSURE-LARGE-NUMBER: A is not a large number.
\OUT Restart options:
\OUT  1: Enter a number.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
\OUT Type a large number: \IN{88}
*→* 88
 
 (assure-large-number 37)
\OUT Correctable error in ASSURE-LARGE-NUMBER: A is not a large number.
\OUT Restart options:
\OUT  1: Enter a number a bit larger than 37.
\OUT  2: Top level.
\OUT Debug> \IN{:continue 1}
\OUT Type a large number: \IN{259}
*→* 259

```


```lisp
(cerror "enter a new value to replace ~*~s" 
        'not-a-number
        :argument a)

```


```lisp
 (setq aardvarks '(sam harry fred))
*→* (SAM HARRY FRED)
 (check-type aardvarks (array * (3)))
\OUT Error: The value of AARDVARKS, (SAM HARRY FRED),
\OUT        is not a 3-long array.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a value to use instead.
\OUT  2: Return to Lisp Toplevel.
\OUT Debug> \IN{:CONTINUE 1}
\OUT Use Value: \IN{#(SAM FRED HARRY)}
*→* NIL
 aardvarks
*→* #<ARRAY-T-3 13571>
 (map 'list #'identity aardvarks)
*→* (SAM FRED HARRY)
 (setq aardvark-count 'foo)
*→* FOO
 (check-type aardvark-count (integer 0 *) "A positive integer")
\OUT Error: The value of AARDVARK-COUNT, FOO, is not a positive integer.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a value to use instead.
\OUT  2: Top level.
\OUT Debug> \IN{:CONTINUE 2}

```


```lisp
 (defmacro define-adder (name amount)
   (check-type name (and symbol (not null)) "a name for an adder function")
   (check-type amount integer)
   `(defun ,name (x) (+ x ,amount)))
  
 (macroexpand '(define-adder add3 3))
*→* (defun add3 (x) (+ x 3))
 
 (macroexpand '(define-adder 7 7))
\OUT Error: The value of NAME, 7, is not a name for an adder function.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a value to use instead.
\OUT  2: Top level.
\OUT Debug> \IN{:Continue 1}
\OUT Specify a value to use instead.
\OUT Type a form to be evaluated and used instead: \IN{'ADD7}
*→* (defun add7 (x) (+ x 7))
 
 (macroexpand '(define-adder add5 something))
\OUT Error: The value of AMOUNT, SOMETHING, is not an integer.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a value to use instead.
\OUT  2: Top level.
\OUT Debug> \IN{:Continue 1}
\OUT Type a form to be evaluated and used instead: \IN{5}
*→* (defun add5 (x) (+ x 5))
 

```


```lisp
 (check-type \param{place} \param{typespec})
 \EQ (assert (typep \param{place} '\param{typespec}) (\param{place})
            'type-error :datum \param{place} :expected-type '\param{typespec})

```


```lisp
 (defun handle-division-conditions (condition)
   (format t "Considering condition for division condition handling~%")
   (when (and (typep condition 'arithmetic-error)
              (eq '/ (arithmetic-error-operation condition)))
     (invoke-debugger condition)))
HANDLE-DIVISION-CONDITIONS
 (defun handle-other-arithmetic-errors (condition)
   (format t "Considering condition for arithmetic condition handling~%")
   (when (typep condition 'arithmetic-error)
     (abort)))
HANDLE-OTHER-ARITHMETIC-ERRORS
 (define-condition a-condition-with-no-handler (condition) ())
A-CONDITION-WITH-NO-HANDLER
 (signal 'a-condition-with-no-handler)
NIL
 (handler-bind ((condition #'handle-division-conditions)
                  (condition #'handle-other-arithmetic-errors))
   (signal 'a-condition-with-no-handler))
Considering condition for division condition handling
Considering condition for arithmetic condition handling
NIL
 (handler-bind ((arithmetic-error #'handle-division-conditions)
                  (arithmetic-error #'handle-other-arithmetic-errors))
   (signal 'arithmetic-error :operation '* :operands '(1.2 b)))
Considering condition for division condition handling
Considering condition for arithmetic condition handling
Back to Lisp Toplevel

```


```lisp
 (setq foo (make-condition 'simple-condition
                          :format-control "Hi ~S"
                          :format-arguments '(ho)))
*→* #<SIMPLE-CONDITION 26223553>
 (apply #'format nil (simple-condition-format-control foo)
                     (simple-condition-format-arguments foo))
*→* "Hi HO"

```


```lisp
  (defun foo (x)
    (let ((result (* x 2)))
      (if (not (typep result 'fixnum))
          (warn "You're using very big numbers."))
      result))
*→* FOO
 
  (foo 3)
*→* 6
 
  (foo most-positive-fixnum)
\OUT Warning: You're using very big numbers.
*→* 4294967294
 
  (setq *break-on-signals* t)
*→* T
 
  (foo most-positive-fixnum)
\OUT Break: Caveat emptor.
\OUT To continue, type :CONTINUE followed by an option number.
\OUT  1: Return from Break.
\OUT  2: Abort to Lisp Toplevel.
\OUT Debug> :continue 1
\OUT Warning: You're using very big numbers.
*→* 4294967294

```


```lisp
 (ignore-errors ;Normally, this would suppress debugger entry
   (handler-bind ((error #'invoke-debugger)) ;But this forces debugger entry
     (error "Foo.")))
Debug: Foo.
To continue, type :CONTINUE followed by an option number:
 1: Return to Lisp Toplevel.
Debug>

```


```lisp
 (break "You got here with arguments: ~:S." '(FOO 37 A))
\OUT BREAK: You got here with these arguments: FOO, 37, A.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Return from BREAK.
\OUT  2: Top level.
\OUT Debug> :CONTINUE 1
\OUT Return from BREAK.
*→* NIL
 

```


```lisp
 (defun break (&optional (format-control "Break") &rest format-arguments)
   (with-simple-restart (continue "Return from BREAK.")
     (let ((*debugger-hook* nil))
       (invoke-debugger
           (make-condition 'simple-condition
                           :format-control format-control
                           :format-arguments format-arguments))))
   nil)

```


```lisp
 (defun one-of (choices &optional (prompt "Choice"))
   (let ((n (length choices)) (i))
     (do ((c choices (cdr c)) (i 1 (+ i 1)))
         ((null c))
       (format t "~&[~D] ~A~%" i (car c)))
     (do () ((typep i `(integer 1 ,n)))
       (format t "~&~A: " prompt)
       (setq i (read))
       (fresh-line))
     (nth (- i 1) choices)))

 (defun my-debugger (condition me-or-my-encapsulation)
   (format t "~&Fooey: ~A" condition)
   (let ((restart (one-of (compute-restarts))))
     (if (not restart) (error "My debugger got an error."))
     (let ((*debugger-hook* me-or-my-encapsulation))
       (invoke-restart-interactively restart))))
 
 (let ((*debugger-hook* #'my-debugger))
   (+ 3 'a))
\OUT Fooey: The argument to +, A, is not a number.
\OUT  [1] Supply a replacement for A.
\OUT  [2] Return to Cloe Toplevel.
\OUT Choice: 1
\OUT  Form to evaluate and use: (+ 5 'b)
\OUT  Fooey: The argument to +, B, is not a number.
\OUT  [1] Supply a replacement for B.
\OUT  [2] Supply a replacement for A.
\OUT  [3] Return to Cloe Toplevel.
\OUT Choice: 1
\OUT  Form to evaluate and use: 1
*→* 9

```


```lisp
 *break-on-signals* *→* NIL
 (ignore-errors (error 'simple-error :format-control "Fooey!"))
*→* NIL, #<SIMPLE-ERROR 32207172>

 (let ((*break-on-signals* 'error))
   (ignore-errors (error 'simple-error :format-control "Fooey!")))
\OUT Break: Fooey!
\OUT BREAK entered because of *BREAK-ON-SIGNALS*.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Continue to signal.
\OUT  2: Top level.
\OUT Debug> \IN{:CONTINUE 1}
\OUT Continue to signal.
*→* NIL, #<SIMPLE-ERROR 32212257>

 (let ((*break-on-signals* 'error))
   (error 'simple-error :format-control "Fooey!"))
\OUT Break: Fooey!
\OUT BREAK entered because of *BREAK-ON-SIGNALS*.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Continue to signal.
\OUT  2: Top level.
\OUT Debug> \IN{:CONTINUE 1}
\OUT Continue to signal.
\OUT Error: Fooey!
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Top level.
\OUT Debug> \IN{:CONTINUE 1}
\OUT Top level.

```


```lisp
 (handler-bind ((unbound-variable #'(lambda ...))
                (error #'(lambda ...)))
   ...)

```


```lisp
 (defun trap-error-handler (condition)
   (format *error-output* "~&~A~&" condition)
   (throw 'trap-errors nil))

 (defmacro trap-errors (&rest forms)
   `(catch 'trap-errors
      (handler-bind ((error #'trap-error-handler))
        ,@forms)))
 
 (list (trap-errors (signal "Foo.") 1)
       (trap-errors (error  "Bar.") 2)
       (+ 1 2))
\OUT Bar.
*→* (1 NIL 3)

```


```lisp
  (handler-case \i{form}
    (\i{typespec1} (\i{var1}) \i{form1})
    (\i{typespec2} (\i{var2}) \i{form2}))

```


```lisp
  (\param{typespec} (\param{var}) (declare (ignore \param{var})) \param{form})

```


```lisp
 (defun assess-condition (condition)
   (handler-case (signal condition)
     (warning () "Lots of smoke, but no fire.")
     ((or arithmetic-error control-error cell-error stream-error)
        (condition)
       (format nil "~S looks especially bad." condition))
     (serious-condition (condition)
       (format nil "~S looks serious." condition))
     (condition () "Hardly worth mentioning.")))
*→* ASSESS-CONDITION
 (assess-condition (make-condition 'stream-error :stream *terminal-io*))
*→* "#<STREAM-ERROR 12352256> looks especially bad."
 (define-condition random-condition (condition) () 
   (:report (lambda (condition stream)
              (declare (ignore condition))
              (princ "Yow" stream))))
*→* RANDOM-CONDITION
 (assess-condition (make-condition 'random-condition))
*→* "Hardly worth mentioning."

```


```lisp
 (handler-case form
   (\i{type1} (\i{var1}) . \i{body1})
   (\i{type2} (\i{var2}) . \i{body2}) ...)

```


```lisp
 (block #1=#:g0001
   (let ((#2=#:g0002 nil))
     (tagbody
       (handler-bind ((\i{type1} #'(lambda (temp)
                                       (setq #1# temp)
                                       (go #3=#:g0003)))
                      (\i{type2} #'(lambda (temp)
                                       (setq #2# temp)
                                       (go #4=#:g0004))) ...)
       (return-from #1# form))
         #3# (return-from #1# (let ((\i{var1} #2#)) . \i{body1}))
         #4# (return-from #1# (let ((\i{var2} #2#)) . \i{body2})) ...)))

```


```lisp
 (handler-case form
   (\i{type1} \i{(var1)} . \i{body1})
   ...
   (:no-error (\i{varN-1} \i{varN-2} ...) . \i{bodyN}))

```


```lisp

 (block #1=#:error-return
  (multiple-value-call #'(lambda (\i{varN-1} \i{varN-2} ...) . \i{bodyN})
     (block #2=#:normal-return
       (return-from #1#
         (handler-case (return-from #2# form)
           (\i{type1} (\i{var1}) . \i{body1}) ...)))))

```


```lisp
 (defun load-init-file (program)
   (let ((win nil))
     (ignore-errors ;if this fails, don't enter debugger
       (load (merge-pathnames (make-pathname :name program :type :lisp)
                              (user-homedir-pathname)))
       (setq win t))
     (unless win (format t "~&Init file failed to load.~%"))
     win))
 
 (load-init-file "no-such-program")
\OUT Init file failed to load.
NIL

```


```lisp
 (ignore-errors . \i{forms})

```


```lisp
 (handler-case (progn . \i{forms})
   (error (condition) (values nil condition)))

```


```lisp
 (defmethod print-object ((x c) stream)
   (if *print-escape* (call-next-method) (\param{report-name} x stream)))

```


```lisp
 (lambda (condition stream)
   (declare (ignore condition))
   (write-string \param{report-name} stream))

```


```lisp
(define-condition peg/hole-mismatch 
                  (blocks-world-error)
                  ((peg-shape  :initarg :peg-shape
                               :reader peg/hole-mismatch-peg-shape)
                   (hole-shape :initarg :hole-shape
                               :reader peg/hole-mismatch-hole-shape))
  (:report (lambda (condition stream)
             (format stream "A ~A peg cannot go in a ~A hole."
                     (peg/hole-mismatch-peg-shape  condition)
                     (peg/hole-mismatch-hole-shape condition)))))

```


```lisp
(define-condition machine-error 
                  (error)
                  ((machine-name :initarg :machine-name
                                 :reader machine-error-machine-name))
  (:report (lambda (condition stream)
             (format stream "There is a problem with ~A."
                     (machine-error-machine-name condition)))))

```


```lisp
(define-condition machine-not-available-error (machine-error) ()
  (:report (lambda (condition stream)
             (format stream "The machine ~A is not available."
                     (machine-error-machine-name condition)))))

```


```lisp
(define-condition my-favorite-machine-not-available-error
                  (machine-not-available-error)
  ((machine-name :initform "mc.lcs.mit.edu")))

```


```lisp
 (define-condition ate-too-much (error) 
     ((person :initarg :person :reader ate-too-much-person)
      (weight :initarg :weight :reader ate-too-much-weight)
      (kind-of-food :initarg :kind-of-food
                    :reader :ate-too-much-kind-of-food)))
*→* ATE-TOO-MUCH
 (define-condition ate-too-much-ice-cream (ate-too-much)
   ((kind-of-food :initform 'ice-cream)
    (flavor       :initarg :flavor
                  :reader ate-too-much-ice-cream-flavor
                  :initform 'vanilla ))
   (:report (lambda (condition stream)
              (format stream "~A ate too much ~A ice-cream"
                      (ate-too-much-person condition)
                      (ate-too-much-ice-cream-flavor condition)))))
*→* ATE-TOO-MUCH-ICE-CREAM
 (make-condition 'ate-too-much-ice-cream
                 :person 'fred
                 :weight 300
                 :flavor 'chocolate)
*→* #<ATE-TOO-MUCH-ICE-CREAM 32236101>
 (format t "~A" *)
\OUT FRED ate too much CHOCOLATE ice-cream
*→* NIL

```


```lisp
 (defvar *oops-count* 0)

 (setq a (make-condition 'simple-error
                         :format-control "This is your ~:R error."
                         :format-arguments (list (incf *oops-count*))))
*→* #<SIMPLE-ERROR 32245104>
 
 (format t "~&~A~%" a)
\OUT This is your first error.
*→* NIL
 
 (error a)
\OUT Error: This is your first error.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Return to Lisp Toplevel.
\OUT Debug> 

```


```lisp
 ;; One possible way in which an interactive debugger might present
 ;; restarts to the user.
 (defun invoke-a-restart ()
   (let ((restarts (compute-restarts)))
     (do ((i 0 (+ i 1)) (r restarts (cdr r))) ((null r))
       (format t "~&~D: ~A~%" i (car r)))
     (let ((n nil) (k (length restarts)))
       (loop (when (and (typep n 'integer) (>= n 0) (< n k))
               (return t))
             (format t "~&Option: ")
             (setq n (read))
             (fresh-line))
       (invoke-restart-interactively (nth n restarts)))))

 (restart-case (invoke-a-restart)
   (one () 1)
   (two () 2)
   (nil () :report "Who knows?" 'anonymous)
   (one () 'I)
   (two () 'II))
\OUT 0: ONE
\OUT 1: TWO
\OUT 2: Who knows?
\OUT 3: ONE
\OUT 4: TWO
\OUT 5: Return to Lisp Toplevel.
\OUT Option: \IN{4}
*→* II
 
 ;; Note that in addition to user-defined restart points, COMPUTE-RESTARTS
 ;; also returns information about any system-supplied restarts, such as
 ;; the "Return to Lisp Toplevel" restart offered above.
 

```


```lisp
 (restart-case
     (let ((r (find-restart 'my-restart)))
       (format t "~S is named ~S" r (restart-name r)))
   (my-restart () nil))
\OUT #<RESTART 32307325> is named MY-RESTART
*→* NIL
 (find-restart 'my-restart)
*→* NIL

```


```lisp
 (find-restart \param{identifier})
 \EQ (find \param{identifier} (compute-restarts) :key :restart-name)

```


```lisp
 (defun add3 (x) (check-type x number) (+ x 3))
 
 (foo 'seven)
\OUT Error: The value SEVEN was not of type NUMBER.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a different value to use.
\OUT  2: Return to Lisp Toplevel.
\OUT Debug> \IN{(invoke-restart 'store-value 7)}
*→* 10

```


```lisp
 (apply #'invoke-restart \i{restart} \i{arguments})

```


```lisp
 (defun add3 (x) (check-type x number) (+ x 3))
 
 (add3 'seven)
\OUT Error: The value SEVEN was not of type NUMBER.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a different value to use.
\OUT  2: Return to Lisp Toplevel.
\OUT Debug> \IN{(invoke-restart-interactively 'store-value)}
\OUT Type a form to evaluate and use: \IN{7}
*→* 10

```


```lisp
% (defun choose-an-interactive-restart ()
%   (restart-bind
%       ((optional-value
%          #'(lambda (&optional (x 'default)) x)
%          :report-function #'(lambda (stream)
%                               (format stream "Return an optional value")))\kern-3pt
%        (return-value
%          #'identity
%          :report-function #'(lambda (stream)
%                               (format stream "Return the given value"))
%          :interactive-function #'(lambda ()
%                                    (format t "Enter a value to return: ")
%                                  (list (eval (read))))))
%     (let ((cases (compute-restarts))
%           (*print-structure* t)
%           (index -1))
%       (dolist (case cases)
%         (format t "~&~D: ~A~%" (incf index) case))
%       (format t "Please enter restart to invoke: ")
%       (invoke-restart-interactively (nth (eval (read)) cases)))))
%*→*\ CHOOSE-AN-INTERACTIVE-RESTART
% (choose-an-interactive-restart)
%*→*\ 0: Return an optional value
%1: Return the given value
%2: Abort to Lisp Top Level
%Please enter restart to invoke: 0
%DEFAULT
% (choose-an-interactive-restart)
%*→*\ 0: Return an optional value
%1: Return the given value
%2: Abort to Lisp Top Level
%Please enter restart to invoke: 1
%Enter a value to return: t
%T
%
```


```lisp
 (lambda (stream) (write-string value stream))

```


```lisp
 (format t "~&~S -- ~A~%" ':continue some-restart)

```


```lisp
 :CONTINUE -- Return to command level

```


```lisp
 (restart-case
     (handler-bind ((error #'(lambda (c)
                             (declare (ignore condition))
                             (invoke-restart 'my-restart 7))))
       (error "Foo."))
   (my-restart (&optional v) v))
*→* 7

 (define-condition food-error (error) ())
*→* FOOD-ERROR
 (define-condition bad-tasting-sundae (food-error) 
   ((ice-cream :initarg :ice-cream :reader bad-tasting-sundae-ice-cream)
    (sauce :initarg :sauce :reader bad-tasting-sundae-sauce)
    (topping :initarg :topping :reader bad-tasting-sundae-topping))
   (:report (lambda (condition stream)
              (format stream "Bad tasting sundae with ~S, ~S, and ~S"
                      (bad-tasting-sundae-ice-cream condition)
                      (bad-tasting-sundae-sauce condition)
                      (bad-tasting-sundae-topping condition)))))
*→* BAD-TASTING-SUNDAE
 (defun all-start-with-same-letter (symbol1 symbol2 symbol3)
   (let ((first-letter (char (symbol-name symbol1) 0)))
     (and (eql first-letter (char (symbol-name symbol2) 0))
          (eql first-letter (char (symbol-name symbol3) 0)))))
*→* ALL-START-WITH-SAME-LETTER
 (defun read-new-value ()
   (format t "Enter a new value: ")
   (multiple-value-list (eval (read))))
*→* READ-NEW-VALUE\eject
 (defun verify-or-fix-perfect-sundae (ice-cream sauce topping)
   (do ()
      ((all-start-with-same-letter ice-cream sauce topping))
     (restart-case
       (error 'bad-tasting-sundae
              :ice-cream ice-cream
              :sauce sauce
              :topping topping)
       (use-new-ice-cream (new-ice-cream)
         :report "Use a new ice cream."
         :interactive read-new-value  
         (setq ice-cream new-ice-cream))
       (use-new-sauce (new-sauce)
         :report "Use a new sauce."
         :interactive read-new-value
         (setq sauce new-sauce))
       (use-new-topping (new-topping)
         :report "Use a new topping."
         :interactive read-new-value
         (setq topping new-topping))))
   (values ice-cream sauce topping))
*→* VERIFY-OR-FIX-PERFECT-SUNDAE
 (verify-or-fix-perfect-sundae 'vanilla 'caramel 'cherry)
\OUT Error: Bad tasting sundae with VANILLA, CARAMEL, and CHERRY.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Use a new ice cream.
\OUT  2: Use a new sauce.
\OUT  3: Use a new topping.
\OUT  4: Return to Lisp Toplevel.
\OUT Debug> \IN{:continue 1}
\OUT Use a new ice cream.
\OUT Enter a new ice cream: \IN{'chocolate}
*→* CHOCOLATE, CARAMEL, CHERRY

```


```lisp
 (restart-case \i{expression}
    (\i{name1} \i{arglist1} ...\i{options1}... . \i{body1})
    (\i{name2} \i{arglist2} ...\i{options2}... . \i{body2}))

```


```lisp
 (block #1=#:g0001
   (let ((#2=#:g0002 nil))
        (tagbody
        (restart-bind ((name1 #'(lambda (&rest temp)
                                (setq #2# temp)
                                (go #3=#:g0003))
                          ...\i{slightly-transformed-options1}...)
                       (name2 #'(lambda (&rest temp)
                                (setq #2# temp)
                                (go #4=#:g0004))
                          ...\i{slightly-transformed-options2}...))
        (return-from #1# \i{expression}))
          #3# (return-from #1#
                  (apply #'(lambda \i{arglist1} . \i{body1}) #2#))
          #4# (return-from #1#
                  (apply #'(lambda \i{arglist2} . \i{body2}) #2#)))))

```


```lisp
 (restart-case (signal fred)
   (a ...)
   (b ...))
 \EQ
 (restart-case
     (with-condition-restarts fred 
                              (list (find-restart 'a) 
                                    (find-restart 'b))
       (signal fred))
   (a ...)
   (b ...))

```


```lisp
 (restart-case 
     (loop for restart in (compute-restarts)
               collect (restart-name restart))
   (case1 () :report "Return 1." 1)
   (nil   () :report "Return 2." 2)
   (case3 () :report "Return 3." 3)
   (case1 () :report "Return 4." 4))
*→* (CASE1 NIL CASE3 CASE1 ABORT)
 ;; In the example above the restart named ABORT was not created
 ;; explicitly, but was implicitly supplied by the system.

```


```lisp
 (defun read-eval-print-loop (level)
   (with-simple-restart (abort "Exit command level ~D." level)
     (loop
       (with-simple-restart (abort "Return to command level ~D." level)
         (let ((form (prog2 (fresh-line) (read) (fresh-line))))
           (prin1 (eval form)))))))
*→* READ-EVAL-PRINT-LOOP
 (read-eval-print-loop 1)
 (+ 'a 3)
\OUT Error: The argument, A, to the function + was of the wrong type.
\OUT        The function expected a number.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a value to use this time.
\OUT  2: Return to command level 1.
\OUT  3: Exit command level 1.
\OUT  4: Return to Lisp Toplevel.

```


```lisp
 (defun compute-fixnum-power-of-2 (x)
   (with-simple-restart (nil "Give up on computing 2{\hat}~D." x)
     (let ((result 1))
       (dotimes (i x result)
         (setq result (* 2 result))
         (unless (fixnump result)
           (error "Power of 2 is too large."))))))
COMPUTE-FIXNUM-POWER-OF-2
 (defun compute-power-of-2 (x)
   (or (compute-fixnum-power-of-2 x) 'something big))
COMPUTE-POWER-OF-2
 (compute-power-of-2 10)
1024
 (compute-power-of-2 10000)
\OUT Error: Power of 2 is too large.
\OUT To continue, type :CONTINUE followed by an option number.
\OUT  1: Give up on computing 2{\hat}10000.
\OUT  2: Return to Lisp Toplevel
\OUT Debug> \IN{:continue 1}
*→* SOMETHING-BIG

```


```lisp
 (defmacro with-simple-restart ((restart-name format-control
                                              &rest format-arguments)
                                &body forms)
   `(restart-case (progn ,@forms)
      (,restart-name ()
          :report (lambda (stream)
                    (format stream ,format-control ,@format-arguments))
         (values nil t))))

```


```lisp
 (let ((x 3))
   (handler-bind ((error #'(lambda (c)
                             (let ((r (find-restart 'continue c)))
                               (when r (invoke-restart r))))))
     (cond ((not (floatp x))
            (cerror "Try floating it." "~D is not a float." x)
            (float x))
           (t x)))) *→* 3.0

```


```lisp
 (defvar *all-quiet* nil) *→* *ALL-QUIET*
 (defvar *saved-warnings* '()) *→* *SAVED-WARNINGS*
 (defun quiet-warning-handler (c)
   (when *all-quiet*
     (let ((r (find-restart 'muffle-warning c)))
       (when r 
         (push c *saved-warnings*)
         (invoke-restart r)))))
*→* CUSTOM-WARNING-HANDLER
 (defmacro with-quiet-warnings (&body forms)
   `(let ((*all-quiet* t)
          (*saved-warnings* '()))
      (handler-bind ((warning #'quiet-warning-handler))
        ,@forms
        *saved-warnings*)))
*→* WITH-QUIET-WARNINGS
 (setq saved
   (with-quiet-warnings
     (warn "Situation #1.")
     (let ((*all-quiet* nil))
       (warn "Situation #2."))
     (warn "Situation #3.")))
\OUT Warning: Situation #2.
*→* (#<SIMPLE-WARNING 42744421> #<SIMPLE-WARNING 42744365>)
 (dolist (s saved) (format t "~&~A~%" s))
\OUT Situation #3.
\OUT Situation #1.
*→* NIL

```


```lisp
 (defun type-error-auto-coerce (c)
   (when (typep c 'type-error)
     (let ((r (find-restart 'store-value c)))
       (handler-case (let ((v (coerce (type-error-datum c)
                                      (type-error-expected-type c))))
                       (invoke-restart r v))
         (error ()))))) *→* TYPE-ERROR-AUTO-COERCE
 (let ((x 3))
   (handler-bind ((type-error #'type-error-auto-coerce))
     (check-type x float)
     x)) *→* 3.0

```


```lisp
;;; Example of the ABORT retart

 (defmacro abort-on-error (&body forms)
   `(handler-bind ((error #'abort))
      ,@forms)) *→* ABORT-ON-ERROR
 (abort-on-error (+ 3 5)) *→* 8
 (abort-on-error (error "You lose."))
\OUT Returned to Lisp Top Level.

;;; Example of the CONTINUE restart

 (defun real-sqrt (n)
   (when (minusp n)
     (setq n (- n))
     (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n))
   (sqrt n))

 (real-sqrt 4) *→* 2
 (real-sqrt -9)
\OUT Error: Tried to take sqrt(-9).
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Return sqrt(9) instead.
\OUT  2: Return to Lisp Toplevel.
\OUT Debug> \IN{(continue)}
\OUT Return sqrt(9) instead.
*→* 3
 
 (handler-bind ((error #'(lambda (c) (continue))))
   (real-sqrt -9)) *→* 3

;;; Example of the MUFFLE-WARNING restart

 (defun count-down (x)
   (do ((counter x (1- counter)))
       ((= counter 0) 'done)
     (when (= counter 1)
       (warn "Almost done"))
     (format t "~&~D~%" counter)))
*→* COUNT-DOWN
 (count-down 3)
\OUT 3
\OUT 2
\OUT Warning: Almost done
\OUT 1
*→* DONE
 (defun ignore-warnings-while-counting (x)
   (handler-bind ((warning #'ignore-warning))
     (count-down x)))
*→* IGNORE-WARNINGS-WHILE-COUNTING
 (defun ignore-warning (condition)
   (declare (ignore condition))
   (muffle-warning))
*→* IGNORE-WARNING
 (ignore-warnings-while-counting 3)
\OUT 3
\OUT 2
\OUT 1
*→* DONE

;;; Example of the STORE-VALUE and USE-VALUE restarts

 (defun careful-symbol-value (symbol)
   (check-type symbol symbol)
   (restart-case (if (boundp symbol)
                     (return-from careful-symbol-value 
                                  (symbol-value symbol))
                     (error 'unbound-variable
                            :name symbol))
     (use-value (value)
       :report "Specify a value to use this time."
       value)
     (store-value (value)
       :report "Specify a value to store and use in the future."
       (setf (symbol-value symbol) value))))
 (setq a 1234) *→* 1234
 (careful-symbol-value 'a) *→* 1234
 (makunbound 'a) *→* A
 (careful-symbol-value 'a)
\OUT Error: A is not bound.
\OUT To continue, type :CONTINUE followed by an option number.
\OUT  1: Specify a value to use this time.
\OUT  2: Specify a value to store and use in the future.
\OUT  3: Return to Lisp Toplevel.
\OUT Debug> \IN{(use-value 12)}
*→* 12
 (careful-symbol-value 'a)
\OUT Error: A is not bound.
\OUT To continue, type :CONTINUE followed by an option number.
\OUT   1: Specify a value to use this time.
\OUT   2: Specify a value to store and use in the future.
\OUT   3: Return to Lisp Toplevel.
\OUT Debug> \IN{(store-value 24)}
*→* 24
 (careful-symbol-value 'a)
*→* 24

;;; Example of the USE-VALUE restart

 (defun add-symbols-with-default (default &rest symbols)
   (handler-bind ((sys:unbound-symbol
                    #'(lambda (c)
                        (declare (ignore c)) 
                        (use-value default))))
     (apply #'+ (mapcar #'careful-symbol-value symbols))))
*→* ADD-SYMBOLS-WITH-DEFAULT
 (setq x 1 y 2) *→* 2
 (add-symbols-with-default 3 'x 'y 'z) *→* 6



```


```lisp
 (abort condition) \EQ (invoke-restart 'abort)
 (muffle-warning)  \EQ (invoke-restart 'muffle-warning)
 (continue)        \EQ (let ((r (find-restart 'continue))) (if r (invoke-restart r)))
 (use-value \param{x}) \EQ (let ((r (find-restart 'use-value))) (if r (invoke-restart r \param{x})))
 (store-value x) \EQ (let ((r (find-restart 'store-value))) (if r (invoke-restart r \param{x})))

```


```lisp
 (cons 1 2) *→* (1 . 2)
 (cons 1 nil) *→* (1)
 (cons nil 2) *→* (NIL . 2)
 (cons nil nil) *→* (NIL)
 (cons 1 (cons 2 (cons 3 (cons 4 nil)))) *→* (1 2 3 4)
 (cons 'a 'b) *→* (A . B)
 (cons 'a (cons 'b (cons 'c '\empty))) *→* (A B C)
 (cons 'a '(b c d)) *→* (A B C D)

```


```lisp
 (consp nil) *→ false*
 (consp (cons 1 2)) *→ true*

```


```lisp
 (consp '()) \EQ (consp 'nil) *→ false*

```


```lisp
 (consp \param{object}) \EQ (typep \param{object} 'cons) \EQ (not (typep \param{object} 'atom)) \EQ (typep \param{object} '(not atom))

```


```lisp
 (atom 'sss) *→ true*
 (atom (cons 1 2)) *→ false*
 (atom nil) *→ true*
 (atom '()) *→ true*
 (atom 3) *→ true*

```


```lisp
 (atom \param{object}) \EQ (typep \param{object} 'atom) \EQ (not (consp \param{object}))
 \EQ (not (typep \param{object} 'cons)) \EQ (typep \param{object} '(not cons))

```


```lisp
 (defparameter *some-list* (list* 'one 'two 'three 'four)) *→* *some-list*
 *some-list* *→* (ONE TWO THREE . FOUR)
 (rplaca *some-list* 'uno) *→* (UNO TWO THREE . FOUR)
 *some-list* *→* (UNO TWO THREE . FOUR)
 (rplacd (last *some-list*) (list 'IV)) *→* (THREE IV)
 *some-list* *→* (UNO TWO THREE IV)

```


```lisp
 (car nil) *→* NIL  
 (cdr '(1 . 2)) *→* 2
 (cdr '(1 2)) *→* (2)
 (cadr '(1 2)) *→* 2 
 (car '(a b c)) *→* A
 (cdr '(a b c)) *→* (B C)

```


```lisp
(car \i{x})    \EQ (first \i{x})
(cadr \i{x})   \EQ (second \i{x}) \EQ (car (cdr \i{x}))
(caddr \i{x})  \EQ (third \i{x})  \EQ (car (cdr (cdr \i{x})))
(cadddr \i{x}) \EQ (fourth \i{x}) \EQ (car (cdr (cdr (cdr \i{x}))))

```


```lisp
 (setq object (list (cons 1 "one")
                    (cons 2 (list 'a 'b 'c))))
*→* ((1 . "one") (2 A B C))
 (setq object-too object) *→* ((1 . "one") (2 A B C))
 (setq copy-as-list (copy-list object))
 (setq copy-as-alist (copy-alist object))
 (setq copy-as-tree (copy-tree object))
 (eq object object-too) *→ true*
 (eq copy-as-tree object) *→ false*
 (eql copy-as-tree object) *→ false*
 (equal copy-as-tree object) *→ true*
 (setf (first (cdr (second object))) "a"
       (car (second object)) "two"
       (car object) '(one . 1)) *→* (ONE . 1)
 object *→* ((ONE . 1) ("two" "a" B C))
 object-too *→* ((ONE . 1) ("two" "a" B C))
 copy-as-list *→* ((1 . "one") ("two" "a" B C))
 copy-as-alist *→* ((1 . "one") (2 "a" B C))
 copy-as-tree *→* ((1 . "one") (2 A B C)) 

```


```lisp
 (sublis '((x . 100) (z . zprime))
         '(plus x (minus g z x p) 4 . x))
*→* (PLUS 100 (MINUS G ZPRIME 100 P) 4 . 100)
 (sublis '(((+ x y) . (- x y)) ((- x y) . (+ x y)))
         '(* (/ (+ x y) (+ x p)) (- x y))
         :test #'equal)
*→* (* (/ (- X Y) (+ X P)) (+ X Y))
 (setq tree1 '(1 (1 2) ((1 2 3)) (((1 2 3 4)))))
*→* (1 (1 2) ((1 2 3)) (((1 2 3 4))))
 (sublis '((3 . "three")) tree1) 
*→* (1 (1 2) ((1 2 "three")) (((1 2 "three" 4))))
 (sublis '((t . "string"))
          (sublis '((1 . "") (4 . 44)) tree1)
          :key #'stringp)
*→* ("string" ("string" 2) (("string" 2 3)) ((("string" 2 3 44))))
 tree1 *→* (1 (1 2) ((1 2 3)) (((1 2 3 4))))
 (setq tree2 '("one" ("one" "two") (("one" "Two" "three"))))
*→* ("one" ("one" "two") (("one" "Two" "three"))) 
 (sublis '(("two" . 2)) tree2) 
*→* ("one" ("one" "two") (("one" "Two" "three"))) 
 tree2 *→* ("one" ("one" "two") (("one" "Two" "three"))) 
 (sublis '(("two" . 2)) tree2 :test 'equal) 
*→* ("one" ("one" 2) (("one" "Two" "three"))) 

 (nsublis '((t . 'temp))
           tree1
           :key #'(lambda (x) (or (atom x) (< (list-length x) 3))))
*→* ((QUOTE TEMP) (QUOTE TEMP) QUOTE TEMP) 

```


```lisp
 (defun test-it (fn)
   (let* ((shared-piece (list 'a 'b))
          (data (list shared-piece shared-piece)))
     (funcall fn '((a . b) (b . a)) data)))
 (test-it #'sublis) *→* ((B A) (B A))
 (test-it #'nsublis) *→* ((A B) (A B))

```


```lisp
 (setq tree1 '(1 (1 2) (1 2 3) (1 2 3 4))) *→* (1 (1 2) (1 2 3) (1 2 3 4))
 (subst "two" 2 tree1) *→* (1 (1 "two") (1 "two" 3) (1 "two" 3 4))
 (subst "five" 5 tree1) *→* (1 (1 2) (1 2 3) (1 2 3 4))
 (eq tree1 (subst "five" 5 tree1)) *→* \term{implementation-dependent}
 (subst 'tempest 'hurricane
        '(shakespeare wrote (the hurricane)))
*→* (SHAKESPEARE WROTE (THE TEMPEST))
 (subst 'foo 'nil '(shakespeare wrote (twelfth night)))
*→* (SHAKESPEARE WROTE (TWELFTH NIGHT . FOO) . FOO)
 (subst '(a . cons) '(old . pair)
        '((old . spice) ((old . shoes) old . pair) (old . pair))
        :test #'equal)
*→* ((OLD . SPICE) ((OLD . SHOES) A . CONS) (A . CONS))

 (subst-if 5 #'listp tree1) *→* 5
 (subst-if-not '(x) #'consp tree1) 
*→* (1 X)

 tree1 *→* (1 (1 2) (1 2 3) (1 2 3 4))
 (nsubst 'x 3 tree1 :key #'(lambda (y) (and (listp y) (third y)))) 
*→* (1 (1 2) X X)
 tree1 *→* (1 (1 2) X X)

```


```lisp
 (defun subst (old new tree &rest x &key test test-not key)
   (cond ((satisfies-the-test old tree :test test
                              :test-not test-not :key key)
          new)
         ((atom tree) tree)
         (t (let ((a (apply #'subst old new (car tree) x))
                  (d (apply #'subst old new (cdr tree) x)))
              (if (and (eql a (car tree))
                       (eql d (cdr tree)))
                  tree
                  (cons a d))))))

```


```lisp
 (setq tree1 '(1 (1 2))
       tree2 '(1 (1 2))) *→* (1 (1 2))
 (tree-equal tree1 tree2) *→ true*
 (eql tree1 tree2) *→ false*
 (setq tree1 '('a ('b 'c))
       tree2 '('a ('b 'c))) *→* ('a ('b 'c)) 
*→* ((QUOTE A) ((QUOTE B) (QUOTE C)))
 (tree-equal tree1 tree2 :test 'eq) *→ true*

```


```lisp
 (setq lst (list 1 (list 2 3))) *→* (1 (2 3))
 (setq slst lst) *→* (1 (2 3))
 (setq clst (copy-list lst)) *→* (1 (2 3))
 (eq slst lst) *→ true*
 (eq clst lst) *→ false*
 (equal clst lst) *→ true*
 (rplaca lst "one") *→* ("one" (2 3))
 slst *→* ("one" (2 3))
 clst *→* (1 (2 3))
 (setf (caadr lst) "two") *→* "two"
 lst *→* ("one" ("two" 3))
 slst *→* ("one" ("two" 3))
 clst *→* (1 ("two" 3))

```


```lisp
 (list 1) *→* (1)
 (list* 1) *→* 1
 (setq a 1) *→* 1
 (list a 2) *→* (1 2)
 '(a 2) *→* (A 2)
 (list 'a 2) *→* (A 2)
 (list* a 2) *→* (1 . 2)
 (list) *→* NIL ;\ie ()
 (setq a '(1 2)) *→* (1 2)
 (eq a (list* a)) *→ true*
 (list 3 4 'a (car '(b . c)) (+ 6 -2)) *→* (3 4 A B 4)
 (list* 'a 'b 'c 'd) \EQ (cons 'a (cons 'b (cons 'c 'd))) *→* (A B C . D)
 (list* 'a 'b 'c '(d e f)) *→* (A B C D E F)

```


```lisp
 (list* \param{x}) \EQ \param{x}

```


```lisp
 (list-length '(a b c d)) *→* 4
 (list-length '(a (b c) d)) *→* 3
 (list-length '()) *→* 0
 (list-length nil) *→* 0
 (defun circular-list (&rest elements)
   (let ((cycle (copy-list elements))) 
     (nconc cycle cycle)))
 (list-length (circular-list 'a 'b)) *→* NIL
 (list-length (circular-list 'a)) *→* NIL
 (list-length (circular-list)) *→* 0

```


```lisp
 (defun list-length (x)  
   (do ((n 0 (+ n 2))           ;Counter.
        (fast x (cddr fast))    ;Fast pointer: leaps by 2.
        (slow x (cdr slow)))    ;Slow pointer: leaps by 1.
       (nil)
     ;; If fast pointer hits the end, return the count.
     (when (endp fast) (return n))
     (when (endp (cdr fast)) (return (+ n 1)))
     ;; If fast pointer eventually equals slow pointer,
     ;;  then we must be stuck in a circular list.
     ;; (A deeper property is the converse: if we are
     ;;  stuck in a circular list, then eventually the
     ;;  fast pointer will equal the slow pointer.
     ;;  That fact justifies this implementation.)
     (when (and (eq fast slow) (> n 0)) (return nil))))
 

```


```lisp
 (listp nil) *→ true*
 (listp (cons 1 2)) *→ true*
 (listp (make-array 6)) *→ false*
 (listp t) *→ false*

```


```lisp
 (listp \param{object}) \EQ (typep \param{object} 'list) \EQ (typep \param{object} '(or cons null))

```


```lisp
 (make-list 5) *→* (NIL NIL NIL NIL NIL)
 (make-list 3 :initial-element 'rah) *→* (RAH RAH RAH)
 (make-list 2 :initial-element '(1 2 3)) *→* ((1 2 3) (1 2 3))
 (make-list 0) *→* NIL ;\ie ()
 (make-list 0 :initial-element 'new-element) *→* NIL 

```


```lisp
 (setq llst '(nil)) *→* (NIL)
 (push 1 (car llst)) *→* (1)
 llst *→* ((1))
 (push 1 (car llst)) *→* (1 1)
 llst *→* ((1 1))
 (setq x '(a (b c) d)) *→* (A (B C) D)
 (push 5 (cadr x)) *→* (5 B C)  
 x *→* (A (5 B C) D)

```


```lisp
 (setf place (cons \i{item} \i{place}))

```


```lisp
 (setq stack '(a b c)) *→* (A B C)
 (pop stack) *→* A  
 stack *→* (B C)
 (setq llst '((1 2 3 4))) *→* ((1 2 3 4))
 (pop (car llst)) *→* 1
 llst *→* ((2 3 4))

```


```lisp
 (prog1 (car \param{place}) (setf \param{place} (cdr \param{place})))

```


```lisp
 (first \param{list})    \EQ  (car \param{list})
 (second \param{list})   \EQ  (car (cdr \param{list}))
 (third \param{list})    \EQ  (car (cddr \param{list}))
 (fourth \param{list})   \EQ  (car (cdddr \param{list}))
 (fifth \param{list})    \EQ  (car (cddddr \param{list}))
 (sixth \param{list})    \EQ  (car (cdr (cddddr \param{list})))
 (seventh \param{list})  \EQ  (car (cddr (cddddr \param{list})))
 (eighth \param{list})   \EQ  (car (cdddr (cddddr \param{list})))
 (ninth \param{list})    \EQ  (car (cddddr (cddddr \param{list})))
 (tenth \param{list})    \EQ  (car (cdr (cddddr (cddddr \param{list}))))

```


```lisp
 (setf (fifth \param{list}) \param{new-object}) \EQ (setf (car (cddddr \param{list})) \param{new-object})

```


```lisp
 (setq lst '(1 2 3 (4 5 6) ((V)) vi 7 8 9 10)) 
*→* (1 2 3 (4 5 6) ((V)) VI 7 8 9 10)
 (first lst) *→* 1
 (tenth lst) *→* 10
 (fifth lst) *→* ((V))
 (second (fourth lst)) *→* 5
 (sixth '(1 2 3)) *→* NIL
 (setf (fourth lst) "four") *→* "four"
 lst *→* (1 2 3 "four" ((V)) VI 7 8 9 10)

```


```lisp
 (fifth x) \EQ (nth 4 x)

```


```lisp
 (nth \param{n} \param{list}) \EQ (car (nthcdr \param{n} \param{list}))

```


```lisp
 (setf (nth \param{n} \param{list}) \param{new-object}) \EQ (setf (car (nthcdr \param{n} \param{list})) \param{new-object})

```


```lisp
 (nth 0 '(foo bar baz)) *→* FOO
 (nth 1 '(foo bar baz)) *→* BAR
 (nth 3 '(foo bar baz)) *→* NIL
 (setq 0-to-3 (list 0 1 2 3)) *→* (0 1 2 3)
 (setf (nth 2 0-to-3) "two") *→* "two"
 0-to-3 *→* (0 1 "two" 3)

```


```lisp
 (endp nil) *→ true*
 (endp '(1 2)) *→ false*
 (endp (cddr '(1 2))) *→ true*

```


```lisp
 (null '()) *→* T
 (null nil) *→* T
 (null t) *→* NIL
 (null 1) *→* NIL

```


```lisp
 (null \param{object}) \EQ (typep \param{object} 'null) \EQ (eq \param{object} '\empty)

```


```lisp
 (nconc) *→* ()
 (nconc nil . \param{lists}) \EQ (nconc . \param{lists})
 (nconc \param{list}) *→* \param{list}
 (nconc \param{list-1} \param{list-2}) \EQ (progn (rplacd (last \param{list-1}) \param{list-2}) \param{list-1})
 (nconc \param{list-1} \param{list-2} . \param{lists}) \EQ (nconc (nconc \param{list-1} \param{list-2}) . \param{lists})

```


```lisp
 (nconc) *→* NIL
 (setq x '(a b c)) *→* (A B C)
 (setq y '(d e f)) *→* (D E F)
 (nconc x y) *→* (A B C D E F)
 x *→* (A B C D E F)

```


```lisp
 (setq foo (list 'a 'b 'c 'd 'e)
       bar (list 'f 'g 'h 'i 'j)
       baz (list 'k 'l 'm)) *→* (K L M)
 (setq foo (nconc foo bar baz)) *→* (A B C D E F G H I J K L M)
 foo *→* (A B C D E F G H I J K L M)
 bar *→* (F G H I J K L M)
 baz *→* (K L M)

 (setq foo (list 'a 'b 'c 'd 'e)
       bar (list 'f 'g 'h 'i 'j)
       baz (list 'k 'l 'm)) *→* (K L M)
 (setq foo (nconc nil foo bar nil baz)) *→* (A B C D E F G H I J K L M) 
 foo *→* (A B C D E F G H I J K L M)
 bar *→* (F G H I J K L M)
 baz *→* (K L M)

```


```lisp
 (append '(a b c) '(d e f) '() '(g)) *→* (A B C D E F G)
 (append '(a b c) 'd) *→* (A B C . D)
 (setq lst '(a b c)) *→* (A B C)
 (append lst '(d)) *→* (A B C D)
 lst *→* (A B C)
 (append) *→* NIL
 (append 'a) *→* A

```


```lisp
 (let ((list-1 (list 1 2 3))
       (list-2 (list 'a 'b 'c)))
   (print (revappend list-1 list-2))
   (print (equal list-1 '(1 2 3)))
   (print (equal list-2 '(a b c))))
\OUT (3 2 1 A B C) 
\OUT T
\OUT T
*→* T

 (revappend '(1 2 3) '()) *→* (3 2 1)
 (revappend '(1 2 3) '(a . b)) *→* (3 2 1 A . B)
 (revappend '() '(a b c)) *→* (A B C)
 (revappend '(1 2 3) 'a) *→* (3 2 1 . A)
 (revappend '() 'a) *→* A   ;degenerate case

 (let ((list-1 '(1 2 3))
       (list-2 '(a b c)))
   (print (nreconc list-1 list-2))
   (print (equal list-1 '(1 2 3)))
   (print (equal list-2 '(a b c))))
\OUT (3 2 1 A B C) 
\OUT NIL
\OUT T
*→* T


```


```lisp
 (nconc (nreverse \param{list}) \param{tail})

```


```lisp
 (revappend \param{list} \param{tail}) \EQ (nconc (reverse \param{list}) \param{tail})
 (nreconc \param{list} \param{tail}) \EQ (nconc (nreverse \param{list}) \param{tail})

```


```lisp
%  (defparameter *list-1* (list 1 2 3))
%  (defparameter *list-2* (list 'a 'b 'c))
%  (nreconc *list-1* *list-2*) *→* (3 2 1 A B C)
%  *list-1* *→* \term{implementation-dependent}
%  *list-2* *→* (A B C)
% 
%  (nreconc (list) 'a) *→* A  ;degenerate situation
% 
```


```lisp
% %  (nreconc (cons 1 2) nil) *→* (1)
% % 
```


```lisp
%  (setq lst1 '(1 2 3)
%         lst2 '(a b c))  *→* (A B C)
%  (revappend lst1 lst2) *→* (3 2 1 A B C)
%  lst1 *→* (1 2 3)
%  lst2 *→* (A B C)
%  (revappend '(1 2 3) '(a . b)) *→* (3 2 1 A . B)
%  (revappend nil '(a b c)) *→* (A B C)
%  (revappend '() 'a) *→* A ;degenerate case
% 
```


```lisp
% %  (revappend '(1 . 2) '(a b c)) *→* (1 A B C)
% % 
```


```lisp
%  (revappend x y) \EQ (nconc (reverse x) y)
% 
```


```lisp
 (setq lst '(1 2 3 4 5 6 7 8 9)) *→* (1 2 3 4 5 6 7 8 9)
 (butlast lst) *→* (1 2 3 4 5 6 7 8)
 (butlast lst 5) *→* (1 2 3 4)
 (butlast lst (+ 5 5)) *→* NIL
 lst *→* (1 2 3 4 5 6 7 8 9)
 (nbutlast lst 3) *→* (1 2 3 4 5 6)
 lst *→* (1 2 3 4 5 6)
 (nbutlast lst 99) *→* NIL
 lst *→* (1 2 3 4 5 6)
 (butlast '(a b c d)) *→* (A B C)
 (butlast '((a b) (c d))) *→* ((A B))
 (butlast '(a)) *→* NIL
 (butlast nil) *→* NIL
 (setq foo (list 'a 'b 'c 'd)) *→* (A B C D)
 (nbutlast foo) *→* (A B C)
 foo *→* (A B C)
 (nbutlast (list 'a)) *→* NIL
 (nbutlast '()) *→* NIL

```


```lisp
 (butlast \param{list} \param{n}) \EQ (ldiff \param{list} (last \param{list} \param{n}))

```


```lisp
 (last nil) *→* NIL
 (last '(1 2 3)) *→* (3)
 (last '(1 2 . 3)) *→* (2 . 3)
 (setq x (list 'a 'b 'c 'd)) *→* (A B C D)
 (last x) *→* (D)
 (rplacd (last x) (list 'e 'f)) x *→* (A B C D E F)
 (last x) *→* (F)

 (last '(a b c))   *→* (C)

 (last '(a b c) 0) *→* ()
 (last '(a b c) 1) *→* (C)
 (last '(a b c) 2) *→* (B C)
 (last '(a b c) 3) *→* (A B C)
 (last '(a b c) 4) *→* (A B C)

 (last '(a . b) 0) *→* B
 (last '(a . b) 1) *→* (A . B)
 (last '(a . b) 2) *→* (A . B)

```


```lisp
 (defun last (list &optional (n 1))
   (check-type n (integer 0))
   (do ((l list (cdr l))
        (r list)
        (i 0 (+ i 1)))
       ((atom l) r)
     (if (>= i n) (pop r))))

```


```lisp
 (let ((lists '#((a b c) (a b c . d))))
   (dotimes (i (length lists)) ()
     (let ((list (aref lists i)))
       (format t "~2&list=~S ~21T(tailp object list)~
                  ~44T(ldiff list object)~%" list)
         (let ((objects (vector list (cddr list) (copy-list (cddr list))
                                '(f g h) '() 'd 'x)))
           (dotimes (j (length objects)) ()
             (let ((object (aref objects j)))
               (format t "~& object=~S ~21T~S ~44T~S"
                       object (tailp object list) (ldiff list object))))))))
\OUT 
\OUT list=(A B C)         (tailp object list)    (ldiff list object)
\OUT  object=(A B C)      T                      NIL
\OUT  object=(C)          T                      (A B)
\OUT  object=(C)          NIL                    (A B C)
\OUT  object=(F G H)      NIL                    (A B C)
\OUT  object=NIL          T                      (A B C)
\OUT  object=D            NIL                    (A B C)
\OUT  object=X            NIL                    (A B C)
\OUT 
\OUT list=(A B C . D)     (tailp object list)    (ldiff list object)
\OUT  object=(A B C . D)  T                      NIL
\OUT  object=(C . D)      T                      (A B)
\OUT  object=(C . D)      NIL                    (A B C . D)
\OUT  object=(F G H)      NIL                    (A B C . D)
\OUT  object=NIL          NIL                    (A B C . D)
\OUT  object=D            T                      (A B C)
\OUT  object=X            NIL                    (A B C . D)
*→* NIL

```


```lisp
 (defun tailp (object list)
   (do ((list list (cdr list)))
       ((atom list) (eql list object))
      (if (eql object list)
          (return t))))

```


```lisp
(defun ldiff (list object)
  (do ((list list (cdr list))
       (r '() (cons (car list) r)))
      ((atom list)
       (if (eql list object) (nreverse r) (nreconc r list)))
    (when (eql object list)
      (return (nreverse r)))))

```


```lisp
%  (setq x '(a b c d e)) *→* (A B C D E)
%  (setq y (cdddr x)) *→* (D E)
%  (ldiff x y) *→* (A B C)
%  (ldiff x (copy-list y)) *→* (A B C D E)
% 
```


```lisp
%  (let ((x '(b c))) (tailp x (cons 'a x))) *→ true*
%  (tailp '(x y) '(a b c)) *→ false*
%  (tailp '() '(a b c)) *→ true*
%  (tailp 3 '(a b c)) *→ false*
%  (tailp 3 '(a b c . 3)) *→ true*
%  (tailp '(x y) '(a b c . 3)) *→ false*
% 
```


```lisp
%  (defun tailp (sublist list)
%    (do ((list list (cdr list)))
%        ((atom list) (eql list sublist))
%       (if (eql sublist list)
%           (return t))))
% 
```


```lisp
 (nthcdr 0 '()) *→* NIL
 (nthcdr 3 '()) *→* NIL
 (nthcdr 0 '(a b c)) *→* (A B C)
 (nthcdr 2 '(a b c)) *→* (C)
 (nthcdr 4 '(a b c)) *→* ()
 (nthcdr 1 '(0 . 1)) *→* 1

 (locally (declare (optimize (safety 3)))
   (nthcdr 3 '(0 . 1)))
 Error: Attempted to take CDR of 1.

```


```lisp
 (rest \param{list}) \EQ (cdr \param{list})
 (setf (rest \param{list}) \param{new-tail}) \EQ (setf (cdr \param{list}) \param{new-tail})

```


```lisp
 (rest '(1 2)) *→* (2)
 (rest '(1 . 2)) *→* 2
 (rest '(1)) *→* NIL
 (setq *cons* '(1 . 2)) *→* (1 . 2)
 (setf (rest *cons*) "two") *→* "two"
 *cons* *→* (1 . "two")

```


```lisp
 (member 2 '(1 2 3)) *→* (2 3)                                 
 (member 2 '((1 . 2) (3 . 4)) :test-not #'= :key #'cdr) *→* ((3 . 4))
 (member 'e '(a b c d)) *→* NIL

```


```lisp
 (member-if #'listp '(a b nil c d)) *→* (NIL C D)
 (member-if #'numberp '(a #\\Space 5/3 foo)) *→* (5/3 FOO)
 (member-if-not #'zerop 
                 '(3 6 9 11 . 12)
                 :key #'(lambda (x) (mod x 3))) *→* (11 . 12)

```


```lisp
 (member 'a '(g (a y) c a d e a f)) *→* (A D E A F)

```


```lisp
 (mapcon f x1 ... xn)
   \EQ (apply #'nconc (maplist f x1 ... xn))

```


```lisp
 (mapcar #'car '((1 a) (2 b) (3 c))) *→* (1 2 3) 
 (mapcar #'abs '(3 -4 2 -5 -6)) *→* (3 4 2 5 6)
 (mapcar #'cons '(a b c) '(1 2 3)) *→* ((A . 1) (B . 2) (C . 3))

 (maplist #'append '(1 2 3 4) '(1 2) '(1 2 3)) 
*→* ((1 2 3 4 1 2 1 2 3) (2 3 4 2 2 3)) 
 (maplist #'(lambda (x) (cons 'foo x)) '(a b c d))
*→* ((FOO A B C D) (FOO B C D) (FOO C D) (FOO D))
 (maplist #'(lambda (x) (if (member (car x) (cdr x)) 0 1)) '(a b a c d b c))
*→* (0 0 1 0 1 1 1)
;An entry is 1 if the corresponding element of the input
;  list was the last instance of that element in the input list.

 (setq dummy nil) *→* NIL 
 (mapc #'(lambda (&rest x) (setq dummy (append dummy x)))
        '(1 2 3 4)
        '(a b c d e)
        '(x y z)) *→* (1 2 3 4) 
 dummy *→* (1 A X 2 B Y 3 C Z)                   

 (setq dummy nil) *→* NIL 
 (mapl #'(lambda (x) (push x dummy)) '(1 2 3 4)) *→* (1 2 3 4) 
 dummy *→* ((4) (3 4) (2 3 4) (1 2 3 4)) 

 (mapcan #'(lambda (x y) (if (null x) nil (list x y)))
          '(nil nil nil d e)
          '(1 2 3 4 5 6)) *→* (D 4 E 5) 
 (mapcan #'(lambda (x) (and (numberp x) (list x)))
          '(a 1 b c 3 4 d 5))
*→* (1 3 4 5)

```


```lisp
 (mapcon #'list '(1 2 3 4)) *→* ((1 2 3 4) (2 3 4) (3 4) (4)) 

```


```lisp
 (setq alist '()) *→* NIL
 (acons 1 "one" alist) *→* ((1 . "one"))
 alist *→* NIL
 (setq alist (acons 1 "one" (acons 2 "two" alist))) *→* ((1 . "one") (2 . "two"))
 (assoc 1 alist) *→* (1 . "one")
 (setq alist (acons 1 "uno" alist)) *→* ((1 . "uno") (1 . "one") (2 . "two"))
 (assoc 1 alist) *→* (1 . "uno")

```


```lisp
(acons \param{key} \param{datum} \param{alist}) \EQ (cons (cons \param{key} \param{datum}) \param{alist})

```


```lisp
 (setq values '((x . 100) (y . 200) (z . 50))) *→* ((X . 100) (Y . 200) (Z . 50))
 (assoc 'y values) *→* (Y . 200)
 (rplacd (assoc 'y values) 201) *→* (Y . 201)
 (assoc 'y values) *→* (Y . 201)
 (setq alist '((1 . "one")(2 . "two")(3 . "three"))) 
*→* ((1 . "one") (2 . "two") (3 . "three"))
 (assoc 2 alist) *→* (2 . "two")
 (assoc-if #'evenp alist) *→* (2 . "two")
 (assoc-if-not #'(lambda(x) (< x 3)) alist) *→* (3 . "three")
 (setq alist '(("one" . 1)("two" . 2))) *→* (("one" . 1) ("two" . 2))
 (assoc "one" alist) *→* NIL
 (assoc "one" alist :test #'equalp) *→* ("one" . 1)
 (assoc "two" alist :key #'(lambda(x) (char x 2))) *→* NIL 
 (assoc #\\o alist :key #'(lambda(x) (char x 2))) *→* ("two" . 2)
 (assoc 'r '((a . b) (c . d) (r . x) (s . y) (r . z))) *→*  (R . X)
 (assoc 'goo '((foo . bar) (zoo . goo))) *→* NIL
 (assoc '2 '((1 a b c) (2 b c d) (-7 x y z))) *→* (2 B C D)
 (setq alist '(("one" . 1) ("2" . 2) ("three" . 3)))
*→* (("one" . 1) ("2" . 2) ("three" . 3))
 (assoc-if-not #'alpha-char-p alist
               :key #'(lambda (x) (char x 0))) *→* ("2" . 2)

```


```lisp
 (assoc item list :test fn)

```


```lisp
 (find item list :test fn :key #'car)

```


```lisp
(defparameter *alist* (acons 1 "one" (acons 2 "two" '())))
*alist* *→* ((1 . "one") (2 . "two"))
(defparameter *list-copy* (copy-list *alist*))
*list-copy* *→* ((1 . "one") (2 . "two"))
(defparameter *alist-copy* (copy-alist *alist*))
*alist-copy* *→* ((1 . "one") (2 . "two"))
(setf (cdr (assoc 2 *alist-copy*)) "deux") *→* "deux"
*alist-copy* *→* ((1 . "one") (2 . "deux"))
*alist* *→* ((1 . "one") (2 . "two"))
(setf (cdr (assoc 1 *list-copy*)) "uno") *→* "uno"
*list-copy* *→* ((1 . "uno") (2 . "two"))
*alist* *→* ((1 . "uno") (2 . "two"))

```


```lisp
 (pairlis '(one two) '(1 2) '((three . 3) (four . 19)))

```


```lisp
 ((one . 1) (two . 2) (three . 3) (four . 19))

```


```lisp
 ((two . 2) (one . 1) (three . 3) (four . 19))

```


```lisp
 (setq keys '(1 2 3)
        data '("one" "two" "three")
        alist '((4 . "four"))) *→* ((4 . "four"))
 (pairlis keys data) *→* ((3 . "three") (2 . "two") (1 . "one"))
 (pairlis keys data alist)
*→* ((3 . "three") (2 . "two") (1 . "one") (4 . "four"))
 alist *→* ((4 . "four"))

```


```lisp
 (setq alist '((1 . "one") (2 . "two") (3 . 3))) 
*→* ((1 . "one") (2 . "two") (3 . 3))
 (rassoc 3 alist) *→* (3 . 3)
 (rassoc "two" alist) *→* NIL
 (rassoc "two" alist :test 'equal) *→* (2 . "two")
 (rassoc 1 alist :key #'(lambda (x) (if (numberp x) (/ x 3)))) *→* (3 . 3)
 (rassoc 'a '((a . b) (b . c) (c . a) (z . a))) *→* (C . A)
 (rassoc-if #'stringp alist) *→* (1 . "one")
 (rassoc-if-not #'vectorp alist) *→* (3 . 3)

```


```lisp
 (rassoc item list :test fn)

```


```lisp
 (find item list :test fn :key #'cdr)

```


```lisp
 (setq x '()) *→* NIL
 (setq *indicator-list* '(prop1 prop2)) *→* (PROP1 PROP2)
 (getf x 'prop1) *→* NIL
 (setf (getf x 'prop1) 'val1) *→* VAL1
 (eq (getf x 'prop1) 'val1) *→ true*
 (get-properties x *indicator-list*) *→* PROP1, VAL1, (PROP1 VAL1)
 x *→* (PROP1 VAL1)

```


```lisp
 (setq x '()) *→* NIL
 (getf x 'prop1) *→* NIL
 (getf x 'prop1 7) *→* 7
 (getf x 'prop1) *→* NIL
 (setf (getf x 'prop1) 'val1) *→* VAL1
 (eq (getf x 'prop1) 'val1) *→ true*
 (getf x 'prop1) *→* VAL1
 (getf x 'prop1 7) *→* VAL1
 x *→* (PROP1 VAL1)

;; Examples of implementation variation permitted.
 (setq foo (list 'a 'b 'c 'd 'e 'f)) *→* (A B C D E F)
 (setq bar (cddr foo)) *→* (C D E F)
 (remf foo 'c) *→ true*
 foo *→* (A B E F)
 bar
*→* (C D E F)
\OV (C)
\OV (NIL)
\OV (C NIL)
\OV (C D)

```


```lisp
 (let ((plist '()))
   (incf (getf plist 'count 0))
   plist) *→* (COUNT 1)

```


```lisp
 (setq x (cons () ())) *→* (NIL)
 (setf (getf (car x) 'prop1) 'val1) *→* VAL1
 (remf (car x) 'prop1) *→ true*
 (remf (car x) 'prop1) *→ false*

```


```lisp
 (setq list1 (list 1 1 2 3 4 a b c "A" "B" "C" "d")
       list2 (list 1 4 5 b c d "a" "B" "c" "D")) 
  *→* (1 4 5 B C D "a" "B" "c" "D")
 (intersection list1 list2) *→* (C B 4 1 1)
 (intersection list1 list2 :test 'equal) *→* ("B" C B 4 1 1)
 (intersection list1 list2 :test #'equalp) *→* ("d" "C" "B" "A" C B 4 1 1) 
 (nintersection list1 list2) *→* (1 1 4 B C)
 list1 *→* \term{implementation-dependent} ;\eg (1 1 4 B C)
 list2 *→* \term{implementation-dependent} ;\eg (1 4 5 B C D "a" "B" "c" "D")
 (setq list1 (copy-list '((1 . 2) (2 . 3) (3 . 4) (4 . 5))))
*→* ((1 . 2) (2 . 3) (3 . 4) (4 . 5)) 
 (setq list2 (copy-list '((1 . 3) (2 . 4) (3 . 6) (4 . 8))))
*→* ((1 . 3) (2 . 4) (3 . 6) (4 . 8)) 
 (nintersection list1 list2 :key #'cdr) *→* ((2 . 3) (3 . 4)) 
 list1 *→* \term{implementation-dependent} ;\eg ((1 . 2) (2 . 3) (3 . 4)) 
 list2 *→* \term{implementation-dependent} ;\eg ((1 . 3) (2 . 4) (3 . 6) (4 . 8)) 

```


```lisp
 (setq slist '()) *→* NIL 
 (adjoin 'a slist) *→* (A) 
 slist *→* NIL 
 (setq slist (adjoin '(test-item 1) slist)) *→* ((TEST-ITEM 1)) 
 (adjoin '(test-item 1) slist) *→* ((TEST-ITEM 1) (TEST-ITEM 1)) 
 (adjoin '(test-item 1) slist :test 'equal) *→* ((TEST-ITEM 1)) 
 (adjoin '(new-test-item 1) slist :key #'cadr) *→* ((TEST-ITEM 1)) 
 (adjoin '(new-test-item 1) slist) *→* ((NEW-TEST-ITEM 1) (TEST-ITEM 1)) 

```


```lisp
 (adjoin item list :key fn)
   \EQ (if (member (fn item) list :key fn) list (cons item list))

```


```lisp
 (setq x '(a (b c) d)) *→* (A (B C) D)
 (pushnew 5 (cadr x)) *→* (5 B C)   
 x *→* (A (5 B C) D)
 (pushnew 'b (cadr x)) *→* (5 B C)  
 x *→* (A (5 B C) D)
 (setq lst '((1) (1 2) (1 2 3))) *→* ((1) (1 2) (1 2 3))
 (pushnew '(2) lst) *→* ((2) (1) (1 2) (1 2 3))
 (pushnew '(1) lst) *→* ((1) (2) (1) (1 2) (1 2 3))
 (pushnew '(1) lst :test 'equal) *→* ((1) (2) (1) (1 2) (1 2 3))
 (pushnew '(1) lst :key #'car) *→* ((1) (2) (1) (1 2) (1 2 3)) 

```


```lisp
 (pushnew item place :test p)

```


```lisp
 (setf place (adjoin item place :test p))

```


```lisp
 (setq lst1 (list "A" "b" "C" "d")
       lst2 (list "a" "B" "C" "d")) *→* ("a" "B" "C" "d")
 (set-difference lst1 lst2) *→* ("d" "C" "b" "A")
 (set-difference lst1 lst2 :test 'equal) *→* ("b" "A")
 (set-difference lst1 lst2 :test #'equalp) *→* NIL 
 (nset-difference lst1 lst2 :test #'string=) *→* ("A" "b")
 (setq lst1 '(("a" . "b") ("c" . "d") ("e" . "f")))
*→* (("a" . "b") ("c" . "d") ("e" . "f")) 
 (setq lst2 '(("c" . "a") ("e" . "b") ("d" . "a")))
*→* (("c" . "a") ("e" . "b") ("d" . "a")) 
 (nset-difference lst1 lst2 :test #'string= :key #'cdr)
*→* (("c" . "d") ("e" . "f")) 
 lst1 *→* (("a" . "b") ("c" . "d") ("e" . "f")) 
 lst2 *→* (("c" . "a") ("e" . "b") ("d" . "a")) 

```


```lisp
;; Remove all flavor names that contain "c" or "w".
 (set-difference '("strawberry" "chocolate" "banana"
                  "lemon" "pistachio" "rhubarb")
          '(#\\c #\\w)
          :test #'(lambda (s c) (find c s)))
*→* ("banana" "rhubarb" "lemon")    ;One possible ordering.

```


```lisp
 (setq lst1 (list 1 "a" "b")
       lst2 (list 1 "A" "b")) *→* (1 "A" "b")
 (set-exclusive-or lst1 lst2) *→* ("b" "A" "b" "a")
 (set-exclusive-or lst1 lst2 :test #'equal) *→* ("A" "a")
 (set-exclusive-or lst1 lst2 :test 'equalp) *→* NIL 
 (nset-exclusive-or lst1 lst2) *→* ("a" "b" "A" "b") 
 (setq lst1 (list (("a" . "b") ("c" . "d") ("e" . "f"))))
*→* (("a" . "b") ("c" . "d") ("e" . "f"))
 (setq lst2 (list (("c" . "a") ("e" . "b") ("d" . "a"))))
*→* (("c" . "a") ("e" . "b") ("d" . "a")) 
 (nset-exclusive-or lst1 lst2 :test #'string= :key #'cdr)
*→* (("c" . "d") ("e" . "f") ("c" . "a") ("d" . "a")) 
 lst1 *→* (("a" . "b") ("c" . "d") ("e" . "f"))
 lst2 *→* (("c" . "a") ("d" . "a")) 

```


```lisp
 (setq cosmos '(1 "a" (1 2))) *→* (1 "a" (1 2))
 (subsetp '(1) cosmos) *→ true*
 (subsetp '((1 2)) cosmos) *→ false*
 (subsetp '((1 2)) cosmos :test 'equal) *→ true*
 (subsetp '(1 "A") cosmos :test #'equalp) *→ true*
 (subsetp '((1) (2)) '((1) (2))) *→ false*
 (subsetp '((1) (2)) '((1) (2)) :key #'car) *→ true*

```


```lisp
 (union '(a b c) '(f a d))
*→* (A B C F D)
\OV (B C F A D)
\OV (D F A B C)
 (union '((x 5) (y 6)) '((z 2) (x 4)) :key #'car)
*→* ((X 5) (Y 6) (Z 2))
\OV ((X 4) (Y 6) (Z 2))

 (setq lst1 (list 1 2 '(1 2) "a" "b")
       lst2 (list 2 3 '(2 3) "B" "C"))
*→* (2 3 (2 3) "B" "C")
 (nunion lst1 lst2)
*→* (1 (1 2) "a" "b" 2 3 (2 3) "B" "C") 
\OV (1 2 (1 2) "a" "b" "C" "B" (2 3) 3)

```


```lisp
 (decode-universal-time 0 0) *→* 0, 0, 0, 1, 1, 1900, 0, false, 0

;; The next two examples assume Eastern Daylight Time.
 (decode-universal-time 2414296800 5) *→* 0, 0, 1, 4, 7, 1976, 6, false, 5
 (decode-universal-time 2414293200) *→* 0, 0, 1, 4, 7, 1976, 6, true, 5

;; This example assumes that the time zone is Eastern Daylight Time
;; (and that the time zone is constant throughout the example).
 (let* ((here (nth 8 (multiple-value-list (get-decoded-time)))) ;Time zone
        (recently (get-universal-time))
        (a (nthcdr 7 (multiple-value-list (decode-universal-time recently))))
        (b (nthcdr 7 (multiple-value-list (decode-universal-time recently here)))))
   (list a b (equal a b))) *→* ((T 5) (NIL 5) NIL)

```


```lisp
 (encode-universal-time 0 0 0 1 1 1900 0) *→* 0
 (encode-universal-time 0 0 1 4 7 1976 5) *→* 2414296800
;; The next example assumes Eastern Daylight Time.
 (encode-universal-time 0 0 1 4 7 1976) *→* 2414293200

```


```lisp
;; At noon on July 4, 1976 in Eastern Daylight Time.
 (get-decoded-time) *→* 0, 0, 12, 4, 7, 1976, 6, true, 5
;; At exactly the same instant.
 (get-universal-time) *→* 2414332800
;; Exactly five minutes later.
 (get-universal-time) *→* 2414333100
;; The difference is 300 seconds (five minutes)
 (- * **) *→* 300

```


```lisp
 (get-decoded-time) \EQ (decode-universal-time (get-universal-time))

```


```lisp
 (sleep 1) *→* NIL 

;; Actually, since SLEEP is permitted to use approximate timing, 
;; this might not always yield true, but it will often enough that
;; we felt it to be a productive example of the intent.
 (let ((then (get-universal-time))
       (now  (progn (sleep 10) (get-universal-time))))
   (>= (- now then) 10))
*→ true*

```


```lisp
%  (defvar *my-table* (make-hash-table))
%  (setf (gethash 'foo *my-table*) 1)
%  (setf (gethash 'bar *my-table*) 2)
%  (setf (gethash 'foobar *my-table*) 3)
%  (describe *my-table* :interactive t)
% #<EQ-HASH-TABLE 259> has 3 entries.
% Do you want to see its contents? (Yes or No) Yes
% 
```


```lisp
 (defclass spaceship ()
   ((captain :initarg :captain :accessor spaceship-captain)
    (serial# :initarg :serial-number :accessor spaceship-serial-number)))

 (defclass federation-starship (spaceship) ())

 (defmethod describe-object ((s spaceship) stream)
   (with-slots (captain serial#) s
     (format stream "~&~S is a spaceship of type ~S,~
                     ~%with ~A at the helm ~
                       and with serial number ~D.~%"
             s (type-of s) captain serial#)))

 (make-instance 'federation-starship
                :captain "Rachel Garrett"
                :serial-number "NCC-1701-C")
*→* #<FEDERATION-STARSHIP 26312465>

 (describe *)
\OUT #<FEDERATION-STARSHIP 26312465> is a spaceship of type FEDERATION-STARSHIP,
\OUT with Rachel Garrett at the helm and with serial number NCC-1701-C.
*→* \novalues

```


```lisp
 (defun fact (n) (if (zerop n) 1 (* n (fact (- n 1)))))
*→* FACT
 (trace fact)
*→* (FACT)
;; Of course, the format of traced output is implementation-dependent.
 (fact 3)
\OUT 1 Enter FACT 3
\OUT | 2 Enter FACT 2
\OUT |   3 Enter FACT 1
\OUT |   | 4 Enter FACT 0
\OUT |   | 4 Exit FACT 1
\OUT |   3 Exit FACT 1
\OUT | 2 Exit FACT 2
\OUT 1 Exit FACT 6
*→* 6

```


```lisp
 (defun f (a) (1+ a)) *→* F
 (eq (symbol-function 'f)
     (progn (disassemble 'f)
            (symbol-function 'f))) *→ true*

```


```lisp
(format t "~&Evaluating ~S~%" -)
\OUT Evaluating (FORMAT T "~&Evaluating ~S~%" -)
*→* NIL

```


```lisp
(+ 0 1) *→* 1
(- 4 2) *→* 2
(/ 9 3) *→* 3
(list + ++ +++) *→* ((/ 9 3) (- 4 2) (+ 0 1))
(setq a 1 b 2 c 3 d (list a b c)) *→* (1 2 3)
(setq a 4 b 5 c 6 d (list a b c)) *→* (4 5 6)
(list a b c) *→* (4 5 6)
(eval +++) *→* (1 2 3)
#.`(,@++ d) *→* (1 2 3 (1 2 3))

```


```lisp
(values 'a1 'a2) *→* A1, A2
'b *→* B
(values 'c1 'c2 'c3) *→* C1, C2, C3
(list * ** ***) *→* (C1 B A1)

(defun cube-root (x) (expt x 1/3)) *→* CUBE-ROOT
(compile *) *→* CUBE-ROOT
(setq a (cube-root 27.0)) *→* 3.0
(* * 9.0) *→* 27.0

```


```lisp
 *   \EQ (car /)
 **  \EQ (car //)
 *** \EQ (car ///)

```


```lisp
 (floor 22 7) *→* 3, 1
 (+ (* (car /) 7) (cadr /)) *→* 22

```


```lisp
 (lisp-implementation-type)
*→* "ACME Lisp"
\OV "Joe's Common Lisp"
 (lisp-implementation-version)
*→* "1.3a"
*→* "V2"
\OV "Release 17.3, ECO #6"

```


```lisp
 (short-site-name)
*→* "MIT AI Lab"
\OV "CMU-CSD"
 (long-site-name)
*→* "MIT Artificial Intelligence Laboratory"
\OV "CMU Computer Science Department"

```


```lisp
 (machine-instance)
*→* "ACME.COM"
\OV "S/N 123231"
\OV "18.26.0.179"
\OV "AA-00-04-00-A7-A4"

```


```lisp
 (machine-type)
*→* "DEC PDP-10"
\OV "Symbolics LM-2"

```


```lisp
 (machine-version) *→* "KL-10, microcode 9"

```


```lisp
 (software-type) *→* "Multics"
 (software-version) *→* "1.3x"

```


```lisp
 (pathnamep (user-homedir-pathname)) *→ true*

```


```lisp
 ((lambda \param{lambda-list} . \param{body}) . \param{arguments})

```


```lisp
 (funcall #'(lambda \param{lambda-list} . \param{body}) . \param{arguments})

```


```lisp
    (lambda \param{lambda-list} {\DeclsAndDoc} \starparam{form})
 \EQ (function (lambda \param{lambda-list} {\DeclsAndDoc} \starparam{form}))
 \EQ #'(lambda \param{lambda-list} {\DeclsAndDoc} \starparam{form})

```


```lisp
 (funcall (lambda (x) (+ x 3)) 4) *→* 7

```


```lisp
(defmacro lambda (&whole form &rest bvl-decls-and-body)
  (declare (ignore bvl-decls-and-body))
  `#',form)

```


```lisp
 (defun foo () "bar") *→* FOO
 (compiled-function-p #'foo) *→* \term{implementation-dependent}
 (compile 'foo) *→* FOO 
 (compiled-function-p #'foo) *→ true*
 (setf (symbol-function 'foo)
       (compile nil '(lambda () "replaced"))) *→* #<Compiled-Function>
 (foo) *→* "replaced"

```


```lisp
 (setq form '(1+ a) a 999) *→* 999
 (eval form) *→* 1000
 (eval 'form) *→* (1+ A)
 (let ((a '(this would break if eval used local value))) (eval form))
*→* 1000

```


```lisp
 (eval (list 'cdr (car '((quote (a . b)) c)))) *→* b

```


```lisp
%  (setq temp 3) *→* 3 
%  (eval-when (:compile-toplevel) (setq temp 2)) *→* NIL 
%  temp *→* 3 
%  (eval-when (:execute) (setq temp 2)) *→* 2 
%  temp *→* 2 
% 
```


```lisp
 (eval-when (:compile-toplevel :load-toplevel :execute)
   (set-macro-character #\\$ #'(lambda (stream char)
                                (declare (ignore char))
                                (list 'dollar (read stream))))) *→* T

```


```lisp
;;;     The EVAL-WHEN in this case is not at toplevel, so only the :EXECUTE
;;;     keyword is considered. At compile time, this has no effect.
;;;     At load time (if the LET is at toplevel), or at execution time
;;;     (if the LET is embedded in some other form which does not execute
;;;     until later) this sets (SYMBOL-FUNCTION 'FOO1) to a function which
;;;     returns 1.
 (let ((x 1))
   (eval-when (:execute :load-toplevel :compile-toplevel)
     (setf (symbol-function 'foo1) #'(lambda () x))))

;;;     If this expression occurs at the toplevel of a file to be compiled,
;;;     it has BOTH a compile time AND a load-time effect of setting
;;;     (SYMBOL-FUNCTION 'FOO2) to a function which returns 2.
 (eval-when (:execute :load-toplevel :compile-toplevel)
   (let ((x 2))
     (eval-when (:execute :load-toplevel :compile-toplevel)
       (setf (symbol-function 'foo2) #'(lambda () x)))))

;;;     If this expression occurs at the toplevel of a file to be compiled,
;;;     it has BOTH a compile time AND a load-time effect of setting the
;;;     function cell of FOO3 to a function which returns 3.
 (eval-when (:execute :load-toplevel :compile-toplevel)
   (setf (symbol-function 'foo3) #'(lambda () 3)))
 
;;; #4: This always does nothing. It simply returns NIL.
 (eval-when (:compile-toplevel)
   (eval-when (:compile-toplevel) 
     (print 'foo4)))

;;;     If this form occurs at toplevel of a file to be compiled, FOO5 is
;;;     printed at compile time. If this form occurs in a non-top-level
;;;     position, nothing is printed at compile time. Regardless of context,
;;;     nothing is ever printed at load time or execution time.
 (eval-when (:compile-toplevel) 
   (eval-when (:execute)
     (print 'foo5)))
 
;;;     If this form occurs at toplevel of a file to be compiled, FOO6 is
;;;     printed at compile time.  If this form occurs in a non-top-level
;;;     position, nothing is printed at compile time. Regardless of context,
;;;     nothing is ever printed at load time or execution time.
 (eval-when (:execute :load-toplevel)
   (eval-when (:compile-toplevel)
     (print 'foo6)))

```


```lisp
 (defmacro foo ()
   (really-foo)
   `(really-foo))

```


```lisp
 (defmacro foo ()
   `(eval-when (:compile-toplevel :execute :load-toplevel) (really-foo)))

```


```lisp
 (let ((x 3))
   (eval-when (:execute :load-toplevel :compile-toplevel) (print x)))

```


```lisp
 (defun bar (x) (defun foo () (+ x 3)))

```


```lisp
 (defun bar (x) 
   (progn (eval-when (:compile-toplevel) 
            (compiler::notice-function-definition 'foo '(x)))
          (eval-when (:execute :load-toplevel)
            (setf (symbol-function 'foo) #'(lambda () (+ x 3))))))

```


```lisp
 (defun bar (x) 
   (setf (symbol-function 'foo) #'(lambda () (+ x 3))))

```


```lisp
;;; The function INCR1 always returns the same value, even in different images.
;;; The function INCR2 always returns the same value in a given image, 
;;; but the value it returns might vary from image to image.
(defun incr1 (x) (+ x #.(random 17)))
(defun incr2 (x) (+ x (load-time-value (random 17))))

;;; The function FOO1-REF references the nth element of the first of 
;;; the *FOO-ARRAYS* that is available at load time.  It is permissible for
;;; that array to be modified (e.g., by SET-FOO1-REF); FOO1-REF will see the
;;; updated values.
(defvar *foo-arrays* (list (make-array 7) (make-array 8)))
(defun foo1-ref (n) (aref (load-time-value (first *my-arrays*) nil) n))
(defun set-foo1-ref (n val) 
  (setf (aref (load-time-value (first *my-arrays*) nil) n) val))

;;; The function BAR1-REF references the nth element of the first of 
;;; the *BAR-ARRAYS* that is available at load time.  The programmer has
;;; promised that the array will be treated as read-only, so the system 
;;; can copy or coalesce the array.
(defvar *bar-arrays* (list (make-array 7) (make-array 8)))
(defun bar1-ref (n) (aref (load-time-value (first *my-arrays*) t) n))

;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced
;;; even though NIL was specified, because the object was already read-only
;;; when it was written as a literal vector rather than created by a constructor.
;;; User programs must treat the vector v as read-only.
(defun baz-ref (n)
  (let ((v (load-time-value #(A B C) nil)))
    (values (svref v n) v)))

;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced
;;; even though NIL was specified in the outer situation because T was specified
;;; in the inner situation.  User programs must treat the vector v as read-only.
(defun baz-ref (n)
  (let ((v (load-time-value (load-time-value (vector 1 2 3) t) nil)))
    (values (svref v n) v)))

```


```lisp
 (setq a 1) *→* 1
 (quote (setq a 3)) *→* (SETQ A 3)
 a *→* 1
 'a *→* A
 ''a *→* (QUOTE A) 
 '''a *→* (QUOTE (QUOTE A))
 (setq a 43) *→* 43
 (list a (cons a 3)) *→* (43 (43 . 3))
 (list (quote a) (quote (cons a 3))) *→* (A (CONS A 3)) 
 1 *→* 1
 '1 *→* 1
 "foo" *→* "foo"
 '"foo" *→* "foo"
 (car '(a b)) *→* A
 '(car '(a b)) *→* (CAR (QUOTE (A B)))
 #(car '(a b)) *→* #(CAR (QUOTE (A B)))
 '#(car '(a b)) *→* #(CAR (QUOTE (A B)))

```


```lisp
 (defun square (x) (expt x 2)) *→* SQUARE
 (define-compiler-macro square (&whole form arg)
   (if (atom arg)
       `(expt ,arg 2)
       (case (car arg)
         (square (if (= (length arg) 2)
                     `(expt ,(nth 1 arg) 4)
                     form))
         (expt   (if (= (length arg) 3)
                     (if (numberp (nth 2 arg))
                         `(expt ,(nth 1 arg) ,(* 2 (nth 2 arg)))
                         `(expt ,(nth 1 arg) (* 2 ,(nth 2 arg))))
                     form))
         (otherwise `(expt ,arg 2))))) *→* SQUARE
 (square (square 3)) *→* 81
 (macroexpand '(square x)) *→* (SQUARE X), false
 (funcall (compiler-macro-function 'square) '(square x) nil)
*→* (EXPT X 2)
 (funcall (compiler-macro-function 'square) '(square (square x)) nil)
*→* (EXPT X 4)
 (funcall (compiler-macro-function 'square) '(funcall #'square x) nil)
*→* (EXPT X 2)

 (defun distance-positional (x1 y1 x2 y2)
   (sqrt (+ (expt (- x2 x1) 2) (expt (- y2 y1) 2))))
*→* DISTANCE-POSITIONAL
 (defun distance (&key (x1 0) (y1 0) (x2 x1) (y2 y1))
   (distance-positional x1 y1 x2 y2))
*→* DISTANCE
 (define-compiler-macro distance (&whole form
                                  &rest key-value-pairs
                                  &key (x1 0  x1-p)
                                       (y1 0  y1-p)
                                       (x2 x1 x2-p)
                                       (y2 y1 y2-p)
                                  &allow-other-keys
                                  &environment env)
   (flet ((key (n) (nth (* n 2) key-value-pairs))
          (arg (n) (nth (1+ (* n 2)) key-value-pairs))
          (simplep (x)
            (let ((expanded-x (macroexpand x env)))
              (or (constantp expanded-x env)
                  (symbolp expanded-x)))))
     (let ((n (/ (length key-value-pairs) 2)))
       (multiple-value-bind (x1s y1s x2s y2s others)
           (loop for (key) on key-value-pairs by #'cddr
                 count (eq key ':x1) into x1s
                 count (eq key ':y1) into y1s
                 count (eq key ':x2) into x2s
                 count (eq key ':y1) into y2s
                 count (not (member key '(:x1 :x2 :y1 :y2)))
                   into others
                 finally (return (values x1s y1s x2s y2s others)))
         (cond ((and (= n 4)
                     (eq (key 0) :x1)
                     (eq (key 1) :y1)
                     (eq (key 2) :x2)
                     (eq (key 3) :y2))
                `(distance-positional ,x1 ,y1 ,x2 ,y2))
               ((and (if x1-p (and (= x1s 1) (simplep x1)) t)
                     (if y1-p (and (= y1s 1) (simplep y1)) t)
                     (if x2-p (and (= x2s 1) (simplep x2)) t)
                     (if y2-p (and (= y2s 1) (simplep y2)) t)
                     (zerop others))
                `(distance-positional ,x1 ,y1 ,x2 ,y2))
               ((and (< x1s 2) (< y1s 2) (< x2s 2) (< y2s 2)
                     (zerop others))
                (let ((temps (loop repeat n collect (gensym))))
                  `(let ,(loop for i below n
                               collect (list (nth i temps) (arg i)))
                     (distance
                       ,@(loop for i below n
                               append (list (key i) (nth i temps)))))))
               (t form))))))
*→* DISTANCE
 (dolist (form
           '((distance :x1 (setq x 7) :x2 (decf x) :y1 (decf x) :y2 (decf x))
             (distance :x1 (setq x 7) :y1 (decf x) :x2 (decf x) :y2 (decf x))
             (distance :x1 (setq x 7) :y1 (incf x))
             (distance :x1 (setq x 7) :y1 (incf x) :x1 (incf x))
             (distance :x1 a1 :y1 b1 :x2 a2 :y2 b2)
             (distance :x1 a1 :x2 a2 :y1 b1 :y2 b2)
             (distance :x1 a1 :y1 b1 :z1 c1 :x2 a2 :y2 b2 :z2 c2)))
   (print (funcall (compiler-macro-function 'distance) form nil)))
\OUT (LET ((#:G6558 (SETQ X 7))
\OUT       (#:G6559 (DECF X))
\OUT       (#:G6560 (DECF X))
\OUT       (#:G6561 (DECF X)))
\OUT   (DISTANCE :X1 #:G6558 :X2 #:G6559 :Y1 #:G6560 :Y2 #:G6561)) 
\OUT (DISTANCE-POSITIONAL (SETQ X 7) (DECF X) (DECF X) (DECF X)) 
\OUT (LET ((#:G6567 (SETQ X 7))
\OUT       (#:G6568 (INCF X)))
\OUT   (DISTANCE :X1 #:G6567 :Y1 #:G6568)) 
\OUT (DISTANCE :X1 (SETQ X 7) :Y1 (INCF X) :X1 (INCF X)) 
\OUT (DISTANCE-POSITIONAL A1 B1 A2 B2) 
\OUT (DISTANCE-POSITIONAL A1 B1 A2 B2) 
\OUT (DISTANCE :X1 A1 :Y1 B1 :Z1 C1 :X2 A2 :Y2 B2 :Z2 C2) 
*→* NIL

```


```lisp
 (defmacro mac1 (a b) "Mac1 multiplies and adds" 
            `(+ ,a (* ,b 3))) *→* MAC1 
 (mac1 4 5) *→* 19 
 (documentation 'mac1 'function) *→* "Mac1 multiplies and adds" 
 (defmacro mac2 (&optional (a 2 b) (c 3 d) &rest x) `'(,a ,b ,c ,d ,x)) *→* MAC2 
 (mac2 6) *→* (6 T 3 NIL NIL) 
 (mac2 6 3 8) *→* (6 T 3 T (8)) 
 (defmacro mac3 (&whole r a &optional (b 3) &rest x &key c (d a))
    `'(,r ,a ,b ,c ,d ,x)) *→* MAC3 
 (mac3 1 6 :d 8 :c 9 :d 10) *→* ((MAC3 1 6 :D 8 :C 9 :D 10) 1 6 9 8 (:D 8 :C 9 :D 10)) 

```


```lisp
% (defmacro halibut ((mouth eye1 eye2)
%                    ((fin1 length1) (fin2 length2))
%                    tail)
% ...)
%
```


```lisp
% (halibut (m (car eyes) (cdr eyes))
%          ((f1 (count-scales f1)) (f2 (count-scales f2)))
%          my-favorite-tail) *→* NIL
%
```


```lisp
% (halibut (m (car eyes) (cdr eyes))
%          ((f1) (f2 (count-scales f2)))
%          my-favorite-tail)
%
```


```lisp
% (halibut my-favorite-head
%          ((f1 (count-scales f1)) (f2 (count-scales f2)))
%          my-favorite-tail)
%
```


```lisp
% (defmacro halibut ((&whole head mouth eye1 eye2)
%                    ((fin1 length1) (fin2 length2))
%                    tail)
% ...)
%
```


```lisp
% (halibut (m (car eyes) (cdr eyes))
%          ((f1 (count-scales f1)) (f2 (count-scales f2)))
%          my-favorite-tail) *→* NIL
%
```


```lisp
% (defmacro arithmetic-if (test neg-form zero-form pos-form)
%   (let ((var (gensym)))
%     `(let ((,var ,test))
%        (cond ((< ,var 0) ,neg-form)
%            ((= ,var 0) ,zero-form)
%            (t ,pos-form))))) *→* ARITHMETIC-IF
%
```


```lisp
% (lambda (calling-form environment)
%   (declare (ignore environment))
%   (let ((var (gensym)))
%     (list 'let
%           (list (list 'var (cadr calling-form)))
%           (list 'cond
%                 (list (list '< var '0) (caddr calling-form))
%                 (list (list '= var '0) (cadddr calling-form))
%                 (list 't (fifth calling-form))))))
%
```


```lisp
% (arithmetic-if (- x 4.0)
%%                (- x)
%%                (error "Strange zero")
%%                x)
%%
```


```lisp
% (let ((g407 (- x 4.0)))
%   (cond ((< g407 0) (- x))
%         ((= g407 0) (error "Strange zero"))
%         (t x)))
%
```


```lisp
% (defmacro arithmetic-if (test neg-form &optional zero-form pos-form)
%   (let ((var (gensym)))
%     \bq(let ((,var ,test))
%        (cond ((< ,var 0) ,neg-form)
%              ((= ,var 0) ,zero-form)
%              (t ,pos-form)))))
%
```


```lisp
% (arithmetic-if (- x 4.0) (print x))
%
```


```lisp
% (let ((g408 (- x 4.0)))
%   (cond ((< g408 0) (print x))
%         ((= g408 0) nil)
%         (t nil)))
%
```


```lisp
 (defmacro loser (x &optional (a b &rest c) &rest z)
   ...)

```


```lisp
 (defmacro loser (x &optional ((a b &rest c)) &rest z)
   ...)

```


```lisp
 (defmacro loser (x &optional ((a b &rest c) '(nil nil)) &rest z)
   ...)

```


```lisp
 (defmacro loser (x &optional ((&optional a b &rest c)) &rest z)
   ...)

```


```lisp
 (loser (car pool) ((+ x 1)))

```


```lisp
 (defmacro dm1a (&whole x) `',x)
 (macroexpand '(dm1a))  *→* (QUOTE (DM1A))
 (macroexpand '(dm1a a)) is an error.
 
 (defmacro dm1b (&whole x a &optional b) `'(,x ,a ,b))
 (macroexpand '(dm1b))  is an error.
 (macroexpand '(dm1b q))  *→* (QUOTE ((DM1B Q) Q NIL))
 (macroexpand '(dm1b q r)) *→* (QUOTE ((DM1B Q R) Q R))
 (macroexpand '(dm1b q r s)) is an error.

```


```lisp
 (defmacro dm2a (&whole form a b) `'(form ,form a ,a b ,b))
 (macroexpand '(dm2a x y)) *→* (QUOTE (FORM (DM2A X Y) A X B Y))
 (dm2a x y) *→* (FORM (DM2A X Y) A X B Y)

 (defmacro dm2b (&whole form a (&whole b (c . d) &optional (e 5)) 
                 &body f &environment env)
   ``(,',form ,,a ,',b ,',(macroexpand c env) ,',d ,',e ,',f))
 ;Note that because backquote is involved, implementations may differ
 ;slightly in the nature (though not the functionality) of the expansion.
 (macroexpand '(dm2b x1 (((incf x2) x3 x4)) x5 x6))
 *→* (LIST* '(DM2B X1 (((INCF X2) X3 X4))
                   X5 X6)
            X1
            '((((INCF X2) X3 X4)) (SETQ X2 (+ X2 1)) (X3 X4) 5 (X5 X6))),
     T
 (let ((x1 5))
   (macrolet ((segundo (x) `(cadr ,x)))
     (dm2b x1 (((segundo x2) x3 x4)) x5 x6)))
 *→* ((DM2B X1 (((SEGUNDO X2) X3 X4)) X5 X6)
      5 (((SEGUNDO X2) X3 X4)) (CADR X2) (X3 X4) 5 (X5 X6))

```


```lisp
 (defmacro macfun (x) '(macro-function 'macfun)) *→* MACFUN 
 (not (macro-function 'macfun)) *→ false* 

```


```lisp
 (macrolet ((foo (&environment env)
               (if (macro-function 'bar env)
                  ''yes
                  ''no)))
    (list (foo)
          (macrolet ((bar () :beep))
             (foo))))
 
*→* (NO YES)

```


```lisp
 (setf (macro-function symbol) fn)

```


```lisp
 (defmacro alpha (x y) `(beta ,x ,y)) *→* ALPHA
 (defmacro beta (x y) `(gamma ,x ,y)) *→* BETA
 (defmacro delta (x y) `(gamma ,x ,y)) *→* EPSILON
 (defmacro expand (form &environment env)
   (multiple-value-bind (expansion expanded-p)
       (macroexpand form env)
     `(values ',expansion ',expanded-p))) *→* EXPAND
 (defmacro expand-1 (form &environment env)
   (multiple-value-bind (expansion expanded-p)
       (macroexpand-1 form env)
     `(values ',expansion ',expanded-p))) *→* EXPAND-1
\medbreak
;; Simple examples involving just the global environment
 (macroexpand-1 '(alpha a b)) *→* (BETA A B), true
 (expand-1 (alpha a b)) *→* (BETA A B), true
 (macroexpand '(alpha a b)) *→* (GAMMA A B), true
 (expand (alpha a b)) *→* (GAMMA A B), true
 (macroexpand-1 'not-a-macro) *→* NOT-A-MACRO, false
 (expand-1 not-a-macro) *→* NOT-A-MACRO, false
 (macroexpand '(not-a-macro a b)) *→* (NOT-A-MACRO A B), false
 (expand (not-a-macro a b)) *→* (NOT-A-MACRO A B), false
\medbreak
;; Examples involving lexical environments
 (macrolet ((alpha (x y) `(delta ,x ,y)))
   (macroexpand-1 '(alpha a b))) *→* (BETA A B), true
 (macrolet ((alpha (x y) `(delta ,x ,y)))
   (expand-1 (alpha a b))) *→* (DELTA A B), true
 (macrolet ((alpha (x y) `(delta ,x ,y)))
   (macroexpand '(alpha a b))) *→* (GAMMA A B), true
 (macrolet ((alpha (x y) `(delta ,x ,y)))
   (expand (alpha a b))) *→* (GAMMA A B), true
 (macrolet ((beta (x y) `(epsilon ,x ,y)))
   (expand (alpha a b))) *→* (EPSILON A B), true
 (let ((x (list 1 2 3)))
   (symbol-macrolet ((a (first x)))
     (expand a))) *→* (FIRST X), true
 (let ((x (list 1 2 3)))
   (symbol-macrolet ((a (first x)))
     (macroexpand 'a))) *→* A, false
 (symbol-macrolet ((b (alpha x y)))
   (expand-1 b)) *→* (ALPHA X Y), true
 (symbol-macrolet ((b (alpha x y)))
   (expand b)) *→* (GAMMA X Y), true
 (symbol-macrolet ((b (alpha x y))
                   (a b))
   (expand-1 a)) *→* B, true
 (symbol-macrolet ((b (alpha x y))
                   (a b))
   (expand a)) *→* (GAMMA X Y), true
\medbreak
;; Examples of shadowing behavior
 (flet ((beta (x y) (+ x y)))
   (expand (alpha a b))) *→* (BETA A B), true
 (macrolet ((alpha (x y) `(delta ,x ,y)))
   (flet ((alpha (x y) (+ x y)))
     (expand (alpha a b)))) *→* (ALPHA A B), false
 (let ((x (list 1 2 3)))
   (symbol-macrolet ((a (first x)))
     (let ((a x))
       (expand a)))) *→* A, false

```


```lisp
(defvar *things* (list 'alpha 'beta 'gamma)) *→* *THINGS*

(define-symbol-macro thing1 (first *things*)) *→* THING1
(define-symbol-macro thing2 (second *things*)) *→* THING2
(define-symbol-macro thing3 (third *things*)) *→* THING3

thing1 *→* ALPHA
(setq thing1 'ONE) *→* ONE
*things* *→* (ONE BETA GAMMA)
(multiple-value-setq (thing2 thing3) (values 'two 'three)) *→* TWO
thing3 *→* THREE
*things* *→* (ONE TWO THREE)

(list thing2 (let ((thing2 2)) thing2)) *→* (TWO 2)

```


```lisp
;;; The following is equivalent to
;;;   (list 'foo (let ((x 'bar)) x)),
;;; not
;;;   (list 'foo (let (('foo 'bar)) 'foo))
 (symbol-macrolet ((x 'foo))
   (list x (let ((x 'bar)) x))) 
*→* (foo bar)
\NV (foo foo) 
 
 (symbol-macrolet ((x '(foo x)))
   (list x))
*→* ((FOO X))

```


```lisp
 (defun hook (expander form env)
    (format t "Now expanding: ~S~%" form)
    (funcall expander form env)) *→* HOOK 
 (defmacro machook (x y) `(/ (+ ,x ,y) 2)) *→* MACHOOK 
 (macroexpand '(machook 1 2)) *→* (/ (+ 1 2) 2), true 
 (let ((*macroexpand-hook* #'hook)) (macroexpand '(machook 1 2)))
\OUT Now expanding (MACHOOK 1 2) 
*→* (/ (+ 1 2) 2), true

```


```lisp
 (defun declare-variable-types-globally (type vars)
   (proclaim `(type ,type ,@vars))
   type)

 ;; Once this form is executed, the dynamic variable *TOLERANCE*
 ;; must always contain a float.
 (declare-variable-types-globally 'float '(*tolerance*))
*→* FLOAT

```


```lisp
(proclaim '(special *x*))

```


```lisp
 (eval-when (:execute :compile-toplevel :load-toplevel)
   (proclaim '(special *x*)))

```


```lisp
 (defun nonsense (k x z)
   (foo z x)                     ;First call to foo
   (let ((j (foo k x))           ;Second call to foo
         (x (* k k)))
     (declare (inline foo) (special x z))
     (foo x j z)))               ;Third call to foo

```


```lisp
 (defun f ()
   (let ((x (list 1 2 3)))
     (declare (dynamic-extent x))
         ...))

```


```lisp
 (defun g (x) (declare (dynamic-extent x)) ...)
 (defun f () (g (list 1 2 3)))

```


```lisp
 (declaim (inline g))
 (defun g (x) (declare (dynamic-extent x)) ...)
 (defun f () (g (list 1 2 3)))
 
 (defun f ()
   (flet ((g (x) (declare (dynamic-extent x)) ...))
     (g (list 1 2 3))))
 

```


```lisp
 (defun f (&rest x)
   (declare (dynamic-extent x))
   ...)

```


```lisp
 (let ((x (list 'a1 'b1 'c1))
       (y (cons 'a2 (cons 'b2 (cons 'c2 nil)))))
   (declare (dynamic-extent x y))
   ...)

```


```lisp
;; In this example, the implementation is permitted to \term{stack allocate}
;; the list that is bound to X.
 (let ((x (list 1 2 3)))
   (declare (dynamic-extent x))
   (print x)
   :done)
\OUT (1 2 3)
*→* :DONE
 
;; In this example, the list to be bound to L can be \term{stack-allocated}.
 (defun zap (x y z)
   (do ((l (list x y z) (cdr l)))
       ((null l))
     (declare (dynamic-extent l))
     (prin1 (car l)))) *→* ZAP
 (zap 1 2 3)
\OUT 123
*→* NIL

;; Some implementations might open-code LIST-ALL-PACKAGES in a way
;; that permits using \term{stack allocation} of the list to be bound to L.
 (do ((l (list-all-packages) (cdr l)))
     ((null l))
   (declare (dynamic-extent l))
   (let ((name (package-name (car l))))
     (when (string-search "COMMON-LISP" name) (print name))))
\OUT "COMMON-LISP"
\OUT "COMMON-LISP-USER"
*→* NIL

;; Some implementations might have the ability to \term{stack allocate} 
;; rest lists.  A declaration such as the following should be a cue
;; to such implementations that stack-allocation of the rest list
;; would be desirable.
 (defun add (&rest x)
   (declare (dynamic-extent x))
   (apply #'+ x)) *→* ADD
 (add 1 2 3) *→* 6

 (defun zap (n m)
   ;; Computes (RANDOM (+ M 1)) at relative speed of roughly O(N).
   ;; It may be slow, but with a good compiler at least it
   ;; doesn't waste much heap storage.  :-\}
   (let ((a (make-array n)))
     (declare (dynamic-extent a))
     (dotimes (i n) 
       (declare (dynamic-extent i))
       (setf (aref a i) (random (+ i 1))))
     (aref a m))) *→* ZAP
 (< (zap 5 3) 3) *→ true*

```


```lisp
 (length (list (let ((x (list 1 2 3)))  ; Invalid
                (declare (dynamic-extent x))
                x)))

 (progn (let ((x (list 1 2 3)))  ; Invalid
          (declare (dynamic-extent x))
          x)
        nil)

```


```lisp
 (defun f (x y)
   (declare (type fixnum x y))
   (let ((z (+ x y)))
     (declare (type fixnum z))
     z)) *→* F
 (f 1 2) *→* 3
 ;; The previous definition of F is equivalent to
 (defun f (x y)
   ;; This declaration is a shorthand form of the TYPE declaration
   (declare (fixnum x y))
   ;; To declare the type of a return value, it's not necessary to
   ;; create a named variable.  A THE special form can be used instead.
   (the fixnum (+ x y))) *→* F
 (f 1 2) *→* 3

```


```lisp
 (defvar *one-array* (make-array 10 :element-type '(signed-byte 5)))
 (defvar *another-array* (make-array 10 :element-type '(signed-byte 8)))
  
 (defun frob (an-array)
   (declare (type (array (signed-byte 5) 1) an-array))
   (setf (aref an-array 1) 31)
   (setf (aref an-array 2) 127)
   (setf (aref an-array 3) (* 2 (aref an-array 3)))
   (let ((foo 0))
     (declare (type (signed-byte 5) foo))
     (setf foo (aref an-array 0))))
  
 (frob *one-array*)
 (frob *another-array*)

```


```lisp
 (defun frob (an-array)
   (setf (the (signed-byte 5) (aref an-array 1)) 31)
   (setf (the (signed-byte 5) (aref an-array 2)) 127)
   (setf (the (signed-byte 5) (aref an-array 3))
         (* 2 (the (signed-byte 5) (aref an-array 3))))
   (let ((foo 0))
     (declare (type (signed-byte 5) foo))
     (setf foo (the (signed-byte 5) (aref an-array 0)))))

```


```lisp
 (defun bump-counters (counters)
   (declare (type (array fixnum *) bump-counters))
   (dotimes (i (length counters))
     (incf (aref counters i))))

```


```lisp
 (defun f (x y) (declare (fixnum x y)) (+ x y))

```


```lisp
 (defun f (x y)
   (declare (fixnum x y))
   (the fixnum (+ x y)))

```


```lisp
 (defun f (x y)
   (declare (fixnum x y z))
   (the fixnum (+ x y z)))

```


```lisp
 (defun f (x y)
   (declare (fixnum x y z))
   (the fixnum (+ (the fixnum (+ x y)) z)))

```


```lisp
 (declaim (inline f))
 (defun f ...)
 (declaim (notinline f))

```


```lisp
 ;; The globally defined function DISPATCH should be open-coded,
 ;; if the implementation supports inlining, unless a NOTINLINE 
 ;; declaration overrides this effect.
 (declaim (inline dispatch))
 (defun dispatch (x) (funcall (get (car x) 'dispatch) x))
 ;; Here is an example where inlining would be encouraged.
 (defun top-level-1 () (dispatch (read-command)))
 ;; Here is an example where inlining would be prohibited.
 (defun top-level-2 ()
   (declare (notinline dispatch))
   (dispatch (read-command)))
 ;; Here is an example where inlining would be prohibited.
 (declaim (notinline dispatch))
 (defun top-level-3 () (dispatch (read-command)))
 ;; Here is an example where inlining would be encouraged.
 (defun top-level-4 () 
   (declare (inline dispatch))
   (dispatch (read-command)))

```


```lisp
 (declare (ftype (function (integer list) t) ith)
          (ftype (function (number) float) sine cosine))

```


```lisp
 (declaim (declaration author target-language target-machine))
 (declaim (target-language ada))
 (declaim (target-machine IBM-650))
 (defun strangep (x)
   (declare (author "Harry Tweeker"))
   (member x '(strange weird odd peculiar)))

```


```lisp
 (defun often-used-subroutine (x y)
   (declare (optimize (safety 2)))
   (error-check x y)
   (hairy-setup x)
   (do ((i 0 (+ i 1))
        (z x (cdr z)))
       ((null z))
     ;; This inner loop really needs to burn.
     (declare (optimize speed))
     (declare (fixnum i))
     ))

```


```lisp
 (defun hack (thing *mod*)    ;The binding of the parameter
   (declare (special *mod*))  ; *mod* is visible to hack1,
   (hack1 (car thing)))       ; but not that of thing.
 (defun hack1 (arg)
   (declare (special *mod*))  ;Declare references to *mod*
                              ;within hack1 to be special.
   (if (atom arg) *mod*
       (cons (hack1 (car arg)) (hack1 (cdr arg)))))

```


```lisp
 (declaim (special x))

```


```lisp
 (defun example (x) ...)

```


```lisp
(defun declare-eg (y)                 ;this y is special
 (declare (special y))
 (let ((y t))                         ;this y is lexical
      (list y
            (locally (declare (special y)) y)))) ;this y refers to the
                                                 ;special binding of y
*→* DECLARE-EG 
 (declare-eg nil) *→* (T NIL) 

```


```lisp
(setf (symbol-value 'x) 6)
(defun foo (x)                         ;a lexical binding of x
  (print x)
  (let ((x (1+ x)))                    ;a special binding of x
    (declare (special x))              ;and a lexical reference
    (bar))
  (1+ x))
(defun bar () 
  (print (locally (declare (special x))
           x)))
(foo 10) 
\OUT 10
\OUT 11
*→* 11

```


```lisp
(setf (symbol-value 'x) 6)
(defun bar (x y)            ;[1] 1st occurrence of x
  (let ((old-x x)           ;[2] 2nd occurrence of x -- same as 1st occurrence
        (x y))              ;[3] 3rd occurrence of x
    (declare (special x))
    (list old-x x)))
(bar 'first 'second) *→* (FIRST SECOND)

```


```lisp
 (defun few (x &optional (y *foo*))
   (declare (special *foo*))
   ...)

```


```lisp
 (declaim (special prosp)) *→* \term{implementation-dependent}
 (setq prosp 1 reg 1) *→* 1
 (let ((prosp 2) (reg 2))         ;the binding of prosp is special
    (set 'prosp 3) (set 'reg 3)   ;due to the preceding proclamation,
    (list prosp reg))             ;whereas the variable reg is lexical
*→* (3 2)
 (list prosp reg) *→* (1 3)

 (declaim (special x))          ;x is always special.
 (defun example (x y)                                 
   (declare (special y))
   (let ((y 3) (x (* x 2)))
     (print (+ y (locally (declare (special y)) y)))
     (let ((y 4)) (declare (special y)) (foo x)))) *→* EXAMPLE

```


```lisp
 (defun sample-function (y)  ;this y is regarded as special
   (declare (special y))                                
   (let ((y t))              ;this y is regarded as lexical
     (list y
           (locally (declare (special y))
             ;; this next y is regarded as special
             y))))
*→* SAMPLE-FUNCTION
 (sample-function nil) *→* (T NIL) 
 (setq x '(1 2 3) y '(4 . 5)) *→* (4 . 5)

;;; The following declarations are not notably useful in specific.
;;; They just offer a sample of valid declaration syntax using LOCALLY.
 (locally (declare (inline floor) (notinline car cdr))
          (declare (optimize space))
    (floor (car x) (cdr y))) *→* 0, 1

```


```lisp
;;; This example shows a definition of a function that has a particular set
;;; of OPTIMIZE settings made locally to that definition.
 (locally (declare (optimize (safety 3) (space 3) (speed 0)))
   (defun frob (w x y &optional (z (foo x y)))
     (mumble x y z w)))
*→* FROB

;;; This is like the previous example, except that the optimize settings
;;; remain in effect for subsequent definitions in the same compilation unit.
 (declaim (optimize (safety 3) (space 3) (speed 0)))
 (defun frob (w x y &optional (z (foo x y)))
   (mumble x y z w))
*→* FROB

```


```lisp
%  (the type exp) 
% \EQ 
%  (let ((#:g0001 exp))
%    (declare (type type #:g0001))
%    #:g0001)
% 
```


```lisp
 (the symbol (car (list (gensym)))) *→* #:G9876
 (the fixnum (+ 5 7)) *→* 12
 (the (values) (truncate 3.2 2)) *→* 1, 1.2
 (the integer (truncate 3.2 2)) *→* 1, 1.2
 (the (values integer) (truncate 3.2 2)) *→* 1, 1.2
 (the (values integer float) (truncate 3.2 2))   *→* 1, 1.2
 (the (values integer float symbol) (truncate 3.2 2)) *→* 1, 1.2
 (the (values integer float symbol t null list) 
      (truncate 3.2 2)) *→* 1, 1.2
 (let ((i 100))
    (declare (fixnum i))
    (the fixnum (1+ i))) *→* 101
 (let* ((x (list 'a 'b 'c))
        (y 5))
    (setf (the fixnum (car x)) y)
    x) *→* (5 B C)

```


```lisp
 (the (values integer integer) (floor x y))
 (the (values string t)
      (gethash the-key the-string-table))

```


```lisp
 (special-operator-p 'if) *→ true*
 (special-operator-p 'car) *→ false*
 (special-operator-p 'one) *→ false*

```


```lisp
 (constantp 1) *→ true*
 (constantp 'temp) *→ false*
 (constantp ''temp)) *→ true*
 (defconstant this-is-a-constant 'never-changing) *→* THIS-IS-A-CONSTANT 
 (constantp 'this-is-a-constant) *→ true*
 (constantp "temp") *→ true*
 (setq a 6) *→* 6 
 (constantp a) *→ true*
 (constantp '(sin pi)) *→* \term{implementation-dependent}
 (constantp '(car '(x))) *→* \term{implementation-dependent}
 (constantp '(eql x x)) *→* \term{implementation-dependent}
 (constantp '(typep x 'nil)) *→* \term{implementation-dependent}
 (constantp '(typep x 't)) *→* \term{implementation-dependent}
 (constantp '(values this-is-a-constant)) *→* \term{implementation-dependent}
 (constantp '(values 'x 'y)) *→* \term{implementation-dependent}
 (constantp '(let ((a '(a b c))) (+ (length a) 6))) *→* \term{implementation-dependent}

```


```lisp
;; An example involving version numbers.  Note that the precise nature of
;; the truename is implementation-dependent while the file is still open.
 (with-open-file (stream ">vistor>test.text.newest")
   (values (pathname stream)
           (truename stream)))
*→* #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.1"
\OV #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.newest"
\OV #P"S:>vistor>test.text.newest", #P"S:>vistor>_temp_._temp_.1"

;; In this case, the file is closed when the truename is tried, so the
;; truename information is reliable.
 (with-open-file (stream ">vistor>test.text.newest")
   (close stream)
   (values (pathname stream)
           (truename stream)))
*→* #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.1"

;; An example involving TOP-20's implementation-dependent concept 
;; of logical devices -- in this case, "DOC:" is shorthand for
;; "PS:<DOCUMENTATION>" ...
 (with-open-file (stream "CMUC::DOC:DUMPER.HLP")
   (values (pathname stream)
           (truename stream)))
*→* #P"CMUC::DOC:DUMPER.HLP", #P"CMUC::PS:<DOCUMENTATION>DUMPER.HLP.13"

```


```lisp
 (with-open-file (stream ">relativity>general.text")
   (file-author s))
*→* "albert"

```


```lisp
 (with-open-file (s "noel.text" 
                    :direction :output :if-exists :error)
   (format s "~&Dear Santa,~2%I was good this year.  ~
                Please leave lots of toys.~2%Love, Sue~
             ~2%attachments: milk, cookies~%")
   (truename s))
*→* #P"CUPID:/susan/noel.text"
 (with-open-file (s "noel.text")
   (file-write-date s))
*→* 2902600800

```


```lisp
;; An example involving logical pathnames.
 (with-open-file (stream "sys:chemistry;lead.text"
                         :direction :output :if-exists :error)
   (princ "eureka" stream)
   (values (pathname stream) (truename stream)))
*→* #P"SYS:CHEMISTRY;LEAD.TEXT.NEWEST", #P"Q:>sys>chem>lead.text.1"
 (rename-file "sys:chemistry;lead.text" "gold.text")
*→* #P"SYS:CHEMISTRY;GOLD.TEXT.NEWEST",
   #P"Q:>sys>chem>lead.text.1",
   #P"Q:>sys>chem>gold.text.1"

```


```lisp
 (with-open-file (s "delete-me.text" :direction :output :if-exists :error))
*→* NIL
 (setq p (probe-file "delete-me.text")) *→* #P"R:>fred>delete-me.text.1"
 (delete-file p) *→* T
 (probe-file "delete-me.text") *→ false*
 (with-open-file (s "delete-me.text" :direction :output :if-exists :error)
   (delete-file s))
*→* T
 (probe-file "delete-me.text") *→ false*

```


```lisp
 (setq f '+) *→* +
 (apply f '(1 2)) *→* 3
 (setq f #'-) *→* #<FUNCTION ->
 (apply f '(1 2)) *→* -1
 (apply #'max 3 5 '(2 7 3)) *→* 7
 (apply 'cons '((+ 2 3) 4)) *→* ((+ 2 3) . 4)
 (apply #'+ '()) *→* 0

 (defparameter *some-list* '(a b c))
 (defun strange-test (&rest x) (eq x *some-list*))
 (apply #'strange-test *some-list*) *→* \term{implementation-dependent}

 (defun bad-boy (&rest x) (rplacd x 'y))
 (bad-boy 'a 'b 'c) has undefined consequences.
 (apply #'bad-boy *some-list*) has undefined consequences.

```


```lisp
 (defun foo (size &rest keys &key double &allow-other-keys)
   (let ((v (apply #'make-array size :allow-other-keys t keys)))
     (if double (concatenate (type-of v) v v) v)))
 (foo 4 :initial-contents '(a b c d) :double t)
    *→* #(A B C D A B C D)

```


```lisp
 (lambda \param{lambda-list}
   {\DeclsAndDoc}
   (block \param{block-name} \starparam{form}))

```


```lisp
 (defun recur (x)
  (when (> x 0)
    (recur (1- x)))) *→* RECUR 
 (defun ex (a b &optional c (d 66) &rest keys &key test (start 0))
    (list a b c d keys test start)) *→* EX 
 (ex 1 2) *→* (1 2 NIL 66 NIL NIL 0)
 (ex 1 2 3 4 :test 'equal :start 50) 
*→* (1 2 3 4 (:TEST EQUAL :START 50) EQUAL 50)
 (ex :test 1 :start 2) *→* (:TEST 1 :START 2 NIL NIL 0)

 ;; This function assumes its callers have checked the types of the
 ;; arguments, and authorizes the compiler to build in that assumption.
 (defun discriminant (a b c)
   (declare (number a b c))
   "Compute the discriminant for a quadratic equation."
   (- (* b b) (* 4 a c))) *→* DISCRIMINANT
 (discriminant 1 2/3 -2) *→* 76/9

 ;; This function assumes its callers have not checked the types of the
 ;; arguments, and performs explicit type checks before making any assumptions. 
 (defun careful-discriminant (a b c)
   "Compute the discriminant for a quadratic equation."
   (check-type a number)
   (check-type b number)
   (check-type c number)
   (locally (declare (number a b c))
     (- (* b b) (* 4 a c)))) *→* CAREFUL-DISCRIMINANT
 (careful-discriminant 1 2/3 -2) *→* 76/9

```


```lisp
 (fboundp 'car) *→ true*
 (fboundp 'nth-value) *→ false*
 (fboundp 'with-open-file) *→ true*
 (fboundp 'unwind-protect) *→ true*
 (defun my-function (x) x) *→* MY-FUNCTION
 (fboundp 'my-function) *→ true*
 (let ((saved-definition (symbol-function 'my-function)))
   (unwind-protect (progn (fmakunbound 'my-function)
                          (fboundp 'my-function))
     (setf (symbol-function 'my-function) saved-definition)))
*→ false*
 (fboundp 'my-function) *→ true*
 (defmacro my-macro (x) `',x) *→* MY-MACRO
 (fboundp 'my-macro) *→ true*
 (fmakunbound 'my-function) *→* MY-FUNCTION
 (fboundp 'my-function) *→ false*
 (flet ((my-function (x) x))
   (fboundp 'my-function)) *→ false*

```


```lisp
(if (fboundp x) (symbol-function x))

```


```lisp
(defun add-some (x) (+ x 19)) *→* ADD-SOME
 (fboundp 'add-some) *→ true*
 (flet ((add-some (x) (+ x 37)))
    (fmakunbound 'add-some)
    (add-some 1)) *→* 38
 (fboundp 'add-some) *→ false*

```


```lisp
 (defun foo (x flag)
   (macrolet ((fudge (z)
                 ;The parameters x and flag are not accessible
                 ; at this point; a reference to flag would be to
                 ; the global variable of that name.
                 \bq\ (if flag (* ,z ,z) ,z)))
    ;The parameters x and flag are accessible here.
     (+ x
        (fudge x)
        (fudge (+ x 1)))))
 \EQ
 (defun foo (x flag)
   (+ x
      (if flag (* x x) x)
      (if flag (* (+ x 1) (+ x 1)) (+ x 1))))

```


```lisp
%  (flet ((+ (&rest args) 'crossed-out)) (+ 1 2 3)) *→* CROSSED-OUT
% 
```


```lisp
 (flet ((flet1 (n) (+ n n)))
    (flet ((flet1 (n) (+ 2 (flet1 n))))
      (flet1 2))) *→* 6

 (defun dummy-function () 'top-level) *→* DUMMY-FUNCTION 
 (funcall #'dummy-function) *→* TOP-LEVEL 
 (flet ((dummy-function () 'shadow)) 
      (funcall #'dummy-function)) *→* SHADOW 
 (eq (funcall #'dummy-function) (funcall 'dummy-function))
*→ true* 
 (flet ((dummy-function () 'shadow))
   (eq (funcall #'dummy-function)
       (funcall 'dummy-function)))
*→ false* 

 (defun recursive-times (k n)
   (labels ((temp (n) 
              (if (zerop n) 0 (+ k (temp (1- n))))))
     (temp n))) *→* RECURSIVE-TIMES
 (recursive-times 2 3) *→* 6

 (defmacro mlets (x &environment env) 
    (let ((form `(babbit ,x)))
      (macroexpand form env))) *→* MLETS
 (macrolet ((babbit (z) `(+ ,z ,z))) (mlets 5)) *→* 10

```


```lisp
 (flet ((safesqrt (x) (sqrt (abs x))))
  ;; The safesqrt function is used in two places.
   (safesqrt (apply #'+ (map 'list #'safesqrt '(1 2 3 4 5 6)))))
*→* 3.291173

```


```lisp
 (defun integer-power (n k)     
   (declare (integer n))         
   (declare (type (integer 0 *) k))
   (labels ((expt0 (x k a)
              (declare (integer x a) (type (integer 0 *) k))
              (cond ((zerop k) a)
                    ((evenp k) (expt1 (* x x) (floor k 2) a))
                    (t (expt0 (* x x) (floor k 2) (* x a)))))
            (expt1 (x k a)
              (declare (integer x a) (type (integer 0 *) k))
              (cond ((evenp k) (expt1 (* x x) (floor k 2) a))
                    (t (expt0 (* x x) (floor k 2) (* x a))))))
    (expt0 n k 1))) *→* INTEGER-POWER

```


```lisp
 (defun example (y l)
   (flet ((attach (x)
            (setq l (append l (list x)))))
     (declare (inline attach))
     (dolist (x y)
       (unless (null (cdr x))
         (attach x)))
     l))

 (example '((a apple apricot) (b banana) (c cherry) (d) (e))
          '((1) (2) (3) (4 2) (5) (6 3 2)))
*→* ((1) (2) (3) (4 2) (5) (6 3 2) (A APPLE APRICOT) (B BANANA) (C CHERRY))

```


```lisp
 (funcall #'+ 1 2 3) *→* 6
 (funcall 'car '(1 2 3)) *→* 1
 (funcall 'position 1 '(1 2 3 2 1) :start 1) *→* 4
 (cons 1 2) *→* (1 . 2)
 (flet ((cons (x y) `(kons ,x ,y)))
   (let ((cons (symbol-function '+)))
     (funcall #'cons
              (funcall 'cons 1 2)
              (funcall cons 1 2))))
*→* (KONS (1 . 2) 3)

```


```lisp
 (funcall \param{function} \param{arg1} \param{arg2} ...)
 \EQ (apply \param{function} \param{arg1} \param{arg2} ... nil)
 \EQ (apply \param{function} (list \param{arg1} \param{arg2} ...))

```


```lisp
 (defun adder (x) (function (lambda (y) (+ x y))))

```


```lisp
 (setq add3 (adder 3))
 (funcall add3 5) *→* 8

```


```lisp
 (function-lambda-expression #'(lambda (x) x))
*→* NIL, false, NIL
\OV NIL, true, NIL
\OV (LAMBDA (X) X), true, NIL
\OV (LAMBDA (X) X), false, NIL

 (function-lambda-expression
    (funcall #'(lambda () #'(lambda (x) x))))
*→* NIL, false, NIL
\OV NIL, true, NIL
\OV (LAMBDA (X) X), true, NIL
\OV (LAMBDA (X) X), false, NIL
 
 (function-lambda-expression 
    (funcall #'(lambda (x) #'(lambda () x)) nil))
*→* NIL, true, NIL
\OV (LAMBDA () X), true, NIL
\NV NIL, false, NIL
\NV (LAMBDA () X), false, NIL
  
 (flet ((foo (x) x))
   (setf (symbol-function 'bar) #'foo)
   (function-lambda-expression #'bar))
*→* NIL, false, NIL
\OV NIL, true, NIL
\OV (LAMBDA (X) (BLOCK FOO X)), true, NIL
\OV (LAMBDA (X) (BLOCK FOO X)), false, FOO
\OV (SI::BLOCK-LAMBDA FOO (X) X), false, FOO
 
 (defun foo ()
   (flet ((bar (x) x))
     #'bar))
 (function-lambda-expression (foo))
*→* NIL, false, NIL
\OV NIL, true, NIL
\OV (LAMBDA (X) (BLOCK BAR X)), true, NIL
\OV (LAMBDA (X) (BLOCK BAR X)), true, (:INTERNAL FOO 0 BAR)
\OV (LAMBDA (X) (BLOCK BAR X)), false, "BAR in FOO"

```


```lisp
 (functionp 'append) *→ false*
 (functionp #'append) *→ true*
 (functionp (symbol-function 'append)) *→ true*
 (flet ((f () 1)) (functionp #'f)) *→ true*
 (functionp (compile nil '(lambda () 259))) *→ true*
 (functionp nil) *→ false*
 (functionp 12) *→ false*
 (functionp '(lambda (x) (* x x))) *→ false*
 (functionp #'(lambda (x) (* x x))) *→ true*

```


```lisp
 (functionp \param{object}) \EQ (typep \param{object} 'function)

```


```lisp
 (defun f (x) x) *→* F
 (compiled-function-p #'f)
*→ false*
\OV true
 (compiled-function-p 'f) *→ false*
 (compile 'f) *→* F
 (compiled-function-p #'f) *→ true*
 (compiled-function-p 'f) *→ false*
 (compiled-function-p (compile nil '(lambda (x) x)))
*→ true*
 (compiled-function-p #'(lambda (x) x))
*→ false*
\OV true
 (compiled-function-p '(lambda (x) x)) *→ false*

```


```lisp
 (compiled-function-p \param{object}) \EQ (typep \param{object} 'compiled-function)

```


```lisp
%  (declaim (special \i{name}))
%  (setf (symbol-value '\i{name}) \i{initial-value})
%  (setf (documentation '\i{name} 'variable) '\i{documentation})
% 
```


```lisp
 (setf (symbol-value '\i{name}) \i{initial-value})
 (setf (documentation '\i{name} 'variable) '\i{documentation})

```


```lisp
 (defconstant this-is-a-constant 'never-changing "for a test") *→* THIS-IS-A-CONSTANT
this-is-a-constant *→* NEVER-CHANGING
 (documentation 'this-is-a-constant 'variable) *→* "for a test"
 (constantp 'this-is-a-constant) *→ true*

```


```lisp
 (defparameter *p* 1) *→* *P*
 *p* *→* 1
 (constantp '*p*) *→ false*
 (setq *p* 2) *→* 2
 (defparameter *p* 3) *→* *P*
 *p* *→* 3

 (defvar *v* 1) *→* *V*
 *v* *→* 1
 (constantp '*v*) *→ false*
 (setq *v* 2) *→* 2
 (defvar *v* 3) *→* *V*
 *v* *→* 2

 (defun foo ()
   (let ((*p* 'p) (*v* 'v))
     (bar))) *→* FOO
 (defun bar () (list *p* *v*)) *→* BAR
 (foo) *→* (P V)

```


```lisp
 (defvar *the-interesting-numbers* '())
 (defmacro define-interesting-number (name n)
   `(progn (defvar ,name ,n)
           (pushnew ,name *the-interesting-numbers*)
           ',name))
 (define-interesting-number *my-height* 168) ;cm
 (define-interesting-number *my-weight* 13)  ;stones

```


```lisp
 (defparameter *default-beep-count* 3)
 (defun beep (&optional (n *default-beep-count*))
   (dotimes (i n) (si:%beep 1000. 100000.) (sleep 0.1)))

```


```lisp
 (defmacro defparameter (name initial-value 
                         &optional (documentation nil documentation-p))
   `(progn (declaim (special ,name))
           (setf (symbol-value ',name) ,initial-value)
           ,(when documentation-p
              `(setf (documentation ',name 'variable) ',documentation))
           ',name))
 (defmacro defvar (name &optional
                        (initial-value nil initial-value-p)
                        (documentation nil documentation-p))
   `(progn (declaim (special ,name))
           ,(when initial-value-p
              `(unless (boundp ',name)
                 (setf (symbol-value ',name) ,initial-value)))
           ,(when documentation-p
              `(setf (documentation ',name 'variable) ',documentation))
           ',name))

```


```lisp
 (defun iota (n) (loop for i from 1 to n collect i))       ;helper
 (destructuring-bind ((a &optional (b 'bee)) one two three)
     `((alpha) ,@(iota 3))
   (list a b three two one)) *→* (ALPHA BEE 3 2 1)

```


```lisp
 (let ((\param{var1} \param{init-form-1})
       (\param{var2} \param{init-form-2})
       ...
       (\param{varm} \param{init-form-m}))
   \param{declaration1}
   \param{declaration2}
   ...
   \param{declarationp}
   \param{form1}
   \param{form2}
   ...
   \param{formn})

```


```lisp
 (let* ((\param{var1} \param{init-form-1})
        (\param{var2} \param{init-form-2})
        ...
        (\param{varm} \param{init-form-m}))
   \param{declaration1}
   \param{declaration2}
   ...
   \param{declarationp}
   \param{form1}
   \param{form2}
   ...
   \param{formn})

```


```lisp
% (locally (declare (special x) (float y)) 
%   (let ((x 5) (y 10)) 
%     (print (+ x y))))
%
```


```lisp
 (setq a 'top) *→* TOP
 (defun dummy-function () a) *→* DUMMY-FUNCTION
 (let ((a 'inside) (b a))
    (format nil "~S ~S ~S" a b (dummy-function))) *→* "INSIDE TOP TOP" 
 (let* ((a 'inside) (b a))
    (format nil "~S ~S ~S" a b (dummy-function))) *→* "INSIDE INSIDE TOP" 
 (let ((a 'inside) (b a))
    (declare (special a))
    (format nil "~S ~S ~S" a b (dummy-function))) *→* "INSIDE TOP INSIDE"

```


```lisp
 (let (x)
   (declare (integer x))
   (setq x (gcd y z))
   ...)

```


```lisp
 (setq *x* 1) *→* 1
 (progv '(*x*) '(2) *x*) *→* 2
 *x* *→* 1

Assuming *x* is not globally special,

 (let ((*x* 3)) 
    (progv '(*x*) '(4) 
      (list *x* (symbol-value '*x*)))) *→* (3 4)

```


```lisp
 ;; A simple use of SETQ to establish values for variables.
 (setq a 1 b 2 c 3) *→* 3
 a *→* 1
 b *→* 2
 c *→* 3

 ;; Use of SETQ to update values by sequential assignment.
 (setq a (1+ b) b (1+ a) c (+ a b)) *→* 7
 a *→* 3
 b *→* 4
 c *→* 7

 ;; This illustrates the use of SETQ on a symbol macro.
 (let ((x (list 10 20 30)))
   (symbol-macrolet ((y (car x)) (z (cadr x)))
     (setq y (1+ z) z (1+ y))
     (list x y z)))
*→* ((21 22 30) 21 22)

```


```lisp
 ;; A simple use of PSETQ to establish values for variables.
 ;; As a matter of style, many programmers would prefer SETQ 
 ;; in a simple situation like this where parallel assignment
 ;; is not needed, but the two have equivalent effect.
 (psetq a 1 b 2 c 3) *→* NIL
 a *→* 1
 b *→* 2
 c *→* 3

 ;; Use of PSETQ to update values by parallel assignment.
 ;; The effect here is very different than if SETQ had been used.
 (psetq a (1+ b) b (1+ a) c (+ a b)) *→* NIL
 a *→* 3
 b *→* 2
 c *→* 3

 ;; Use of PSETQ on a symbol macro.
 (let ((x (list 10 20 30)))
   (symbol-macrolet ((y (car x)) (z (cadr x)))
     (psetq y (1+ z) z (1+ y))
     (list x y z)))
*→* ((21 11 30) 21 11)

 ;; Use of parallel assignment to swap values of A and B.
 (let ((a 1) (b 2))
   (psetq a b  b a)
   (values a b))
*→* 2, 1

```


```lisp
%  (block loser
%    (catch 'stuff
%       (mapcar #'(lambda (x) (if (numberp x)
%                                 (hairyfun x)
%                                 (return-from loser \nil)))
%                 items)))
% 
```


```lisp
 (block empty) *→* NIL
 (block whocares (values 1 2) (values 3 4)) *→* 3, 4
 (let ((x 1)) 
   (block stop (setq x 2) (return-from stop) (setq x 3))
   x) *→* 2
 (block early (return-from early (values 1 2)) (values 3 4)) *→* 1, 2
 (block outer (block inner (return-from outer 1)) 2) *→* 1
 (block twin (block twin (return-from twin 1)) 2) *→* 2
 ;; Contrast behavior of this example with corresponding example of CATCH.
 (block b
   (flet ((b1 () (return-from b 1)))
     (block b (b1) (print 'unreachable))
     2)) *→* 1

```


```lisp
 (catch 'dummy-tag 1 2 (throw 'dummy-tag 3) 4) *→* 3
 (catch 'dummy-tag 1 2 3 4) *→* 4
 (defun throw-back (tag) (throw tag t)) *→* THROW-BACK
 (catch 'dummy-tag (throw-back 'dummy-tag) 2) *→* T

 ;; Contrast behavior of this example with corresponding example of BLOCK.
 (catch 'c
   (flet ((c1 () (throw 'c 1)))
     (catch 'c (c1) (print 'unreachable))
     2)) *→* 2

```


```lisp
 (tagbody
   (setq val 2)
   (go lp)
   (incf val 3)
   lp (incf val 4)) *→* NIL
 val *→* 6 

```


```lisp
 (let ((a nil)) 
   (tagbody t (setq a #'(lambda () (go t))))
   (funcall a))

```


```lisp
 (funcall (block nil
            (tagbody a (return #'(lambda () (go a))))))

```


```lisp
 (block alpha (return-from alpha) 1) *→* NIL
 (block alpha (return-from alpha 1) 2) *→* 1
 (block alpha (return-from alpha (values 1 2)) 3) *→* 1, 2
 (let ((a 0))
    (dotimes (i 10) (incf a) (when (oddp i) (return)))
    a) *→* 2
 (defun temp (x)
    (if x (return-from temp 'dummy))
    44) *→* TEMP
 (temp nil) *→* 44
 (temp t) *→* DUMMY
 (block out
   (flet ((exit (n) (return-from out n)))
     (block out (exit 1)))
   2) *→* 1
 (block nil   
   (unwind-protect (return-from nil 1)
     (return-from nil 2)))
*→* 2
 (dolist (flag '(nil t))
   (block nil
     (let ((x 5))
       (declare (special x))
       (unwind-protect (return-from nil)
         (print x))))
   (print 'here))
\OUT 5
\OUT HERE
\OUT 5
\OUT HERE
*→* NIL
 (dolist (flag '(nil t))
   (block nil
     (let ((x 5))
       (declare (special x))
       (unwind-protect
           (if flag (return-from nil))
         (print x))))
   (print 'here))
\OUT 5
\OUT HERE
\OUT 5
\OUT HERE
*→* NIL

```


```lisp
 (funcall (block nil #'(lambda () (return-from nil)))) is an error.

```


```lisp
 (block nil (return) 1) *→* NIL
 (block nil (return 1) 2) *→* 1
 (block nil (return (values 1 2)) 3) *→* 1, 2
 (block nil (block alpha (return 1) 2)) *→* 1
 (block alpha (block nil (return 1)) 2) *→* 2
 (block nil (block nil (return 1) 2)) *→* 1

```


```lisp
 (return) \EQ (return-from nil)
 (return \param{form}) \EQ (return-from nil \param{form})

```


```lisp
 (let (val)
    (tagbody
      (setq val 1)
      (go point-a)
      (incf val 16)
     point-c
      (incf val 04)
      (go point-b)
      (incf val 32)
     point-a
      (incf val 02)
      (go point-c)
      (incf val 64)
     point-b
      (incf val 08))
    val)
*→* 15
 (defun f1 (flag)
   (let ((n 1))
     (tagbody 
       (setq n (f2 flag #'(lambda () (go out))))
      out
       (prin1 n))))
*→* F1
 (defun f2 (flag escape)
   (if flag (funcall escape) 2))
*→* F2
 (f1 nil)
\OUT 2
*→* NIL
 (f1 t)
\OUT 1
*→* NIL

```


```lisp
 (catch 'result
    (setq i 0 j 0)
    (loop (incf j 3) (incf i)
          (if (= i 3) (throw 'result (values i j))))) *→* 3, 9


```


```lisp
 (catch nil 
   (unwind-protect (throw nil 1)
     (throw nil 2))) *→* 2

```


```lisp
 (catch 'a
   (catch 'b
     (unwind-protect (throw 'a 1)
       (throw 'b 2))))

```


```lisp
 (catch 'foo
         (format t "The inner catch returns ~s.~%"
                 (catch 'foo
                     (unwind-protect (throw 'foo :first-throw)
                         (throw 'foo :second-throw))))
         :outer-catch)
\OUT The inner catch returns :SECOND-THROW
*→* :OUTER-CATCH

```


```lisp
%  (catch 'foo
%    (catch 'bar
%        (unwind-protect (throw 'foo 3)
%          (throw 'bar 4)
%          (print 'xxx))))
% 
```


```lisp
 (tagbody
   (let ((x 3))
     (unwind-protect
       (if (numberp x) (go out))
       (print x)))
  out
   ...)

```


```lisp
 (defun dummy-function (x)
    (setq state 'running)
    (unless (numberp x) (throw 'abort 'not-a-number))
    (setq state (1+ x))) *→* DUMMY-FUNCTION
 (catch 'abort (dummy-function 1)) *→* 2
 state *→* 2
 (catch 'abort (dummy-function 'trash)) *→* NOT-A-NUMBER
 state *→* RUNNING
 (catch 'abort (unwind-protect (dummy-function 'trash) 
                  (setq state 'aborted))) *→* NOT-A-NUMBER
 state *→* ABORTED

```


```lisp
 (unwind-protect
   (progn (incf *access-count*)
          (perform-access))
   (decf *access-count*))

```


```lisp
 (let ((old-count *access-count*))
   (unwind-protect
     (progn (incf *access-count*)
            (perform-access))
     (setq *access-count* old-count)))

```


```lisp
;;; The following returns 2.
 (block nil   
   (unwind-protect (return 1)
     (return 2)))
 
;;; The following has undefined consequences.
 (block a    
   (block b
     (unwind-protect (return-from a 1)
       (return-from b 2))))
 
;;; The following returns 2.
 (catch nil 
   (unwind-protect (throw nil 1)
     (throw nil 2)))
 
;;; The following has undefined consequences because the catch of B is 
;;; passed over by the first THROW, hence portable programs must assume 
;;; its dynamic extent is terminated.  The binding of the catch tag is not
;;; yet disestablished and therefore it is the target of the second throw.
 (catch 'a
   (catch 'b
     (unwind-protect (throw 'a 1)
       (throw 'b 2))))
 
;;; The following prints "The inner catch returns :SECOND-THROW"
;;; and then returns :OUTER-CATCH.
 (catch 'foo
         (format t "The inner catch returns ~s.~%"
                 (catch 'foo
                     (unwind-protect (throw 'foo :first-throw)
                         (throw 'foo :second-throw))))
         :outer-catch)
 
 
;;; The following returns 10. The inner CATCH of A is passed over, but 
;;; because that CATCH is disestablished before the THROW to A is executed,
;;; it isn't seen.
 (catch 'a
   (catch 'b
     (unwind-protect (1+ (catch 'a (throw 'b 1)))
       (throw 'a 10))))
 
 
;;; The following has undefined consequences because the extent of
;;; the (CATCH 'BAR ...) exit ends when the (THROW 'FOO ...)
;;; commences.
 (catch 'foo
   (catch 'bar
       (unwind-protect (throw 'foo 3)
         (throw 'bar 4)
         (print 'xxx))))
 
 
;;; The following returns 4; XXX is not printed.
;;; The (THROW 'FOO ...) has no effect on the scope of the BAR
;;; catch tag or the extent of the (CATCH 'BAR ...) exit.
 (catch 'bar
   (catch 'foo
       (unwind-protect (throw 'foo 3)
         (throw 'bar 4)
         (print 'xxx))))
 
 
;;; The following prints 5.
 (block nil
   (let ((x 5))
     (declare (special x))
     (unwind-protect (return)
       (print x))))          

```


```lisp
 nil *→* NIL 

```


```lisp
 (not nil) *→* T
 (not '()) *→* T
 (not (integerp 'sss)) *→* T
 (not (integerp 1)) *→* NIL
 (not 3.7) *→* NIL
 (not 'apple) *→* NIL

```


```lisp
% (not x) \EQ (null x)
% 
```


```lisp
 t *→* T 
 (eq t 't) *→ true*
 (find-class 't) *→* #<CLASS T 610703333>
 (case 'a (a 1) (t 2)) *→* 1
 (case 'b (a 1) (t 2)) *→* 2
 (prin1 'hello t)
\OUT HELLO
*→* HELLO

```


```lisp
 (eq 'a 'b) *→ false*
 (eq 'a 'a) *→ true*
 (eq 3 3)
*→ true*
\OV false
 (eq 3 3.0) *→ false*
 (eq 3.0 3.0)
*→ true*
\OV false
 (eq #c(3 -4) #c(3 -4))
*→ true*
\OV false
 (eq #c(3 -4.0) #c(3 -4)) *→ false*
 (eq (cons 'a 'b) (cons 'a 'c)) *→ false*
 (eq (cons 'a 'b) (cons 'a 'b)) *→ false*
 (eq '(a . b) '(a . b))
*→ true*
\OV false
 (progn (setq x (cons 'a 'b)) (eq x x)) *→ true*
 (progn (setq x '(a . b)) (eq x x)) *→ true*
 (eq #\\A #\\A)
*→ true*
\OV false
 (let ((x "Foo")) (eq x x)) *→ true*
 (eq "Foo" "Foo")
*→ true*
\OV false
 (eq "Foo" (copy-seq "Foo")) *→ false*
 (eq "FOO" "foo") *→ false*
 (eq "string-seq" (copy-seq "string-seq")) *→ false*
 (let ((x 5)) (eq x x))
*→ true*
\OV false

```


```lisp
 (eql 'a 'b) *→ false*
 (eql 'a 'a) *→ true*
 (eql 3 3) *→ true*
 (eql 3 3.0) *→ false*
 (eql 3.0 3.0) *→ true*
 (eql #c(3 -4) #c(3 -4)) *→ true*
 (eql #c(3 -4.0) #c(3 -4)) *→ false*
 (eql (cons 'a 'b) (cons 'a 'c)) *→ false*
 (eql (cons 'a 'b) (cons 'a 'b)) *→ false*
 (eql '(a . b) '(a . b))
*→ true*
\OV false
 (progn (setq x (cons 'a 'b)) (eql x x)) *→ true*
 (progn (setq x '(a . b)) (eql x x)) *→ true*
 (eql #\\A #\\A) *→ true*
 (eql "Foo" "Foo")
*→ true*
\OV false
 (eql "Foo" (copy-seq "Foo")) *→ false*
 (eql "FOO" "foo") *→ false*

```


```lisp
 (equal 'a 'b) *→ false*
 (equal 'a 'a) *→ true*
 (equal 3 3) *→ true*
 (equal 3 3.0) *→ false*
 (equal 3.0 3.0) *→ true*
 (equal #c(3 -4) #c(3 -4)) *→ true*
 (equal #c(3 -4.0) #c(3 -4)) *→ false*
 (equal (cons 'a 'b) (cons 'a 'c)) *→ false*
 (equal (cons 'a 'b) (cons 'a 'b)) *→ true*
 (equal #\\A #\\A) *→ true*
 (equal #\\A #\\a) *→ false*
 (equal "Foo" "Foo") *→ true*
 (equal "Foo" (copy-seq "Foo")) *→ true*
 (equal "FOO" "foo") *→ false*
 (equal "This-string" "This-string") *→ true*
 (equal "This-string" "this-string") *→ false*

```


```lisp
 (equalp 'a 'b) *→ false*
 (equalp 'a 'a) *→ true*
 (equalp 3 3) *→ true*
 (equalp 3 3.0) *→ true*
 (equalp 3.0 3.0) *→ true*
 (equalp #c(3 -4) #c(3 -4)) *→ true*
 (equalp #c(3 -4.0) #c(3 -4)) *→ true*
 (equalp (cons 'a 'b) (cons 'a 'c)) *→ false*
 (equalp (cons 'a 'b) (cons 'a 'b)) *→ true*
 (equalp #\\A #\\A) *→ true*
 (equalp #\\A #\\a) *→ true*
 (equalp "Foo" "Foo") *→ true*
 (equalp "Foo" (copy-seq "Foo")) *→ true*
 (equalp "FOO" "foo") *→ true*

```


```lisp
 (setq array1 (make-array 6 :element-type 'integer
                            :initial-contents '(1 1 1 3 5 7))) 
*→* #(1 1 1 3 5 7)
 (setq array2 (make-array 8 :element-type 'integer
                            :initial-contents '(1 1 1 3 5 7 2 6)
                            :fill-pointer 6))
*→* #(1 1 1 3 5 7)
 (equalp array1 array2) *→ true*
 (setq vector1 (vector 1 1 1 3 5 7)) *→* #(1 1 1 3 5 7)
 (equalp array1 vector1) *→ true* 

```


```lisp
 (identity 101) *→* 101
 (mapcan #'identity (list (list 1 2 3) '(4 5 6))) *→* (1 2 3 4 5 6)

```


```lisp
(defun identity (x) x)

```


```lisp
 (funcall (complement #'zerop) 1) *→ true*
 (funcall (complement #'characterp) #\\A) *→ false*
 (funcall (complement #'member) 'a '(a b c)) *→ false*
 (funcall (complement #'member) 'd '(a b c)) *→ true*

```


```lisp
 (complement \i{x}) \EQ #'(lambda (&rest arguments) (not (apply \i{x} arguments)))

```


```lisp
(\i{xxx}-if-not \i{f} . \i{arguments}) \EQ (\i{xxx}-if (complement \i{f}) . \i{arguments})

```


```lisp
 (find-if-not #'zerop '(0 0 3)) \EQ
 (find-if (complement #'zerop) '(0 0 3)) *→* 3

```


```lisp
 (mapcar (constantly 3) '(a b c d)) *→* (3 3 3 3)
 (defmacro with-vars (vars &body forms)
   `((lambda ,vars ,@forms) ,@(mapcar (constantly nil) vars)))
*→* WITH-VARS
 (macroexpand '(with-vars (a b) (setq a 3 b (* a a)) (list a b)))
*→* ((LAMBDA (A B) (SETQ A 3 B (* A A)) (LIST A B)) NIL NIL), true

```


```lisp
 (defun constantly (object)
   #'(lambda (&rest arguments) object))

```


```lisp
 (every #'characterp "abc") *→ true*
 (some #'= '(1 2 3 4 5) '(5 4 3 2 1)) *→ true*
 (notevery #'< '(1 2 3 4) '(5 6 7 8) '(9 10 11 12)) *→ false*
 (notany #'> '(1 2 3 4) '(5 6 7 8) '(9 10 11 12)) *→ true* 

```


```lisp
 (notany \param{predicate} \starparam{sequence}) \EQ (not (some \param{predicate} \starparam{sequence}))
 (notevery \param{predicate} \starparam{sequence}) \EQ (not (every \param{predicate} \starparam{sequence}))

```


```lisp
 (if (and (>= n 0)
          (< n (length a-simple-vector))
          (eq (elt a-simple-vector n) 'foo))
     (princ "Foo!"))

```


```lisp
 (setq temp1 1 temp2 1 temp3 1) *→* 1 
 (and (incf temp1) (incf temp2) (incf temp3)) *→* 2 
 (and (eql 2 temp1) (eql 2 temp2) (eql 2 temp3)) *→ true*
 (decf temp3) *→* 1 
 (and (decf temp1) (decf temp2) (eq temp3 'nil) (decf temp3)) *→* NIL 
 (and (eql temp1 temp2) (eql temp2 temp3)) *→ true*
 (and) *→* T 

```


```lisp
% (and \param{form}) \EQ \param{form}
% (and \param{form1} \param{form2} ...) \EQ (when \param{form1} (and \param{form2} ...))
%
```


```lisp
 (and \param{form}) \EQ (let () \param{form})
 (and \param{form1} \param{form2} ...) \EQ (when \param{form1} (and \param{form2} ...))

```


```lisp
 (defun select-options ()
   (cond ((= a 1) (setq a 2))
         ((= a 2) (setq a 3))
         ((and (= a 3) (floor a 2)))
         (t (floor a 3)))) *→* SELECT-OPTIONS
 (setq a 1) *→* 1
 (select-options) *→* 2
 a *→* 2
 (select-options) *→* 3
 a *→* 3
 (select-options) *→* 1
 (setq a 5) *→* 5
 (select-options) *→* 1, 2

```


```lisp
 (if t 1) *→* 1
 (if nil 1 2) *→* 2 
 (defun test ()
   (dolist (truth-value '(t nil 1 (a b c)))
     (if truth-value (print 'true) (print 'false))
     (prin1 truth-value))) *→* TEST
 (test)
\OUT TRUE T
\OUT FALSE NIL
\OUT TRUE 1
\OUT TRUE (A B C)
*→* NIL

```


```lisp
 (if \param{test-form} \param{then-form} \param{else-form})
 \EQ (cond (\param{test-form} \param{then-form}) (t \param{else-form}))

```


```lisp
 (or) *→* NIL 
 (setq temp0 nil temp1 10 temp2 20 temp3 30) *→* 30
 (or temp0 temp1 (setq temp2 37)) *→* 10
 temp2 *→* 20
 (or (incf temp1) (incf temp2) (incf temp3)) *→* 11
 temp1 *→* 11
 temp2 *→* 20
 temp3 *→* 30
 (or (values) temp1) *→* 11
 (or (values temp1 temp2) temp3) *→* 11
 (or temp0 (values temp1 temp2)) *→* 11, 20
 (or (values temp0 temp1) (values temp2 temp3)) *→* 20, 30

```


```lisp
 (when t 'hello) *→* HELLO
 (unless t 'hello) *→* NIL
 (when nil 'hello) *→* NIL
 (unless nil 'hello) *→* HELLO
 (when t) *→* NIL
 (unless nil) *→* NIL
 (when t (prin1 1) (prin1 2) (prin1 3))
\OUT 123
*→* 3
 (unless t (prin1 1) (prin1 2) (prin1 3)) *→* NIL
 (when nil (prin1 1) (prin1 2) (prin1 3)) *→* NIL
 (unless nil (prin1 1) (prin1 2) (prin1 3))
\OUT 123
*→* 3
 (let ((x 3))
   (list (when (oddp x) (incf x) (list x))
         (when (oddp x) (incf x) (list x))
         (unless (oddp x) (incf x) (list x))
         (unless (oddp x) (incf x) (list x))
         (if (oddp x) (incf x) (list x)) 
         (if (oddp x) (incf x) (list x)) 
         (if (not (oddp x)) (incf x) (list x)) 
         (if (not (oddp x)) (incf x) (list x))))
*→* ((4) NIL (5) NIL 6 (6) 7 (7))

```


```lisp
 (when \param{test} \plus{\curly{\param{form}}}) \EQ (and \param{test} (progn \plus{\curly{\param{form}}}))
 (when \param{test} \plus{\curly{\param{form}}}) \EQ (cond (\param{test} \plus{\curly{\param{form}}}))
 (when \param{test} \plus{\curly{\param{form}}}) \EQ (if \param{test} (progn \plus{\curly{\param{form}}}) nil)
 (when \param{test} \plus{\curly{\param{form}}}) \EQ (unless (not \param{test}) \plus{\curly{\param{form}}})
 (unless \param{test} \plus{\curly{\param{form}}}) \EQ (cond ((not \param{test}) \plus{\curly{\param{form}}}))
 (unless \param{test} \plus{\curly{\param{form}}}) \EQ (if \param{test} nil (progn \plus{\curly{\param{form}}}))
 (unless \param{test} \plus{\curly{\param{form}}}) \EQ (when (not \param{test}) \plus{\curly{\param{form}}})

```


```lisp
 (dolist (k '(1 2 3 :four #\\v () t 'other))
    (format t "~S "
       (case k ((1 2) 'clause1)
               (3 'clause2)
               (nil 'no-keys-so-never-seen)
               ((nil) 'nilslot)
               ((:four #\\v) 'clause4)
               ((t) 'tslot)
               (otherwise 'others)))) 
\OUT CLAUSE1 CLAUSE1 CLAUSE2 CLAUSE4 CLAUSE4 NILSLOT TSLOT OTHERS 
*→* NIL
 (defun add-em (x) (apply #'+ (mapcar #'decode x)))
*→* ADD-EM
 (defun decode (x)
   (ccase x
     ((i uno) 1)
     ((ii dos) 2)
     ((iii tres) 3)
     ((iv cuatro) 4)))
*→* DECODE
 (add-em '(uno iii)) *→* 4
 (add-em '(uno iiii))
\OUT Error: The value of X, IIII, is not I, UNO, II, DOS, III,
\OUT        TRES, IV, or CUATRO.
\OUT  1: Supply a value to use instead.
\OUT  2: Return to Lisp Toplevel.
\OUT Debug> \IN{:CONTINUE 1}
\OUT Value to evaluate and use for X: \IN{'IV}
*→* 5

```


```lisp
(case \param{test-key}
  \star{\curly{((\starparam{key}) \starparam{form})}})
\EQ
(let ((#1=#:g0001 \param{test-key}))
  (cond \star{\curly{((member #1# '(\starparam{key})) \starparam{form})}}))

```


```lisp
;;; (Note that the parts of this example which use TYPE-OF 
;;;  are implementation-dependent.)
 (defun what-is-it (x)
   (format t "~&~S is ~A.~%"
           x (typecase x
               (float "a float")
               (null "a symbol, boolean false, or the empty list")
               (list "a list")
               (t (format nil "a(n) ~(~A~)" (type-of x))))))
*→* WHAT-IS-IT
 (map 'nil #'what-is-it '(nil (a b) 7.0 7 box))
\OUT NIL is a symbol, boolean false, or the empty list.
\OUT (A B) is a list.
\OUT 7.0 is a float.
\OUT 7 is a(n) integer.
\OUT BOX is a(n) symbol.
*→* NIL
 (setq x 1/3)
*→* 1/3
 (ctypecase x
     (integer (* x 4))
     (symbol  (symbol-value x)))
\OUT Error: The value of X, 1/3, is neither an integer nor a symbol.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a value to use instead.
\OUT  2: Return to Lisp Toplevel.
\OUT Debug> \IN{:CONTINUE 1}
\OUT Use value: \IN{3.7}
\OUT Error: The value of X, 3.7, is neither an integer nor a symbol.
\OUT To continue, type :CONTINUE followed by an option number:
\OUT  1: Specify a value to use instead.
\OUT  2: Return to Lisp Toplevel.
\OUT Debug> \IN{:CONTINUE 1}
\OUT Use value: \IN{12}
*→* 48
 x *→* 12

```


```lisp
(typecase \param{test-key}
  \star{\curly{(\param{type} \starparam{form})}})
\EQ
(let ((#1=#:g0001 \param{test-key}))
  (cond \star{\curly{((typep #1# '\param{type}) \starparam{form})}}))

```


```lisp
 (multiple-value-bind (f r) 
     (floor 130 11)
   (list f r)) *→* (11 9)

```


```lisp
 (multiple-value-bind (\starparam{var}) \param{values-form} \starparam{form})
 \EQ (multiple-value-call #'(lambda (&optional \starparam{var} &rest #1=#:ignore)
                             (declare (ignore #1#))
                             \starparam{form})
                         \param{values-form})

```


```lisp
 (multiple-value-call #'list 1 '/ (values 2 3) '/ (values) '/ (floor 2.5))
*→* (1 / 2 3 / / 2 0.5)
 (+ (floor 5 3) (floor 19 4)) \EQ (+ 1 4)
*→* 5
 (multiple-value-call #'+ (floor 5 3) (floor 19 4)) \EQ (+ 1 2 4 3)
*→* 10

```


```lisp
 (multiple-value-list (floor -3 4)) *→* (-1 1)

```


```lisp
 (multiple-value-list form) \EQ (multiple-value-call #'list form)

```


```lisp
 (setq temp '(1 2 3)) *→* (1 2 3)
 (multiple-value-prog1
    (values-list temp)
    (setq temp nil)
    (values-list temp)) *→* 1, 2, 3

```


```lisp
 (multiple-value-setq (\i{symbol}\subOne ... \i{symbol}\subN) \i{value-producing-form})

```


```lisp
 (values (setf (values \i{symbol}\subOne ... \i{symbol}\subN) \i{value-producing-form}))

```


```lisp
 (multiple-value-setq (quotient remainder) (truncate 3.2 2)) *→* 1
 quotient *→* 1
 remainder *→* 1.2
 (multiple-value-setq (a b c) (values 1 2)) *→* 1
 a *→* 1
 b *→* 2
 c *→* NIL
 (multiple-value-setq (a b) (values 4 5 6)) *→* 4
 a *→* 4
 b *→* 5

```


```lisp
 (values) *→* \novalues
 (values 1) *→* 1
 (values 1 2) *→* 1, 2
 (values 1 2 3) *→* 1, 2, 3
 (values (values 1 2 3) 4 5) *→* 1, 4, 5
 (defun polar (x y)
   (values (sqrt (+ (* x x) (* y y))) (atan y x))) *→* POLAR
 (multiple-value-bind (r theta) (polar 3.0 4.0)
   (vector r theta))
*→* #(5.0 0.927295)

```


```lisp
 (defun foo (x y)
   (floor (+ x y) y)) *→* FOO

```


```lisp
 (defun foo (x y)
   (values (floor (+ x y) y))) *→* FOO

```


```lisp
 (values-list nil) *→* \novalues
 (values-list '(1)) *→* 1
 (values-list '(1 2)) *→* 1, 2
 (values-list '(1 2 3)) *→* 1, 2, 3

```


```lisp
 (values-list \param{list}) \EQ (apply #'values \param{list})

```


```lisp
 (nth-value 0 (values 'a 'b)) *→* A
 (nth-value 1 (values 'a 'b)) *→* B
 (nth-value 2 (values 'a 'b)) *→* NIL
 (let* ((x 83927472397238947423879243432432432)
        (y 32423489732)
        (a (nth-value 1 (floor x y)))
        (b (mod x y)))
   (values a b (= a b)))
*→* 3332987528, 3332987528, true

```


```lisp
 (nth-value \param{n} \param{form}) \EQ (nth \param{n} (multiple-value-list \param{form}))

```


```lisp
 (prog (var1 var2 (var3 init-form-3) var4 (var5 init-form-5))
       \starparam{declaration}
       statement1
  tag1
       statement2
       statement3
       statement4
  tag2
       statement5
       ...
       )

```


```lisp
(prog* ((y z) (x (car y)))
       (return x))

```


```lisp
 (setq a 1) *→* 1
 (prog ((a 2) (b a)) (return (if (= a b) '= '/=))) *→* /=
 (prog* ((a 2) (b a)) (return (if (= a b) '= '/=))) *→* =
 (prog () 'no-return-value) *→* NIL

```


```lisp
 (defun king-of-confusion (w)
   "Take a cons of two lists and make a list of conses.
    Think of this function as being like a zipper."
   (prog (x y z)          ;Initialize x, y, z to NIL
        (setq y (car w) z (cdr w))
    loop
        (cond ((null y) (return x))
              ((null z) (go err)))
    rejoin
        (setq x (cons (cons (car y) (car z)) x))
        (setq y (cdr y) z (cdr z))
        (go loop)
    err
        (cerror "Will self-pair extraneous items"
                "Mismatch - gleep!  ~S" y)
        (setq z y)
        (go rejoin))) *→* KING-OF-CONFUSION 

```


```lisp
 (defun prince-of-clarity (w)
   "Take a cons of two lists and make a list of conses.
    Think of this function as being like a zipper."
   (do ((y (car w) (cdr y))
        (z (cdr w) (cdr z))
        (x '\empty (cons (cons (car y) (car z)) x)))
       ((null y) x)
     (when (null z)
       (cerror "Will self-pair extraneous items"
              "Mismatch - gleep!  ~S" y)
       (setq z y)))) *→* PRINCE-OF-CLARITY 

```


```lisp
 (prog \param{variable-list} \param{declaration} . \param{body})
    \EQ (block nil (let \param{variable-list} \param{declaration} (tagbody . \param{body})))

```


```lisp
 (setq temp 1) *→* 1
 (prog1 temp (print temp) (incf temp) (print temp))
\OUT 1
\OUT 2
*→* 1
 (prog1 temp (setq temp nil)) *→* 2
 temp *→* NIL
 (prog1 (values 1 2 3) 4) *→* 1 
 (setq temp (list 'a 'b 'c))
 (prog1 (car temp) (setf (car temp) 'alpha)) *→* A
 temp *→* (ALPHA B C)
 (flet ((swap-symbol-values (x y)
          (setf (symbol-value x) 
                (prog1 (symbol-value y)
                       (setf (symbol-value y) (symbol-value x))))))
   (let ((*foo* 1) (*bar* 2))
     (declare (special *foo* *bar*))
     (swap-symbol-values '*foo* '*bar*)
     (values *foo* *bar*)))
*→* 2, 1
 (setq temp 1) *→* 1
 (prog2 (incf temp) (incf temp) (incf temp)) *→* 3
 temp *→* 4
 (prog2 1 (values 2 3 4) 5) *→* 2

```


```lisp
% (prog1 \starparam{form}) \EQ (values (multiple-value-prog1 \starparam{form}))
% (prog2 \param{form1} \starparam{form}) \EQ (progn \param{form1} (prog1 \starparam{form}))
%
```


```lisp
 (prog1 \starparam{form}) \EQ (values (multiple-value-prog1 \starparam{form}))
 (prog2 \param{form1} \starparam{form}) \EQ (let () \param{form1} (prog1 \starparam{form}))

```


```lisp
 (progn) *→* NIL
 (progn 1 2 3) *→* 3
 (progn (values 1 2 3)) *→* 1, 2, 3
 (setq a 1) *→* 1
 (if a
      (progn (setq a nil) 'here)
      (progn (setq a t) 'there)) *→* HERE
 a *→* NIL

```


```lisp
 (defmacro \param{name} (reference . \param{lambda-list})
   \param{documentation}
   \bq(setf ,reference
          (\param{function} ,reference ,\i{arg1} ,\i{arg2} ...)))

```


```lisp
 (define-modify-macro appendf (&rest args) 
    append "Append onto list") *→* APPENDF
 (setq x '(a b c) y x) *→* (A B C)
 (appendf x '(d e f) '(1 2 3)) *→* (A B C D E F 1 2 3)
 x *→* (A B C D E F 1 2 3)
 y *→* (A B C)
 (define-modify-macro new-incf (&optional (delta 1)) +)
 (define-modify-macro unionf (other-set &rest keywords) union)

```


```lisp
%  (defsetf access-fn update-fn \lbracket\ doc-string\rbracket)
% 
```


```lisp
%  (defsetf access-fn lambda-list (store-variable) . body)
% 
```


```lisp
 (defsetf symbol-value set)

```


```lisp
 (defsetf car rplaca)

```


```lisp
 (defun middleguy (x) (nth (truncate (1- (list-length x)) 2) x)) *→* MIDDLEGUY
 (defun set-middleguy (x v)
    (unless (null x)
      (rplaca (nthcdr (truncate (1- (list-length x)) 2) x) v))
    v) *→* SET-MIDDLEGUY
 (defsetf middleguy set-middleguy) *→* MIDDLEGUY
 (setq a (list 'a 'b 'c 'd)
       b (list 'x)
       c (list 1 2 3 (list 4 5 6) 7 8 9)) *→* (1 2 3 (4 5 6) 7 8 9)
 (setf (middleguy a) 3) *→* 3
 (setf (middleguy b) 7) *→* 7
 (setf (middleguy (middleguy c)) 'middleguy-symbol) *→* MIDDLEGUY-SYMBOL
 a *→* (A 3 C D)
 b *→* (7)
 c *→* (1 2 3 (4 MIDDLEGUY-SYMBOL 6) 7 8 9)

```


```lisp
 (defsetf subseq (sequence start &optional end) (new-sequence)
   `(progn (replace ,sequence ,new-sequence
                    :start1 ,start :end1 ,end)
           ,new-sequence)) *→* SUBSEQ

```


```lisp
 (defvar *xy* (make-array '(10 10)))
 (defun xy (&key ((x x) 0) ((y y) 0)) (aref *xy* x y)) *→* XY
 (defun set-xy (new-value &key ((x x) 0) ((y y) 0))
   (setf (aref *xy* x y) new-value)) *→* SET-XY
 (defsetf xy (&key ((x x) 0) ((y y) 0)) (store)
   `(set-xy ,store 'x ,x 'y ,y)) *→* XY
 (get-setf-expansion '(xy a b))
*→* (#:t0 #:t1),
   (a b),
   (#:store),
   ((lambda (&key ((x #:x)) ((y #:y))) 
      (set-xy #:store 'x #:x 'y #:y))
    #:t0 #:t1),
   (xy #:t0 #:t1)
 (xy 'x 1) *→* NIL
 (setf (xy 'x 1) 1) *→* 1
 (xy 'x 1) *→* 1
 (let ((a 'x) (b 'y))
   (setf (xy a 1 b 2) 3)
   (setf (xy b 5 a 9) 14))
*→* 14
 (xy 'y 0 'x 1) *→* 1
 (xy 'x 1 'y 2) *→* 3

```


```lisp
 (defun lastguy (x) (car (last x))) *→* LASTGUY
 (define-setf-expander lastguy (x &environment env)
   "Set the last element in a list to the given value."
   (multiple-value-bind (dummies vals newval setter getter)
       (get-setf-expansion x env)
     (let ((store (gensym)))
       (values dummies
               vals
               `(,store)
               `(progn (rplaca (last ,getter) ,store) ,store)
               `(lastguy ,getter))))) *→* LASTGUY
 (setq a (list 'a 'b 'c 'd)
       b (list 'x)
       c (list 1 2 3 (list 4 5 6))) *→* (1 2 3 (4 5 6))
 (setf (lastguy a) 3) *→* 3
 (setf (lastguy b) 7) *→* 7
 (setf (lastguy (lastguy c)) 'lastguy-symbol) *→* LASTGUY-SYMBOL
 a *→* (A B C 3)
 b *→* (7)
 c *→* (1 2 3 (4 5 LASTGUY-SYMBOL))

```


```lisp
;;; Setf expander for the form (LDB bytespec int).
;;; Recall that the int form must itself be suitable for SETF.
 (define-setf-expander ldb (bytespec int &environment env)
   (multiple-value-bind (temps vals stores
                          store-form access-form)
       (get-setf-expansion int env);Get setf expansion for int.
     (let ((btemp (gensym))     ;Temp var for byte specifier.
           (store (gensym))     ;Temp var for byte to store.
           (stemp (first stores))) ;Temp var for int to store.
       (if (cdr stores) (error "Can't expand this."))
;;; Return the setf expansion for LDB as five values.
       (values (cons btemp temps)       ;Temporary variables.
               (cons bytespec vals)     ;Value forms.
               (list store)             ;Store variables.
               \bq(let ((,stemp (dpb ,store ,btemp ,access-form)))
                  ,store-form
                  ,store)               ;Storing form.
               \bq(ldb ,btemp ,access-form) ;Accessing form.
              ))))

```


```lisp
 (get-setf-expansion 'x)
*→* NIL, NIL, (#:G0001), (SETQ X #:G0001), X 

```


```lisp
%  (define-setf-expander multivalue (x)
%      (values '() '() `(,(gensym) ,(gensym)) `(setq ,x 3) '4))
% *→* MULTIVALUE
%  (get-setf-expansion '(multivalue dummy-symbol))
% *→* NIL, NIL, (#:G0002 #:G0003), (SETQ DUMMY-SYMBOL 3), 4
% 
```


```lisp
;;; This macro is like POP 

 (defmacro xpop (place &environment env)
   (multiple-value-bind (dummies vals new setter getter)
                        (get-setf-expansion place env)
      `(let* (,@(mapcar #'list dummies vals) (,(car new) ,getter))
         (if (cdr new) (error "Can't expand this."))
         (prog1 (car ,(car new))
                (setq ,(car new) (cdr ,(car new)))
                ,setter))))
 
 (defsetf frob (x) (value) 
     `(setf (car ,x) ,value)) *→* FROB
;;; The following is an error; an error might be signaled at macro expansion time
 (flet ((frob (x) (cdr x)))  ;Invalid
   (xpop (frob z)))
 

```


```lisp
% (defmacro setf (reference value)
%   (multiple-value-bind (vars vals stores store-form access-form)
%       (get-setf-expansion reference)
%     (declare (ignore access-form))
%     \bq(let* ,(mapcar #'list
%                    (append vars stores)
%                    (append vals (list value)))
%        ,store-form)))
%
```


```lisp
 (setf place-1 newvalue-1
       place-2 newvalue-2
       ...
       place-N newvalue-N)

```


```lisp
 (progn (setf place-1 newvalue-1)
        (setf place-2 newvalue-2)
        ...
        (setf place-N newvalue-N))

```


```lisp
 (setq x (cons 'a 'b) y (list 1 2 3)) *→* (1 2 3) 
 (setf (car x) 'x (cadr y) (car x) (cdr x) y) *→* (1 X 3) 
 x *→* (X 1 X 3) 
 y *→* (1 X 3) 
 (setq x (cons 'a 'b) y (list 1 2 3)) *→* (1 2 3) 
 (psetf (car x) 'x (cadr y) (car x) (cdr x) y) *→* NIL 
 x *→* (X 1 A 3) 
 y *→* (1 A 3) 

```


```lisp
 (setq x (list 1 2 3) y 'trash) *→* TRASH
 (shiftf y x (cdr x) '(hi there)) *→* TRASH
 x *→* (2 3)
 y *→* (1 HI THERE)

 (setq x (list 'a 'b 'c)) *→* (A B C)
 (shiftf (cadr x) 'z) *→* B
 x *→* (A Z C)
 (shiftf (cadr x) (cddr x) 'q) *→* Z
 x *→* (A (C) . Q)
 (setq n 0) *→* 0
 (setq x (list 'a 'b 'c 'd)) *→* (A B C D)
 (shiftf (nth (setq n (+ n 1)) x) 'z) *→* B
 x *→* (A Z C D)

```


```lisp
 (let ((var1 \param{place1})
       (var2 \param{place2})
       ...
       (varn \param{placen})
       (var0 \param{newvalue}))
   (setf \param{place1} var2)
   (setf \param{place2} var3)
   ...
   (setf \param{placen} var0)
   var1)

```


```lisp
 (setq n 0) *→* 0
 (setq x (list 'a 'b 'c 'd)) *→* (A B C D)
 (prog1 (nth (setq n (+ n 1)) x)
        (setf (nth (setq n (+ n 1)) x) 'z)) *→* B
 x *→* (A B Z D)

```


```lisp
 (let ((n 0)
        (x (list 'a 'b 'c 'd 'e 'f 'g)))
    (rotatef (nth (incf n) x)
             (nth (incf n) x)
             (nth (incf n) x))
    x) *→* (A C D B E F G)

```


```lisp
 (psetf \param{place1} \param{place2}
        \param{place2} \param{place3}
        ...
        \param{placen} \param{place1})

```


```lisp
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 46142754>
 (setf (gethash "one" table) 1) *→* 1
 (gethash "one" table) *→* NIL, false
 (setq table (make-hash-table :test 'equal)) *→* #<HASH-TABLE EQUAL 0/139 46145547>
 (setf (gethash "one" table) 1) *→* 1
 (gethash "one" table) *→* 1, T
 (make-hash-table :rehash-size 1.5 :rehash-threshold 0.7) 
*→* #<HASH-TABLE EQL 0/120 46156620>

```


```lisp
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32511220>
 (hash-table-p table) *→ true*
 (hash-table-p 37) *→ false*
 (hash-table-p '((a . 1) (b . 2))) *→ false*

```


```lisp
 (hash-table-p \param{object}) \EQ (typep \param{object} 'hash-table)

```


```lisp
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32115135>
 (hash-table-count table) *→* 0
 (setf (gethash 57 table) "fifty-seven") *→* "fifty-seven"
 (hash-table-count table) *→* 1
 (dotimes (i 100) (setf (gethash i table) i)) *→* NIL
 (hash-table-count table) *→* 100

```


```lisp
 (hash-table-count \param{table}) \EQ
 (loop for value being the hash-values of \param{table} count t) \EQ
 (let ((total 0))
   (maphash #'(lambda (key value)
                (declare (ignore key value))
                (incf total))
            \param{table})
   total)

```


```lisp
 (setq table (make-hash-table :size 100 :rehash-size 1.4))
*→* #<HASH-TABLE EQL 0/100 2556371>
 (hash-table-rehash-size table) *→* 1.4

```


```lisp
 (setq table (make-hash-table :size 100 :rehash-threshold 0.5))
*→* #<HASH-TABLE EQL 0/100 2562446>
 (hash-table-rehash-threshold table) *→* 0.5

```


```lisp
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32206334>
 (gethash 1 table) *→* NIL, false
 (gethash 1 table 2) *→* 2, false
 (setf (gethash 1 table) "one") *→* "one"
 (setf (gethash 2 table "two") "two") *→* "two"
 (gethash 1 table) *→* "one", true
 (gethash 2 table) *→* "two", true
 (gethash nil table) *→* NIL, false
 (setf (gethash nil table) nil) *→* NIL 
 (gethash nil table) *→* NIL, true
 (defvar *counters* (make-hash-table)) *→* *COUNTERS*
 (gethash 'foo *counters*) *→* NIL, false
 (gethash 'foo *counters* 0) *→* 0, false
 (defmacro how-many (obj) `(values (gethash ,obj *counters* 0))) *→* HOW-MANY
 (defun count-it (obj) (incf (how-many obj))) *→* COUNT-IT
 (dolist (x '(bar foo foo bar bar baz)) (count-it x))
 (how-many 'foo) *→* 2
 (how-many 'bar) *→* 3
 (how-many 'quux) *→* 0

```


```lisp
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32115666>
 (setf (gethash 100 table) "C") *→* "C"
 (gethash 100 table) *→* "C", true
 (remhash 100 table) *→ true*
 (gethash 100 table) *→* NIL, false
 (remhash 100 table) *→ false*

```


```lisp
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32304110>
 (dotimes (i 10) (setf (gethash i table) i)) *→* NIL
 (let ((sum-of-squares 0))
    (maphash #'(lambda (key val) 
                 (let ((square (* val val)))
                   (incf sum-of-squares square)
                   (setf (gethash key table) square)))
             table)
    sum-of-squares) *→* 285
 (hash-table-count table) *→* 10
 (maphash #'(lambda (key val)
               (when (oddp val) (remhash key table)))
           table) *→* NIL
 (hash-table-count table) *→* 5
 (maphash #'(lambda (k v) (print (list k v))) table)
(0 0) 
(8 64) 
(2 4) 
(6 36) 
(4 16) 
*→* NIL

```


```lisp
 (defun test-hash-table-iterator (hash-table)
   (let ((all-entries '())
         (generated-entries '())
         (unique (list nil)))
     (maphash #'(lambda (key value) (push (list key value) all-entries))
              hash-table)
     (with-hash-table-iterator (generator-fn hash-table)
       (loop     
         (multiple-value-bind (more? key value) (generator-fn)
           (unless more? (return))
           (unless (eql value (gethash key hash-table unique))
             (error "Key ~S not found for value ~S" key value))
           (push (list key value) generated-entries))))
     (unless (= (length all-entries)
                (length generated-entries)
                (length (union all-entries generated-entries
                               :key #'car :test (hash-table-test hash-table))))
       (error "Generated entries and Maphash entries don't correspond"))
     t))

```


```lisp
 (defun maphash (function hash-table)
   (with-hash-table-iterator (next-entry hash-table)
     (loop (multiple-value-bind (more key value) (next-entry)
             (unless more (return nil))
             (funcall function key value)))))

```


```lisp
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32004073>
 (dotimes (i 100) (setf (gethash i table) (format nil "~R" i))) *→* NIL
 (hash-table-count table) *→* 100
 (gethash 57 table) *→* "fifty-seven", true
 (clrhash table) *→* #<HASH-TABLE EQL 0/120 32004073>
 (hash-table-count table) *→* 0
 (gethash 57 table) *→* NIL, false

```


```lisp
 (= (sxhash (list 'list "ab")) (sxhash (list 'list "ab"))) *→ true*
 (= (sxhash "a") (sxhash (make-string 1 :initial-element #\\a))) *→ true*
 (let ((r (make-random-state)))
   (= (sxhash r) (sxhash (make-random-state r))))
*→* \term{implementation-dependent}

```


```lisp
 (do ((temp-one 1 (1+ temp-one))
       (temp-two 0 (1- temp-two)))
      ((> (- temp-one temp-two) 5) temp-one)) *→* 4

 (do ((temp-one 1 (1+ temp-one))
       (temp-two 0 (1+ temp-one)))     
      ((= 3 temp-two) temp-one)) *→* 3

 (do* ((temp-one 1 (1+ temp-one))
        (temp-two 0 (1+ temp-one)))
       ((= 3 temp-two) temp-one)) *→* 2                     

 (do ((j 0 (+ j 1)))
     (nil)                       ;Do forever.
   (format t "~%Input ~D:" j)
   (let ((item (read)))
     (if (null item) (return)   ;Process items until NIL seen.
         (format t "~&Output ~D: ~S" j item))))
\OUT Input 0: \IN{banana}
\OUT Output 0: BANANA
\OUT Input 1: \IN{(57 boxes)}
\OUT Output 1: (57 BOXES)
\OUT Input 2: \IN{NIL}
*→* NIL

 (setq a-vector (vector 1 nil 3 nil))
 (do ((i 0 (+ i 1))     ;Sets every null element of a-vector to zero.
      (n (array-dimension a-vector 0)))
     ((= i n))
   (when (null (aref a-vector i))
     (setf (aref a-vector i) 0))) *→* NIL
a-vector *→* #(1 0 3 0)

```


```lisp
 (do ((x e (cdr x))
      (oldx x x))
     ((null x))
   body)

```


```lisp
 (do ((x foo (cdr x))
      (y bar (cdr y))
      (z '() (cons (f (car x) (car y)) z)))
     ((or (null x) (null y))
      (nreverse z)))

```


```lisp
 (defun list-reverse (list)
        (do ((x list (cdr x))
             (y '() (cons (car x) y)))
            ((endp x) y)))

```


```lisp
 (defun ribcage-lookup (sym ribcage)           
        (do ((r ribcage (cdr r)))
            ((null r) nil)
          (do ((s (caar r) (cdr s))
               (v (cdar r) (cdr v))) 
              ((null s))
            (when (eq (car s) sym)
              (return-from ribcage-lookup (car v)))))) *→* RIBCAGE-LOOKUP

```


```lisp
 (block nil        
   (let ((var1 init1)
         (var2 init2)
         ...
         (varn initn))
     \i{declarations}
     (loop (when end-test (return (progn . result)))
           (tagbody . tagbody)
           (psetq var1 step1
                  var2 step2
                  ...
                  varn stepn))))

```


```lisp
 (dotimes (temp-one 10 temp-one)) *→* 10
 (setq temp-two 0) *→* 0
 (dotimes (temp-one 10 t) (incf temp-two)) *→* T
 temp-two *→* 10

```


```lisp
;;; True if the specified subsequence of the string is a
;;; palindrome (reads the same forwards and backwards).
 (defun palindromep (string \optional
                           (start 0)
                           (end (length string)))
   (dotimes (k (floor (- end start) 2) t)
    (unless (char-equal (char string (+ start k))
                        (char string (- end k 1)))
      (return nil))))
 (palindromep "Able was I ere I saw Elba") *→* T
 (palindromep "A man, a plan, a canal--Panama!") *→* NIL
 (remove-if-not #'alpha-char-p          ;Remove punctuation.
               "A man, a plan, a canal--Panama!")
*→* "AmanaplanacanalPanama"
 (palindromep
  (remove-if-not #'alpha-char-p
                "A man, a plan, a canal--Panama!")) *→* T
 (palindromep
  (remove-if-not
   #'alpha-char-p
   "Unremarkable was I ere I saw Elba Kramer, nu?")) *→* T
 (palindromep
  (remove-if-not
   #'alpha-char-p
   "A man, a plan, a cat, a ham, a yak,
                  a yam, a hat, a canal--Panama!")) *→* T

```


```lisp
 (setq temp-two '()) *→* NIL
 (dolist (temp-one '(1 2 3 4) temp-two) (push temp-one temp-two)) *→* (4 3 2 1)

 (setq temp-two 0) *→* 0
 (dolist (temp-one '(1 2 3 4)) (incf temp-two)) *→* NIL
 temp-two *→* 4

 (dolist (x '(a b c d)) (prin1 x) (princ " ")) 
\OUT A B C D 
*→* NIL

```


```lisp
;; An example of the simple form of LOOP.
 (defun sqrt-advisor ()
   (loop (format t "~&Number: ")
         (let ((n (parse-integer (read-line) :junk-allowed t)))
           (when (not n) (return))
           (format t "~&The square root of ~D is ~D.~%" n (sqrt n)))))
*→* SQRT-ADVISOR
 (sqrt-advisor)
\OUT Number: \IN{5\CRLF}
\OUT The square root of 5 is 2.236068.
\OUT Number: \IN{4\CRLF}
\OUT The square root of 4 is 2.
\OUT Number: \IN{done\CRLF}
*→* NIL

;; An example of the extended form of LOOP.
 (defun square-advisor ()
   (loop as n = (progn (format t "~&Number: ")
                       (parse-integer (read-line) :junk-allowed t))
         while n
         do (format t "~&The square of ~D is ~D.~%" n (* n n))))
*→* SQUARE-ADVISOR
 (square-advisor)
\OUT Number: \IN{4\CRLF}
\OUT The square of 4 is 16.
\OUT Number: \IN{23\CRLF}
\OUT The square of 23 is 529.
\OUT Number: \IN{done\CRLF}
*→* NIL

;; Another example of the extended form of LOOP.
 (loop for n from 1 to 10
       when (oddp n)
         collect n)
*→* (1 3 5 7 9)

```


```lisp
 (loop \starparam{compound-form}) \EQ (loop do \starparam{compound-form})

```


```lisp
;; Terminate the loop, but return the accumulated count.
 (loop for i in '(1 2 3 stop-here 4 5 6)
       when (symbolp i) do (loop-finish)
       count i)
*→* 3
 
;; The preceding loop is equivalent to:
 (loop for i in '(1 2 3 stop-here 4 5 6)
       until (symbolp i)
       count i)
*→* 3

;; While LOOP-FINISH can be used can be used in a variety of 
;; situations it is really most needed in a situation where a need
;; to exit is detected at other than the loop's `top level'
;; (where UNTIL or WHEN often work just as well), or where some 
;; computation must occur between the point where a need to exit is
;; detected and the point where the exit actually occurs.  For example:
 (defun tokenize-sentence (string)
   (macrolet ((add-word (wvar svar)
                `(when ,wvar
                   (push (coerce (nreverse ,wvar) 'string) ,svar)
                   (setq ,wvar nil))))
     (loop with word = '() and sentence = '() and endpos = nil
           for i below (length string)
           do (let ((char (aref string i)))
                (case char
                  (#\\Space (add-word word sentence))
                  (#\\. (setq endpos (1+ i)) (loop-finish))
                  (otherwise (push char word))))
           finally (add-word word sentence)
                   (return (values (nreverse sentence) endpos)))))
*→* TOKENIZE-SENTENCE
 
 (tokenize-sentence "this is a sentence. this is another sentence.")
*→* ("this" "is" "a" "sentence"), 19
 
 (tokenize-sentence "this is a sentence")
*→* ("this" "is" "a" "sentence"), NIL


```


```lisp
%  (loop (loop-finish))
% 
```


```lisp
%  (loop do (loop (loop-finish)))
% 
```


```lisp
 (max 3) *→* 3 
 (min 3) *→* 3
 (max 6 12) *→* 12 
 (min 6 12) *→* 6
 (max -6 -12) *→* -6 
 (min -6 -12) *→* -12
 (max 1 3 2 -7) *→* 3 
 (min 1 3 2 -7) *→* -7
 (max -2 3 0 7) *→* 7 
 (min -2 3 0 7) *→* -2
 (max 5.0 2) *→* 5.0 
 (min 5.0 2)
*→* 2
\OV 2.0
 (max 3.0 7 1)
*→* 7
\OV 7.0 
 (min 3.0 7 1)
*→* 1
\OV 1.0
 (max 1.0s0 7.0d0) *→* 7.0d0
 (min 1.0s0 7.0d0)
*→* 1.0s0
\OV 1.0d0
 (max 3 1 1.0s0 1.0d0)
*→* 3
\OV 3.0d0
 (min 3 1 1.0s0 1.0d0)
*→* 1
\OV 1.0s0 
\OV 1.0d0

```


```lisp
 (minusp -1) *→ true*
 (plusp 0) *→ false*
 (plusp least-positive-single-float) *→ true*

```


```lisp
 (zerop 0) *→ true*
 (zerop 1) *→ false*
 (zerop -0.0) *→ true*
 (zerop 0/100) *→ true*
 (zerop #c(0 0.0)) *→ true*

```


```lisp
 (zerop \param{number}) \EQ (= \param{number} 0)

```


```lisp
 (floor 3/2) *→* 1, 1/2
 (ceiling 3 2) *→* 2, -1
 (ffloor 3 2) *→* 1.0, 1
 (ffloor -4.7) *→* -5.0, 0.3
 (ffloor 3.5d0) *→* 3.0d0, 0.5d0
 (fceiling 3/2) *→* 2.0, -1/2
 (truncate 1) *→* 1, 0
 (truncate .5) *→* 0, 0.5
 (round .5) *→* 0, 0.5
 (ftruncate -7 2) *→* -3.0, -1
 (fround -7 2) *→* -4.0, 1
 (dolist (n '(2.6 2.5 2.4 0.7 0.3 -0.3 -0.7 -2.4 -2.5 -2.6))
   (format t "~&~4,1@F ~2,' D ~2,' D ~2,' D ~2,' D"
           n (floor n) (ceiling n) (truncate n) (round n)))
\OUT +2.6  2  3  2  3
\OUT +2.5  2  3  2  2
\OUT +2.4  2  3  2  2
\OUT +0.7  0  1  0  1
\OUT +0.3  0  1  0  0
\OUT -0.3 -1  0  0  0
\OUT -0.7 -1  0  0 -1
\OUT -2.4 -3 -2 -2 -2
\OUT -2.5 -3 -2 -2 -2
\OUT -2.6 -3 -2 -2 -3
*→* NIL

```


```lisp
 (floor 5 2) *→* 2, 1
 (floor (/ 5 2)) *→* 2, 1/2

```


```lisp
 (sin 0) *→* 0.0
 (cos 0.7853982) *→* 0.707107
 (tan #c(0 1)) *→* #C(0.0 0.761594)

```


```lisp
 (asin 0) *→* 0.0 
 (acos #c(0 1))  *→* #C(1.5707963267948966 -0.8813735870195432)
 (/ (atan 1 (sqrt 3)) 6)  *→* 0.087266 
 (atan #c(0 2)) *→* #C(-1.5707964 0.54930615)

```


```lisp
 ;; In each of the following computations, the precision depends 
 ;; on the implementation.  Also, if `long float' is treated by 
 ;; the implementation as equivalent to some other float format 
 ;; (e.g., `double float') the exponent marker might be the marker
 ;; for that equivalent (e.g., `D' instead of `L').
 pi *→* 3.141592653589793L0
 (cos pi) *→* -1.0L0

 (defun sin-of-degrees (degrees)
   (let ((x (if (floatp degrees) degrees (float degrees pi))))
     (sin (* x (/ (float pi x) 180)))))

```


```lisp
 (sinh 0) *→* 0.0 
 (cosh (complex 0 -1)) *→* #C(0.540302 -0.0)

```


```lisp
 (*) *→* 1
 (* 3 5) *→* 15
 (* 1.0 #c(22 33) 55/98) *→* #C(12.346938775510203 18.520408163265305)

```


```lisp
 (+) *→* 0
 (+ 1) *→* 1
 (+ 31/100 69/100) *→* 1
 (+ 1/5 0.8) *→* 1.0

```


```lisp
 (- 55.55) *→* -55.55
 (- #c(3 -5)) *→* #C(-3 5)
 (- 0) *→* 0
 (eql (- 0.0) -0.0) *→ true*
 (- #c(100 45) #c(0 45)) *→* 100
 (- 10 1 2 3 4) *→* 0

```


```lisp
 (/ 12 4) *→* 3
 (/ 13 4) *→* 13/4
 (/ -8) *→* -1/8
 (/ 3 4 5) *→* 3/20
 (/ 0.5) *→* 2.0
 (/ 20 5) *→* 4
 (/ 5 20) *→* 1/4
 (/ 60 -2 3 5.0) *→* -2.0
 (/ 2 #c(2 2)) *→* #C(1/2 -1/2)

```


```lisp
 (1+ 99) *→* 100 
 (1- 100) *→* 99 
 (1+ (complex 0.0)) *→* #C(1.0 0.0) 
 (1- 5/3) *→* 2/3 

```


```lisp
 (1+ \param{number}) \EQ (+ \param{number} 1)
 (1- \param{number}) \EQ (- \param{number} 1)

```


```lisp
 (abs 0) *→* 0
 (abs 12/13) *→* 12/13
 (abs -1.09) *→* 1.09
 (abs #c(5.0 -5.0)) *→* 7.071068
 (abs #c(5 5)) *→* 7.071068
 (abs #c(3/5 4/5)) *→* 1 or approximately 1.0
 (eql (abs -0.0) -0.0) *→ true*

```


```lisp
 (evenp 0) *→ true*
 (oddp 10000000000000000000000) *→ false*
 (oddp -1) *→ true*

```


```lisp
 (evenp \param{integer}) \EQ (not (oddp \param{integer}))
 (oddp \param{integer})  \EQ (not (evenp \param{integer}))

```


```lisp
 (expt x 0) \EQ (coerce 1 (type-of x))

```


```lisp
 (exp 0) *→* 1.0
 (exp 1) *→* 2.718282
 (exp (log 5)) *→* 5.0 
 (expt 2 8) *→* 256
 (expt 4 .5) *→* 2.0
 (expt #c(0 1) 2) *→* -1
 (expt #c(2 2) 3) *→* #C(-16 16)
 (expt #c(2 2) 4) *→* -64 

```


```lisp
 (setq x (exp (/ (* 2 pi #c(0 1)) 3)))         ;exp(2.pi.i/3)
 (expt x 3) *→* 1 ;except for round-off error
 (sqrt (expt x 3)) *→* 1 ;except for round-off error
 (expt x 3/2) *→* -1 ;except for round-off error

```


```lisp
 (gcd) *→* 0
 (gcd 60 42) *→* 6
 (gcd 3333 -33 101) *→* 1
 (gcd 3333 -33 1002001) *→* 11
 (gcd 91 -49) *→* 7
 (gcd 63 -42 35) *→* 7
 (gcd 5) *→* 5
 (gcd -4) *→* 4

```


```lisp
 (gcd b c ... z) \EQ (gcd (gcd a b) c ... z)

```


```lisp
 (setq n 0)
 (incf n) *→* 1      
 n *→* 1
 (decf n 3) *→* -2   
 n *→* -2
 (decf n -5) *→* 3      
 (decf n) *→* 2      
 (incf n 0.5) *→* 2.5
 (decf n) *→* 1.5
 n *→* 1.5

```


```lisp
%  (setf \param{place} (+ \param{place} \param{delta}))
% 
```


```lisp
 (lcm a b) \EQ (/ (abs (* a b)) (gcd a b))

```


```lisp
 (lcm a 0) \EQ (lcm 0 a) \EQ 0

```


```lisp
 (lcm a b c ... z) \EQ (lcm (lcm a b) c ... z)

```


```lisp
 (lcm 10) *→* 10
 (lcm 25 30) *→* 150
 (lcm -24 18 10) *→* 360
 (lcm 14 35) *→* 70
 (lcm 0 5) *→* 0
 (lcm 1 2 3 4 5 6) *→* 60

```


```lisp
 (log -1.0) \EQ (complex 0.0 (float pi 0.0))

```


```lisp
%  (log \param{complex})
%  \EQ (+ (log (abs \param{complex})) (* (phase \param{complex}) #c(0 1)))
% 
```


```lisp
(log \i{x}) \EQ (complex (log (abs \i{x})) (phase \i{x}))

```


```lisp
 (log \param{base} \param{number})
 \EQ (/ (log \param{number}) (log \param{base}))

```


```lisp
 (log 100 10)
*→* 2.0
*→* 2
 (log 100.0 10) *→* 2.0
 (log #c(0 1) #c(0 -1))
*→* #C(-1.0 0.0)
\OV #C(-1 0)
 (log 8.0 2) *→* 3.0

```


```lisp
 (log #c(-16 16) #c(2 2)) *→* 3 or approximately #c(3.0 0.0)
                               or approximately 3.0 (unlikely)

```


```lisp
 (rem -1 5) *→* -1
 (mod -1 5) *→* 4
 (mod 13 4) *→* 1
 (rem 13 4) *→* 1
 (mod -13 4) *→* 3
 (rem -13 4) *→* -1
 (mod 13 -4) *→* -3
 (rem 13 -4) *→* 1
 (mod -13 -4) *→* -1
 (rem -13 -4) *→* -1
 (mod 13.4 1) *→* 0.4
 (rem 13.4 1) *→* 0.4
 (mod -13.4 1) *→* 0.6
 (rem -13.4 1) *→* -0.4

```


```lisp
 (signum 0) *→* 0
 (signum 99) *→* 1
 (signum 4/5) *→* 1
 (signum -99/100) *→* -1
 (signum 0.0) *→* 0.0
 (signum #c(0 33)) *→* #C(0.0 1.0)
 (signum #c(7.5 10.0)) *→* #C(0.6 0.8)
 (signum #c(0.0 -14.7)) *→* #C(0.0 -1.0)
 (eql (signum -0.0) -0.0) *→ true*

```


```lisp
 (signum x) \EQ (if (zerop x) x (/ x (abs x)))

```


```lisp
 (sqrt 9.0) *→* 3.0
 (sqrt -9.0) *→* #C(0.0 3.0)
 (isqrt 9) *→* 3
 (sqrt 12) *→* 3.4641016
 (isqrt 12) *→* 3
 (isqrt 300) *→* 17
 (isqrt 325) *→* 18
 (sqrt 25)
*→* 5
\OV 5.0
 (isqrt 25) *→* 5
 (sqrt -1) *→* #C(0.0 1.0)
 (sqrt #c(0 2)) *→* #C(1.0 1.0)

```


```lisp
 (isqrt x) \EQ (values (floor (sqrt x))) 

```


```lisp
 (let* ((rs1 (make-random-state nil))
        (rs2 (make-random-state t))
        (rs3 (make-random-state rs2))
        (rs4 nil))
   (list (loop for i from 1 to 10 
               collect (random 100)
               when (= i 5)
                do (setq rs4 (make-random-state)))
         (loop for i from 1 to 10 collect (random 100 rs1))
         (loop for i from 1 to 10 collect (random 100 rs2))
         (loop for i from 1 to 10 collect (random 100 rs3))
         (loop for i from 1 to 10 collect (random 100 rs4))))
*→* ((29 25 72 57 55 68 24 35 54 65)
    (29 25 72 57 55 68 24 35 54 65)
    (93 85 53 99 58 62 2 23 23 59)
    (93 85 53 99 58 62 2 23 23 59)
    (68 24 35 54 65 54 55 50 59 49))

```


```lisp
 (<= 0 (random 1000) 1000) *→ true*
 (let ((state1 (make-random-state))
       (state2 (make-random-state)))
   (= (random 1000 state1) (random 1000 state2))) *→ true*

```


```lisp
 (random-state-p *random-state*) *→ true*
 (random-state-p (make-random-state)) *→ true*
 (random-state-p 'test-function) *→ false*

```


```lisp
 (random-state-p \param{object}) \EQ (typep \param{object} 'random-state)

```


```lisp
 (random-state-p *random-state*) *→ true*
 (setq snap-shot (make-random-state))
 ;; The series from any given point is random,
 ;; but if you backtrack to that point, you get the same series.
 (list (loop for i from 1 to 10 collect (random))
       (let ((*random-state* snap-shot))
         (loop for i from 1 to 10 collect (random)))
       (loop for i from 1 to 10 collect (random))
       (let ((*random-state* snap-shot))
         (loop for i from 1 to 10 collect (random))))
*→* ((19 16 44 19 96 15 76 96 13 61)
    (19 16 44 19 96 15 76 96 13 61)
    (16 67 0 43 70 79 58 5 63 50)
    (16 67 0 43 70 79 58 5 63 50))

```


```lisp
 (numberp 12) *→ true*
 (numberp (expt 2 130)) *→ true*
 (numberp #c(5/3 7.2)) *→ true*
 (numberp nil) *→ false*
 (numberp (cons 1 2)) *→ false*

```


```lisp
 (numberp \param{object}) \EQ (typep \param{object} 'number)

```


```lisp
 (cis 0) *→* #C(1.0 0.0)

```


```lisp
 (complex 0) *→* 0
 (complex 0.0) *→* #C(0.0 0.0)
 (complex 1 1/2) *→* #C(1 1/2)
 (complex 1 .99) *→* #C(1.0 0.99)
 (complex 3/2 0.0) *→* #C(1.5 0.0)

```


```lisp
%  #c(a b) \EQ #.(complex a b)
% 
```


```lisp
 (complexp 1.2d2) *→ false*
 (complexp #c(5/3 7.2)) *→ true*


```


```lisp
 (complexp \param{object}) \EQ (typep \param{object} 'complex)

```


```lisp
 (conjugate #c(0 -1)) *→* #C(0 1)
 (conjugate #c(1 1)) *→* #C(1 -1)
 (conjugate 1.5) *→* 1.5
 (conjugate #C(3/5 4/5)) *→* #C(3/5 -4/5)
 (conjugate #C(0.0D0 -1.0D0)) *→* #C(0.0D0 1.0D0)
 (conjugate 3.7) *→* 3.7

```


```lisp
 (conjugate z) \EQ (complex (realpart z) (- (imagpart z)))

```


```lisp
 (phase 1) *→* 0.0s0
 (phase 0) *→* 0.0s0
 (phase (cis 30)) *→* -1.4159266
 (phase #c(0 1)) *→* 1.5707964

```


```lisp
 (realpart #c(23 41)) *→* 23
 (imagpart #c(23 41.0)) *→* 41.0
 (realpart #c(23 41.0)) *→* 23.0
 (imagpart 23.0) *→* 0.0

```


```lisp
 (realp 12) *→ true*
 (realp #c(5/3 7.2)) *→ false*
 (realp nil) *→ false*
 (realp (cons 1 2)) *→ false*

```


```lisp
 (realp \param{object}) \EQ (typep \param{object} 'real)

```


```lisp
 (numerator 1/2) *→* 1
 (denominator 12/36) *→* 3
 (numerator -1) *→* -1
 (denominator (/ -33)) *→* 33
 (numerator (/ 8 -6)) *→* -4
 (denominator (/ 8 -6)) *→* 3

```


```lisp
 (gcd (numerator x) (denominator x)) *→* 1

```


```lisp
 (rational 0) *→* 0
 (rationalize -11/100) *→* -11/100
 (rational .1) *→* 13421773/134217728 ;implementation-dependent
 (rationalize .1) *→* 1/10

```


```lisp
 (float (rational x) x) \EQ x

```


```lisp
 (float (rationalize x) x) \EQ x

```


```lisp
 (rationalp 12) *→ true*
 (rationalp 6/5) *→ true*
 (rationalp 1.212) *→ false*

```


```lisp
 (rationalp \param{object}) \EQ (typep \param{object} 'rational)

```


```lisp
 (ash 16 1) *→* 32
 (ash 16 0) *→* 16
 (ash 16 -1) *→* 8
 (ash -100000000000000000000000000000000 -100) *→* -79

```


```lisp
 (logbitp \param{j} (ash \param{n} \param{k}))
 \EQ (and (>= \param{j} \param{k}) (logbitp (- \param{j} \param{k}) \param{n}))

```


```lisp
 (integer-length 0) *→* 0
 (integer-length 1) *→* 1
 (integer-length 3) *→* 2
 (integer-length 4) *→* 3
 (integer-length 7) *→* 3
 (integer-length -1) *→* 0
 (integer-length -4) *→* 2
 (integer-length -7) *→* 3
 (integer-length -8) *→* 3
 (integer-length (expt 2 9)) *→* 10
 (integer-length (1- (expt 2 9))) *→* 9
 (integer-length (- (expt 2 9))) *→* 9
 (integer-length (- (1+ (expt 2 9)))) *→* 10

```


```lisp
(defun integer-length (integer)
  (ceiling (log (if (minusp integer)
                    (- integer)
                    (1+ integer))
                2)))

```


```lisp
 (integerp 1) *→ true*
 (integerp (expt 2 130)) *→ true*
 (integerp 6/5) *→ false*
 (integerp nil) *→ false*


```


```lisp
 (integerp \param{object}) \EQ (typep \param{object} 'integer)

```


```lisp
 (parse-integer "123") *→* 123, 3
 (parse-integer "123" :start 1 :radix 5) *→* 13, 3
 (parse-integer "no-integer" :junk-allowed t) *→* NIL, 0

```


```lisp
 (boole boole-ior 1 16) *→* 17
 (boole boole-and -2 5) *→* 4
 (boole boole-eqv 17 15) *→* -31

;;; These examples illustrate the result of applying BOOLE and each
;;; of the possible values of OP to each possible combination of bits.
 (progn
   (format t "~&Results of (BOOLE <op> #b0011 #b0101) ...~
           ~%---Op-------Decimal-----Binary----Bits---~%")
   (dolist (symbol '(boole-1     boole-2    boole-and  boole-andc1
                     boole-andc2 boole-c1   boole-c2   boole-clr
                     boole-eqv   boole-ior  boole-nand boole-nor
                     boole-orc1  boole-orc2 boole-set  boole-xor))
     (let ((result (boole (symbol-value symbol) #b0011 #b0101)))
       (format t "~& ~A~13T~3,' D~23T~:*~5,' B~31T ...~4,'0B~%" 
               symbol result (logand result #b1111)))))
\OUT Results of (BOOLE <op> #b0011 #b0101) ...
\OUT ---Op-------Decimal-----Binary----Bits---
\OUT  BOOLE-1       3          11    ...0011
\OUT  BOOLE-2       5         101    ...0101
\OUT  BOOLE-AND     1           1    ...0001
\OUT  BOOLE-ANDC1   4         100    ...0100
\OUT  BOOLE-ANDC2   2          10    ...0010
\OUT  BOOLE-C1     -4        -100    ...1100
\OUT  BOOLE-C2     -6        -110    ...1010
\OUT  BOOLE-CLR     0           0    ...0000
\OUT  BOOLE-EQV    -7        -111    ...1001
\OUT  BOOLE-IOR     7         111    ...0111
\OUT  BOOLE-NAND   -2         -10    ...1110
\OUT  BOOLE-NOR    -8       -1000    ...1000
\OUT  BOOLE-ORC1   -3         -11    ...1101
\OUT  BOOLE-ORC2   -5        -101    ...1011
\OUT  BOOLE-SET    -1          -1    ...1111
\OUT  BOOLE-XOR     6         110    ...0110
*→* NIL

```


```lisp
 (boole boole-and x y) \EQ (logand x y)

```


```lisp
;; The order of the values in this `table' are such that
;; (logand (boole (elt boole-n-vector n) #b0101 #b0011) #b1111) => n
 (defconstant boole-n-vector
    (vector boole-clr   boole-and  boole-andc1 boole-2
            boole-andc2 boole-1    boole-xor   boole-ior
            boole-nor   boole-eqv  boole-c1    boole-orc1
            boole-c2    boole-orc2 boole-nand  boole-set))
*→* BOOLE-N-VECTOR
 (proclaim '(inline boole-n))
*→* \term{implementation-dependent}
 (defun boole-n (n integer &rest more-integers)
   (apply #'boole (elt boole-n-vector n) integer more-integers))
*→* BOOLE-N
 (boole-n #b0111 5 3) *→* 7
 (boole-n #b0001 5 3) *→* 1
 (boole-n #b1101 5 3) *→* -3
 (loop for n from #b0000 to #b1111 collect (boole-n n 5 3))
*→* (0 1 2 3 4 5 6 7 -8 -7 -6 -5 -4 -3 -2 -1)

```


```lisp
 (boole boole-ior 1 16) *→* 17
 (boole boole-and -2 5) *→* 4
 (boole boole-eqv 17 15) *→* -31

```


```lisp
 (logior 1 2 4 8) *→* 15
 (logxor 1 3 7 15) *→* 10
 (logeqv) *→* -1
 (logand 16 31) *→* 16
 (lognot 0) *→* -1
 (lognot 1) *→* -2
 (lognot -1) *→* 0
 (lognot (1+ (lognot 1000))) *→* 999

;;; In the following example, m is a mask.  For each bit in
;;; the mask that is a 1, the corresponding bits in x and y are
;;; exchanged.  For each bit in the mask that is a 0, the 
;;; corresponding bits of x and y are left unchanged.
 (flet ((show (m x y)
          (format t "~%m = #o~6,'0O~%x = #o~6,'0O~%y = #o~6,'0O~%"
                  m x y)))
   (let ((m #o007750)
         (x #o452576)
         (y #o317407))
     (show m x y)
     (let ((z (logand (logxor x y) m)))
       (setq x (logxor z x))
       (setq y (logxor z y))
       (show m x y))))
\OUT m = #o007750
\OUT x = #o452576
\OUT y = #o317407
\OUT 
\OUT m = #o007750
\OUT x = #o457426
\OUT y = #o312557
*→* NIL

```


```lisp
 (lognand \param{n1} \param{n2}) \EQ (lognot (logand \param{n1} \param{n2}))
 (lognor \param{n1} \param{n2}) \EQ (lognot (logior \param{n1} \param{n2}))
 (logandc1 \param{n1} \param{n2}) \EQ (logand (lognot \param{n1}) \param{n2})
 (logandc2 \param{n1} \param{n2}) \EQ (logand \param{n1} (lognot \param{n2}))
 (logiorc1 \param{n1} \param{n2}) \EQ (logior (lognot \param{n1}) \param{n2})
 (logiorc2 \param{n1} \param{n2}) \EQ (logior \param{n1} (lognot \param{n2}))
 (logbitp \param{j} (lognot \param{x})) \EQ (not (logbitp \param{j} \param{x}))

```


```lisp
 (logbitp 1 1) *→ false*
 (logbitp 0 1) *→ true*
 (logbitp 3 10) *→ true*
 (logbitp 1000000 -1) *→ true*
 (logbitp 2 6) *→ true*
 (logbitp 0 6) *→ false*

```


```lisp
 (logbitp \param{k} \param{n}) \EQ (ldb-test (byte 1 \param{k}) \param{n})

```


```lisp
 (logcount 0) *→* 0
 (logcount -1) *→* 0
 (logcount 7) *→* 3
 (logcount  13) *→* 3 ;Two's-complement binary: ...0001101
 (logcount -13) *→* 2 ;Two's-complement binary: ...1110011
 (logcount  30) *→* 4 ;Two's-complement binary: ...0011110
 (logcount -30) *→* 4 ;Two's-complement binary: ...1100010
 (logcount (expt 2 100)) *→* 1
 (logcount (- (expt 2 100))) *→* 100
 (logcount (- (1+ (expt 2 100)))) *→* 1

```


```lisp
    (logcount \param{x})
 \EQ (logcount (- (+ \param{x} 1)))
 \EQ (logcount (lognot \param{x}))

```


```lisp
 (logtest 1 7) *→ true*
 (logtest 1 2) *→ false*
 (logtest -2 -1) *→ true*
 (logtest 0 -1) *→ false*

```


```lisp
 (logtest \param{x} \param{y}) \EQ (not (zerop (logand \param{x} \param{y})))

```


```lisp
 (setq b (byte 100 200)) *→* #<BYTE-SPECIFIER size 100 position 200>
 (byte-size b) *→* 100
 (byte-position b) *→* 200

```


```lisp
 (byte-size (byte \param{j} \param{k})) \EQ \param{j}
 (byte-position (byte \param{j} \param{k})) \EQ \param{k}

```


```lisp
 (ldb (byte 0 3) #o7777) *→* 0
 (dpb #o7777 (byte 0 3) 0) *→* 0

```


```lisp
 (deposit-field 7 (byte 2 1) 0) *→* 6
 (deposit-field -1 (byte 4 0) 0) *→* 15
 (deposit-field 0 (byte 2 1) -3) *→* -7

```


```lisp
 (logbitp \param{j} (deposit-field \param{m} (byte \param{s} \param{p}) \param{n}))
 \EQ (if (and (>= \param{j} \param{p}) (< \param{j} (+ \param{p} \param{s})))
        (logbitp \param{j} \param{m})
        (logbitp \param{j} \param{n}))

```


```lisp
 (dpb 1 (byte 1 10) 0) *→* 1024
 (dpb -2 (byte 2 10) 0) *→* 2048
 (dpb 1 (byte 2 10) 2048) *→* 1024

```


```lisp
 (logbitp \param{j} (dpb \param{m} (byte \param{s} \param{p}) \param{n}))
 \EQ (if (and (>= \param{j} \param{p}) (< \param{j} (+ \param{p} \param{s})))
        (logbitp (- \param{j} \param{p}) \param{m})
        (logbitp \param{j} \param{n}))

```


```lisp
 (dpb \param{x} (byte 0 \param{y}) \param{z}) *→* \param{z}

```


```lisp
 (ldb (byte 2 1) 10) *→* 1
 (setq a (list 8)) *→* (8)
 (setf (ldb (byte 2 1) (car a)) 1) *→* 1
 a *→* (10)

```


```lisp
 (logbitp \param{j} (ldb (byte \param{s} \param{p}) \param{n}))
    \EQ (and (< \param{j} \param{s}) (logbitp (+ \param{j} \param{p}) \param{n}))

```


```lisp
 (ldb (byte 0 \param{x}) \param{y}) *→* 0

```


```lisp
 (ldb-test (byte 4 1) 16) *→ true*
 (ldb-test (byte 3 1) 16) *→ false*
 (ldb-test (byte 3 2) 16) *→ true*

```


```lisp
 (ldb-test bytespec n) \EQ
 (not (zerop (ldb bytespec n))) \EQ
 (logtest (ldb bytespec -1) n)

```


```lisp
 (mask-field (byte 1 5) -1) *→* 32
 (setq a 15) *→* 15
 (mask-field (byte 2 0) a) *→* 3
 a *→* 15
 (setf (mask-field (byte 2 0) a) 1) *→* 1
 a *→* 13

```


```lisp
 (ldb \param{bs} (mask-field \param{bs} \param{n})) \EQ (ldb \param{bs} \param{n})
 (logbitp \param{j} (mask-field (byte \param{s} \param{p}) \param{n}))
   \EQ (and (>= \param{j} \param{p}) (< \param{j} \param{s}) (logbitp \param{j} \param{n}))
 (mask-field \param{bs} \param{n}) \EQ (logand \param{n} (dpb -1 \param{bs} 0))

```


```lisp
 (multiple-value-bind (signif expon sign)
                      (integer-decode-float f)
   (scale-float (float signif f) expon)) \EQ (abs f)

```


```lisp
 ;; Note that since the purpose of this functionality is to expose
 ;; details of the implementation, all of these examples are necessarily
 ;; very implementation-dependent.  Results may vary widely.
 ;; Values shown here are chosen consistently from one particular implementation.
 (decode-float .5) *→* 0.5, 0, 1.0
 (decode-float 1.0) *→* 0.5, 1, 1.0
 (scale-float 1.0 1) *→* 2.0
 (scale-float 10.01 -2) *→* 2.5025
 (scale-float 23.0 0) *→* 23.0
 (float-radix 1.0) *→* 2
 (float-sign 5.0) *→* 1.0
 (float-sign -5.0) *→* -1.0
 (float-sign 0.0) *→* 1.0
 (float-sign 1.0 0.0) *→* 0.0
 (float-sign 1.0 -10.0) *→* 10.0
 (float-sign -1.0 10.0) *→* -10.0
 (float-digits 1.0) *→* 24
 (float-precision 1.0) *→* 24
 (float-precision least-positive-single-float) *→* 1
 (integer-decode-float 1.0) *→* 8388608, -23, 1

```


```lisp
 (multiple-value-bind (signif expon sign)
                      (decode-float f)
   (scale-float signif expon))
\EQ (abs f)

```


```lisp
 (multiple-value-bind (signif expon sign)
                      (decode-float f)
   (* (scale-float signif expon) sign))
\EQ f

```


```lisp
 (float 0) *→* 0.0
 (float 1 .5) *→* 1.0
 (float 1.0) *→* 1.0
 (float 1/2) *→* 0.5
*→* 1.0d0
\OV 1.0
 (eql (float 1.0 1.0d0) 1.0d0) *→ true*

```


```lisp
 (floatp 1.2d2) *→ true*
 (floatp 1.212) *→ true*
 (floatp 1.2s2) *→ true*
 (floatp (expt 2 130)) *→ false*

```


```lisp
 (floatp \param{object}) \EQ (typep \param{object} 'float)

```


```lisp
 (defmethod gf1 ((a integer) &optional (b 2)
                 &key (c 3) ((:dee d) 4) e ((eff f)))
   (list a b c d e f))
*→* #<STANDARD-METHOD GF1 (INTEGER) 36324653>
 (find-method #'gf1 '() (list (find-class 'integer))) 
*→* #<STANDARD-METHOD GF1 (INTEGER) 36324653>
 (function-keywords *)
*→* (:C :DEE :E EFF), false
 (defmethod gf2 ((a integer))
   (list a b c d e f))
*→* #<STANDARD-METHOD GF2 (INTEGER) 42701775>
 (function-keywords (find-method #'gf1 '() (list (find-class 'integer))))
*→* (), false
 (defmethod gf3 ((a integer) &key b c d &allow-other-keys)
   (list a b c d e f))
 (function-keywords *)
*→* (:B :C :D), true

```


```lisp
  
 (defclass position () ())
 
 (defclass x-y-position (position)
     ((x :initform 0 :accessor position-x)
      (y :initform 0 :accessor position-y)))
 
;;; It turns out polar coordinates are used more than Cartesian 
;;; coordinates, so the representation is altered and some new
;;; accessor methods are added.
 
 (defmethod update-instance-for-redefined-class :before
    ((pos x-y-position) added deleted plist &key)
   ;; Transform the x-y coordinates to polar coordinates
   ;; and store into the new slots.
   (let ((x (getf plist 'x))
         (y (getf plist 'y)))
     (setf (position-rho pos) (sqrt (+ (* x x) (* y y)))
           (position-theta pos) (atan y x))))
  
 (defclass x-y-position (position)
     ((rho :initform 0 :accessor position-rho)
      (theta :initform 0 :accessor position-theta)))
  
;;; All instances of the old x-y-position class will be updated
;;; automatically.
 
;;; The new representation is given the look and feel of the old one.
 
 (defmethod position-x ((pos x-y-position))  
    (with-slots (rho theta) pos (* rho (cos theta))))
 
 (defmethod (setf position-x) (new-x (pos x-y-position))
    (with-slots (rho theta) pos
      (let ((y (position-y pos)))
        (setq rho (sqrt (+ (* new-x new-x) (* y y)))
              theta (atan y new-x))
        new-x)))
 
 (defmethod position-y ((pos x-y-position))
    (with-slots (rho theta) pos (* rho (sin theta))))
 
 (defmethod (setf position-y) (new-y (pos x-y-position))
    (with-slots (rho theta) pos
      (let ((x (position-x pos)))
        (setq rho (sqrt (+ (* x x) (* new-y new-y)))
              theta (atan new-y x))
        new-y)))
 

```


```lisp
 
 (defclass position () ())
  
 (defclass x-y-position (position)
     ((x :initform 0 :initarg :x)
      (y :initform 0 :initarg :y)))
  
 (defclass rho-theta-position (position)
     ((rho :initform 0)
      (theta :initform 0)))
  
 (defmethod update-instance-for-different-class :before ((old x-y-position) 
                                                         (new rho-theta-position)
                                                         &key)
   ;; Copy the position information from old to new to make new
   ;; be a rho-theta-position at the same position as old.
   (let ((x (slot-value old 'x))
         (y (slot-value old 'y)))
     (setf (slot-value new 'rho) (sqrt (+ (* x x) (* y y)))
           (slot-value new 'theta) (atan y x))))
  
;;; At this point an instance of the class x-y-position can be
;;; changed to be an instance of the class rho-theta-position using
;;; change-class:
 
 (setq p1 (make-instance 'x-y-position :x 2 :y 0))
  
 (change-class p1 'rho-theta-position)
  
;;; The result is that the instance bound to p1 is now an instance of
;;; the class rho-theta-position.   The update-instance-for-different-class
;;; method performed the initialization of the rho and theta slots based
;;; on the value of the x and y slots, which were maintained by
;;; the old instance.
 

```


```lisp
 (slot-missing (class-of \i{instance})
               \i{instance}
               \i{slot-name}
               'slot-boundp)

```


```lisp
(slot-missing (class-of \i{instance})
              \i{instance}
              \i{slot-name}
              'slot-makunbound)

```


```lisp
 (defclass foo () 
   ((a :accessor foo-a :initarg :a :initform 1)
    (b :accessor foo-b :initarg :b)
    (c :accessor foo-c :initform 3)))
*→* #<STANDARD-CLASS FOO 244020371>
 (setq foo1 (make-instance 'foo :a 'one :b 'two))
*→* #<FOO 36325624>
 (slot-value foo1 'a) *→* ONE
 (slot-value foo1 'b) *→* TWO
 (slot-value foo1 'c) *→* 3
 (setf (slot-value foo1 'a) 'uno) *→* UNO
 (slot-value foo1 'a) *→* UNO
 (defmethod foo-method ((x foo))
   (slot-value x 'a))
*→* #<STANDARD-METHOD FOO-METHOD (FOO) 42720573>
 (foo-method foo1) *→* UNO

```


```lisp
 (slot-missing (class-of \i{instance})
               \i{instance}
               \i{slot-name}
               'slot-value)

```


```lisp
 (slot-missing (class-of \i{instance})
               \i{instance}
               \i{slot-name}
               'setf
               \i{new-value})

```


```lisp
 (defmethod some-gf :before ((a integer)) a)
*→* #<STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540>
 (method-qualifiers *) *→* (:BEFORE)

```


```lisp
 (defclass obj ()
    ((x :initarg :x :reader obj-x)
     (y :initarg :y :reader obj-y)
     (dist :accessor obj-dist)))
*→* #<STANDARD-CLASS OBJ 250020030>
 (defmethod shared-initialize :after ((self obj) slot-names &rest keys)
   (declare (ignore slot-names keys))
   (unless (slot-boundp self 'dist)
     (setf (obj-dist self)
           (sqrt (+ (expt (obj-x self) 2) (expt (obj-y self) 2))))))
*→* #<STANDARD-METHOD SHARED-INITIALIZE (:AFTER) (OBJ T) 26266714>
 (defmethod make-load-form ((self obj) &optional environment)
   (declare (ignore environment))
   ;; Note that this definition only works because X and Y do not
   ;; contain information which refers back to the object itself.
   ;; For a more general solution to this problem, see revised example below.
   `(make-instance ',(class-of self)
                   :x ',(obj-x self) :y ',(obj-y self)))
*→* #<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 26267532>
 (setq obj1 (make-instance 'obj :x 3.0 :y 4.0)) *→* #<OBJ 26274136>
 (obj-dist obj1) *→* 5.0
 (make-load-form obj1) *→* (MAKE-INSTANCE 'OBJ :X '3.0 :Y '4.0)

```


```lisp
 ;; Redefine method defined above.
 (defmethod make-load-form ((self obj) &optional environment)
    (make-load-form-saving-slots self
                                 :slot-names '(x y)
                                 :environment environment))
*→* #<STANDARD-METHOD MAKE-LOAD-FORM (OBJ) 42755655>
 ;; Try MAKE-LOAD-FORM on object created above.
 (make-load-form obj1)
*→* (ALLOCATE-INSTANCE '#<STANDARD-CLASS OBJ 250020030>),
    (PROGN
      (SETF (SLOT-VALUE '#<OBJ 26274136> 'X) '3.0)
      (SETF (SLOT-VALUE '#<OBJ 26274136> 'Y) '4.0)
      (INITIALIZE-INSTANCE '#<OBJ 26274136>))

```


```lisp
 (defclass my-frob ()
    ((name :initarg :name :reader my-name)))
 (defmethod make-load-form ((self my-frob) &optional environment)
   (declare (ignore environment))
   `(find-my-frob ',(my-name self) :if-does-not-exist :create))

```


```lisp
 (defclass tree-with-parent () ((parent :accessor tree-parent)
                                (children :initarg :children)))
 (defmethod make-load-form ((x tree-with-parent) &optional environment)
   (declare (ignore environment))
   (values
     ;; creation form
     `(make-instance ',(class-of x) :children ',(slot-value x 'children))
     ;; initialization form
     `(setf (tree-parent ',x) ',(slot-value x 'parent))))

```


```lisp
 (defstruct my-struct a b c)
 (defmethod make-load-form ((s my-struct) &optional environment)
    (make-load-form-saving-slots s :environment environment))

```


```lisp
 (defclass thing ()
           ((x :initarg :x :accessor thing-x)
            (y :initarg :y :accessor thing-y)))
*→* #<STANDARD-CLASS THING 250020173>
 (defmethod (setf thing-x) :before (new-x (thing thing))
   (format t "~&Changing X from ~D to ~D in ~S.~%"
           (thing-x thing) new-x thing))
 (setq thing1 (make-instance 'thing :x 1 :y 2)) *→* #<THING 43135676>
 (setq thing2 (make-instance 'thing :x 7 :y 8)) *→* #<THING 43147374>
 (with-accessors ((x1 thing-x) (y1 thing-y))
                 thing1
   (with-accessors ((x2 thing-x) (y2 thing-y))
                   thing2
     (list (list x1 (thing-x thing1) y1 (thing-y thing1)
                 x2 (thing-x thing2) y2 (thing-y thing2))
           (setq x1 (+ y1 x2))
           (list x1 (thing-x thing1) y1 (thing-y thing1)
                 x2 (thing-x thing2) y2 (thing-y thing2))
           (setf (thing-x thing2) (list x1))
           (list x1 (thing-x thing1) y1 (thing-y thing1)
                 x2 (thing-x thing2) y2 (thing-y thing2)))))
\OUT Changing X from 1 to 9 in #<THING 43135676>.
\OUT Changing X from 7 to (9) in #<THING 43147374>.
*→* ((1 1 2 2 7 7 8 8)
     9
     (9 9 2 2 7 7 8 8) 
     (9)
     (9 9 2 2 (9) (9) 8 8))

```


```lisp
 (defclass thing ()
           ((x :initarg :x :accessor thing-x)
            (y :initarg :y :accessor thing-y)))
*→* #<STANDARD-CLASS THING 250020173>
 (defmethod (setf thing-x) :before (new-x (thing thing))
   (format t "~&Changing X from ~D to ~D in ~S.~%"
           (thing-x thing) new-x thing))
 (setq thing (make-instance 'thing :x 0 :y 1)) *→* #<THING 62310540>
 (with-slots (x y) thing (incf x) (incf y)) *→* 2
 (values (thing-x thing) (thing-y thing)) *→* 1, 2
 (setq thing1 (make-instance 'thing :x 1 :y 2)) *→* #<THING 43135676>
 (setq thing2 (make-instance 'thing :x 7 :y 8)) *→* #<THING 43147374>
 (with-slots ((x1 x) (y1 y))
             thing1
   (with-slots ((x2 x) (y2 y))
               thing2
     (list (list x1 (thing-x thing1) y1 (thing-y thing1)
                 x2 (thing-x thing2) y2 (thing-y thing2))
           (setq x1 (+ y1 x2))
           (list x1 (thing-x thing1) y1 (thing-y thing1)
                 x2 (thing-x thing2) y2 (thing-y thing2))
           (setf (thing-x thing2) (list x1))
           (list x1 (thing-x thing1) y1 (thing-y thing1)
                 x2 (thing-x thing2) y2 (thing-y thing2)))))
\OUT Changing X from 7 to (9) in #<THING 43147374>.
*→* ((1 1 2 2 7 7 8 8)
     9
     (9 9 2 2 7 7 8 8) 
     (9)
     (9 9 2 2 (9) (9) 8 8))

```


```lisp
;;; Examples of the short form of define-method-combination
 
 (define-method-combination and :identity-with-one-argument t) 
  
 (defmethod func and ((x class1) y) ...)
 
;;; The equivalent of this example in the long form is:
 
 (define-method-combination and 
         (&optional (order :most-specific-first))
         ((around (:around))
          (primary (and) :order order :required t))
   (let ((form (if (rest primary)
                   `(and ,@(mapcar #'(lambda (method)
                                       `(call-method ,method))
                                   primary))
                   `(call-method ,(first primary)))))
     (if around
         `(call-method ,(first around)
                       (,@(rest around)
                        (make-method ,form)))
         form)))
  
;;; Examples of the long form of define-method-combination
 
;The default method-combination technique
 (define-method-combination standard ()
         ((around (:around))
          (before (:before))
          (primary () :required t)
          (after (:after)))
   (flet ((call-methods (methods)
            (mapcar #'(lambda (method)
                        `(call-method ,method))
                    methods)))
     (let ((form (if (or before after (rest primary))
                     `(multiple-value-prog1
                        (progn ,@(call-methods before)
                               (call-method ,(first primary)
                                            ,(rest primary)))
                        ,@(call-methods (reverse after)))
                     `(call-method ,(first primary)))))
       (if around
           `(call-method ,(first around)
                         (,@(rest around)
                          (make-method ,form)))
           form))))
  
;A simple way to try several methods until one returns non-nil
 (define-method-combination or ()
         ((methods (or)))
   `(or ,@(mapcar #'(lambda (method)
                      `(call-method ,method))
                  methods)))
  
;A more complete version of the preceding
 (define-method-combination or 
         (&optional (order ':most-specific-first))
         ((around (:around))
          (primary (or)))
   ;; Process the order argument
   (case order
     (:most-specific-first)
     (:most-specific-last (setq primary (reverse primary)))
     (otherwise (method-combination-error "~S is an invalid order.~@
     :most-specific-first and :most-specific-last are the possible values."
                                          order)))
   ;; Must have a primary method
   (unless primary
     (method-combination-error "A primary method is required."))
   ;; Construct the form that calls the primary methods
   (let ((form (if (rest primary)
                   `(or ,@(mapcar #'(lambda (method)
                                      `(call-method ,method))
                                  primary))
                   `(call-method ,(first primary)))))
     ;; Wrap the around methods around that form
     (if around
         `(call-method ,(first around)
                       (,@(rest around)
                        (make-method ,form)))
         form)))
  
;The same thing, using the :order and :required keyword options
 (define-method-combination or 
         (&optional (order ':most-specific-first))
         ((around (:around))
          (primary (or) :order order :required t))
   (let ((form (if (rest primary)
                   `(or ,@(mapcar #'(lambda (method)
                                      `(call-method ,method))
                                  primary))
                   `(call-method ,(first primary)))))
     (if around
         `(call-method ,(first around)
                       (,@(rest around)
                        (make-method ,form)))
         form)))
  
;This short-form call is behaviorally identical to the preceding
 (define-method-combination or :identity-with-one-argument t)
 
;Order methods by positive integer qualifiers
;:around methods are disallowed to keep the example small
 (define-method-combination example-method-combination ()
         ((methods positive-integer-qualifier-p))
   `(progn ,@(mapcar #'(lambda (method)
                         `(call-method ,method))
                     (stable-sort methods #'<
                       :key #'(lambda (method)
                                (first (method-qualifiers method)))))))
 
 (defun positive-integer-qualifier-p (method-qualifiers)
   (and (= (length method-qualifiers) 1)
        (typep (first method-qualifiers) '(integer 0 *))))
  
;;; Example of the use of :arguments
 (define-method-combination progn-with-lock ()
         ((methods ()))
   (:arguments object)
   `(unwind-protect
        (progn (lock (object-lock ,object))
               ,@(mapcar #'(lambda (method)
                             `(call-method ,method))
                         methods))
      (unlock (object-lock ,object))))
  

```


```lisp
 (defmethod some-operation ((a integer) (b float)) (list a b))
*→* #<STANDARD-METHOD SOME-OPERATION (INTEGER FLOAT) 26723357>
 (find-method #'some-operation '() (mapcar #'find-class '(integer float)))
*→* #<STANDARD-METHOD SOME-OPERATION (INTEGER FLOAT) 26723357>
 (find-method #'some-operation '() (mapcar #'find-class '(integer integer)))
\OUT Error: No matching method
 (find-method #'some-operation '() (mapcar #'find-class '(integer integer)) nil)
*→* NIL

```


```lisp
 (class-of 'fred) *→* #<BUILT-IN-CLASS SYMBOL 610327300>
 (class-of 2/3) *→* #<BUILT-IN-CLASS RATIO 610326642>
 
 (defclass book () ()) *→* #<STANDARD-CLASS BOOK 33424745>
 (class-of (make-instance 'book)) *→* #<STANDARD-CLASS BOOK 33424745>
 
 (defclass novel (book) ()) *→* #<STANDARD-CLASS NOVEL 33424764>
 (class-of (make-instance 'novel)) *→* #<STANDARD-CLASS NOVEL 33424764>

 (defstruct kons kar kdr) *→* KONS
 (class-of (make-kons :kar 3 :kdr 4)) *→* #<STRUCTURE-CLASS KONS 250020317>

```


```lisp
 (make-package 'temp :use nil) *→* #<PACKAGE "TEMP">
 (use-package 'temp) *→* T
 (intern "TEMP-SYM" 'temp) *→* TEMP::TEMP-SYM, NIL
 (find-symbol "TEMP-SYM") *→* NIL, NIL
 (export (find-symbol "TEMP-SYM" 'temp) 'temp) *→* T
 (find-symbol "TEMP-SYM") *→* TEMP-SYM, :INHERITED

```


```lisp
 (find-symbol "NEVER-BEFORE-USED") *→* NIL, NIL
 (find-symbol "NEVER-BEFORE-USED") *→* NIL, NIL
 (intern "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, NIL
 (intern "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, :INTERNAL
 (find-symbol "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, :INTERNAL
 (find-symbol "never-before-used") *→* NIL, NIL
 (find-symbol "CAR" 'common-lisp-user) *→* CAR, :INHERITED
 (find-symbol "CAR" 'common-lisp) *→* CAR, :EXTERNAL
 (find-symbol "NIL" 'common-lisp-user) *→* NIL, :INHERITED
 (find-symbol "NIL" 'common-lisp) *→* NIL, :EXTERNAL
 (find-symbol "NIL" (prog1 (make-package "JUST-TESTING" :use '())
                           (intern "NIL" "JUST-TESTING")))
*→* JUST-TESTING::NIL, :INTERNAL
 (export 'just-testing::nil 'just-testing)
 (find-symbol "NIL" 'just-testing) *→* JUST-TESTING:NIL, :EXTERNAL
 (find-symbol "NIL" "KEYWORD")
*→* NIL, NIL
\OV :NIL, :EXTERNAL
 (find-symbol (symbol-name :nil) "KEYWORD") *→* :NIL, :EXTERNAL

```


```lisp
 (find-package 'common-lisp) *→* #<PACKAGE "COMMON-LISP">
 (find-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (find-package 'not-there) *→* NIL

```


```lisp
 (find-all-symbols 'car)
*→* (CAR)
\OV (CAR VEHICLES:CAR)
\OV (VEHICLES:CAR CAR)
 (intern "CAR" (make-package 'temp :use nil)) *→* TEMP::CAR, NIL
 (find-all-symbols 'car)
*→* (TEMP::CAR CAR)
\OV (CAR TEMP::CAR)
\OV (TEMP::CAR CAR VEHICLES:CAR)
\OV (CAR TEMP::CAR VEHICLES:CAR)

```


```lisp
 (import 'common-lisp::car (make-package 'temp :use nil)) *→* T
 (find-symbol "CAR" 'temp) *→* CAR, :INTERNAL
 (find-symbol "CDR" 'temp) *→* NIL, NIL 

```


```lisp
 (let ((before (list-all-packages)))
    (make-package 'temp)
    (set-difference (list-all-packages) before)) *→* (#<PACKAGE "TEMP">)

```


```lisp
 (make-package 'temporary :nicknames '("TEMP")) *→* #<PACKAGE "TEMPORARY">
 (rename-package 'temp 'ephemeral) *→* #<PACKAGE "EPHEMERAL">
 (package-nicknames (find-package 'ephemeral)) *→* ()
 (find-package 'temporary) *→* NIL
 (rename-package 'ephemeral 'temporary '(temp fleeting))
*→* #<PACKAGE "TEMPORARY">
 (package-nicknames (find-package 'temp)) *→* ("TEMP" "FLEETING")

```


```lisp
 (package-shadowing-symbols (make-package 'temp)) *→* NIL
 (find-symbol 'car 'temp) *→* CAR, :INHERITED
 (shadow 'car 'temp) *→* T
 (find-symbol 'car 'temp) *→* TEMP::CAR, :INTERNAL
 (package-shadowing-symbols 'temp) *→* (TEMP::CAR)

```


```lisp
 (make-package 'test-1) *→* #<PACKAGE "TEST-1">
 (intern "TEST" (find-package 'test-1)) *→* TEST-1::TEST, NIL
 (shadow 'test-1::test (find-package 'test-1)) *→* T
 (shadow 'TEST (find-package 'test-1)) *→* T
 (assert (not (null (member 'test-1::test (package-shadowing-symbols
                                            (find-package 'test-1))))))
 
 (make-package 'test-2) *→* #<PACKAGE "TEST-2">
 (intern "TEST" (find-package 'test-2)) *→* TEST-2::TEST, NIL
 (export 'test-2::test (find-package 'test-2)) *→* T
 (use-package 'test-2 (find-package 'test-1))    ;should not error
 

```


```lisp
 (in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (setq sym (intern "CONFLICT")) *→* CONFLICT
 (intern "CONFLICT" (make-package 'temp)) *→* TEMP::CONFLICT, NIL
 (package-shadowing-symbols 'temp) *→* NIL
 (shadowing-import sym 'temp) *→* T 
 (package-shadowing-symbols 'temp) *→* (CONFLICT)

```


```lisp
 (setq *foo-package* (make-package "FOO" :use nil))
 (setq *foo-symbol*  (intern "FOO" *foo-package*))
 (export *foo-symbol* *foo-package*)

 (setq *bar-package* (make-package "BAR" :use '("FOO")))
 (setq *bar-symbol*  (intern "BAR" *bar-package*))
 (export *foo-symbol* *bar-package*)
 (export *bar-symbol* *bar-package*)

 (setq *baz-package* (make-package "BAZ" :use '("BAR")))

 (symbol-package *foo-symbol*) *→* #<PACKAGE "FOO">
 (symbol-package *bar-symbol*) *→* #<PACKAGE "BAR">

 (prin1-to-string *foo-symbol*) *→* "FOO:FOO"
 (prin1-to-string *bar-symbol*) *→* "BAR:BAR"

 (find-symbol "FOO" *bar-package*) *→* FOO:FOO, :EXTERNAL

 (find-symbol "FOO" *baz-package*) *→* FOO:FOO, :INHERITED
 (find-symbol "BAR" *baz-package*) *→* BAR:BAR, :INHERITED

 (packagep *foo-package*) *→ true*
 (packagep *bar-package*) *→ true*
 (packagep *baz-package*) *→ true*

 (package-name *foo-package*) *→* "FOO"
 (package-name *bar-package*) *→* "BAR"
 (package-name *baz-package*) *→* "BAZ"

 (package-use-list *foo-package*) *→* ()
 (package-use-list *bar-package*) *→* (#<PACKAGE "FOO">)
 (package-use-list *baz-package*) *→* (#<PACKAGE "BAR">)

 (package-used-by-list *foo-package*) *→* (#<PACKAGE "BAR">)
 (package-used-by-list *bar-package*) *→* (#<PACKAGE "BAZ">)
 (package-used-by-list *baz-package*) *→* ()

 (delete-package *bar-package*)
\OUT Error: Package BAZ uses package BAR.
\OUT If continued, BAZ will be made to unuse-package BAR,
\OUT and then BAR will be deleted.
\OUT Type :CONTINUE to continue.
\OUT Debug> \IN{:CONTINUE}
*→* T

 (symbol-package *foo-symbol*) *→* #<PACKAGE "FOO">
 (symbol-package *bar-symbol*) is unspecified

 (prin1-to-string *foo-symbol*) *→* "FOO:FOO"
 (prin1-to-string *bar-symbol*) is unspecified

 (find-symbol "FOO" *bar-package*) is unspecified

 (find-symbol "FOO" *baz-package*) *→* NIL, NIL
 (find-symbol "BAR" *baz-package*) *→* NIL, NIL

 (packagep *foo-package*) *→* T
 (packagep *bar-package*) *→* T
 (packagep *baz-package*) *→* T

 (package-name *foo-package*) *→* "FOO"
 (package-name *bar-package*) *→* NIL
 (package-name *baz-package*) *→* "BAZ"

 (package-use-list *foo-package*) *→* ()
 (package-use-list *bar-package*) is unspecified
 (package-use-list *baz-package*) *→* ()

 (package-used-by-list *foo-package*) *→* ()
 (package-used-by-list *bar-package*) is unspecified
 (package-used-by-list *baz-package*) *→* ()

```


```lisp
 (make-package 'temporary :nicknames '("TEMP" "temp")) *→* #<PACKAGE "TEMPORARY">
 (make-package "OWNER" :use '("temp")) *→* #<PACKAGE "OWNER">
 (package-used-by-list 'temp) *→* (#<PACKAGE "OWNER">)
 (package-use-list 'owner) *→* (#<PACKAGE "TEMPORARY">)

```


```lisp
 (defun test-package-iterator (package)
   (unless (packagep package)
     (setq package (find-package package)))
   (let ((all-entries '())
         (generated-entries '()))
     (do-symbols (x package) 
       (multiple-value-bind (symbol accessibility) 
           (find-symbol (symbol-name x) package)
         (push (list symbol accessibility) all-entries)))
     (with-package-iterator (generator-fn package 
                             :internal :external :inherited)
       (loop     
         (multiple-value-bind (more? symbol accessibility pkg)
             (generator-fn)
           (unless more? (return))
           (let ((l (multiple-value-list (find-symbol (symbol-name symbol) 
                                                      package))))
             (unless (equal l (list symbol accessibility))
               (error "Symbol ~S not found as ~S in package ~A [~S]"
                      symbol accessibility (package-name package) l))
             (push l generated-entries)))))
     (unless (and (subsetp all-entries generated-entries :test #'equal)
                  (subsetp generated-entries all-entries :test #'equal))
      (error "Generated entries and Do-Symbols entries don't correspond"))
     t))

```


```lisp
 (defun print-all-symbols () 
   (with-package-iterator (next-symbol (list-all-packages)
                           :internal :external)
     (loop
       (multiple-value-bind (more? symbol) (next-symbol)
         (if more? 
            (print symbol)
            (return))))))

```


```lisp
 (in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (export (intern "CONTRABAND" (make-package 'temp)) 'temp) *→* T
 (find-symbol "CONTRABAND") *→* NIL, NIL 
 (use-package 'temp) *→* T 
 (find-symbol "CONTRABAND") *→* CONTRABAND, :INHERITED
 (unexport 'contraband 'temp) *→* T
 (find-symbol "CONTRABAND") *→* NIL, NIL

```


```lisp
 (in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (setq temps-unpack (intern "UNPACK" (make-package 'temp))) *→* TEMP::UNPACK 
 (unintern temps-unpack 'temp) *→* T
 (find-symbol "UNPACK" 'temp) *→* NIL, NIL 
 temps-unpack *→* #:UNPACK 

```


```lisp
 (in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (export (intern "SHOES" (make-package 'temp)) 'temp) *→* T
 (find-symbol "SHOES") *→* NIL, NIL
 (use-package 'temp) *→* T
 (find-symbol "SHOES") *→* SHOES, :INHERITED
 (find (find-package 'temp) (package-use-list 'common-lisp-user)) *→* #<PACKAGE "TEMP">
 (unuse-package 'temp) *→* T
 (find-symbol "SHOES") *→* NIL, NIL

```


```lisp
 (export (intern "LAND-FILL" (make-package 'trash)) 'trash) *→* T
 (find-symbol "LAND-FILL" (make-package 'temp)) *→* NIL, NIL
 (package-use-list 'temp) *→* (#<PACKAGE "TEMP">)
 (use-package 'trash 'temp) *→* T
 (package-use-list 'temp) *→* (#<PACKAGE "TEMP"> #<PACKAGE "TRASH">)
 (find-symbol "LAND-FILL" 'temp) *→* TRASH:LAND-FILL, :INHERITED

```


```lisp
 (defpackage "MY-PACKAGE"
   (:nicknames "MYPKG" "MY-PKG")
   (:use "COMMON-LISP")
   (:shadow "CAR" "CDR")
   (:shadowing-import-from "VENDOR-COMMON-LISP"  "CONS")
   (:import-from "VENDOR-COMMON-LISP"  "GC")
   (:export "EQ" "CONS" "FROBOLA")
   )
 
 
 (defpackage my-package
   (:nicknames mypkg :MY-PKG)  ; remember Common Lisp conventions for case
   (:use common-lisp)          ; conversion on symbols
   (:shadow CAR :cdr #:cons)                              
   (:export "CONS")            ; this is the shadowed one.
   )

```


```lisp
 (defpackage my-package
   (:use common-lisp your-package)    ;requires your-package to exist first
   (:export "MY-FUN"))                
 (defpackage your-package
   (:use common-lisp)
   (:import-from my-package "MY-FUN") ;requires my-package to exist first
   (:export "MY-FUN"))

```


```lisp
 (make-package 'temp :use nil) *→* #<PACKAGE "TEMP">
 (intern "SHY" 'temp) *→* TEMP::SHY, NIL ;SHY will be an internal symbol
                                         ;in the package TEMP
 (export (intern "BOLD" 'temp) 'temp)  *→* T  ;BOLD will be external  
 (let ((lst ()))
   (do-symbols (s (find-package 'temp)) (push s lst))
   lst)
*→* (TEMP::SHY TEMP:BOLD)
\OV (TEMP:BOLD TEMP::SHY)
 (let ((lst ()))
   (do-external-symbols (s (find-package 'temp) lst) (push s lst))
   lst) 
*→* (TEMP:BOLD)
 (let ((lst ()))                                                     
   (do-all-symbols (s lst)
     (when (eq (find-package 'temp) (symbol-package s)) (push s lst)))
   lst)
*→* (TEMP::SHY TEMP:BOLD)
\OV (TEMP:BOLD TEMP::SHY)

```


```lisp
 (in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (intern "Never-Before") *→* |Never-Before|, NIL
 (intern "Never-Before") *→* |Never-Before|, :INTERNAL 
 (intern "NEVER-BEFORE" "KEYWORD") *→* :NEVER-BEFORE, NIL
 (intern "NEVER-BEFORE" "KEYWORD") *→* :NEVER-BEFORE, :EXTERNAL

```


```lisp
 (in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (package-name *package*) *→* "COMMON-LISP-USER"
 (package-name (symbol-package :test)) *→* "KEYWORD"
 (package-name (find-package 'common-lisp)) *→* "COMMON-LISP"

```


```lisp
 (defvar *foo-package* (make-package "FOO"))
 (rename-package "FOO" "FOO0")
 (package-name *foo-package*) *→* "FOO0"

```


```lisp
 (package-nicknames (make-package 'temporary
                                   :nicknames '("TEMP" "temp")))
*→* ("temp" "TEMP") 

```


```lisp
 (package-shadowing-symbols (make-package 'temp)) *→* ()
 (shadow 'cdr 'temp) *→* T
 (package-shadowing-symbols 'temp) *→* (TEMP::CDR)
 (intern "PILL" 'temp) *→* TEMP::PILL, NIL
 (shadowing-import 'pill 'temp) *→* T
 (package-shadowing-symbols 'temp) *→* (PILL TEMP::CDR)

```


```lisp
 (package-use-list (make-package 'temp)) *→* (#<PACKAGE "COMMON-LISP">)
 (use-package 'common-lisp-user 'temp) *→* T
 (package-use-list 'temp) *→* (#<PACKAGE "COMMON-LISP"> #<PACKAGE "COMMON-LISP-USER">)

```


```lisp
 (package-used-by-list (make-package 'temp)) *→* ()
 (make-package 'trash :use '(temp)) *→* #<PACKAGE "TRASH">
 (package-used-by-list 'temp) *→* (#<PACKAGE "TRASH">)

```


```lisp
 (packagep *package*) *→ true* 
 (packagep 'common-lisp) *→ false* 
 (packagep (find-package 'common-lisp)) *→ true* 

```


```lisp
 (packagep \param{object}) \EQ (typep \param{object} 'package)

```


```lisp
 (in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 *package* *→* #<PACKAGE "COMMON-LISP-USER">
 (make-package "SAMPLE-PACKAGE" :use '("COMMON-LISP"))
*→* #<PACKAGE "SAMPLE-PACKAGE">
 (list 
   (symbol-package
     (let ((*package* (find-package 'sample-package)))
       (setq *some-symbol* (read-from-string "just-testing"))))
   *package*)
*→* (#<PACKAGE "SAMPLE-PACKAGE"> #<PACKAGE "COMMON-LISP-USER">)
 (list (symbol-package (read-from-string "just-testing"))
       *package*)
*→* (#<PACKAGE "COMMON-LISP-USER"> #<PACKAGE "COMMON-LISP-USER">)
 (eq 'foo (intern "FOO")) *→ true*
 (eq 'foo (let ((*package* (find-package 'sample-package)))
            (intern "FOO")))
*→ false*

```


```lisp
 (package-error-package 
   (make-condition 'package-error
     :package (find-package "COMMON-LISP")))
*→* #<Package "COMMON-LISP">

```


```lisp
 ;; There is a great degree of variability permitted here.  The next
 ;; several examples are intended to illustrate just a few of the many
 ;; possibilities.  Whether the name is canonicalized to a particular
 ;; case (either upper or lower) depends on both the file system and the
 ;; implementation since two different implementations using the same
 ;; file system might differ on many issues.  How information is stored
 ;; internally (and possibly presented in #S notation) might vary,
 ;; possibly requiring `accessors' such as PATHNAME-NAME to perform case
 ;; conversion upon access.  The format of a namestring is dependent both
 ;; on the file system and the implementation since, for example, one
 ;; implementation might include the host name in a namestring, and
 ;; another might not.  #S notation would generally only be used in a
 ;; situation where no appropriate namestring could be constructed for use
 ;; with #P.
 (setq p1 (pathname "test"))
*→* #P"CHOCOLATE:TEST" ; with case canonicalization (e.g., VMS)
\OV #P"VANILLA:test"   ; without case canonicalization (e.g., Unix)
\OV #P"test"
\OV #S(PATHNAME :HOST "STRAWBERRY" :NAME "TEST")
\OV #S(PATHNAME :HOST "BELGIAN-CHOCOLATE" :NAME "test")
 (setq p2 (pathname "test"))
*→* #P"CHOCOLATE:TEST"
\OV #P"VANILLA:test"
\OV #P"test"
\OV #S(PATHNAME :HOST "STRAWBERRY" :NAME "TEST")
\OV #S(PATHNAME :HOST "BELGIAN-CHOCOLATE" :NAME "test")
 (pathnamep p1) *→ true*
 (eq p1 (pathname p1)) *→ true*
 (eq p1 p2)
*→ true*
\OV false
 (with-open-file (stream "test" :direction :output)
   (pathname stream))
*→* #P"ORANGE-CHOCOLATE:>Gus>test.lisp.newest"

```


```lisp
 ;; Implementation A -- an implementation with access to a single
 ;;  Unix file system.  This implementation happens to never display
 ;;  the `host' information in a namestring, since there is only one host. 
 (make-pathname :directory '(:absolute "public" "games")
                :name "chess" :type "db")
*→* #P"/public/games/chess.db" 
\medbreak
 ;; Implementation B -- an implementation with access to one or more
 ;;  VMS file systems.  This implementation displays `host' information
 ;;  in the namestring only when the host is not the local host.
 ;;  It uses a double colon to separate a host name from the host's local
 ;;  file name.
 (make-pathname :directory '(:absolute "PUBLIC" "GAMES")
                :name "CHESS" :type "DB")
*→* #P"SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
 (make-pathname :host "BOBBY"
                :directory '(:absolute "PUBLIC" "GAMES")
                :name "CHESS" :type "DB")
*→* #P"BOBBY::SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
\medbreak
 ;; Implementation C -- an implementation with simultaneous access to
 ;;  multiple file systems from the same Lisp image.  In this 
 ;;  implementation, there is a convention that any text preceding the
 ;;  first colon in a pathname namestring is a host name.
 (dolist (case '(:common :local))
   (dolist (host '("MY-LISPM" "MY-VAX" "MY-UNIX"))
     (print (make-pathname :host host :case case
                           :directory '(:absolute "PUBLIC" "GAMES")
                           :name "CHESS" :type "DB"))))
\OUT #P"MY-LISPM:>public>games>chess.db"
\OUT #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB"
\OUT #P"MY-UNIX:/public/games/chess.db"
\OUT #P"MY-LISPM:>public>games>chess.db" 
\OUT #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
\OUT #P"MY-UNIX:/PUBLIC/GAMES/CHESS.DB" 
*→* NIL

```


```lisp
 (setq q "test")  *→* "test"
 (pathnamep q) *→ false*
 (setq q (pathname "test"))
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" :TYPE NIL
       :VERSION NIL)
 (pathnamep q) *→ true* 
 (setq q (logical-pathname "SYS:SITE;FOO.SYSTEM"))
*→* #P"SYS:SITE;FOO.SYSTEM"
 (pathnamep q) *→ true*

```


```lisp
 (pathnamep \param{object}) \EQ (typep \param{object} 'pathname)

```


```lisp
 (setq q (make-pathname :host "KATHY"
                        :directory "CHAPMAN" 
                        :name "LOGIN" :type "COM"))
*→* #P"KATHY::[CHAPMAN]LOGIN.COM"
 (pathname-host q) *→* "KATHY"
 (pathname-name q) *→* "LOGIN"
 (pathname-type q) *→* "COM"

 ;; Because namestrings are used, the results shown in the remaining
 ;; examples are not necessarily the only possible results.  Mappings
 ;; from namestring representation to pathname representation are 
 ;; dependent both on the file system involved and on the implementation
 ;; (since there may be several implementations which can manipulate the
 ;; the same file system, and those implementations are not constrained
 ;; to agree on all details). Consult the documentation for each
 ;; implementation for specific information on how namestrings are treated
 ;; that implementation.

 ;; VMS
 (pathname-directory (parse-namestring "[FOO.*.BAR]BAZ.LSP"))
*→* (:ABSOLUTE "FOO" "BAR")
 (pathname-directory (parse-namestring "[FOO.*.BAR]BAZ.LSP") :case :common)
*→* (:ABSOLUTE "FOO" "BAR")

 ;; Unix
 (pathname-directory "foo.l") *→* NIL
 (pathname-device "foo.l") *→* :UNSPECIFIC
 (pathname-name "foo.l") *→* "foo"
 (pathname-name "foo.l" :case :local) *→* "foo"
 (pathname-name "foo.l" :case :common) *→* "FOO"
 (pathname-type "foo.l") *→* "l"
 (pathname-type "foo.l" :case :local) *→* "l"
 (pathname-type "foo.l" :case :common) *→* "L"
 (pathname-type "foo") *→* :UNSPECIFIC
 (pathname-type "foo" :case :common) *→* :UNSPECIFIC
 (pathname-type "foo.") *→* ""
 (pathname-type "foo." :case :common) *→* ""
 (pathname-directory (parse-namestring "/foo/bar/baz.lisp") :case :local)
*→* (:ABSOLUTE "foo" "bar")
 (pathname-directory (parse-namestring "/foo/bar/baz.lisp") :case :local)
*→* (:ABSOLUTE "FOO" "BAR")
 (pathname-directory (parse-namestring "../baz.lisp"))
*→* (:RELATIVE :UP)
 (PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/BAR/../Mum/baz"))
*→* (:ABSOLUTE "foo" "BAR" :UP "Mum")
 (PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/BAR/../Mum/baz") :case :common)
*→* (:ABSOLUTE "FOO" "bar" :UP "Mum")
 (PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/*/bar/baz.l"))
*→* (:ABSOLUTE "foo" :WILD "bar")
 (PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/*/bar/baz.l") :case :common)
*→* (:ABSOLUTE "FOO" :WILD "BAR")

 ;; Symbolics LMFS
 (pathname-directory (parse-namestring ">foo>**>bar>baz.lisp"))
*→* (:ABSOLUTE "foo" :WILD-INFERIORS "bar")
 (pathname-directory (parse-namestring ">foo>*>bar>baz.lisp"))
*→* (:ABSOLUTE "foo" :WILD "bar")
 (pathname-directory (parse-namestring ">foo>*>bar>baz.lisp") :case :common)
*→* (:ABSOLUTE "FOO" :WILD "BAR")
 (pathname-device (parse-namestring ">foo>baz.lisp")) *→* :UNSPECIFIC

```


```lisp
 (translate-logical-pathname "hacks:weather;barometer.lisp.newest")
\OUT Error: The logical host HACKS is not defined.
 (load-logical-pathname-translations "HACKS")
\OUT ;; Loading SYS:SITE;HACKS.TRANSLATIONS
\OUT ;; Loading done.
*→ true*
 (translate-logical-pathname "hacks:weather;barometer.lisp.newest")
*→* #P"HELIUM:[SHARED.HACKS.WEATHER]BAROMETER.LSP;0"
 (load-logical-pathname-translations "HACKS")
*→ false*

```


```lisp
 ;;;A very simple example of setting up a logical pathname host.  No
 ;;;translations are necessary to get around file system restrictions, so
 ;;;all that is necessary is to specify the root of the physical directory
 ;;;tree that contains the logical file system.
 ;;;The namestring syntax on the right-hand side is implementation-dependent.
 (setf (logical-pathname-translations "foo")
       '(("**;*.*.*"              "MY-LISPM:>library>foo>**>")))
\smallbreak 
 ;;;Sample use of that logical pathname.  The return value
 ;;;is implementation-dependent.          
 (translate-logical-pathname "foo:bar;baz;mum.quux.3")
*→* #P"MY-LISPM:>library>foo>bar>baz>mum.quux.3"
\medbreak 
 ;;;A more complex example, dividing the files among two file servers
 ;;;and several different directories.  This Unix doesn't support
 ;;;:WILD-INFERIORS in the directory, so each directory level must
 ;;;be translated individually.  No file name or type translations
 ;;;are required except for .MAIL to .MBX.
 ;;;The namestring syntax on the right-hand side is implementation-dependent.
 (setf (logical-pathname-translations "prog")
       '(("RELEASED;*.*.*"        "MY-UNIX:/sys/bin/my-prog/")
         ("RELEASED;*;*.*.*"      "MY-UNIX:/sys/bin/my-prog/*/")
         ("EXPERIMENTAL;*.*.*"    "MY-UNIX:/usr/Joe/development/prog/")
         ("EXPERIMENTAL;DOCUMENTATION;*.*.*"
                                  "MY-VAX:SYS$DISK:[JOE.DOC]")
         ("EXPERIMENTAL;*;*.*.*"  "MY-UNIX:/usr/Joe/development/prog/*/")
         ("MAIL;**;*.MAIL"        "MY-VAX:SYS$DISK:[JOE.MAIL.PROG...]*.MBX")))
\smallbreak
 ;;;Sample use of that logical pathname.  The return value
 ;;;is implementation-dependent.          
 (translate-logical-pathname "prog:mail;save;ideas.mail.3")
*→* #P"MY-VAX:SYS$DISK:[JOE.MAIL.PROG.SAVE]IDEAS.MBX.3"
\medbreak
 ;;;Example translations for a program that uses three files main.lisp,
 ;;;auxiliary.lisp, and documentation.lisp.  These translations might be
 ;;;supplied by a software supplier as examples.
\smallbreak
 ;;;For Unix with long file names
 (setf (logical-pathname-translations "prog")
       '(("CODE;*.*.*"             "/lib/prog/")))
\smallbreak
 ;;;Sample use of that logical pathname.  The return value
 ;;;is implementation-dependent.          
 (translate-logical-pathname "prog:code;documentation.lisp")
*→* #P"/lib/prog/documentation.lisp"
\smallbreak
 ;;;For Unix with 14-character file names, using .lisp as the type
 (setf (logical-pathname-translations "prog")
       '(("CODE;DOCUMENTATION.*.*" "/lib/prog/docum.*")
         ("CODE;*.*.*"             "/lib/prog/")))

 ;;;Sample use of that logical pathname.  The return value
 ;;;is implementation-dependent.          
 (translate-logical-pathname "prog:code;documentation.lisp")
*→* #P"/lib/prog/docum.lisp"
\medbreak
 ;;;For Unix with 14-character file names, using .l as the type
 ;;;The second translation shortens the compiled file type to .b
 (setf (logical-pathname-translations "prog")
       `(("**;*.LISP.*"            ,(logical-pathname "PROG:**;*.L.*"))
         (,(compile-file-pathname (logical-pathname "PROG:**;*.LISP.*"))
                                   ,(logical-pathname "PROG:**;*.B.*"))
         ("CODE;DOCUMENTATION.*.*" "/lib/prog/documentatio.*")
         ("CODE;*.*.*"             "/lib/prog/")))
\smallbreak
 ;;;Sample use of that logical pathname.  The return value
 ;;;is implementation-dependent.          
 (translate-logical-pathname "prog:code;documentation.lisp")
*→* #P"/lib/prog/documentatio.l"
\medbreak
 ;;;For a Cray with 6 character names and no directories, types, or versions.
 (setf (logical-pathname-translations "prog")
       (let ((l '(("MAIN" "PGMN")
                  ("AUXILIARY" "PGAUX")
                  ("DOCUMENTATION" "PGDOC")))
             (logpath (logical-pathname "prog:code;"))
             (phypath (pathname "XXX")))
         (append
           ;; Translations for source files
           (mapcar #'(lambda (x)
                       (let ((log (first x))
                             (phy (second x)))
                         (list (make-pathname :name log
                                              :type "LISP"
                                              :version :wild
                                              :defaults logpath)
                               (make-pathname :name phy
                                              :defaults phypath))))
                   l)
           ;; Translations for compiled files
           (mapcar #'(lambda (x)
                       (let* ((log (first x))
                              (phy (second x))
                              (com (compile-file-pathname
                                     (make-pathname :name log
                                                    :type "LISP"
                                                    :version :wild
                                                    :defaults logpath))))
                         (setq phy (concatenate 'string phy "B"))
                         (list com
                               (make-pathname :name phy
                                              :defaults phypath))))
                   l))))

 ;;;Sample use of that logical pathname.  The return value
 ;;;is implementation-dependent.          
 (translate-logical-pathname "prog:code;documentation.lisp")
*→* #P"PGDOC"

```


```lisp
 ;; This example illustrates a possible usage for a hypothetical Lisp running on a
 ;; DEC TOPS-20 file system.  Since pathname conventions vary between Lisp 
 ;; implementations and host file system types, it is not possible to provide a
 ;; general-purpose, conforming example.
 *default-pathname-defaults* *→* #P"PS:<FRED>"
 (merge-pathnames (make-pathname :name "CALENDAR"))
*→* #P"PS:<FRED>CALENDAR"
 (let ((*default-pathname-defaults* (pathname "<MARY>")))
   (merge-pathnames (make-pathname :name "CALENDAR")))
*→* #P"<MARY>CALENDAR"

```


```lisp
 (merge-pathnames (enough-namestring pathname defaults) defaults)
\EQ (merge-pathnames (parse-namestring pathname nil defaults) defaults)

```


```lisp
 (namestring "getty")            
*→* "getty"
 (setq q (make-pathname :host "kathy" 
                         :directory 
                           (pathname-directory *default-pathname-defaults*)
                         :name "getty")) 
*→* #S(PATHNAME :HOST "kathy" :DEVICE NIL :DIRECTORY \i{directory-name} 
       :NAME "getty" :TYPE NIL :VERSION NIL)
 (file-namestring q) *→* "getty"
 (directory-namestring q) *→* \i{directory-name}
 (host-namestring q) *→* "kathy" 

```


```lisp
 ;;;Using Unix syntax and the wildcard conventions used by the
 ;;;particular version of Unix on which this example was created:
 (namestring
   (translate-pathname "/usr/dmr/hacks/frob.l"
                       "/usr/d*/hacks/*.l"
                       "/usr/d*/backup/hacks/backup-*.*"))
*→* "/usr/dmr/backup/hacks/backup-frob.l"
 (namestring
   (translate-pathname "/usr/dmr/hacks/frob.l"
                       "/usr/d*/hacks/fr*.l"
                       "/usr/d*/backup/hacks/backup-*.*"))
*→* "/usr/dmr/backup/hacks/backup-ob.l"
 
 ;;;This is similar to the above example but uses two different hosts,
 ;;;U: which is a Unix and V: which is a VMS.  Note the translation
 ;;;of file type and alphabetic case conventions.
 (namestring
   (translate-pathname "U:/usr/dmr/hacks/frob.l"
                       "U:/usr/d*/hacks/*.l"
                       "V:SYS$DISK:[D*.BACKUP.HACKS]BACKUP-*.*"))
*→* "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-FROB.LSP"
 (namestring
   (translate-pathname "U:/usr/dmr/hacks/frob.l"
                       "U:/usr/d*/hacks/fr*.l"
                       "V:SYS$DISK:[D*.BACKUP.HACKS]BACKUP-*.*"))
*→* "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-OB.LSP"

```


```lisp
 (setq q (parse-namestring "test"))  
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" 
       :TYPE NIL :VERSION NIL)
 (pathnamep q) *→ true*
 (parse-namestring "test") 
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test"
       :TYPE NIL :VERSION NIL), 4
 (setq s (open \i{xxx})) *→* #<Input File Stream...>
 (parse-namestring s) 
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME \i{xxx} 
       :TYPE NIL :VERSION NIL), 0
 (parse-namestring "test" nil nil :start 2 :end 4 )
 *→* #S(PATHNAME ...), 15
 (parse-namestring "foo.lisp")
*→* #P"foo.lisp"

```


```lisp
 ;;;The following examples are not portable.  They are written to run
 ;;;with particular file systems and particular wildcard conventions.
 ;;;Other implementations will behave differently.  These examples are
 ;;;intended to be illustrative, not to be prescriptive.
 
 (wild-pathname-p (make-pathname :name :wild)) *→ true*
 (wild-pathname-p (make-pathname :name :wild) :name) *→ true*
 (wild-pathname-p (make-pathname :name :wild) :type) *→ false*
 (wild-pathname-p (pathname "s:>foo>**>")) *→ true* ;Lispm
 (wild-pathname-p (pathname :name "F*O")) *→ true* ;Most places

```


```lisp
 ;; The results of the following five forms are all implementation-dependent.
 ;; The second item in particular is shown with multiple results just to 
 ;; emphasize one of many particular variations which commonly occurs.
 (pathname-name (translate-pathname "foobar" "foo*" "*baz")) *→* "barbaz"
 (pathname-name (translate-pathname "foobar" "foo*" "*"))
*→* "foobar"
\OV "bar"
 (pathname-name (translate-pathname "foobar" "*"    "foo*")) *→* "foofoobar"
 (pathname-name (translate-pathname "bar"    "*"    "foo*")) *→* "foobar"
 (pathname-name (translate-pathname "foobar" "foo*" "baz*")) *→* "bazbar"

 (defun translate-logical-pathname-1 (pathname rules)
   (let ((rule (assoc pathname rules :test #'pathname-match-p)))
     (unless rule (error "No translation rule for ~A" pathname))
     (translate-pathname pathname (first rule) (second rule))))
 (translate-logical-pathname-1 "FOO:CODE;BASIC.LISP"
                       '(("FOO:DOCUMENTATION;" "MY-UNIX:/doc/foo/")
                         ("FOO:CODE;"          "MY-UNIX:/lib/foo/")
                         ("FOO:PATCHES;*;"     "MY-UNIX:/lib/foo/patch/*/")))
*→* #P"MY-UNIX:/lib/foo/basic.l"

;;;This example assumes one particular set of wildcard conventions
;;;Not all file systems will run this example exactly as written
 (defun rename-files (from to)
   (dolist (file (directory from))
     (rename-file file (translate-pathname file from to))))
 (rename-files "/usr/me/*.lisp" "/dev/her/*.l")
   ;Renames /usr/me/init.lisp to /dev/her/init.l
 (rename-files "/usr/me/pcl*/*" "/sys/pcl/*/")
   ;Renames /usr/me/pcl-5-may/low.lisp to /sys/pcl/pcl-5-may/low.lisp
   ;In some file systems the result might be /sys/pcl/5-may/low.lisp
 (rename-files "/usr/me/pcl*/*" "/sys/library/*/")
   ;Renames /usr/me/pcl-5-may/low.lisp to /sys/library/pcl-5-may/low.lisp
   ;In some file systems the result might be /sys/library/5-may/low.lisp
 (rename-files "/usr/me/foo.bar" "/usr/me2/")
   ;Renames /usr/me/foo.bar to /usr/me2/foo.bar
 (rename-files "/usr/joe/*-recipes.text" "/usr/jim/cookbook/joe's-*-rec.text")
   ;Renames /usr/joe/lamb-recipes.text to /usr/jim/cookbook/joe's-lamb-rec.text
   ;Renames /usr/joe/pork-recipes.text to /usr/jim/cookbook/joe's-pork-rec.text
   ;Renames /usr/joe/veg-recipes.text to /usr/jim/cookbook/joe's-veg-rec.text

```


```lisp
 (append (pathname-directory \param{default-pathname})
         (cdr  ;remove :relative from the front
           (pathname-directory \param{pathname})))

```


```lisp
 (merge-pathnames "CMUC::FORMAT"
                  "CMUC::PS:<LISPIO>.FASL")
*→* #P"CMUC::PS:<LISPIO>FORMAT.FASL.0"

```


```lisp
  #'(lambda (*standard-output* &rest arguments)
      (apply #'format t \i{control-string} arguments)
      \i{arguments-tail})

```


```lisp
%((formatter "~&~A~A") *standard-output* 'a 'b 'c)
%\OUT AB
%*→* (C)

```lisp
(funcall (formatter "~&~A~A") *standard-output* 'a 'b 'c)
\OUT AB
*→* (C)

(format t (formatter "~&~A~A") 'a 'b 'c)
\OUT AB
*→* NIL

```


```lisp
(let ((*print-pretty* t))
  (write object :stream s))
\EQ (funcall (pprint-dispatch object) s object)

```


```lisp
(progn (princ "Roads ") 
       (pprint-tabular *standard-output* '(elm main maple center) nil nil 8))
Roads ELM     MAIN
      MAPLE   CENTER

```


```lisp
(defun pprint-tabular (s list &optional (colon-p t) at-sign-p (tabsize nil))
  (declare (ignore at-sign-p))
  (when (null tabsize) (setq tabsize 16))
  (pprint-logical-block (s list :prefix (if colon-p "(" "")
                                :suffix (if colon-p ")" ""))
    (pprint-exit-if-list-exhausted)
    (loop (write (pprint-pop) :stream s)
          (pprint-exit-if-list-exhausted)
          (write-char #\\Space s)
          (pprint-tab :section-relative 0 tabsize s)
          (pprint-newline :fill s))))

```


```lisp
 (defmethod print-object ((obj airplane) stream)
   (print-unreadable-object (obj stream :type t :identity t)
     (princ (tail-number obj) stream)))

 (prin1-to-string my-airplane)
*→* "#<Airplane NW0773 36000123135>"
\OV "#<FAA:AIRPLANE NW0773 17>"

```


```lisp
 (cons \param{car-type} \param{cdr-type})

```


```lisp
% (princ character output-stream) \EQ (write-char character output-stream)
%
```


```lisp
 (prin1 object output-stream)
\EQ (write object :stream output-stream :escape t)

```


```lisp
 (princ object output-stream)
\EQ (write object stream output-stream :escape nil :readably nil)

```


```lisp
 (print object output-stream)
\EQ (progn (terpri output-stream)
           (write object :stream output-stream
                         :escape t)
           (write-char #\\space output-stream))

```


```lisp
 (pprint object output-stream)
\EQ (write object :stream output-stream :escape t :pretty t)

```


```lisp
 (prin1-to-string "abc") *→* "\\"abc\\""
 (princ-to-string "abc") *→* "abc"

```


```lisp
 (write-to-string \param{object} \star{\curly{\param{key} \param{argument}}})
\EQ (with-output-to-string (#1=#:string-stream) 
     (write object :stream #1# \star{\curly{\param{key} \param{argument}}}))

 (princ-to-string \param{object})
\EQ (with-output-to-string (string-stream)
     (princ \param{object} string-stream))

 (prin1-to-string \param{object})
\EQ (with-output-to-string (string-stream)
     (prin1 \param{object} string-stream))

```


```lisp
 (let ((*print-base* 24.) (*print-radix* t)) 
   (print 23.))
\OUT #24rN
*→* 23
 (setq *print-base* 10) *→* 10
 (setq *print-radix* nil) *→* NIL                                          
 (dotimes (i 35)
    (let ((*print-base* (+ i 2)))           ;print the decimal number 40 
      (write 40)                            ;in each base from 2 to 36
      (if (zerop (mod i 10)) (terpri) (format t " "))))
\OUT 101000
\OUT 1111 220 130 104 55 50 44 40 37 34
\OUT 31 2C 2A 28 26 24 22 20 1J 1I
\OUT 1H 1G 1F 1E 1D 1C 1B 1A 19 18
\OUT 17 16 15 14 
*→* NIL
 (dolist (pb '(2 3 8 10 16))               
    (let ((*print-radix* t)                 ;print the integer 10 and 
          (*print-base* pb))                ;the ratio 1/10 in bases 2, 
     (format t "~&~S  ~S~%" 10 1/10)))        ;3, 8, 10, 16
\OUT #b1010  #b1/1010
\OUT #3r101  #3r1/101
\OUT #o12  #o1/12
\OUT 10.  #10r1/10
\OUT #xA  #x1/A
*→* NIL

```


```lisp
 (defun test-print-case ()
   (dolist (*print-case* '(:upcase :downcase :capitalize))
     (format t "~&~S ~S~%" 'this-and-that '|And-something-elSE|)))
*→* TEST-PC
;; Although the choice of which characters to escape is specified by
;; *PRINT-CASE*, the choice of how to escape those characters 
;; (i.e., whether single escapes or multiple escapes are used)
;; is implementation-dependent.  The examples here show two of the
;; many valid ways in which escaping might appear.
 (test-print-case) ;Implementation A
\OUT THIS-AND-THAT |And-something-elSE|
\OUT this-and-that a\\n\\d-\\s\\o\\m\\e\\t\\h\\i\\n\\g-\\e\\lse
\OUT This-And-That A\\n\\d-\\s\\o\\m\\e\\t\\h\\i\\n\\g-\\e\\lse
*→* NIL
 (test-print-case) ;Implementation B
\OUT THIS-AND-THAT |And-something-elSE|
\OUT this-and-that a|nd-something-el|se
\OUT This-And-That A|nd-something-el|se
*→* NIL

```


```lisp
 (let ((a (list 1 2 3)))
   (setf (cdddr a) a)
   (let ((*print-circle* t))
     (write a)
     :done))
\OUT #1=(1 2 3 . #1#)
*→* :DONE

```


```lisp
 (let ((*print-escape* t)) (write #\\a))
\OUT #\\a
*→* #\\a
 (let ((*print-escape* nil)) (write #\\a))
\OUT a
*→* #\\a

```


```lisp
 (let ((*print-gensym* nil))
   (print (gensym)))
\OUT G6040 
*→* #:G6040

```


```lisp
 (setq a '(1 (2 (3 (4 (5 (6))))))) *→* (1 (2 (3 (4 (5 (6))))))
 (dotimes (i 8) 
   (let ((*print-level* i)) 
     (format t "~&~D -- ~S~%" i a)))
\OUT 0 -- #
\OUT 1 -- (1 #)
\OUT 2 -- (1 (2 #))
\OUT 3 -- (1 (2 (3 #)))
\OUT 4 -- (1 (2 (3 (4 #))))
\OUT 5 -- (1 (2 (3 (4 (5 #)))))
\OUT 6 -- (1 (2 (3 (4 (5 (6))))))
\OUT 7 -- (1 (2 (3 (4 (5 (6))))))
*→* NIL
\medbreak
 (setq a '(1 2 3 4 5 6)) *→* (1 2 3 4 5 6)
 (dotimes (i 7) 
   (let ((*print-length* i)) 
     (format t "~&~D -- ~S~%" i a))) 
\OUT 0 -- (...)
\OUT 1 -- (1 ...)
\OUT 2 -- (1 2 ...)
\OUT 3 -- (1 2 3 ...)
\OUT 4 -- (1 2 3 4 ...)
\OUT 5 -- (1 2 3 4 5 6)
\OUT 6 -- (1 2 3 4 5 6)
*→* NIL
\medbreak
(dolist (level-length '((0 1) (1 1) (1 2) (1 3) (1 4) 
                        (2 1) (2 2) (2 3) (3 2) (3 3) (3 4)))
 (let ((*print-level*  (first  level-length))
       (*print-length* (second level-length)))
   (format t "~&~D ~D -- ~S~%"
           *print-level* *print-length* 
           '(if (member x y) (+ (car x) 3) '(foo . #(a b c d "Baz"))))))
\OUT 0 1 -- #
\OUT 1 1 -- (IF ...)
\OUT 1 2 -- (IF # ...)
\OUT 1 3 -- (IF # # ...)
\OUT 1 4 -- (IF # # #)
\OUT 2 1 -- (IF ...)
\OUT 2 2 -- (IF (MEMBER X ...) ...)
\OUT 2 3 -- (IF (MEMBER X Y) (+ # 3) ...)
\OUT 3 2 -- (IF (MEMBER X ...) ...)
\OUT 3 3 -- (IF (MEMBER X Y) (+ (CAR X) 3) ...)
\OUT 3 4 -- (IF (MEMBER X Y) (+ (CAR X) 3) '(FOO . #(A B C D ...)))
*→* NIL

```


```lisp
 (let ((*print-right-margin* 25) (*print-lines* 3))
   (pprint '(progn (setq a 1 b 2 c 3 d 4))))
\OUT (PROGN (SETQ A 1
\OUT              B 2
\OUT              C 3 ..))
*→* \novalues

```


```lisp
 (setq *print-pretty* 'nil) *→* NIL
 (progn (write '(let ((a 1) (b 2) (c 3)) (+ a b c))) nil)
\OUT (LET ((A 1) (B 2) (C 3)) (+ A B C))
*→* NIL
 (let ((*print-pretty* t))
   (progn (write '(let ((a 1) (b 2) (c 3)) (+ a b c))) nil))
\OUT (LET ((A 1)
\OUT       (B 2)
\OUT       (C 3))
\OUT   (+ A B C))
*→* NIL
;; Note that the first two expressions printed by this next form
;; differ from the second two only in whether escape characters are printed.
;; In all four cases, extra whitespace is inserted by the pretty printer.
 (flet ((test (x)
          (let ((*print-pretty* t))
            (print x)
            (format t "~%~S " x)
            (terpri) (princ x) (princ " ")
            (format t "~%~A " x))))
  (test '#'(lambda () (list "a" #\b 'c #'d))))
\OUT #'(LAMBDA ()
\OUT     (LIST "a" #\b 'C #'D))
\OUT #'(LAMBDA ()
\OUT     (LIST "a" #\b 'C #'D))
\OUT #'(LAMBDA ()
\OUT     (LIST a b 'C #'D)) 
\OUT #'(LAMBDA ()
\OUT     (LIST a b 'C #'D))
*→* NIL

```


```lisp
 (let ((x (list "a" '\\a (gensym) '((a (b (c))) d e f g)))
       (*print-escape* nil)
       (*print-gensym* nil)
       (*print-level* 3)
       (*print-length* 3))
   (write x)
   (let ((*print-readably* t))
     (terpri)
     (write x)
     :done))
\OUT (a a G4581 ((A #) D E ...))
\OUT ("a" |a| #:G4581 ((A (B (C))) D E F G))
*→* :DONE

;; This is setup code is shared between the examples
;; of three hypothetical implementations which follow.
 (setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32005763> 
 (setf (gethash table 1) 'one) *→* ONE
 (setf (gethash table 2) 'two) *→* TWO

;; Implementation A
 (let ((*print-readably* t)) (print table))
 Error: Can't print #<HASH-TABLE EQL 0/120 32005763> readably.

;; Implementation B
;; No standardized #S notation for hash tables is defined, 
;; but there might be an implementation-defined notation.
 (let ((*print-readably* t)) (print table))
\OUT #S(HASH-TABLE :TEST EQL :SIZE 120 :CONTENTS (1 ONE 2 TWO))
*→* #<HASH-TABLE EQL 0/120 32005763>

;; Implementation C
;; Note that #. notation can only be used if *READ-EVAL* is true.
;; If *READ-EVAL* were false, this same implementation might have to
;; signal an error unless it had yet another printing strategy to fall
;; back on.
 (let ((*print-readably* t)) (print table))
\OUT #.(LET ((HASH-TABLE (MAKE-HASH-TABLE)))
\OUT     (SETF (GETHASH 1 HASH-TABLE) ONE)
\OUT     (SETF (GETHASH 2 HASH-TABLE) TWO)
\OUT     HASH-TABLE)
*→* #<HASH-TABLE EQL 0/120 32005763>

```


```lisp
 (setq zvar 123) *→* 123
 (set-syntax-from-char #\\z #\\' (setq table2 (copy-readtable))) *→* T
 zvar *→* 123
 (copy-readtable table2 *readtable*) *→* #<READTABLE 614000277>
 zvar *→* VAR
 (setq *readtable* (copy-readtable)) *→* #<READTABLE 46210223>
 zvar *→* VAR
 (setq *readtable* (copy-readtable nil)) *→* #<READTABLE 46302670>
 zvar *→* 123

```


```lisp
(setq *readtable* (copy-readtable nil))

```


```lisp
(setq *readtable* (copy-readtable))

```


```lisp
(let ((*readtable* (copy-readtable))) ...)

```


```lisp
 (get-macro-character #\\\lbr) *→* NIL, false
 (make-dispatch-macro-character #\\\lbr) *→* T
 (not (get-macro-character #\\\lbr)) *→ false*

```


```lisp
 (read)
\OUT \IN{'a}
*→* (QUOTE A)
 (with-input-from-string (is " ") (read is nil 'the-end)) *→* THE-END
 (defun skip-then-read-char (s c n)
    (if (char= c #\\\{) (read s t nil t) (read-preserving-whitespace s))
    (read-char-no-hang s)) *→* SKIP-THEN-READ-CHAR
 (let ((*readtable* (copy-readtable nil)))
    (set-dispatch-macro-character #\\# #\\\{ #'skip-then-read-char)
    (set-dispatch-macro-character #\\# #\\\} #'skip-then-read-char)
    (with-input-from-string (is "#\{123 x #\}123 y")
      (format t "~S ~S" (read is) (read is)))) *→* #\\x, #\\Space, NIL

```


```lisp
 (defun slash-reader (stream char)
   (declare (ignore char))
   `(path . ,(loop for dir = (read-preserving-whitespace stream t nil t)
                   then (progn (read-char stream t nil t)
                               (read-preserving-whitespace stream t nil t))
                   collect dir
                   while (eql (peek-char nil stream nil nil t) #\\/))))
 (set-macro-character #\\/ #'slash-reader)

```


```lisp
 (zyedh /usr/games/zork /usr/games/boggle)

```


```lisp
 (zyedh (path usr games zork) (path usr games boggle))

```


```lisp
 (zyedh (path usr games zork usr games boggle))

```


```lisp
 (read-delimited-list #\\\rbracket) 1 2 3 4 5 6 \rbracket
*→* (1 2 3 4 5 6)

```


```lisp
 #\{p q z a\}  reads as  ((p q) (p z) (p a) (q z) (q a) (z a))

```


```lisp
 (defun |#\{-reader| (stream char arg)
   (declare (ignore char arg))
   (mapcon #'(lambda (x)
              (mapcar #'(lambda (y) (list (car x) y)) (cdr x)))
          (read-delimited-list #\\\} stream t))) *→* |#\{-reader|

 (set-dispatch-macro-character #\\# #\\\{ #'|#\{-reader|) *→* T 
 (set-macro-character #\\\} (get-macro-character #\\) \nil))

```


```lisp
 (set-macro-character #\\\} (get-macro-character #\\) \nil))

```


```lisp
 #\{ p q z a\}

```


```lisp
 (read-from-string " 1 3 5" t nil :start 2) *→* 3, 5
 (read-from-string "(a b c)") *→* (A B C), 7

```


```lisp
 (readtablep *readtable*) *→ true*
 (readtablep (copy-readtable)) *→ true*
 (readtablep '*readtable*) *→ false*

```


```lisp
 (readtablep \param{object}) \EQ (typep \param{object} 'readtable) 

```


```lisp
 (get-dispatch-macro-character #\\# #\\\{) *→* NIL
 (set-dispatch-macro-character #\\# #\\\{        ;dispatch on #\{
    #'(lambda(s c n)
        (let ((list (read s nil (values) t)))  ;list is object after #n\{
          (when (consp list)                   ;return nth element of list
            (unless (and n (< 0 n (length list))) (setq n 0))
            (setq list (nth n list)))
         list))) *→* T
 #\{(1 2 3 4) *→* 1
 #3\{(0 1 2 3) *→* 3
 #\{123 *→* 123

```


```lisp
(defun |#$-reader| (stream subchar arg)
   (declare (ignore subchar arg))
   (list 'dollars (read stream t nil t))) *→* |#$-reader|
 (set-dispatch-macro-character #\\# #\\\$ #'|#\$-reader|) *→* T

```


```lisp
% (get-dispatch-macro-character #\\# #\\\{) *→* NIL 
% (unless (get-dispatch-macro-character #\\# #\\x)
%      (warn "Hexadecimal input (#x<ddd>) is disabled")) *→* NIL 
% (let ((previous-fun (get-dispatch-macro-character #\\# #\\\{)))
%      (when previous-fun
%        (set-dispatch-macro-character #\\# #\\\{
%          #'(lambda (stream char arg)
%               (setq stream *debug-io*)
%               (when *debug-macro-chars*
%                  (format *trace-output* 
%                         "~&Occurrence of ~C~C on stream ~S"
%                                         #\\# #\\\{ stream))
%              (list (funcall previous-fun stream char)))))) *→* NIL 
%
```


```lisp
 (get-macro-character #\\\lbr) *→* NIL, false
 (not (get-macro-character #\\;)) *→ false*

```


```lisp
 (defun single-quote-reader (stream char)
   (declare (ignore char))
   (list 'quote (read stream t nil t))) *→* SINGLE-QUOTE-READER
 (set-macro-character #\\' #'single-quote-reader) *→* T

```


```lisp
 (defun semicolon-reader (stream char)
   (declare (ignore char))
   ;; First swallow the rest of the current input line.
   ;; End-of-file is acceptable for terminating the comment.
   (do () ((char= (read-char stream nil #\\Newline t) #\\Newline)))
   ;; Return zero values.
   (values)) *→* SEMICOLON-READER
 (set-macro-character #\\; #'semicolon-reader) *→* T

```


```lisp
 (set-syntax-from-char #\\7 #\\;) *→* T
 123579 *→* 1235

```


```lisp
 (with-open-file (file pathname :direction :output)
   (with-standard-io-syntax
     (print data file)))

;;; ... Later, in another Lisp:

 (with-open-file (file pathname :direction :input)
   (with-standard-io-syntax
     (setq data (read file))))

```


```lisp
 (dotimes (i 6)
   (let ((*read-base* (+ 10. i)))
     (let ((object (read-from-string "(\\\\DAD DAD |BEE| BEE 123. 123)")))
       (print (list *read-base* object)))))
\OUT (10 (DAD DAD BEE BEE 123 123))
\OUT (11 (DAD DAD BEE BEE 123 146))
\OUT (12 (DAD DAD BEE BEE 123 171))
\OUT (13 (DAD DAD BEE BEE 123 198))
\OUT (14 (DAD 2701 BEE BEE 123 227))
\OUT (15 (DAD 3088 BEE 2699 123 258))
*→* NIL

```


```lisp
 (let ((*read-default-float-format* 'double-float))
   (read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)"))
*→* (1.0   1.0   1.0   1.0 1.0   1.0)   ;Implementation has float format F.
*→* (1.0   1.0   1.0s0 1.0 1.0   1.0)   ;Implementation has float formats S and F.
*→* (1.0d0 1.0d0 1.0   1.0 1.0d0 1.0d0) ;Implementation has float formats F and D.
*→* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D.
*→* (1.0d0 1.0d0 1.0   1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L.
*→* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L.

```


```lisp
%  (let ((*read-suppress* t))
%    (dotimes (i 4)
%      (format t "~&input here> ")
%      (format t "~&parsed as: ~S~%" (read))))
% \OUT input here> 101
% \OUT parsed as: NIL
% \OUT input here> (#\\a :test)
% \OUT parsed as: (NIL NIL)
% \OUT input here> '("xyz" #(a b c))
% \OUT parsed as: (QUOTE ("xyz" #(NIL NIL NIL)))
% \OUT input here> (list 1 2 '3)
% \OUT parsed as: (NIL NIL NIL (QUOTE NIL))
% *→* NIL
% 
```


```lisp
 (let ((*read-suppress* t))
   (mapcar #'read-from-string
           '("#(foo bar baz)" "#P(:type :lisp)" "#c1.2"
             "#.(PRINT 'FOO)" "#3AHELLO" "#S(INTEGER)"
             "#*ABC" "#\\GARBAGE" "#RALPHA" "#3R444")))
*→* (NIL NIL NIL NIL NIL NIL NIL NIL NIL NIL)

```


```lisp
 (readtablep *readtable*) *→ true*
 (setq zvar 123) *→* 123
 (set-syntax-from-char #\\z #\\' (setq table2 (copy-readtable))) *→* T
 zvar *→* 123
 (setq *readtable* table2) *→* #<READTABLE>
 zvar *→* VAR
 (setq *readtable* (copy-readtable nil)) *→* #<READTABLE>
 zvar *→* 123

```


```lisp
 (setq str "a string") *→* "a string"
 (equalp str (copy-seq str)) *→ true*
 (eql str (copy-seq str)) *→ false*

```


```lisp
 (copy-seq x) \EQ (subseq x 0)

```


```lisp
 (setq str (copy-seq "0123456789")) *→* "0123456789"
 (elt str 6) *→* #\\6
 (setf (elt str 0) #\\#) *→* #\\#
 str *→* "#123456789"

```


```lisp
 (fill (list 0 1 2 3 4 5) '(444)) *→* ((444) (444) (444) (444) (444) (444))
 (fill (copy-seq "01234") #\\e :start 3) *→* "012ee"
 (setq x (vector 'a 'b 'c 'd 'e)) *→* #(A B C D E)
 (fill x 'z :start 1 :end 3) *→* #(A Z Z D E)
 x *→* #(A Z Z D E)
 (fill x 'p) *→* #(P P P P P)
 x *→* #(P P P P P)

```


```lisp
 (make-sequence 'list 0) *→* ()
 (make-sequence 'string 26 :initial-element #\\.) 
*→* ".........................."
 (make-sequence '(vector double-float) 2
                :initial-element 1d0)
*→* #(1.0d0 1.0d0)

```


```lisp
 (make-sequence '(vector * 2) 3) should signal an error
 (make-sequence '(vector * 4) 3) should signal an error

```


```lisp
 (make-sequence 'string 5) \EQ (make-string 5)               

```


```lisp
 (setq str "012345") *→* "012345"
 (subseq str 2) *→* "2345"
 (subseq str 3 5) *→* "34"
 (setf (subseq str 4) "abc") *→* "abc"
 str *→* "0123ab"
 (setf (subseq str 0 2) "A") *→* "A"
 str *→* "A123ab"

```


```lisp
 (map 'string #'(lambda (x y)
                  (char "01234567890ABCDEF" (mod (+ x y) 16)))
       '(1 2 3 4)
       '(10 9 8 7)) *→* "AAAA"
 (setq seq '("lower" "UPPER" "" "123")) *→* ("lower" "UPPER" "" "123")
 (map nil #'nstring-upcase seq) *→* NIL
 seq *→* ("LOWER" "UPPER" "" "123")
 (map 'list #'- '(1 2 3 4)) *→* (-1 -2 -3 -4)
 (map 'string
      #'(lambda (x) (if (oddp x) #\\1 #\\0))
      '(1 2 3 4)) *→* "1010"

```


```lisp
 (map '(vector * 4) #'cons "abc" "de") should signal an error

```


```lisp
 (setq a (list 1 2 3 4) b (list 10 10 10 10)) *→* (10 10 10 10)
 (map-into a #'+ a b) *→* (11 12 13 14)
 a *→* (11 12 13 14)
 b *→* (10 10 10 10)
 (setq k '(one two three)) *→* (ONE TWO THREE)
 (map-into a #'cons k a) *→* ((ONE . 11) (TWO . 12) (THREE . 13) 14)
 (map-into a #'gensym) *→* (#:G9090 #:G9091 #:G9092 #:G9093)
 a *→* (#:G9090 #:G9091 #:G9092 #:G9093)

```


```lisp
 (defun map-into (result-sequence function &rest sequences)
   (loop for index below (apply #'min 
                                (length result-sequence)
                                (mapcar #'length sequences))
         do (setf (elt result-sequence index)
                  (apply function
                         (mapcar #'(lambda (seq) (elt seq index))
                                 sequences))))
   result-sequence)

```


```lisp
 (reduce #'* '(1 2 3 4 5)) *→* 120
 (reduce #'append '((1) (2)) :initial-value '(i n i t)) *→* (I N I T 1 2)
 (reduce #'append '((1) (2)) :from-end t                  
                             :initial-value '(i n i t)) *→* (1 2 I N I T) 
 (reduce #'- '(1 2 3 4)) \EQ (- (- (- 1 2) 3) 4) *→* -8
 (reduce #'- '(1 2 3 4) :from-end t)    ;Alternating sum.
\EQ (- 1 (- 2 (- 3 4))) *→* -2
 (reduce #'+ '()) *→* 0
 (reduce #'+ '(3)) *→* 3
 (reduce #'+ '(foo)) *→* FOO
 (reduce #'list '(1 2 3 4)) *→* (((1 2) 3) 4)
 (reduce #'list '(1 2 3 4) :from-end t) *→* (1 (2 (3 4)))
 (reduce #'list '(1 2 3 4) :initial-value 'foo) *→* ((((foo 1) 2) 3) 4)
 (reduce #'list '(1 2 3 4)
        :from-end t :initial-value 'foo) *→* (1 (2 (3 (4 foo))))

```


```lisp
 (count #\\a "how many A's are there in here?") *→* 2
 (count-if-not #'oddp '((1) (2) (3) (4)) :key #'car) *→* 2
 (count-if #'upper-case-p "The Crying of Lot 49" :start 4) *→* 2 

```


```lisp
 (length "abc") *→* 3
 (setq str (make-array '(3) :element-type 'character 
                            :initial-contents "abc"
                            :fill-pointer t)) *→* "abc"
 (length str) *→* 3
 (setf (fill-pointer str) 2) *→* 2
 (length str) *→* 2

```


```lisp
 (setq str "abc") *→* "abc"
 (reverse str) *→* "cba"
 str *→* "abc"
 (setq str (copy-seq str)) *→* "abc"
 (nreverse str) *→* "cba"
 str *→* \term{implementation-dependent}
 (setq l (list 1 2 3)) *→* (1 2 3)
 (nreverse l) *→* (3 2 1)
 l *→* \term{implementation-dependent}

```


```lisp
 (setq tester (copy-seq "lkjashd")) *→* "lkjashd"
 (sort tester #'char-lessp) *→* "adhjkls"
 (setq tester (list '(1 2 3) '(4 5 6) '(7 8 9))) *→* ((1 2 3) (4 5 6) (7 8 9))
 (sort tester #'> :key #'car)  *→* ((7 8 9) (4 5 6) (1 2 3)) 
 (setq tester (list 1 2 3 4 5 6 7 8 9 0)) *→* (1 2 3 4 5 6 7 8 9 0)
 (stable-sort tester #'(lambda (x y) (and (oddp x) (evenp y))))
*→* (1 3 5 7 9 2 4 6 8 0)
 (sort (setq committee-data
             (vector (list (list "JonL" "White") "Iteration")
                     (list (list "Dick" "Waters") "Iteration")
                     (list (list "Dick" "Gabriel") "Objects")
                     (list (list "Kent" "Pitman") "Conditions")
                     (list (list "Gregor" "Kiczales") "Objects")
                     (list (list "David" "Moon") "Objects")
                     (list (list "Kathy" "Chapman") "Editorial")
                     (list (list "Larry" "Masinter") "Cleanup")
                     (list (list "Sandra" "Loosemore") "Compiler")))
       #'string-lessp :key #'cadar)
*→* #((("Kathy" "Chapman") "Editorial")
     (("Dick" "Gabriel") "Objects")
     (("Gregor" "Kiczales") "Objects")
     (("Sandra" "Loosemore") "Compiler")
     (("Larry" "Masinter") "Cleanup")
     (("David" "Moon") "Objects")
     (("Kent" "Pitman") "Conditions")
     (("Dick" "Waters") "Iteration")
     (("JonL" "White") "Iteration"))
 ;; Note that individual alphabetical order within `committees'
 ;; is preserved.
 (setq committee-data 
       (stable-sort committee-data #'string-lessp :key #'cadr))
*→* #((("Larry" "Masinter") "Cleanup")
     (("Sandra" "Loosemore") "Compiler")
     (("Kent" "Pitman") "Conditions")
     (("Kathy" "Chapman") "Editorial")
     (("Dick" "Waters") "Iteration")
     (("JonL" "White") "Iteration")
     (("Dick" "Gabriel") "Objects")
     (("Gregor" "Kiczales") "Objects")
     (("David" "Moon") "Objects"))

```


```lisp
 (find #\\d "here are some letters that can be looked at" :test #'char>)
*→* #\\Space 
 (find-if #'oddp '(1 2 3 4 5) :end 3 :from-end t) *→* 3
 (find-if-not #'complexp                                    
             '#(3.5 2 #C(1.0 0.0) #C(0.0 1.0))
             :start 2) *→* NIL 

```


```lisp
% (find item sequence ...)
%  \EQ (elt sequence (position item sequence ...))
% 
```


```lisp
 (position #\\a "baobab" :from-end t) *→* 4
 (position-if #'oddp '((1) (2) (3) (4)) :start 1 :key #'car) *→* 2
 (position 595 '()) *→* NIL
 (position-if-not #'integerp '(1 2 3 4 5.0)) *→* 4 

```


```lisp
 (search "dog" "it's a dog's life") *→* 7
 (search '(0 1) '(2 4 6 1 3 5) :key #'oddp) *→* 2

```


```lisp
 (mismatch "abcd" "ABCDE" :test #'char-equal) *→* 4
 (mismatch '(3 2 1 1 2 3) '(1 2 3) :from-end t) *→* 3
 (mismatch '(1 2 3) '(2 3 4) :test-not #'eq :key #'oddp) *→* NIL
 (mismatch '(1 2 3 4 5 6) '(3 4 5 6 7) :start1 2 :end2 4) *→* NIL 

```


```lisp
 (min (- \i{end1} \i{start1}) (- \i{end2} \i{start2}))

```


```lisp
 (replace "abcdefghij" "0123456789" :start1 4 :end1 7 :start2 4) 
*→* "abcd456hij"
 (setq lst "012345678") *→* "012345678"
 (replace lst lst :start1 2 :start2 0) *→* "010123456"
 lst *→* "010123456"

```


```lisp
 (substitute #\\. #\\SPACE "0 2 4 6") *→* "0.2.4.6"
 (substitute 9 4 '(1 2 4 1 3 4 5)) *→* (1 2 9 1 3 9 5)
 (substitute 9 4 '(1 2 4 1 3 4 5) :count 1) *→* (1 2 9 1 3 4 5)
 (substitute 9 4 '(1 2 4 1 3 4 5) :count 1 :from-end t)
*→* (1 2 4 1 3 9 5)
 (substitute 9 3 '(1 2 4 1 3 4 5) :test #'>) *→* (9 9 4 9 3 4 5)

 (substitute-if 0 #'evenp '((1) (2) (3) (4)) :start 2 :key #'car)
*→* ((1) (2) (3) 0)
 (substitute-if 9 #'oddp '(1 2 4 1 3 4 5)) *→* (9 2 4 9 9 4 9)
 (substitute-if 9 #'evenp '(1 2 4 1 3 4 5) :count 1 :from-end t)
*→* (1 2 4 1 3 9 5)

 (setq some-things (list 'a 'car 'b 'cdr 'c)) *→* (A CAR B CDR C)
 (nsubstitute-if "function was here" #'fboundp some-things
                 :count 1 :from-end t) *→* (A CAR B "function was here" C)
 some-things *→* (A CAR B "function was here" C)
 (setq alpha-tester (copy-seq "ab ")) *→* "ab "
 (nsubstitute-if-not #\\z #'alpha-char-p alpha-tester) *→* "abz"
 alpha-tester *→* "abz"

```


```lisp
 (defun test-it (fn)
   (let ((x (cons 'b nil)))
     (rplacd x x)
     (funcall fn 'a 'b x :count 1)))
 (test-it #'substitute) *→* (A . #1=(B . #1#))
 (test-it #'nsubstitute) *→* (A . #1#)

```


```lisp
(concatenate 'string "all" " " "together" " " "now") *→* "all together now"
(concatenate 'list "ABC" '(d e f) #(1 2 3) #*1011)
*→* (#\\A #\\B #\\C D E F 1 2 3 1 0 1 1)
(concatenate 'list) *→* NIL

```


```lisp
  (concatenate '(vector * 2) "a" "bc") should signal an error

```


```lisp
 (setq test1 (list 1 3 4 6 7))
 (setq test2 (list 2 5 8))
 (merge 'list test1 test2 #'<) *→* (1 2 3 4 5 6 7 8)
 (setq test1 (copy-seq "BOY"))
 (setq test2 (copy-seq :nosy"))
 (merge 'string test1 test2 #'char-lessp) *→* "BnOosYy"
 (setq test1 (vector ((red . 1) (blue . 4))))
 (setq test2 (vector ((yellow . 2) (green . 7))))
 (merge 'vector test1 test2 #'< :key #'cdr) 
*→* #((RED . 1) (YELLOW . 2) (BLUE . 4) (GREEN . 7)) 

```


```lisp
 (merge '(vector * 4) '(1 5) '(2 4 6) #'<) should signal an error

```


```lisp
 (delete nil \i{sequence}
             :test #'(lambda (ignore \i{item}) (funcall \i{test} \i{item}))
             ...)

```


```lisp
 (remove 4 '(1 3 4 5 9)) *→* (1 3 5 9)
 (remove 4 '(1 2 4 1 3 4 5)) *→* (1 2 1 3 5)
 (remove 4 '(1 2 4 1 3 4 5) :count 1) *→* (1 2 1 3 4 5)
 (remove 4 '(1 2 4 1 3 4 5) :count 1 :from-end t) *→* (1 2 4 1 3 5)
 (remove 3 '(1 2 4 1 3 4 5) :test #'>) *→* (4 3 4 5)
 (setq lst '(list of four elements)) *→* (LIST OF FOUR ELEMENTS)
 (setq lst2 (copy-seq lst)) *→* (LIST OF FOUR ELEMENTS)
 (setq lst3 (delete 'four lst)) *→* (LIST OF ELEMENTS)
 (equal lst lst2) *→ false*
 (remove-if #'oddp '(1 2 4 1 3 4 5)) *→* (2 4 4)
 (remove-if #'evenp '(1 2 4 1 3 4 5) :count 1 :from-end t) 
*→* (1 2 4 1 3 5)
 (remove-if-not #'evenp '(1 2 3 4 5 6 7 8 9) :count 2 :from-end t)
*→* (1 2 3 4 5 6 8)
 (setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5)
 (delete 4 tester) *→* (1 2 1 3 5)
 (setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5)
 (delete 4 tester :count 1) *→* (1 2 1 3 4 5)
 (setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5)
 (delete 4 tester :count 1 :from-end t) *→* (1 2 4 1 3 5)
 (setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5)
 (delete 3 tester :test #'>) *→* (4 3 4 5)
 (setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5)
 (delete-if #'oddp tester) *→* (2 4 4)
 (setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5)
 (delete-if #'evenp tester :count 1 :from-end t) *→* (1 2 4 1 3 5)    
 (setq tester (list 1 2 3 4 5 6)) *→* (1 2 3 4 5 6) 
 (delete-if #'evenp tester) *→* (1 3 5) 
 tester *→* \term{implementation-dependent}

```


```lisp
 (setq foo (list 'a 'b 'c)) *→* (A B C)
 (setq bar (cdr foo)) *→* (B C)
 (setq foo (delete 'b foo)) *→* (A C)
 bar *→* ((C)) or ...
 (eq (cdr foo) (car bar)) *→* T or ...

```


```lisp
 (remove-duplicates "aBcDAbCd" :test #'char-equal :from-end t) *→* "aBcD"
 (remove-duplicates '(a b c b d d e)) *→* (A C B D E)
 (remove-duplicates '(a b c b d d e) :from-end t) *→* (A B C D E)
 (remove-duplicates '((foo #\\a) (bar #\\%) (baz #\\A))
     :test #'char-equal :key #'cadr) *→* ((BAR #\\%) (BAZ #\\A))
 (remove-duplicates '((foo #\\a) (bar #\\%) (baz #\\A)) 
     :test #'char-equal :key #'cadr :from-end t) *→* ((FOO #\\a) (BAR #\\%))
 (setq tester (list 0 1 2 3 4 5 6))
 (delete-duplicates tester :key #'oddp :start 1 :end 6) *→* (0 4 5 6)

```


```lisp
 (input-stream-p *standard-input*) *→ true*
 (input-stream-p *terminal-io*) *→ true*
 (input-stream-p (make-string-output-stream)) *→ false*

 (output-stream-p *standard-output*) *→ true*
 (output-stream-p *terminal-io*) *→ true*
 (output-stream-p (make-string-input-stream "jr")) *→ false*

```


```lisp
 (when (> measured limit)
   (let ((error (round (* (- measured limit) 100)
                       limit)))
     (unless (if (interactive-stream-p *query-io*)
                 (yes-or-no-p "The frammis is out of tolerance by ~D%.~@
                               Is it safe to proceed? " error)
                 (< error 15))  ;15% is acceptable
       (error "The frammis is out of tolerance by ~D%." error))))

```


```lisp
 (open-stream-p *standard-input*) *→ true*

```


```lisp
;; Note that the stream must accomodate at least the specified type,
;; but might accomodate other types.  Further note that even if it does
;; accomodate exactly the specified type, the type might be specified in
;; any of several ways.
 (with-open-file (s "test" :element-type '(integer 0 1)
                           :if-exists :error
                           :direction :output)
   (stream-element-type s))
*→* INTEGER
\OV (UNSIGNED-BYTE 16)
\OV (UNSIGNED-BYTE 8)
\OV BIT
\OV (UNSIGNED-BYTE 1)
\OV (INTEGER 0 1)
\OV (INTEGER 0 (2))

```


```lisp
 (streamp *terminal-io*) *→ true*
 (streamp 1) *→ false*

```


```lisp
 (streamp \param{object}) \EQ (typep \param{object} 'stream)

```


```lisp
 (with-open-file (s "temp-bytes" 
                     :direction :output
                     :element-type 'unsigned-byte)
    (write-byte 101 s)) *→* 101
 (with-open-file (s "temp-bytes" :element-type 'unsigned-byte)
    (format t "~S ~S" (read-byte s) (read-byte s nil 'eof)))
\OUT 101 EOF
*→* NIL

```


```lisp
 (with-open-file (s "temp-bytes" 
                    :direction :output
                    :element-type 'unsigned-byte)
    (write-byte 101 s)) *→* 101

```


```lisp
 (with-input-from-string (input-stream "    1 2 3 4 5")
    (format t "~S ~S ~S" 
            (peek-char t input-stream)
            (peek-char #\\4 input-stream)
            (peek-char nil input-stream)))
\OUT #\\1 #\\4 #\\4
*→* NIL

```


```lisp
 (with-input-from-string (is "0123")
    (do ((c (read-char is) (read-char is nil 'the-end)))
        ((not (characterp c)))
     (format t "~S " c)))
\OUT #\\0 #\\1 #\\2 #\\3
*→* NIL

```


```lisp
;; This code assumes an implementation in which a newline is not
;; required to terminate input from the console.
 (defun test-it ()
   (unread-char (read-char))
   (list (read-char-no-hang) 
         (read-char-no-hang) 
         (read-char-no-hang)))
*→* TEST-IT
;; Implementation A, where a Newline is not required to terminate
;; interactive input on the console.
 (test-it)
\OUT \IN{a}
*→* (#\\a NIL NIL)
;; Implementation B, where a Newline is required to terminate
;; interactive input on the console, and where that Newline remains
;; on the input stream.
 (test-it)
\OUT \IN{a\CRLF}
*→* (#\\a #\\Newline NIL)

```


```lisp
 (with-output-to-string (s)
    (write-string "some text" s)
    (terpri s)
    (terpri s)
    (write-string "more text" s))
*→* "some text

more text"
 (with-output-to-string (s)
    (write-string "some text" s)
    (fresh-line s)
    (fresh-line s)
    (write-string "more text" s))
*→* "some text
more text"

```


```lisp
 (write-char #\\Newline output-stream)

```


```lisp
 (with-input-from-string (is "0123")
    (dotimes (i 6)
      (let ((c (read-char is)))
        (if (evenp i) (format t "~&~S ~S~%" i c) (unread-char c is)))))
\OUT 0 #\\0
\OUT 2 #\\1
\OUT 4 #\\2
*→* NIL

```


```lisp
 (write-char #\\a)
\OUT a
*→* #\\a
 (with-output-to-string (s) 
   (write-char #\\a s)
   (write-char #\\Space s)
   (write-char #\\b s))
*→* "a b"

```


```lisp
 (setq a "line 1
 line2")
*→* "line 1
 line2"
 (read-line (setq input-stream (make-string-input-stream a)))
*→* "line 1", false
 (read-line input-stream)
*→* "line2", true
 (read-line input-stream nil nil)
*→* NIL, true

```


```lisp
 (prog1 (write-string "books" nil :end 4) (write-string "worms"))
\OUT bookworms
*→* "books"
 (progn (write-char #\\*)
        (write-line "test12" *standard-output* :end 5) 
        (write-line "*test2")
        (write-char #\\*)
        nil)
\OUT *test1
\OUT *test2
\OUT *
*→* NIL

```


```lisp
 (write-string string)
\EQ (dotimes (i (length string)
      (write-char (char string i)))

 (write-line string)
\EQ (prog1 (write-string string) (terpri))

```


```lisp
 (defvar *data* (make-array 15 :initial-element nil))
 (values (read-sequence *data* (make-string-input-stream "test string")) *data*)
 *→* 11, #(#\\t #\\e #\\s #\\t #\\Space #\\s #\\t #\\r #\\i #\\n #\\g NIL NIL NIL NIL)

```


```lisp
 (write-sequence "bookworms" *standard-output* :end 4)
 \OUT book
 *→* "bookworms"

```


```lisp
 (with-open-file (s "decimal-digits.text" 
                    :direction :output :if-exists :error)
   (princ "0123456789" s)
   (truename s))
*→* #P"A:>Joe>decimal-digits.text.1"
 (with-open-file (s "decimal-digits.text")
   (file-length s))
*→* 10

```


```lisp
 (defun tester ()
   (let ((noticed '()) file-written)
     (flet ((notice (x) (push x noticed) x))
       (with-open-file (s "test.bin" 
                          :element-type '(unsigned-byte 8)
                          :direction :output
                          :if-exists :error)
          (notice (file-position s)) ;1
          (write-byte 5 s) 
          (write-byte 6 s)
          (let ((p (file-position s)))
            (notice p) ;2
            (notice (when p (file-position s (1- p))))) ;3
          (write-byte 7 s)
          (notice (file-position s)) ;4
          (setq file-written (truename s)))
        (with-open-file (s file-written
                           :element-type '(unsigned-byte 8)
                           :direction :input)
          (notice (file-position s)) ;5
          (let ((length (file-length s)))
            (notice length) ;6
            (when length
              (dotimes (i length)
                (notice (read-byte s)))))) ;7,...
        (nreverse noticed))))
*→* tester
 (tester)
*→* (0 2 T 2 0 2 5 7)
\OV (0 2 NIL 3 0 3 5 6 7)
\OV (NIL NIL NIL NIL NIL NIL)

```


```lisp
%  (open \i{filespec} :direction :probe)  *→* #<Closed Probe File Stream...>
%  (setq q (merge-pathnames (user-homedir-pathname) "test"))
% *→* #<PATHNAME :HOST NIL :DEVICE \i{device-name} :DIRECTORY \i{directory-name}
%     :NAME "test" :TYPE NIL :VERSION :NEWEST>
%  (open \i{filespec} :if-does-not-exist :create) *→* #<Input File Stream...>
%  (setq s (open \i{filespec} :direction :probe)) *→* #<Closed Probe File Stream...>
%  (truename s) *→* #<PATHNAME :HOST NIL :DEVICE \i{device-name} :DIRECTORY
%     \i{directory-name} :NAME \i{filespec} :TYPE \i{extension} :VERSION 1>
%  (open s :direction :output :if-exists nil) *→* NIL 
% 
```


```lisp
 (open \i{filespec} :direction :probe)  *→* #<Closed Probe File Stream...>
 (setq q (merge-pathnames (user-homedir-pathname) "test"))
*→* #<PATHNAME :HOST NIL :DEVICE \i{device-name} :DIRECTORY \i{directory-name}
    :NAME "test" :TYPE NIL :VERSION :NEWEST>
 (open \i{filespec} :if-does-not-exist :create) *→* #<Input File Stream...>
 (setq s (open \i{filespec} :direction :probe)) *→* #<Closed Probe File Stream...>
 (truename s) *→* #<PATHNAME :HOST NIL :DEVICE \i{device-name} :DIRECTORY
    \i{directory-name} :NAME \i{filespec} :TYPE \i{extension} :VERSION 1>
 (open s :direction :output :if-exists nil) *→* NIL 

```


```lisp
 (with-open-file (stream "test" :direction :output)
   (stream-external-format stream))
*→* :DEFAULT
\OV :ISO8859/1-1987
\OV (:ASCII :SAIL)
\OV ACME::PROPRIETARY-FILE-FORMAT-17
\OV #<FILE-FORMAT :ISO646-1983 2343673>

```


```lisp
 (setq p (merge-pathnames "test"))
*→* #<PATHNAME :HOST NIL :DEVICE \i{device-name} :DIRECTORY \i{directory-name}
    :NAME "test" :TYPE NIL :VERSION :NEWEST>
 (with-open-file (s p :direction :output :if-exists :supersede)
    (format s "Here are a couple~%of test data lines~%")) *→* NIL
 (with-open-file (s p)
    (do ((l (read-line s) (read-line s nil 'eof)))
        ((eq l 'eof) "Reached end of file.")
     (format t "~&*** ~A~%" l)))
\OUT *** Here are a couple
\OUT *** of test data lines
*→* "Reached end of file."

```


```lisp
% (with-open-file (ifile name :direction :input)
%   (with-open-file (ofile (merge-pathname-defaults ifile
%                                                   nil
%                                                   "out")
%                          :direction :output
%                          :if-exists :supersede)
%     (transduce-file ifile ofile)))
%
```


```lisp
;; Normally one would not do this intentionally because it is
;; not perspicuous, but beware when using :IF-DOES-NOT-EXIST NIL
;; that this doesn't happen to you accidentally...
 (with-open-file (foo "no-such-file" :if-does-not-exist nil)
   (read foo))
\OUT \IN{hello?}
*→* HELLO? ;This value was read from the terminal, not a file!

;; Here's another bug to avoid...
 (with-open-file (foo "no-such-file" :direction :output :if-does-not-exist nil)
   (format foo "Hello"))
*→* "Hello" ;FORMAT got an argument of NIL!

```


```lisp
 (setq s (make-broadcast-stream)) *→* #<BROADCAST-STREAM>
 (close s) *→* T
 (output-stream-p s) *→ true*

```


```lisp
 (with-open-stream (s (make-string-input-stream "1 2 3 4"))
    (+ (read s) (read s) (read s))) *→* 6

```


```lisp
 (progn (unread-char (read-char)) (list (listen) (read-char)))
\OUT \IN{1}
*→* (T #\\1)
 (progn (clear-input) (listen))
*→* NIL ;Unless you're a very fast typist!

```


```lisp
;; The exact I/O behavior of this example might vary from implementation
;; to implementation depending on the kind of interactive buffering that
;; occurs.  (The call to SLEEP here is intended to help even out the 
;; differences in implementations which do not do line-at-a-time buffering.)

(defun read-sleepily (&optional (clear-p nil) (zzz 0))
  (list (progn (print '>) (read))
        ;; Note that input typed within the first ZZZ seconds 
        ;; will be discarded.
        (progn (print '>) 
               (if zzz (sleep zzz))
               (print '>>)
               (if clear-p (clear-input))
               (read))))

(read-sleepily)
\OUT > \IN{10}
\OUT >
\OUT >> \IN{20}
*→* (10 20)

(read-sleepily t)
\OUT > \IN{10}
\OUT >
\OUT >> \IN{20}
*→* (10 20)

(read-sleepily t 10)
\OUT > \IN{10}
\OUT > \IN{20}  ; Some implementations won't echo typeahead here.
\OUT >> \IN{30}
*→* (10 30)

```


```lisp
;; Implementation A
 (progn (princ "am i seen?") (clear-output))
*→* NIL

;; Implementation B
 (progn (princ "am i seen?") (clear-output))
\OUT am i seen?
*→* NIL

```


```lisp
 (y-or-n-p "(t or nil) given by")
\OUT (t or nil) given by (Y or N) \IN{Y}
*→ true*
 (yes-or-no-p "a ~S message" 'frightening) 
\OUT a FRIGHTENING message (Yes or No) \IN{no}
*→ false*
 (y-or-n-p "Produce listing file?") 
\OUT Produce listing file?
\OUT Please respond with Y or N. \IN{n}
*→ false*

```


```lisp
 (setq a-stream (make-string-input-stream "a-stream")
        b-stream (make-string-input-stream "b-stream"))
*→* #<String Input Stream> 
 (setq s-stream (make-synonym-stream 'c-stream))
*→* #<SYNONYM-STREAM for C-STREAM> 
 (setq c-stream a-stream)
*→* #<String Input Stream> 
 (read s-stream) *→* A-STREAM
 (setq c-stream b-stream)
*→* #<String Input Stream> 
 (read s-stream) *→* B-STREAM

```


```lisp
 (setq a-stream (make-string-output-stream)
        b-stream (make-string-output-stream)) *→* #<String Output Stream>
 (format (make-broadcast-stream a-stream b-stream)
          "this will go to both streams") *→* NIL
 (get-output-stream-string a-stream) *→* "this will go to both streams"
 (get-output-stream-string b-stream) *→* "this will go to both streams"

```


```lisp
 (with-output-to-string (out)
    (with-input-from-string (in "input...")
      (let ((two (make-two-way-stream in out)))
        (format two "output...")
        (setq what-is-read (read two))))) *→* "output..."
 what-is-read *→* INPUT... 

```


```lisp
 (let ((out (make-string-output-stream)))
    (with-open-stream 
        (s (make-echo-stream
            (make-string-input-stream "this-is-read-and-echoed")
            out))
      (read s)
      (format s " * this-is-direct-output")
      (get-output-stream-string out)))
*→* "this-is-read-and-echoed * this-is-direct-output"

```


```lisp
 (read (make-concatenated-stream
         (make-string-input-stream "1")
         (make-string-input-stream "2"))) *→* 12

```


```lisp
 (setq a-stream (make-string-output-stream)
        a-string "abcdefghijklm") *→* "abcdefghijklm"
 (write-string a-string a-stream) *→* "abcdefghijklm"
 (get-output-stream-string a-stream) *→* "abcdefghijklm"
 (get-output-stream-string a-stream) *→* ""

```


```lisp
 (let ((string-stream (make-string-input-stream "1 one ")))
   (list (read string-stream nil nil)
         (read string-stream nil nil)
         (read string-stream nil nil)))
*→* (1 ONE NIL)

 (read (make-string-input-stream "prefixtargetsuffix" 6 12)) *→* TARGET

```


```lisp
 (let ((s (make-string-output-stream)))
   (write-string "testing... " s)
   (prin1 1234 s)
   (get-output-stream-string s))
*→* "testing... 1234"

```


```lisp
 (with-input-from-string (s "XXX1 2 3 4xxx"
                             :index ind
                             :start 3 :end 10)
    (+ (read s) (read s) (read s))) *→* 6
 ind *→* 9
 (with-input-from-string (s "Animal Crackers" :index j :start 6)
   (read s)) *→* CRACKERS

```


```lisp
 (setq fstr (make-array '(0) :element-type 'base-char
                             :fill-pointer 0 :adjustable t)) *→* ""
 (with-output-to-string (s fstr)
    (format s "here's some output")
    (input-stream-p s)) *→ false*
 fstr *→* "here's some output"

```


```lisp
% %  (with-output-to-string (out)
% %    (with-input-from-string (in "enter > ")
% %      (let ((two-way (make-two-way-stream in out)))
% %        (setq *debug-io* two-way)))) *→* ""           
% %  *debug-io* *→* #<TWO-WAY-STREAM>
% % 
```


```lisp
%  (with-output-to-string (*error-output*)
%    (warn "this string is sent to *error-output*"))
%  *→* "Warning: this string is sent to *error-output*
% " ;The exact format of this string is \term{implementation-dependent}.
% 
```


```lisp
%  (with-input-from-string (*standard-input* "1001")
%     (+ 990 (read))) *→* 1991                       
% 
```


```lisp
%  (progn (setq out (with-output-to-string (*standard-output*)
%                      (print "print and format t send things to")
%                      (format t "*standard-output* now going to a string")))
%         :done)
% *→* :DONE
%  out
% *→* "
% \\"print and format t send things to\\" *standard-output* now going to a string"
% 
```


```lisp
%  (defun fact (n) (if (< n 2) 1 (* n (fact (- n 1)))))
% *→* FACT
%  (trace fact)
% *→* (FACT)
% ;; Of course, the format of traced output is implementation-dependent.
%  (with-output-to-string (*trace-output*)
%    (fact 3)) 
% *→* "
% 1 Enter FACT 3
% | 2 Enter FACT 2
% |   3 Enter FACT 1
% |   3 Exit FACT 1
% | 2 Exit FACT 2
% 1 Exit FACT 6"
% 
```


```lisp
%  (progn (prin1 'foo) (prin1 'bar *terminal-io*))
% \OUT FOOBAR
% *→* BAR
%  (with-output-to-string (*standard-output*)
%    (prin1 'foo) 
%    (prin1 'bar *terminal-io*))
% \OUT BAR
% *→* "FOO"
% 
```


```lisp
 (with-output-to-string (*error-output*)
   (warn "this string is sent to *error-output*"))
 *→* "Warning: this string is sent to *error-output*
" ;The exact format of this string is \term{implementation-dependent}.
\medbreak
 (with-input-from-string (*standard-input* "1001")
    (+ 990 (read))) *→* 1991                       
\medbreak
 (progn (setq out (with-output-to-string (*standard-output*)
                     (print "print and format t send things to")
                     (format t "*standard-output* now going to a string")))
        :done)
*→* :DONE
 out
*→* "
\\"print and format t send things to\\" *standard-output* now going to a string"
\medbreak
 (defun fact (n) (if (< n 2) 1 (* n (fact (- n 1)))))
*→* FACT
 (trace fact)
*→* (FACT)
;; Of course, the format of traced output is implementation-dependent.
 (with-output-to-string (*trace-output*)
   (fact 3)) 
*→* "
1 Enter FACT 3
| 2 Enter FACT 2
|   3 Enter FACT 1
|   3 Exit FACT 1
| 2 Exit FACT 2
1 Exit FACT 6"

```


```lisp
 (progn (prin1 'foo) (prin1 'bar *terminal-io*))
\OUT FOOBAR
*→* BAR
 (with-output-to-string (*standard-output*)
   (prin1 'foo) 
   (prin1 'bar *terminal-io*))
\OUT BAR
*→* "FOO"

```


```lisp
 (with-input-from-string (s "(FOO")
   (handler-case (read s)
     (end-of-file (c)
       (format nil "~&End of file on ~S." (stream-error-stream c)))))
"End of file on #<String Stream>."

```


```lisp
 (simple-string-p "aaaaaa") *→ true*
 (simple-string-p (make-array 6 
                              :element-type 'character 
                              :fill-pointer t)) *→ false*

```


```lisp
 (simple-string-p \param{object}) \EQ (typep \param{object} 'simple-string)

```


```lisp
 (setq my-simple-string (make-string 6 :initial-element #\\A)) *→* "AAAAAA"
 (schar my-simple-string 4) *→* #\\A
 (setf (schar my-simple-string 4) #\\B) *→* #\\B
 my-simple-string *→* "AAAABA"
 (setq my-filled-string
       (make-array 6 :element-type 'character
                     :fill-pointer 5
                     :initial-contents my-simple-string))
*→* "AAAAB"
 (char my-filled-string 4) *→* #\\B
 (char my-filled-string 5) *→* #\\A
 (setf (char my-filled-string 3) #\\C) *→* #\\C
 (setf (char my-filled-string 5) #\\D) *→* #\\D
 (setf (fill-pointer my-filled-string) 6) *→* 6
 my-filled-string *→* "AAACBD"

```


```lisp
 (char s j) \EQ (aref (the string s) j)

```


```lisp
 (string "already a string") *→* "already a string"
 (string 'elm) *→* "ELM"
 (string #\\c) *→* "c"

```


```lisp
 (string-upcase "abcde") *→* "ABCDE"
 (string-upcase "Dr. Livingston, I presume?")
*→* "DR. LIVINGSTON, I PRESUME?"
 (string-upcase "Dr. Livingston, I presume?" :start 6 :end 10)
*→* "Dr. LiVINGston, I presume?"
 (string-downcase "Dr. Livingston, I presume?")
*→* "dr. livingston, i presume?"

 (string-capitalize "elm 13c arthur;fig don't") *→* "Elm 13c Arthur;Fig Don'T"
 (string-capitalize " hello ") *→* " Hello "
 (string-capitalize "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION")
*→*  "Occluded Casements Forestall Inadvertent Defenestration"
 (string-capitalize 'kludgy-hash-search) *→* "Kludgy-Hash-Search"
 (string-capitalize "DON'T!") *→* "Don'T!"    ;not "Don't!"
 (string-capitalize "pipe 13a, foo16c") *→* "Pipe 13a, Foo16c"

 (setq str (copy-seq "0123ABCD890a")) *→* "0123ABCD890a"
 (nstring-downcase str :start 5 :end 7) *→* "0123AbcD890a"
 str *→* "0123AbcD890a"

```


```lisp
 (string-trim "abc" "abcaakaaakabcaaa") *→* "kaaak"
 (string-trim '(#\\Space #\\Tab #\\Newline) " garbanzo beans
        ") *→* "garbanzo beans"
 (string-trim " (*)" " ( *three (silly) words* ) ")
*→* "three (silly) words"

 (string-left-trim "abc" "labcabcabc") *→* "labcabcabc"
 (string-left-trim " (*)" " ( *three (silly) words* ) ")
*→* "three (silly) words* ) "

 (string-right-trim " (*)" " ( *three (silly) words* ) ") 
*→* " ( *three (silly) words"

```


```lisp
%  (not (= (- end1 start1) (- end2 start2)))
% 
```


```lisp
 (string= "foo" "foo") *→ true*
 (string= "foo" "Foo") *→ false*
 (string= "foo" "bar") *→ false*
 (string= "together" "frog" :start1 1 :end1 3 :start2 2) *→ true*
 (string-equal "foo" "Foo") *→ true*
 (string= "abcd" "01234abcd9012" :start2 5 :end2 9) *→ true*
 (string< "aaaa" "aaab") *→* 3
 (string>= "aaaaa" "aaaa") *→* 4
 (string-not-greaterp "Abcde" "abcdE") *→* 5
 (string-lessp "012AAAA789" "01aaab6" :start1 3 :end1 7
                                      :start2 2 :end2 6) *→* 6
 (string-not-equal "AAAA" "aaaA") *→ false*

```


```lisp
 (stringp "aaaaaa") *→ true*
 (stringp #\\a) *→ false*

```


```lisp
 (stringp \param{object}) \EQ (typep \param{object} 'string)

```


```lisp
 (make-string 10 :initial-element #\\5) *→* "5555555555"
 (length (make-string 10)) *→* 10

```


```lisp
 (defstruct person (name 007 :type string)) 
 (make-person :name "James")
 (make-person)

```


```lisp
 (defstruct ship
   (x-position 0.0 :type short-float)
   (y-position 0.0 :type short-float)
   (x-velocity 0.0 :type short-float)
   (y-velocity 0.0 :type short-float)
   (mass *default-ship-mass* :type short-float :read-only t))

```


```lisp
%  (defstruct door knob-color width material) *→* DOOR
%  (setq my-door (make-door :knob-color 'red :width 5.0)) 
% *→* #S(DOOR :KNOB-COLOR RED :WIDTH 5.0 :MATERIAL NIL)
%  (door-width my-door) *→* 5.0
%  (setf (door-width my-door) 43.7)
%  (door-width my-door) *→* 43.7
% 
```


```lisp
 (defstruct (door (:conc-name dr-)) knob-color width material) *→* DOOR
 (setq my-door (make-door :knob-color 'red :width 5.0)) 
*→* #S(DOOR :KNOB-COLOR RED :WIDTH 5.0 :MATERIAL NIL)
 (dr-width my-door) *→* 5.0
 (setf (dr-width my-door) 43.7) *→* 43.7
 (dr-width my-door) *→* 43.7

```


```lisp
 (\param{copier-name} x) = (copy-structure (the \param{structure-name} x))

```


```lisp
 (defstruct person name age sex)

```


```lisp
 (defstruct (astronaut (:include person)
                       (:conc-name astro-))
    helmet-size
    (favorite-beverage 'tang))

```


```lisp
 (setq x (make-astronaut :name 'buzz
                         :age 45.
                         :sex t
                         :helmet-size 17.5))
 (person-name x) *→* BUZZ
 (astro-name x) *→* BUZZ
 (astro-favorite-beverage x) *→* TANG

```


```lisp
 (reduce #'+ astros :key #'person-age) ; obtains the total of the ages 
                                       ; of the possibly empty
                                       ; sequence of astros

```


```lisp
 (typep (make-astronaut) 'person) *→ true*

```


```lisp
 (:include \param{included-structure-name} \starparam{slot-description})

```


```lisp
 (defstruct (astronaut (:include person (age 45)))
    helmet-size
    (favorite-beverage 'tang))

```


```lisp
 (defstruct (binop (:type list) :named (:initial-offset 2))
   (operator '? :type symbol)   
   operand-1
   operand-2) *→* BINOP
 (defstruct (annotated-binop (:type list)
                             (:initial-offset 3)
                             (:include binop))
  commutative associative identity) *→* ANNOTATED-BINOP
 (make-annotated-binop :operator '*
                       :operand-1 'x
                       :operand-2 5
                       :commutative t
                       :associative t
                       :identity 1)
   *→* (NIL NIL BINOP * X 5 NIL NIL NIL T T 1)

```


```lisp
 (defstruct (binop (:type list) (:initial-offset 2))
   (operator '? :type symbol)
   operand-1
   operand-2) *→* BINOP

```


```lisp
 (make-binop :operator '+ :operand-1 'x :operand-2 5)
*→* (NIL NIL + X 5)
 (make-binop :operand-2 4 :operator '*)
*→* (NIL NIL * NIL 4)

```


```lisp
 (defstruct (binop (:type list) :named (:initial-offset 2))
   (operator '? :type symbol)
   operand-1
   operand-2) *→* BINOP

```


```lisp
 (make-binop :operator '+ :operand-1 'x :operand-2 5) *→* (NIL NIL BINOP + X 5)
 (make-binop :operand-2 4 :operator '*) *→* (NIL NIL BINOP * NIL 4)

```


```lisp
 (defstruct (binop (:type list))
   (operator '? :type symbol)
   operand-1
   operand-2) *→* BINOP

```


```lisp
 (make-binop :operator '+ :operand-1 'x :operand-2 5) *→* (+ X 5)  
 (make-binop :operand-2 4 :operator '*) *→* (* NIL 4)

```


```lisp
 (defstruct (binop (:type list) :named)
   (operator '? :type symbol)
   operand-1
   operand-2) *→* BINOP

```


```lisp
 (make-binop :operator '+ :operand-1 'x :operand-2 5) *→* (BINOP + X 5)
 (make-binop :operand-2 4 :operator '*) *→* (BINOP * NIL 4)

```


```lisp
 (defun binop-p (x)
   (and (consp x) (eq (car x) 'binop))) *→* BINOP-P

```


```lisp
 (defmethod print-object ((object \param{structure-name}) stream)
   (funcall (function \param{printer-name}) object stream \metaparam{current-print-depth}))

```


```lisp
 (defmethod print-object ((object \param{structure-name}) stream)
   (funcall (function \param{printer-name}) object stream))

```


```lisp
 (defstruct (quux (:type list) :named) x y)

```


```lisp
 (deftype quux () '(satisfies quux-p))

```


```lisp
 (typep (make-quux) 'quux)

```


```lisp
 (typep (list 'quux nil nil) 'quux)

```


```lisp
 (defstruct ship
   x-position
   y-position
   x-velocity
   y-velocity
   mass)

```


```lisp
 (setq ship2 (make-ship))

```


```lisp
 (setq ship2 (make-ship :mass *default-ship-mass*
                        :x-position 0
                        :y-position 0))

```


```lisp
 (setf (ship-x-position ship2) 100)

```


```lisp
;;;
;;; Example 1
;;; define town structure type
;;; area, watertowers, firetrucks, population, elevation are its components
;;;
 (defstruct town
             area
             watertowers
             (firetrucks 1 :type fixnum)    ;an initialized slot
             population 
             (elevation 5128 :read-only t)) ;a slot that can't be changed
*→* TOWN
;create a town instance
 (setq town1 (make-town :area 0 :watertowers 0)) *→* #S(TOWN...)
;town's predicate recognizes the new instance
 (town-p town1) *→ true*
;new town's area is as specified by make-town
 (town-area town1) *→* 0
;new town's elevation has initial value
 (town-elevation town1) *→* 5128
;setf recognizes reader function
 (setf (town-population town1) 99) *→* 99
 (town-population town1) *→* 99
;copier function makes a copy of town1
 (setq town2 (copy-town town1)) *→* #S(TOWN...)
 (= (town-population town1) (town-population town2))  *→ true*
;since elevation is a read-only slot, its value can be set only
;when the structure is created
 (setq town3 (make-town :area 0 :watertowers 3 :elevation 1200))
*→* #S(TOWN...)
;;;
;;; Example 2
;;; define clown structure type
;;; this structure uses a nonstandard prefix
;;;
 (defstruct (clown (:conc-name bozo-))
             (nose-color 'red)         
             frizzy-hair-p polkadots) *→* CLOWN
 (setq funny-clown (make-clown)) *→* #S(CLOWN)
;use non-default reader name
 (bozo-nose-color funny-clown) *→* RED        
 (defstruct (klown (:constructor make-up-klown) ;similar def using other
             (:copier clone-klown)              ;customizing keywords
             (:predicate is-a-bozo-p))
             nose-color frizzy-hair-p polkadots) *→* klown
;custom constructor now exists
 (fboundp 'make-up-klown) *→ true*
;;;
;;; Example 3
;;; define a vehicle structure type
;;; then define a truck structure type that includes 
;;; the vehicle structure
;;;
 (defstruct vehicle name year (diesel t :read-only t)) *→* VEHICLE
 (defstruct (truck (:include vehicle (year 79)))
             load-limit                          
             (axles 6)) *→* TRUCK
 (setq x (make-truck :name 'mac :diesel t :load-limit 17))
*→* #S(TRUCK...)
;vehicle readers work on trucks
 (vehicle-name x)
*→* MAC
;default taken from :include clause 
 (vehicle-year x)
*→* 79 
 (defstruct (pickup (:include truck))     ;pickup type includes truck
             camper long-bed four-wheel-drive) *→* PICKUP
 (setq x (make-pickup :name 'king :long-bed t)) *→* #S(PICKUP...)
;:include default inherited
 (pickup-year x) *→* 79
;;;
;;; Example 4
;;; use of BOA constructors
;;;
 (defstruct (dfs-boa                      ;BOA constructors
               (:constructor make-dfs-boa (a b c)) 
               (:constructor create-dfs-boa
                 (a &optional b (c 'cc) &rest d &aux e (f 'ff))))
             a b c d e f) *→* DFS-BOA
;a, b, and c set by position, and the rest are uninitialized
 (setq x (make-dfs-boa 1 2 3)) *→* #(DFS-BOA...)
 (dfs-boa-a x) *→* 1
;a and b set, c and f defaulted
 (setq x (create-dfs-boa 1 2)) *→* #(DFS-BOA...)
 (dfs-boa-b x) *→* 2
 (eq (dfs-boa-c x) 'cc) *→ true*
;a, b, and c set, and the rest are collected into d
 (setq x (create-dfs-boa 1 2 3 4 5 6)) *→* #(DFS-BOA...)
 (dfs-boa-d x) *→* (4 5 6)

```


```lisp
 (symbolp 'elephant) *→ true*
 (symbolp 12) *→ false*
 (symbolp nil) *→ true*
 (symbolp '()) *→ true*
 (symbolp :test) *→ true*
 (symbolp "hello") *→ false*

```


```lisp
 (symbolp \param{object}) \EQ (typep \param{object} 'symbol)

```


```lisp
 (keywordp 'elephant) *→ false*
 (keywordp 12) *→ false*
 (keywordp :test) *→ true*
 (keywordp ':test) *→ true*
 (keywordp nil) *→ false*
 (keywordp :nil) *→ true*
 (keywordp '(:test)) *→ false*
 (keywordp "hello") *→ false*
 (keywordp ":hello") *→ false*
 (keywordp '&optional) *→ false*

```


```lisp
 (setq temp-string "temp") *→* "temp"
 (setq temp-symbol (make-symbol temp-string)) *→* #:|temp|
 (symbol-name temp-symbol) *→* "temp"
 (eq (symbol-name temp-symbol) temp-string) *→* \term{implementation-dependent}
 (find-symbol "temp") *→* NIL, NIL
 (eq (make-symbol temp-string) (make-symbol temp-string)) *→ false*

```


```lisp
 (setq fred 'fred-smith) *→* FRED-SMITH
 (setf (symbol-value fred) 3) *→* 3
 (setq fred-clone-1a (copy-symbol fred nil)) *→* #:FRED-SMITH
 (setq fred-clone-1b (copy-symbol fred nil)) *→* #:FRED-SMITH
 (setq fred-clone-2a (copy-symbol fred t))   *→* #:FRED-SMITH
 (setq fred-clone-2b (copy-symbol fred t))   *→* #:FRED-SMITH
 (eq fred fred-clone-1a) *→ false*
 (eq fred-clone-1a fred-clone-1b) *→ false*
 (eq fred-clone-2a fred-clone-2b) *→ false*
 (eq fred-clone-1a fred-clone-2a) *→ false*
 (symbol-value fred) *→* 3
 (boundp fred-clone-1a) *→ false*
 (symbol-value fred-clone-2a) *→* 3
 (setf (symbol-value fred-clone-2a) 4) *→* 4
 (symbol-value fred) *→* 3
 (symbol-value fred-clone-2a) *→* 4
 (symbol-value fred-clone-2b) *→* 3
 (boundp fred-clone-1a) *→ false*
 (setf (symbol-function fred) #'(lambda (x) x)) *→* #<FUNCTION anonymous>
 (fboundp fred) *→ true*
 (fboundp fred-clone-1a) *→ false*
 (fboundp fred-clone-2a) *→ false*

```


```lisp
% (copy-symbol \param{x} nil) \EQ (make-symbol (symbol-name \param{x}))
% 
```


```lisp
 (setq sym1 (gensym)) *→* #:G3142
 (symbol-package sym1) *→* NIL
 (setq sym2 (gensym 100)) *→* #:G100
 (setq sym3 (gensym 100)) *→* #:G100
 (eq sym2 sym3) *→ false*
 (find-symbol "G100") *→* NIL, NIL
 (gensym "T") *→* #:T3143
 (gensym) *→* #:G3144

```


```lisp
 (gentemp) *→* T1298
 (gentemp "FOO") *→* FOO1299
 (find-symbol "FOO1300") *→* NIL, NIL
 (gentemp "FOO") *→* FOO1300
 (find-symbol "FOO1300") *→* FOO1300, :INTERNAL
 (intern "FOO1301") *→* FOO1301, :INTERNAL
 (gentemp "FOO") *→* FOO1302
 (gentemp) *→* T1303

```


```lisp
 (symbol-function 'car) *→* #<FUNCTION CAR>
 (symbol-function 'twice) is an error   ;because TWICE isn't defined.
 (defun twice (n) (* n 2)) *→* TWICE
 (symbol-function 'twice) *→* #<FUNCTION TWICE>
 (list (twice 3)
       (funcall (function twice) 3)
       (funcall (symbol-function 'twice) 3))
*→* (6 6 6)
 (flet ((twice (x) (list x x)))
   (list (twice 3)
         (funcall (function twice) 3)
         (funcall (symbol-function 'twice) 3)))
*→* ((3 3) (3 3) 6)   
 (setf (symbol-function 'twice) #'(lambda (x) (list x x)))
*→* #<FUNCTION anonymous>
 (list (twice 3)
       (funcall (function twice) 3)
       (funcall (symbol-function 'twice) 3))
*→* ((3 3) (3 3) (3 3))
 (fboundp 'defun) *→ true*
 (symbol-function 'defun)
*→* \term{implementation-dependent}
 (functionp (symbol-function 'defun))
*→* \term{implementation-dependent}
 (defun symbol-function-or-nil (symbol)
   (if (and (fboundp symbol) 
            (not (macro-function symbol))
            (not (special-operator-p symbol)))
       (symbol-function symbol)
       nil)) *→* SYMBOL-FUNCTION-OR-NIL
 (symbol-function-or-nil 'car) *→* #<FUNCTION CAR>
 (symbol-function-or-nil 'defun) *→* NIL

```


```lisp
(symbol-function \param{symbol}) \EQ (fdefinition \param{symbol})

```


```lisp
 (symbol-name 'temp) *→* "TEMP" 
 (symbol-name :start) *→* "START"
 (symbol-name (gensym)) *→* "G1234" ;for example

```


```lisp
 (in-package "CL-USER") *→* #<PACKAGE "COMMON-LISP-USER">
 (symbol-package 'car) *→* #<PACKAGE "COMMON-LISP">
 (symbol-package 'bus) *→* #<PACKAGE "COMMON-LISP-USER">
 (symbol-package :optional) *→* #<PACKAGE "KEYWORD">
 ;; Gensyms are uninterned, so have no home package.
 (symbol-package (gensym)) *→* NIL
 (make-package 'pk1) *→* #<PACKAGE "PK1">
 (intern "SAMPLE1" "PK1") *→* PK1::SAMPLE1, NIL
 (export (find-symbol "SAMPLE1" "PK1") "PK1") *→* T
 (make-package 'pk2 :use '(pk1)) *→* #<PACKAGE "PK2">
 (find-symbol "SAMPLE1" "PK2") *→* PK1:SAMPLE1, :INHERITED
 (symbol-package 'pk1::sample1) *→* #<PACKAGE "PK1">
 (symbol-package 'pk2::sample1) *→* #<PACKAGE "PK1">
 (symbol-package 'pk1::sample2) *→* #<PACKAGE "PK1">
 (symbol-package 'pk2::sample2) *→* #<PACKAGE "PK2">
 ;; The next several forms create a scenario in which a symbol
 ;; is not really uninterned, but is "apparently uninterned",
 ;; and so SYMBOL-PACKAGE still returns NIL.
 (setq s3 'pk1::sample3) *→* PK1::SAMPLE3
 (import s3 'pk2) *→* T
 (unintern s3 'pk1) *→* T
 (symbol-package s3) *→* NIL
 (eq s3 'pk2::sample3) *→* T

```


```lisp
 (setq sym (gensym)) *→* #:G9723
 (symbol-plist sym) *→* ()
 (setf (get sym 'prop1) 'val1) *→* VAL1
 (symbol-plist sym) *→* (PROP1 VAL1)
 (setf (get sym 'prop2) 'val2) *→* VAL2
 (symbol-plist sym) *→* (PROP2 VAL2 PROP1 VAL1)
 (setf (symbol-plist sym) (list 'prop3 'val3)) *→* (PROP3 VAL3)
 (symbol-plist sym) *→* (PROP3 VAL3)

```


```lisp
 (setf (symbol-value 'a) 1) *→* 1
 (symbol-value 'a) *→* 1
 ;; SYMBOL-VALUE cannot see lexical variables.
 (let ((a 2)) (symbol-value 'a)) *→* 1
 (let ((a 2)) (setq a 3) (symbol-value 'a)) *→* 1
 ;; SYMBOL-VALUE can see dynamic variables.
 (let ((a 2)) 
   (declare (special a)) 
   (symbol-value 'a)) *→* 2
 (let ((a 2)) 
   (declare (special a)) 
   (setq a 3)
   (symbol-value 'a)) *→* 3
 (let ((a 2))
   (setf (symbol-value 'a) 3)
   a) *→* 2
 a *→* 3
 (symbol-value 'a) *→* 3
 (let ((a 4))
   (declare (special a))
   (let ((b (symbol-value 'a)))
     (setf (symbol-value 'a) 5)
     (values a b))) *→* 5, 4
 a *→* 3
 (symbol-value :any-keyword) *→* :ANY-KEYWORD
 (symbol-value 'nil) *→* NIL
 (symbol-value '()) *→* NIL
 ;; The precision of this next one is \term{implementation-dependent}.
 (symbol-value 'pi) *→* 3.141592653589793d0  

```


```lisp
 (defun make-person (first-name last-name)
   (let ((person (gensym "PERSON")))
     (setf (get person 'first-name) first-name)
     (setf (get person 'last-name) last-name)
     person)) *→* MAKE-PERSON
 (defvar *john* (make-person "John" "Dow")) *→* *JOHN*
 *john* *→* #:PERSON4603
 (defvar *sally* (make-person "Sally" "Jones")) *→* *SALLY*
 (get *john* 'first-name) *→* "John"
 (get *sally* 'last-name) *→* "Jones"
 (defun marry (man woman married-name)
   (setf (get man 'wife) woman)
   (setf (get woman 'husband) man)
   (setf (get man 'last-name) married-name)
   (setf (get woman 'last-name) married-name)
   married-name) *→* MARRY
 (marry *john* *sally* "Dow-Jones") *→* "Dow-Jones"
 (get *john* 'last-name) *→* "Dow-Jones"
 (get (get *john* 'wife) 'first-name) *→* "Sally"
 (symbol-plist *john*)
*→* (WIFE #:PERSON4604 LAST-NAME "Dow-Jones" FIRST-NAME "John")
 (defmacro age (person &optional (default ''thirty-something)) 
   `(get ,person 'age ,default)) *→* AGE
 (age *john*) *→* THIRTY-SOMETHING
 (age *john* 20) *→* 20
 (setf (age *john*) 25) *→* 25
 (age *john*) *→* 25
 (age *john* 20) *→* 25

```


```lisp
 (get x y) \EQ (getf (symbol-plist x) y)

```


```lisp
%  (get 'clyde 'species) *→* NIL
%  (setf (get 'clyde 'species) 'elephant) *→* elephant
%  (get 'clyde 'species) *→* ELEPHANT
% 
```


```lisp
%  (push item (get sym 'token-stack '(initial-item)))
% 
```


```lisp
%  (setf (get sym 'token-stack '(initial-item))
%        (cons item (get sym 'token-stack '(initial-item))))
% 
```


```lisp
%  (setf (get sym 'token-stack)
%        (cons item (get sym 'token-stack '(initial-item))))
% 
```


```lisp
 (remprop \i{x} \i{y}) \EQ (remf (symbol-plist \i{x}) \i{y})

```


```lisp
 (setq test (make-symbol "PSEUDO-PI")) *→* #:PSEUDO-PI
 (symbol-plist test) *→* ()
 (setf (get test 'constant) t) *→* T
 (setf (get test 'approximation) 3.14) *→* 3.14
 (setf (get test 'error-range) 'noticeable) *→* NOTICEABLE
 (symbol-plist test) 
*→* (ERROR-RANGE NOTICEABLE APPROXIMATION 3.14 CONSTANT T)
 (setf (get test 'approximation) nil) *→* NIL
 (symbol-plist test) 
*→* (ERROR-RANGE NOTICEABLE APPROXIMATION NIL CONSTANT T)
 (get test 'approximation) *→* NIL
 (remprop test 'approximation) *→ true*
 (get test 'approximation) *→* NIL
 (symbol-plist test)
*→* (ERROR-RANGE NOTICEABLE CONSTANT T)
 (remprop test 'approximation) *→* NIL
 (symbol-plist test)
*→* (ERROR-RANGE NOTICEABLE CONSTANT T)
 (remprop test 'error-range) *→ true*
 (setf (get test 'approximation) 3) *→* 3
 (symbol-plist test)
*→* (APPROXIMATION 3 CONSTANT T)

```


```lisp
 (setq x 1) *→* 1
 (boundp 'x) *→ true*
 (makunbound 'x) *→* X
 (boundp 'x) *→ false*
 (let ((x 2)) (boundp 'x)) *→ false*
 (let ((x 2)) (declare (special x)) (boundp 'x)) *→ true*

```


```lisp
 (setf (symbol-value 'a) 1)
 (boundp 'a) *→ true*
 a *→* 1
 (makunbound 'a) *→* A
 (boundp 'a) *→ false*

```


```lisp
(set \param{symbol} \param{value}) \EQ (setf (symbol-value \param{symbol}) \param{value})

```


```lisp
 (setf (symbol-value 'n) 1) *→* 1
 (set 'n 2) *→* 2
 (symbol-value 'n) *→* 2
 (let ((n 3))
   (declare (special n))
   (setq n (+ n 1))
   (setf (symbol-value 'n) (* n 10))
   (set 'n (+ (symbol-value 'n) n))
   n) *→* 80
 n *→* 2
 (let ((n 3))
   (setq n (+ n 1))
   (setf (symbol-value 'n) (* n 10))
   (set 'n (+ (symbol-value 'n) n))
   n) *→* 4
 n *→* 44
 (defvar *n* 2)
 (let ((*n* 3))
   (setq *n* (+ *n* 1))
   (setf (symbol-value '*n*) (* *n* 10))
   (set '*n* (+ (symbol-value '*n*) *n*))
   *n*) *→* 80
  *n* *→* 2
 (defvar *even-count* 0) *→* *EVEN-COUNT*
 (defvar *odd-count* 0) *→* *ODD-COUNT*
 (defun tally-list (list)
   (dolist (element list)
     (set (if (evenp element) '*even-count* '*odd-count*)
          (+ element (if (evenp element) *even-count* *odd-count*)))))
 (tally-list '(1 9 4 3 2 7)) *→* NIL
 *even-count* *→* 6
 *odd-count* *→* 20

```


```lisp
;Establish a data file...
 (with-open-file (str "data.in" :direction :output :if-exists :error)
   (print 1 str) (print '(setq a 888) str) t)
*→* T
 (load "data.in") *→ true*
 a *→* 888
 (load (setq p (merge-pathnames "data.in")) :verbose t)
; Loading contents of file /fred/data.in
; Finished loading /fred/data.in
*→ true*
 (load p :print t) 
; Loading contents of file /fred/data.in
;  1
;  888
; Finished loading /fred/data.in
*→ true*

```


```lisp
 ;----[Begin file SETUP]----
 (in-package "MY-STUFF")
 (defmacro compile-truename () `',*compile-file-truename*)
 (defvar *my-compile-truename* (compile-truename) "Just for debugging.")
 (defvar *my-load-pathname* *load-pathname*)
 (defun load-my-system ()
   (dolist (module-name '("FOO" "BAR" "BAZ"))
     (load (merge-pathnames module-name *my-load-pathname*))))
 ;----[End of file SETUP]----

 
 (load "SETUP")
 (load-my-system)

```


```lisp
 (with-compilation-unit (:override nil) ...)

```


```lisp
 (defun compile-files (&rest files)
   (with-compilation-unit ()
     (mapcar #'(lambda (file) (compile-file file)) files)))

 (compile-files "A" "B" "C")

```


```lisp
%  ;;;; New and improved lisp init file for I. Newton
% 
%  ;;; Set up the CL-USER package the way I like it.
%  (require "CALCULUS")     ; I use CALCULUS a lot. Load it.
%  (use-package "CALCULUS") ; Get easy access to exported symbols.
% 
%  (require "NEWTONIAN-MECHANICS") ;Ditto for NEWTONIAN-MECHANICS
%  (use-package "NEWTONIAN-MECHANICS")
% 
%  ;;; Ignore that Relativity stuff until they've got it debugged better.
%  ;(require "RELATIVITY")
% 
%  ;;; These are worth loading, but I'll use qualified names, such
%  ;;; as PHLOGISTON:MAKE-FIRE-BOTTLE, to get any symbols I might need.
%  (require "PHLOGISTON")
%  (require "ALCHEMY")
% 
%  (provide "NEWTON-PERSONAL-PREFERENCES")
% 
```


```lisp
;;; This illustrates a nonportable use of REQUIRE, because it
;;; depends on the implementation-dependent file-loading mechanism.

(require "CALCULUS")

;;; This use of REQUIRE is nonportable because of the literal 
;;; physical pathname.  

(require "CALCULUS" "/usr/lib/lisp/calculus")

;;; One form of portable usage involves supplying a logical pathname,
;;; with appropriate translations defined elsewhere.

(require "CALCULUS" "lib:calculus")

;;; Another form of portable usage involves using a variable or
;;; table lookup function to determine the pathname, which again
;;; must be initialized elsewhere.

(require "CALCULUS" *calculus-module-pathname*)

```


```lisp
 (function ((integer 0) &key (:initial-element t)) list)

```


```lisp
 (ftype (function (arg0-type arg1-type ...) val-type) f))

```


```lisp
 (the val-type (f (the arg0-type arg0) (the arg1-type arg1) ...))

```


```lisp
 (type (function (arg0-type arg1-type ...) val-type) fn-valued-variable)

```


```lisp
 (ftype (function (arg0-type1 arg1-type1 ...) val-type1) f))

```


```lisp
 (ftype (function (arg0-type2 arg1-type2 ...) val-type2) f))

```


```lisp
 (ftype (function ((and arg0-type1 arg0-type2) (and arg1-type1 arg1-type2 ...) ...)
                  (and val-type1 val-type2)) 
        f))

```


```lisp
%  (deftype standard-char () '(and character (satisfies standard-char-p)))
% 
```


```lisp
 (coerce '(a b c) 'vector) *→* #(A B C)
 (coerce 'a 'character) *→* #\\A
 (coerce 4.56 'complex) *→* #C(4.56 0.0)
 (coerce 4.5s0 'complex) *→* #C(4.5s0 0.0s0)
 (coerce 7/2 'complex) *→* 7/2
 (coerce 0 'short-float) *→* 0.0s0
 (coerce 3.5L0 'float) *→* 3.5L0
 (coerce 7/2 'float) *→* 3.5
 (coerce (cons 1 2) t) *→* (1 . 2)

```


```lisp
 (coerce '(a b c) '(vector * 4))
 (coerce #(a b c) '(vector * 4))
 (coerce '(a b c) '(vector * 2))
 (coerce #(a b c) '(vector * 2))
 (coerce "foo" '(string 2))
 (coerce #(#\\a #\\b #\\c) '(string 2))
 (coerce '(0 1) '(simple-bit-vector 3))

```


```lisp
 (coerce x 't) \EQ (identity x) \EQ x

```


```lisp
 (defun equidimensional (a)
   (or (< (array-rank a) 2)
       (apply #'= (array-dimensions a)))) *→* EQUIDIMENSIONAL
 (deftype square-matrix (&optional type size)
   `(and (array ,type (,size ,size))
         (satisfies equidimensional))) *→* SQUARE-MATRIX

```


```lisp
 (subtypep '(array T1) '(array T2)) *→ true*

```


```lisp
 (upgraded-array-element-type 'T1)  and
 (upgraded-array-element-type 'T2)  

```


```lisp
 (subtypep '(complex T1) '(complex T2)) *→ true*, true

```


```lisp
 (subtypep '(complex single-float) '(complex float))

```


```lisp
 (subtypep '(array single-float) '(array float))

```


```lisp
 (subtypep 'compiled-function 'function) *→ true*, true
 (subtypep 'null 'list) *→ true*, true
 (subtypep 'null 'symbol) *→ true*, true
 (subtypep 'integer 'string) *→ false*, true
 (subtypep '(satisfies dummy) nil) *→ false*, \term{implementation-dependent}
 (subtypep '(integer 1 3) '(integer 1 4)) *→ true*, true
 (subtypep '(integer (0) (0)) 'nil) *→ true*, true
 (subtypep 'nil '(integer (0) (0))) *→ true*, true
 (subtypep '(integer (0) (0)) '(member)) *→ true*, true ;or false, false
 (subtypep '(member) 'nil) *→ true*, true ;or false, false
 (subtypep 'nil '(member)) *→ true*, true ;or false, false

```


```lisp
  (subtypep (array-element-type (make-array 0 :element-type '<aet-x>))
            (array-element-type (make-array 0 :element-type '<aet-y>)))
*→ true*, true
 
  (subtypep (array-element-type (make-array 0 :element-type '<aet-y>))
            (array-element-type (make-array 0 :element-type '<aet-x>)))
*→ true*, true

```


```lisp
 (subtypep '(array <aet-x>) '(array <aet-y>)) *→ true*, true
 (subtypep '(array <aet-y>) '(array <aet-x>)) *→ true*, true

```


```lisp
 (subtypep (type-of \param{object}) (class-of \param{object})) *→ true*, true

```


```lisp
% (type-of "abc") *→* SIMPLE-STRING
% (type-of "abc") *→* STRING
% (type-of "abc") *→* ARRAY
%
```


```lisp

```


```lisp
 (type-of 'a) *→* SYMBOL          
 (type-of '(1 . 2))
*→* CONS
\OV (CONS FIXNUM FIXNUM)
 (type-of #c(0 1))
*→* COMPLEX
\OV (COMPLEX INTEGER)
 (defstruct temp-struct x y z) *→* TEMP-STRUCT
 (type-of (make-temp-struct)) *→* TEMP-STRUCT
 (type-of "abc")
*→* STRING
\OV (STRING 3)
 (subtypep (type-of "abc") 'string) *→ true*, true
 (type-of (expt 2 40))
*→* BIGNUM
\OV INTEGER
\OV (INTEGER 1099511627776 1099511627776)
\OV SYSTEM::TWO-WORD-BIGNUM
\OV FIXNUM
 (subtypep (type-of 112312) 'integer) *→ true*, true
 (defvar *foo* (make-array 5 :element-type t)) *→* *FOO*
 (class-name (class-of *foo*)) *→* VECTOR
 (type-of *foo*)
*→* VECTOR
\OV (VECTOR T 5)

```


```lisp
 (typep realpart 'type-specifier)
 (typep imagpart 'type-specifier)

```


```lisp
 (typep 12 'integer) *→ true*
 (typep (1+ most-positive-fixnum) 'fixnum) *→ false*
 (typep nil t) *→ true*
 (typep nil nil) *→ false*
 (typep 1 '(mod 2)) *→ true*
 (typep #c(1 1) '(complex (eql 1))) *→ true*
;; To understand this next example, you might need to refer to
;; \secref\RuleOfCanonRepForComplexRationals.
 (typep #c(0 0) '(complex (eql 0))) *→ false*

```


```lisp
 (upgraded-array-element-type 'A\sssx)

```


```lisp
 (upgraded-array-element-type 'A\sssy)

```


```lisp
 (typep (make-array 0 :element-type 'A\sssx) '(array A\sssx)) *→ true*
 (typep (make-array 0 :element-type 'A\sssy) '(array A\sssy)) *→ true*
 (typep (make-array 0 :element-type 'A\sssx) '(array A\sssy)) *→ true*
 (typep (make-array 0 :element-type 'A\sssy) '(array A\sssx)) *→ true*

```


```lisp


```


```lisp
 (defun fix-digits (condition)
   (check-type condition type-error)
   (let* ((digits '(zero one two three four
                   five six seven eight nine))
         (val (position (type-error-datum condition) digits)))
     (if (and val (subtypep 'fixnum (type-error-expected-type condition)))
         (store-value 7))))
 
 (defun foo (x)
   (handler-bind ((type-error #'fix-digits))
     (check-type x number)
     (+ x 3)))
 
 (foo 'seven)
*→* 10

```


```lisp...
```


```lisp{\screen!}
\def
```

