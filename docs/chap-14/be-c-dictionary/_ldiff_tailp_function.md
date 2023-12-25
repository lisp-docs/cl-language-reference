**ldiff, tailp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"ldiff"}><b>ldiff</b></DictionaryLink> *list object → result-list* 



<DictionaryLink styled={true} term={"tailp"}><b>tailp</b></DictionaryLink> *object list → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list*. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*result-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 







 



 



**ldiff, tailp** 



**Description:** 



If <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as some <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, <DictionaryLink styled={true} term={"tailp"}><b>tailp</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as some <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, <DictionaryLink styled={true} term={"ldiff"}><b>ldiff</b></DictionaryLink> returns a *fresh list* of the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that precede **object** in the *list structure* of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>; otherwise, it returns a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm><sub>2</sub> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



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
*→* NIL 

```
**Side Effects:** 



Neither <DictionaryLink styled={true} term={"ldiff"}><b>ldiff</b></DictionaryLink> nor <DictionaryLink styled={true} term={"tailp"}><b>tailp</b></DictionaryLink> modifies either of its <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a *proper list* or a *dotted list*. 



 



 



**See Also:** 



<DictionaryLink styled={true} term={"set-difference"}><b>set-difference</b></DictionaryLink> 



**Notes:** 



If the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a *circular list*, <DictionaryLink styled={true} term={"tailp"}><b>tailp</b></DictionaryLink> will reliably <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> only if the given <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is in fact a <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. Otherwise, the consequences are unspecified: a given <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> which detects the circularity must return <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, but since an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is not obliged to detect such a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm>, <DictionaryLink styled={true} term={"tailp"}><b>tailp</b></DictionaryLink> might just loop indefinitely without returning in that case. 



<DictionaryLink styled={true} term={"tailp"}><b>tailp</b></DictionaryLink> could be defined as follows: 



(defun tailp (object list) 



(do ((list list (cdr list))) 



((atom list) (eql list object)) 



(if (eql object list) 



(return t)))) 



and <DictionaryLink styled={true} term={"ldiff"}><b>ldiff</b></DictionaryLink> could be defined by: 



(defun ldiff (list object) 



(do ((list list (cdr list)) 



(r ’() (cons (car list) r))) 



((atom list) 



(if (eql list object) (nreverse r) (nreconc r list))) 



(when (eql object list) 



(return (nreverse r))))) 



