 

~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; 

This is an escape construct. If there are no more arguments remaining to be processed, then the immediately enclosing ~&#123; or ~&#60; construct is terminated. If there is no such enclosing construct, then the entire formatting operation is terminated. In the ~&#60; case, the formatting is performed, 

but no more segments are processed before doing the justification. ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; may appear anywhere in a ~&#123; construct. 

(setq donestr "Done.~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; ~D warning~:P.~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; ~D error~:P.") 

&#60;i&#62;→&#60;/i&#62; "Done.~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; ~D warning~:P.~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; ~D error~:P." 

(format nil donestr) *→* "Done." 

(format nil donestr 3) *→* "Done. 3 warnings." 

(format nil donestr 1 5) *→* "Done. 1 warning. 5 errors." 

If a prefix parameter is given, then termination occurs if the parameter is zero. (Hence ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; is equivalent to ~#&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;.) If two parameters are given, termination occurs if they are equal. If three parameters are given, termination occurs if the first is less than or equal to the second and the second is less than or equal to the third. Of course, this is useless if all the prefix parameters are constants; at least one of them should be a # or a V parameter. 

If ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; is used within a ~:&#123; construct, then it terminates the current iteration step because in the standard case it tests for remaining arguments of the current step only; the next iteration step commences immediately. ~:&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; is used to terminate the iteration process. ~:&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; may be used only if the command it would terminate is ~:&#123; or ~:@&#123;. The entire iteration process is terminated if and only if the sublist that is supplying the arguments for the current iteration step is the last sublist in the case of ~:&#123;, or the last &#60;b&#62;format&#60;/b&#62; argument in the case of ~:@&#123;. ~:&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; is not equivalent to ~#:&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;; the latter terminates the entire iteration if and only if no arguments remain for the current iteration step. For example: 

(format nil "~:&#123;~@?~:&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;...~&#125;" ’(("a") ("b"))) &#60;i&#62;→&#60;/i&#62; "a...b" 

If ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; appears within a control string being processed under the control of a ~? directive, but not within any ~&#123; or ~&#60; construct within that string, then the string being processed will be terminated, thereby ending processing of the ~? directive. Processing then continues within the string containing the ~? directive at the point following that directive. 



 

 

If ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; appears within a ~[ or ~( construct, then all the commands up to the ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; are properly selected or case-converted, the ~[ or ~( processing is terminated, and the outward search continues for a ~&#123; or ~&#60; construct to be terminated. For example: 

(setq tellstr "~@(~@[~R~]~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; ~A!~)") 

&#60;i&#62;→&#60;/i&#62; "~@(~@[~R~]~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; ~A!~)" 

(format nil tellstr 23) *→* "Twenty-three!" 

(format nil tellstr nil "losers") *→* " Losers!" 

(format nil tellstr 23 "losers") *→* "Twenty-three losers!" 

Following are examples of the use of ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; within a ~&#60; construct. 

(format nil "~15&#60;~S~;~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;~S~;~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;~S~&#62;" ’foo) 

*→* " FOO" 

(format nil "~15&#60;~S~;~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;~S~;~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;~S~&#62;" ’foo ’bar) 

*→* "FOO BAR" 

(format nil "~15&#60;~S~;~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;~S~;~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;~S~&#62;" ’foo ’bar ’baz) 

*→* "FOO BAR BAZ" 

