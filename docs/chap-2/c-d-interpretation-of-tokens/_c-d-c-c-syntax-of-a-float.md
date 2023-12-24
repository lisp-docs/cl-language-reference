 



<ClLinks styled={true} term={"float"}><i>Floats</i></ClLinks> can be written in either decimal fraction or computerized scientific notation: an optional sign, then a non-empty sequence of digits with an embedded decimal point, then an optional decimal exponent specification. If there is no exponent specifier, then the decimal point is required, and there must be digits after it. The exponent specifier consists of an *exponent marker* , an optional sign, and a non-empty sequence of digits. If no exponent specifier is present, or if the *exponent marker* e (or E) is used, then the format specified by <ClLinks styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></ClLinks> is used. See Figure 2–9. 



An implementation may provide one or more kinds of <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> that collectively make up the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>. The letters s, f, d, and l (or their respective uppercase equivalents) explicitly specify the use of the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, and <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>, respectively. 



The internal format used for an external representation depends only on the *exponent marker* , and not on the number of decimal digits in the external representation. 



Figure 2–14 contains examples of notations for <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks>:  







|<p>0\.0 ;Floating-point zero in default format </p><p>0E0 ;As input, this is also floating-point zero in default format. ;As output, this would appear as 0.0. </p><p>0e0 ;As input, this is also floating-point zero in default format. ;As output, this would appear as 0.0. </p><p>-.0 ;As input, this might be a zero or a minus zero, </p><p>; depending on whether the implementation supports </p><p>; a distinct minus zero. </p><p>;As output, 0.0 is zero and -0.0 is minus zero. </p><p>0\. ;On input, the integer zero—*not* a floating-point number! ;Whether this appears as 0 or 0. on output depends </p><p>;on the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks>. </p><p>0\.0s0 ;A floating-point zero in short format </p><p>0s0 ;As input, this is a floating-point zero in short format. ;As output, such a zero would appear as 0.0s0 </p><p>; (or as 0.0 if <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks> was the default format). </p><p>6\.02E+23 ;Avogadro’s number, in default format </p><p>602E+21 ;Also Avogadro’s number, in default format</p>|

| :- |





**Figure 2–14. Examples of Floating-point numbers** 



For information on how <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> are printed, see Section 22.1.3.1.3 (Printing Floats). 



