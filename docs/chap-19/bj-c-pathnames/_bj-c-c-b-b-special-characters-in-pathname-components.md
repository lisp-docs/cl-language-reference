
<GlossaryTerm  term={"string"}><i>Strings</i></GlossaryTerm> in <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component values never contain special <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that represent separation between <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> fields, such as <GlossaryTerm  term={"slash"}><i>slash</i></GlossaryTerm> in Unix <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm>. Whether separator <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are permitted as part of a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> in a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>; however, if the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> does permit it, it must arrange to properly “quote” the character for the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> when constructing a <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm>. For example,

<!-- replaced ∧ with ^ -->

```lisp
;; In a TOPS-20 implementation, which uses ^V to quote
(NAMESTRING (MAKE-PATHNAME :HOST "OZ" :NAME "<TEST>"))
→ #P"OZ:PS:^V<TEST^V>"
NOT → #P"OZ:PS:<TEST>"
```

:::info
Replaced `∧` with `^`
:::
