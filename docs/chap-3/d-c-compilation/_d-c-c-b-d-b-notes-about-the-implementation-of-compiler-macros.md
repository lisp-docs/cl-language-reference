
 



Although it is technically permissible, as described above, for <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> to treat <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> in the same situations as <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> might, this is not necessarily a good idea in <GlossaryTerm styled={true} term={"interpreted implementation"}><i>interpreted implementations</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"compiler macro"}><i>Compiler macros</i></GlossaryTerm> exist for the purpose of trading compile-time speed for run-time speed. Programmers who write <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> tend to assume that the <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> can take more time than normal <ClLinks  term={"function"}><i>functions</i></ClLinks> and <ClLinks  term={"macro"}><i>macros</i></ClLinks> in order to produce code which is especially optimal for use at run time. Since <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> in an <GlossaryTerm styled={true} term={"interpreted implementation"}><i>interpreted implementation</i></GlossaryTerm> might perform semantic analysis of the same form multiple times, it might be inefficient in general for the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to choose to call <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> on every such <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>. 



Nevertheless, the decision about what to do in these situations is left to each <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. Evaluation and 











