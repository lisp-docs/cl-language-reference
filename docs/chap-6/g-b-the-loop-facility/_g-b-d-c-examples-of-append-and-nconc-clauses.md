```lisp

;; Use APPEND to concatenate some sublists. 
(loop for x in ’((a) (b) ((c))) 
      append x) 
*→* (A B (C)) 



;; NCONC some sublists together. Note that only lists made by the ;; call to LIST are modified. 
(loop for i upfrom 0 
      as x in ’(a b (c)) 
      nconc (if (evenp i) (list x) nil)) 
*→* (A (C)) 

```