**string** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink> *x → string* 



**Arguments and Values:** 



*x*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> described by *x*; specifically: 



*•* If *x* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, it is returned. 



*•* If *x* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is returned. 



*•* If *x* is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , then a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> containing that one <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is returned. 



*•* <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink> might perform additional, <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> conversions. 



**Examples:**
```lisp
 
(string "already a string") *→* "already a string" 
(string ’elm) *→* "ELM" 
(string #\c) *→* "c" 

```
**Exceptional Situations:** 



In the case where a conversion is defined neither by this specification nor by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink>, <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink> (<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>). 



**Notes:** 



<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> can be used to convert a *sequence* of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"princ-to-string"}><b>princ-to-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink>, or <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> (with a first argument of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>) can be used to get a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> representation of a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> or any other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<b>string-upcase, string-downcase, string-capitalize, <sup>nstring-upcase, nstring-downcase, nstring</sup> capitalize</b> <i>Function</i> 



**Syntax:** 



**string-upcase** <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → cased-string* 



**string-downcase** <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → cased-string* 



**string-capitalize** <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → cased-string* 



**nstring-upcase** <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → string* 



**nstring-downcase** <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → string* 



**nstring-capitalize** <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → string* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a *string designator* . For **nstring-upcase**, **nstring-downcase**, and **nstring-capitalize**, the *string designator* must be a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



*start*, *end*—*bounding index designators* of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*cased-string*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



**string-upcase**, **string-downcase**, **string-capitalize**, **nstring-upcase**, **nstring-downcase**, **nstring-capitalize** change the case of the subsequence of *string bounded* by *start* and *end* as follows: 



**string-upcase** 



**string-upcase** returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> just like <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> with all lowercase characters replaced by the corresponding uppercase characters. More precisely, each character of the result <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is produced by applying the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"char-upcase"}><b>char-upcase</b></DictionaryLink> to the corresponding character of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**string-downcase** 



**string-downcase** is like **string-upcase** except that all uppercase characters are replaced by the corresponding lowercase characters (using <DictionaryLink styled={true} term={"char-downcase"}><b>char-downcase</b></DictionaryLink>). 







 



 



**string-upcase, string-downcase, string-capitalize,** *. . .* 



**string-capitalize** 



**string-capitalize** produces a copy of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> such that, for every word in the copy, the first <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> of the “word,” if it has <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>, is <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm> and any other <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> in the word are <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>. For the purposes of **string-capitalize**, a “word” is defined to be a consecutive subsequence consisting of *alphanumeric characters*, delimited at each end either by a non-*alphanumeric character* or by an end of the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**nstring-upcase, nstring-downcase, nstring-capitalize** 



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** are identical to **string-upcase**, **string-downcase**, and **string-capitalize** respectively except that they modify <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



For **string-upcase**, **string-downcase**, and **string-capitalize**, <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is not modified. However, if no characters in <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> require conversion, the result may be either <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or a copy of it, at the implementation’s discretion. 



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



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** modify <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> as appropriate rather than constructing a new <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"char-upcase"}><b>char-upcase</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-downcase"}><b>char-downcase</b></DictionaryLink> 







 



 



**Notes:** 



The result is always of the same length as <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



