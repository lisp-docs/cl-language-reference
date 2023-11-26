**3.4.1.4.1.1 Examples of Suppressing Keyword Argument Checking** 

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

;;; debugger). In unsafe code, the consequences are undefined. 

((lambda (&key x) x) ;This call is not valid 

:x 1 :y 2 :allow-other-keys nil :allow-other-keys t) 

