
 



If the magnitude of the <i>float</i> is either zero or between 10<sup><i>−</i>3</sup>(inclusive) and 10<sup>7</sup>(exclusive), it is printed as the integer part of the number, then a decimal point, followed by the fractional part of the number; there is always at least one digit on each side of the decimal point. If the sign of the number (as determined by <b>float-sign</b>) is negative, then a minus sign is printed before the number. If the format of the number does not match that specified by <b>*read-default-float-format*</b>, then the <i>exponent marker</i> for that format and the digit 0 are also printed. For example, the base of the natural logarithms as a <i>short float</i> might be printed as 2.71828S0. 



For non-zero magnitudes outside of the range 10<sup><i>−</i>3</sup>to 10<sup>7</sup>, a <i>float</i> is printed in computerized scientific notation. The representation of the number is scaled to be between 1 (inclusive) and 10 (exclusive) and then printed, with one digit before the decimal point and at least one digit after the decimal point. Next the <i>exponent marker</i> for the format is printed, except that if the format of the number matches that specified by <b>*read-default-float-format*</b>, then the <i>exponent marker</i> E is used. Finally, the power of ten by which the fraction must be multiplied to equal the original number is printed as a decimal integer. For example, Avogadro’s number as a <i>short float</i> is printed as 6.02S23. 



For related information about the syntax of a *float*, see Section 2.3.2.2 (Syntax of a Float).
 