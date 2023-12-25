**cons** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>, <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is a compound <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> having two components, called the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> . These form a *dotted pair* . Each component can be any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(cons [*car-typespec* [*cdr-typespec*]]) 



**Compound Type Specifier Arguments:** 



*car-typespec*—a *type specifier* , or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. The default is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



*cdr-typespec*—a *type specifier* , or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. The default is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the set of *conses* whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is constrained to be of *type car-typespec* and whose <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> is constrained to be of *type cdr-typespec*. (If either *car-typespec* or *cdr-typespec* is **\***, it is as if the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> had been denoted.) 



**See Also:** 



Section 2.4.1 (Left-Parenthesis), Section 22.1.3.5 (Printing Lists and Conses) 



