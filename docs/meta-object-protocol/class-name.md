class-name
==========

*Generic Function* **CLASS-NAME**

**Syntax:**

**class-name** *class* => *name*

**Arguments and values:**

*class* -- A class metaobject.

*name* -- An object.

**Description:**

Returns the name of *class*. This value can be any Lisp object, but is usually a symbol, or `nil` if the class has no name. This is the defaulted value of the `:name` initialization argument that was associated with the class during initialization or reinitialization. (Also see[(setf class-name)](/docs/meta-object-protocol/setf-class-name).)

**Methods:**

  -------------------------------------------------------------------------------------------------
  [**class-name** (*class* standard-class)](/docs/meta-object-protocol/class-name-standard-class)
  [**class-name** (*class* funcallable-standard-class)](/docs/meta-object-protocol/class-name-funcallable-standard-class)
  [**class-name** (*class* forward-referenced-class)](/docs/meta-object-protocol/class-name-forward-referenced-class)
  [**class-name** (*class* built-in-class)](/docs/meta-object-protocol/class-name-built-in-class)
  -------------------------------------------------------------------------------------------------


