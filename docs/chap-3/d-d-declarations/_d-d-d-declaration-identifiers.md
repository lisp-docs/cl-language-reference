Figure 3–9 shows a list of all <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> defined by this standard.

| Common Lisp Declaration Identifiers |
| :---------------------------------- |
| `declaration`                       |
| `ignore`                            |
| `special`                           |
| `dynamic-extent`                    |
| `inline`                            |
| `type`                              |
| `ftype`                             |
| `notinline`                         |
| `ignorable`                         |
| `optimize`                          |

**Figure 3–9. Common Lisp Declaration Identifiers**

An implementation is free to support other (<GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> as well. A warning might be issued if a <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifier</i></GlossaryTerm> is not among those defined above, is not defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>, is not a *type name*, and has not been declared in a <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm>.



