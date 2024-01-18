class-name
==========

[*Generic Function* **CLASS-NAME**]()

**Syntax:**

**class-name** *class* => *name*

**Arguments and values:**

*class* -- A class metaobject.

*name* -- An object.

**Description:**

[Returns the name of *class*. This value can be any Lisp object, but is usually a symbol, or `nil` if the class has no name. This is the defaulted value of the `:name` initialization argument that was associated with the class during initialization or reinitialization. (Also see]()[(setf class-name)](setf-class-name.md).)

**Methods:**

  -------------------------------------------------------------------------------------------------
  [**class-name** (*class* standard-class)](class-name-standard-class.md)
  [**class-name** (*class* funcallable-standard-class)](class-name-funcallable-standard-class.md)
  [**class-name** (*class* forward-referenced-class)](class-name-forward-referenced-class.md)
  [**class-name** (*class* built-in-class)](class-name-built-in-class.md)
  -------------------------------------------------------------------------------------------------


