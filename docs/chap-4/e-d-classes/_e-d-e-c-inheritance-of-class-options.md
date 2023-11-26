**4.3.4.2 Inheritance of Class Options** 

The :default-initargs class option is inherited. The set of defaulted initialization arguments for a *class* is the union of the sets of initialization arguments supplied in the :default-initargs class options of the *class* and its *superclasses*. When more than one default initial value *form* is supplied 

for a given initialization argument, the default initial value *form* that is used is the one supplied by the *class* that is most specific according to the *class precedence list*. 

If a given :default-initargs class option specifies an initialization argument of the same *name* more than once, an error of *type* **program-error** is signaled.  



