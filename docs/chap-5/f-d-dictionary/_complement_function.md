**complement** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"complement"}><b>complement</b></DictionaryLink> *function → complement-function* 



**Arguments and Values:** 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



*complement-function*—a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that takes the same <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> as <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, and has the same side-effect behavior as <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, but returns only a single value: a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> with the opposite truth value of that which would be returned as the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. That is, when the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> would have returned <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> the *complement-function* returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, and when the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> would have returned <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> the *complement-function* returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



**Examples:**
```lisp
(funcall (complement #’zerop) 1) → true 
(funcall (complement #’characterp) #\A) → false 
(funcall (complement #’member) ’a ’(a b c)) → false 
(funcall (complement #’member) ’d ’(a b c)) → true 
```
**See Also:** 



<DictionaryLink  term={"not"}><b>not</b></DictionaryLink> 



**Notes:** 



(complement *x*) *≡* #’(lambda (&amp;rest arguments) (not (apply *x* arguments))) 



In Common Lisp, functions with names like “*xxx*-if-not” are related to functions with names like “*xxx*-if” in that 



(*xxx*-if-not *f* . <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>) *≡* (*xxx*-if (complement *f*) . <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>) 



For example, 



(find-if-not #’zerop ’(0 0 3)) *≡* 



(find-if (complement #’zerop) ’(0 0 3)) → 3 



Data and Control 











Note that since the “*xxx*-if-not” <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> and the :test-not arguments have been deprecated, uses of “*xxx*-if” <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> or :test arguments with <DictionaryLink  term={"complement"}><b>complement</b></DictionaryLink> are preferred. 



