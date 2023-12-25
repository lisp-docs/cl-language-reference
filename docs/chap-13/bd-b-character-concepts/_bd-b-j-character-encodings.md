 



A <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is sometimes represented merely by its <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>, and sometimes by another *integer* value which is composed from the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> and all *implementation-defined attributes* (in an *implementation defined* way that might vary between *Lisp images* even in the same <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>). This *integer* , returned by the function <DictionaryLink styled={true} term={"char-int"}><b>char-int</b></DictionaryLink>, is called the character’s “encoding.” There is no corresponding function from a character’s encoding back to the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , since its primary intended uses include things like hashing where an inverse operation is not really called for. 



