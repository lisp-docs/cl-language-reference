 



The description of a *generic function* includes descriptions of the *methods* that are defined on that *generic function* by the standard. A method signature is used to describe the *parameters* and *parameter specializers* for each *method*. *Methods* defined for the *generic function* must be of the form described by the *method signature*. 



**F** (*x class*) (*y t*) &optional *z* &key *k* 



This *signature* indicates that this method on the *generic function* **F** has two *required parameters*: *x*, which must be a *generalized instance* of the *class class*; and *y*, which can be any *object* (*i.e.*, a *generalized instance* of the *class* **t**). In addition, there is an *optional parameter z* and a *keyword parameter k*. This *signature* also indicates that this method on F is a *primary method* and has no *qualifiers*. 



For each *parameter* , the *argument* supplied must be in the intersection of the *type* specified in the description of the corresponding *generic function* and the *type* given in the *signature* of some *method* (including not only those *methods* defined in this specification, but also *implementation-defined* or user-defined *methods* in situations where the definition of such *methods* is permitted). 



