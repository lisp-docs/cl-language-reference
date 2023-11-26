**A.1.1 Requirements for removed and deprecated features** 

For this standard, some features from the language described in *Common Lisp: The Language* have been removed, and others have been deprecated (and will most likely not appear in future Common Lisp standards). Which features were removed and which were deprecated was decided on a case-by-case basis by the X3J13 committee. 

*Conforming implementations* that wish to retain any removed features for compatibility must assure that such compatibility does not interfere with the correct function of *conforming programs*. For example, symbols corresponding to the names of removed functions may not appear in the the COMMON-LISP *package*. (Note, however, that this specification has been devised in such a way that there can be a package named LISP which can contain such symbols.) 

*Conforming implementations* must implement all deprecated features. For a list of deprecated features, see Section 1.8 (Deprecated Language Features). 

