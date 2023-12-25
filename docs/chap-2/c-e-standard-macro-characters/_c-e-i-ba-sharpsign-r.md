 



#*n*R 



#*radix*R*rational* reads *rational* in radix *radix*. *radix* must consist of only digits that are interpreted as an *integer* in decimal radix; its value must be between 2 and 36 (inclusive). Only valid digits for the specified radix may be used. 



For example, #3r102 is another way of writing 11 (decimal), and #11R32 is another way of writing 35 (decimal). For radices larger than 10, letters of the alphabet are used in order for the digits after 9. No alternate # notation exists for the decimal radix since a decimal point suffices. 



Figure 2–20 contains examples of the use of #B, #O, #X, and #R. 



|<p>#2r11010101 ;Another way of writing 213 decimal </p><p>#b11010101 ;Ditto </p><p>#b+11010101 ;Ditto </p><p>#o325 ;Ditto, in octal radix </p><p>#xD5 ;Ditto, in hexadecimal radix </p><p>#16r+D5 ;Ditto </p><p>#o-300 ;Decimal -192, written in base 8 </p><p>#3r-21010 ;Same thing in base 3 </p><p>#25R-7H ;Same thing in base 25 </p><p>#xACCEDED ;181202413, in hexadecimal radix</p>|

| :- |





**Figure 2–20. Radix Indicator Example** 



The consequences are undefined if the token immediately following the #*n*R does not have the syntax of a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> in radix *n*. 



