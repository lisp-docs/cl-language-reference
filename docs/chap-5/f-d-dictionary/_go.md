**go** *Special Operator* 



**Syntax:** 



**go** *tag →* 



**Arguments and Values:** 



*tag*—a *go tag*. 



**Description:** 



**go** transfers control to the point in the body of an enclosing **tagbody** form labeled by a tag **eql** to *tag*. If there is no such *tag* in the body, the bodies of lexically containing **tagbody** *forms* (if any) are examined as well. If several tags are **eql** to *tag*, control is transferred to whichever matching *tag* is contained in the innermost **tagbody** form that contains the **go**. The consequences are undefined if there is no matching *tag* lexically visible to the point of the **go**. 



The transfer of control initiated by **go** is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



**Examples:**
```lisp
 

(tagbody 

(setq val 2) 

(go lp) 

(incf val 3) 

lp (incf val 4)) *→* NIL 







val *→* 6 

The following is in error because there is a normal exit of the **tagbody** before the **go** is executed. 

(let ((a nil)) 

(tagbody t (setq a #’(lambda () (go t)))) 

(funcall a)) 

The following is in error because the **tagbody** is passed over before the **go** *form* is executed. 

(funcall (block nil 

(tagbody a (return #’(lambda () (go a)))))) 


```
**See Also:** 



**tagbody** 



