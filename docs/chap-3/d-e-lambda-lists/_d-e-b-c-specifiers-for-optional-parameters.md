 



If **&amp;optional** is present, the optional parameter specifiers are those following **&amp;optional** up to the next *lambda list keyword* or the end of the list. If optional parameters are specified, then each one is processed as follows. If any unprocessed arguments remain, then the parameter variable *var* is bound to the next remaining argument, just as for a required parameter. If no arguments remain, however, then *init-form* is evaluated, and the parameter variable is bound to the resulting value (or to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no *init-form* appears in the parameter specifier). If another variable name *supplied-p-parameter* appears in the specifier, it is bound to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if an argument had been available, and to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if no argument remained (and therefore *init-form* had to be evaluated). *Supplied-p-parameter* is bound not to an argument but to a value indicating whether or not an argument had been supplied for the corresponding *var*. 



