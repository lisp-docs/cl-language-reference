**number** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"number"}><b>number</b></ClLinks> contains <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> which represent mathematical numbers. The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"real"}><b>real</b></ClLinks> and <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> are *disjoint subtypes* of <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"="}><b>=</b></ClLinks> tests for numerical equality. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, when its arguments are both <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>, tests that they have both the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and numerical value. Two <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> that are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> or <ClLinks styled={true} term={"="}><b>=</b></ClLinks> are not necessarily the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>. 



**Notes:** 



Common Lisp differs from mathematics on some naming issues. In mathematics, the set of real numbers is traditionally described as a subset of the complex numbers, but in Common Lisp, the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"real"}><b>real</b></ClLinks> and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> are disjoint. The Common Lisp type which includes all mathematical complex numbers is called <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>. The reasons for these differences include historical precedent, compatibility with most other popular computer languages, and various issues of time and space efficiency. 



