 



The next *arg* is printed as a *float* in fixed-format notation. 



The full form is ~*d*,*n*,*w*,*padchar*$. The parameter *d* is the number of digits to print after the decimal point (default value 2); *n* is the minimum number of digits to print before the decimal point (default value 1); *w* is the minimum total width of the field to be printed (default value 0). 



First padding and the sign are output. If the *arg* is negative, then a minus sign is printed; if the *arg* is not negative, then a plus sign is printed if and only if the @ modifier was supplied. If the : modifier is used, the sign appears before any padding, and otherwise after the padding. If *w* is supplied and the number of other characters to be output is less than *w*, then copies of *padchar* (which defaults to a space) are output to make the total field width equal *w*. Then *n* digits are printed for the integer part of *arg*, with leading zeros if necessary; then a decimal point; then *d* digits of fraction, properly rounded. 



If the magnitude of *arg* is so large that more than *m* digits would have to be printed, where *m* is the larger of *w* and 100, then an implementation is free, at its discretion, to print the number using exponential notation instead, as if by the directive ~*w*,*q*„„*padchar*E, where *w* and *padchar* 



are present or omitted according to whether they were present or omitted in the ~$ directive, and where *q*=*d*+*n−*1, where *d* and *n* are the (possibly default) values given to the ~$ directive. 



If *arg* is a *rational* number, then it is coerced to be a *single float* and then printed. Alternatively, an implementation is permitted to process a *rational* number by any other method that has essentially the same behavior but avoids loss of precision or overflow because of the coercion. 



If *arg* is a *complex* number or some non-numeric *object*, then it is printed using the format directive ~*w*D, thereby printing it in decimal radix and a minimum field width of *w*. 







 



 



~$ binds **\*print-escape\*** to *false* and **\*print-readably\*** to *false*. 



