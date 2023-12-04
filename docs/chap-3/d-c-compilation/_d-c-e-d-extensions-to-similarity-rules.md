 



Some *objects*, such as *streams*, **readtables**, and **methods** are not *externalizable objects* under the definition of similarity given above. That is, such *objects* may not portably appear as *literal objects* in *code* to be processed by the *file compiler* . 



An *implementation* is permitted to extend the rules of similarity, so that other kinds of *objects* are *externalizable objects* for that *implementation*. 



If for some kind of *object*, *similarity* is neither defined by this specification nor by the *implementation*, then the *file compiler* must signal an error upon encountering such an *object* as a *literal constant*. 



