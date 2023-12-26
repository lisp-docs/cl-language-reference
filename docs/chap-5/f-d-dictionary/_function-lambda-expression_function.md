**function-lambda-expression** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"function-lambda-expression"}><b>function-lambda-expression</b></ClLinks> <ClLinks  term={"function"}><i>function</i></ClLinks> 



*→ lambda-expression, closure-p, name* 



**Arguments and Values:** 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



*lambda-expression*—a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*closure-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



<ClLinks  term={"name"}><i>name</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Returns information about <ClLinks  term={"function"}><i>function</i></ClLinks> as follows: 



The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, *lambda-expression*, is <ClLinks  term={"function"}><i>function</i></ClLinks>’s defining <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if the information is not available. The <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> may have been pre-processed in some ways, but it should remain a suitable argument to <ClLinks  term={"compile"}><b>compile</b></ClLinks> or <ClLinks  term={"function"}><b>function</b></ClLinks>. Any <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may legitimately return <ClLinks  term={"nil"}><b>nil</b></ClLinks> as the *lambda-expression* of any <ClLinks  term={"function"}><i>function</i></ClLinks>. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *closure-p*, is <ClLinks  term={"nil"}><b>nil</b></ClLinks> if <ClLinks  term={"function"}><i>function</i></ClLinks>’s definition was enclosed in the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> or something <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks> if <ClLinks  term={"function"}><i>function</i></ClLinks>’s definition might have been enclosed in some <GlossaryTerm styled={true} term={"non-null lexical environment"}><i>non-null lexical environment</i></GlossaryTerm>. Any <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may legitimately return <ClLinks  term={"true"}><i>true</i></ClLinks> as the *closure-p* of any <ClLinks  term={"function"}><i>function</i></ClLinks>. 



The <GlossaryTerm styled={true} term={"tertiary value"}><i>tertiary value</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, is the “name” of <ClLinks  term={"function"}><i>function</i></ClLinks>. The name is intended for debugging only and is not necessarily one that would be valid for use as a name in <ClLinks  term={"defun"}><b>defun</b></ClLinks> or <ClLinks  term={"function"}><b>function</b></ClLinks>, for example. By convention, <ClLinks  term={"nil"}><b>nil</b></ClLinks> is used to mean that <ClLinks  term={"function"}><i>function</i></ClLinks> has no name. Any <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may legitimately return <ClLinks  term={"nil"}><b>nil</b></ClLinks> as the <ClLinks  term={"name"}><i>name</i></ClLinks> of any <ClLinks  term={"function"}><i>function</i></ClLinks>. 



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



Although <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> are free to return “<ClLinks  term={"nil"}><b>nil</b></ClLinks>, <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks>” in all cases, they are encouraged to return a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> in the case where the argument was created by a call to <ClLinks  term={"compile"}><b>compile</b></ClLinks> or <ClLinks  term={"eval"}><b>eval</b></ClLinks> (as opposed to being created by *loading* a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>). 



Data and Control 











