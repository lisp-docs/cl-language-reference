class-prototype
===============

*Generic Function* **CLASS-PROTOTYPE**

**Syntax:**

**class-prototype** *class* => *prototype-instance*

**Arguments and values:**

*class* -- A class metaobject.

*prototype-instance* -- A prototype instance of *class*

**Description:**

Returns a prototype instance of *class*. Whether the instance is initialized is not specified. The results are undefined if a portable program modifies the binding of any slot of prototype instance.

**Methods:**

  --------------------------------------------------------------------------------------------------------------------
  [**class-prototype** (*class* standard-class) *method*](class-prototype-standard-class.md)
  [**class-prototype** (*class* funcallable-standard-class) *method*](class-prototype-funcallable-standard-class.md)
  [**class-prototype** (*class* forward-referenced-class) *method*](class-prototype-forward-referenced-class.md)
  [**class-prototype** (*class* built-in-class) *method*](class-prototype-built-in-class.md)
  --------------------------------------------------------------------------------------------------------------------


