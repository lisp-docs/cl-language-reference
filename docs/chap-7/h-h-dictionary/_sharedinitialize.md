**shared-initialize** *Standard Generic Function* 



**Syntax:** 



**shared-initialize** *instance slot-names* &amp;rest *initargs* &amp;key &amp;allow-other-keys *→ instance* 



**Method Signatures:** 



**shared-initialize** (*instance* **standard-object**) *slot-names* &amp;rest *initargs* 



**Arguments and Values:** 



*instance*—an *object*. 



*slot-names*—a *list* or **t**. 



*initargs*—a *list* of *keyword/value pairs* (of initialization argument *names* and *values*). 



**Description:** 



The generic function **shared-initialize** is used to fill the *slots* of an *instance* using *initargs* and :initform forms. It is called when an instance is created, when an instance is re-initialized, when an instance is updated to conform to a redefined *class*, and when an instance is updated to conform to a different *class*. The generic function **shared-initialize** is called by the system-supplied primary *method* for **initialize-instance**, **reinitialize-instance**, **update-instance-for-redefined-class**, and **update-instance-for-different-class**. 



The generic function **shared-initialize** takes the following arguments: the *instance* to be initialized, a specification of a set of *slot-names accessible* in that *instance*, and any number of *initargs*. The arguments after the first two must form an *initialization argument list*. The system-supplied 







 



 



**shared-initialize** 



primary *method* on **shared-initialize** initializes the *slots* with values according to the *initargs* and supplied :initform forms. *Slot-names* indicates which *slots* should be initialized according to their :initform forms if no *initargs* are provided for those *slots*. 



The system-supplied primary *method* behaves as follows, regardless of whether the *slots* are local or shared: 



*•* If an *initarg* in the *initialization argument list* specifies a value for that *slot*, that value is stored into the *slot*, even if a value has already been stored in the *slot* before the *method* is run. 



*•* Any *slots* indicated by *slot-names* that are still unbound at this point are initialized according to their :initform forms. For any such *slot* that has an :initform form, that *form* is evaluated in the lexical environment of its defining **defclass** *form* and the result is stored into the *slot*. For example, if a *before method* stores a value in the *slot*, the :initform form will not be used to supply a value for the *slot*. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The *slots-names* argument specifies the *slots* that are to be initialized according to their :initform forms if no initialization arguments apply. It can be a *list* of slot *names*, which specifies the set of those slot *names*; or it can be the *symbol* **t**, which specifies the set of all of the *slots*. 



**See Also:** 



**initialize-instance**, **reinitialize-instance**, **update-instance-for-redefined-class**, 



**update-instance-for-different-class**, **slot-boundp**, **slot-makunbound**, Section 7.1 (Object Creation and Initialization), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to **defclass**, or by defining *methods* for **shared-initialize**. The keyword name of each keyword parameter specifier in the *lambda list* of any *method* defined on **shared-initialize** is declared as a valid *initarg* name for all *classes* for which that *method* is applicable. 



Implementations are permitted to optimize :initform forms that neither produce nor depend on side effects, by evaluating these *forms* and storing them into slots before running any **initialize-instance** methods, rather than by handling them in the primary **initialize-instance** method. (This optimization might be implemented by having the **allocate-instance** method copy a prototype instance.) 



Implementations are permitted to optimize default initial value forms for *initargs* associated with slots by not actually creating the complete initialization argument *list* when the only *method* that would receive the complete *list* is the *method* on **standard-object**. In this case default initial value 



forms can be treated like :initform forms. This optimization has no visible effects other than a performance improvement. 







 



 



