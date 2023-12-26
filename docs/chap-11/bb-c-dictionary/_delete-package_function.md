**delete-package** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> *package → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> deletes <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> from all package system data structures. If the operation is successful, <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> returns true, otherwise <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The effect of <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> is that the name and nicknames of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> cease to be recognized package names. The package <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is still a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> (*i.e.*, <DictionaryLink  term={"packagep"}><b>packagep</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> of it) but <DictionaryLink  term={"package-name"}><b>package-name</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The consequences of deleting the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> or the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> are undefined. The consequences of invoking any other package operation on <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> once it has been deleted are unspecified. In particular, the consequences of invoking <DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink>, <DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> and other functions that look for a symbol name in 







 



 



<DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> 



a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> are unspecified if they are called with <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> bound to the deleted <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> or with the deleted <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as an argument. 



If <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is a *package object* that has already been deleted, <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> immediately returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



After this operation completes, the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of any <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> had previously been <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Except for this, *symbols accessible* in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> are not modified in any other way; <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is not <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> remain unchanged. 



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



If the <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> is a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that does not currently name a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, a <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm> error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. If correction is attempted, no deletion action is attempted; instead, <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> immediately returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



If <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is used by other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>, a <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm> error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



 



 



If correction is attempted, <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> is effectively called to remove any dependencies, causing <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> to cease being <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> to those <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> that use <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink> then deletes <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> just as it would have had there been no <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> that used it. 



**See Also:** 



<DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 



