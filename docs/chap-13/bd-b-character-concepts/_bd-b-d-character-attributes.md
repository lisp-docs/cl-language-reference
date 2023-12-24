 



<ClLinks styled={true} term={"character"}><i>Characters</i></ClLinks> have only one *standardized attribute*: a <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. A <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ’s <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> is a non-negative *integer* . This <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> is composed from a character <ClLinks styled={true} term={"script"}><i>script</i></ClLinks> and a character label in an *implementation dependent* way. See the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"char-code"}><b>char-code</b></ClLinks> and <ClLinks styled={true} term={"code-char"}><b>code-char</b></ClLinks>. 



Additional, *implementation-defined attributes* of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are also permitted so that, for example, two <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> with the same <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> may differ in some other, <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> way. 



For any *implementation-defined attribute* there is a distinguished value called the <ClLinks styled={true} term={"null"}><i>null</i></ClLinks> value for that <ClLinks styled={true} term={"attribute"}><i>attribute</i></ClLinks>. A <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> for which each *implementation-defined attribute* has the null value for that <ClLinks styled={true} term={"attribute"}><i>attribute</i></ClLinks> is called a *simple character* . If the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> has no *implementation-defined attributes*, then all <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are *simple characters*. 







 



 



