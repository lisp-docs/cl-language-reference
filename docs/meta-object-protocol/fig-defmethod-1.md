# defmethod expansion

```lisp
    (defmethod move :before ((p position) (l (eql 0))
                             &optional (visiblyp t)
                             &key color)
      (set-to-origin p)
      (when visiblyp (show-move p 0 color)))

    (let ((#:g001 (ensure-generic-function 'move)))
      (add-method #:g001
        (make-instance (generic-function-method-class #:g001)
                       ':qualifiers '(:before)
                       ':specializers (list (find-class 'position)
                                            (intern-eql-specializer 0))
                       ':lambda-list '(p l &optional (visiblyp t)
                                           &key color)
                       ':function (functionem method-lambdatt)
                       'additional-initarg-1 't
                       'additional-initarg-2 '39)))
```
------------------------------------------------------------------------

An example `defmethod` form and one possible correct expansion. In the expansion, *method-lambda* is the result of calling [make-method-lambda](/meta-object-protocol/make-method-lambda) as described in [the section ``Processing Method Bodies''.](/meta-object-protocol/processing-method-bodies) The initargs appearing after `function` are assumed to be additional initargs returned from the call to [make-method-lambda](/meta-object-protocol/make-method-lambda).
