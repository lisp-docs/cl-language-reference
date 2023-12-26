**number** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"number"}><b>number</b></DictionaryLink> contains <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> which represent mathematical numbers. The <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink> and <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> are *disjoint subtypes* of <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <ClLinks  term={"="}><b>=</b></ClLinks> tests for numerical equality. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, when its arguments are both <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm>, tests that they have both the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> and numerical value. Two <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> that are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> or <ClLinks  term={"="}><b>=</b></ClLinks> are not necessarily the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>. 



**Notes:** 



Common Lisp differs from mathematics on some naming issues. In mathematics, the set of real numbers is traditionally described as a subset of the complex numbers, but in Common Lisp, the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink> and the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> are disjoint. The Common Lisp type which includes all mathematical complex numbers is called <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>. The reasons for these differences include historical precedent, compatibility with most other popular computer languages, and various issues of time and space efficiency. 



