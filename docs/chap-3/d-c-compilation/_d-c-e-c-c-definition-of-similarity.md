**3.2.4.2.2 Definition of Similarity** 

Two *objects S* (in *source code*) and *C* (in *compiled code*) are defined to be *similar* if and only if they are both of one of the *types* listed here (or defined by the *implementation*) and they both satisfy all additional requirements of *similarity* indicated for that *type*. 

**number** 

Two *numbers S* and *C* are *similar* if they are of the same *type* and represent the same mathematical value. 

**character** 

Two *simple characters S* and *C* are *similar* if they have *similar code attributes*. 

*Implementations* providing additional, *implementation-defined attributes* must define whether and how *non-simple characters* can be regarded as *similar* . 

**symbol** 

Two *apparently uninterned symbols S* and *C* are *similar* if their *names* are *similar* . 

Two *interned* symbols *S* and *C* are *similar* if their *names* are *similar* , and if either *S* is accessible in the *current package* at compile time and *C* is accessible in the *current package* at load time, or *C* is accessible in the *package* that is *similar* to the *home package* of *S*. 

(Note that *similarity* of *symbols* is dependent on neither the *current readtable* nor how the *function* **read** would parse the *characters* in the *name* of the *symbol*.) 

**package** 

Two *packages S* and *C* are *similar* if their *names* are *similar* . 

Note that although a *package object* is an *externalizable object*, the programmer is responsible for ensuring that the corresponding *package* is already in existence when code  



referencing it as a *literal object* is *loaded*. The *loader* finds the corresponding *package object* as if by calling **find-package** with that *name* as an *argument*. An error is signaled by the *loader* if no *package* exists at load time. 

**random-state** 

Two *random states S* and *C* are *similar* if *S* would always produce the same sequence of pseudo-random numbers as a *copy*\<sub\>5\</sub\> of *C* when given as the *random-state argument* to the *function* **random**, assuming equivalent *limit arguments* in each case. 

(Note that since *C* has been processed by the *file compiler* , it cannot be used directly as an *argument* to **random** because **random** would perform a side effect.) 

**cons** 

Two *conses*, *S* and *C*, are *similar* if the *car* \<sub\>2\</sub\> of *S* is *similar* to the *car* \<sub\>2\</sub\> of *C*, and the *cdr* \<sub\>2\</sub\> of *S* is *similar* to the *cdr* \<sub\>2\</sub\> of *C*. 

**array** 

Two one-dimensional *arrays*, *S* and *C*, are *similar* if the *length* of *S* is *similar* to the *length* of *C*, the *actual array element type* of *S* is *similar* to the *actual array element type* of *C*, and each *active element* of *S* is *similar* to the corresponding *element* of *C*. 

Two *arrays* of *rank* other than one, *S* and *C*, are *similar* if the *rank* of *S* is *similar* to the *rank* of *C*, each *dimension*\<sub\>1\</sub\> of *S* is *similar* to the corresponding *dimension*\<sub\>1\</sub\> of *C*, the *actual array element type* of *S* is *similar* to the *actual array element type* of *C*, and each *element* of *S* is *similar* to the corresponding *element* of *C*. 

In addition, if *S* is a *simple array*, then *C* must also be a *simple array*. If *S* is a *displaced array*, has a *fill pointer* , or is *actually adjustable*, *C* is permitted to lack any or all of these qualities. 

**hash-table** 

Two *hash tables S* and *C* are *similar* if they meet the following three requirements: 1. They both have the same test (*e.g.*, they are both **eql** *hash tables*). 

2\. There is a unique one-to-one correspondence between the keys of the two *hash tables*, such that the corresponding keys are *similar* . 

3\. For all keys, the values associated with two corresponding keys are *similar* . 

If there is more than one possible one-to-one correspondence between the keys of *S* and *C*, the consequences are unspecified. A *conforming program* cannot use a table such as *S* as an *externalizable constant*.  



**pathname** 

Two *pathnames S* and *C* are *similar* if all corresponding *pathname components* are *similar* . 

**function** 

*Functions* are not *externalizable objects*. 

**structure-object** and **standard-object** 

A general-purpose concept of *similarity* does not exist for *structures* and *standard objects*. However, a *conforming program* is permitted to define a **make-load-form** *method* for any *class K* defined by that *program* that is a *subclass* of either **structure-object** or **standard-object**. The effect of such a *method* is to define that an *object S* of *type K* in *source code* is *similar* to an *object C* of *type K* in *compiled code* if *C* was constructed from *code* produced by calling **make-load-form** on *S*. 

