 



&#126;[*str0* &#126;;*str1* &#126;;*...*&#126;;*strn*&#126;] 



This is a set of control strings, called *clauses*, one of which is chosen and used. The clauses are separated by &#126;; and the construct is terminated by &#126;]. For example, 



"&#126;[Siamese&#126;;Manx&#126;;Persian&#126;] Cat" 



The *arg*th clause is selected, where the first clause is number 0. If a prefix parameter is given (as &#126;*n*[), then the parameter is used instead of an argument. If *arg* is out of range then no clause is selected and no error is signaled. After the selected alternative has been processed, the control string continues after the &#126;]. 



&#126;[*str0* &#126;;*str1* &#126;;*...*&#126;;*strn*&#126;:;*default*&#126;] has a default case. If the *last* &#126;; used to separate clauses is &#126;:; instead, then the last clause is an else clause that is performed if no other clause is selected. For example: 



"&#126;[Siamese&#126;;Manx&#126;;Persian&#126;:;Alley&#126;] Cat" 



&#126;:[*alternative*&#126;;*consequent*&#126;] selects the *alternative* control string if *arg* is *false*, and selects the *consequent* control string otherwise. 



&#126;@[*consequent*&#126;] tests the argument. If it is *true*, then the argument is not used up by the &#126;[ command but remains as the next one to be processed, and the one clause *consequent* is processed. If the *arg* is *false*, then the argument is used up, and the clause is not processed. The clause therefore should normally use exactly one argument, and may expect it to be *non-nil*. For example: 



(setq \*print-level\* nil \*print-length\* 5) 



(format nil 



"&#126;@[ print level = &#126;D&#126;]&#126;@[ print length = &#126;D&#126;]" 



\*print-level\* \*print-length\*) 



*→* " print length = 5" 



Note also that 



(format *stream* "...&#126;@[*str*&#126;]..." ...) 



*≡* (format *stream* "...&#126;:[&#126;;&#126;:\**str*&#126;]..." ...) 



The combination of &#126;[ and # is useful, for example, for dealing with English conventions for printing lists: 



(setq foo "Items:&#126;#[ none&#126;; &#126;S&#126;; &#126;S and &#126;S&#126; 



&#126;:;&#126;@\{&#126;#[&#126;; and&#126;] &#126;S&#126;<i><sup>∧</sup></i>,&#126;\}&#126;].") 







 



 



(format nil foo) *→* "Items: none." 



(format nil foo ’foo) *→* "Items: FOO." 



(format nil foo ’foo ’bar) *→* "Items: FOO and BAR." 



(format nil foo ’foo ’bar ’baz) *→* "Items: FOO, BAR, and BAZ." 



(format nil foo ’foo ’bar ’baz ’quux) *→* "Items: FOO, BAR, BAZ, and QUUX." 



