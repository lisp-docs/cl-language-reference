
<ClLinks styled={true} term={"string"}><i>Strings</i></ClLinks> in <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> component values never contain special <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that represent separation between <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> fields, such as <ClLinks styled={true} term={"slash"}><i>slash</i></ClLinks> in Unix <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks>. Whether separator <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are permitted as part of a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> in a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> component is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>; however, if the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> does permit it, it must arrange to properly “quote” the character for the *file system* when constructing a <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks>. For example,

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
