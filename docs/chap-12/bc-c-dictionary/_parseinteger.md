**parse-integer** *Function* 



**Syntax:** 



**parse-integer** *string* &amp;key *start end radix junk-allowed → integer, pos* 



**Arguments and Values:** 



*string*—a *string*. 



*start*, *end*—*bounding index designators* of *string*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*radix*—a *radix* . The default is 10. 



*junk-allowed*—a *generalized boolean*. The default is *false*. 







 



 



*integer*—an *integer* or *false*. 



*pos*—a *bounding index* of *string*. 



**Description:** 



**parse-integer** parses an *integer* in the specified *radix* from the substring of *string* delimited by *start* and *end*. 



**parse-integer** expects an optional sign (+ or -) followed by a a non-empty sequence of digits to be interpreted in the specified *radix*. Optional leading and trailing *whitespace*<sub>1</sub> is ignored. 



**parse-integer** does not recognize the syntactic radix-specifier prefixes #O, #B, #X, and #*n*R, nor does it recognize a trailing decimal point. 



If *junk-allowed* is *false*, an error of *type* **parse-error** is signaled if substring does not consist entirely of the representation of a signed *integer* , possibly surrounded on either side by *whitespace*<sub>1</sub> *characters*. 



The first *value* returned is either the *integer* that was parsed, or else **nil** if no syntactically correct *integer* was seen but *junk-allowed* was *true*. 



The second *value* is either the index into the *string* of the delimiter that terminated the parse, or the upper *bounding index* of the substring if the parse terminated at the end of the substring (as is always the case if *junk-allowed* is *false*). 



**Examples:**
```lisp
 

(parse-integer "123") *→* 123, 3 

(parse-integer "123" :start 1 :radix 5) *→* 13, 3 

(parse-integer "no-integer" :junk-allowed t) *→* NIL, 0 


```
**Exceptional Situations:** 



If *junk-allowed* is *false*, an error is signaled if substring does not consist entirely of the representation of an *integer* , possibly surrounded on either side by *whitespace*<sub>1</sub> characters. 



