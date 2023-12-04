 



~(*str*~) 



The contained control string *str* is processed, and what it produces is subject to case conversion. With no flags, every *uppercase character* is converted to the corresponding *lowercase character* . ~:( capitalizes all words, as if by **string-capitalize**. 



~@( capitalizes just the first word and forces the rest to lower case. 



~:@( converts every lowercase character to the corresponding uppercase character. 



In this example ~@( is used to cause the first word produced by ~@R to be capitalized: 



(format nil "~@R ~(~@R~)" 14 14) 



*→* "XIV xiv" 



(defun f (n) (format nil "~@(~R~) error~:P detected." n)) *→* F 



(f 0) *→* "Zero errors detected." 



(f 1) *→* "One error detected." 



(f 23) *→* "Twenty-three errors detected." 



When case conversions appear nested, the outer conversion dominates, as illustrated in the following example: 



(format nil "~@(how is ~:(BOB SMITH~)?~)") 



*→* "How is bob smith?" 



<i><sup>not</sup> →</i> "How is Bob Smith?" 



