**1+, 1***− Function*

**Syntax:**

<DictionaryLink  term={"1+"}><b>1+</b></DictionaryLink> *number → successor*

<DictionaryLink  term={"1"}><b>1*</b></DictionaryLink>− number → predecessor*

**Arguments and Values:**

<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

*successor*, *predecessor*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

**Description:**

<DictionaryLink  term={"1+"}><b>1+</b></DictionaryLink> returns a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> that is one more than its argument <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. **1-** returns a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> that is one less than its argument <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>.

**Examples:**

```lisp
(1+ 99) → 100 
(1- 100) → 99 
(1+ (complex 0.0)) → #C(1.0 0.0) 
(1- 5/3) → 2/3 
```

**Exceptional Situations:**

Might signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>.

**See Also:**

<DictionaryLink  term={"incf"}><b>incf</b></DictionaryLink>, <DictionaryLink  term={"decf"}><b>decf</b></DictionaryLink>

**Notes:**

(1+ <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>) *≡* (+ <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> 1)

(1- <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>) *≡* (- <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> 1)

Implementors are encouraged to make the performance of both the previous expressions be the same.
