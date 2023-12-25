 



To <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is to treat its contents as <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"execute"}><i>execute</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> may contain *source code* or *compiled code*. 



A <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> containing *source code* is called a *source file*. *Loading* a *source file* is accomplished essentially by sequentially *reading*<sub>2</sub> the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in the file, *evaluating* each immediately after it is <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> containing *compiled code* is called a *compiled file*. *Loading* a *compiled file* is similar to *loading* a *source file*, except that the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> does not contain text but rather an *implementation dependent* representation of pre-digested <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> created by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . Often, a *compiled file* can be *loaded* more quickly than a *source file*. See Section 3.2 (Compilation). 



The way in which a *source file* is distinguished from a *compiled file* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>.
 