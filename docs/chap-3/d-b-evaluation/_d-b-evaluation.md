 



*Execution* of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> can be accomplished by a variety of means ranging from direct interpretation of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> representing a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> to invocation of *compiled code* produced by a <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . 



<GlossaryTerm styled={true} term={"evaluation"}><i>Evaluation</i></GlossaryTerm> is the process by which a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> is *executed* in Common Lisp. The mechanism of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> is manifested both implicitly through the effect of the *Lisp read-eval-print loop*, and explicitly through the presence of the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, and <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>. Any of these facilities might share the same execution strategy, or each might use a different one. 



The behavior of a *conforming program* processed by <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> and by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> might differ; see Section 3.2.2.3 (Semantic Constraints). 



<GlossaryTerm styled={true} term={"evaluation"}><i>Evaluation</i></GlossaryTerm> can be understood in terms of a model in which an interpreter recursively traverses a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> performing each step of the computation as it goes. This model, which describes the semantics of Common Lisp <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm>, is described in Section 3.1.2 (The Evaluation Model). 



