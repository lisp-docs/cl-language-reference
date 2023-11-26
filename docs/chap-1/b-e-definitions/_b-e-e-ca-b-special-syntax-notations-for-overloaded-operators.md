**1.4.4.20.1 Special “Syntax” Notations for Overloaded Operators** 

If two descriptions exist for the same operation but with different numbers of arguments, then the extra arguments are to be treated as optional. For example, this pair of lines: 

**file-position** *stream → position* 

**file-position** *stream position-spec → success-p* 

is operationally equivalent to this line: 

**file-position** *stream* &optional *position-spec → result* 

and differs only in that it provides on opportunity to introduce different names for *parameter* and *values* for each case. The separated (multi-line) notation is used when an *operator* is overloaded in such a way that the *parameters* are used in different ways depending on how many *arguments* are supplied (*e.g.*, for the *function* **/**) or the return values are different in the two cases (*e.g.*, for the 

*function* **file-position**). 

