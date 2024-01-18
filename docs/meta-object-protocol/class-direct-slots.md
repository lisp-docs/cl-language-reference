class-direct-slots
==================

*Generic Function* **CLASS-DIRECT-SLOTS**

**Syntax:**

**class-direct-slots** *class* => *slots*

**Arguments and values:**

*class* -- A class metaobject.

*slots* -- List of direct slot definition metaobjects.

**Description:**

Returns a set of the direct slots of *class*. The elements of this set are direct slot definition metaobjects. If the class has no direct slots, the empty set is returned. This is the defaulted value of the `:direct-slots` initialization argument that was associated with the class during initialization and reinitialization.

**Methods:**

  -----------------------------------------------------------------------------------------------------------------
  [**class-direct-slots** (*class* standard-class)](/docs/meta-object-protocol/class-direct-slots-standard-class)
  [**class-direct-slots** (*class* funcallable-standard-class)](/docs/meta-object-protocol/class-direct-slots-funcallable-standard-class)
  [**class-direct-slots** (*class* forward-referenced-class)](/docs/meta-object-protocol/class-direct-slots-forward-referenced-class)
  [**class-direct-slots** (*class* built-in-class)](/docs/meta-object-protocol/class-direct-slots-built-in-class)
  -----------------------------------------------------------------------------------------------------------------


