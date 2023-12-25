 



A number of the functions in the condition system take arguments which are identified as *condition designators*. By convention, those arguments are notated as 



*datum* &amp;rest <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> 



Taken together, the *datum* and the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are “<GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of default type *default-type*.” How the denoted <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is computed depends on the type of the *datum*: 



*•* If the *datum* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a *condition type . . .* 



The denoted <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is the result of 



(apply #’make-condition *datum arguments*) 







 



 



*•* If the *datum* is a *format control . . .* 



The denoted <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is the result of 



(make-condition *defaulted-type* 



:format-control *datum* 



:format-arguments <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) 



where the *defaulted-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *default-type*. 



*•* If the *datum* is a *condition . . .* 



The denoted <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is the *datum* itself. In this case, unless otherwise specified by the description of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> in question, the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> must be <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm>; that is, the consequences are undefined if any <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> were supplied. 



Note that the *default-type* gets used only in the case where the *datum string* is supplied. In the other situations, the resulting condition is not necessarily of *type default-type*. 



Here are some illustrations of how different *condition designators* can denote equivalent *condition objects*: 



(let ((c (make-condition ’arithmetic-error :operator ’/ :operands ’(7 0)))) 



(error c)) 



*≡* (error ’arithmetic-error :operator ’/ :operands ’(7 0)) 



(error "Bad luck.") 



*≡* (error ’simple-error :format-control "Bad luck." :format-arguments ’()) 



