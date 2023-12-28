
The next *arg* must be a <GlossaryTerm styled={true} term={"format control"}><i>format control</i></GlossaryTerm>, and the one after it a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>; both are consumed by the `~`? directive. The two are processed as a *control-string*, with the elements of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> as the arguments. Once the recursive processing has been finished, the processing of the control string containing the `~`? directive is resumed. Example:

```lisp
(format nil "~? ~D" "<~A ~D>" ’("Foo" 5) 7) → "<Foo 5> 7"
(format nil "~? ~D" "<~A ~D>" ’("Foo" 5 14) 7) → "<Foo 5> 7"
```

Note that in the second example three arguments are supplied to the <GlossaryTerm styled={true} term={"format string"}><i>format string</i></GlossaryTerm> `<~A ~D>`, but only two are processed and the third is therefore ignored.

With the `@` modifier, only one *arg* is directly consumed. The *arg* must be a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; it is processed as part of the control string as if it had appeared in place of the `~@?` construct, and any directives in the recursively processed control string may consume arguments of the control string containing the `~@?` directive. Example:

```lisp
(format nil "~@? ~D" "<~A ~D>" "Foo" 5 7) → "<Foo 5> 7"
(format nil "~@? ~D" "<~A ~D>" "Foo" 5 14 7) → "<Foo 5> 14"
```
