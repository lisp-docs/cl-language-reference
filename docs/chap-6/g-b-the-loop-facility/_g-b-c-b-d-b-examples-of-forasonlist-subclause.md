 



;; Collect successive tails of a list. 



(loop for sublist on ’(a b c d) 



collect sublist) 



*→* ((A B C D) (B C D) (C D) (D)) 



;; Print a list by using destructuring with the loop keyword ON. 



(loop for (item) on ’(1 2 3) 



do (print item)) 



▷ 1 



▷ 2 



▷ 3 



*→* NIL 



