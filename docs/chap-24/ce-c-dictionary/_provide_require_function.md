**provide, require** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"provide"}><b>provide</b></ClLinks> *module-name → implementation-dependent* 



<ClLinks styled={true} term={"require"}><b>require</b></ClLinks> *module-name* &amp;optional *pathname-list → implementation-dependent* 



**Arguments and Values:** 



*module-name*—a *string designator* . 



*pathname-list*—<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, or a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *non-empty list* of *pathname designators*. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"provide"}><b>provide</b></ClLinks> adds the *module-name* to the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> held by <ClLinks styled={true} term={"modules"}><b>\*modules\*</b></ClLinks>, if such a name is not already present. 



<ClLinks styled={true} term={"require"}><b>require</b></ClLinks> tests for the presence of the *module-name* in the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> held by <ClLinks styled={true} term={"modules"}><b>\*modules\*</b></ClLinks>. If it is present, <ClLinks styled={true} term={"require"}><b>require</b></ClLinks> immediately returns. Otherwise, an attempt is made to load an appropriate set of <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> as follows: The *pathname-list* argument, if <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, specifies a list of <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> to be loaded in order, 



from left to right. If the *pathname-list* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> mechanism will be invoked in an attempt to load the module named *module-name*; if no such module can be loaded, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



Both functions use <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks> to test for the presence of a *module-name*. 



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



<ClLinks styled={true} term={"provide"}><b>provide</b></ClLinks> modifies <ClLinks styled={true} term={"modules"}><b>\*modules\*</b></ClLinks>. 



**Affected By:** 



The specific action taken by <ClLinks styled={true} term={"require"}><b>require</b></ClLinks> is affected by calls to <ClLinks styled={true} term={"provide"}><b>provide</b></ClLinks> (or, in general, any changes to the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"modules"}><b>\*modules\*</b></ClLinks>). 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *module-name* is not a *string designator* . 



If <ClLinks styled={true} term={"require"}><b>require</b></ClLinks> fails to perform the requested operation due to a problem while interacting with the *file system*, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if any <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> in *pathname-list* is a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *wild pathname*. 



**See Also:** 



<ClLinks styled={true} term={"modules"}><b>\*modules\*</b></ClLinks>, Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



The functions <ClLinks styled={true} term={"provide"}><b>provide</b></ClLinks> and <ClLinks styled={true} term={"require"}><b>require</b></ClLinks> are deprecated. 



If a module consists of a single <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, it is customary for the package and module names to be the same. 





