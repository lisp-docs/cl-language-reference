 

The *generic function* **shared-initialize** is used to fill the *slots* of an *instance* using initialization arguments and :initform forms when an *instance* is created, when an *instance* is re-initialized, when an *instance* is updated to conform to a redefined *class*, and when an *instance* is updated to conform to a different *class*. It uses standard *method* combination. It takes the following 

arguments: the *instance* to be initialized, a specification of a set of *names* of *slots accessible* in that *instance*, and any number of initialization arguments. The arguments after the first two must form an *initialization argument list*. 

The second argument to **shared-initialize** may be one of the following: 

*•* It can be a (possibly empty) *list* of *slot* names, which specifies the set of those *slot* names. 

*•* It can be the symbol **t**, which specifies the set of all of the *slots*. 

There is a system-supplied primary *method* for **shared-initialize** whose first *parameter specializer* is the *class* **standard-object**. This *method* behaves as follows on each *slot*, whether shared or local: 

*•* If an initialization argument in the *initialization argument list* specifies a value for that *slot*, that value is stored into the *slot*, even if a value has already been stored in the *slot* before the *method* is run. The affected *slots* are independent of which *slots* are indicated by the second argument to **shared-initialize**. 

*•* Any *slots* indicated by the second argument that are still unbound at this point are initialized according to their :initform forms. For any such *slot* that has an :initform form, that *form* is evaluated in the lexical environment of its defining **defclass** form and the result is stored into the *slot*. For example, if a *before method* stores a value in the *slot*, the :initform form will not be used to supply a value for the *slot*. If the second argument specifies a *name* that does not correspond to any *slots accessible* in the *instance*, the results are unspecified. 

*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 

The generic function **shared-initialize** is called by the system-supplied primary *methods* for **reinitialize-instance**, **update-instance-for-different-class**, **update-instance-for-redefined-class**, and **initialize-instance**. Thus, *methods* can be written for **shared-initialize** to specify actions that should be taken in all of these contexts. 

