**real** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink> includes all <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> that represent mathematical real numbers, though there are mathematical real numbers (*e.g.*, irrational numbers) that do not have an exact representation in Common Lisp. Only *reals* can be ordered using the &lt;, &gt;, &lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, and &gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> functions. 



The <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> and <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> are *disjoint subtypes* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(real [*lower-limit* [*upper-limit*]]) 







 



 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the *reals* on the interval described by *lower-limit* and *upper-limit*. 



