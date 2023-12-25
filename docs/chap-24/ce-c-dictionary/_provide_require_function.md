**provide, require** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"provide"}><b>provide</b></DictionaryLink> *module-name → implementation-dependent* 



<DictionaryLink styled={true} term={"require"}><b>require</b></DictionaryLink> *module-name* &amp;optional *pathname-list → implementation-dependent* 



**Arguments and Values:** 



*module-name*—a *string designator* . 



*pathname-list*—<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, or a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *non-empty list* of *pathname designators*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"provide"}><b>provide</b></DictionaryLink> adds the *module-name* to the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> held by <DictionaryLink styled={true} term={"modules"}><b>\*modules\*</b></DictionaryLink>, if such a name is not already present. 



<DictionaryLink styled={true} term={"require"}><b>require</b></DictionaryLink> tests for the presence of the *module-name* in the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> held by <DictionaryLink styled={true} term={"modules"}><b>\*modules\*</b></DictionaryLink>. If it is present, <DictionaryLink styled={true} term={"require"}><b>require</b></DictionaryLink> immediately returns. Otherwise, an attempt is made to load an appropriate set of <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> as follows: The *pathname-list* argument, if <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, specifies a list of <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> to be loaded in order, 



from left to right. If the *pathname-list* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> mechanism will be invoked in an attempt to load the module named *module-name*; if no such module can be loaded, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



Both functions use <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink> to test for the presence of a *module-name*. 



**Examples:**
```lisp

;;; This illustrates a nonportable use of REQUIRE, because it 
;;; depends on the implementation-dependent file-loading mechanism. 
(require "CALCULUS") 
;;; This use of REQUIRE is nonportable because of the literal 
;;; physical pathname. 
(require "CALCULUS" "/usr/lib/lisp/calculus") 
;;; One form of portable usage involves supplying a logical pathname, 
;;; with appropriate translations defined elsewhere. 
(require "CALCULUS" "lib:calculus") 
;;; Another form of portable usage involves using a variable or 
;;; table lookup function to determine the pathname, which again 
System 


**provide, require** 
;;; must be initialized elsewhere. 
(require "CALCULUS" \*calculus-module-pathname\*) 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"provide"}><b>provide</b></DictionaryLink> modifies <DictionaryLink styled={true} term={"modules"}><b>\*modules\*</b></DictionaryLink>. 



**Affected By:** 



The specific action taken by <DictionaryLink styled={true} term={"require"}><b>require</b></DictionaryLink> is affected by calls to <DictionaryLink styled={true} term={"provide"}><b>provide</b></DictionaryLink> (or, in general, any changes to the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"modules"}><b>\*modules\*</b></DictionaryLink>). 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *module-name* is not a *string designator* . 



If <DictionaryLink styled={true} term={"require"}><b>require</b></DictionaryLink> fails to perform the requested operation due to a problem while interacting with the *file system*, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if any <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> in *pathname-list* is a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *wild pathname*. 



**See Also:** 



<DictionaryLink styled={true} term={"modules"}><b>\*modules\*</b></DictionaryLink>, Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



The functions <DictionaryLink styled={true} term={"provide"}><b>provide</b></DictionaryLink> and <DictionaryLink styled={true} term={"require"}><b>require</b></DictionaryLink> are deprecated. 



If a module consists of a single <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, it is customary for the package and module names to be the same. 





