**find-symbol** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> accessible in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*status*—one of :inherited, :external, :internal, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



<DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink> 



**Description:** 



<DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink> locates a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> named <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is found in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, directly or by inheritance, the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> found is returned as the first value; the second value is as follows: 



:internal 



If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an *internal symbol*. 



:external 



If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an *external symbol*. 



:inherited 



If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is inherited by <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> through <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, but is not <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. If no such <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, both values are <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(find-symbol "NEVER-BEFORE-USED") *→* NIL, NIL 
(find-symbol "NEVER-BEFORE-USED") *→* NIL, NIL 
(intern "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, NIL 
(intern "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, :INTERNAL 
(find-symbol "NEVER-BEFORE-USED") *→* NEVER-BEFORE-USED, :INTERNAL 
(find-symbol "never-before-used") *→* NIL, NIL 
(find-symbol "CAR" ’common-lisp-user) *→* CAR, :INHERITED 
(find-symbol "CAR" ’common-lisp) *→* CAR, :EXTERNAL 
(find-symbol "NIL" ’common-lisp-user) *→* NIL, :INHERITED 
(find-symbol "NIL" ’common-lisp) *→* NIL, :EXTERNAL 
(find-symbol "NIL" (prog1 (make-package "JUST-TESTING" :use ’()) 
		     (intern "NIL" "JUST-TESTING"))) 
*→* JUST-TESTING::NIL, :INTERNAL 
(export ’just-testing::nil ’just-testing) 
(find-symbol "NIL" ’just-testing) *→* JUST-TESTING:NIL, :EXTERNAL 
(find-symbol "NIL" "KEYWORD") 
*→* NIL, NIL 
<i><sup>or</sup>→</i> :NIL, :EXTERNAL 
(find-symbol (symbol-name :nil) "KEYWORD") *→* :NIL, :EXTERNAL 

```
**Affected By:** 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink>, <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink>, <DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink>, <DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> 







 



 



**Notes:** 



<DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink> is operationally equivalent to <DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink>, except that it never creates a new <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 