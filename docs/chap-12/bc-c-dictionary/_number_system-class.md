**number** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"number"}><b>number</b></DictionaryLink> contains <ClLinks  term={"object"}><i>objects</i></ClLinks> which represent mathematical numbers. The <ClLinks  term={"type"}><i>types</i></ClLinks> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink> and <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> are *disjoint subtypes* of <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"="}><b>=</b></ClLinks> tests for numerical equality. The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, when its arguments are both <ClLinks  term={"number"}><i>numbers</i></ClLinks>, tests that they have both the same <ClLinks  term={"type"}><i>type</i></ClLinks> and numerical value. Two <ClLinks  term={"number"}><i>numbers</i></ClLinks> that are the <ClLinks  term={"same"}><i>same</i></ClLinks> under <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> or <ClLinks  term={"="}><b>=</b></ClLinks> are not necessarily the <ClLinks  term={"same"}><i>same</i></ClLinks> under <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>. 



**Notes:** 



Common Lisp differs from mathematics on some naming issues. In mathematics, the set of real numbers is traditionally described as a subset of the complex numbers, but in Common Lisp, the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink> and the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> are disjoint. The Common Lisp type which includes all mathematical complex numbers is called <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>. The reasons for these differences include historical precedent, compatibility with most other popular computer languages, and various issues of time and space efficiency. 



