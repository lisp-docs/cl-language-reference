 



The fact that the *file compiler* represents *literal objects* externally in a *compiled file* and must later reconstruct suitable equivalents of those *objects* when that *file* is loaded imposes a need for constraints on the nature of the *objects* that can be used as *literal objects* in *code* to be processed by the *file compiler* . 



An *object* that can be used as a *literal object* in *code* to be processed by the *file compiler* is called an *externalizable object*. 



We define that two *objects* are *similar* if they satisfy a two-place conceptual equivalence predicate (defined below), which is independent of the *Lisp image* so that the two *objects* in different *Lisp images* can be understood to be equivalent under this predicate. Further, by inspecting the definition of this conceptual predicate, the programmer can anticipate what aspects of an *object* are reliably preserved by *file compilation*. 



The *file compiler* must cooperate with the *loader* in order to assure that in each case where an *externalizable object* is processed as a *literal object*, the *loader* will construct a *similar object*. 



The set of *objects* that are *externalizable objects* are those for which the new conceptual term “*similar*” is defined, such that when a *compiled file* is *loaded*, an *object* can be constructed which  







can be shown to be *similar* to the original *object* which existed at the time the *file compiler* was operating. 



