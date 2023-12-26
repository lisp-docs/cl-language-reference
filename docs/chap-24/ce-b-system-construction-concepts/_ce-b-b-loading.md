 



To <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is to treat its contents as <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> and <ClLinks styled={true} term={"execute"}><i>execute</i></ClLinks> that <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. The <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> may contain <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>. 



A <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> containing <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>. *Loading* a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> is accomplished essentially by sequentially *reading*<sub>2</sub> the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in the file, *evaluating* each immediately after it is <ClLinks styled={true} term={"read"}><i>read</i></ClLinks>. 



A <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> containing <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. *Loading* a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is similar to *loading* a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, except that the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> does not contain text but rather an *implementation dependent* representation of pre-digested <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> created by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> . Often, a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> can be *loaded* more quickly than a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>. See Section 3.2 (Compilation). 



The way in which a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> is distinguished from a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>.
 