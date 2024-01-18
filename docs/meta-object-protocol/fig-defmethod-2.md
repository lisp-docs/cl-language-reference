# defmethod expansion

```lisp
    (let ((gf (ensure-generic-function 'move)))
      (make-method-lambda
        gf
        (class-prototype (generic-function-method-class gf))
        '(lambda (p l &optional (visiblyp t) &key color)
           (set-to-origin p)
           (when visiblyp (show-move p 0 color)))
       environment))
```

------------------------------------------------------------------------

During macro-expansion of the `defmethod` macro shown in [this figure](/docs/meta-object-protocol/fig-defmethod-1), code similar to this would be run to produce the method lambda and additional initargs. In this example, *environment* is the macroexpansion environment of the `defmethod` macro form.
