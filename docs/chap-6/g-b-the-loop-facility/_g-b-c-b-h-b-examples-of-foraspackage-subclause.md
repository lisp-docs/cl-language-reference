**6.1.2.1.7.1 Examples of for-as-package subclause** 

(let ((\*package\* (make-package "TEST-PACKAGE-1"))) 

;; For effect, intern some symbols 

(read-from-string "(THIS IS A TEST)") 

(export (intern "THIS")) 

(loop for x being each present-symbol of \*package\* 

do (print x))) 

&#9655; A 

&#9655; TEST 

&#9655; THIS 

&#9655; IS 

*→* NIL 

