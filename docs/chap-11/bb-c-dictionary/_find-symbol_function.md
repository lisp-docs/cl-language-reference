**find-symbol** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> accessible in the <ClLinks  term={"package"}><i>package</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*status*—one of :inherited, :external, :internal, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> 



**Description:** 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> locates a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks  term={"name"}><i>name</i></ClLinks> is <ClLinks  term={"string"}><i>string</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>. If a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> named <ClLinks  term={"string"}><i>string</i></ClLinks> is found in <ClLinks  term={"package"}><i>package</i></ClLinks>, directly or by inheritance, the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> found is returned as the first value; the second value is as follows: 



:internal 



If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>. 



:external 



If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm>. 



:inherited 



If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is inherited by <ClLinks  term={"package"}><i>package</i></ClLinks> through <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, but is not <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. If no such <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>, both values are <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



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



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>, <DictionaryLink  term={"export"}><b>export</b></DictionaryLink>, <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink>, <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 



**See Also:** 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink  term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> 







 



 



**Notes:** 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> is operationally equivalent to <DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, except that it never creates a new <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 