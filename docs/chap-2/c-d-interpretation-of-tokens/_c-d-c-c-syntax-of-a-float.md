 

*Floats* can be written in either decimal fraction or computerized scientific notation: an optional sign, then a non-empty sequence of digits with an embedded decimal point, then an optional decimal exponent specification. If there is no exponent specifier, then the decimal point is required, and there must be digits after it. The exponent specifier consists of an *exponent marker* , an optional sign, and a non-empty sequence of digits. If no exponent specifier is present, or if the *exponent marker* e (or E) is used, then the format specified by **\*read-default-float-format\*** is used. See Figure 2–9. 

An implementation may provide one or more kinds of *float* that collectively make up the *type* **float**. The letters s, f, d, and l (or their respective uppercase equivalents) explicitly specify the use of the *types* **short-float**, **single-float**, **double-float**, and **long-float**, respectively. 

The internal format used for an external representation depends only on the *exponent marker* , and not on the number of decimal digits in the external representation. 

Figure 2–14 contains examples of notations for *floats*:  



|&#60;p&#62;0\.0 ;Floating-point zero in default format &#60;/p&#62;&#60;p&#62;0E0 ;As input, this is also floating-point zero in default format. ;As output, this would appear as 0.0. &#60;/p&#62;&#60;p&#62;0e0 ;As input, this is also floating-point zero in default format. ;As output, this would appear as 0.0. &#60;/p&#62;&#60;p&#62;-.0 ;As input, this might be a zero or a minus zero, &#60;/p&#62;&#60;p&#62;; depending on whether the implementation supports &#60;/p&#62;&#60;p&#62;; a distinct minus zero. &#60;/p&#62;&#60;p&#62;;As output, 0.0 is zero and -0.0 is minus zero. &#60;/p&#62;&#60;p&#62;0\. ;On input, the integer zero—*not* a floating-point number! ;Whether this appears as 0 or 0. on output depends &#60;/p&#62;&#60;p&#62;;on the *value* of **\*print-radix\***. &#60;/p&#62;&#60;p&#62;0\.0s0 ;A floating-point zero in short format &#60;/p&#62;&#60;p&#62;0s0 ;As input, this is a floating-point zero in short format. ;As output, such a zero would appear as 0.0s0 &#60;/p&#62;&#60;p&#62;; (or as 0.0 if **short-float** was the default format). &#60;/p&#62;&#60;p&#62;6\.02E+23 ;Avogadro’s number, in default format &#60;/p&#62;&#60;p&#62;602E+21 ;Also Avogadro’s number, in default format&#60;/p&#62;|
| :- |


**Figure 2–14. Examples of Floating-point numbers** 

For information on how *floats* are printed, see Section 22.1.3.1.3 (Printing Floats). 

