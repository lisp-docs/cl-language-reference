 



To <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is to treat its contents as <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"execute"}><i>execute</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> may contain <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> containing <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>. *Loading* a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> is accomplished essentially by sequentially *reading*<sub>2</sub> the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in the file, *evaluating* each immediately after it is <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> containing <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. *Loading* a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is similar to *loading* a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, except that the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> does not contain text but rather an *implementation dependent* representation of pre-digested <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> created by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . Often, a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> can be *loaded* more quickly than a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>. See Section 3.2 (Compilation). 



The way in which a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> is distinguished from a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>.
 