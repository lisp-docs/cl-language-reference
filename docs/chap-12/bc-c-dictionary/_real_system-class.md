**real** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink> includes all <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> that represent mathematical real numbers, though there are mathematical real numbers (*e.g.*, irrational numbers) that do not have an exact representation in Common Lisp. Only *reals* can be ordered using the &lt;, &gt;, &lt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink>, and &gt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink> functions. 



The <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> and <DictionaryLink  term={"float"}><b>float</b></DictionaryLink> are *disjoint subtypes* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(real [*lower-limit* [*upper-limit*]]) 







 



 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the *reals* on the interval described by *lower-limit* and *upper-limit*. 



