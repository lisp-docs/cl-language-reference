 



When a generic function or any of its methods mentions **&amp;key** in a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, the specific set of keyword arguments accepted by the generic function varies according to the applicable methods. The set of keyword arguments accepted by the generic function for a particular call is the union of the keyword arguments accepted by all applicable methods and the keyword arguments mentioned after **&amp;key** in the generic function definition, if any. A method that has **&amp;rest** but not **&amp;key** does not affect the set of acceptable keyword arguments. If the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any applicable method or of the generic function definition contains **&amp;allow-other-keys**, all keyword arguments are accepted by the generic function. 



The <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> congruence rules require that each method accept all of the keyword arguments mentioned after **&amp;key** in the generic function definition, by accepting them explicitly, by specifying **&amp;allow-other-keys**, or by specifying **&amp;rest** but not **&amp;key**. Each method can accept additional keyword arguments of its own, in addition to the keyword arguments mentioned in the generic function definition. 



If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is passed a keyword argument that no applicable method accepts, an error should be signaled; see Section 3.5 (Error Checking in Function Calls). 



