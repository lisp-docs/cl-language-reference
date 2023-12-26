**go** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"go"}><b>go</b></DictionaryLink> *tag →* 



**Arguments and Values:** 



<GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"go"}><b>go</b></DictionaryLink> transfers control to the point in the body of an enclosing <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> form labeled by a tag <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>. If there is no such <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm> in the body, the bodies of lexically containing <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> (if any) are examined as well. If several tags are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>, control is transferred to whichever matching <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm> is contained in the innermost <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> form that contains the <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>. The consequences are undefined if there is no matching <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm> lexically visible to the point of the <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>. 



The transfer of control initiated by <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



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



<DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> 



