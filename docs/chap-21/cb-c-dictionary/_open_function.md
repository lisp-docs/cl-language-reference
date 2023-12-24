**open** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> *filespec* &amp;key *direction element-type* 



*if-exists if-does-not-exist external-format* 



→ stream 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



*direction*—one of :input, :output, :io, or :probe. The default is :input. 



*element-type*—a *type specifier* for *recognizable subtype* of <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>; or a *type specifier* for a *finite recognizable subtype* of *integer* ; or one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> <ClLinks styled={true} term={"signed-byte"}><b>signed-byte</b></ClLinks>, <ClLinks styled={true} term={"unsigned-byte"}><b>unsigned-byte</b></ClLinks>, or :default. The default is <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. 



*if-exists*—one of :error, :new-version, :rename, :rename-and-delete, :overwrite, :append, :supersede, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is :new-version if the version component of *filespec* is :newest, or :error otherwise. 



*if-does-not-exist*—one of :error, :create, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is :error if *direction* is :input or *if-exists* is :overwrite or :append; :create if *direction* is :output or :io, and *if-exists* is neither :overwrite nor :append; or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> when *direction* is :probe. 



*external-format*—an *external file format designator* . The default is :default. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a *file stream* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> creates, opens, and returns a *file stream* that is connected to the file specified by *filespec*. *Filespec* is the name of the file to be opened. If the *filespec designator* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not closed first or otherwise affected. 



The keyword arguments to <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> specify the characteristics of the *file stream* that is returned, and how to handle errors. 



If *direction* is :input or :probe, or if *if-exists* is not :new-version and the version component of the *filespec* is :newest, then the file opened is that file already existing in the file system that has a version greater than that of any other file in the file system whose other pathname components are the same as those of *filespec*. 



An implementation is required to recognize all of the <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> keyword options and to do something reasonable in the context of the host operating system. For example, if a file system does not support distinct file versions and does not distinguish the notions of deletion and expunging, :new-version might be treated the same as :rename or :supersede, and :rename-and-delete might be treated the same as :supersede. 







 



 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> 



:direction 



These are the possible values for *direction*, and how they affect the nature of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is created: 



:input 



Causes the creation of an *input file stream*. 



:output 



Causes the creation of an *output file stream*. 



:io 



Causes the creation of a *bidirectional file stream*. 



:probe 



Causes the creation of a “no-directional” *file stream*; in effect, the *file stream* is 



created and then closed prior to being returned by <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>. 



:element-type 



The *element-type* specifies the unit of transaction for the *file stream*. If it is :default, the unit is determined by *file system*, possibly based on the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. 



:if-exists 



*if-exists* specifies the action to be taken if *direction* is :output or :io and a file of the name *filespec* already exists. If *direction* is :input, not supplied, or :probe, *if-exists* is ignored. These are the results of <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> as modified by *if-exists*: 



:error 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



:new-version 



A new file is created with a larger version number. 



:rename 



The existing file is renamed to some other name and then a new file is created. 



:rename-and-delete 



The existing file is renamed to some other name, then it is deleted but not 



expunged, and then a new file is created. 







 



 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> 



:overwrite 



Output operations on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> destructively modify the existing file. If *direction* 



is :io the file is opened in a bidirectional mode that allows both reading and 



writing. The file pointer is initially positioned at the beginning of the file; however, 



the file is not truncated back to length zero when it is opened. 



:append 



Output operations on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> destructively modify the existing file. The file 



pointer is initially positioned at the end of the file. 



If *direction* is :io, the file is opened in a bidirectional mode that allows both 



reading and writing. 



:supersede 



The existing file is superseded; that is, a new file with the same name as the old 



one is created. If possible, the implementation should not destroy the old file until 



the new <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is closed. 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



No file or <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is created; instead, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned to indicate failure. 



:if-does-not-exist 



