**delete-package** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> *package → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> deletes <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> from all package system data structures. If the operation is successful, <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> returns true, otherwise <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The effect of <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> is that the name and nicknames of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> cease to be recognized package names. The package <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is still a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> (*i.e.*, <DictionaryLink styled={true} term={"packagep"}><b>packagep</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> of it) but <DictionaryLink styled={true} term={"package-name"}><b>package-name</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The consequences of deleting the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are undefined. The consequences of invoking any other package operation on <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> once it has been deleted are unspecified. In particular, the consequences of invoking <DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink>, <DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> and other functions that look for a symbol name in 







 



 



<DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> 



a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are unspecified if they are called with <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> bound to the deleted <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or with the deleted <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as an argument. 



If <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is a *package object* that has already been deleted, <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> immediately returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



After this operation completes, the *home package* of any <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whose *home package* had previously been <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Except for this, *symbols accessible* in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are not modified in any other way; <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> whose *home package* is not <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> remain unchanged. 



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
(symbol-package \*foo-symbol\*) *→* #<PACKAGE "FOO"> 
(symbol-package \*bar-symbol\*) *→* #<PACKAGE "BAR"> 
(prin1-to-string \*foo-symbol\*) *→* "FOO:FOO" 
(prin1-to-string \*bar-symbol\*) *→* "BAR:BAR" 
(find-symbol "FOO" \*bar-package\*) *→* FOO:FOO, :EXTERNAL 
(find-symbol "FOO" \*baz-package\*) *→* FOO:FOO, :INHERITED 
(find-symbol "BAR" \*baz-package\*) *→* BAR:BAR, :INHERITED 
(packagep \*foo-package\*) *→ true* 
(packagep \*bar-package\*) *→ true* 
(packagep \*baz-package\*) *→ true* 
(package-name \*foo-package\*) *→* "FOO" 
(package-name \*bar-package\*) *→* "BAR" 
(package-name \*baz-package\*) *→* "BAZ" 
(package-use-list \*foo-package\*) *→* () 
(package-use-list \*bar-package\*) *→* (#<PACKAGE "FOO">) 
(package-use-list \*baz-package\*) *→* (#<PACKAGE "BAR">) 



**delete-package** 
(package-used-by-list \*foo-package\*) *→* (#<PACKAGE "BAR">) 
(package-used-by-list \*bar-package\*) *→* (#<PACKAGE "BAZ">) 
(package-used-by-list \*baz-package\*) *→* () 
(delete-package \*bar-package\*) 
▷ Error: Package BAZ uses package BAR. 
▷ If continued, BAZ will be made to unuse-package BAR, 
▷ and then BAR will be deleted. 
▷ Type :CONTINUE to continue. 
▷ Debug> :CONTINUE 
*→* T 
(symbol-package \*foo-symbol\*) *→* #<PACKAGE "FOO"> 
(symbol-package \*bar-symbol\*) is unspecified 
(prin1-to-string \*foo-symbol\*) *→* "FOO:FOO" 
(prin1-to-string \*bar-symbol\*) is unspecified 
(find-symbol "FOO" \*bar-package\*) is unspecified 
(find-symbol "FOO" \*baz-package\*) *→* NIL, NIL 
(find-symbol "BAR" \*baz-package\*) *→* NIL, NIL 
(packagep \*foo-package\*) *→* T 
(packagep \*bar-package\*) *→* T 
(packagep \*baz-package\*) *→* T 
(package-name \*foo-package\*) *→* "FOO" 
(package-name \*bar-package\*) *→* NIL 
(package-name \*baz-package\*) *→* "BAZ" 
(package-use-list \*foo-package\*) *→* () 
(package-use-list \*bar-package\*) is unspecified 
(package-use-list \*baz-package\*) *→* () 
(package-used-by-list \*foo-package\*) *→* () 
(package-used-by-list \*bar-package\*) is unspecified 
(package-used-by-list \*baz-package\*) *→* () 

```
**Exceptional Situations:** 



If the *package designator* is a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that does not currently name a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. If correction is attempted, no deletion action is attempted; instead, <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> immediately returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is used by other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



 



 



If correction is attempted, <DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> is effectively called to remove any dependencies, causing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s *external symbols* to cease being <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> to those <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that use <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink> then deletes <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> just as it would have had there been no <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that used it. 



**See Also:** 



<DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> 



