 

Consider the following expression, in which we assume that 1.0 and 1.0e-15 both denote *single floats*: 

(+ 1/3 2/3 1.0d0 1.0 1.0e-15) 

One *conforming implementation* might process the *arguments* from left to right, first adding 1/3 and 2/3 to get 1, then converting that to a *double float* for combination with 1.0d0, then successively converting and adding 1.0 and 1.0e-15. 

Another *conforming implementation* might process the *arguments* from right to left, first performing a *single float* addition of 1.0 and 1.0e-15 (perhaps losing accuracy in the process), then converting the sum to a *double float* and adding 1.0d0, then converting 2/3 to a *double float* and adding it, and then converting 1/3 and adding that. 

A third *conforming implementation* might first scan all the *arguments*, process all the *rationals* first to keep that part of the computation exact, then find an *argument* of the largest floating-point 



 

 

format among all the *arguments* and add that, and then add in all other *arguments*, converting each in turn (all in a perhaps misguided attempt to make the computation as accurate as possible). 

In any case, all three strategies are legitimate. 

A *conforming program* could control the order by writing, for example, 

(+ (+ 1/3 2/3) (+ 1.0d0 1.0e-15) 1.0) 

