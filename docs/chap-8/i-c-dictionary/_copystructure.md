**copy-structure** *Function* 

**Syntax:** 

**copy-structure** *structure → copy* 



 

 

**copy-structure** 

**Arguments and Values:** 

*structure*—a *structure*. 

*copy*—a copy of the *structure*. 

**Description:** 

Returns a *copy*&#60;sub&#62;6&#60;/sub&#62; of the *structure*. 

Only the *structure* itself is copied; not the values of the slots. 

**See Also:** 

the :copier option to **defstruct** 

**Notes:** 

The *copy* is the *same* as the given *structure* under **equalp**, but not under **equal**. 
