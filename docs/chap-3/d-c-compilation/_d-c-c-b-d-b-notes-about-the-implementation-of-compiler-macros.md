

 

Although it is technically permissible, as described above, for **eval** to treat *compiler macros* in the same situations as *compiler* might, this is not necessarily a good idea in *interpreted implementations*. 

*Compiler macros* exist for the purpose of trading compile-time speed for run-time speed. Programmers who write *compiler macros* tend to assume that the *compiler macros* can take more time than normal *functions* and *macros* in order to produce code which is especially optimal for use at run time. Since **eval** in an *interpreted implementation* might perform semantic analysis of the same form multiple times, it might be inefficient in general for the *implementation* to choose to call *compiler macros* on every such *evaluation*. 

Nevertheless, the decision about what to do in these situations is left to each *implementation*. Evaluation and Compilation **3–17**





