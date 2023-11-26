 

(defun test-readtable-case-printing () 

(let ((\*readtable\* (copy-readtable nil)) 

(\*print-case\* \*print-case\*)) 

(format t "READTABLE-CASE \*PRINT-CASE\* Symbol-name Output~ 

~%–––––––––––––––––––––––––~ 

~%") 

(dolist (readtable-case ’(:upcase :downcase :preserve :invert)) 

(setf (readtable-case \*readtable\*) readtable-case) 

(dolist (print-case ’(:upcase :downcase :capitalize)) 

(dolist (symbol ’(|ZEBRA| |Zebra| |zebra|)) 

(setq \*print-case\* print-case) 

(format t "~&:~A~15T:~A~29T~A~42T~A" 



 

 

(string-upcase readtable-case) 

(string-upcase print-case) 

(symbol-name symbol) 

(prin1-to-string symbol))))))) 

The output from (test-readtable-case-printing) should be as follows: 

READTABLE-CASE \*PRINT-CASE\* Symbol-name Output 

––––––––––––––––––––––––– 

:UPCASE :UPCASE ZEBRA ZEBRA 

:UPCASE :UPCASE Zebra |Zebra| 

:UPCASE :UPCASE zebra |zebra| 

:UPCASE :DOWNCASE ZEBRA zebra 

:UPCASE :DOWNCASE Zebra |Zebra| 

:UPCASE :DOWNCASE zebra |zebra| 

:UPCASE :CAPITALIZE ZEBRA Zebra 

:UPCASE :CAPITALIZE Zebra |Zebra| 

:UPCASE :CAPITALIZE zebra |zebra| 

:DOWNCASE :UPCASE ZEBRA |ZEBRA| 

:DOWNCASE :UPCASE Zebra |Zebra| 

:DOWNCASE :UPCASE zebra ZEBRA 

:DOWNCASE :DOWNCASE ZEBRA |ZEBRA| 

:DOWNCASE :DOWNCASE Zebra |Zebra| 

:DOWNCASE :DOWNCASE zebra zebra 

:DOWNCASE :CAPITALIZE ZEBRA |ZEBRA| 

:DOWNCASE :CAPITALIZE Zebra |Zebra| 

:DOWNCASE :CAPITALIZE zebra Zebra 

:PRESERVE :UPCASE ZEBRA ZEBRA 

:PRESERVE :UPCASE Zebra Zebra 

:PRESERVE :UPCASE zebra zebra 

:PRESERVE :DOWNCASE ZEBRA ZEBRA 

:PRESERVE :DOWNCASE Zebra Zebra 

:PRESERVE :DOWNCASE zebra zebra 

:PRESERVE :CAPITALIZE ZEBRA ZEBRA 

:PRESERVE :CAPITALIZE Zebra Zebra 

:PRESERVE :CAPITALIZE zebra zebra 

:INVERT :UPCASE ZEBRA zebra 

:INVERT :UPCASE Zebra Zebra 

:INVERT :UPCASE zebra ZEBRA 

:INVERT :DOWNCASE ZEBRA zebra 

:INVERT :DOWNCASE Zebra Zebra 

:INVERT :DOWNCASE zebra ZEBRA 

:INVERT :CAPITALIZE ZEBRA zebra 

:INVERT :CAPITALIZE Zebra Zebra 

:INVERT :CAPITALIZE zebra ZEBRA 

Printer **22–7**

 

 

