**make-package** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-package"}><b>make-package</b></DictionaryLink> *package-name* &amp;key *nicknames use → package* 



**Arguments and Values:** 



*package-name*—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



<GlossaryTerm  term={"nickname"}><i>nicknames</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string designator"}><i>string designators</i></GlossaryTerm>. The default is the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. 



<GlossaryTerm  term={"use"}><i>use</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"package designator"}><i>package designators</i></GlossaryTerm>. The default is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Description:** 



Creates a new <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> with the name *package-name*. 



<GlossaryTerm  term={"nickname"}><i>Nicknames</i></GlossaryTerm> are additional <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> which may be used to refer to the new <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



<GlossaryTerm  term={"use"}><i>use</i></GlossaryTerm> specifies zero or more <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of which are to be inherited by the new <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 



**Examples:**
```lisp
(make-package ’temporary :nicknames ’("TEMP" "temp")) → #<PACKAGE "TEMPORARY"> (make-package "OWNER" :use ’("temp")) → #<PACKAGE "OWNER"> 
(package-used-by-list ’temp) → (#<PACKAGE "OWNER">) 
(package-use-list ’owner) → (#<PACKAGE "TEMPORARY">) 
```
**Affected By:** 



The existence of other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> in the system. 



**Exceptional Situations:** 



The consequences are unspecified if <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> denoted by <GlossaryTerm  term={"use"}><i>use</i></GlossaryTerm> do not exist. 



A <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm> error is signaled if the *package-name* or any of the <GlossaryTerm  term={"nickname"}><i>nicknames</i></GlossaryTerm> is already the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> or <GlossaryTerm  term={"nickname"}><i>nickname</i></GlossaryTerm> of an existing <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink>, <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> 



**Notes:** 



In situations where the <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> to be used contain symbols which would conflict, it is necessary to first create the package with :use ’(), then to use <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> or <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> to address the conflicts, and then after that to use <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> once the conflicts have been addressed. 



When packages are being created as part of the static definition of a program rather than dynamically by the program, it is generally considered more stylistically appropriate to use <DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink> rather than <DictionaryLink  term={"make-package"}><b>make-package</b></DictionaryLink>. 



