 



These are all the parameter specifiers up to the first <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keyword</i></GlossaryTerm>; if there are no <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm>, then all the specifiers are for required parameters. Each required parameter is specified by a parameter variable *var*. *var* is bound as a lexical variable unless it is declared <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>. 



If there are n required parameters (n may be zero), there must be at least n passed arguments, and the required parameters are bound to the first n passed arguments; see Section 3.5 (Error Checking in Function Calls). The other parameters are then processed using any remaining arguments. 



