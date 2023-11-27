 

Several *readtables* describing different syntaxes can exist, but at any given time only one, called the *current readtable*, affects the way in which *expressions*&#60;sub&#62;2&#60;/sub&#62; are parsed into *objects* by the *Lisp reader* . The *current readtable* in a given *dynamic environment* is the *value* of **\*readtable\*** in that *environment*. To make a different *readtable* become the *current readtable*, **\*readtable\*** can be *assigned* or *bound*. 

