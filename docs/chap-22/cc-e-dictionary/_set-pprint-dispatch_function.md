**set-pprint-dispatch** *Function* 



**Syntax:** 



**set-pprint-dispatch** *type-specifier function* &amp;optional *priority table →* **nil** 



**Arguments and Values:** 



*type-specifier*—a *type specifier* . 



*function*—a *function*, a *function name*, or **nil**. 



*priority*—a *real*. The default is 0. 



*table*—a *pprint dispatch table*. The default is the *value* of **\*print-pprint-dispatch\***. 



 



 



**Description:** 



Installs an entry into the *pprint dispatch table* which is *table*. 



*Type-specifier* is the *key* of the entry. The first action of **set-pprint-dispatch** is to remove any pre-existing entry associated with *type-specifier*. This guarantees that there will never be two entries associated with the same *type specifier* in a given *pprint dispatch table*. Equality of *type specifiers* is tested by **equal**. 



Two values are associated with each *type specifier* in a *pprint dispatch table*: a *function* and a *priority*. The *function* must accept two arguments: the *stream* to which output is sent and the *object* to be printed. The *function* should *pretty print* the *object* to the *stream*. The *function* can assume that object satisfies the *type* given by *type-specifier* . The *function* must obey **\*print-readably\***. Any values returned by the *function* are ignored. 



*Priority* is a priority to resolve conflicts when an object matches more than one entry. 



It is permissible for *function* to be **nil**. In this situation, there will be no *type-specifier* entry in *table* after **set-pprint-dispatch** returns. 



**Exceptional Situations:** 



An error is signaled if *priority* is not a *real*. 



**Notes:** 



Since *pprint dispatch tables* are often used to control the pretty printing of Lisp code, it is common for the *type-specifier* to be an *expression* of the form 



(cons *car-type cdr-type*) 



This signifies that the corresponding object must be a cons cell whose *car* matches the *type specifier car-type* and whose *cdr* matches the *type specifier cdr-type*. The *cdr-type* can be omitted in which case it defaults to **t**. 



