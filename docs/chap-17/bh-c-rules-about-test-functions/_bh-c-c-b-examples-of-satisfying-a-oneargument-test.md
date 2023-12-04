 



(count-if #’zerop ’(1 #C(0.0 0.0) 0 0.0d0 0.0s0 3)) *→* 4 



(remove-if-not #’symbolp ’(0 1 2 3 4 5 6 7 8 9 A B C D E F)) 



*→* (A B C D E F) 



(remove-if (complement #’symbolp) ’(0 1 2 3 4 5 6 7 8 9 A B C D E F)) 



*→* (A B C D E F) 



(count-if #’zerop ’("foo" "" "bar" "" "" "baz" "quux") :key #’length) 



*→* 3 







 



 



