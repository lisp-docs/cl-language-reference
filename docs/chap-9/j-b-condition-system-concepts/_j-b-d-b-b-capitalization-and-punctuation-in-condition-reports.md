It is recommended that a <GlossaryTerm styled={true} term={"report message"}><i>report message</i></GlossaryTerm> be a complete sentences, in the proper case and correctly punctuated. In English, for example, this means the first letter should be uppercase, and there should be a trailing period.

```lisp
(error "This is a message") ; Not recommended

(error "this is a message.") ; Not recommended

(error "This is a message.") ; Recommended instead
```

