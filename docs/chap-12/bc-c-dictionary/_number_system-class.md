**number** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"number"}><b>number</b></ClLinks> contains <ClLinks  term={"object"}><i>objects</i></ClLinks> which represent mathematical numbers. The <ClLinks  term={"type"}><i>types</i></ClLinks> <ClLinks  term={"real"}><b>real</b></ClLinks> and <ClLinks  term={"complex"}><b>complex</b></ClLinks> are *disjoint subtypes* of <ClLinks  term={"number"}><b>number</b></ClLinks>. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"="}><b>=</b></ClLinks> tests for numerical equality. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"eql"}><b>eql</b></ClLinks>, when its arguments are both <ClLinks  term={"number"}><i>numbers</i></ClLinks>, tests that they have both the same <ClLinks  term={"type"}><i>type</i></ClLinks> and numerical value. Two <ClLinks  term={"number"}><i>numbers</i></ClLinks> that are the <ClLinks  term={"same"}><i>same</i></ClLinks> under <ClLinks  term={"eql"}><b>eql</b></ClLinks> or <ClLinks  term={"="}><b>=</b></ClLinks> are not necessarily the <ClLinks  term={"same"}><i>same</i></ClLinks> under <ClLinks  term={"eq"}><b>eq</b></ClLinks>. 



**Notes:** 



Common Lisp differs from mathematics on some naming issues. In mathematics, the set of real numbers is traditionally described as a subset of the complex numbers, but in Common Lisp, the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"real"}><b>real</b></ClLinks> and the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks> are disjoint. The Common Lisp type which includes all mathematical complex numbers is called <ClLinks  term={"number"}><b>number</b></ClLinks>. The reasons for these differences include historical precedent, compatibility with most other popular computer languages, and various issues of time and space efficiency. 



