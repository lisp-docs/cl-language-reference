 

The *upgraded array element type* of a *type T*&#60;sub&#62;1&#60;/sub&#62; is a *type T*&#60;sub&#62;2&#60;/sub&#62; that is a *supertype* of *T*&#60;sub&#62;1&#60;/sub&#62; and that is used instead of *T*&#60;sub&#62;1&#60;/sub&#62; whenever *T*&#60;sub&#62;1&#60;/sub&#62; is used as an *array element type* for object creation or type discrimination. 

During creation of an *array*, the *element type* that was requested is called the *expressed array element type*. The *upgraded array element type* of the *expressed array element type* becomes the *actual array element type* of the *array* that is created. 

&#60;i&#62;Type upgrading&#60;/i&#62; implies a movement upwards in the type hierarchy lattice. A &#60;i&#62;type&#60;/i&#62; is always a &#60;i&#62;subtype&#60;/i&#62; of its &#60;i&#62;upgraded array element type&#60;/i&#62;. Also, if a &#60;i&#62;type T&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62; is a &#60;i&#62;subtype&#60;/i&#62; of another &#60;i&#62;type T&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62;, then the &#60;i&#62;upgraded array element type&#60;/i&#62; of &#60;i&#62;T&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62; must be a &#60;i&#62;subtype&#60;/i&#62; of the &#60;i&#62;upgraded array element type&#60;/i&#62; of &#60;i&#62;T&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62;. Two &#60;i&#62;disjoint types&#60;/i&#62; can be &#60;i&#62;upgraded&#60;/i&#62; to the same &#60;i&#62;type&#60;/i&#62;. 

The *upgraded array element type T*&#60;sub&#62;2&#60;/sub&#62; of a *type T*&#60;sub&#62;1&#60;/sub&#62; is a function only of *T*&#60;sub&#62;1&#60;/sub&#62; itself; that is, it is independent of any other property of the *array* for which *T*&#60;sub&#62;2&#60;/sub&#62; will be used, such as *rank*, *adjustability*, *fill pointers*, or displacement. The *function* **upgraded-array-element-type** can be used by *conforming programs* to predict how the *implementation* will *upgrade* a given *type*. 

