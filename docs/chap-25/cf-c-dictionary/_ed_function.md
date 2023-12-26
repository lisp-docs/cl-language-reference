**ed** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"ed"}><b>ed</b></ClLinks> &amp;optional *x → implementation-dependent* 



**Arguments and Values:** 



*x*—<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, or a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"ed"}><b>ed</b></ClLinks> invokes the editor if the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> provides a resident editor. 



If *x* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the editor is entered. If the editor had been previously entered, its prior state is resumed, if possible. 



If *x* is a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> or <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, it is taken as the <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> for a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> to be edited. 



If *x* is a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>, the text of its definition is edited. The means by which the function text is obtained is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



**Exceptional Situations:** 



The consequences are undefined if the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> does not provide a resident editor. Might signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is supplied but is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If a failure occurs when performing some operation on the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> while attempting to edit a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if *x* is a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *wild pathname*. <GlossaryTerm styled={true} term={"implementation-dependent"}><i>Implementation-dependent</i></GlossaryTerm> additional conditions might be signaled as well. 



**See Also:** 



<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>, Section 19.1.2 (Pathnames as Filenames) 



 



 



