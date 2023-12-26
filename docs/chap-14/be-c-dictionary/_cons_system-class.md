**cons** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>, <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is a compound <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> having two components, called the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> and <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> . These form a <GlossaryTerm styled={true} term={"dotted pair"}><i>dotted pair</i></GlossaryTerm> . Each component can be any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(cons [*car-typespec* [*cdr-typespec*]]) 



**Compound Type Specifier Arguments:** 



*car-typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*cdr-typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the set of *conses* whose <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> is constrained to be of *type car-typespec* and whose <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> is constrained to be of *type cdr-typespec*. (If either *car-typespec* or *cdr-typespec* is **\***, it is as if the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> had been denoted.) 



**See Also:** 



Section 2.4.1 (Left-Parenthesis), Section 22.1.3.5 (Printing Lists and Conses) 



