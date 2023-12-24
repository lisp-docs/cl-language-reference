**string-trim, string-left-trim, string-right-trim** *Func tion* 



**Syntax:** 



<ClLinks styled={true} term={"string-trim"}><b>string-trim</b></ClLinks> *character-bag string → trimmed-string* 



<ClLinks styled={true} term={"string-left-trim"}><b>string-left-trim</b></ClLinks> *character-bag string → trimmed-string* 



<ClLinks styled={true} term={"string-right-trim"}><b>string-right-trim</b></ClLinks> *character-bag string → trimmed-string* 



**Arguments and Values:** 



*character-bag*—a *sequence* containing <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>. 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a *string designator* . 



*trimmed-string*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"string-trim"}><b>string-trim</b></ClLinks> returns a substring of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, with all characters in *character-bag* stripped off the beginning and end. <ClLinks styled={true} term={"string-left-trim"}><b>string-left-trim</b></ClLinks> is similar but strips characters off only the beginning; <ClLinks styled={true} term={"string-right-trim"}><b>string-right-trim</b></ClLinks> strips off only the end. 



If no <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> need to be trimmed from the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, then either <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> itself or a copy of it may be returned, at the discretion of the implementation. 



All of these <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> observe the *fill pointer* . 



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



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



<b>string=, string/=, string</b><i>&lt;</i><b>, string</b><i>&gt;</i><b>, string</b><i>&lt;</i><b>=, <sup>string</sup></b>&gt;<b>=, string-equal, string-not-equal, string lessp, string-greaterp, string-not-greaterp, string not-lessp</b> <i>Function</i> 



**Syntax:** 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>= *string1 string2* &amp;key *start1 end1 start2 end2 → generalized-boolean* 



<ClLinks styled={true} term={"string"}><b>string/</b></ClLinks>= *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt; *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt; *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt;= *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt;= *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



**string-equal** *string1 string2* &amp;key *start1 end1 start2 end2 → generalized-boolean* 



**string-not-equal** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-lessp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-greaterp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-not-greaterp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* **string-not-lessp** *string1 string2* &amp;key *start1 end1 start2 end2 → mismatch-index* 



**Arguments and Values:** 



*string1*—a *string designator* . 



*string2*—a *string designator* . 



*start1*, *end1*—*bounding index designators* of *string1*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*start2*, *end2*—*bounding index designators* of *string2*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*generalized-boolean*—a *generalized boolean*. 



*mismatch-index*—a *bounding index* of *string1*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



These functions perform lexicographic comparisons on *string1* and *string2*. <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks> and **string-equal** are called equality functions; the others are called inequality functions. The 







 



 



**string=, string/=, string***&lt;***, string***&gt;***, string***&lt;***=,** *. . .* 



comparison operations these <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> perform are restricted to the subsequence of *string1 bounded* by *start1* and *end1* and to the subsequence of *string2 bounded* by *start2* and *end2*. 



A string *a* is equal to a string *b* if it contains the same number of characters, and the corresponding characters are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"char="}><b>char=</b></ClLinks> or <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks>, as appropriate. 



A string *a* is less than a string *b* if in the first position in which they differ the character of *a* is less than the corresponding character of *b* according to <ClLinks styled={true} term={"char"}><b>char</b></ClLinks>&lt; or <ClLinks styled={true} term={"char-lessp"}><b>char-lessp</b></ClLinks> as appropriate, or if string *a* is a proper prefix of string *b* (of shorter length and matching in all the characters of *a*). 



The equality functions return a *generalized boolean* that is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the strings are equal, or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> otherwise. 



The inequality functions return a *mismatch-index* that is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the strings are not equal, or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> otherwise. When the *mismatch-index* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, it is an *integer* representing the first character position at which the two substrings differ, as an offset from the beginning of *string1*. 



The comparison has one of the following results: 



<ClLinks styled={true} term={"string"}><b>string=</b></ClLinks> 



<ClLinks styled={true} term={"string"}><b>string=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the supplied substrings are of the same length and contain the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> characters in corresponding positions; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"string"}><b>string/=</b></ClLinks> 



<ClLinks styled={true} term={"string"}><b>string/=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the supplied substrings are different; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**string-equal** 



**string-equal** is just like <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks> except that differences in case are ignored; two characters are considered to be the same if <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> of them. 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt; 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt; is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if substring1 is less than substring2; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt; 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt; is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if substring1 is greater than substring2; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**string-lessp**, **string-greaterp** 



**string-lessp** and **string-greaterp** are exactly like <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt; and <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt;, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if <ClLinks styled={true} term={"char-lessp"}><b>char-lessp</b></ClLinks> were used instead of <ClLinks styled={true} term={"char"}><b>char</b></ClLinks>&lt; for comparing characters. 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if substring1 is less than or equal to substring2; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



 



 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if substring1 is greater than or equal to substring2; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. **string-not-greaterp**, **string-not-lessp** 



**string-not-greaterp** and **string-not-lessp** are exactly like <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> and <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>&gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if <ClLinks styled={true} term={"char-lessp"}><b>char-lessp</b></ClLinks> were used instead of <ClLinks styled={true} term={"char"}><b>char</b></ClLinks>&lt; for comparing characters. 



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



<ClLinks styled={true} term={"char="}><b>char=</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> calls <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks> if applied to two <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>. 



