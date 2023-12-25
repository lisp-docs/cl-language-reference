**function-lambda-expression** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"function-lambda-expression"}><b>function-lambda-expression</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



*→ lambda-expression, closure-p, name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



*lambda-expression*—a *lambda expression* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*closure-p*—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Returns information about <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> as follows: 



The *primary value*, *lambda-expression*, is <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>’s defining *lambda expression*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the information is not available. The *lambda expression* may have been pre-processed in some ways, but it should remain a suitable argument to <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> or <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. Any <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may legitimately return <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> as the *lambda-expression* of any <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



The *secondary value*, *closure-p*, is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>’s definition was enclosed in the *null lexical environment* or something <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>’s definition might have been enclosed in some *non-null lexical environment*. Any <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may legitimately return <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> as the *closure-p* of any <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



The *tertiary value*, *name*, is the “name” of <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. The name is intended for debugging only and is not necessarily one that would be valid for use as a name in <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> or <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, for example. By convention, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is used to mean that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> has no name. Any <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may legitimately return <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> as the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of any <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Examples:**
```lisp

The following examples illustrate some possible return values, but are not intended to be exhaustive: 
(function-lambda-expression #’(lambda (x) x)) 
*→* NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>false</i>, NIL 



(function-lambda-expression 
 (funcall #’(lambda () #’(lambda (x) x)))) 
*→* NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) X), <i>false</i>, NIL 
(function-lambda-expression 
 (funcall #’(lambda (x) #’(lambda () x)) nil)) 
*→* NIL, *true*, NIL 
<i><sup>or</sup>→</i> (LAMBDA () X), <i>true</i>, NIL 
<i><sup>not</sup> →</i> NIL, <i>false</i>, NIL 
<i><sup>not</sup> →</i> (LAMBDA () X), <i>false</i>, NIL 
(flet ((foo (x) x)) 
  (setf (symbol-function ’bar) #’foo) 
  (function-lambda-expression #’bar)) 
*→* NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK FOO X)), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK FOO X)), <i>false</i>, FOO 
<i><sup>or</sup>→</i> (SI::BLOCK-LAMBDA FOO (X) X), <i>false</i>, FOO 
(defun foo () 
  (flet ((bar (x) x)) 
    #’bar)) 
(function-lambda-expression (foo)) 
*→* NIL, *false*, NIL 
<i><sup>or</sup>→</i> NIL, <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>true</i>, NIL 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>true</i>, (:INTERNAL FOO 0 BAR) 
<i><sup>or</sup>→</i> (LAMBDA (X) (BLOCK BAR X)), <i>false</i>, "BAR in FOO" 

```
**Notes:** 



Although <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> are free to return “<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>” in all cases, they are encouraged to return a *lambda expression* as the *primary value* in the case where the argument was created by a call to <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> or <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> (as opposed to being created by *loading* a *compiled file*). 



Data and Control 











