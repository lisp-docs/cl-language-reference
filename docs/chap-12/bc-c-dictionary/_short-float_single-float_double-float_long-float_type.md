**short-float, single-float, double-float, long-float** <ClLinks styled={true} term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>: <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>, <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



<ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>: <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>, <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



<ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>: <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>, <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



<ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>: <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>, <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>, <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



For the four defined <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>, it is true that intermediate between the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks> and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks> are the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>. The precise definition of these categories is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. The precision (measured in “bits”, computed as *p* log<sub>2</sub>*b*) and the exponent size (also measured in “bits,” computed as log<sub>2</sub>(*n* + 1), where *n* is the maximum exponent value) is recommended to be at least as great as the values in Figure 12–12. Each of the defined <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks> might or might not have a minus zero. 



|**Format Minimum Precision Minimum Exponent Size**|

| :- |

|<p>Short 13 bits 5 bits </p><p>Single 24 bits 8 bits </p><p>Double 50 bits 8 bits </p><p>Long 50 bits 8 bits</p>|





**Figure 12–12. Recommended Minimum Floating-Point Precision and Exponent Size** 



There can be fewer than four internal representations for <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks>. If there are fewer distinct representations, the following rules apply: 



– If there is only one, it is the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>. In this representation, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is simultaneously of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, and <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. 



– Two internal representations can be arranged in either of the following ways: 







 



 



*•* Two <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> are provided: <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> and <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is simultaneously of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, and <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. 



*•* Two <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> are provided: <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> and <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is simultaneously of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> and <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, or <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks> and <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. 



– Three internal representations can be arranged in either of the following ways: 



*•* Three <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> are provided: <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, and <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can simultaneously be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks> and <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. 



*•* Three <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> are provided: <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, and <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can simultaneously be of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> and <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(short-float [*short-lower-limit* [*short-upper-limit*]]) 



(single-float [*single-lower-limit* [*single-upper-limit*]]) 



(double-float [*double-lower-limit* [*double-upper-limit*]]) 



(long-float [*long-lower-limit* [*long-upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*short-lower-limit*, *short-upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*single-lower-limit*, *single-upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*double-lower-limit*, *double-upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*long-lower-limit*, *long-upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



Each of these denotes the set of <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> of the indicated <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that are on the interval specified by the *interval designators*. 







 



 



