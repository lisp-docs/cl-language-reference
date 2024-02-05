<!-- Restrictions on implementations
===============================

#### Restrictions on implementations -->

Implementations are allowed latitude to modify the structure of specified classes and methods. This includes: the interposition of implementation-specific classes; the promotion of specified methods; and the consolidation of two or more specified methods into a single method specialized to interposed classes.

Any such modifications are permitted only so long as for any portable class *C*~p~ that is a subclass of one or more specified classes *C*~0~ ... *C*~i~, the following conditions are met:

- In the actual class precedence list of *C*~p~, the classes *C*~0~ ... *C*~i~ must appear in the same order as they would have if no implementation-specific modifications had been made.

- The method applicability of any specified generic function must be the same in terms of behavior as it would have been had no implementation-specific changes been made. This includes specified generic functions that have had portable methods added. In this context, the expression ``the same in terms of behavior'' means that methods with the same behavior as those specified are applicable, and in the same order.

- No portable class *C*~p~ may inherit, by virtue of being a direct or indirect subclass of a specified class, any slot for which the name is a symbol accessible in the `common-lisp-user` package or exported by any package defined in the ANSI Common Lisp standard.

- Implementations are free to define implementation-specific before- and after-methods on specified generic functions. Implementations are also free to define implementation-specific around-methods with extending behavior.
