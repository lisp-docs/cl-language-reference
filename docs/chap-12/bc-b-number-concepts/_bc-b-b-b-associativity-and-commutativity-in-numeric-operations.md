 



For functions that are mathematically associative (and possibly commutative), a *conforming implementation* may process the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> in any manner consistent with associative (and possibly commutative) rearrangement. This does not affect the order in which the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are *evaluated*; for a discussion of evaluation order, see Section 3.1.2.1.2.3 (Function Forms). What is unspecified is only the order in which the *parameter values* are processed. This implies that <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> may differ in which automatic *coercions* are applied; see Section 12.1.1.2 (Contagion in Numeric Operations). 



A *conforming program* can control the order of processing explicitly by separating the operations into separate (possibly nested) *function forms*, or by writing explicit calls to <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that perform coercions. 



