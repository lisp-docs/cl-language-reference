 



A <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is sometimes represented merely by its <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>, and sometimes by another *integer* value which is composed from the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> and all *implementation-defined attributes* (in an *implementation defined* way that might vary between *Lisp images* even in the same <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>). This *integer* , returned by the function <ClLinks styled={true} term={"char-int"}><b>char-int</b></ClLinks>, is called the character’s “encoding.” There is no corresponding function from a character’s encoding back to the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> , since its primary intended uses include things like hashing where an inverse operation is not really called for. 



