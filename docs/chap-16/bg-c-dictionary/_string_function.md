**string** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink> *x → string* 



**Arguments and Values:** 



*x*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, or a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> described by *x*; specifically: 



*•* If *x* is a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, it is returned. 



*•* If *x* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is returned. 



*•* If *x* is a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> , then a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> containing that one <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> is returned. 



*•* <DictionaryLink  term={"string"}><b>string</b></DictionaryLink> might perform additional, <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> conversions. 



**Examples:**
```lisp
 
(string "already a string") → "already a string" 
(string ’elm) → "ELM" 
(string #\c) → "c" 
```
**Exceptional Situations:** 



In the case where a conversion is defined neither by this specification nor by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink>, <DictionaryLink  term={"string"}><b>string</b></DictionaryLink> (<GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>). 



**Notes:** 



<DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink> can be used to convert a *sequence* of <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> to a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"prin1-to-string"}><b>prin1-to-string</b></DictionaryLink>, <DictionaryLink  term={"princ-to-string"}><b>princ-to-string</b></DictionaryLink>, <DictionaryLink  term={"write-to-string"}><b>write-to-string</b></DictionaryLink>, or <DictionaryLink  term={"format"}><b>format</b></DictionaryLink> (with a first argument of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>) can be used to get a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> representation of a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> or any other <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<b>string-upcase, string-downcase, string-capitalize, <sup>nstring-upcase, nstring-downcase, nstring</sup> capitalize</b> <i>Function</i> 



**Syntax:** 



**string-upcase** <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → cased-string* 



**string-downcase** <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → cased-string* 



**string-capitalize** <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → cased-string* 



**nstring-upcase** <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → string* 



**nstring-downcase** <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → string* 



**nstring-capitalize** <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> &amp;key *start end → string* 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . For **nstring-upcase**, **nstring-downcase**, and **nstring-capitalize**, the <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> must be a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*cased-string*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



**string-upcase**, **string-downcase**, **string-capitalize**, **nstring-upcase**, **nstring-downcase**, **nstring-capitalize** change the case of the subsequence of *string bounded* by *start* and *end* as follows: 



**string-upcase** 



**string-upcase** returns a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> just like <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> with all lowercase characters replaced by the corresponding uppercase characters. More precisely, each character of the result <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is produced by applying the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"char-upcase"}><b>char-upcase</b></DictionaryLink> to the corresponding character of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**string-downcase** 



**string-downcase** is like **string-upcase** except that all uppercase characters are replaced by the corresponding lowercase characters (using <DictionaryLink  term={"char-downcase"}><b>char-downcase</b></DictionaryLink>). 







 



 



**string-upcase, string-downcase, string-capitalize,** *. . .* 



**string-capitalize** 



**string-capitalize** produces a copy of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> such that, for every word in the copy, the first <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> of the “word,” if it has <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm>, is <GlossaryTerm  term={"uppercase"}><i>uppercase</i></GlossaryTerm> and any other <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> with <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm> in the word are <GlossaryTerm  term={"lowercase"}><i>lowercase</i></GlossaryTerm>. For the purposes of **string-capitalize**, a “word” is defined to be a consecutive subsequence consisting of *alphanumeric characters*, delimited at each end either by a non-*alphanumeric character* or by an end of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**nstring-upcase, nstring-downcase, nstring-capitalize** 



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** are identical to **string-upcase**, **string-downcase**, and **string-capitalize** respectively except that they modify <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



For **string-upcase**, **string-downcase**, and **string-capitalize**, <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is not modified. However, if no characters in <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> require conversion, the result may be either <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or a copy of it, at the implementation’s discretion. 



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



**nstring-upcase**, **nstring-downcase**, and **nstring-capitalize** modify <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> as appropriate rather than constructing a new <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"char-upcase"}><b>char-upcase</b></DictionaryLink>, <DictionaryLink  term={"char-downcase"}><b>char-downcase</b></DictionaryLink> 







 



 



**Notes:** 



The result is always of the same length as <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



