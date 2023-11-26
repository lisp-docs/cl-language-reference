**22.2.1.4 Pretty Print Dispatch Tables** 

A *pprint dispatch table* is a mapping from keys to pairs of values. Each key is a *type specifier* . The values associated with a key are a “function” (specifically, a *function designator* or **nil**) and a “numerical priority” (specifically, a *real*). Basic insertion and retrieval is done based on the keys with the equality of keys being tested by **equal**. 

When **\*print-pretty\*** is *true*, the *current pprint dispatch table* (in **\*print-pprint-dispatch\***) controls how *objects* are printed. The information in this table takes precedence over all other mechanisms for specifying how to print *objects*. In particular, it has priority over user-defined **print-object** *methods* because the *current pprint dispatch table* is consulted first. 

The function is chosen from the *current pprint dispatch table* by finding the highest priority function that is associated with a *type specifier* that matches the *object*; if there is more than one such function, it is *implementation-dependent* which is used. 

However, if there is no information in the table about how to *pretty print* a particular kind of *object*, a *function* is invoked which uses **print-object** to print the *object*. The value of **\*print-pretty\*** is still *true* when this function is *called*, and individual methods for **print-object** might still elect to produce output in a special format conditional on the *value* of **\*print-pretty\***. 

