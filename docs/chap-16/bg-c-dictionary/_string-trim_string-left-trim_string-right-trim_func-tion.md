**string-trim, string-left-trim, string-right-trim** *Func tion* 



**Syntax:** 



<DictionaryLink  term={"string-trim"}><b>string-trim</b></DictionaryLink> *character-bag string → trimmed-string* 



<DictionaryLink  term={"string-left-trim"}><b>string-left-trim</b></DictionaryLink> *character-bag string → trimmed-string* 



<DictionaryLink  term={"string-right-trim"}><b>string-right-trim</b></DictionaryLink> *character-bag string → trimmed-string* 



**Arguments and Values:** 



*character-bag*—a *sequence* containing <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>. 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



*trimmed-string*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"string-trim"}><b>string-trim</b></DictionaryLink> returns a substring of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, with all characters in *character-bag* stripped off the beginning and end. <DictionaryLink  term={"string-left-trim"}><b>string-left-trim</b></DictionaryLink> is similar but strips characters off only the beginning; <DictionaryLink  term={"string-right-trim"}><b>string-right-trim</b></DictionaryLink> strips off only the end. 



If no <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> need to be trimmed from the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, then either <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> itself or a copy of it may be returned, at the discretion of the implementation. 



All of these <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> observe the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



**Examples:**
```lisp
 
(string-trim "abc" "abcaakaaakabcaaa") → "kaaak" 
(string-trim ’(#\Space #\Tab #\Newline) " garbanzo beans 
") → "garbanzo beans" 
(string-trim " (\*)" " ( \*three (silly) words\* ) ") 
→ "three (silly) words" 
(string-left-trim "abc" "labcabcabc") → "labcabcabc" 
(string-left-trim " (\*)" " ( \*three (silly) words\* ) ") 
→ "three (silly) words\* ) " 
(string-right-trim " (\*)" " ( \*three (silly) words\* ) ") 
→ " ( \*three (silly) words" 
 
 
```
**Affected By:** 



The <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



<b>string=, string/=, string</b><i>&lt;</i><b>, string</b><i>&gt;</i><b>, string</b><i>&lt;</i><b>=, <sup>string</sup></b>&gt;<b>=, string-equal, string-not-equal, string lessp, string-greaterp, string-not-greaterp, string not-lessp</b> <i>Function</i> 



**Syntax:** 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>= *string1 string2* &amp;key *start1 end1 start2 end2 → generalized-boolean* 



<DictionaryLink  term={"string"}><b>string/</b></DictionaryLink>= *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt; *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt; *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt;= *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt;= *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



**string-equal** *string1 string2* &amp;key *start1 end1 start2 end2 → generalized-boolean* 



**string-not-equal** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-lessp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-greaterp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-not-greaterp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-not-lessp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



**Arguments and Values:** 



*string1*—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



*string2*—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



*start1*, *end1*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *string1*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*start2*, *end2*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *string2*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*mismatch-index*—a <GlossaryTerm styled={true} term={"bounding index"}><i>bounding index</i></GlossaryTerm> of *string1*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



These functions perform lexicographic comparisons on *string1* and *string2*. <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink> and **string-equal** are called equality functions; the others are called inequality functions. The 







 



 



**string=, string/=, string***&lt;***, string***&gt;***, string***&lt;***=,** *. . .* 



comparison operations these <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> perform are restricted to the subsequence of *string1 bounded* by *start1* and *end1* and to the subsequence of *string2 bounded* by *start2* and *end2*. 



A string *a* is equal to a string *b* if it contains the same number of characters, and the corresponding characters are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <ClLinks  term={"char="}><b>char=</b></ClLinks> or <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>, as appropriate. 



A string *a* is less than a string *b* if in the first position in which they differ the character of *a* is less than the corresponding character of *b* according to <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt; or <DictionaryLink  term={"char-lessp"}><b>char-lessp</b></DictionaryLink> as appropriate, or if string *a* is a proper prefix of string *b* (of shorter length and matching in all the characters of *a*). 



The equality functions return a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the strings are equal, or <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> otherwise. 



The inequality functions return a *mismatch-index* that is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the strings are not equal, or <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> otherwise. When the *mismatch-index* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, it is an *integer* representing the first character position at which the two substrings differ, as an offset from the beginning of *string1*. 



The comparison has one of the following results: 



<DictionaryLink  term={"string"}><b>string=</b></DictionaryLink> 



<DictionaryLink  term={"string"}><b>string=</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the supplied substrings are of the same length and contain the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> characters in corresponding positions; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink  term={"string"}><b>string/=</b></DictionaryLink> 



<DictionaryLink  term={"string"}><b>string/=</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the supplied substrings are different; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**string-equal** 



**string-equal** is just like <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink> except that differences in case are ignored; two characters are considered to be the same if <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> of them. 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt; 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt; is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if substring1 is less than substring2; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt; 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt; is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if substring1 is greater than substring2; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**string-lessp**, **string-greaterp** 



**string-lessp** and **string-greaterp** are exactly like <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt; and <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt;, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if <DictionaryLink  term={"char-lessp"}><b>char-lessp</b></DictionaryLink> were used instead of <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt; for comparing characters. 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt;<ClLinks  term={"="}><b>=</b></ClLinks> 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt;<ClLinks  term={"="}><b>=</b></ClLinks> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if substring1 is less than or equal to substring2; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



 



 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt;<ClLinks  term={"="}><b>=</b></ClLinks> 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt;<ClLinks  term={"="}><b>=</b></ClLinks> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if substring1 is greater than or equal to substring2; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. **string-not-greaterp**, **string-not-lessp** 



**string-not-greaterp** and **string-not-lessp** are exactly like <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&lt;<ClLinks  term={"="}><b>=</b></ClLinks> and <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>&gt;<ClLinks  term={"="}><b>=</b></ClLinks>, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if <DictionaryLink  term={"char-lessp"}><b>char-lessp</b></DictionaryLink> were used instead of <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt; for comparing characters. 



**Examples:**
```lisp
(string= "foo" "foo") → true 
(string= "foo" "Foo") → false 
(string= "foo" "bar") → false 
(string= "together" "frog" :start1 1 :end1 3 :start2 2) → true 
(string-equal "foo" "Foo") → true 
(string= "abcd" "01234abcd9012" :start2 5 :end2 9) → true 
(string< "aaaa" "aaab") → 3 
(string>= "aaaaa" "aaaa") → 4 
(string-not-greaterp "Abcde" "abcdE") → 5 
(string-lessp "012AAAA789" "01aaab6" :start1 3 :end1 7 
	      :start2 2 :end2 6) → 6 
(string-not-equal "AAAA" "aaaA") → false 
```
**See Also:** 



<ClLinks  term={"char="}><b>char=</b></ClLinks> 



**Notes:** 



<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> calls <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink> if applied to two <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm>. 



