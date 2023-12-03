 

A *boa lambda list* is a *lambda list* that is syntactically like an *ordinary lambda list*, but that is processed in “**b**y **o**rder of **a**rgument” style. 

A *boa lambda list* is used only in a **defstruct** *form*, when explicitly specifying the *lambda list* of a constructor *function* (sometimes called a “boa constructor”). 

The **&optional**, **&rest**, **&aux**, **&key**, and **&allow-other-keys** *lambda list keywords* are recognized in a *boa lambda list*. The way these *lambda list keywords* differ from their use in an *ordinary lambda list* follows. 

Consider this example, which describes how **destruct** processes its :constructor option. Evaluation and 





(:constructor create-foo 

(a &optional b (c ’sea) &rest d &aux e (f ’eff))) 

This defines create-foo to be a constructor of one or more arguments. The first argument is used to initialize the a slot. The second argument is used to initialize the b slot. If there isn’t any second argument, then the default value given in the body of the **defstruct** (if given) is used instead. The third argument is used to initialize the c slot. If there isn’t any third argument, then the symbol 

sea is used instead. Any arguments following the third argument are collected into a *list* and used to initialize the d slot. If there are three or fewer arguments, then **nil** is placed in the d slot. The e slot is not initialized; its initial value is *implementation-defined*. Finally, the f slot is initialized to contain the symbol eff. **&key** and **&allow-other-keys** arguments default in a manner similar to that of **&optional** arguments: if no default is supplied in the *lambda list* then the default value given in the body of the **defstruct** (if given) is used instead. For example: 

(defstruct (foo (:constructor CREATE-FOO (a &optional b (c ’sea) 

&key (d 2) 

&aux e (f ’eff)))) 

(a 1) (b 2) (c 3) (d 4) (e 5) (f 6)) 

(create-foo 10) *→* #S(FOO A 10 B 2 C SEA D 2 E *implemention-dependent* F EFF) (create-foo 10 ’bee ’see :d ’dee) 

*→* #S(FOO A 10 B BEE C SEE D DEE E *implemention-dependent* F EFF) 

If keyword arguments of the form ((*key var*) [*default* [*svar* ]]) are specified, the *slot name* is matched with *var* (not *key*). 

The actions taken in the b and e cases were carefully chosen to allow the user to specify all possible behaviors. The **&aux** variables can be used to completely override the default initializations given in the body. 

If no default value is supplied for an *aux variable* variable, the consequences are undefined if an attempt is later made to read the corresponding *slot*’s value before a value is explicitly assigned. If such a *slot* has a :type option specified, this suppressed initialization does not imply a type mismatch situation; the declared type is only required to apply when the *slot* is finally assigned. 

With this definition, the following can be written: 

(create-foo 1 2) 

instead of 

(make-foo :a 1 :b 2) 

and create-foo provides defaulting different from that of make-foo. 

Additional arguments that do not correspond to slot names but are merely present to supply values used in subsequent initialization computations are allowed. For example, in the definition 

(defstruct (frob (:constructor create-frob  



(a &key (b 3 have-b) (c-token ’c) 

(c (list c-token (if have-b 7 2)))))) 

a b c) 

the c-token argument is used merely to supply a value used in the initialization of the c slot. The *supplied-p parameters* associated with *optional parameters* and *keyword parameters* might also be used this way. 

