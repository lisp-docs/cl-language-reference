**find-symbol** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;optional *package → symbol, status* 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> accessible in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*status*—one of :inherited, :external, :internal, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> 



**Description:** 



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> locates a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> named <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is found in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, directly or by inheritance, the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> found is returned as the first value; the second value is as follows: 



:internal 



If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>. 



:external 



If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm>. 



:inherited 



If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is inherited by <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> through <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, but is not <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. If no such <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, both values are <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



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



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> is operationally equivalent to <DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, except that it never creates a new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 