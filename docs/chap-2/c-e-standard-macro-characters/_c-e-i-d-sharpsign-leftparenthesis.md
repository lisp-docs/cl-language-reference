 



#( and ) are used to notate a *simple vector* . 



If an unsigned decimal integer appears between the # and (, it specifies explicitly the length of the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> . The consequences are undefined if the number of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> specified before the closing ) exceeds the unsigned decimal integer. If the number of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> supplied before the closing ) is less than the unsigned decimal integer but greater than zero, the last <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is used to fill all remaining elements of the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> . The consequences are undefined if the unsigned decimal integer is non-zero and number of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> supplied before the closing ) is zero. For example, 



#(a b c c c c) 



#6(a b c c c c) 



#6(a b c) 



#6(a b c c)  







all mean the same thing: a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> of length 6 with <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> a, b, and four occurrences of c. Other examples follow: 



#(a b c) ;A vector of length 3 



#(2 3 5 7 11 13 17 19 23 29 31 37 41 43 47) 



;A vector containing the primes below 50 



#() ;An empty vector 



The notation #() denotes an empty <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , as does #0(). 



For information on how the *Lisp printer* prints <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm>, see Section 22.1.3.4 (Printing Strings), Section 22.1.3.6 (Printing Bit Vectors), or Section 22.1.3.7 (Printing Other Vectors). 



