 

A number of the functions in the condition system take arguments which are identified as *condition designators*. By convention, those arguments are notated as 

*datum* &rest *arguments* 

Taken together, the *datum* and the *arguments* are “*designators* for a *condition* of default type *default-type*.” How the denoted *condition* is computed depends on the type of the *datum*: 

*•* If the *datum* is a *symbol* naming a *condition type . . .* 

The denoted *condition* is the result of 

(apply #’make-condition *datum arguments*) 



 

 

*•* If the *datum* is a *format control . . .* 

The denoted *condition* is the result of 

(make-condition *defaulted-type* 

:format-control *datum* 

:format-arguments *arguments*) 

where the *defaulted-type* is a *subtype* of *default-type*. 

*•* If the *datum* is a *condition . . .* 

The denoted *condition* is the *datum* itself. In this case, unless otherwise specified by the description of the *operator* in question, the *arguments* must be *null*; that is, the consequences are undefined if any *arguments* were supplied. 

Note that the *default-type* gets used only in the case where the *datum string* is supplied. In the other situations, the resulting condition is not necessarily of *type default-type*. 

Here are some illustrations of how different *condition designators* can denote equivalent *condition objects*: 

(let ((c (make-condition ’arithmetic-error :operator ’/ :operands ’(7 0)))) 

(error c)) 

*≡* (error ’arithmetic-error :operator ’/ :operands ’(7 0)) 

(error "Bad luck.") 

*≡* (error ’simple-error :format-control "Bad luck." :format-arguments ’()) 

