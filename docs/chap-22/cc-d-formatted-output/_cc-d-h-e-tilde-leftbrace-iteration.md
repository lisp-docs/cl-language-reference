 

~&#123;*str*~&#125; 

This is an iteration construct. The argument should be a &#60;i&#62;list&#60;/i&#62;, which is used as a set of arguments as if for a recursive call to &#60;b&#62;format&#60;/b&#62;. The &#60;i&#62;string str&#60;/i&#62; is used repeatedly as the control string. Each iteration can absorb as many elements of the &#60;i&#62;list&#60;/i&#62; as it likes as arguments; if &#60;i&#62;str&#60;/i&#62; uses up two arguments by itself, then two elements of the &#60;i&#62;list&#60;/i&#62; will get used up each time around the loop. If before any iteration step the &#60;i&#62;list&#60;/i&#62; is empty, then the iteration is terminated. Also, if a prefix parameter &#60;i&#62;n&#60;/i&#62; is given, then there will be at most &#60;i&#62;n&#60;/i&#62; repetitions of processing of &#60;i&#62;str&#60;/i&#62; . Finally, the ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; directive can be used to terminate the iteration prematurely. 

For example: 

(format nil "The winners are:~&#123; ~S~&#125;." 

’(fred harry jill)) 

*→* "The winners are: FRED HARRY JILL." 

(format nil "Pairs:~&#123; &#60;~S,~S&#62;~&#125;." 

’(a 1 b 2 c 3)) 

*→* "Pairs: &#60;A,1&#62; &#60;B,2&#62; &#60;C,3&#62;." 

~:&#123;*str*~&#125; is similar, but the argument should be a *list* of sublists. At each repetition step, one sublist is used as the set of arguments for processing *str* ; on the next repetition, a new sublist is used, whether or not all of the last sublist had been processed. For example: 

(format nil "Pairs:~:&#123; &#60;~S,~S&#62;~&#125;." 

’((a 1) (b 2) (c 3))) 

*→* "Pairs: &#60;A,1&#62; &#60;B,2&#62; &#60;C,3&#62;." 

~@&#123;*str*~&#125; is similar to ~&#123;*str*~&#125;, but instead of using one argument that is a list, all the remaining arguments are used as the list of arguments for the iteration. Example: 

(format nil "Pairs:~@&#123; &#60;~S,~S&#62;~&#125;." ’a 1 ’b 2 ’c 3) 

*→* "Pairs: &#60;A,1&#62; &#60;B,2&#62; &#60;C,3&#62;." 

If the iteration is terminated before all the remaining arguments are consumed, then any arguments not processed by the iteration remain to be processed by any directives following the iteration construct. 

Printer **22–37**

 

 

~:@&#123;*str*~&#125; combines the features of ~:&#123;*str*~&#125; and ~@&#123;*str*~&#125;. All the remaining arguments are used, and each one must be a *list*. On each iteration, the next argument is used as a *list* of arguments to *str* . Example: 

(format nil "Pairs:~:@&#123; &#60;~S,~S&#62;~&#125;." 

’(a 1) ’(b 2) ’(c 3)) 

*→* "Pairs: &#60;A,1&#62; &#60;B,2&#62; &#60;C,3&#62;." 

Terminating the repetition construct with ~:&#125; instead of ~&#125; forces *str* to be processed at least once, even if the initial list of arguments is null. However, this will not override an explicit prefix parameter of zero. 

If *str* is empty, then an argument is used as *str* . It must be a *format control* and precede any arguments processed by the iteration. As an example, the following are equivalent: 

(apply #’format stream string arguments) 

*≡* (format stream "~1&#123;~:&#125;" string arguments) 

This will use string as a formatting string. The ~1&#123; says it will be processed at most once, and the ~:&#125; says it will be processed at least once. Therefore it is processed exactly once, using arguments as the arguments. This case may be handled more clearly by the ~? directive, but this general feature of ~&#123; is more powerful than ~?. 

