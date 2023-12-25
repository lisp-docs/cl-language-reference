 



To <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is to treat its contents as <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> and <ClLinks styled={true} term={"execute"}><i>execute</i></ClLinks> that <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. The <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> may contain *source code* or *compiled code*. 



A <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> containing *source code* is called a *source file*. *Loading* a *source file* is accomplished essentially by sequentially *reading*<sub>2</sub> the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in the file, *evaluating* each immediately after it is <ClLinks styled={true} term={"read"}><i>read</i></ClLinks>. 



A <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> containing *compiled code* is called a *compiled file*. *Loading* a *compiled file* is similar to *loading* a *source file*, except that the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> does not contain text but rather an *implementation dependent* representation of pre-digested <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> created by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> . Often, a *compiled file* can be *loaded* more quickly than a *source file*. See Section 3.2 (Compilation). 



The way in which a *source file* is distinguished from a *compiled file* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>.
 