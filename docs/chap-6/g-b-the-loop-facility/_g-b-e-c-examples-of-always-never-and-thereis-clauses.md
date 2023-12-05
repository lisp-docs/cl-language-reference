 



;; Make sure I is always less than 11 (two ways). 



;; The FOR construct terminates these loops. 



(loop for i from 0 to 10 



always (&lt; i 11)) 



*→* T 



(loop for i from 0 to 10 



never (&gt; i 11)) 



*→* T 



;; If I exceeds 10 return I; otherwise, return NIL. 



;; The THEREIS construct terminates this loop. 



(loop for i from 0 



thereis (when (&gt; i 10) i) ) 



*→* 11 



;;; The FINALLY clause is not evaluated in these examples. 



(loop for i from 0 to 10 



always (&lt; i 9) 



finally (print "you won’t see this")) 



*→* NIL 



(loop never t 



finally (print "you won’t see this")) 



*→* NIL 



(loop thereis "Here is my value" 



finally (print "you won’t see this")) 



*→* "Here is my value" 



;; The FOR construct terminates this loop, so the FINALLY clause 



;; is evaluated. 



(loop for i from 1 to 10 



thereis (&gt; i 11) 



finally (prin1 ’got-here)) 



▷ GOT-HERE 



*→* NIL 



;; If this code could be used to find a counterexample to Fermat’s 



;; last theorem, it would still not return the value of the 



;; counterexample because all of the THEREIS clauses in this example 



;; only return T. But if Fermat is right, that won’t matter 



;; because this won’t terminate. 



(loop for z upfrom 2 







 



 



thereis 



(loop for n upfrom 3 below (log z 2) 



thereis 



(loop for x below z 



thereis 



(loop for y below z 



thereis (= (+ (expt x n) (expt y n)) 



(expt z n)))))) 



