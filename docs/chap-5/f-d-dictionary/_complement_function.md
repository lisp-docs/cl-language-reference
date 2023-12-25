**complement** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"complement"}><b>complement</b></DictionaryLink> *function → complement-function* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



*complement-function*—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that takes the same <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, and has the same side-effect behavior as <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, but returns only a single value: a *generalized boolean* with the opposite truth value of that which would be returned as the *primary value* of <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. That is, when the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> would have returned <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> as its *primary value* the *complement-function* returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, and when the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> would have returned <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> as its *primary value* the *complement-function* returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**Examples:**
```lisp

(funcall (complement #’zerop) 1) *→ true* 
(funcall (complement #’characterp) #\A) *→ false* 
(funcall (complement #’member) ’a ’(a b c)) *→ false* 
(funcall (complement #’member) ’d ’(a b c)) *→ true* 

```
**See Also:** 



<DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> 



**Notes:** 



(complement *x*) *≡* #’(lambda (&amp;rest arguments) (not (apply *x* arguments))) 



In Common Lisp, functions with names like “*xxx*-if-not” are related to functions with names like “*xxx*-if” in that 



(*xxx*-if-not *f* . <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) *≡* (*xxx*-if (complement *f*) . <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) 



For example, 



(find-if-not #’zerop ’(0 0 3)) *≡* 



(find-if (complement #’zerop) ’(0 0 3)) *→* 3 



Data and Control 











Note that since the “*xxx*-if-not” <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> and the :test-not arguments have been deprecated, uses of “*xxx*-if” <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> or :test arguments with <DictionaryLink styled={true} term={"complement"}><b>complement</b></DictionaryLink> are preferred. 