*if-does-not-exist* specifies the action to be taken if a file of name *filespec* does not already exist. These are the results of <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> as modified by *if-does-not-exist*: 



:error 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



:create 



An empty file is created. Processing continues as if the file had already existed but 



no processing as directed by *if-exists* is performed. 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



No file or <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is created; instead, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned to indicate failure. 



:external-format 



This option selects an *external file format* for the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>: The only <ClLinks styled={true} term={"standardized"}><i>standardized</i></ClLinks> value for this option is :default, although <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> are permitted to define additional *external file formats* and <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> values returned by <ClLinks styled={true} term={"stream-external-format"}><b>stream-external-format</b></ClLinks> can also be used by *conforming programs*. 







 



 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> 



The *external-format* is meaningful for any kind of *file stream* whose *element type* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . This option is ignored for <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> for which it is not meaningful; however, <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> may define other *element types* for which it is meaningful. The consequences are unspecified if a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is written that cannot be represented by the given *external file format*. 



When a file is opened, a *file stream* is constructed to serve as the file system’s ambassador to the Lisp environment; operations on the *file stream* are reflected by operations on the file in the file system. 



A file can be deleted, renamed, or destructively modified by <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>. 



For information about opening relative pathnames, see Section 19.2.3 (Merging Pathnames). 

**Examples:**
```lisp

(open *filespec* :direction :probe) → #<Closed Probe File Stream...> 
(setq q (merge-pathnames (user-homedir-pathname) "test")) 
→ #<PATHNAME :HOST NIL :DEVICE *device-name* :DIRECTORY *directory-name* 
:NAME "test" :TYPE NIL :VERSION :NEWEST> 
(open *filespec* :if-does-not-exist :create) → #<Input File Stream...> 
(setq s (open *filespec* :direction :probe)) → #<Closed Probe File Stream...> 
(truename s) → #<PATHNAME :HOST NIL :DEVICE *device-name* :DIRECTORY 
*directory-name* :NAME *filespec* :TYPE *extension* :VERSION 1> 
(open s :direction :output :if-exists nil) → NIL 

```
**Affected By:** 



The nature and state of the host computer’s *file system*. 



**Exceptional Situations:** 



If *if-exists* is :error, (subject to the constraints on the meaning of *if-exists* listed above), an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



If *if-does-not-exist* is :error (subject to the constraints on the meaning of *if-does-not-exist* listed above), an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



If it is impossible for an implementation to handle some option in a manner close to what is specified here, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> might be signaled. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if (wild-pathname-p *filespec*) returns true. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled if the *external-format* is not understood by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



The various *file systems* in existence today have widely differing capabilities, and some aspects of the *file system* are beyond the scope of this specification to define. A given <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> might not be able to support all of these options in exactly the manner stated. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is required to recognize all of these option keywords and to try to do something “reasonable” in the context of the host *file system*. Where necessary to accomodate the *file system*, an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> 







 



 



deviate slightly from the semantics specified here without being disqualified for consideration as a *conforming implementation*. If it is utterly impossible for an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to handle some option in a manner similar to what is specified here, it may simply signal an error. 



With regard to the :element-type option, if a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is requested that is not supported by the *file system*, a substitution of types such as that which goes on in *upgrading* is permissible. As a minimum requirement, it should be the case that opening an *output stream* to a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> in a given *element type* and later opening an *input stream* to the same <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> in the same *element type* should work compatibly. 



**See Also:** 



<ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks>, <ClLinks styled={true} term={"close"}><b>close</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 19.2.3 (Merging Pathnames), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> does not automatically close the file when an abnormal exit occurs. 



When *element-type* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>, <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> and/or <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> can be used on the resulting *file stream*. 



When *element-type* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *integer* , <ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks> and/or <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks> can be used on the resulting *file stream*. 



When *element-type* is :default, the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> can be determined by using <ClLinks styled={true} term={"stream-element-type"}><b>stream-element-type</b></ClLinks>. 