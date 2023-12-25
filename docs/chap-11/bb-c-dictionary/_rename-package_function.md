**rename-package** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"rename-package"}><b>rename-package</b></ClLinks> *package new-name* &amp;optional *new-nicknames → package-object* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a *package designator* . 



*new-name*—a *package designator* . 



*new-nicknames*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *string designators*. The default is the *empty list*. 



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



