 



&#126;*n*R prints *arg* in radix *n*. The modifier flags and any remaining parameters are used as for the &#126;D directive. &#126;D is the same as &#126;10R. The full form is &#126;<GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> ,*mincol*,*padchar*,*commachar*,*comma-interval*R. 



If no prefix parameters are given to &#126;R, then a different interpretation is given. The argument should be an *integer* . For example, if *arg* is 4: 



*•* &#126;R prints *arg* as a cardinal English number: four. 



*•* &#126;:R prints *arg* as an ordinal English number: fourth. 



*•* &#126;@R prints *arg* as a Roman numeral: IV. 







 



 



*•* &#126;:@R prints *arg* as an old Roman numeral: IIII. 



For example: 



(format nil "&#126;„’ ,4:B" 13) *→* "1101" 



(format nil "&#126;„’ ,4:B" 17) *→* "1 0001" 



(format nil "&#126;19,0,’ ,4:B" 3333) *→* "0000 1101 0000 0101" 



(format nil "&#126;3„,’ ,2:R" 17) *→* "1 22" 



(format nil "&#126;„’|,2:D" #xFFFF) *→* "6|55|35" 



If and only if the first parameter, *n*, is supplied, &#126;R binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink styled={true} term={"print-radix"}><b>\*print-radix\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, **\*print-base\*** to *n*, and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



If and only if no parameters are supplied, &#126;R binds **\*print-base\*** to 10. 



