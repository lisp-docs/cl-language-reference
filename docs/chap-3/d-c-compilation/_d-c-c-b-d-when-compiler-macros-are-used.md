 



The presence of a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definition for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> indicates that it is desirable for the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> to use the expansion of the <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> instead of the original <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>. However, no language processor (compiler, evaluator, or other code walker) is ever required to actually invoke <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro functions</i></GlossaryTerm>, or to make use of the resulting expansion if it does invoke a <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm>. 



When the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> encounters a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> during processing that represents a call to a *compiler macro name* (that is not declared <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>), the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> might expand the <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>, and might use the expansion in place of the original <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



When <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> encounters a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> during processing that represents a call to a *compiler macro name* (that is not declared <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>), <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> might expand the <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>, and might use the expansion in place of the original <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



There are two situations in which a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definition must not be applied by any language processor: 



*•* The global function name binding associated with the compiler macro is shadowed by a lexical binding of the function name. 


*•* The function name has been declared or proclaimed <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> and the call form appears within the scope of the declaration. 



It is unspecified whether <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> are expanded or used in any other situations.
 
