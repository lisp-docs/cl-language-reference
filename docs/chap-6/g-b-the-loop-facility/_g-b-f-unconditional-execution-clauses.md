**6.1.5 Unconditional Execution Clauses** 

The do and doing constructs evaluate the supplied *forms* wherever they occur in the expanded form of **loop**. The *form* argument can be any *compound form*. Each *form* is evaluated in every iteration. Because every loop clause must begin with a *loop keyword*, the keyword do is used when no control action other than execution is required. 

The return construct takes one *form*. Any *values* returned by the *form* are immediately returned by the **loop** form. It is equivalent to the clause do (return-from *block-name value*), where *block-name* is the name specified in a named clause, or **nil** if there is no named clause. 



 

 

