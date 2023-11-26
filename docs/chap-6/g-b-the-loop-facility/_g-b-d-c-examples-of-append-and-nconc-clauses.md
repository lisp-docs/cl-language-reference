**6.1.3.2 Examples of APPEND and NCONC clauses** 

;; Use APPEND to concatenate some sublists. 

(loop for x in ’((a) (b) ((c))) 

append x) 

*→* (A B (C)) 

Iteration **6–19**

 

 

;; NCONC some sublists together. Note that only lists made by the ;; call to LIST are modified. 

(loop for i upfrom 0 

as x in ’(a b (c)) 

nconc (if (evenp i) (list x) nil)) 

*→* (A (C)) 

