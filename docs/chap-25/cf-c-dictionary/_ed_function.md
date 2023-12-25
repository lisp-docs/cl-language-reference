**ed** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"ed"}><b>ed</b></DictionaryLink> &amp;optional *x → implementation-dependent* 



**Arguments and Values:** 



*x*—<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, or a *function name*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"ed"}><b>ed</b></DictionaryLink> invokes the editor if the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> provides a resident editor. 



If *x* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the editor is entered. If the editor had been previously entered, its prior state is resumed, if possible. 



If *x* is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, it is taken as the *pathname designator* for a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> to be edited. 



If *x* is a *function name*, the text of its definition is edited. The means by which the function text is obtained is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



**Exceptional Situations:** 



The consequences are undefined if the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> does not provide a resident editor. Might signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is supplied but is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If a failure occurs when performing some operation on the *file system* while attempting to edit a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if *x* is a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *wild pathname*. *Implementation-dependent* additional conditions might be signaled as well. 



**See Also:** 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>, Section 19.1.2 (Pathnames as Filenames) 



 



 



