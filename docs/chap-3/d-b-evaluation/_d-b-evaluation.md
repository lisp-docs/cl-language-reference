 



*Execution* of <ClLinks  term={"code"}><i>code</i></ClLinks> can be accomplished by a variety of means ranging from direct interpretation of a <ClLinks  term={"form"}><i>form</i></ClLinks> representing a <ClLinks  term={"program"}><i>program</i></ClLinks> to invocation of <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> produced by a <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> . 



<ClLinks  term={"evaluation"}><i>Evaluation</i></ClLinks> is the process by which a <ClLinks  term={"program"}><i>program</i></ClLinks> is *executed* in Common Lisp. The mechanism of <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> is manifested both implicitly through the effect of the *Lisp read-eval-print loop*, and explicitly through the presence of the <ClLinks  term={"function"}><i>functions</i></ClLinks> <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink>, <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, and <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. Any of these facilities might share the same execution strategy, or each might use a different one. 



The behavior of a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> processed by <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> and by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> might differ; see Section 3.2.2.3 (Semantic Constraints). 



<ClLinks  term={"evaluation"}><i>Evaluation</i></ClLinks> can be understood in terms of a model in which an interpreter recursively traverses a <ClLinks  term={"form"}><i>form</i></ClLinks> performing each step of the computation as it goes. This model, which describes the semantics of Common Lisp <ClLinks  term={"program"}><i>programs</i></ClLinks>, is described in Section 3.1.2 (The Evaluation Model). 



