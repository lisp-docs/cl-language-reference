**rplaca, rplacd** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"rplaca"}><b>rplaca</b></ClLinks> *cons object → cons* 



<ClLinks styled={true} term={"rplacd"}><b>rplacd</b></ClLinks> *cons object → cons* 



**Pronunciation:** 



<ClLinks styled={true} term={"rplaca"}><b>rplaca</b></ClLinks>: [ **r—e plak***  ] or [ **r***  **plak***  ] 



<ClLinks styled={true} term={"rplacd"}><b>rplacd</b></ClLinks>: [ **r—e plakd***  ] or [ **r***  **plakd***  ] or [ **r—e plakd—e** ] or [ **r***  **plakd—e** ] 



**Arguments and Values:** 



<ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>—a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"rplaca"}><b>rplaca</b></ClLinks> replaces the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> with <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"rplacd"}><b>rplacd</b></ClLinks> replaces the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> with <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Examples:**
```lisp
(defparameter \*some-list\* (list\* ’one ’two ’three ’four)) → \*some-list\* 
\*some-list\* → (ONE TWO THREE . FOUR) 
(rplaca \*some-list\* ’uno) → (UNO TWO THREE . FOUR) 
\*some-list\* → (UNO TWO THREE . FOUR) 
(rplacd (last \*some-list\*) (list ’IV)) → (THREE IV) 
\*some-list\* → (UNO TWO THREE IV) 
```
**Side Effects:** 



The <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is modified. 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is not a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 







 



 



**car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar,** *. . .* 



