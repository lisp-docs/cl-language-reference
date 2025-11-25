A *generalized reference* is the use of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, sometimes called a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, as if it were a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> that could be read and written. The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> is the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> to which the *place form* evaluates. The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> can be changed by using <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. The concept of binding a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> is not defined in Common Lisp, but an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to extend the language by defining this concept.

Figure 5–1 contains examples of the use of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. Note that the values returned by evaluating the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in column two are not necessarily the same as those obtained by evaluating the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in column three. In general, the exact *macro expansion* of a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is not guaranteed and can even be <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; all that is guaranteed is that the expansion is an update form that works for that particular <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>, that the left-to-right evaluation of <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> is preserved, and that the ultimate result of evaluating <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> is the value or values being stored.

| **Access function** | **Update Function** | **Update using setf** |
| :------------------ | :------------------ | :-------------------- |
| `x`                 | `(setq x datum)`    | `(setf x datum)`      |
| `(car x)`           | `(rplaca x datum)`  | `(setf (car x) datum)`|
| `(symbol-value x)`  | `(set x datum)`     | `(setf (symbol-value x) datum)` |

**Figure 5–1. Examples of setf**

Figure 5–2 shows <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> relating to <GlossaryTerm  term={"place"}><i>places</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"generalized reference"}><i>generalized reference</i></GlossaryTerm>.

| | | |
| :-- | :-- | :-- |
| `assert` | `defsetf` | `push` |
| `ccase` | `get-setf-expansion` | `remf` |
| `ctypecase` | `getf` | `rotatef` |
| `decf` | `incf` | `setf` |
| `define-modify-macro` | `pop` | `shiftf` |
| `define-setf-expander` | `psetf` | |

**Figure 5–2. Operators relating to places and generalized reference.**

Some of the <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> above manipulate <GlossaryTerm  term={"place"}><i>places</i></GlossaryTerm> and some manipulate <GlossaryTerm styled={true} term={"setf expander"}><i>setf expanders</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm> can be derived from any <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. New <GlossaryTerm styled={true} term={"setf expander"}><i>setf expanders</i></GlossaryTerm> can be defined by using <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> and <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>.

Data and Control

