 



An extension of data-directed destructuring of <ClLinks styled={true} term={"tree"}><i>trees</i></ClLinks> is lambda-list-directed destructuring. This derives from the analogy between the three-element destructuring pattern 



(first second third) 



and the three-argument *lambda list* 



(first second third) 



Lambda-list-directed destructuring is identical to data-directed destructuring if no *lambda list keywords* appear in the pattern. Any list in the pattern (whether a sub-list or the whole pattern itself) that contains a *lambda list keyword* is interpreted specially. Elements of the list to the left of the first *lambda list keyword* are treated as destructuring patterns, as usual, but the remaining elements of the list are treated like a function’s *lambda list* except that where a variable would normally be required, an arbitrary destructuring pattern is allowed. Note that in case of ambiguity,  







*lambda list* syntax is preferred over destructuring syntax. Thus, after **&amp;optional** a list of elements is a list of a destructuring pattern and a default value form. 



The detailed behavior of each *lambda list keyword* in a lambda-list-directed destructuring pattern is as follows: 



**&amp;optional** 



Each following element is a variable or a list of a destructuring pattern, a default value form, and a supplied-p variable. The default value and the supplied-p variable can be omitted. If the list being destructured ends early, so that it does not have an element 



to match against this destructuring (sub)-pattern, the default form is evaluated and destructured instead. The supplied-p variable receives the value <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the default form is used, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> otherwise. 



**&amp;rest**, **&amp;body** 



The next element is a destructuring pattern that matches the rest of the list. **&amp;body** is identical to **&amp;rest** but declares that what is being matched is a list of forms that constitutes the body of <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. This next element must be the last unless a *lambda list keyword* follows it. 



**&amp;aux** 



The remaining elements are not destructuring patterns at all, but are auxiliary variable bindings. 



**&amp;whole** 



The next element is a destructuring pattern that matches the entire form in a macro, or the entire <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks> at inner levels. 



**&amp;key** 



Each following element is one of 



a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>, 



or a list of a variable, an optional initialization form, and an optional supplied-p variable. 



or a list of a list of a keyword and a destructuring pattern, an optional initialization form, and an optional supplied-p variable. 



The rest of the list being destructured is taken to be alternating keywords and values and is taken apart appropriately.  







**&amp;allow-other-keys** 



Stands by itself. 



