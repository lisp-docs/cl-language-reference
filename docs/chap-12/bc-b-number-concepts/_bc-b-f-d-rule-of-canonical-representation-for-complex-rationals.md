 



If the result of any computation would be a <ClLinks  term={"complex"}><i>complex</i></ClLinks> number whose real part is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks> and whose imaginary part is zero, the result is converted to the <ClLinks  term={"rational"}><i>rational</i></ClLinks> which is the real part. This rule does not apply to <ClLinks  term={"complex"}><i>complex</i></ClLinks> numbers whose parts are <ClLinks  term={"float"}><i>floats</i></ClLinks>. For example, #C(5 0) and 5 are not *different objects* in Common Lisp(they are always the <ClLinks  term={"same"}><i>same</i></ClLinks> under <ClLinks  term={"eql"}><b>eql</b></ClLinks>); #C(5.0 0.0) and 



5\.0 are always *different objects* in Common Lisp (they are never the <ClLinks  term={"same"}><i>same</i></ClLinks> under <ClLinks  term={"eql"}><b>eql</b></ClLinks>, although they are the <ClLinks  term={"same"}><i>same</i></ClLinks> under <ClLinks  term={"equalp"}><b>equalp</b></ClLinks> and <ClLinks  term={"="}><b>=</b></ClLinks>). 



