**merge-pathnames** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> &amp;optional *default-pathname default-version* 



→ merged-pathname 



**Arguments and Values:** 



<ClLinks  term={"pathname"}><i>pathname</i></ClLinks>—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*default-pathname*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . The default is the <ClLinks  term={"value"}><i>value</i></ClLinks> of 



<DictionaryLink  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>. 



*default-version*—a <GlossaryTerm styled={true} term={"valid pathname version"}><i>valid pathname version</i></GlossaryTerm>. The default is :newest. 



*merged-pathname*—a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 







 



 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> 



**Description:** 



Constructs a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> from <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> by filling in any unsupplied components with the corresponding values from *default-pathname* and *default-version*. 



Defaulting of pathname components is done by filling in components taken from another <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. This is especially useful for cases such as a program that has an input file and an output file. Unspecified components of the output pathname will come from the input pathname, except that the type should not default to the type of the input pathname but rather to the appropriate default type for output from the program; for example, see the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"compile-file-pathname"}><b>compile-file-pathname</b></DictionaryLink>. 



If no version is supplied, *default-version* is used. If *default-version* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the version component will remain unchanged. 



If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> explicitly specifies a host and not a device, and if the host component of *default-pathname* matches the host component of <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, then the device is taken from the *default-pathname*; otherwise the device will be the default file device for that host. If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> does not specify a host, device, directory, name, or type, each such component is copied from *default-pathname*. If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> does not specify a name, then the version, if not provided, will come from *default-pathname*, just like the other components. If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> does specify a name, then the version is not affected by *default-pathname*. If this process leaves the version missing, the *default-version* is used. If the host’s file name syntax provides a way to input a version without a name or type, the user can let the name and type default but supply a version different from the one in *default-pathname*. 



If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> effectively becomes (pathname <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>). <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> can be used on either an open or a closed <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> recognizes a *logical pathname namestring* when *default-pathname* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, or when the <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> begins with the name of a defined <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> followed by a <ClLinks  term={"colon"}><i>colon</i></ClLinks>. In the first of these two cases, the host portion of the *logical pathname namestring* and its following <ClLinks  term={"colon"}><i>colon</i></ClLinks> are optional. 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> if and only if its first argument is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, or its first argument is a *logical pathname namestring* with an explicit host, or its first argument does not specify a host and the *default-pathname* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. 



<ClLinks  term={"pathname"}><i>Pathname</i></ClLinks> merging treats a relative directory specially. If (pathname-directory <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>) is a <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is :relative, and (pathname-directory *default-pathname*) is a <ClLinks  term={"list"}><i>list</i></ClLinks>, then the merged directory is the value of 



(append (pathname-directory *default-pathname*) 



(cdr ;remove :relative from the front 



(pathname-directory <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>))) 



except that if the resulting <ClLinks  term={"list"}><i>list</i></ClLinks> contains a <ClLinks  term={"string"}><i>string</i></ClLinks> or :wild immediately followed by :back, 



 



 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> 



both of them are removed. This removal of redundant :back <ClLinks  term={"keyword"}><i>keywords</i></ClLinks> is repeated as many times as possible. If (pathname-directory *default-pathname*) is not a <ClLinks  term={"list"}><i>list</i></ClLinks> or (pathname-directory <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>) is not a <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is :relative, the merged directory is (or (pathname-directory <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>) (pathname-directory *default-pathname*)) 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> maps customary case in <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> into customary case in the output <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 



**Examples:**
```lisp
(merge-pathnames "CMUC::FORMAT" 
		 "CMUC::PS:<LISPIO>.FASL") 
→ #P"CMUC::PS:<LISPIO>FORMAT.FASL.0" 
```
**See Also:** 



<DictionaryLink  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



The net effect is that if just a name is supplied, the host, device, directory, and type will come from *default-pathname*, but the version will come from *default-version*. If nothing or just a directory is supplied, the name, type, and version will come from *default-pathname* together. 





