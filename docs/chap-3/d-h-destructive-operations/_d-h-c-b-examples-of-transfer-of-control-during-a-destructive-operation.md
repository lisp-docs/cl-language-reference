 



The following examples illustrate some of the many ways in which the <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature of the modification can manifest itself. 



(let ((a (list 2 1 4 3 7 6 ’five))) 



(ignore-errors (sort a #’&lt;)) 



a) 



*→* (1 2 3 4 6 7 FIVE) 



<i><sup>or</sup>→</i> (2 1 4 3 7 6 FIVE) 



<i><sup>or</sup>→</i> (2) 



(prog foo ((a (list 1 2 3 4 5 6 7 8 9 10))) 



(sort a #’(lambda (x y) (if (zerop (random 5)) (return-from foo a) (&gt; x y))))) *→* (1 2 3 4 5 6 7 8 9 10) 



<i><sup>or</sup>→</i> (3 4 5 6 2 7 8 9 10 1) 



<i><sup>or</sup>→</i> (1 2 4 3)  







