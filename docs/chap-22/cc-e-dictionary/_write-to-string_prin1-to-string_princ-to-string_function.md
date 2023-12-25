**write-to-string, prin1-to-string, princ-to-string** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;key *array base case circle escape gensym* 



*length level lines miser-width pprint-dispatch* 



*pretty radix readably right-margin* 



*→ string* 



<DictionaryLink styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></DictionaryLink> *object → string* 



<DictionaryLink styled={true} term={"princ-to-string"}><b>princ-to-string</b></DictionaryLink> *object → string* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—a *generalized boolean*. 



*base*—a <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> . 







 



 



**write-to-string, prin1-to-string, princ-to-string** 



<GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (member :upcase :downcase :capitalize). 



*circle*—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"escape"}><i>escape</i></GlossaryTerm>—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"gensym"}><i>gensym</i></GlossaryTerm>—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm>—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*level*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*lines*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*miser-width*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*pprint-dispatch*—a *pprint dispatch table*. 



*pretty*—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"readably"}><i>readably</i></GlossaryTerm>—a *generalized boolean*. 



*right-margin*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></DictionaryLink>, and <DictionaryLink styled={true} term={"princ-to-string"}><b>princ-to-string</b></DictionaryLink> are used to create a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> consisting of the printed representation of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"object"}><i>Object</i></GlossaryTerm> is effectively printed as if by <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink>, or <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>, respectively, and the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that would be output are made into a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink> is the general output function. It has the ability to specify all the parameters applicable to the printing of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></DictionaryLink> acts like <DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink> with :escape t, that is, escape characters are written where appropriate. 



<DictionaryLink styled={true} term={"princ-to-string"}><b>princ-to-string</b></DictionaryLink> acts like <DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink> with :escape nil :readably nil. Thus no *escape characters* are written. 



All other keywords that would be specified to <DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink> are default values when <DictionaryLink styled={true} term={"prin1-to-string"}><b>prin1-to-string</b></DictionaryLink> or <DictionaryLink styled={true} term={"princ-to-string"}><b>princ-to-string</b></DictionaryLink> is invoked. 



The meanings and defaults for the keyword arguments to <DictionaryLink styled={true} term={"write-to-string"}><b>write-to-string</b></DictionaryLink> are the same as those for <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>. 



**Examples:**
```lisp

(prin1-to-string "abc") *→* "\"abc\"" 



(princ-to-string "abc") *→* "abc" 

```
**Affected By:** 



<DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-radix"}><b>\*print-radix\*</b></DictionaryLink>, **\*print-base\***, <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>, **\*print-level\***, <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> 



**Notes:** 



(write-to-string *object \{key argument\}*\*) 



*≡* (with-output-to-string (#1=#:string-stream) 



(write object :stream #1# *\{key argument\}*\*)) 



(princ-to-string <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) 



*≡* (with-output-to-string (string-stream) 



(princ <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> string-stream)) 



(prin1-to-string <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) 



*≡* (with-output-to-string (string-stream) 



(prin1 <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> string-stream)) 



