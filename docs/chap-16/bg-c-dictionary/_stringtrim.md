**string-trim, string-left-trim, string-right-trim** *Func tion* 



**Syntax:** 



**string-trim** *character-bag string → trimmed-string* 



**string-left-trim** *character-bag string → trimmed-string* 



**string-right-trim** *character-bag string → trimmed-string* 



**Arguments and Values:** 



*character-bag*—a *sequence* containing *characters*. 



*string*—a *string designator* . 



*trimmed-string*—a *string*. 



**Description:** 



**string-trim** returns a substring of *string*, with all characters in *character-bag* stripped off the beginning and end. **string-left-trim** is similar but strips characters off only the beginning; **string-right-trim** strips off only the end. 



If no *characters* need to be trimmed from the *string*, then either *string* itself or a copy of it may be returned, at the discretion of the implementation. 



All of these *functions* observe the *fill pointer* . 



**Examples:**
```lisp
 



(string-trim "abc" "abcaakaaakabcaaa") *→* "kaaak" 



(string-trim ’(#\Space #\Tab #\Newline) " garbanzo beans 



") *→* "garbanzo beans" 



(string-trim " (\*)" " ( \*three (silly) words\* ) ") 



*→* "three (silly) words" 



(string-left-trim "abc" "labcabcabc") *→* "labcabcabc" 



(string-left-trim " (\*)" " ( \*three (silly) words\* ) ") 



*→* "three (silly) words\* ) " 



(string-right-trim " (\*)" " ( \*three (silly) words\* ) ") 



*→* " ( \*three (silly) words" 







 



 




```
**Affected By:** 



The *implementation*. 



<b>string=, string/=, string</b><i><</i><b>, string</b><i>></i><b>, string</b><i><</i><b>=, <sup>string</sup></b>></i><b>=, string-equal, string-not-equal, string lessp, string-greaterp, string-not-greaterp, string not-lessp</b> <i>Function</i> 



**Syntax:** 



**string**= *string1 string2* &key *start1 end1 start2 end2 → generalized-boolean* 



**string/**= *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* 



**string**< *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* 



**string**> *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* 



**string**<= *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* 



**string**>= *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* 



**string-equal** *string1 string2* &key *start1 end1 start2 end2 → generalized-boolean* 



**string-not-equal** *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* **string-lessp** *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* **string-greaterp** *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* **string-not-greaterp** *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* **string-not-lessp** *string1 string2* &key *start1 end1 start2 end2 → mismatch-index* 



**Arguments and Values:** 



*string1*—a *string designator* . 



*string2*—a *string designator* . 



*start1*, *end1*—*bounding index designators* of *string1*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*start2*, *end2*—*bounding index designators* of *string2*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*generalized-boolean*—a *generalized boolean*. 



*mismatch-index*—a *bounding index* of *string1*, or **nil**. 



**Description:** 



These functions perform lexicographic comparisons on *string1* and *string2*. **string=** and **string-equal** are called equality functions; the others are called inequality functions. The 







 



 



**string=, string/=, string***<***, string***>***, string***<***=,** *. . .* 



comparison operations these *functions* perform are restricted to the subsequence of *string1 bounded* by *start1* and *end1* and to the subsequence of *string2 bounded* by *start2* and *end2*. 



A string *a* is equal to a string *b* if it contains the same number of characters, and the corresponding characters are the *same* under **char=** or **char-equal**, as appropriate. 



A string *a* is less than a string *b* if in the first position in which they differ the character of *a* is less than the corresponding character of *b* according to **char**< or **char-lessp** as appropriate, or if string *a* is a proper prefix of string *b* (of shorter length and matching in all the characters of *a*). 



The equality functions return a *generalized boolean* that is *true* if the strings are equal, or *false* otherwise. 



The inequality functions return a *mismatch-index* that is *true* if the strings are not equal, or *false* otherwise. When the *mismatch-index* is *true*, it is an *integer* representing the first character position at which the two substrings differ, as an offset from the beginning of *string1*. 



The comparison has one of the following results: 



**string=** 



**string=** is *true* if the supplied substrings are of the same length and contain the *same* characters in corresponding positions; otherwise it is *false*. 



**string/=** 



**string/=** is *true* if the supplied substrings are different; otherwise it is *false*. 



**string-equal** 



**string-equal** is just like **string=** except that differences in case are ignored; two characters are considered to be the same if **char-equal** is *true* of them. 



**string**< 



**string**< is *true* if substring1 is less than substring2; otherwise it is *false*. 



**string**> 



**string**> is *true* if substring1 is greater than substring2; otherwise it is *false*. 



**string-lessp**, **string-greaterp** 



**string-lessp** and **string-greaterp** are exactly like **string**< and **string**>, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if **char-lessp** were used instead of **char**< for comparing characters. 



**string**<**=** 



**string**<**=** is *true* if substring1 is less than or equal to substring2; otherwise it is *false*. 



 



 



**string**>**=** 



**string**>**=** is *true* if substring1 is greater than or equal to substring2; otherwise it is *false*. **string-not-greaterp**, **string-not-lessp** 



**string-not-greaterp** and **string-not-lessp** are exactly like **string**<**=** and **string**>**=**, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if **char-lessp** were used instead of **char**< for comparing characters. 



**Examples:** 



(string= "foo" "foo") *→ true* 



(string= "foo" "Foo") *→ false* 



(string= "foo" "bar") *→ false* 



(string= "together" "frog" :start1 1 :end1 3 :start2 2) *→ true* 



(string-equal "foo" "Foo") *→ true* 



(string= "abcd" "01234abcd9012" :start2 5 :end2 9) *→ true* 



(string< "aaaa" "aaab") *→* 3 



(string>= "aaaaa" "aaaa") *→* 4 



(string-not-greaterp "Abcde" "abcdE") *→* 5 



(string-lessp "012AAAA789" "01aaab6" :start1 3 :end1 7 



:start2 2 :end2 6) *→* 6 



(string-not-equal "AAAA" "aaaA") *→ false* 



**See Also:** 



**char=** 



**Notes:** 



**equal** calls **string=** if applied to two *strings*. 



