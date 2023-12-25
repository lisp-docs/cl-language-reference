 



The constructs collect, collecting, append, appending, nconc, nconcing, count, counting, maximize, maximizing, minimize, minimizing, sum, and summing, allow values to be accumulated in a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. 



The constructs collect, collecting, append, appending, nconc, and nconcing, designate clauses that accumulate values in <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> and return them. The constructs count, counting, maximize, maximizing, minimize, minimizing, sum, and summing designate clauses that accumulate and return numerical values. 



During each iteration, the constructs collect and collecting collect the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> into a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. When iteration terminates, the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is returned. The argument *var* is set to the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of collected values; if *var* is supplied, the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> does not return the final <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> automatically. If *var* is not supplied, it is equivalent to supplying an internal name for *var* and returning its value in a finally clause. The *var* argument is bound as if by the construct with. No mechanism is provided for declaring the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of *var*; it must be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>. 



The constructs append, appending, nconc, and nconcing are similar to collect except that the values of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> must be <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>. 







 



 



*•* The append keyword causes its <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> values to be concatenated into a single <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, as if they were arguments to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"append"}><b>append</b></DictionaryLink>. 



*•* The nconc keyword causes its <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> values to be concatenated into a single <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, as if they were arguments to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink>. 



The argument *var* is set to the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of concatenated values; if *var* is supplied, <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> does not return the final <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> automatically. The *var* argument is bound as if by the construct with. A <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> cannot be supplied for *var*; it must be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>. The construct nconc destructively modifies its argument <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>. 



The count construct counts the number of times that the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. The argument *var* accumulates the number of occurrences; if *var* is supplied, <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> does not return the final count automatically. The *var* argument is bound as if by the construct with to a zero of the appropriate type. Subsequent values (including any necessary coercions) are computed as if by the function <DictionaryLink styled={true} term={"1+"}><b>1+</b></DictionaryLink>. If into *var* is used, a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> can be supplied for *var* with the *type-spec* argument; the consequences are unspecified if a nonnumeric <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is supplied. If there is no into variable, the optional *type-spec* argument applies to the internal variable that is keeping the count. The default <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; but it must be a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink>. 



The maximize and minimize constructs compare the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> obtained during the first iteration with values obtained in successive iterations. The maximum (for maximize) or minimum (for minimize) value encountered is determined (as if by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"max"}><b>max</b></DictionaryLink> for maximize and as if by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"min"}><b>min</b></DictionaryLink> for minimize) and returned. If the maximize or minimize clause is never executed, the accumulated value is unspecified. The argument *var* accumulates the maximum or minimum value; if *var* is supplied, <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> does not return the maximum or minimum automatically. The *var* argument is bound as if by the construct with. If into *var* is used, a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> can be supplied for *var* with the *type-spec* argument; the consequences are unspecified if a nonnumeric <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is supplied. If there is no into variable, the optional *type-spec* argument applies to the internal variable that is keeping the maximum or minimum value. The default <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; but it must be a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>. 



The sum construct forms a cumulative sum of the successive *primary values* of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> at each iteration. The argument *var* is used to accumulate the sum; if *var* is supplied, <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> does not return the final sum automatically. The *var* argument is bound as if by the construct with to a zero of the appropriate type. Subsequent values (including any necessary coercions) are computed as if by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink>. If into *var* is used, a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> can be supplied for *var* with the *type-spec* argument; the consequences are unspecified if a nonnumeric <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is supplied. If there is no into variable, the optional *type-spec* argument applies to the internal variable that is keeping the sum. The default <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; but it must be a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>. 



If into is used, the construct does not provide a default return value; however, the variable is available for use in any finally clause. 



Certain kinds of accumulation clauses can be combined in a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> if their destination is the same (the result of <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> or an into *var*) because they are considered to accumulate conceptually compatible quantities. In particular, any elements of following sets of accumulation clauses can be 







 



 



mixed with other elements of the same set for the same destination in a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>: *•* collect, append, nconc 



*•* sum, count 



*•* maximize, minimize 



;; Collect every name and the kids in one list by using 



;; COLLECT and APPEND. 



(loop for name in ’(fred sue alice joe june) 



for kids in ’((bob ken) () () (kris sunshine) ()) 



collect name 



append kids) 



*→* (FRED BOB KEN SUE ALICE JOE KRIS SUNSHINE JUNE) 



Any two clauses that do not accumulate the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can coexist in a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> only if each clause accumulates its values into a different <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. 



