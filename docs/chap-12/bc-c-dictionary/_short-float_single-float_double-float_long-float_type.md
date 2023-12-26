**short-float, single-float, double-float, long-float** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>: <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



<DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>: <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



<DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>: <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



<DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>: <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>, <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



For the four defined <ClLinks  term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>, it is true that intermediate between the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink> and the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink> are the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> and the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>. The precise definition of these categories is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. The precision (measured in “bits”, computed as *p* log<sub>2</sub>*b*) and the exponent size (also measured in “bits,” computed as log<sub>2</sub>(*n* + 1), where *n* is the maximum exponent value) is recommended to be at least as great as the values in Figure 12–12. Each of the defined <ClLinks  term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink> might or might not have a minus zero. 



|**Format Minimum Precision Minimum Exponent Size**|

| :- |

|<p>Short 13 bits 5 bits </p><p>Single 24 bits 8 bits </p><p>Double 50 bits 8 bits </p><p>Long 50 bits 8 bits</p>|





**Figure 12–12. Recommended Minimum Floating-Point Precision and Exponent Size** 



There can be fewer than four internal representations for <ClLinks  term={"float"}><i>floats</i></ClLinks>. If there are fewer distinct representations, the following rules apply: 



– If there is only one, it is the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>. In this representation, an <ClLinks  term={"object"}><i>object</i></ClLinks> is simultaneously of <ClLinks  term={"type"}><i>types</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, and <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>. 



– Two internal representations can be arranged in either of the following ways: 







 



 



*•* Two <ClLinks  term={"type"}><i>types</i></ClLinks> are provided: <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>. An <ClLinks  term={"object"}><i>object</i></ClLinks> is simultaneously of <ClLinks  term={"type"}><i>types</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, and <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>. 



*•* Two <ClLinks  term={"type"}><i>types</i></ClLinks> are provided: <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>. An <ClLinks  term={"object"}><i>object</i></ClLinks> is simultaneously of <ClLinks  term={"type"}><i>types</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, or <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink> and <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>. 



– Three internal representations can be arranged in either of the following ways: 



*•* Three <ClLinks  term={"type"}><i>types</i></ClLinks> are provided: <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, and <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>. An <ClLinks  term={"object"}><i>object</i></ClLinks> can simultaneously be of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink> and <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>. 



*•* Three <ClLinks  term={"type"}><i>types</i></ClLinks> are provided: <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, and <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>. An <ClLinks  term={"object"}><i>object</i></ClLinks> can simultaneously be of <ClLinks  term={"type"}><i>types</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> and <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(short-float [*short-lower-limit* [*short-upper-limit*]]) 



(single-float [*single-lower-limit* [*single-upper-limit*]]) 



(double-float [*double-lower-limit* [*double-upper-limit*]]) 



(long-float [*long-lower-limit* [*long-upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*short-lower-limit*, *short-upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*single-lower-limit*, *single-upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*double-lower-limit*, *double-upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*long-lower-limit*, *long-upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



Each of these denotes the set of <ClLinks  term={"float"}><i>floats</i></ClLinks> of the indicated <ClLinks  term={"type"}><i>type</i></ClLinks> that are on the interval specified by the <GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm>. 







 



 



