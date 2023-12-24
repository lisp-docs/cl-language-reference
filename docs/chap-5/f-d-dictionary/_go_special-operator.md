**go** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"go"}><b>go</b></ClLinks> *tag →* 



**Arguments and Values:** 



<ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>—a *go tag*. 



**Description:** 



<ClLinks styled={true} term={"go"}><b>go</b></ClLinks> transfers control to the point in the body of an enclosing <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> form labeled by a tag <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> to <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. If there is no such <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> in the body, the bodies of lexically containing <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> (if any) are examined as well. If several tags are <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> to <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, control is transferred to whichever matching <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> is contained in the innermost <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> form that contains the <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>. The consequences are undefined if there is no matching <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> lexically visible to the point of the <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>. 



The transfer of control initiated by <ClLinks styled={true} term={"go"}><b>go</b></ClLinks> is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



**Examples:**
```lisp

(tagbody 
   (setq val 2) 
   (go lp) 
   (incf val 3) 
 lp (incf val 4)) → NIL 



val → 6 
The following is in error because there is a normal exit of the **tagbody** before the **go** is executed. 
(let ((a nil)) 
  (tagbody t (setq a #’(lambda () (go t)))) 
  (funcall a)) 
The following is in error because the **tagbody** is passed over before the **go** *form* is executed. 
(funcall (block nil 
	   (tagbody a (return #’(lambda () (go a)))))) 

```
**See Also:** 



<ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> 



