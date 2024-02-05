Compile-file processing of the user interface macros
====================================================

### Compile-file processing of the user interface macros

It is common practice for Common Lisp compilers, while processing a file or set of files, to maintain information about the definitions that have been compiled so far. Among other things, this makes it possible to ensure that a global macro definition ([defmacro](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmac.htm#defmacro) form) which appears in a file will affect uses of the macro later in that file. This information about the state of the compilation is called the *compile-file environment*.

When compiling files containing CLOS definitions, it is useful to maintain certain additional information in the compile-file environment. This can make it possible to issue various kinds of warnings (e.g., lambda list congruence) and to do various performance optimizations that would not otherwise be possible.

At this time, there is such significant variance in the way existing Common Lisp implementations handle compile-file environments that it would be premature to specify this mechanism. Consequently, this document specifies only the behavior of evaluating or executing user interface macro forms. What functions and generic functions are called during compile-file processing of a user interface macro form is not specified. Implementations are free to define and document their own behavior. Users may need to check implementation-specific behavior before attempting to compile certain portable programs.
