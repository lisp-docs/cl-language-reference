**function-lambda-expression** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"function-lambda-expression"}><b>function-lambda-expression</b></DictionaryLink> <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> 



*→ lambda-expression, closure-p, name* 



**Arguments and Values:** 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



*lambda-expression*—a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*closure-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Returns information about <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> as follows: 



The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, *lambda-expression*, is <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>’s defining <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the information is not available. The <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> may have been pre-processed in some ways, but it should remain a suitable argument to <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> or <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>. Any <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may legitimately return <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> as the *lambda-expression* of any <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *closure-p*, is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>’s definition was enclosed in the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> or something <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm> if <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>’s definition might have been enclosed in some <GlossaryTerm styled={true} term={"non-null lexical environment"}><i>non-null lexical environment</i></GlossaryTerm>. Any <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may legitimately return <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> as the *closure-p* of any <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"tertiary value"}><i>tertiary value</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, is the “name” of <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. The name is intended for debugging only and is not necessarily one that would be valid for use as a name in <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> or <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, for example. By convention, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is used to mean that <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> has no name. Any <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may legitimately return <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> as the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of any <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Examples:**
```lisp
The following examples illustrate some possible return values, but are not intended to be exhaustive: 
(function-lambda-expression #’(lambda (x) x)) 
→ NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>false</i>, NIL 

(function-lambda-expression 
 (funcall #’(lambda () #’(lambda (x) x)))) 
→ NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>false</i>, NIL 
(function-lambda-expression 
 (funcall #’(lambda (x) #’(lambda () x)) nil)) 
→ NIL, *true*, NIL 
<i><sup>or</sup>→</i> (LAMBDA () X), <i>true</i>, NIL 
<i><sup>not</sup> →</i> NIL, <i>false</i>, NIL 
<i><sup>not</sup> →</i> (LAMBDA () X), <i>false</i>, NIL 
(flet ((foo (x) x)) 
  (setf (symbol-function ’bar) #’foo) 
  (function-lambda-expression #’bar)) 
→ NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK FOO X)), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK FOO X)), <i>false</i>, FOO 
<i><sup>or</sup>→</i> (SI::BLOCK-LAMBDA FOO (X) X), <i>false</i>, FOO 
(defun foo () 
  (flet ((bar (x) x)) 
    #’bar)) 
(function-lambda-expression (foo)) 
→ NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>true</i>, (:INTERNAL FOO 0 BAR) 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>false</i>, "BAR in FOO" 
```
**Notes:** 



Although <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> are free to return “<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>” in all cases, they are encouraged to return a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> in the case where the argument was created by a call to <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> or <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> (as opposed to being created by *loading* a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>). 



Data and Control 











