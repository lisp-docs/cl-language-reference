 



An *arg*, which should be an *integer* , is printed in decimal radix. &#126;D will never put a decimal point after the number. 



&#126;*mincol*D uses a column width of *mincol*; spaces are inserted on the left if the number requires fewer than *mincol* columns for its digits and sign. If the number doesn’t fit in *mincol* columns, additional columns are used as needed. 



&#126;*mincol*,*padchar*D uses *padchar* as the pad character instead of space. 



If *arg* is not an *integer* , it is printed in &#126;A format and decimal base. 



The @ modifier causes the number’s sign to be printed always; the default is to print it only if the number is negative. The : modifier causes commas to be printed between groups of digits; *commachar* may be used to change the character used as the comma. *comma-interval* must be an *integer* and defaults to 3. When the : modifier is given to any of these directives, the *commachar* is printed between groups of *comma-interval* digits. 



Thus the most general form of &#126;D is &#126;*mincol*,*padchar*,*commachar*,*comma-interval*D. 



&#126;D binds **\*print-escape\*** to *false*, **\*print-radix\*** to *false*, **\*print-base\*** to 10, and **\*print-readably\*** to *false*. 



