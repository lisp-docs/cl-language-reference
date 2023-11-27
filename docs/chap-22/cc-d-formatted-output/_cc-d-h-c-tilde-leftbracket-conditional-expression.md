 

~[*str0* ~;*str1* ~;*...*~;*strn*~] 

This is a set of control strings, called *clauses*, one of which is chosen and used. The clauses are separated by ~; and the construct is terminated by ~]. For example, 

"~[Siamese~;Manx~;Persian~] Cat" 

The *arg*th clause is selected, where the first clause is number 0. If a prefix parameter is given (as ~*n*[), then the parameter is used instead of an argument. If *arg* is out of range then no clause is selected and no error is signaled. After the selected alternative has been processed, the control string continues after the ~]. 

~[*str0* ~;*str1* ~;*...*~;*strn*~:;*default*~] has a default case. If the *last* ~; used to separate clauses is ~:; instead, then the last clause is an else clause that is performed if no other clause is selected. For example: 

"~[Siamese~;Manx~;Persian~:;Alley~] Cat" 

~:[*alternative*~;*consequent*~] selects the *alternative* control string if *arg* is *false*, and selects the *consequent* control string otherwise. 

~@[*consequent*~] tests the argument. If it is *true*, then the argument is not used up by the ~[ command but remains as the next one to be processed, and the one clause *consequent* is processed. If the *arg* is *false*, then the argument is used up, and the clause is not processed. The clause therefore should normally use exactly one argument, and may expect it to be *non-nil*. For example: 

(setq \*print-level\* nil \*print-length\* 5) 

(format nil 

"~@[ print level = ~D~]~@[ print length = ~D~]" 

\*print-level\* \*print-length\*) 

*→* " print length = 5" 

Note also that 

(format *stream* "...~@[*str*~]..." ...) 

*≡* (format *stream* "...~:[~;~:\**str*~]..." ...) 

The combination of ~[ and # is useful, for example, for dealing with English conventions for printing lists: 

(setq foo "Items:~#[ none~; ~S~; ~S and ~S~ 

~:;~@&#123;~#[~; and~] ~S~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;,~&#125;~].") 



 

 

(format nil foo) *→* "Items: none." 

(format nil foo ’foo) *→* "Items: FOO." 

(format nil foo ’foo ’bar) *→* "Items: FOO and BAR." 

(format nil foo ’foo ’bar ’baz) *→* "Items: FOO, BAR, and BAZ." 

(format nil foo ’foo ’bar ’baz ’quux) *→* "Items: FOO, BAR, BAZ, and QUUX." 

