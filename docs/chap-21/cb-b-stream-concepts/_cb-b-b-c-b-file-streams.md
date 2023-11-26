 

Some *streams*, called *file streams*, provide access to *files*. An *object* of *class* **file-stream** is used to represent a *file stream*. 

The basic operation for opening a *file* is **open**, which typically returns a *file stream* (see its dictionary entry for details). The basic operation for closing a *stream* is **close**. The macro **with-open-file** is useful to express the common idiom of opening a *file* for the duration of a given body of *code*, and assuring that the resulting *stream* is closed upon exit from that body. 

