**upgraded-complex-part-type** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks> *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a *type specifier* . 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an *environment object*. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, denoting the *null lexical environment* and the and current *global environment*. 



*upgraded-typespec*—a *type specifier* . 



**Description:** 



<ClLinks  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks> returns the part type of the most specialized <ClLinks  term={"complex"}><i>complex</i></ClLinks> number representation that can hold parts of *type typespec*. 



The *typespec* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of (and possibly *type equivalent* to) the *upgraded-typespec*. 



The purpose of <ClLinks  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks> is to reveal how an implementation does its *upgrading*. 



**See Also:** 



<ClLinks  term={"complex"}><b>complex</b></ClLinks> (<ClLinks  term={"function"}><i>function</i></ClLinks> and <ClLinks  term={"type"}><i>type</i></ClLinks>) 



**Notes:** 



