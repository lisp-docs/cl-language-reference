 



&#126;<i><sup>∧</sup></i> 



This is an escape construct. If there are no more arguments remaining to be processed, then the immediately enclosing &#126;\{ or &#126;&lt; construct is terminated. If there is no such enclosing construct, then the entire formatting operation is terminated. In the &#126;&lt; case, the formatting is performed, 



but no more segments are processed before doing the justification. &#126;<i><sup>∧</sup></i> may appear anywhere in a &#126;\{ construct. 



(setq donestr "Done.&#126;<i><sup>∧</sup></i> &#126;D warning&#126;:P.&#126;<i><sup>∧</sup></i> &#126;D error&#126;:P.") 



<i>→</i> "Done.&#126;<i><sup>∧</sup></i> &#126;D warning&#126;:P.&#126;<i><sup>∧</sup></i> &#126;D error&#126;:P." 



(format nil donestr) *→* "Done." 



(format nil donestr 3) *→* "Done. 3 warnings." 



(format nil donestr 1 5) *→* "Done. 1 warning. 5 errors." 



If a prefix parameter is given, then termination occurs if the parameter is zero. (Hence &#126;<i><sup>∧</sup></i> is equivalent to &#126;#<i><sup>∧</sup></i>.) If two parameters are given, termination occurs if they are equal. If three parameters are given, termination occurs if the first is less than or equal to the second and the second is less than or equal to the third. Of course, this is useless if all the prefix parameters are constants; at least one of them should be a # or a V parameter. 



If &#126;<i><sup>∧</sup></i> is used within a &#126;:\{ construct, then it terminates the current iteration step because in the standard case it tests for remaining arguments of the current step only; the next iteration step commences immediately. &#126;:<i><sup>∧</sup></i> is used to terminate the iteration process. &#126;:<i><sup>∧</sup></i> may be used only if the command it would terminate is &#126;:\{ or &#126;:@\{. The entire iteration process is terminated if and only if the sublist that is supplying the arguments for the current iteration step is the last sublist in the case of &#126;:\{, or the last <b>format</b> argument in the case of &#126;:@\{. &#126;:<i><sup>∧</sup></i> is not equivalent to &#126;#:<i><sup>∧</sup></i>; the latter terminates the entire iteration if and only if no arguments remain for the current iteration step. For example: 



(format nil "&#126;:\{&#126;@?&#126;:<i><sup>∧</sup></i>...&#126;\}" ’(("a") ("b"))) <i>→</i> "a...b" 



If &#126;<i><sup>∧</sup></i> appears within a control string being processed under the control of a &#126;? directive, but not within any &#126;\{ or &#126;&lt; construct within that string, then the string being processed will be terminated, thereby ending processing of the &#126;? directive. Processing then continues within the string containing the &#126;? directive at the point following that directive. 







 



 



If &#126;<i><sup>∧</sup></i> appears within a &#126;[ or &#126;( construct, then all the commands up to the &#126;<i><sup>∧</sup></i> are properly selected or case-converted, the &#126;[ or &#126;( processing is terminated, and the outward search continues for a &#126;\{ or &#126;&lt; construct to be terminated. For example: 



(setq tellstr "&#126;@(&#126;@[&#126;R&#126;]&#126;<i><sup>∧</sup></i> &#126;A!&#126;)") 



<i>→</i> "&#126;@(&#126;@[&#126;R&#126;]&#126;<i><sup>∧</sup></i> &#126;A!&#126;)" 



(format nil tellstr 23) *→* "Twenty-three!" 



(format nil tellstr nil "losers") *→* " Losers!" 



(format nil tellstr 23 "losers") *→* "Twenty-three losers!" 



Following are examples of the use of &#126;<i><sup>∧</sup></i> within a &#126;&lt; construct. 



(format nil "&#126;15&lt;&#126;S&#126;;&#126;<i><sup>∧</sup></i>&#126;S&#126;;&#126;<i><sup>∧</sup></i>&#126;S&#126;&gt;" ’foo) 



*→* " FOO" 



(format nil "&#126;15&lt;&#126;S&#126;;&#126;<i><sup>∧</sup></i>&#126;S&#126;;&#126;<i><sup>∧</sup></i>&#126;S&#126;&gt;" ’foo ’bar) 



*→* "FOO BAR" 



(format nil "&#126;15&lt;&#126;S&#126;;&#126;<i><sup>∧</sup></i>&#126;S&#126;;&#126;<i><sup>∧</sup></i>&#126;S&#126;&gt;" ’foo ’bar ’baz) 



*→* "FOO BAR BAZ" 



