**22.3.3.1 Tilde F: Fixed-Format Floating-Point** 

The next *arg* is printed as a *float*. 

The full form is ~*w*,*d*,*k*,*overflowchar*,*padchar*F. The parameter *w* is the width of the field to be printed; *d* is the number of digits to print after the decimal point; *k* is a scale factor that defaults to zero. 

Exactly \<i\>w\</i\> characters will be output. First, leading copies of the character \<i\>padchar\</i\> (which defaults to a space) are printed, if necessary, to pad the field on the left. If the \<i\>arg\</i\> is negative, then a minus sign is printed; if the \<i\>arg\</i\> is not negative, then a plus sign is printed if and only if the @ modifier was supplied. Then a sequence of digits, containing a single embedded decimal point, is printed; this represents the magnitude of the value of \<i\>arg\</i\> times 10\<i\>\<sup\>k\</sup\>\</i\>, rounded to \<i\>d\</i\> fractional digits. When rounding up and rounding down would produce printed values equidistant from the scaled value of \<i\>arg\</i\>, then the implementation is free to use either one. For example, printing the argument 6.375 using the format ~4,2F may correctly produce either 6.37 or 6.38. Leading zeros are not permitted, except that a single zero digit is output before the decimal point if the printed value is less than one, and this single zero digit is not output at all if \<i\>w\</i\>=\<i\>d\</i\>+1. 

If it is impossible to print the value in the required format in a field of width *w*, then one of two actions is taken. If the parameter *overflowchar* is supplied, then *w* copies of that parameter are printed instead of the scaled value of *arg*. If the *overflowchar* parameter is omitted, then the scaled value is printed using more than *w* characters, as many more as may be needed. 

If the *w* parameter is omitted, then the field is of variable width. In effect, a value is chosen for *w* in such a way that no leading pad characters need to be printed and exactly *d* characters will follow the decimal point. For example, the directive ~,2F will print exactly two digits after the decimal point and as many as necessary before the decimal point. 

Printer **22–27**

 

 

If the parameter *d* is omitted, then there is no constraint on the number of digits to appear after the decimal point. A value is chosen for *d* in such a way that as many digits as possible may be printed subject to the width constraint imposed by the parameter *w* and the constraint that no 

trailing zero digits may appear in the fraction, except that if the fraction to be printed is zero, then a single zero digit should appear after the decimal point if permitted by the width constraint. 

If both \<i\>w\</i\> and \<i\>d\</i\> are omitted, then the effect is to print the value using ordinary free-format output; \<b\>prin1\</b\> uses this format for any number whose magnitude is either zero or between 10\<sup\>\<i\>−\</i\>3\</sup\>(inclusive) and 10\<sup\>7\</sup\>(exclusive). 

If *w* is omitted, then if the magnitude of *arg* is so large (or, if *d* is also omitted, so small) that more than 100 digits would have to be printed, then an implementation is free, at its discretion, to print the number using exponential notation instead, as if by the directive ~E (with all parameters to ~E defaulted, not taking their values from the ~F directive). 

If *arg* is a *rational* number, then it is coerced to be a *single float* and then printed. Alternatively, an implementation is permitted to process a *rational* number by any other method that has essentially the same behavior but avoids loss of precision or overflow because of the coercion. If *w* and *d* are not supplied and the number has no exact decimal representation, for example 1/3, some precision cutoff must be chosen by the implementation since only a finite number of digits may be printed. 

If *arg* is a *complex* number or some non-numeric *object*, then it is printed using the format directive ~*w*D, thereby printing it in decimal radix and a minimum field width of *w*. 

~F binds **\*print-escape\*** to *false* and **\*print-readably\*** to *false*. 

