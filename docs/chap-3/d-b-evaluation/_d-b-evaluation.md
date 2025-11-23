*Execution* of <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> can be accomplished by a variety of means ranging from direct interpretation of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> representing a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> to invocation of <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> produced by a <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> .
<GlossaryTerm  term={"evaluation"}><i>Evaluation</i></GlossaryTerm> is the process by which a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> is *executed* in Common Lisp. The mechanism of <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> is manifested both implicitly through the effect of the *Lisp read-eval-print loop*, and explicitly through the presence of the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink>, <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, and <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. Any of these facilities might share the same execution strategy, or each might use a different one.



The behavior of a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> processed by <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> and by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> might differ; see Section 3.2.2.3 (Semantic Constraints). 



<GlossaryTerm  term={"evaluation"}><i>Evaluation</i></GlossaryTerm> can be understood in terms of a model in which an interpreter recursively traverses a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> performing each step of the computation as it goes. This model, which describes the semantics of Common Lisp <GlossaryTerm  term={"program"}><i>programs</i></GlossaryTerm>, is described in Section 3.1.2 (The Evaluation Model). 



