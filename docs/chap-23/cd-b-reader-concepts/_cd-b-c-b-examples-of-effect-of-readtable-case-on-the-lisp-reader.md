 



(defun test-readtable-case-reading () 



(let ((\*readtable\* (copy-readtable nil))) 



(format t "READTABLE-CASE Input Symbol-name&#126; 



&#126;%–––––––––––––––––-&#126; 



&#126;%") 



(dolist (readtable-case ’(:upcase :downcase :preserve :invert)) 



(setf (readtable-case \*readtable\*) readtable-case) 



(dolist (input ’("ZEBRA" "Zebra" "zebra")) 



(format t "&#126;&amp;:&#126;A&#126;16T&#126;A&#126;24T&#126;A" 



(string-upcase readtable-case) 



input 



(symbol-name (read-from-string input))))))) 







 



 



The output from (test-readtable-case-reading) should be as follows: 



READTABLE-CASE Input Symbol-name 



––––––––––––––––––- 



:UPCASE ZEBRA ZEBRA 



:UPCASE Zebra ZEBRA 



:UPCASE zebra ZEBRA 



:DOWNCASE ZEBRA zebra 



:DOWNCASE Zebra zebra 



:DOWNCASE zebra zebra 



:PRESERVE ZEBRA ZEBRA 



:PRESERVE Zebra Zebra 



:PRESERVE zebra zebra 



:INVERT ZEBRA zebra 



:INVERT Zebra Zebra 



:INVERT zebra ZEBRA 



