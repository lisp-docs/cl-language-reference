**short-float, single-float, double-float, long-float** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>: <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



<DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>: <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



<DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>: <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



<DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>: <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



For the four defined <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>, it is true that intermediate between the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink> are the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>. The precise definition of these categories is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. The precision (measured in “bits”, computed as *p* log<sub>2</sub>*b*) and the exponent size (also measured in “bits,” computed as log<sub>2</sub>(*n* + 1), where *n* is the maximum exponent value) is recommended to be at least as great as the values in Figure 12–12. Each of the defined <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> might or might not have a minus zero. 



|**Format Minimum Precision Minimum Exponent Size**|

| :- |

|<p>Short 13 bits 5 bits </p><p>Single 24 bits 8 bits </p><p>Double 50 bits 8 bits </p><p>Long 50 bits 8 bits</p>|





**Figure 12–12. Recommended Minimum Floating-Point Precision and Exponent Size** 



There can be fewer than four internal representations for <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm>. If there are fewer distinct representations, the following rules apply: 



– If there is only one, it is the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>. In this representation, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is simultaneously of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>, and <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. 



– Two internal representations can be arranged in either of the following ways: 







 



 



*•* Two <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> are provided: <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is simultaneously of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>, and <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. 



*•* Two <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> are provided: <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is simultaneously of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>, or <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink> and <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. 



– Three internal representations can be arranged in either of the following ways: 



*•* Three <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> are provided: <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, and <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can simultaneously be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink> and <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. 



*•* Three <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> are provided: <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>, and <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can simultaneously be of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(short-float [*short-lower-limit* [*short-upper-limit*]]) 



(single-float [*single-lower-limit* [*single-upper-limit*]]) 



(double-float [*double-lower-limit* [*double-upper-limit*]]) 



(long-float [*long-lower-limit* [*long-upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*short-lower-limit*, *short-upper-limit*—*interval designators* for <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



*single-lower-limit*, *single-upper-limit*—*interval designators* for <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



*double-lower-limit*, *double-upper-limit*—*interval designators* for <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



*long-lower-limit*, *long-upper-limit*—*interval designators* for <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



Each of these denotes the set of <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm> of the indicated <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that are on the interval specified by the *interval designators*. 







 



 



