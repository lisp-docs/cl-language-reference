 



~*n*R prints *arg* in radix *n*. The modifier flags and any remaining parameters are used as for the ~D directive. ~D is the same as ~10R. The full form is ~*radix* ,*mincol*,*padchar*,*commachar*,*comma-interval*R. 



If no prefix parameters are given to ~R, then a different interpretation is given. The argument should be an *integer* . For example, if *arg* is 4: 



*•* ~R prints *arg* as a cardinal English number: four. 



*•* ~:R prints *arg* as an ordinal English number: fourth. 



*•* ~@R prints *arg* as a Roman numeral: IV. 







 



 



*•* ~:@R prints *arg* as an old Roman numeral: IIII. 



For example: 



(format nil "~„’ ,4:B" 13) *→* "1101" 



(format nil "~„’ ,4:B" 17) *→* "1 0001" 



(format nil "~19,0,’ ,4:B" 3333) *→* "0000 1101 0000 0101" 



(format nil "~3„,’ ,2:R" 17) *→* "1 22" 



(format nil "~„’|,2:D" #xFFFF) *→* "6|55|35" 



If and only if the first parameter, *n*, is supplied, ~R binds **\*print-escape\*** to *false*, **\*print-radix\*** to *false*, **\*print-base\*** to *n*, and **\*print-readably\*** to *false*. 



If and only if no parameters are supplied, ~R binds **\*print-base\*** to 10. 



