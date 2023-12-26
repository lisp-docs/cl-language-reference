 



For functions that are mathematically associative (and possibly commutative), a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> may process the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> in any manner consistent with associative (and possibly commutative) rearrangement. This does not affect the order in which the <ClLinks  term={"argument"}><i>argument</i></ClLinks> 



<ClLinks  term={"form"}><i>forms</i></ClLinks> are *evaluated*; for a discussion of evaluation order, see Section 3.1.2.1.2.3 (Function Forms). What is unspecified is only the order in which the *parameter values* are processed. This implies that <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> may differ in which automatic *coercions* are applied; see Section 12.1.1.2 (Contagion in Numeric Operations). 



A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> can control the order of processing explicitly by separating the operations into separate (possibly nested) <GlossaryTerm styled={true} term={"function form"}><i>function forms</i></GlossaryTerm>, or by writing explicit calls to <ClLinks  term={"function"}><i>functions</i></ClLinks> that perform coercions. 



