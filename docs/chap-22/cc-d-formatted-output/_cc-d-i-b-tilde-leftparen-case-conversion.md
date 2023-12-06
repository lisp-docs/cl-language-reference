 



&#126;(*str*&#126;) 



The contained control string *str* is processed, and what it produces is subject to case conversion. With no flags, every *uppercase character* is converted to the corresponding *lowercase character* . &#126;:( capitalizes all words, as if by **string-capitalize**. 



&#126;@( capitalizes just the first word and forces the rest to lower case. 



&#126;:@( converts every lowercase character to the corresponding uppercase character. 



In this example &#126;@( is used to cause the first word produced by &#126;@R to be capitalized: 



(format nil "&#126;@R &#126;(&#126;@R&#126;)" 14 14) 



*→* "XIV xiv" 



(defun f (n) (format nil "&#126;@(&#126;R&#126;) error&#126;:P detected." n)) *→* F 



(f 0) *→* "Zero errors detected." 



(f 1) *→* "One error detected." 



(f 23) *→* "Twenty-three errors detected." 



When case conversions appear nested, the outer conversion dominates, as illustrated in the following example: 



(format nil "&#126;@(how is &#126;:(BOB SMITH&#126;)?&#126;)") 



*→* "How is bob smith?" 



<i><sup>not</sup> →</i> "How is Bob Smith?" 



