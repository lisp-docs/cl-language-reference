**merge-pathnames** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> &amp;optional *default-pathname default-version* 



→ merged-pathname 



**Arguments and Values:** 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a *pathname designator* . 



*default-pathname*—a *pathname designator* . The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of 



<ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>. 



*default-version*—a *valid pathname version*. The default is :newest. 



*merged-pathname*—a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> 



**Description:** 



Constructs a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> from <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> by filling in any unsupplied components with the corresponding values from *default-pathname* and *default-version*. 



Defaulting of pathname components is done by filling in components taken from another <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. This is especially useful for cases such as a program that has an input file and an output file. Unspecified components of the output pathname will come from the input pathname, except that the type should not default to the type of the input pathname but rather to the appropriate default type for output from the program; for example, see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile-file-pathname"}><b>compile-file-pathname</b></ClLinks>. 



If no version is supplied, *default-version* is used. If *default-version* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the version component will remain unchanged. 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> explicitly specifies a host and not a device, and if the host component of *default-pathname* matches the host component of <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, then the device is taken from the *default-pathname*; otherwise the device will be the default file device for that host. If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> does not specify a host, device, directory, name, or type, each such component is copied from *default-pathname*. If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> does not specify a name, then the version, if not provided, will come from *default-pathname*, just like the other components. If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> does specify a name, then the version is not affected by *default-pathname*. If this process leaves the version missing, the *default-version* is used. If the host’s file name syntax provides a way to input a version without a name or type, the user can let the name and type default but supply a version different from the one in *default-pathname*. 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> effectively becomes (pathname <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>). <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> can be used on either an open or a closed <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



<ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> recognizes a *logical pathname namestring* when *default-pathname* is a *logical pathname*, or when the <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> begins with the name of a defined *logical host* followed by a <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks>. In the first of these two cases, the host portion of the *logical pathname namestring* and its following <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> are optional. 



<ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> returns a *logical pathname* if and only if its first argument is a *logical pathname*, or its first argument is a *logical pathname namestring* with an explicit host, or its first argument does not specify a host and the *default-pathname* is a *logical pathname*. 



<ClLinks styled={true} term={"pathname"}><i>Pathname</i></ClLinks> merging treats a relative directory specially. If (pathname-directory <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> whose <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> is :relative, and (pathname-directory *default-pathname*) is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, then the merged directory is the value of 



(append (pathname-directory *default-pathname*) 



(cdr ;remove :relative from the front 



(pathname-directory <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>))) 



except that if the resulting <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> contains a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or :wild immediately followed by :back, 



 



 



<ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> 



both of them are removed. This removal of redundant :back <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks> is repeated as many times as possible. If (pathname-directory *default-pathname*) is not a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> or (pathname-directory <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) is not a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> whose <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> is :relative, the merged directory is (or (pathname-directory <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) (pathname-directory *default-pathname*)) 



<ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> maps customary case in <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> into customary case in the output <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



**Examples:**
```lisp
(merge-pathnames "CMUC::FORMAT" 
		 "CMUC::PS:<LISPIO>.FASL") 
→ #P"CMUC::PS:<LISPIO>FORMAT.FASL.0" 
```
**See Also:** 



<ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



The net effect is that if just a name is supplied, the host, device, directory, and type will come from *default-pathname*, but the version will come from *default-version*. If nothing or just a directory is supplied, the name, type, and version will come from *default-pathname* together. 





