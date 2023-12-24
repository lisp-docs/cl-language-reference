 



A number of the functions in the condition system take arguments which are identified as *condition designators*. By convention, those arguments are notated as 



*datum* &amp;rest <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> 



Taken together, the *datum* and the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are “<ClLinks styled={true} term={"designator"}><i>designators</i></ClLinks> for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of default type *default-type*.” How the denoted <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is computed depends on the type of the *datum*: 



*•* If the *datum* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a *condition type . . .* 



The denoted <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is the result of 



(apply #’make-condition *datum arguments*) 







 



 



*•* If the *datum* is a *format control . . .* 



The denoted <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is the result of 



(make-condition *defaulted-type* 



:format-control *datum* 



:format-arguments <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>) 



where the *defaulted-type* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *default-type*. 



*•* If the *datum* is a *condition . . .* 



The denoted <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is the *datum* itself. In this case, unless otherwise specified by the description of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> in question, the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> must be <ClLinks styled={true} term={"null"}><i>null</i></ClLinks>; that is, the consequences are undefined if any <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> were supplied. 



Note that the *default-type* gets used only in the case where the *datum string* is supplied. In the other situations, the resulting condition is not necessarily of *type default-type*. 



Here are some illustrations of how different *condition designators* can denote equivalent *condition objects*: 



(let ((c (make-condition ’arithmetic-error :operator ’/ :operands ’(7 0)))) 



(error c)) 



*≡* (error ’arithmetic-error :operator ’/ :operands ’(7 0)) 



(error "Bad luck.") 



*≡* (error ’simple-error :format-control "Bad luck." :format-arguments ’()) 



