A <DictionaryLink  term={"the"}><b>the</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> can be used as a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, in which case the declaration is transferred to the *newvalue* form, and the resulting <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> is analyzed.

For example,

```lisp
(setf (the integer (cadr x)) (+ y 3))
```



is processed as if it were

```lisp
(setf (cadr x) (the integer (+ y 3)))
```

Data and Control

