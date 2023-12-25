 



The presence of a *compiler macro* definition for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> indicates that it is desirable for the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> to use the expansion of the *compiler macro* instead of the original *function form* or *macro form*. However, no language processor (compiler, evaluator, or other code walker) is ever required to actually invoke *compiler macro functions*, or to make use of the resulting expansion if it does invoke a *compiler macro function*. 



When the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> encounters a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> during processing that represents a call to a *compiler macro name* (that is not declared <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>), the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> might expand the *compiler macro*, and might use the expansion in place of the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



When <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> encounters a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> during processing that represents a call to a *compiler macro name* (that is not declared <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>), <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> might expand the *compiler macro*, and might use the expansion in place of the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



There are two situations in which a *compiler macro* definition must not be applied by any language processor: 



*•* The global function name binding associated with the compiler macro is shadowed by a lexical binding of the function name. 



*•* The function name has been declared or proclaimed <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink> and the call form appears within the scope of the declaration. 



It is unspecified whether *compiler macros* are expanded or used in any other situations.
 