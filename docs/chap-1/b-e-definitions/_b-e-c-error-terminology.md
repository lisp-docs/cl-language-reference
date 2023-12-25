 



Situations in which errors might, should, or must be signaled are described in the standard. The wording used to describe such situations is intended to have precise meaning. The following list is a glossary of those meanings. 



**Safe code** 



This is <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> processed with the **safety** optimization at its highest setting (3). **safety** is a lexical property of code. The phrase “the function F should signal an error” means that if F is invoked from code processed with the highest **safety** optimization, an error is signaled. It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether F or the calling code signals the error.  







**Unsafe code** 



This is code processed with lower safety levels. 



Unsafe code might do error checking. Implementations are permitted to treat all code as safe code all the time. 



**An error is signaled** 



This means that an error is signaled in both safe and unsafe code. *Conforming code* may rely on the fact that the error is signaled in both safe and unsafe code. Every implementation is required to detect the error in both safe and unsafe code. For example, “an error is signaled if <DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink> is given a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the *current package*.” 



If an explicit error type is not specified, the default is <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**An error should be signaled** 



This means that an error is signaled in safe code, and an error might be signaled in unsafe code. *Conforming code* may rely on the fact that the error is signaled in safe code. Every implementation is required to detect the error at least in safe code. When the error is not signaled, the “consequences are undefined” (see below). For example, “<DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if any argument is not of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>.” 



**Should be prepared to signal an error** 



This is similar to “should be signaled” except that it does not imply that ‘extra effort’ has to be taken on the part of an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> to discover an erroneous situation if the normal action of that <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> can be performed successfully with only ‘lazy’ checking. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is always permitted to signal an error, but even in *safe code*, it is only required to signal the error when failing to signal it might lead to incorrect results. In *unsafe code*, the consequences are undefined. 



For example, defining that “<DictionaryLink styled={true} term={"find"}><b>find</b></DictionaryLink> should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its second <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not a *proper list*” does not imply that an error is always signaled. The <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> 



(find ’a ’(a b . c)) 



must either signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> in *safe code*, else return A. In *unsafe code*, the consequences are undefined. By contrast, 



(find ’d ’(a b . c)) 



must signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> in *safe code*. In *unsafe code*, the consequences are undefined. Also, 



(find ’d ’#1=(a b . #1#)) 











in *safe code* might return <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (as an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> extension), might never return, or might signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink>. In *unsafe code*, the consequences are undefined. 



Typically, the “should be prepared to signal” terminology is used in type checking situations where there are efficiency considerations that make it impractical to detect errors that are not relevant to the correct operation of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> . 



**The consequences are unspecified** 



This means that the consequences are unpredictable but harmless. Implementations are permitted to specify the consequences of this situation. No *conforming code* may depend on the results or effects of this situation, and all *conforming code* is required to treat the 



results and effects of this situation as unpredictable but harmless. For example, “if the second argument to <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> specifies a name that does not correspond to any *slots accessible* in the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, the results are unspecified.” 



**The consequences are undefined** 



This means that the consequences are unpredictable. The consequences may range from harmless to fatal. No *conforming code* may depend on the results or effects. *Conforming code* must treat the consequences as unpredictable. In places where the words “must,” “must not,” or “may not” are used, then “the consequences are undefined” if the stated requirement is not met and no specific consequence is explicitly stated. An implementation is permitted to signal an error in this case. 



For example: “Once a name has been declared by <DictionaryLink styled={true} term={"defconstant"}><b>defconstant</b></DictionaryLink> to be constant, any further assignment or binding of that variable has undefined consequences.” 



**An error might be signaled** 



This means that the situation has undefined consequences; however, if an error is signaled, it is of the specified <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. For example, “<DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> might signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink>.” 



**The return values are unspecified** 



This means that only the number and nature of the return values of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are not specified. However, the issue of whether or not any side-effects or transfer of control occurs is still well-specified. 



A program can be well-specified even if it uses a function whose returns values are unspecified. For example, even if the return values of some function F are unspecified, an expression such as (length (list (F))) is still well-specified because it does not rely on any particular aspect of the value or values returned by F. 



**Implementations may be extended to cover this situation** 



This means that the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> has undefined consequences; however, a *conforming* 











<GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is free to treat the situation in a more specific way. For example, an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> might define that an error is signaled, or that an error should be signaled, or even that a certain well-defined non-error behavior occurs. 



No *conforming code* may depend on the consequences of such a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm>; all *conforming code* must treat the consequences of the situation as undefined. <GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> are required to document how the situation is treated. 



For example, “implementations may be extended to define other type specifiers to have a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>.” 



**Implementations are free to extend the syntax** 



This means that in this situation implementations are permitted to define unambiguous extensions to the syntax of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> being described. No *conforming code* may depend on this extension. Implementations are required to document each such extension. All 



*conforming code* is required to treat the syntax as meaningless. The standard might disallow certain extensions while allowing others. For example, “no implementation is free to extend the syntax of <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>.” 



