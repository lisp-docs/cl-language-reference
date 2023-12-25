
 



Although it is technically permissible, as described above, for <ClLinks  term={"eval"}><b>eval</b></ClLinks> to treat *compiler macros* in the same situations as <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> might, this is not necessarily a good idea in *interpreted implementations*. 



*Compiler macros* exist for the purpose of trading compile-time speed for run-time speed. Programmers who write *compiler macros* tend to assume that the *compiler macros* can take more time than normal <ClLinks  term={"function"}><i>functions</i></ClLinks> and <ClLinks  term={"macro"}><i>macros</i></ClLinks> in order to produce code which is especially optimal for use at run time. Since <ClLinks  term={"eval"}><b>eval</b></ClLinks> in an *interpreted implementation* might perform semantic analysis of the same form multiple times, it might be inefficient in general for the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to choose to call *compiler macros* on every such <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>. 



Nevertheless, the decision about what to do in these situations is left to each <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. Evaluation and 











