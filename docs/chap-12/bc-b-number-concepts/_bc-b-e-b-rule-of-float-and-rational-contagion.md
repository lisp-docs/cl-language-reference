 



When <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks> and <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> are combined by a numerical function, the <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> is first converted to a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the same format. For <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> such as <ClLinks styled={true} term={"+"}><b>+</b></ClLinks> that take more than two arguments, it is permitted that part of the operation be carried out exactly using <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks> and the rest be done using floating-point arithmetic. 



When <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks> and <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> are compared by a numerical function, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> is effectively called to convert the <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> to a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> and then an exact comparison is performed. In the case of <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> numbers, the real and imaginary parts are effectively handled individually. 







 



 



