 



The next *arg* is printed as a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> in exponential notation. 



The full form is &#126;*w*,*d*,*e*,*k*,*overflowchar*,*padchar*,*exponentchar*E. The parameter *w* is the width of the field to be printed; *d* is the number of digits to print after the decimal point; *e* is the number of digits to use when printing the exponent; *k* is a scale factor that defaults to one (not zero). 



Exactly *w* characters will be output. First, leading copies of the character *padchar* (which defaults to a space) are printed, if necessary, to pad the field on the left. If the *arg* is negative, then a minus sign is printed; if the *arg* is not negative, then a plus sign is printed if and only if the @ modifier was supplied. Then a sequence of digits containing a single embedded decimal point is printed. The form of this sequence of digits depends on the scale factor *k*. If *k* is zero, then *d* digits are printed after the decimal point, and a single zero digit appears before the decimal point if the total field width will permit it. If *k* is positive, then it must be strictly less than *d*+2; *k* significant digits are printed before the decimal point, and *d−k*+1 digits are printed after the decimal point. If *k* is negative, then it must be strictly greater than *−d*; a single zero digit appears before the decimal point if the total field width will permit it, and after the decimal point are printed first *−k* zeros and then *d*+*k* significant digits. The printed fraction must be properly rounded. When rounding up and rounding down would produce printed values equidistant from the scaled value of *arg*, then the implementation is free to use either one. For example, printing the argument 637.5 using the format &#126;8,2E may correctly produce either 6.37E+2 or 6.38E+2. 







 



 



Following the digit sequence, the exponent is printed. First the character parameter *exponentchar* is printed; if this parameter is omitted, then the *exponent marker* that <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> would use is printed, as determined from the type of the <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> and the current value of <DictionaryLink styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink>. Next, either a plus sign or a minus sign is printed, followed by *e* digits representing the power of ten by which the printed fraction must be multiplied to properly represent the rounded value of *arg*. 



If it is impossible to print the value in the required format in a field of width *w*, possibly because *k* is too large or too small or because the exponent cannot be printed in *e* character positions, then one of two actions is taken. If the parameter *overflowchar* is supplied, then *w* copies of that parameter are printed instead of the scaled value of *arg*. If the *overflowchar* parameter is omitted, then the scaled value is printed using more than *w* characters, as many more as may be needed; if the problem is that *d* is too small for the supplied *k* or that *e* is too small, then a larger value is used for *d* or *e* as may be needed. 



If the *w* parameter is omitted, then the field is of variable width. In effect a value is chosen for *w* in such a way that no leading pad characters need to be printed. 



If the parameter *d* is omitted, then there is no constraint on the number of digits to appear. A value is chosen for *d* in such a way that as many digits as possible may be printed subject to the width constraint imposed by the parameter *w*, the constraint of the scale factor *k*, and the constraint that no trailing zero digits may appear in the fraction, except that if the fraction to be printed is zero then a single zero digit should appear after the decimal point. 



If the parameter *e* is omitted, then the exponent is printed using the smallest number of digits necessary to represent its value. 



If all of <i>w</i>, <i>d</i>, and <i>e</i> are omitted, then the effect is to print the value using ordinary free-format exponential-notation output; <b>prin1</b> uses a similar format for any non-zero number whose magnitude is less than 10<sup><i>−</i>3</sup> or greater than or equal to 10<sup>7</sup>. The only difference is that the &#126;E directive always prints a plus or minus sign in front of the exponent, while <b>prin1</b> omits the plus sign if the exponent is non-negative. 



If *arg* is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> number, then it is coerced to be a *single float* and then printed. Alternatively, an implementation is permitted to process a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> number by any other method that has essentially the same behavior but avoids loss of precision or overflow because of the coercion. If *w* and *d* are unsupplied and the number has no exact decimal representation, for example 1/3, some precision cutoff must be chosen by the implementation since only a finite number of digits may be printed. 



If *arg* is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> number or some non-numeric <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, then it is printed using the format directive &#126;*w*D, thereby printing it in decimal radix and a minimum field width of *w*. 



&#126;E binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



