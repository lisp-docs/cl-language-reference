 

The named construct establishes a name for an *implicit block* surrounding the entire **loop** so that the **return-from** *special operator* can be used to return values from or to exit **loop**. Only one name per **loop** *form* can be assigned. If used, the named construct must be the first clause in the loop expression. 

The return construct takes one *form*. Any *values* returned by the *form* are immediately returned by the **loop** form. This construct is similar to the **return-from** *special operator* and the **return** *macro*. The return construct does not execute any finally clause that the **loop** *form* is given. 

