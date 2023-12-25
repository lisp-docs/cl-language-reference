 



If the result of any computation would be a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> number whose real part is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> and whose imaginary part is zero, the result is converted to the <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> which is the real part. This rule does not apply to <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> numbers whose parts are <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm>. For example, #C(5 0) and 5 are not *different objects* in Common Lisp(they are always the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>); #C(5.0 0.0) and 



5\.0 are always *different objects* in Common Lisp (they are never the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, although they are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> and <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>). 



