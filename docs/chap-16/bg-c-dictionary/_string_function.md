**string** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"string"}><b>string</b></ClLinks> *x → string* 



**Arguments and Values:** 



*x*—a <ClLinks  term={"string"}><i>string</i></ClLinks>, a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, or a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**Description:** 



Returns a <ClLinks  term={"string"}><i>string</i></ClLinks> described by *x*; specifically: 



*•* If *x* is a <ClLinks  term={"string"}><i>string</i></ClLinks>, it is returned. 



*•* If *x* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, its <ClLinks  term={"name"}><i>name</i></ClLinks> is returned. 



*•* If *x* is a <ClLinks  term={"character"}><i>character</i></ClLinks> , then a <ClLinks  term={"string"}><i>string</i></ClLinks> containing that one <ClLinks  term={"character"}><i>character</i></ClLinks> is returned. 



*•* <ClLinks  term={"string"}><b>string</b></ClLinks> might perform additional, <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> conversions. 



**Examples:**
```lisp
 
(string "already a string") → "already a string" 
(string ’elm) → "ELM" 
(string #\c) → "c" 
```
**Exceptional Situations:** 



In the case where a conversion is defined neither by this specification nor by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"coerce"}><b>coerce</b></ClLinks>, <ClLinks  term={"string"}><b>string</b></ClLinks> (<ClLinks  term={"type"}><i>type</i></ClLinks>). 



**Notes:** 



<ClLinks  term={"coerce"}><b>coerce</b></ClLinks> can be used to convert a *sequence* of <ClLinks  term={"character"}><i>characters</i></ClLinks> to a <ClLinks  term={"string"}><i>string</i></ClLinks>. 







 



 



<ClLinks  term={"prin1-to-string"}><b>prin1-to-string</b></ClLinks>, <ClLinks  term={"princ-to-string"}><b>princ-to-string</b></ClLinks>, <ClLinks  term={"write-to-string"}><b>write-to-string</b></ClLinks>, or <ClLinks  term={"format"}><b>format</b></ClLinks> (with a first argument of <ClLinks  term={"nil"}><b>nil</b></ClLinks>) can be used to get a <ClLinks  term={"string"}><i>string</i></ClLinks> representation of a <ClLinks  term={"number"}><i>number</i></ClLinks> or any other <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<b>string-upcase, string-downcase, string-capitalize, <sup>nstring-upcase, nstring-downcase, nstring</sup> capitalize</b> <i>Function</i> 



**Syntax:** 



**string-upcase** <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;key *start end → cased-string* 



**string-downcase** <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;key *start end → cased-string* 



**string-capitalize** <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;key *start end → cased-string* 



**nstring-upcase** <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;key *start end → string* 



**nstring-downcase** <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;key *start end → string* 



**nstring-capitalize** <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;key *start end → string* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . For **nstring-upcase**, **nstring-downcase**, and **nstring-capitalize**, the <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> must be a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <ClLinks  term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



*cased-string*—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**Description:** 



**string-upcase**, **string-downcase**, **string-capitalize**, **nstring-upcase**, **nstring-downcase**, **nstring-capitalize** change the case of the subsequence of *string bounded* by *start* and *end* as follows: 



**string-upcase** 



**string-upcase** returns a <ClLinks  term={"string"}><i>string</i></ClLinks> just like <ClLinks  term={"string"}><i>string</i></ClLinks> with all lowercase characters replaced by the corresponding uppercase characters. More precisely, each character of the result <ClLinks  term={"string"}><i>string</i></ClLinks> is produced by applying the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"char-upcase"}><b>char-upcase</b></ClLinks> to the corresponding character of <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**string-downcase** 



**string-downcase** is like **string-upcase** except that all uppercase characters are replaced by the corresponding lowercase characters (using <ClLinks  term={"char-downcase"}><b>char-downcase</b></ClLinks>). 







 



 



**string-upcase, string-downcase, string-capitalize,** *. . .* 



**string-capitalize** 



**string-capitalize** produces a copy of <ClLinks  term={"string"}><i>string</i></ClLinks> such that, for every word in the copy, the first <ClLinks  term={"character"}><i>character</i></ClLinks> of the “word,” if it has <ClLinks  term={"case"}><i>case</i></ClLinks>, is <ClLinks  term={"uppercase"}><i>uppercase</i></ClLinks> and any other <ClLinks  term={"character"}><i>characters</i></ClLinks> with <ClLinks  term={"case"}><i>case</i></ClLinks> in the word are <ClLinks  term={"lowercase"}><i>lowercase</i></ClLinks>. For the purposes of **string-capitalize**, a “word” is defined to be a consecutive subsequence consisting of *alphanumeric characters*, delimited at each end either by a non-*alphanumeric character* or by an end of the <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**nstring-upcase, nstring-downcase, nstring-capitalize** 



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** are identical to **string-upcase**, **string-downcase**, and **string-capitalize** respectively except that they modify <ClLinks  term={"string"}><i>string</i></ClLinks>. 



For **string-upcase**, **string-downcase**, and **string-capitalize**, <ClLinks  term={"string"}><i>string</i></ClLinks> is not modified. However, if no characters in <ClLinks  term={"string"}><i>string</i></ClLinks> require conversion, the result may be either <ClLinks  term={"string"}><i>string</i></ClLinks> or a copy of it, at the implementation’s discretion. 



**Examples:**
```lisp
(string-upcase "abcde") → "ABCDE" 
(string-upcase "Dr. Livingston, I presume?") 
→ "DR. LIVINGSTON, I PRESUME?" 
(string-upcase "Dr. Livingston, I presume?" :start 6 :end 10) 
→ "Dr. LiVINGston, I presume?" 
(string-downcase "Dr. Livingston, I presume?") 
→ "dr. livingston, i presume?" 
(string-capitalize "elm 13c arthur;fig don’t") → "Elm 13c Arthur;Fig Don’T" 
(string-capitalize " hello ") → " Hello " 
(string-capitalize "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION") → "Occluded Casements Forestall Inadvertent Defenestration" 
(string-capitalize ’kludgy-hash-search) → "Kludgy-Hash-Search" 
(string-capitalize "DON’T!") → "Don’T!" ;not "Don’t!" 
(string-capitalize "pipe 13a, foo16c") → "Pipe 13a, Foo16c" 
(setq str (copy-seq "0123ABCD890a")) → "0123ABCD890a" 
(nstring-downcase str :start 5 :end 7) → "0123AbcD890a" 
str → "0123AbcD890a" 
```
**Side Effects:** 



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** modify <ClLinks  term={"string"}><i>string</i></ClLinks> as appropriate rather than constructing a new <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"char-upcase"}><b>char-upcase</b></ClLinks>, <ClLinks  term={"char-downcase"}><b>char-downcase</b></ClLinks> 







 



 



**Notes:** 



The result is always of the same length as <ClLinks  term={"string"}><i>string</i></ClLinks>. 



