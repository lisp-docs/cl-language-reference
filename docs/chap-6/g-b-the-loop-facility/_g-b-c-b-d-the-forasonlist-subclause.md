 

In the *for-as-on-list* subclause, the for or as construct iterates over a *list*. It checks for the end of the *list* as if by using **atom**. The variable *var* is bound to the successive tails of the *list* in *form1*. At the end of each iteration, the function *step-fun* is applied to the *list*; the default value for *step-fun* is **cdr**. The *loop keywords* on and by serve as valid prepositions in this syntax. The for or as construct causes termination when the end of the *list* is reached. 

