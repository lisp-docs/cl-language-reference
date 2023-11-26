**15.1.2.1 Array Upgrading** 

The *upgraded array element type* of a *type T*\<sub\>1\</sub\> is a *type T*\<sub\>2\</sub\> that is a *supertype* of *T*\<sub\>1\</sub\> and that is used instead of *T*\<sub\>1\</sub\> whenever *T*\<sub\>1\</sub\> is used as an *array element type* for object creation or type discrimination. 

During creation of an *array*, the *element type* that was requested is called the *expressed array element type*. The *upgraded array element type* of the *expressed array element type* becomes the *actual array element type* of the *array* that is created. 

\<i\>Type upgrading\</i\> implies a movement upwards in the type hierarchy lattice. A \<i\>type\</i\> is always a \<i\>subtype\</i\> of its \<i\>upgraded array element type\</i\>. Also, if a \<i\>type T\<sub\>x\</sub\>\</i\> is a \<i\>subtype\</i\> of another \<i\>type T\<sub\>y\</sub\>\</i\>, then the \<i\>upgraded array element type\</i\> of \<i\>T\<sub\>x\</sub\>\</i\> must be a \<i\>subtype\</i\> of the \<i\>upgraded array element type\</i\> of \<i\>T\<sub\>y\</sub\>\</i\>. Two \<i\>disjoint types\</i\> can be \<i\>upgraded\</i\> to the same \<i\>type\</i\>. 

The *upgraded array element type T*\<sub\>2\</sub\> of a *type T*\<sub\>1\</sub\> is a function only of *T*\<sub\>1\</sub\> itself; that is, it is independent of any other property of the *array* for which *T*\<sub\>2\</sub\> will be used, such as *rank*, *adjustability*, *fill pointers*, or displacement. The *function* **upgraded-array-element-type** can be used by *conforming programs* to predict how the *implementation* will *upgrade* a given *type*. 

