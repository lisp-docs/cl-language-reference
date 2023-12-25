**make-package** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-package"}><b>make-package</b></ClLinks> *package-name* &amp;key *nicknames use → package* 



**Arguments and Values:** 



*package-name*—a *string designator* . 



<ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *string designators*. The default is the *empty list*. 



<ClLinks styled={true} term={"use"}><i>use</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *package designators*. The default is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Description:** 



Creates a new <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> with the name *package-name*. 



<ClLinks styled={true} term={"nickname"}><i>Nicknames</i></ClLinks> are additional <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> which may be used to refer to the new <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



<ClLinks styled={true} term={"use"}><i>use</i></ClLinks> specifies zero or more <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> the *external symbols* of which are to be inherited by the new <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>. 



**Examples:**
```lisp
(make-package ’temporary :nicknames ’("TEMP" "temp")) → #<PACKAGE "TEMPORARY"> (make-package "OWNER" :use ’("temp")) → #<PACKAGE "OWNER"> 
(package-used-by-list ’temp) → (#<PACKAGE "OWNER">) 
(package-use-list ’owner) → (#<PACKAGE "TEMPORARY">) 
```
**Affected By:** 



The existence of other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> in the system. 



**Exceptional Situations:** 



The consequences are unspecified if <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> denoted by <ClLinks styled={true} term={"use"}><i>use</i></ClLinks> do not exist. 



A <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> error is signaled if the *package-name* or any of the <ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks> is already the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> or <ClLinks styled={true} term={"nickname"}><i>nickname</i></ClLinks> of an existing <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"defpackage"}><b>defpackage</b></ClLinks>, <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> 



**Notes:** 



In situations where the <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> to be used contain symbols which would conflict, it is necessary to first create the package with :use ’(), then to use <ClLinks styled={true} term={"shadow"}><b>shadow</b></ClLinks> or <ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> to address the conflicts, and then after that to use <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> once the conflicts have been addressed. 



When packages are being created as part of the static definition of a program rather than dynamically by the program, it is generally considered more stylistically appropriate to use <ClLinks styled={true} term={"defpackage"}><b>defpackage</b></ClLinks> rather than <ClLinks styled={true} term={"make-package"}><b>make-package</b></ClLinks>. 



