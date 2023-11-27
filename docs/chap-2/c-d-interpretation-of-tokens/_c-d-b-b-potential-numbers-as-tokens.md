 

To allow implementors and future Common Lisp standards to extend the syntax of numbers, a syntax for *potential numbers* is defined that is more general than the syntax for numbers. A *token* is a *potential number* if it satisfies all of the following requirements: 

1\. The &#60;i&#62;token&#60;/i&#62; consists entirely of &#60;i&#62;digits&#60;/i&#62;, &#60;i&#62;signs&#60;/i&#62;, &#60;i&#62;ratio markers&#60;/i&#62;, decimal points (.), extension characters (&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; or ), and number markers. A number marker is a letter. Whether a letter may be treated as a number marker depends on context, but no letter that is adjacent to another letter may ever be treated as a number marker. &#60;i&#62;Exponent markers&#60;/i&#62; are number markers. 

2\. The *token* contains at least one digit. Letters may be considered to be digits, depending on the *current input base*, but only in *tokens* containing no decimal points. 

3\. The &#60;i&#62;token&#60;/i&#62; begins with a &#60;i&#62;digit&#60;/i&#62;, &#60;i&#62;sign&#60;/i&#62;, decimal point, or extension character, but not a &#60;i&#62;package marker&#60;/i&#62; . The syntax involving a leading &#60;i&#62;package marker&#60;/i&#62; followed by a &#60;i&#62;potential number&#60;/i&#62; is not well-defined. The consequences of the use of notation such as :1, :1/2, and :2&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;3 in a position where an expression appropriate for &#60;b&#62;read&#60;/b&#62; is expected are unspecified.  



4\. The *token* does not end with a sign. 

If a *potential number* has number syntax, a *number* of the appropriate type is constructed and returned, if the *number* is representable in an implementation. A *number* will not be representable in an implementation if it is outside the boundaries set by the *implementation-dependent* constants for *numbers*. For example, specifying too large or too small an exponent for a *float* may make the *number* impossible to represent in the implementation. A *ratio* with denominator zero (such as -35/000) is not represented in any implementation. When a *token* with the syntax of a number cannot be converted to an internal *number* , an error of *type* **reader-error** is signaled. An error must not be signaled for specifying too many significant digits for a *float*; a truncated or rounded value should be produced. 

If there is an ambiguity as to whether a letter should be treated as a digit or as a number marker, the letter is treated as a digit. 

