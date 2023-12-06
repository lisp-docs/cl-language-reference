**string** *Function* 



**Syntax:** 



**string** *x → string* 



**Arguments and Values:** 



*x*—a *string*, a *symbol*, or a *character* . 



*string*—a *string*. 



**Description:** 



Returns a *string* described by *x*; specifically: 



*•* If *x* is a *string*, it is returned. 



*•* If *x* is a *symbol*, its *name* is returned. 



*•* If *x* is a *character* , then a *string* containing that one *character* is returned. 



*•* **string** might perform additional, *implementation-defined* conversions. 



**Examples:**
```lisp
 

(string "already a string") *→* "already a string" 

(string ’elm) *→* "ELM" 

(string #\c) *→* "c" 


```
**Exceptional Situations:** 



In the case where a conversion is defined neither by this specification nor by the *implementation*, an error of *type* **type-error** is signaled. 



**See Also:** 



**coerce**, **string** (*type*). 



**Notes:** 



**coerce** can be used to convert a *sequence* of *characters* to a *string*. 







 



 



**prin1-to-string**, **princ-to-string**, **write-to-string**, or **format** (with a first argument of **nil**) can be used to get a *string* representation of a *number* or any other *object*. 



<b>string-upcase, string-downcase, string-capitalize, <sup>nstring-upcase, nstring-downcase, nstring</sup> capitalize</b> <i>Function</i> 



**Syntax:** 



**string-upcase** *string* &amp;key *start end → cased-string* 



**string-downcase** *string* &amp;key *start end → cased-string* 



**string-capitalize** *string* &amp;key *start end → cased-string* 



**nstring-upcase** *string* &amp;key *start end → string* 



**nstring-downcase** *string* &amp;key *start end → string* 



**nstring-capitalize** *string* &amp;key *start end → string* 



**Arguments and Values:** 



*string*—a *string designator* . For **nstring-upcase**, **nstring-downcase**, and **nstring-capitalize**, the *string designator* must be a *string*. 



*start*, *end*—*bounding index designators* of *string*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*cased-string*—a *string*. 



**Description:** 



**string-upcase**, **string-downcase**, **string-capitalize**, **nstring-upcase**, **nstring-downcase**, **nstring-capitalize** change the case of the subsequence of *string bounded* by *start* and *end* as follows: 



**string-upcase** 



**string-upcase** returns a *string* just like *string* with all lowercase characters replaced by the corresponding uppercase characters. More precisely, each character of the result *string* is produced by applying the *function* **char-upcase** to the corresponding character of *string*. 



**string-downcase** 



**string-downcase** is like **string-upcase** except that all uppercase characters are replaced by the corresponding lowercase characters (using **char-downcase**). 







 



 



**string-upcase, string-downcase, string-capitalize,** *. . .* 



**string-capitalize** 



**string-capitalize** produces a copy of *string* such that, for every word in the copy, the first *character* of the “word,” if it has *case*, is *uppercase* and any other *characters* with *case* in the word are *lowercase*. For the purposes of **string-capitalize**, a “word” is defined to be a consecutive subsequence consisting of *alphanumeric characters*, delimited at each end either by a non-*alphanumeric character* or by an end of the *string*. 



**nstring-upcase, nstring-downcase, nstring-capitalize** 



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** are identical to **string-upcase**, **string-downcase**, and **string-capitalize** respectively except that they modify *string*. 



For **string-upcase**, **string-downcase**, and **string-capitalize**, *string* is not modified. However, if no characters in *string* require conversion, the result may be either *string* or a copy of it, at the implementation’s discretion. 



**Examples:**
```lisp
 

(string-upcase "abcde") *→* "ABCDE" 

(string-upcase "Dr. Livingston, I presume?") 

*→* "DR. LIVINGSTON, I PRESUME?" 

(string-upcase "Dr. Livingston, I presume?" :start 6 :end 10) 

*→* "Dr. LiVINGston, I presume?" 

(string-downcase "Dr. Livingston, I presume?") 

*→* "dr. livingston, i presume?" 

(string-capitalize "elm 13c arthur;fig don’t") *→* "Elm 13c Arthur;Fig Don’T" 

(string-capitalize " hello ") *→* " Hello " 

(string-capitalize "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION") *→* "Occluded Casements Forestall Inadvertent Defenestration" 

(string-capitalize ’kludgy-hash-search) *→* "Kludgy-Hash-Search" 

(string-capitalize "DON’T!") *→* "Don’T!" ;not "Don’t!" 

(string-capitalize "pipe 13a, foo16c") *→* "Pipe 13a, Foo16c" 

(setq str (copy-seq "0123ABCD890a")) *→* "0123ABCD890a" 

(nstring-downcase str :start 5 :end 7) *→* "0123AbcD890a" 

str *→* "0123AbcD890a" 


```
**Side Effects:** 



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** modify *string* as appropriate rather than constructing a new *string*. 



**See Also:** 



**char-upcase**, **char-downcase** 







 



 



**Notes:** 



The result is always of the same length as *string*. 



