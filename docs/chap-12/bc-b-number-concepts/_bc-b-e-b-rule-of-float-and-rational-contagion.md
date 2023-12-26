 



When <ClLinks  term={"rational"}><i>rationals</i></ClLinks> and <ClLinks  term={"float"}><i>floats</i></ClLinks> are combined by a numerical function, the <ClLinks  term={"rational"}><i>rational</i></ClLinks> is first converted to a <ClLinks  term={"float"}><i>float</i></ClLinks> of the same format. For <ClLinks  term={"function"}><i>functions</i></ClLinks> such as <ClLinks  term={"+"}><b>+</b></ClLinks> that take more than two arguments, it is permitted that part of the operation be carried out exactly using <ClLinks  term={"rational"}><i>rationals</i></ClLinks> and the rest be done using floating-point arithmetic. 



When <ClLinks  term={"rational"}><i>rationals</i></ClLinks> and <ClLinks  term={"float"}><i>floats</i></ClLinks> are compared by a numerical function, the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> is effectively called to convert the <ClLinks  term={"float"}><i>float</i></ClLinks> to a <ClLinks  term={"rational"}><i>rational</i></ClLinks> and then an exact comparison is performed. In the case of <ClLinks  term={"complex"}><i>complex</i></ClLinks> numbers, the real and imaginary parts are effectively handled individually. 







 



 



