**get-properties** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get-properties"}><b>get-properties</b></ClLinks> *plist indicator-list → indicator, value, tail* 



**Arguments and Values:** 







 



 



<ClLinks styled={true} term={"plist"}><i>plist</i></ClLinks>—a *property list*. 



*indicator-list*—a *proper list* (of <ClLinks styled={true} term={"indicator"}><i>indicators</i></ClLinks>). 



<ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *indicator-list*. 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"get-properties"}><b>get-properties</b></ClLinks> is used to look up any of several *property list* entries all at once. 



It searches the <ClLinks styled={true} term={"plist"}><i>plist</i></ClLinks> for the first entry whose <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks> is <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to one of the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> in *indicator-list*. If such an entry is found, the <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> returned are the *property indicator* and its associated *property value*, and the <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> returned is the <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> of the <ClLinks styled={true} term={"plist"}><i>plist</i></ClLinks> that begins with the found entry (*i.e.*, whose <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> is the <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>). If no such entry is found, the <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>, <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, and <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> are all <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp
(setq x ’()) → NIL 
(setq \*indicator-list\* ’(prop1 prop2)) → (PROP1 PROP2) 
(getf x ’prop1) → NIL 
(setf (getf x ’prop1) ’val1) → VAL1 
(eq (getf x ’prop1) ’val1) → true 
(get-properties x \*indicator-list\*) → PROP1, VAL1, (PROP1 VAL1) 
x → (PROP1 VAL1) 
```
**See Also:** 



<ClLinks styled={true} term={"get"}><b>get</b></ClLinks>, <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> 



