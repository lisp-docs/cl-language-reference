
**&amp;rest**, if present, must be followed by a single <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> specifier, which in turn must be followed by another <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keyword</i></GlossaryTerm> or the end of the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>. After all optional parameter specifiers have been processed, then there may or may not be a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> . If there is a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> , it is bound to a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of all as-yet-unprocessed arguments. If no unprocessed arguments remain, the <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> is bound to the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. If there is no <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> and there are no <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm>, then an error should be signaled if any unprocessed arguments remain; see Section 3.5 (Error Checking in Function Calls). The value of a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> is permitted, but not required, to share structure with the last argument to <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>.

#### Additional Notes and Examples

Note that the syntax order specifies that `&rest` parameters must be written *before* the `&key` parameters.

Also note that if there are keyword parameters, then all the rest parameters will have to be keyword parameters and therefore it will always have to be an even number of parameters that the lambda list represents as the `&rest` parameters. Meaning it will always expect all additional parameters to be of the form `:key value` pairs.

If there are no keyword parameters, then the rest parameters do not have to have keys, which allows for an odd number of parameters.

```lisp
(flet ((hello (a b &rest c)
	 (list a b c)))
  (hello 1 2 3 4 5 6 7))
=> (1 2 (3 4 5 6 7))

(flet ((hello (a b &rest c)
	 (list a b c)))
  (hello 1 2 3))

=> (1 2 (3))

```

Notes:

- `&rest` is taking in all the additional passed in parameters as a list, so even if there was just one additional parameter it would still be in a list.

```lisp
(flet ((hello (a b &rest rest &key c &allow-other-keys)
	 (list a b c rest)))
  (hello 1 2 :c 3 :d 4 :e 5 :f 6 :g 7))
=> (1 2 3 (:C 3 :D 4 :E 5 :F 6 :G 7))
```

Things to note:

- `&allow-other-keys` does not take in another parameter like `t`, rather it's presence is all that is required.
- `&allow-other-keys` together with `&rest` is what is allowing us to take in any parameters as long as they are in keyword value pairs.
- If `&key` was not specified, then we would not need `&allow-other-keys` for `&rest` to be able to take in more parameters. Like we see in the first set of examples.
- It is **not possible** to both have a lambda list which defines keys (keyword value pairs) and takes in an unspecified number of parameters with `&rest`.
