 



;; Group conditional clauses. 



(loop for i in ’(1 324 2345 323 2 4 235 252) 



when (oddp i) 



do (print i) 



and collect i into odd-numbers 



and do (terpri) 



else ; I is even. 



collect i into even-numbers 



finally 



(return (values odd-numbers even-numbers))) 



▷ 1 



▷ 



▷ 2345 



▷ 



▷ 323 



▷ 



▷ 235 



*→* (1 2345 323 235), (324 2 4 252) 







 



 



;; Collect numbers larger than 3. 



(loop for i in ’(1 2 3 4 5 6) 



when (and (> i 3) i) 



collect it) ; IT refers to (and (> i 3) i). 



*→* (4 5 6) 



;; Find a number in a list. 



(loop for i in ’(1 2 3 4 5 6) 



when (and (> i 3) i) 



return it) 



*→* 4 



;; The above example is similar to the following one. 



(loop for i in ’(1 2 3 4 5 6) 



thereis (and (> i 3) i)) 



*→* 4 



;; Nest conditional clauses. 



(let ((list ’(0 3.0 apple 4 5 9.8 orange banana))) 



(loop for i in list 



when (numberp i) 



when (floatp i) 



collect i into float-numbers 



else ; Not (floatp i) 



collect i into other-numbers 



else ; Not (numberp i) 



when (symbolp i) 



collect i into symbol-list 



else ; Not (symbolp i) 



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



▷ 0 a b c 



▷ 1 



▷ 2 a c 



▷ 3 



*→* NIL 



