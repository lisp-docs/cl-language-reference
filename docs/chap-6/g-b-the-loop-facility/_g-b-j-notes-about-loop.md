 



*Types* can be supplied for loop variables. It is not necessary to supply a *type* for any variable, but supplying the *type* can ensure that the variable has a correctly typed initial value, and it can also enable compiler optimizations (depending on the *implementation*). 



The clause repeat *n* ... is roughly equivalent to a clause such as 



(loop for *internal-variable* downfrom (- *n* 1) to 0 ...) 



but in some *implementations*, the repeat construct might be more efficient. 



Within the executable parts of the loop clauses and around the entire **loop** form, variables can be bound by using **let**. 



Use caution when using a variable named IT (in any *package*) in connection with **loop**, since it is a *loop keyword* that can be used in place of a *form* in certain contexts. 



There is no *standardized* mechanism for users to add extensions to **loop**. 







 



 



