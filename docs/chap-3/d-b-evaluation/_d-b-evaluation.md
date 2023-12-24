 



*Execution* of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> can be accomplished by a variety of means ranging from direct interpretation of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> representing a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> to invocation of *compiled code* produced by a <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> . 



<ClLinks styled={true} term={"evaluation"}><i>Evaluation</i></ClLinks> is the process by which a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> is *executed* in Common Lisp. The mechanism of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> is manifested both implicitly through the effect of the *Lisp read-eval-print loop*, and explicitly through the presence of the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks>, <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>, <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, and <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>. Any of these facilities might share the same execution strategy, or each might use a different one. 



The behavior of a *conforming program* processed by <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> and by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> might differ; see Section 3.2.2.3 (Semantic Constraints). 



<ClLinks styled={true} term={"evaluation"}><i>Evaluation</i></ClLinks> can be understood in terms of a model in which an interpreter recursively traverses a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> performing each step of the computation as it goes. This model, which describes the semantics of Common Lisp <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks>, is described in Section 3.1.2 (The Evaluation Model). 



