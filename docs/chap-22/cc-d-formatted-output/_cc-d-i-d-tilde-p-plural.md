 



If *arg* is not **eql** to the integer 1, a lowercase s is printed; if *arg* is **eql** to 1, nothing is printed. If *arg* is a floating-point 1.0, the s is printed. 



&#126;:P does the same thing, after doing a &#126;:\* to back up one argument; that is, it prints a lowercase s if the previous argument was not 1. 



&#126;@P prints y if the argument is 1, or ies if it is not. &#126;:@P does the same thing, but backs up first. 



(format nil "&#126;D tr&#126;:@P/&#126;D win&#126;:P" 7 1) *→* "7 tries/1 win" 



(format nil "&#126;D tr&#126;:@P/&#126;D win&#126;:P" 1 0) *→* "1 try/0 wins" 







 



 



(format nil "&#126;D tr&#126;:@P/&#126;D win&#126;:P" 1 3) *→* "1 try/3 wins" 



