 



To allow implementors and future Common Lisp standards to extend the syntax of numbers, a syntax for *potential numbers* is defined that is more general than the syntax for numbers. A <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is a *potential number* if it satisfies all of the following requirements: 



1\. The <i>token</i> consists entirely of <i>digits</i>, <i>signs</i>, <i>ratio markers</i>, decimal points (.), extension characters (<i><sup>∧</sup></i> or ), and number markers. A number marker is a letter. Whether a letter may be treated as a number marker depends on context, but no letter that is adjacent to another letter may ever be treated as a number marker. <i>Exponent markers</i> are number markers. 



2\. The <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> contains at least one digit. Letters may be considered to be digits, depending on the *current input base*, but only in <GlossaryTerm styled={true} term={"token"}><i>tokens</i></GlossaryTerm> containing no decimal points. 



3\. The <i>token</i> begins with a <i>digit</i>, <i>sign</i>, decimal point, or extension character, but not a <i>package marker</i> . The syntax involving a leading <i>package marker</i> followed by a <i>potential number</i> is not well-defined. The consequences of the use of notation such as :1, :1/2, and :2<i><sup>∧</sup></i>3 in a position where an expression appropriate for <b>read</b> is expected are unspecified.  







4\. The <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> does not end with a sign. 



If a *potential number* has number syntax, a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> of the appropriate type is constructed and returned, if the <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is representable in an implementation. A <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> will not be representable in an implementation if it is outside the boundaries set by the <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> constants for <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>. For example, specifying too large or too small an exponent for a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> may make the <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> impossible to represent in the implementation. A <GlossaryTerm styled={true} term={"ratio"}><i>ratio</i></GlossaryTerm> with denominator zero (such as -35/000) is not represented in any implementation. When a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> with the syntax of a number cannot be converted to an internal <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> , an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled. An error must not be signaled for specifying too many significant digits for a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>; a truncated or rounded value should be produced. 



If there is an ambiguity as to whether a letter should be treated as a digit or as a number marker, the letter is treated as a digit. 



