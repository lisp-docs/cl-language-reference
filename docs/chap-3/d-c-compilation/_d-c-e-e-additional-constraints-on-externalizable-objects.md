**3.2.4.4 Additional Constraints on Externalizable Objects** 

If two *literal objects* appearing in the source code for a single file processed with the *file compiler* are the *identical*, the corresponding *objects* in the *compiled code* must also be the *identical*. With the exception of *symbols* and *packages*, any two *literal objects* in *code* being processed by the *file compiler* may be *coalesced* if and only if they are *similar* ; if they are either both *symbols* or both *packages*, they may only be *coalesced* if and only if they are *identical*. 

*Objects* containing circular references can be *externalizable objects*. The *file compiler* is required to preserve **eql**ness of substructures within a *file*. Preserving **eql**ness means that subobjects that are the *same* in the *source code* must be the *same* in the corresponding *compiled code*. 

In addition, the following are constraints on the handling of *literal objects* by the *file compiler* : 

**array:** If an *array* in the source code is a *simple array*, then the corresponding *array* in the compiled code will also be a *simple array*. If an *array* in the source code is displaced, has a *fill pointer* , or is *actually adjustable*, the corresponding *array* in the compiled code might lack any or all of these qualities. If an *array* in the source code has a fill pointer, then the corresponding *array* in the compiled code might be only the size implied by the fill pointer.  



**packages:** The loader is required to find the corresponding *package object* as if by calling **find-package** with the package name as an argument. An error of *type* **package-error** is signaled if no *package* of that name exists at load time. 

**random-state:** A constant *random state* object cannot be used as the state argument to the *function* **random** because **random** modifies this data structure. 

**structure, standard-object:** *Objects* of *type* **structure-object** and **standard-object** may appear in compiled constants if there is an appropriate **make-load-form** method defined for that *type*. 

The *file compiler* calls **make-load-form** on any *object* that is referenced as a *literal object* if the *object* is a *generalized instance* of **standard-object**, **structure-object**, **condition**, or any of a (possibly empty) *implementation-dependent* set of other *classes*. The *file compiler* only calls **make-load-form** once for any given *object* within a single *file*. 

**symbol:** In order to guarantee that *compiled files* can be *loaded* correctly, users must ensure that the *packages* referenced in those *files* are defined consistently at compile time and load time. *Conforming programs* must satisfy the following requirements: 

1\. The *current package* when a *top level form* in the *file* is processed by **compile-file** must be the same as the *current package* when the *code* corresponding to that *top level form* in the *compiled file* is executed by **load**. In particular: 

a. Any *top level form* in a *file* that alters the *current package* must change it to 

a *package* of the same *name* both at compile time and at load time. 

b. If the first *non-atomic top level form* in the *file* is not an **in-package** *form*, 

then the *current package* at the time **load** is called must be a *package* with 

the same *name* as the package that was the *current package* at the time 

**compile-file** was called. 

2\. For all *symbols* appearing lexically within a *top level form* that were *accessible* in the *package* that was the *current package* during processing of that *top level form* at compile time, but whose *home package* was another *package*, at load time there must be a *symbol* with the same *name* that is *accessible* in both the load-time *current package* and in the *package* with the same *name* as the compile-time *home package*. 

3\. For all *symbols* represented in the *compiled file* that were *external symbols* in their *home package* at compile time, there must be a *symbol* with the same *name* that is an *external symbol* in the *package* with the same *name* at load time. 

If any of these conditions do not hold, the *package* in which the *loader* looks for the affected *symbols* is unspecified. *Implementations* are permitted to signal an error or to define this behavior. 





