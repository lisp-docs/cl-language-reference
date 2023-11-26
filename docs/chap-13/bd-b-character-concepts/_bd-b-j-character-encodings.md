 

A *character* is sometimes represented merely by its *code*, and sometimes by another *integer* value which is composed from the *code* and all *implementation-defined attributes* (in an *implementation defined* way that might vary between *Lisp images* even in the same *implementation*). This *integer* , returned by the function **char-int**, is called the character’s “encoding.” There is no corresponding function from a character’s encoding back to the *character* , since its primary intended uses include things like hashing where an inverse operation is not really called for. 

