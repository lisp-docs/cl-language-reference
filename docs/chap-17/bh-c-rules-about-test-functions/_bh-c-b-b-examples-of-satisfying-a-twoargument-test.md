```lisp

(remove "FOO" ’(foo bar "FOO" "BAR" "foo" "bar") :test #’equal) 
*→* (foo bar "BAR" "foo" "bar") 
(remove "FOO" ’(foo bar "FOO" "BAR" "foo" "bar") :test #’equalp) 
*→* (foo bar "BAR" "bar") 
(remove "FOO" ’(foo bar "FOO" "BAR" "foo" "bar") :test #’string-equal) 
*→* (bar "BAR" "bar") 
(remove "FOO" ’(foo bar "FOO" "BAR" "foo" "bar") :test #’string=) 
*→* (BAR "BAR" "foo" "bar") 
(remove 1 ’(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) :test-not #’eql) 
*→* (1) 
(remove 1 ’(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) :test-not #’=) 
*→* (1 1.0 #C(1.0 0.0)) 
(remove 1 ’(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) :test (complement #’=)) 
*→* (1 1.0 #C(1.0 0.0)) 
(count 1 ’((one 1) (uno 1) (two 2) (dos 2)) :key #’cadr) *→* 2 
(count 2.0 ’(1 2 3) :test #’eql :key #’float) *→* 1 
(count "FOO" (list (make-pathname :name "FOO" :type "X") 
		   (make-pathname :name "FOO" :type "Y")) 
       :key #’pathname-name 
       :test #’equal) 
*→* 2 

```