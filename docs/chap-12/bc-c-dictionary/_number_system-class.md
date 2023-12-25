**number** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink> contains <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> which represent mathematical numbers. The <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink> and <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> are *disjoint subtypes* of <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> tests for numerical equality. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, when its arguments are both <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>, tests that they have both the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and numerical value. Two <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> that are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> or <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> are not necessarily the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 



**Notes:** 



Common Lisp differs from mathematics on some naming issues. In mathematics, the set of real numbers is traditionally described as a subset of the complex numbers, but in Common Lisp, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> are disjoint. The Common Lisp type which includes all mathematical complex numbers is called <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>. The reasons for these differences include historical precedent, compatibility with most other popular computer languages, and various issues of time and space efficiency. 



