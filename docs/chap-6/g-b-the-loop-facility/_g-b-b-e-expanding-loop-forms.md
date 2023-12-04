 



A **loop** *macro form* expands into a *form* containing one or more binding forms (that *establish bindings* of loop variables) and a **block** and a **tagbody** (that express a looping control structure). The variables established in **loop** are bound as if by **let** or **lambda**. 



Implementations can interleave the setting of initial values with the *bindings*. However, the assignment of the initial values is always calculated in the order specified by the user. A variable is thus sometimes bound to a meaningless value of the correct *type*, and then later in the prologue it is set to the true initial value by using **setq**. One implication of this interleaving is that it is *implementation-dependent* whether the *lexical environment* in which the initial value *forms* (variously called the *form1*, *form2*, *form3*, *step-fun*, *vector*, *hash-table*, and *package*) in any *for-as-subclause*, except *for-as-equals-then*, are *evaluated* includes only the loop variables preceding that *form* or includes more or all of the loop variables; the *form1* and *form2* in a *for-as-equals-then* form includes the *lexical environment* of all the loop variables. 



After the *form* is expanded, it consists of three basic parts in the **tagbody**: the loop prologue, the loop body, and the loop epilogue. 



**Loop prologue** 



The loop prologue contains *forms* that are executed before iteration begins, such as any automatic variable initializations prescribed by the *variable* clauses, along with any 







 



 



initially clauses in the order they appear in the source. 



**Loop body** 



The loop body contains those *forms* that are executed during iteration, including application-specific calculations, termination tests, and variable *stepping*<sub>1</sub>. 



**Loop epilogue** 



The loop epilogue contains *forms* that are executed after iteration terminates, such as finally clauses, if any, along with any implicit return value from an *accumulation* clause or an *termination-test* clause. 



Some clauses from the source *form* contribute code only to the loop prologue; these clauses must come before other clauses that are in the main body of the **loop** form. Others contribute code only to the loop epilogue. All other clauses contribute to the final translated *form* in the same order given in the original source *form* of the **loop**. 



Expansion of the **loop** macro produces an *implicit block* named **nil** unless named is supplied. Thus, **return-from** (and sometimes **return**) can be used to return values from **loop** or to exit **loop**. 



