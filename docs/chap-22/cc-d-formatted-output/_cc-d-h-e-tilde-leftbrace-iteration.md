 



&#126;\{*str*&#126;\} 



This is an iteration construct. The argument should be a <i>list</i>, which is used as a set of arguments as if for a recursive call to <b>format</b>. The <i>string str</i> is used repeatedly as the control string. Each iteration can absorb as many elements of the <i>list</i> as it likes as arguments; if <i>str</i> uses up two arguments by itself, then two elements of the <i>list</i> will get used up each time around the loop. If before any iteration step the <i>list</i> is empty, then the iteration is terminated. Also, if a prefix parameter <i>n</i> is given, then there will be at most <i>n</i> repetitions of processing of <i>str</i> . Finally, the &#126;<i><sup>∧</sup></i> directive can be used to terminate the iteration prematurely. 



For example: 



(format nil "The winners are:&#126;\{ &#126;S&#126;\}." 



’(fred harry jill)) 



*→* "The winners are: FRED HARRY JILL." 



(format nil "Pairs:&#126;\{ &lt;&#126;S,&#126;S&gt;&#126;\}." 



’(a 1 b 2 c 3)) 



*→* "Pairs: &lt;A,1&gt; &lt;B,2&gt; &lt;C,3&gt;." 



&#126;:\{*str*&#126;\} is similar, but the argument should be a *list* of sublists. At each repetition step, one sublist is used as the set of arguments for processing *str* ; on the next repetition, a new sublist is used, whether or not all of the last sublist had been processed. For example: 



(format nil "Pairs:&#126;:\{ &lt;&#126;S,&#126;S&gt;&#126;\}." 



’((a 1) (b 2) (c 3))) 



*→* "Pairs: &lt;A,1&gt; &lt;B,2&gt; &lt;C,3&gt;." 



&#126;@\{*str*&#126;\} is similar to &#126;\{*str*&#126;\}, but instead of using one argument that is a list, all the remaining arguments are used as the list of arguments for the iteration. Example: 



(format nil "Pairs:&#126;@\{ &lt;&#126;S,&#126;S&gt;&#126;\}." ’a 1 ’b 2 ’c 3) 



*→* "Pairs: &lt;A,1&gt; &lt;B,2&gt; &lt;C,3&gt;." 



If the iteration is terminated before all the remaining arguments are consumed, then any arguments not processed by the iteration remain to be processed by any directives following the iteration construct. 







 



 



&#126;:@\{*str*&#126;\} combines the features of &#126;:\{*str*&#126;\} and &#126;@\{*str*&#126;\}. All the remaining arguments are used, and each one must be a *list*. On each iteration, the next argument is used as a *list* of arguments to *str* . Example: 



(format nil "Pairs:&#126;:@\{ &lt;&#126;S,&#126;S&gt;&#126;\}." 



’(a 1) ’(b 2) ’(c 3)) 



*→* "Pairs: &lt;A,1&gt; &lt;B,2&gt; &lt;C,3&gt;." 



Terminating the repetition construct with &#126;:\} instead of &#126;\} forces *str* to be processed at least once, even if the initial list of arguments is null. However, this will not override an explicit prefix parameter of zero. 



If *str* is empty, then an argument is used as *str* . It must be a *format control* and precede any arguments processed by the iteration. As an example, the following are equivalent: 



(apply #’format stream string arguments) 



*≡* (format stream "&#126;1\{&#126;:\}" string arguments) 



This will use string as a formatting string. The &#126;1\{ says it will be processed at most once, and the &#126;:\} says it will be processed at least once. Therefore it is processed exactly once, using arguments as the arguments. This case may be handled more clearly by the &#126;? directive, but this general feature of &#126;\{ is more powerful than &#126;?. 



