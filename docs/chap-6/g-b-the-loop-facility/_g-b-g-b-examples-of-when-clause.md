**6.1.6.1 Examples of WHEN clause** 

;; Signal an exceptional condition. 

(loop for item in ’(1 2 3 a 4 5) 

when (not (numberp item)) 

return (cerror "enter new value" "non-numeric value: ~s" item)) Error: non-numeric value: A 

;; The previous example is equivalent to the following one. 

(loop for item in ’(1 2 3 a 4 5) 

when (not (numberp item)) 

do (return 

(cerror "Enter new value" "non-numeric value: ~s" item))) 

Error: non-numeric value: A 

;; This example parses a simple printed string representation from ;; BUFFER (which is itself a string) and returns the index of the ;; closing double-quote character. 

(let ((buffer "\"a\" \"b\"")) 

(loop initially (unless (char= (char buffer 0) #\") 

(loop-finish)) 

for i of-type fixnum from 1 below (length (the string buffer)) when (char= (char buffer i) #\") 

return i)) 

*→* 2 

;; The collected value is returned. 

(loop for i from 1 to 10 

when (\> i 5) 

collect i 

finally (prin1 ’got-here)) 

&#9655; GOT-HERE 

*→* (6 7 8 9 10) 

;; Return both the count of collected numbers and the numbers. (loop for i from 1 to 10 

when (\> i 5) 

collect i into number-list 

and count i into number-count 

finally (return (values number-count number-list))) 

*→* 5, (6 7 8 9 10) 

