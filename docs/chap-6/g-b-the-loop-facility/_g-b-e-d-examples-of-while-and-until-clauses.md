 

(loop while (hungry-p) do (eat)) 

;; UNTIL NOT is equivalent to WHILE. 

(loop until (not (hungry-p)) do (eat)) 

;; Collect the length and the items of STACK. 

(let ((stack ’(a b c d e f))) 

(loop for item = (length stack) then (pop stack) 

collect item 

while stack)) 

*→* (6 A B C D E F) 

;; Use WHILE to terminate a loop that otherwise wouldn’t terminate. 

;; Note that WHILE occurs after the WHEN. 

(loop for i fixnum from 3 

when (oddp i) collect i 

while (\< i 5)) 

*→* (3 5) 

