
# `trivial-*` Package / Implementation Support

The idea of this section is for portability. Please take a look at the origin of this content and most updated version here: [https://portability.cl/](https://portability.cl/).

These are the implementations covered in tha table below:

- ABCL
- ALLEGRO
- CCL
- CLASP
- CLISP
- CMUCL
- CORMAN
- ECL
- JSCL
- LISPWORKS
- MEZZANO
- MKCL
- SBCL

The following packages are covered in the table below:

- ATOMICS
- BORDEAUX-THREADS
- CFFI
- CL-ENVIRONMENTS
- CLAST
- CLOSER-MOP
- DEFINITIONS
- DISSECT
- FLOAT-FEATURES
- GLOBAL-VARS
- INTROSPECT-ENVIRONMENT
- NONTRIVIAL-GRAY-STREAMS
- SHUT-IT-DOWN
- STATIC-VECTORS
- TRIVIAL-ARGUMENTS
- TRIVIAL-BACKTRACE
- TRIVIAL-CLTL2
- TRIVIAL-CUSTOM-DEBUGGER
- TRIVIAL-DEPRECATE
- TRIVIAL-ED-FUNCTIONS
- TRIVIAL-EXTENSIBLE-SEQUENCES
- TRIVIAL-FEATURES
- TRIVIAL-FILE-SIZE
- TRIVIAL-GARBAGE
- TRIVIAL-GRAY-STREAMS
- TRIVIAL-INSPECTOR-HOOK
- TRIVIAL-MACROEXPAND-ALL
- TRIVIAL-PACKAGE-LOCAL-NICKNAMES
- TRIVIAL-PACKAGE-LOCKS
- TRIVIAL-WITH-CURRENT-SOURCE-FORM
- UIOP

| IMPL /package | ABCL | ALLEGRO | CCL | CLASP | CLISP | CMUCL | CORMAN | ECL |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ATOMICS | 0% | 100% | 100% | 100% | 0% | 0% | 0% | 100% |
| BORDEAUX-THREADS | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |
| CFFI | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |
| CL-ENVIRONMENTS | 100% | 100% | 100% | 0% | 100% | 100% | 0% | 100% |
| CLAST | 0% | 100% | 100% | 0% | 0% | 100% | 0% | 0% |
| CLOSER-MOP | 100% | 100% | 100% | 100% | 100% | 100% | 0% | 100% |
| DEFINITIONS | 75% | 75% | 100% | 100% | 75% | 75% | 75% | 75% |
| DISSECT | 100% | 100% | 100% | 100% | 100% | 0% | 0% | 100% |
| FLOAT-FEATURES | 100% | 90% | 100% | 100% | 10% | 100% | 0% | 100% |
| GLOBAL-VARS | 0% | 0% | 100% | 0% | 0% | 0% | 0% | 0% |
| INTROSPECT-ENVIRONMENT | 0% | 0% | 100% | 100% | 0% | 100% | 0% | 0% |
| NONTRIVIAL-GRAY-STREAMS | 100% | 100% | 100% | 100% | 100% | 100% | 0% | 100% |
| SHUT-IT-DOWN | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |
| STATIC-VECTORS | 0% | 100% | 100% | 100% | 0% | 100% | 0% | 100% |
| TRIVIAL-ARGUMENTS | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |
| TRIVIAL-BACKTRACE | 0% | 100% | 100% | 100% | 100% | 100% | 0% | 0% |
| TRIVIAL-CLTL2 | 100% | 100% | 100% | 88% | 0% | 100% | 0% | 12% |
| TRIVIAL-CUSTOM-DEBUGGER | 100% | 100% | 100% | 100% | 100% | 0% | 0% | 100% |
| TRIVIAL-DEPRECATE | 75% | 75% | 75% | 75% | 75% | 75% | 75% | 75% |
| TRIVIAL-ED-FUNCTIONS | 100% | 100% | 100% | 100% | 0% | 0% | 0% | 100% |
| TRIVIAL-EXTENSIBLE-SEQUENCES | 100% | 0% | 0% | 100% | 0% | 0% | 0% | 0% |
| TRIVIAL-FEATURES | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |
| TRIVIAL-FILE-SIZE | 100% | 100% | 100% | 100% | 100% | 100% | 0% | 50% |
| TRIVIAL-GARBAGE | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |
| TRIVIAL-GRAY-STREAMS | 100% | 100% | 100% | 100% | 100% | 100% | 0% | 100% |
| TRIVIAL-INSPECTOR-HOOK | 100% | 100% | 100% | 100% | 0% | 0% | 0% | 100% |
| TRIVIAL-MACROEXPAND-ALL | 100% | 100% | 100% | 0% | 100% | 100% | 100% | 100% |
| TRIVIAL-PACKAGE-LOCAL-NICKNAMES | 100% | 100% | 100%\* | 100% | 0% | 0% | 0% | 100% |
| TRIVIAL-PACKAGE-LOCKS | 0% | 100% | 0% | 0% | 75% | 75% | 0% | 75% |
| TRIVIAL-WITH-CURRENT-SOURCE-FORM | 0% | 0% | 0% | 100%\* | 0% | 0% | 0% | 0% |
| UIOP | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |
| USOCKET | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 


| IMPL /package | JSCL | LISPWORKS | MEZZANO | MKCL | SBCL |
| ----- | ----- | ----- | ----- | ----- | ----- |
| ATOMICS | 0% | 100% | 100% | 0% | 100% |
| BORDEAUX-THREADS | 0% | 100% | 100% | 100% | 100% |
| CFFI | 0% | 100% | 0% | 100% | 100% |
| CL-ENVIRONMENTS | 0% | 100% | 0% | 0% | 100% |
| CLAST | 0% | 100% | 0% | 0% | 100% |
| CLOSER-MOP | 0% | 100% | 100% | 0% | 100% |
| DEFINITIONS | 75% | 75% | 75% | 75% | 100% |
| DISSECT | 0% | 0% | 0% | 0% | 100% |
| FLOAT-FEATURES | 0% | 90% | 100% | 90% | 100% |
| GLOBAL-VARS | 0% | 100% | 0% | 0% | 100% |
| INTROSPECT-ENVIRONMENT | 0% | 0% | 0% | 0% | 100% |
| NONTRIVIAL-GRAY-STREAMS | 0% | 100% | 100% | 100% | 100% |
| SHUT-IT-DOWN | 0% | 100% | 0% | 100% | 100% |
| STATIC-VECTORS | 0% | 100% | 0% | 0% | 100% |
| TRIVIAL-ARGUMENTS | 0% | 100% | 100% | 0% | 100% |
| TRIVIAL-BACKTRACE | 0% | 100% | 0% | 0% | 100% |
| TRIVIAL-CLTL2 | 0% | 0% | 0% | 0% | 100% |
| TRIVIAL-CUSTOM-DEBUGGER | 0% | 100% | 100% | 0% | 100% |
| TRIVIAL-DEPRECATE | 75% | 75% | 75% | 75% | 100% |
| TRIVIAL-ED-FUNCTIONS | 0% | 0% | 100% | 0% | 100% |
| TRIVIAL-EXTENSIBLE-SEQUENCES | 0% | 0% | 0% | 0% | 100% |
| TRIVIAL-FEATURES | 0% | 100% | 100% | 100% | 100% |
| TRIVIAL-FILE-SIZE | 0% | 50% | 0% | 0% | 100% |
| TRIVIAL-GARBAGE | 0% | 100% | 100% | 0% | 100% |
| TRIVIAL-GRAY-STREAMS | 0% | 100% | 100% | 100% | 100% |
| TRIVIAL-INSPECTOR-HOOK | 0% | 0% | 100% | 0% | 100% |
| TRIVIAL-MACROEXPAND-ALL | 0% | 100% | 0% | 100% | 100% |
| TRIVIAL-PACKAGE-LOCAL-NICKNAMES | 0% | 100%\* | 0% | 0% | 100% |
| TRIVIAL-PACKAGE-LOCKS | 0% | 0% | 0% | 0% | 100% |
| TRIVIAL-WITH-CURRENT-SOURCE-FORM | 0% | 0% | 0% | 0% | 100%\* |
| UIOP | 0% | 100% | 100% | 100% | 100% |
| USOCKET | 0% | 100% | 75% | 0% | 100% |
