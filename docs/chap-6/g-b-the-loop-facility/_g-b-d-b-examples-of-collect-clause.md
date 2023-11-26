**6.1.3.1 Examples of COLLECT clause** 

;; Collect all the symbols in a list. 

(loop for i in ’(bird 3 4 turtle (1 . 4) horse cat) 

when (symbolp i) collect i) 

*→* (BIRD TURTLE HORSE CAT) 

;; Collect and return odd numbers. 

(loop for i from 1 to 10 

if (oddp i) collect i) 

*→* (1 3 5 7 9) 

;; Collect items into local variable, but don’t return them. 

(loop for i in ’(a b c d) by #’cddr 

collect i into my-list 

finally (print my-list)) 

&#9655; (A C) 

*→* NIL 

