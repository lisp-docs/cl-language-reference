**4.2.2 Type Relationships** 

*•* The *types* **cons**, **symbol**, **array**, **number**, **character**, **hash-table**, **function**, **readtable**, **package**, **pathname**, **stream**, **random-state**, **condition**, **restart**, and any single other *type* created by **defstruct**, **define-condition**, or **defclass** are *pairwise disjoint*, except for type relations explicitly established by specifying *superclasses* in **defclass** or **define-condition** or the :include option of **destruct**. 

*•* Any two *types* created by **defstruct** are *disjoint* unless one is a *supertype* of the other by virtue of the **defstruct** :include option. 

*•* Any two *distinct classes* created by **defclass** or **define-condition** are *disjoint* unless they have a common *subclass* or one *class* is a *subclass* of the other. 

*•* An implementation may be extended to add other *subtype* relationships between the specified *types*, as long as they do not violate the type relationships and disjointness requirements specified here. An implementation may define additional *types* that are *subtypes* or *supertypes* of any specified *types*, as long as each additional *type* is a *subtype* of 

*type* **t** and a *supertype* of *type* **nil** and the disjointness requirements are not violated. 





At the discretion of the implementation, either **standard-object** or **structure-object** might appear in any class precedence list for a *system class* that does not already specify either **standard-object** or **structure-object**. If it does, it must precede the *class* **t** and follow all other *standardized classes*. 

