**merge-pathnames** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;optional *default-pathname default-version* 



→ merged-pathname 



**Arguments and Values:** 



<GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*default-pathname*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . The default is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of 



<DictionaryLink  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>. 



*default-version*—a <GlossaryTerm styled={true} term={"valid pathname version"}><i>valid pathname version</i></GlossaryTerm>. The default is :newest. 



*merged-pathname*—a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> 



**Description:** 



Constructs a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> from <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> by filling in any unsupplied components with the corresponding values from *default-pathname* and *default-version*. 



Defaulting of pathname components is done by filling in components taken from another <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. This is especially useful for cases such as a program that has an input file and an output file. Unspecified components of the output pathname will come from the input pathname, except that the type should not default to the type of the input pathname but rather to the appropriate default type for output from the program; for example, see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"compile-file-pathname"}><b>compile-file-pathname</b></DictionaryLink>. 



If no version is supplied, *default-version* is used. If *default-version* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the version component will remain unchanged. 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> explicitly specifies a host and not a device, and if the host component of *default-pathname* matches the host component of <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>, then the device is taken from the *default-pathname*; otherwise the device will be the default file device for that host. If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> does not specify a host, device, directory, name, or type, each such component is copied from *default-pathname*. If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> does not specify a name, then the version, if not provided, will come from *default-pathname*, just like the other components. If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> does specify a name, then the version is not affected by *default-pathname*. If this process leaves the version missing, the *default-version* is used. If the host’s file name syntax provides a way to input a version without a name or type, the user can let the name and type default but supply a version different from the one in *default-pathname*. 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> effectively becomes (pathname <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>). <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> can be used on either an open or a closed <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> recognizes a *logical pathname namestring* when *default-pathname* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, or when the <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm> begins with the name of a defined <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> followed by a <GlossaryTerm  term={"colon"}><i>colon</i></GlossaryTerm>. In the first of these two cases, the host portion of the *logical pathname namestring* and its following <GlossaryTerm  term={"colon"}><i>colon</i></GlossaryTerm> are optional. 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> if and only if its first argument is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, or its first argument is a *logical pathname namestring* with an explicit host, or its first argument does not specify a host and the *default-pathname* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. 



<GlossaryTerm  term={"pathname"}><i>Pathname</i></GlossaryTerm> merging treats a relative directory specially. If (pathname-directory <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>) is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> is :relative, and (pathname-directory *default-pathname*) is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, then the merged directory is the value of 



(append (pathname-directory *default-pathname*) 



(cdr ;remove :relative from the front 



(pathname-directory <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>))) 



except that if the resulting <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> contains a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or :wild immediately followed by :back, 



 



 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> 



both of them are removed. This removal of redundant :back <GlossaryTerm  term={"keyword"}><i>keywords</i></GlossaryTerm> is repeated as many times as possible. If (pathname-directory *default-pathname*) is not a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> or (pathname-directory <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>) is not a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> is :relative, the merged directory is (or (pathname-directory <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>) (pathname-directory *default-pathname*)) 



<DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> maps customary case in <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> into customary case in the output <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. 



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





