**2.3.1.1 Potential Numbers as Tokens** 

To allow implementors and future Common Lisp standards to extend the syntax of numbers, a syntax for *potential numbers* is defined that is more general than the syntax for numbers. A *token* is a *potential number* if it satisfies all of the following requirements: 

1\. The \<i\>token\</i\> consists entirely of \<i\>digits\</i\>, \<i\>signs\</i\>, \<i\>ratio markers\</i\>, decimal points (.), extension characters (\<i\>\<sup\>∧\</sup\>\</i\> or ), and number markers. A number marker is a letter. Whether a letter may be treated as a number marker depends on context, but no letter that is adjacent to another letter may ever be treated as a number marker. \<i\>Exponent markers\</i\> are number markers. 

2\. The *token* contains at least one digit. Letters may be considered to be digits, depending on the *current input base*, but only in *tokens* containing no decimal points. 

3\. The \<i\>token\</i\> begins with a \<i\>digit\</i\>, \<i\>sign\</i\>, decimal point, or extension character, but not a \<i\>package marker\</i\> . The syntax involving a leading \<i\>package marker\</i\> followed by a \<i\>potential number\</i\> is not well-defined. The consequences of the use of notation such as :1, :1/2, and :2\<i\>\<sup\>∧\</sup\>\</i\>3 in a position where an expression appropriate for \<b\>read\</b\> is expected are unspecified.  



4\. The *token* does not end with a sign. 

If a *potential number* has number syntax, a *number* of the appropriate type is constructed and returned, if the *number* is representable in an implementation. A *number* will not be representable in an implementation if it is outside the boundaries set by the *implementation-dependent* constants for *numbers*. For example, specifying too large or too small an exponent for a *float* may make the *number* impossible to represent in the implementation. A *ratio* with denominator zero (such as -35/000) is not represented in any implementation. When a *token* with the syntax of a number cannot be converted to an internal *number* , an error of *type* **reader-error** is signaled. An error must not be signaled for specifying too many significant digits for a *float*; a truncated or rounded value should be produced. 

If there is an ambiguity as to whether a letter should be treated as a digit or as a number marker, the letter is treated as a digit. 

