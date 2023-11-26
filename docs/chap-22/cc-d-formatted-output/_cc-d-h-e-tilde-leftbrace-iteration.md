**22.3.7.4 Tilde Left-Brace: Iteration** 

~\{*str*~\} 

This is an iteration construct. The argument should be a \<i\>list\</i\>, which is used as a set of arguments as if for a recursive call to \<b\>format\</b\>. The \<i\>string str\</i\> is used repeatedly as the control string. Each iteration can absorb as many elements of the \<i\>list\</i\> as it likes as arguments; if \<i\>str\</i\> uses up two arguments by itself, then two elements of the \<i\>list\</i\> will get used up each time around the loop. If before any iteration step the \<i\>list\</i\> is empty, then the iteration is terminated. Also, if a prefix parameter \<i\>n\</i\> is given, then there will be at most \<i\>n\</i\> repetitions of processing of \<i\>str\</i\> . Finally, the ~\<i\>\<sup\>∧\</sup\>\</i\> directive can be used to terminate the iteration prematurely. 

For example: 

(format nil "The winners are:~\{ ~S~\}." 

’(fred harry jill)) 

*→* "The winners are: FRED HARRY JILL." 

(format nil "Pairs:~\{ \<~S,~S\>~\}." 

’(a 1 b 2 c 3)) 

*→* "Pairs: \<A,1\> \<B,2\> \<C,3\>." 

~:\{*str*~\} is similar, but the argument should be a *list* of sublists. At each repetition step, one sublist is used as the set of arguments for processing *str* ; on the next repetition, a new sublist is used, whether or not all of the last sublist had been processed. For example: 

(format nil "Pairs:~:\{ \<~S,~S\>~\}." 

’((a 1) (b 2) (c 3))) 

*→* "Pairs: \<A,1\> \<B,2\> \<C,3\>." 

~@\{*str*~\} is similar to ~\{*str*~\}, but instead of using one argument that is a list, all the remaining arguments are used as the list of arguments for the iteration. Example: 

(format nil "Pairs:~@\{ \<~S,~S\>~\}." ’a 1 ’b 2 ’c 3) 

*→* "Pairs: \<A,1\> \<B,2\> \<C,3\>." 

If the iteration is terminated before all the remaining arguments are consumed, then any arguments not processed by the iteration remain to be processed by any directives following the iteration construct. 

Printer **22–37**

 

 

~:@\{*str*~\} combines the features of ~:\{*str*~\} and ~@\{*str*~\}. All the remaining arguments are used, and each one must be a *list*. On each iteration, the next argument is used as a *list* of arguments to *str* . Example: 

(format nil "Pairs:~:@\{ \<~S,~S\>~\}." 

’(a 1) ’(b 2) ’(c 3)) 

*→* "Pairs: \<A,1\> \<B,2\> \<C,3\>." 

Terminating the repetition construct with ~:\} instead of ~\} forces *str* to be processed at least once, even if the initial list of arguments is null. However, this will not override an explicit prefix parameter of zero. 

If *str* is empty, then an argument is used as *str* . It must be a *format control* and precede any arguments processed by the iteration. As an example, the following are equivalent: 

(apply #’format stream string arguments) 

*≡* (format stream "~1\{~:\}" string arguments) 

This will use string as a formatting string. The ~1\{ says it will be processed at most once, and the ~:\} says it will be processed at least once. Therefore it is processed exactly once, using arguments as the arguments. This case may be handled more clearly by the ~? directive, but this general feature of ~\{ is more powerful than ~?. 

