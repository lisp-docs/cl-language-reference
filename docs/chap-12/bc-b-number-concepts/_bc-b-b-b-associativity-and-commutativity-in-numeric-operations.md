 



For functions that are mathematically associative (and possibly commutative), a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> may process the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> in any manner consistent with associative (and possibly commutative) rearrangement. This does not affect the order in which the <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are *evaluated*; for a discussion of evaluation order, see Section 3.1.2.1.2.3 (Function Forms). What is unspecified is only the order in which the *parameter values* are processed. This implies that <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> may differ in which automatic *coercions* are applied; see Section 12.1.1.2 (Contagion in Numeric Operations). 



A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> can control the order of processing explicitly by separating the operations into separate (possibly nested) <GlossaryTerm styled={true} term={"function form"}><i>function forms</i></GlossaryTerm>, or by writing explicit calls to <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that perform coercions. 



