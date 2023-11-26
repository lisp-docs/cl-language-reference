**3.7.1 Modification of Literal Objects** 

The consequences are undefined if *literal objects* are destructively modified. For this purpose, the following operations are considered *destructive*: 

**random-state** 

Using it as an *argument* to the *function* **random**. 

**cons** 

Changing the *car* \<sub\>1\</sub\> or *cdr* \<sub\>1\</sub\> of the *cons*, or performing a *destructive* operation on an *object* which is either the *car* \<sub\>2\</sub\> or the *cdr* \<sub\>2\</sub\> of the *cons*. 

**array** 

Storing a new value into some element of the *array*, or performing a *destructive* operation on an *object* that is already such an *element*. 

Changing the *fill pointer* , *dimensions*, or displacement of the *array* (regardless of whether the *array* is *actually adjustable*). 

Performing a *destructive* operation on another *array* that is displaced to the *array* or that otherwise shares its contents with the *array*. 

**hash-table** 

Performing a *destructive* operation on any *key*. 

Storing a new *value*\<sub\>4\</sub\> for any *key*, or performing a *destructive* operation on any *object* that is such a *value*. 

Adding or removing entries from the *hash table*. 

**structure-object** 

Storing a new value into any slot, or performing a *destructive* operation on an *object* that is the value of some slot. 

**standard-object** 

Storing a new value into any slot, or performing a *destructive* operation on an *object* that is the value of some slot. 

Changing the class of the *object* (*e.g.*, using the *function* **change-class**).  



**readtable** 

Altering the *readtable case*. 

Altering the syntax type of any character in this readtable. 

Altering the *reader macro function* associated with any *character* in the *readtable*, or altering the *reader macro functions* associated with *characters* defined as *dispatching macro characters* in the *readtable*. 

**stream** 

Performing I/O operations on the *stream*, or *closing* the *stream*. 

All other standardized types 

[This category includes, for example, **character**, **condition**, **function**, 

**method-combination**, **method**, **number**, **package**, **pathname**, **restart**, and **symbol**.] There are no *standardized destructive* operations defined on *objects* of these *types*. 

