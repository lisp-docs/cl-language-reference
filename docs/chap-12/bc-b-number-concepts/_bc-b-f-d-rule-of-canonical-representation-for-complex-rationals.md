 



If the result of any computation would be a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> number whose real part is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> and whose imaginary part is zero, the result is converted to the <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> which is the real part. This rule does not apply to <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> numbers whose parts are <GlossaryTerm  term={"float"}><i>floats</i></GlossaryTerm>. For example, #C(5 0) and 5 are not *different objects* in Common Lisp(they are always the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>); #C(5.0 0.0) and 



5\.0 are always *different objects* in Common Lisp (they are never the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, although they are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> and <DictionaryLink  term={"="}><b>=</b></DictionaryLink>). 



