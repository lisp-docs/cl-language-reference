
 



Although it is technically permissible, as described above, for <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> to treat *compiler macros* in the same situations as <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> might, this is not necessarily a good idea in *interpreted implementations*. 



*Compiler macros* exist for the purpose of trading compile-time speed for run-time speed. Programmers who write *compiler macros* tend to assume that the *compiler macros* can take more time than normal <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> in order to produce code which is especially optimal for use at run time. Since <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> in an *interpreted implementation* might perform semantic analysis of the same form multiple times, it might be inefficient in general for the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to choose to call *compiler macros* on every such <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. 



Nevertheless, the decision about what to do in these situations is left to each <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. Evaluation and 











