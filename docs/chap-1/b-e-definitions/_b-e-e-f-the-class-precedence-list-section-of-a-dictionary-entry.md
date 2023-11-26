**1.4.4.5 The “Class Precedence List” Section of a Dictionary Entry** 

This appears in the dictionary entry for a *class*, and contains an ordered list of the *classes* defined by Common Lisp that must be in the *class precedence list* of this *class*. 

It is permissible for other (*implementation-defined*) *classes* to appear in the *implementation*’s *class precedence list* for the *class*. 

It is permissible for either **standard-object** or **structure-object** to appear in the *implementation*’s *class precedence list*; for details, see Section 4.2.2 (Type Relationships). 

Except as explicitly indicated otherwise somewhere in this specification, no additional *standardized classes* may appear in the *implementation*’s *class precedence list*. 

By definition of the relationship between *classes* and *types*, the *classes* listed in this section are also *supertypes* of the *type* denoted by the *class*. 

