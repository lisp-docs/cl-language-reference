 



;;;; Math Utilities 



;;; FIB computes the the Fibonacci function in the traditional 



;;; recursive way. 



(defun fib (n) 



(check-type n integer) 



;; At this point we’re sure we have an integer argument. 



;; Now we can get down to some serious computation. 



(cond ((&lt; n 0) 



;; Hey, this is just supposed to be a simple example. 



;; Did you really expect me to handle the general case? 



(error "FIB got &#126;D as an argument." n)) 



((&lt; n 2) n) ;fib[0]=0 and fib[1]=1 



;; The cheap cases didn’t work. 



;; Nothing more to do but recurse. 



(t (+ (fib (- n 1)) ;The traditional formula 



(fib (- n 2)))))) ; is fib[n-1]+fib[n-2].  







