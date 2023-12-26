**delete-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> *package → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> deletes <ClLinks  term={"package"}><i>package</i></ClLinks> from all package system data structures. If the operation is successful, <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> returns true, otherwise <ClLinks  term={"nil"}><b>nil</b></ClLinks>. The effect of <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> is that the name and nicknames of <ClLinks  term={"package"}><i>package</i></ClLinks> cease to be recognized package names. The package <ClLinks  term={"object"}><i>object</i></ClLinks> is still a <ClLinks  term={"package"}><i>package</i></ClLinks> (*i.e.*, <ClLinks  term={"packagep"}><b>packagep</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> of it) but <ClLinks  term={"package-name"}><b>package-name</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. The consequences of deleting the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> or the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> are undefined. The consequences of invoking any other package operation on <ClLinks  term={"package"}><i>package</i></ClLinks> once it has been deleted are unspecified. In particular, the consequences of invoking <ClLinks  term={"find-symbol"}><b>find-symbol</b></ClLinks>, <ClLinks  term={"intern"}><b>intern</b></ClLinks> and other functions that look for a symbol name in 







 



 



<ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> 



a <ClLinks  term={"package"}><i>package</i></ClLinks> are unspecified if they are called with <ClLinks  term={"package"}><b>\*package\*</b></ClLinks> bound to the deleted <ClLinks  term={"package"}><i>package</i></ClLinks> or with the deleted <ClLinks  term={"package"}><i>package</i></ClLinks> as an argument. 



If <ClLinks  term={"package"}><i>package</i></ClLinks> is a *package object* that has already been deleted, <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> immediately returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



After this operation completes, the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of any <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> had previously been <ClLinks  term={"package"}><i>package</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Except for this, *symbols accessible* in <ClLinks  term={"package"}><i>package</i></ClLinks> are not modified in any other way; <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> whose <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is not <ClLinks  term={"package"}><i>package</i></ClLinks> remain unchanged. 



**Examples:**
```lisp
(setq \*foo-package\* (make-package "FOO" :use nil)) 
(setq \*foo-symbol\* (intern "FOO" \*foo-package\*)) 
(export \*foo-symbol\* \*foo-package\*) 
(setq \*bar-package\* (make-package "BAR" :use ’("FOO"))) 
(setq \*bar-symbol\* (intern "BAR" \*bar-package\*)) 
(export \*foo-symbol\* \*bar-package\*) 
(export \*bar-symbol\* \*bar-package\*) 
(setq \*baz-package\* (make-package "BAZ" :use ’("BAR"))) 
(symbol-package \*foo-symbol\*) → #<PACKAGE "FOO"> 
(symbol-package \*bar-symbol\*) → #<PACKAGE "BAR"> 
(prin1-to-string \*foo-symbol\*) → "FOO:FOO" 
(prin1-to-string \*bar-symbol\*) → "BAR:BAR" 
(find-symbol "FOO" \*bar-package\*) → FOO:FOO, :EXTERNAL 
(find-symbol "FOO" \*baz-package\*) → FOO:FOO, :INHERITED 
(find-symbol "BAR" \*baz-package\*) → BAR:BAR, :INHERITED 
(packagep \*foo-package\*) → true 
(packagep \*bar-package\*) → true 
(packagep \*baz-package\*) → true 
(package-name \*foo-package\*) → "FOO" 
(package-name \*bar-package\*) → "BAR" 
(package-name \*baz-package\*) → "BAZ" 
(package-use-list \*foo-package\*) → () 
(package-use-list \*bar-package\*) → (#<PACKAGE "FOO">) 
(package-use-list \*baz-package\*) → (#<PACKAGE "BAR">) 

**delete-package** 
(package-used-by-list \*foo-package\*) → (#<PACKAGE "BAR">) 
(package-used-by-list \*bar-package\*) → (#<PACKAGE "BAZ">) 
(package-used-by-list \*baz-package\*) → () 
(delete-package \*bar-package\*) 
▷ Error: Package BAZ uses package BAR. 
▷ If continued, BAZ will be made to unuse-package BAR, 
▷ and then BAR will be deleted. 
▷ Type :CONTINUE to continue. 
▷ Debug> :CONTINUE 
→ T 
(symbol-package \*foo-symbol\*) → #<PACKAGE "FOO"> 
(symbol-package \*bar-symbol\*) is unspecified 
(prin1-to-string \*foo-symbol\*) → "FOO:FOO" 
(prin1-to-string \*bar-symbol\*) is unspecified 
(find-symbol "FOO" \*bar-package\*) is unspecified 
(find-symbol "FOO" \*baz-package\*) → NIL, NIL 
(find-symbol "BAR" \*baz-package\*) → NIL, NIL 
(packagep \*foo-package\*) → T 
(packagep \*bar-package\*) → T 
(packagep \*baz-package\*) → T 
(package-name \*foo-package\*) → "FOO" 
(package-name \*bar-package\*) → NIL 
(package-name \*baz-package\*) → "BAZ" 
(package-use-list \*foo-package\*) → () 
(package-use-list \*bar-package\*) is unspecified 
(package-use-list \*baz-package\*) → () 
(package-used-by-list \*foo-package\*) → () 
(package-used-by-list \*bar-package\*) is unspecified 
(package-used-by-list \*baz-package\*) → () 
```
**Exceptional Situations:** 



If the <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> is a <ClLinks  term={"name"}><i>name</i></ClLinks> that does not currently name a <ClLinks  term={"package"}><i>package</i></ClLinks>, a <ClLinks  term={"correctable"}><i>correctable</i></ClLinks> error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled. If correction is attempted, no deletion action is attempted; instead, <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> immediately returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



If <ClLinks  term={"package"}><i>package</i></ClLinks> is used by other <ClLinks  term={"package"}><i>packages</i></ClLinks>, a <ClLinks  term={"correctable"}><i>correctable</i></ClLinks> error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



 



 



If correction is attempted, <ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> is effectively called to remove any dependencies, causing <ClLinks  term={"package"}><i>package</i></ClLinks>’s <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> to cease being <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> to those <ClLinks  term={"package"}><i>packages</i></ClLinks> that use <ClLinks  term={"package"}><i>package</i></ClLinks>. <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks> then deletes <ClLinks  term={"package"}><i>package</i></ClLinks> just as it would have had there been no <ClLinks  term={"package"}><i>packages</i></ClLinks> that used it. 



**See Also:** 



<ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> 



