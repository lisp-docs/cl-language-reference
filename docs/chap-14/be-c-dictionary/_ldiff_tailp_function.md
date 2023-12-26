**ldiff, tailp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"ldiff"}><b>ldiff</b></ClLinks> *list object → result-list* 



<ClLinks styled={true} term={"tailp"}><b>tailp</b></ClLinks> *object list → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a *dotted list*. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*result-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 







 



 



<DictionaryLink styled={true} term={"ldiff, tailp"}><b>ldiff, tailp</b></DictionaryLink> 



**Description:** 



If <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as some <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, <ClLinks styled={true} term={"tailp"}><b>tailp</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>; otherwise, it returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



If <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as some <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, <ClLinks styled={true} term={"ldiff"}><b>ldiff</b></ClLinks> returns a *fresh list* of the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that precede **object** in the *list structure* of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>; otherwise, it returns a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks><sub>2</sub> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Examples:**
```lisp
(let ((lists ’#((a b c) (a b c . d)))) 
  (dotimes (i (length lists)) () 
	   (let ((list (aref lists i))) 
	     (format t "~2&list=~S ~21T(tailp object list)~ 
~44T(ldiff list object)~%" list) 
	     (let ((objects (vector list (cddr list) (copy-list (cddr list)) 
				    ’(f g h) ’() ’d ’x))) 
	       (dotimes (j (length objects)) () 
			(let ((object (aref objects j))) 
			  (format t "~& object=~S ~21T~S ~44T~S" 
				  object (tailp object list) (ldiff list object)))))))) 
▷ 
▷ list=(A B C) (tailp object list) (ldiff list object) 
▷ object=(A B C) T NIL 
▷ object=(C) T (A B) 
▷ object=(C) NIL (A B C) 
▷ object=(F G H) NIL (A B C) 
▷ object=NIL T (A B C) 
▷ object=D NIL (A B C) 
▷ object=X NIL (A B C) 
▷ 
▷ list=(A B C . D) (tailp object list) (ldiff list object) 
▷ object=(A B C . D) T NIL 
▷ object=(C . D) T (A B) 
▷ object=(C . D) NIL (A B C . D) 
▷ object=(F G H) NIL (A B C . D) 
▷ object=NIL NIL (A B C . D) 
▷ object=D T (A B C) 
▷ object=X NIL (A B C . D) 
→ NIL 
```
**Side Effects:** 



Neither <ClLinks styled={true} term={"ldiff"}><b>ldiff</b></ClLinks> nor <ClLinks styled={true} term={"tailp"}><b>tailp</b></ClLinks> modifies either of its <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not a *proper list* or a *dotted list*. 



 



 



**See Also:** 



<ClLinks styled={true} term={"set-difference"}><b>set-difference</b></ClLinks> 



**Notes:** 



If the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a *circular list*, <ClLinks styled={true} term={"tailp"}><b>tailp</b></ClLinks> will reliably <ClLinks styled={true} term={"yield"}><i>yield</i></ClLinks> a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> only if the given <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is in fact a <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. Otherwise, the consequences are unspecified: a given <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> which detects the circularity must return <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, but since an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is not obliged to detect such a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks>, <ClLinks styled={true} term={"tailp"}><b>tailp</b></ClLinks> might just loop indefinitely without returning in that case. 



<ClLinks styled={true} term={"tailp"}><b>tailp</b></ClLinks> could be defined as follows: 



(defun tailp (object list) 



(do ((list list (cdr list))) 



((atom list) (eql list object)) 



(if (eql object list) 



(return t)))) 



and <ClLinks styled={true} term={"ldiff"}><b>ldiff</b></ClLinks> could be defined by: 



(defun ldiff (list object) 



(do ((list list (cdr list)) 



(r ’() (cons (car list) r))) 



((atom list) 



(if (eql list object) (nreverse r) (nreconc r list))) 



(when (eql object list) 



(return (nreverse r))))) 



