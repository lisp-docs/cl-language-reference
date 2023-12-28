 



The top level loop is the Common Lisp mechanism by which the user normally interacts with the Common Lisp system. This loop is sometimes referred to as the *Lisp read-eval-print loop* because it typically consists of an endless loop that reads an expression, evaluates it and prints the results. 



The top level loop is not completely specified; thus the user interface is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. The top level loop prints all values resulting from the evaluation of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Figure 25–1 lists variables that are maintained by the *Lisp read-eval-print loop*. 



|<p>**\* + / -** </p><p>**\*\* ++ //** </p><p>**\*\*\* +++ ///**</p>|

| :- |





**Figure 25–1. Variables maintained by the Read-Eval-Print Loop** 



