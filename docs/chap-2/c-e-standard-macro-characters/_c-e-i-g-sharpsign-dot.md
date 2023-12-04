 



#.*foo* is read as the *object* resulting from the evaluation of the *object* represented by *foo*. The evaluation is done during the **read** process, when the #. notation is encountered. The #. syntax therefore performs a read-time evaluation of *foo*. 



The normal effect of #. is inhibited when the *value* of **\*read-eval\*** is *false*. In that situation, an error of *type* **reader-error** is signaled. 



For an *object* that does not have a convenient printed representation, a *form* that computes the *object* can be given using the #. notation. 



