 



To allow implementors and future Common Lisp standards to extend the syntax of numbers, a syntax for *potential numbers* is defined that is more general than the syntax for numbers. A <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> is a *potential number* if it satisfies all of the following requirements: 



1\. The <i>token</i> consists entirely of <i>digits</i>, <i>signs</i>, <i>ratio markers</i>, decimal points (.), extension characters (<i><sup>∧</sup></i> or ), and number markers. A number marker is a letter. Whether a letter may be treated as a number marker depends on context, but no letter that is adjacent to another letter may ever be treated as a number marker. <i>Exponent markers</i> are number markers. 



2\. The <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> contains at least one digit. Letters may be considered to be digits, depending on the *current input base*, but only in <ClLinks styled={true} term={"token"}><i>tokens</i></ClLinks> containing no decimal points. 



3\. The <i>token</i> begins with a <i>digit</i>, <i>sign</i>, decimal point, or extension character, but not a <i>package marker</i> . The syntax involving a leading <i>package marker</i> followed by a <i>potential number</i> is not well-defined. The consequences of the use of notation such as :1, :1/2, and :2<i><sup>∧</sup></i>3 in a position where an expression appropriate for <b>read</b> is expected are unspecified.  







4\. The <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> does not end with a sign. 



If a *potential number* has number syntax, a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> of the appropriate type is constructed and returned, if the <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is representable in an implementation. A <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> will not be representable in an implementation if it is outside the boundaries set by the <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> constants for <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>. For example, specifying too large or too small an exponent for a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> may make the <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> impossible to represent in the implementation. A <ClLinks styled={true} term={"ratio"}><i>ratio</i></ClLinks> with denominator zero (such as -35/000) is not represented in any implementation. When a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> with the syntax of a number cannot be converted to an internal <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> , an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"reader-error"}><b>reader-error</b></ClLinks> is signaled. An error must not be signaled for specifying too many significant digits for a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>; a truncated or rounded value should be produced. 



If there is an ambiguity as to whether a letter should be treated as a digit or as a number marker, the letter is treated as a digit. 



