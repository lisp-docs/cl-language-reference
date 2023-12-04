 



(let ((ref2 (list ’()))) 



(push (progn (princ "1") ’ref-1) 















(car (progn (princ "2") ref2)))) 



▷ 12 



*→* (REF1) 



(let (x) 



(push (setq x (list ’a)) 



(car (setq x (list ’b)))) 



x) 



*→* (((A) . B)) 



**push** first evaluates (setq x (list ’a)) *→* (a), then evaluates (setq x (list ’b)) *→* (b), then modifies the *car* of this latest value to be ((a) . b). 



