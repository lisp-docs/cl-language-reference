**write-to-string, prin1-to-string, princ-to-string** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;key *array base case circle escape gensym* 



*length level lines miser-width pprint-dispatch* 



*pretty radix readably right-margin* 



→ string 



<ClLinks styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></ClLinks> *object → string* 



<ClLinks styled={true} term={"princ-to-string"}><b>princ-to-string</b></ClLinks> *object → string* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—a *generalized boolean*. 



*base*—a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . 







 



 



**write-to-string, prin1-to-string, princ-to-string** 



<ClLinks styled={true} term={"case"}><i>case</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (member :upcase :downcase :capitalize). 



*circle*—a *generalized boolean*. 



<ClLinks styled={true} term={"escape"}><i>escape</i></ClLinks>—a *generalized boolean*. 



<ClLinks styled={true} term={"gensym"}><i>gensym</i></ClLinks>—a *generalized boolean*. 



<ClLinks styled={true} term={"length"}><i>length</i></ClLinks>—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*level*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*lines*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*miser-width*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*pprint-dispatch*—a *pprint dispatch table*. 



*pretty*—a *generalized boolean*. 



<ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>—a *generalized boolean*. 



<ClLinks styled={true} term={"readably"}><i>readably</i></ClLinks>—a *generalized boolean*. 



*right-margin*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks>, <ClLinks styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></ClLinks>, and <ClLinks styled={true} term={"princ-to-string"}><b>princ-to-string</b></ClLinks> are used to create a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> consisting of the printed representation of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. <ClLinks styled={true} term={"object"}><i>Object</i></ClLinks> is effectively printed as if by <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks>, or <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>, respectively, and the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that would be output are made into a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



<ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks> is the general output function. It has the ability to specify all the parameters applicable to the printing of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></ClLinks> acts like <ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks> with :escape t, that is, escape characters are written where appropriate. 



<ClLinks styled={true} term={"princ-to-string"}><b>princ-to-string</b></ClLinks> acts like <ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks> with :escape nil :readably nil. Thus no *escape characters* are written. 



All other keywords that would be specified to <ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks> are default values when <ClLinks styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></ClLinks> or <ClLinks styled={true} term={"princ-to-string"}><b>princ-to-string</b></ClLinks> is invoked. 



The meanings and defaults for the keyword arguments to <ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks> are the same as those for <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>. 



**Examples:**
```lisp

(prin1-to-string "abc") → "\"abc\"" 



(princ-to-string "abc") → "abc" 

```
**Affected By:** 



<ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks>, **\*print-base\***, <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>, <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>, **\*print-level\***, <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>, <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks>, <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks>, <ClLinks styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> 



**Notes:** 



(write-to-string *object \{key argument\}*\*) 



*≡* (with-output-to-string (#1=#:string-stream) 



(write object :stream #1# *\{key argument\}*\*)) 



(princ-to-string <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) 



*≡* (with-output-to-string (string-stream) 



(princ <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> string-stream)) 



(prin1-to-string <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) 



*≡* (with-output-to-string (string-stream) 



(prin1 <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> string-stream)) 



