**make-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"make-package"}><b>make-package</b></ClLinks> *package-name* &amp;key *nicknames use → package* 



**Arguments and Values:** 



*package-name*—a *string designator* . 



<ClLinks  term={"nickname"}><i>nicknames</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *string designators*. The default is the *empty list*. 



<ClLinks  term={"use"}><i>use</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *package designators*. The default is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Description:** 



Creates a new <ClLinks  term={"package"}><i>package</i></ClLinks> with the name *package-name*. 



<ClLinks  term={"nickname"}><i>Nicknames</i></ClLinks> are additional <ClLinks  term={"name"}><i>names</i></ClLinks> which may be used to refer to the new <ClLinks  term={"package"}><i>package</i></ClLinks>. 



<ClLinks  term={"use"}><i>use</i></ClLinks> specifies zero or more <ClLinks  term={"package"}><i>packages</i></ClLinks> the *external symbols* of which are to be inherited by the new <ClLinks  term={"package"}><i>package</i></ClLinks>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. 



**Examples:**
```lisp
(make-package ’temporary :nicknames ’("TEMP" "temp")) → #<PACKAGE "TEMPORARY"> (make-package "OWNER" :use ’("temp")) → #<PACKAGE "OWNER"> 
(package-used-by-list ’temp) → (#<PACKAGE "OWNER">) 
(package-use-list ’owner) → (#<PACKAGE "TEMPORARY">) 
```
**Affected By:** 



The existence of other <ClLinks  term={"package"}><i>packages</i></ClLinks> in the system. 



**Exceptional Situations:** 



The consequences are unspecified if <ClLinks  term={"package"}><i>packages</i></ClLinks> denoted by <ClLinks  term={"use"}><i>use</i></ClLinks> do not exist. 



A <ClLinks  term={"correctable"}><i>correctable</i></ClLinks> error is signaled if the *package-name* or any of the <ClLinks  term={"nickname"}><i>nicknames</i></ClLinks> is already the <ClLinks  term={"name"}><i>name</i></ClLinks> or <ClLinks  term={"nickname"}><i>nickname</i></ClLinks> of an existing <ClLinks  term={"package"}><i>package</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks>, <ClLinks  term={"use-package"}><b>use-package</b></ClLinks> 



**Notes:** 



In situations where the <ClLinks  term={"package"}><i>packages</i></ClLinks> to be used contain symbols which would conflict, it is necessary to first create the package with :use ’(), then to use <ClLinks  term={"shadow"}><b>shadow</b></ClLinks> or <ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks> to address the conflicts, and then after that to use <ClLinks  term={"use-package"}><b>use-package</b></ClLinks> once the conflicts have been addressed. 



When packages are being created as part of the static definition of a program rather than dynamically by the program, it is generally considered more stylistically appropriate to use <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> rather than <ClLinks  term={"make-package"}><b>make-package</b></ClLinks>. 



