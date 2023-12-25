**find-symbol** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"find-symbol"}><b>find-symbol</b></ClLinks> <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> accessible in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*status*—one of :inherited, :external, :internal, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



<ClLinks styled={true} term={"find-symbol"}><b>find-symbol</b></ClLinks> 



**Description:** 



<ClLinks styled={true} term={"find-symbol"}><b>find-symbol</b></ClLinks> locates a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> named <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> is found in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, directly or by inheritance, the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> found is returned as the first value; the second value is as follows: 



:internal 



If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as an *internal symbol*. 



:external 



If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as an *external symbol*. 



:inherited 



If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is inherited by <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> through <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>, but is not <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. If no such <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, both values are <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp
(find-symbol "NEVER-BEFORE-USED") → NIL, NIL 
(find-symbol "NEVER-BEFORE-USED") → NIL, NIL 
(intern "NEVER-BEFORE-USED") → NEVER-BEFORE-USED, NIL 
(intern "NEVER-BEFORE-USED") → NEVER-BEFORE-USED, :INTERNAL 
(find-symbol "NEVER-BEFORE-USED") → NEVER-BEFORE-USED, :INTERNAL 
(find-symbol "never-before-used") → NIL, NIL 
(find-symbol "CAR" ’common-lisp-user) → CAR, :INHERITED 
(find-symbol "CAR" ’common-lisp) → CAR, :EXTERNAL 
(find-symbol "NIL" ’common-lisp-user) → NIL, :INHERITED 
(find-symbol "NIL" ’common-lisp) → NIL, :EXTERNAL 
(find-symbol "NIL" (prog1 (make-package "JUST-TESTING" :use ’()) 
		     (intern "NIL" "JUST-TESTING"))) 
→ JUST-TESTING::NIL, :INTERNAL 
(export ’just-testing::nil ’just-testing) 
(find-symbol "NIL" ’just-testing) → JUST-TESTING:NIL, :EXTERNAL 
(find-symbol "NIL" "KEYWORD") 
→ NIL, NIL 
<i><sup>or</sup>→</i> :NIL, :EXTERNAL 
(find-symbol (symbol-name :nil) "KEYWORD") → :NIL, :EXTERNAL 
```
**Affected By:** 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks>, <ClLinks styled={true} term={"import"}><b>import</b></ClLinks>, <ClLinks styled={true} term={"export"}><b>export</b></ClLinks>, <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks>, <ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks>, <ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks>, <ClLinks styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></ClLinks> 







 



 



**Notes:** 



<ClLinks styled={true} term={"find-symbol"}><b>find-symbol</b></ClLinks> is operationally equivalent to <ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks>, except that it never creates a new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 