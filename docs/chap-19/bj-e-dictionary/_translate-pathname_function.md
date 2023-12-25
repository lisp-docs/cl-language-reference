**translate-pathname** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink> *source from-wildcard to-wildcard* &amp;key 



*→ translated-pathname* 



**Arguments and Values:** 



*source*—a *pathname designator* . 



*from-wildcard*—a *pathname designator* . 



*to-wildcard*—a *pathname designator* . 



*translated-pathname*—a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink> translates *source* (that matches *from-wildcard*) into a corresponding <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> that matches *to-wildcard*, and returns the corresponding <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



The resulting <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is *to-wildcard* with each wildcard or missing field replaced by a portion of *source*. A “wildcard field” is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component with a value of :wild, a :wild element of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>-valued directory component, or an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> portion of a component, such as the "\*" in the complex wildcard string "foo\*bar" that some implementations support. An implementation that adds other wildcard features, such as regular expressions, must define how <DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink> extends to those features. A “missing field” is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component with a value of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



The portion of *source* that is copied into the resulting <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. Typically it is determined by the user interface conventions of the file systems involved. Usually it is the portion of *source* that matches a wildcard field of *from-wildcard* that is in the same position as the wildcard or missing field of *to-wildcard*. If there is no wildcard field in *from-wildcard* at that position, then usually it is the entire corresponding <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component of *source*, or in the case of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>-valued directory component, the entire corresponding <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> element. 



During the copying of a portion of *source* into the resulting <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, additional *implementation defined* translations of <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> or file naming conventions might occur, especially when *from-wildcard* and *to-wildcard* are for different hosts. 



It is valid for *source* to be a wild <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>; in general this will produce a wild result. It is valid for *from-wildcard* and/or *to-wildcard* to be non-wild <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink> 



There are no specified keyword arguments for <DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink>, but implementations are permitted to extend it by adding keyword arguments. 



<DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink> maps customary case in *source* into customary case in the output <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. **Examples:**
```lisp

;; The results of the following five forms are all implementation-dependent. 
;; The second item in particular is shown with multiple results just to 
;; emphasize one of many particular variations which commonly occurs. 
(pathname-name (translate-pathname "foobar" "foo\*" "\*baz")) *→* "barbaz" 
(pathname-name (translate-pathname "foobar" "foo\*" "\*")) 
*→* "foobar" 
<i><sup>or</sup>→</i> "bar" 
(pathname-name (translate-pathname "foobar" "\*" "foo\*")) *→* "foofoobar" 
(pathname-name (translate-pathname "bar" "\*" "foo\*")) *→* "foobar" 
(pathname-name (translate-pathname "foobar" "foo\*" "baz\*")) *→* "bazbar" 
(defun translate-logical-pathname-1 (pathname rules) 
  (let ((rule (assoc pathname rules :test #’pathname-match-p))) 
    (unless rule (error "No translation rule for ~A" pathname)) 
    (translate-pathname pathname (first rule) (second rule)))) 
(translate-logical-pathname-1 "FOO:CODE;BASIC.LISP" 
			      ’(("FOO:DOCUMENTATION;" "MY-UNIX:/doc/foo/") 
				("FOO:CODE;" "MY-UNIX:/lib/foo/") 
				("FOO:PATCHES;\*;" "MY-UNIX:/lib/foo/patch/\*/"))) 
*→* #P"MY-UNIX:/lib/foo/basic.l" 
;;;This example assumes one particular set of wildcard conventions 
;;;Not all file systems will run this example exactly as written 
(defun rename-files (from to) 
  (dolist (file (directory from)) 
    (rename-file file (translate-pathname file from to)))) 
(rename-files "/usr/me/\*.lisp" "/dev/her/\*.l") 
					;Renames /usr/me/init.lisp to /dev/her/init.l 
(rename-files "/usr/me/pcl\*/\*" "/sys/pcl/\*/") 
					;Renames /usr/me/pcl-5-may/low.lisp to /sys/pcl/pcl-5-may/low.lisp 
					;In some file systems the result might be /sys/pcl/5-may/low.lisp 
(rename-files "/usr/me/pcl\*/\*" "/sys/library/\*/") 
					;Renames /usr/me/pcl-5-may/low.lisp to /sys/library/pcl-5-may/low.lisp 
					;In some file systems the result might be /sys/library/5-may/low.lisp 
(rename-files "/usr/me/foo.bar" "/usr/me2/") 
					;Renames /usr/me/foo.bar to /usr/me2/foo.bar 
(rename-files "/usr/joe/\*-recipes.text" "/usr/jim/cookbook/joe’s-\*-rec.text") ;Renames /usr/joe/lamb-recipes.text to /usr/jim/cookbook/joe’s-lamb-rec.text 
					;Renames /usr/joe/pork-recipes.text to /usr/jim/cookbook/joe’s-pork-rec.text 



					;Renames /usr/joe/veg-recipes.text to /usr/jim/cookbook/joe’s-veg-rec.text 

```
**Exceptional Situations:** 



If any of *source*, *from-wildcard*, or *to-wildcard* is not a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, or a *stream associated with a file* an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



(pathname-match-p *source from-wildcard*) must be true or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink>, **pathname-host**, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



The exact behavior of <DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink> cannot be dictated by the Common Lisp language and must be allowed to vary, depending on the user interface conventions of the file systems involved. 



The following is an implementation guideline. One file system performs this operation by examining each piece of the three <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> in turn, where a piece is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> element of a structured component such as a hierarchical directory. Hierarchical directory elements in *from-wildcard* and *to-wildcard* are matched by whether they are wildcards, not by depth in the directory hierarchy. If the piece in *to-wildcard* is present and not wild, it is copied into the result. If the piece in *to-wildcard* is :wild or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the piece in *source* is copied into the result. Otherwise, the piece in *to-wildcard* might be a complex wildcard such as "foo\*bar" and the piece in *from-wildcard* should be wild; the portion of the piece in *source* that matches the wildcard portion of the piece in *from-wildcard* replaces the wildcard portion of the piece in *to-wildcard* and the value produced is used in the result. 



