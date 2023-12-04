 



~<i><sup>∧</sup></i> 



This is an escape construct. If there are no more arguments remaining to be processed, then the immediately enclosing ~\&#123; or ~< construct is terminated. If there is no such enclosing construct, then the entire formatting operation is terminated. In the ~< case, the formatting is performed, 



but no more segments are processed before doing the justification. ~<i><sup>∧</sup></i> may appear anywhere in a ~\&#123; construct. 



(setq donestr "Done.~<i><sup>∧</sup></i> ~D warning~:P.~<i><sup>∧</sup></i> ~D error~:P.") 



<i>→</i> "Done.~<i><sup>∧</sup></i> ~D warning~:P.~<i><sup>∧</sup></i> ~D error~:P." 



(format nil donestr) *→* "Done." 



(format nil donestr 3) *→* "Done. 3 warnings." 



(format nil donestr 1 5) *→* "Done. 1 warning. 5 errors." 



If a prefix parameter is given, then termination occurs if the parameter is zero. (Hence ~<i><sup>∧</sup></i> is equivalent to ~#<i><sup>∧</sup></i>.) If two parameters are given, termination occurs if they are equal. If three parameters are given, termination occurs if the first is less than or equal to the second and the second is less than or equal to the third. Of course, this is useless if all the prefix parameters are constants; at least one of them should be a # or a V parameter. 



If ~<i><sup>∧</sup></i> is used within a ~:\&#123; construct, then it terminates the current iteration step because in the standard case it tests for remaining arguments of the current step only; the next iteration step commences immediately. ~:<i><sup>∧</sup></i> is used to terminate the iteration process. ~:<i><sup>∧</sup></i> may be used only if the command it would terminate is ~:\&#123; or ~:@\&#123;. The entire iteration process is terminated if and only if the sublist that is supplying the arguments for the current iteration step is the last sublist in the case of ~:\&#123;, or the last <b>format</b> argument in the case of ~:@\&#123;. ~:<i><sup>∧</sup></i> is not equivalent to ~#:<i><sup>∧</sup></i>; the latter terminates the entire iteration if and only if no arguments remain for the current iteration step. For example: 



(format nil "~:\&#123;~@?~:<i><sup>∧</sup></i>...~\&#125;" ’(("a") ("b"))) <i>→</i> "a...b" 



If ~<i><sup>∧</sup></i> appears within a control string being processed under the control of a ~? directive, but not within any ~\&#123; or ~< construct within that string, then the string being processed will be terminated, thereby ending processing of the ~? directive. Processing then continues within the string containing the ~? directive at the point following that directive. 







 



 



If ~<i><sup>∧</sup></i> appears within a ~[ or ~( construct, then all the commands up to the ~<i><sup>∧</sup></i> are properly selected or case-converted, the ~[ or ~( processing is terminated, and the outward search continues for a ~\&#123; or ~< construct to be terminated. For example: 



(setq tellstr "~@(~@[~R~]~<i><sup>∧</sup></i> ~A!~)") 



<i>→</i> "~@(~@[~R~]~<i><sup>∧</sup></i> ~A!~)" 



(format nil tellstr 23) *→* "Twenty-three!" 



(format nil tellstr nil "losers") *→* " Losers!" 



(format nil tellstr 23 "losers") *→* "Twenty-three losers!" 



Following are examples of the use of ~<i><sup>∧</sup></i> within a ~< construct. 



(format nil "~15<~S~;~<i><sup>∧</sup></i>~S~;~<i><sup>∧</sup></i>~S~>" ’foo) 



*→* " FOO" 



(format nil "~15<~S~;~<i><sup>∧</sup></i>~S~;~<i><sup>∧</sup></i>~S~>" ’foo ’bar) 



*→* "FOO BAR" 



(format nil "~15<~S~;~<i><sup>∧</sup></i>~S~;~<i><sup>∧</sup></i>~S~>" ’foo ’bar ’baz) 



*→* "FOO BAR BAZ" 



