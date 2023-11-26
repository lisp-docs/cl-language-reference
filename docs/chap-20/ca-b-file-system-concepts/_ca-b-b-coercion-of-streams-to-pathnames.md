**20.1.1 Coercion of Streams to Pathnames** 

A *stream associated with a file* is either a *file stream* or a *synonym stream* whose target is a *stream associated with a file*. Such streams can be used as *pathname designators*. 

Normally, when a *stream associated with a file* is used as a *pathname designator* , it denotes the *pathname* used to open the *file*; this may be, but is not required to be, the actual name of the *file*. 

Some functions, such as **truename** and **delete-file**, coerce *streams* to *pathnames* in a different way that involves referring to the actual *file* that is open, which might or might not be the file whose name was opened originally. Such special situations are always notated specifically and are not the default. 

