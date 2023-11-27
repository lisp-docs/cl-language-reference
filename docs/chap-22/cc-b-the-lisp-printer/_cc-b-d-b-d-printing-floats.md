

 

If the magnitude of the &#60;i&#62;float&#60;/i&#62; is either zero or between 10&#60;sup&#62;&#60;i&#62;−&#60;/i&#62;3&#60;/sup&#62;(inclusive) and 10&#60;sup&#62;7&#60;/sup&#62;(exclusive), it is printed as the integer part of the number, then a decimal point, followed by the fractional part of the number; there is always at least one digit on each side of the decimal point. If the sign of the number (as determined by &#60;b&#62;float-sign&#60;/b&#62;) is negative, then a minus sign is printed before the number. If the format of the number does not match that specified by &#60;b&#62;*read-default-float-format*&#60;/b&#62;, then the &#60;i&#62;exponent marker&#60;/i&#62; for that format and the digit 0 are also printed. For example, the base of the natural logarithms as a &#60;i&#62;short float&#60;/i&#62; might be printed as 2.71828S0. 

For non-zero magnitudes outside of the range 10&#60;sup&#62;&#60;i&#62;−&#60;/i&#62;3&#60;/sup&#62;to 10&#60;sup&#62;7&#60;/sup&#62;, a &#60;i&#62;float&#60;/i&#62; is printed in computerized scientific notation. The representation of the number is scaled to be between 1 (inclusive) and 10 (exclusive) and then printed, with one digit before the decimal point and at least one digit after the decimal point. Next the &#60;i&#62;exponent marker&#60;/i&#62; for the format is printed, except that if the format of the number matches that specified by &#60;b&#62;*read-default-float-format*&#60;/b&#62;, then the &#60;i&#62;exponent marker&#60;/i&#62; E is used. Finally, the power of ten by which the fraction must be multiplied to equal the original number is printed as a decimal integer. For example, Avogadro’s number as a &#60;i&#62;short float&#60;/i&#62; is printed as 6.02S23. 

For related information about the syntax of a *float*, see Section 2.3.2.2 (Syntax of a Float).

 