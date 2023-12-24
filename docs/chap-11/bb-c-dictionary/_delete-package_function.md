**delete-package** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> *package → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> deletes <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> from all package system data structures. If the operation is successful, <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> returns true, otherwise <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The effect of <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> is that the name and nicknames of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> cease to be recognized package names. The package <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is still a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> (*i.e.*, <ClLinks styled={true} term={"packagep"}><b>packagep</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> of it) but <ClLinks styled={true} term={"package-name"}><b>package-name</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The consequences of deleting the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are undefined. The consequences of invoking any other package operation on <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> once it has been deleted are unspecified. In particular, the consequences of invoking <ClLinks styled={true} term={"find-symbol"}><b>find-symbol</b></ClLinks>, <ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> and other functions that look for a symbol name in 







 



 



<ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> 



a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are unspecified if they are called with <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> bound to the deleted <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or with the deleted <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> as an argument. 



If <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is a *package object* that has already been deleted, <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> immediately returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



After this operation completes, the *home package* of any <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose *home package* had previously been <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Except for this, *symbols accessible* in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are not modified in any other way; <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> whose *home package* is not <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> remain unchanged. 



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



If the *package designator* is a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that does not currently name a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, a <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled. If correction is attempted, no deletion action is attempted; instead, <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> immediately returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is used by other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>, a <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



 



 



If correction is attempted, <ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks> is effectively called to remove any dependencies, causing <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>’s *external symbols* to cease being <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> to those <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> that use <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks> then deletes <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> just as it would have had there been no <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> that used it. 



**See Also:** 



<ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks> 



