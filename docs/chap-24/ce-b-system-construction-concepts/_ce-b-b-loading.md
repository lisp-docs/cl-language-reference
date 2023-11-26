**24.1.1 Loading** 

To **load** a *file* is to treat its contents as *code* and *execute* that *code*. The *file* may contain *source code* or *compiled code*. 

A *file* containing *source code* is called a *source file*. *Loading* a *source file* is accomplished essentially by sequentially *reading*\<sub\>2\</sub\> the *forms* in the file, *evaluating* each immediately after it is *read*. 

A *file* containing *compiled code* is called a *compiled file*. *Loading* a *compiled file* is similar to *loading* a *source file*, except that the *file* does not contain text but rather an *implementation dependent* representation of pre-digested *expressions* created by the *compiler* . Often, a *compiled file* can be *loaded* more quickly than a *source file*. See Section 3.2 (Compilation). 

The way in which a *source file* is distinguished from a *compiled file* is *implementation-dependent*.

 