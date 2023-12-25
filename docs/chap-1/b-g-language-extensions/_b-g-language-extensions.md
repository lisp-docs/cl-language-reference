 



A language extension is any documented <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> behavior of a *defined name* in this standard that varies from the behavior described in this standard, or a documented consequence of a situation that the standard specifies as undefined, unspecified, or extendable by the implementation. For example, if this standard says that “the results are unspecified,” an extension would be to specify the results. 



If the correct behavior of a program depends on the results provided by an extension, only implementations with the same extension will execute the program correctly. Note that such a program might be non-conforming. Also, if this standard says that “an implementation may be extended,” a conforming, but possibly non-portable, program can be written using an extension. 



An implementation can have extensions, provided they do not alter the behavior of conforming code and provided they are not explicitly prohibited by this standard. 



The term “extension” refers only to extensions available upon startup. An implementation is free to allow or prohibit redefinition of an extension. 



The following list contains specific guidance to implementations concerning certain types of extensions. 



**Extra return values** 



An implementation must return exactly the number of return values specified by this standard unless the standard specifically indicates otherwise. 



**Unsolicited messages** 



No output can be produced by a function other than that specified in the standard or due to the signaling of <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> detected by the function. 



Unsolicited output, such as garbage collection notifications and autoload heralds, should not go directly to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is the value of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> variable defined in this standard, but can go indirectly to *terminal I/O* by using a *synonym stream* to <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



Progress reports from such functions as <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> are considered solicited, and are not covered by this prohibition. 



**Implementation of macros and special forms** 



<GlossaryTerm styled={true} term={"macro"}><i>Macros</i></GlossaryTerm> and *special operators* defined in this standard must not be <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>.  







