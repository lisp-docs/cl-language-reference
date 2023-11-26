**2.1.1.1 The Current Readtable** 

Several *readtables* describing different syntaxes can exist, but at any given time only one, called the *current readtable*, affects the way in which *expressions*\<sub\>2\</sub\> are parsed into *objects* by the *Lisp reader* . The *current readtable* in a given *dynamic environment* is the *value* of **\*readtable\*** in that *environment*. To make a different *readtable* become the *current readtable*, **\*readtable\*** can be *assigned* or *bound*. 

