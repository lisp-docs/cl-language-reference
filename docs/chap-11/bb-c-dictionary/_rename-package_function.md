**rename-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"rename-package"}><b>rename-package</b></ClLinks> *package new-name* &amp;optional *new-nicknames → package-object* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



*new-name*—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



*new-nicknames*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <GlossaryTerm styled={true} term={"string designator"}><i>string designators</i></GlossaryTerm>. The default is the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. 



*package-object*—the renamed *package object*. 



**Description:** 



Replaces the name and nicknames of <ClLinks  term={"package"}><i>package</i></ClLinks>. The old name and all of the old nicknames of <ClLinks  term={"package"}><i>package</i></ClLinks> are eliminated and are replaced by *new-name* and *new-nicknames*. 



The consequences are undefined if *new-name* or any *new-nickname* conflicts with any existing package names. 







 



 



**Examples:**
```lisp
(make-package ’temporary :nicknames ’("TEMP")) → #<PACKAGE "TEMPORARY"> 
(rename-package ’temp ’ephemeral) → #<PACKAGE "EPHEMERAL"> 
(package-nicknames (find-package ’ephemeral)) → () 
(find-package ’temporary) → NIL 
(rename-package ’ephemeral ’temporary ’(temp fleeting)) 
→ #<PACKAGE "TEMPORARY"> 
(package-nicknames (find-package ’temp)) → ("TEMP" "FLEETING") 
```
**See Also:** 



<ClLinks  term={"make-package"}><b>make-package</b></ClLinks> 



