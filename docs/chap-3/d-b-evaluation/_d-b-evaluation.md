**3.1 Evaluation** 

*Execution* of *code* can be accomplished by a variety of means ranging from direct interpretation of a *form* representing a *program* to invocation of *compiled code* produced by a *compiler* . 

*Evaluation* is the process by which a *program* is *executed* in Common Lisp. The mechanism of *evaluation* is manifested both implicitly through the effect of the *Lisp read-eval-print loop*, and explicitly through the presence of the *functions* **eval**, **compile**, **compile-file**, and **load**. Any of these facilities might share the same execution strategy, or each might use a different one. 

The behavior of a *conforming program* processed by **eval** and by **compile-file** might differ; see Section 3.2.2.3 (Semantic Constraints). 

*Evaluation* can be understood in terms of a model in which an interpreter recursively traverses a *form* performing each step of the computation as it goes. This model, which describes the semantics of Common Lisp *programs*, is described in Section 3.1.2 (The Evaluation Model). 

