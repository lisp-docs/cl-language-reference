**get-properties** *Function* 



**Syntax:** 



**get-properties** *plist indicator-list → indicator, value, tail* 



**Arguments and Values:** 







 



 



*plist*—a *property list*. 



*indicator-list*—a *proper list* (of *indicators*). 



*indicator*—an *object* that is an *element* of *indicator-list*. 



*value*—an *object*. 



*tail*—a *list*. 



**Description:** 



**get-properties** is used to look up any of several *property list* entries all at once. 



It searches the *plist* for the first entry whose *indicator* is *identical* to one of the *objects* in *indicator-list*. If such an entry is found, the *indicator* and *value* returned are the *property indicator* and its associated *property value*, and the *tail* returned is the *tail* of the *plist* that begins with the found entry (*i.e.*, whose *car* is the *indicator*). If no such entry is found, the *indicator*, *value*, and *tail* are all **nil**. 



**Examples:**
```lisp
 

(setq x ’()) *→* NIL 

(setq \*indicator-list\* ’(prop1 prop2)) *→* (PROP1 PROP2) 

(getf x ’prop1) *→* NIL 

(setf (getf x ’prop1) ’val1) *→* VAL1 

(eq (getf x ’prop1) ’val1) *→ true* 

(get-properties x \*indicator-list\*) *→* PROP1, VAL1, (PROP1 VAL1) 

x *→* (PROP1 VAL1) 


```
**See Also:** 



**get**, **getf** 



