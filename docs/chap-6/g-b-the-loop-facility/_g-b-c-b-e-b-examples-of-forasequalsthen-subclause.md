**6.1.2.1.4.1 Examples of for-as-equals-then subclause** 

;; Collect some numbers. 

(loop for item = 1 then (+ item 10) 

for iteration from 1 to 5 

collect item) 

*→* (1 11 21 31 41) 



 

 

