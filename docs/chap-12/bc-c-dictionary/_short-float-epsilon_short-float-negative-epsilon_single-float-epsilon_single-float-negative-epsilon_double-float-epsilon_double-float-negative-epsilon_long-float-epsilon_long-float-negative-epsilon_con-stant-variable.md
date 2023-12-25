**short-float-epsilon, short-float-negative-epsilon, single-float-epsilon, single-float-negative-epsilon, double-float-epsilon, double-float-negative-epsilon, long-float-epsilon, long-float-negative-epsilon** *Con stant Variable* 



**Constant Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The value of each of the constants <DictionaryLink styled={true} term={"short-float-epsilon"}><b>short-float-epsilon</b></DictionaryLink>, <DictionaryLink styled={true} term={"single-float-epsilon"}><b>single-float-epsilon</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float-epsilon"}><b>double-float-epsilon</b></DictionaryLink>, and <DictionaryLink styled={true} term={"long-float-epsilon"}><b>long-float-epsilon</b></DictionaryLink> is the smallest positive *float ε* of the given format, such that the following expression is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when evaluated: 







 



 



(not (= (float 1 *ε*) (+ (float 1 *ε*) *ε*))) 



The value of each of the constants <DictionaryLink styled={true} term={"short-float-negative-epsilon"}><b>short-float-negative-epsilon</b></DictionaryLink>, <DictionaryLink styled={true} term={"single-float-negative-epsilon"}><b>single-float-negative-epsilon</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float-negative-epsilon"}><b>double-float-negative-epsilon</b></DictionaryLink>, and <DictionaryLink styled={true} term={"long-float-negative-epsilon"}><b>long-float-negative-epsilon</b></DictionaryLink> is the smallest positive *float ε* of the given format, such that the following expression is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when evaluated: 



(not (= (float 1 *ε*) (- (float 1 *ε*) *ε*))) 



