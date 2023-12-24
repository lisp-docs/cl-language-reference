 



If the result of any computation would be a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> number whose real part is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> and whose imaginary part is zero, the result is converted to the <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> which is the real part. This rule does not apply to <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> numbers whose parts are <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks>. For example, #C(5 0) and 5 are not *different objects* in Common Lisp(they are always the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>); #C(5.0 0.0) and 



5\.0 are always *different objects* in Common Lisp (they are never the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, although they are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> and <ClLinks styled={true} term={"="}><b>=</b></ClLinks>). 



