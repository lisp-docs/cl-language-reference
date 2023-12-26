**open** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> *filespec* &amp;key *direction element-type* 



*if-exists if-does-not-exist external-format* 



→ stream 



**Arguments and Values:** 



*filespec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*direction*—one of :input, :output, :io, or :probe. The default is :input. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>; or a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for a *finite recognizable subtype* of *integer* ; or one of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink  term={"signed-byte"}><b>signed-byte</b></DictionaryLink>, <DictionaryLink  term={"unsigned-byte"}><b>unsigned-byte</b></DictionaryLink>, or :default. The default is <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. 



*if-exists*—one of :error, :new-version, :rename, :rename-and-delete, :overwrite, :append, :supersede, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The default is :new-version if the version component of *filespec* is :newest, or :error otherwise. 



*if-does-not-exist*—one of :error, :create, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The default is :error if *direction* is :input or *if-exists* is :overwrite or :append; :create if *direction* is :output or :io, and *if-exists* is neither :overwrite nor :append; or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when *direction* is :probe. 



*external-format*—an <GlossaryTerm styled={true} term={"external file format designator"}><i>external file format designator</i></GlossaryTerm> . The default is :default. 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> creates, opens, and returns a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> that is connected to the file specified by *filespec*. *Filespec* is the name of the file to be opened. If the *filespec designator* is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, that <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not closed first or otherwise affected. 



The keyword arguments to <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> specify the characteristics of the <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> that is returned, and how to handle errors. 



If *direction* is :input or :probe, or if *if-exists* is not :new-version and the version component of the *filespec* is :newest, then the file opened is that file already existing in the file system that has a version greater than that of any other file in the file system whose other pathname components are the same as those of *filespec*. 



An implementation is required to recognize all of the <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> keyword options and to do something reasonable in the context of the host operating system. For example, if a file system does not support distinct file versions and does not distinguish the notions of deletion and expunging, :new-version might be treated the same as :rename or :supersede, and :rename-and-delete might be treated the same as :supersede. 







 



 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



:direction 



These are the possible values for *direction*, and how they affect the nature of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that is created: 



:input 



Causes the creation of an *input file stream*. 



:output 



Causes the creation of an *output file stream*. 



:io 



Causes the creation of a *bidirectional file stream*. 



:probe 



Causes the creation of a “no-directional” <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>; in effect, the <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> is 



created and then closed prior to being returned by <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>. 



:element-type 



The *element-type* specifies the unit of transaction for the <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. If it is :default, the unit is determined by <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, possibly based on the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. 



:if-exists 



*if-exists* specifies the action to be taken if *direction* is :output or :io and a file of the name *filespec* already exists. If *direction* is :input, not supplied, or :probe, *if-exists* is ignored. These are the results of <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> as modified by *if-exists*: 



:error 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



:new-version 



A new file is created with a larger version number. 



:rename 



The existing file is renamed to some other name and then a new file is created. 



:rename-and-delete 



The existing file is renamed to some other name, then it is deleted but not 



expunged, and then a new file is created. 







 



 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



:overwrite 



Output operations on the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> destructively modify the existing file. If *direction* 



is :io the file is opened in a bidirectional mode that allows both reading and 



writing. The file pointer is initially positioned at the beginning of the file; however, 



the file is not truncated back to length zero when it is opened. 



:append 



Output operations on the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> destructively modify the existing file. The file 



pointer is initially positioned at the end of the file. 



If *direction* is :io, the file is opened in a bidirectional mode that allows both 



reading and writing. 



:supersede 



The existing file is superseded; that is, a new file with the same name as the old 



one is created. If possible, the implementation should not destroy the old file until 



the new <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is closed. 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



No file or <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is created; instead, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is returned to indicate failure. 



:if-does-not-exist 



*if-does-not-exist* specifies the action to be taken if a file of name *filespec* does not already exist. These are the results of <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> as modified by *if-does-not-exist*: 



:error 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



:create 



An empty file is created. Processing continues as if the file had already existed but 



no processing as directed by *if-exists* is performed. 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



No file or <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is created; instead, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is returned to indicate failure. 



:external-format 



This option selects an <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm> for the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>: The only <GlossaryTerm  term={"standardized"}><i>standardized</i></GlossaryTerm> value for this option is :default, although <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> are permitted to define additional <GlossaryTerm styled={true} term={"external file format"}><i>external file formats</i></GlossaryTerm> and <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> values returned by <DictionaryLink  term={"stream-external-format"}><b>stream-external-format</b></DictionaryLink> can also be used by <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



The *external-format* is meaningful for any kind of <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . This option is ignored for <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm> for which it is not meaningful; however, <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> may define other <GlossaryTerm styled={true} term={"element type"}><i>element types</i></GlossaryTerm> for which it is meaningful. The consequences are unspecified if a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> is written that cannot be represented by the given <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm>. 



When a file is opened, a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> is constructed to serve as the file system’s ambassador to the Lisp environment; operations on the <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> are reflected by operations on the file in the file system. 



A file can be deleted, renamed, or destructively modified by <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>. 



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



The nature and state of the host computer’s <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



**Exceptional Situations:** 



If *if-exists* is :error, (subject to the constraints on the meaning of *if-exists* listed above), an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



If *if-does-not-exist* is :error (subject to the constraints on the meaning of *if-does-not-exist* listed above), an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



If it is impossible for an implementation to handle some option in a manner close to what is specified here, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> might be signaled. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if (wild-pathname-p *filespec*) returns true. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled if the *external-format* is not understood by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



The various <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> in existence today have widely differing capabilities, and some aspects of the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> are beyond the scope of this specification to define. A given <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> might not be able to support all of these options in exactly the manner stated. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is required to recognize all of these option keywords and to try to do something “reasonable” in the context of the host <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. Where necessary to accomodate the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> 







 



 



deviate slightly from the semantics specified here without being disqualified for consideration as a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm>. If it is utterly impossible for an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to handle some option in a manner similar to what is specified here, it may simply signal an error. 



With regard to the :element-type option, if a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is requested that is not supported by the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, a substitution of types such as that which goes on in *upgrading* is permissible. As a minimum requirement, it should be the case that opening an *output stream* to a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> in a given <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> and later opening an *input stream* to the same <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> in the same <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> should work compatibly. 



**See Also:** 



<DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink>, <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 19.2.3 (Merging Pathnames), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> does not automatically close the file when an abnormal exit occurs. 



When *element-type* is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> and/or <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink> can be used on the resulting <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. 



When *element-type* is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of *integer* , <DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink> and/or <DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> can be used on the resulting <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. 



When *element-type* is :default, the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> can be determined by using <DictionaryLink  term={"stream-element-type"}><b>stream-element-type</b></DictionaryLink>. 