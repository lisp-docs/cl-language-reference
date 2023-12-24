 



The constructs collect, collecting, append, appending, nconc, nconcing, count, counting, maximize, maximizing, minimize, minimizing, sum, and summing, allow values to be accumulated in a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. 



The constructs collect, collecting, append, appending, nconc, and nconcing, designate clauses that accumulate values in <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> and return them. The constructs count, counting, maximize, maximizing, minimize, minimizing, sum, and summing designate clauses that accumulate and return numerical values. 



During each iteration, the constructs collect and collecting collect the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> into a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. When iteration terminates, the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is returned. The argument *var* is set to the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of collected values; if *var* is supplied, the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> does not return the final <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> automatically. If *var* is not supplied, it is equivalent to supplying an internal name for *var* and returning its value in a finally clause. The *var* argument is bound as if by the construct with. No mechanism is provided for declaring the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of *var*; it must be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>. 



The constructs append, appending, nconc, and nconcing are similar to collect except that the values of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> must be <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>. 







 



 



*•* The append keyword causes its <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> values to be concatenated into a single <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, as if they were arguments to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"append"}><b>append</b></ClLinks>. 



*•* The nconc keyword causes its <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> values to be concatenated into a single <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, as if they were arguments to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks>. 



The argument *var* is set to the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of concatenated values; if *var* is supplied, <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> does not return the final <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> automatically. The *var* argument is bound as if by the construct with. A <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> cannot be supplied for *var*; it must be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>. The construct nconc destructively modifies its argument <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>. 



The count construct counts the number of times that the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. The argument *var* accumulates the number of occurrences; if *var* is supplied, <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> does not return the final count automatically. The *var* argument is bound as if by the construct with to a zero of the appropriate type. Subsequent values (including any necessary coercions) are computed as if by the function <ClLinks styled={true} term={"1+"}><b>1+</b></ClLinks>. If into *var* is used, a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> can be supplied for *var* with the *type-spec* argument; the consequences are unspecified if a nonnumeric <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is supplied. If there is no into variable, the optional *type-spec* argument applies to the internal variable that is keeping the count. The default <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; but it must be a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"fixnum"}><b>fixnum</b></ClLinks>. 



The maximize and minimize constructs compare the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> obtained during the first iteration with values obtained in successive iterations. The maximum (for maximize) or minimum (for minimize) value encountered is determined (as if by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"max"}><b>max</b></ClLinks> for maximize and as if by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"min"}><b>min</b></ClLinks> for minimize) and returned. If the maximize or minimize clause is never executed, the accumulated value is unspecified. The argument *var* accumulates the maximum or minimum value; if *var* is supplied, <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> does not return the maximum or minimum automatically. The *var* argument is bound as if by the construct with. If into *var* is used, a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> can be supplied for *var* with the *type-spec* argument; the consequences are unspecified if a nonnumeric <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is supplied. If there is no into variable, the optional *type-spec* argument applies to the internal variable that is keeping the maximum or minimum value. The default <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; but it must be a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>. 



The sum construct forms a cumulative sum of the successive *primary values* of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> at each iteration. The argument *var* is used to accumulate the sum; if *var* is supplied, <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> does not return the final sum automatically. The *var* argument is bound as if by the construct with to a zero of the appropriate type. Subsequent values (including any necessary coercions) are computed as if by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"+"}><b>+</b></ClLinks>. If into *var* is used, a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> can be supplied for *var* with the *type-spec* argument; the consequences are unspecified if a nonnumeric <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is supplied. If there is no into variable, the optional *type-spec* argument applies to the internal variable that is keeping the sum. The default <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; but it must be a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>. 



If into is used, the construct does not provide a default return value; however, the variable is available for use in any finally clause. 



Certain kinds of accumulation clauses can be combined in a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> if their destination is the same (the result of <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> or an into *var*) because they are considered to accumulate conceptually compatible quantities. In particular, any elements of following sets of accumulation clauses can be 







 



 



mixed with other elements of the same set for the same destination in a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>: *•* collect, append, nconc 



*•* sum, count 



*•* maximize, minimize 



;; Collect every name and the kids in one list by using 



;; COLLECT and APPEND. 



(loop for name in ’(fred sue alice joe june) 



for kids in ’((bob ken) () () (kris sunshine) ()) 



collect name 



append kids) 



→ (FRED BOB KEN SUE ALICE JOE KRIS SUNSHINE JUNE) 



Any two clauses that do not accumulate the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can coexist in a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> only if each clause accumulates its values into a different <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. 



