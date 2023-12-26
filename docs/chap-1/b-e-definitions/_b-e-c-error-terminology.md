 



Situations in which errors might, should, or must be signaled are described in the standard. The wording used to describe such situations is intended to have precise meaning. The following list is a glossary of those meanings. 



**Safe code** 



This is <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> processed with the **safety** optimization at its highest setting (3). **safety** is a lexical property of code. The phrase “the function F should signal an error” means that if F is invoked from code processed with the highest **safety** optimization, an error is signaled. It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether F or the calling code signals the error.  







**Unsafe code** 



This is code processed with lower safety levels. 



Unsafe code might do error checking. Implementations are permitted to treat all code as safe code all the time. 



**An error is signaled** 



This means that an error is signaled in both safe and unsafe code. <GlossaryTerm styled={true} term={"conforming code"}><i>Conforming code</i></GlossaryTerm> may rely on the fact that the error is signaled in both safe and unsafe code. Every implementation is required to detect the error in both safe and unsafe code. For example, “an error is signaled if <ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks> is given a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>.” 



If an explicit error type is not specified, the default is <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**An error should be signaled** 



This means that an error is signaled in safe code, and an error might be signaled in unsafe code. <GlossaryTerm styled={true} term={"conforming code"}><i>Conforming code</i></GlossaryTerm> may rely on the fact that the error is signaled in safe code. Every implementation is required to detect the error at least in safe code. When the error is not signaled, the “consequences are undefined” (see below). For example, “<ClLinks styled={true} term={"+"}><b>+</b></ClLinks> should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if any argument is not of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>.” 



**Should be prepared to signal an error** 



This is similar to “should be signaled” except that it does not imply that ‘extra effort’ has to be taken on the part of an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> to discover an erroneous situation if the normal action of that <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> can be performed successfully with only ‘lazy’ checking. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is always permitted to signal an error, but even in *safe code*, it is only required to signal the error when failing to signal it might lead to incorrect results. In *unsafe code*, the consequences are undefined. 



For example, defining that “<ClLinks styled={true} term={"find"}><b>find</b></ClLinks> should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its second <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>” does not imply that an error is always signaled. The <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> 



(find ’a ’(a b . c)) 



must either signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> in *safe code*, else return A. In *unsafe code*, the consequences are undefined. By contrast, 



(find ’d ’(a b . c)) 



must signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> in *safe code*. In *unsafe code*, the consequences are undefined. Also, 



(find ’d ’#1=(a b . #1#)) 











in *safe code* might return <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (as an <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> extension), might never return, or might signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks>. In *unsafe code*, the consequences are undefined. 



Typically, the “should be prepared to signal” terminology is used in type checking situations where there are efficiency considerations that make it impractical to detect errors that are not relevant to the correct operation of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> . 



**The consequences are unspecified** 



This means that the consequences are unpredictable but harmless. Implementations are permitted to specify the consequences of this situation. No <GlossaryTerm styled={true} term={"conforming code"}><i>conforming code</i></GlossaryTerm> may depend on the results or effects of this situation, and all <GlossaryTerm styled={true} term={"conforming code"}><i>conforming code</i></GlossaryTerm> is required to treat the 



results and effects of this situation as unpredictable but harmless. For example, “if the second argument to <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> specifies a name that does not correspond to any *slots accessible* in the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, the results are unspecified.” 



**The consequences are undefined** 



This means that the consequences are unpredictable. The consequences may range from harmless to fatal. No <GlossaryTerm styled={true} term={"conforming code"}><i>conforming code</i></GlossaryTerm> may depend on the results or effects. <GlossaryTerm styled={true} term={"conforming code"}><i>Conforming code</i></GlossaryTerm> must treat the consequences as unpredictable. In places where the words “must,” “must not,” or “may not” are used, then “the consequences are undefined” if the stated requirement is not met and no specific consequence is explicitly stated. An implementation is permitted to signal an error in this case. 



For example: “Once a name has been declared by <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> to be constant, any further assignment or binding of that variable has undefined consequences.” 



**An error might be signaled** 



This means that the situation has undefined consequences; however, if an error is signaled, it is of the specified <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. For example, “<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> might signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks>.” 



**The return values are unspecified** 



This means that only the number and nature of the return values of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are not specified. However, the issue of whether or not any side-effects or transfer of control occurs is still well-specified. 



A program can be well-specified even if it uses a function whose returns values are unspecified. For example, even if the return values of some function F are unspecified, an expression such as (length (list (F))) is still well-specified because it does not rely on any particular aspect of the value or values returned by F. 



**Implementations may be extended to cover this situation** 



This means that the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> has undefined consequences; however, a *conforming* 











<ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is free to treat the situation in a more specific way. For example, an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> might define that an error is signaled, or that an error should be signaled, or even that a certain well-defined non-error behavior occurs. 



No <GlossaryTerm styled={true} term={"conforming code"}><i>conforming code</i></GlossaryTerm> may depend on the consequences of such a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks>; all <GlossaryTerm styled={true} term={"conforming code"}><i>conforming code</i></GlossaryTerm> must treat the consequences of the situation as undefined. <ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> are required to document how the situation is treated. 



For example, “implementations may be extended to define other type specifiers to have a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>.” 



**Implementations are free to extend the syntax** 



This means that in this situation implementations are permitted to define unambiguous extensions to the syntax of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> being described. No <GlossaryTerm styled={true} term={"conforming code"}><i>conforming code</i></GlossaryTerm> may depend on this extension. Implementations are required to document each such extension. All 



<GlossaryTerm styled={true} term={"conforming code"}><i>conforming code</i></GlossaryTerm> is required to treat the syntax as meaningless. The standard might disallow certain extensions while allowing others. For example, “no implementation is free to extend the syntax of <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>.” 



