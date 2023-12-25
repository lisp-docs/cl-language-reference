**make-package** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink> *package-name* &amp;key *nicknames use → package* 



**Arguments and Values:** 



*package-name*—a *string designator* . 



<GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *string designators*. The default is the *empty list*. 



<GlossaryTerm styled={true} term={"use"}><i>use</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *package designators*. The default is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Description:** 



Creates a new <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> with the name *package-name*. 



<GlossaryTerm styled={true} term={"nickname"}><i>Nicknames</i></GlossaryTerm> are additional <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> which may be used to refer to the new <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"use"}><i>use</i></GlossaryTerm> specifies zero or more <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> the *external symbols* of which are to be inherited by the new <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. 



**Examples:**
```lisp

(make-package ’temporary :nicknames ’("TEMP" "temp")) *→* #<PACKAGE "TEMPORARY"> (make-package "OWNER" :use ’("temp")) *→* #<PACKAGE "OWNER"> 
(package-used-by-list ’temp) *→* (#<PACKAGE "OWNER">) 
(package-use-list ’owner) *→* (#<PACKAGE "TEMPORARY">) 

```
**Affected By:** 



The existence of other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> in the system. 



**Exceptional Situations:** 



The consequences are unspecified if <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> denoted by <GlossaryTerm styled={true} term={"use"}><i>use</i></GlossaryTerm> do not exist. 



A <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> error is signaled if the *package-name* or any of the <GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm> is already the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"nickname"}><i>nickname</i></GlossaryTerm> of an existing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink>, <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> 



**Notes:** 



In situations where the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> to be used contain symbols which would conflict, it is necessary to first create the package with :use ’(), then to use <DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> or <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> to address the conflicts, and then after that to use <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> once the conflicts have been addressed. 



When packages are being created as part of the static definition of a program rather than dynamically by the program, it is generally considered more stylistically appropriate to use <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink>. 



