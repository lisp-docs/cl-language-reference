 

(let ((\*print-escape\* t)) (fresh-line) (write #\a)) 

&#9655; #\a 

*→* #\a 

(let ((\*print-escape\* nil) (\*print-readably\* nil)) 

(fresh-line) 

(write #\a)) 

&#9655; a 

*→* #\a 

(progn (fresh-line) (prin1 #\a)) 

&#9655; #\a 

*→* #\a 

(progn (fresh-line) (print #\a)) 

&#9655; 

&#9655; #\a 

*→* #\a 

(progn (fresh-line) (princ #\a)) 

&#9655; a 

*→* #\a 

(dolist (val ’(t nil)) 

(let ((\*print-escape\* val) (\*print-readably\* val)) 

(print ’#\a) 

(prin1 #\a) (write-char #\Space) 

(princ #\a) (write-char #\Space) 

(write #\a))) 

&#9655; #\a #\a a #\a 



 

 

&#9655; #\a #\a a a 

*→* NIL 

(progn (fresh-line) (write ’(let ((a 1) (b 2)) (+ a b)))) 

&#9655; (LET ((A 1) (B 2)) (+ A B)) 

*→* (LET ((A 1) (B 2)) (+ A B)) 

(progn (fresh-line) (pprint ’(let ((a 1) (b 2)) (+ a b)))) 

&#9655; (LET ((A 1) 

&#9655; (B 2)) 

&#9655; (+ A B)) 

*→* (LET ((A 1) (B 2)) (+ A B)) 

(progn (fresh-line) 

(write ’(let ((a 1) (b 2)) (+ a b)) :pretty t)) 

&#9655; (LET ((A 1) 

&#9655; (B 2)) 

&#9655; (+ A B)) 

*→* (LET ((A 1) (B 2)) (+ A B)) 

(with-output-to-string (s) 

(write ’write :stream s) 

(prin1 ’prin1 s)) 

*→* "WRITEPRIN1" 

Printer **22–13**

 

 

