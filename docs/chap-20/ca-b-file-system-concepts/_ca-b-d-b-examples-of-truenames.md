 



For example, a DEC TOPS-20 system with *files* PS:<JOE>FOO.TXT.1 and PS:<JOE>FOO.TXT.2 might permit the second *file* to be referred to as PS:<JOE>FOO.TXT.0, since the “.0” notation denotes “newest” version of several *files*. In the same *file system*, a “logical device” “JOE:” might be taken to refer to PS:<JOE>” and so the names JOE:FOO.TXT.2 or JOE:FOO.TXT.0 might refer to PS:<JOE>FOO.TXT.2. In all of these cases, the *truename* of the file would probably be PS:<JOE>FOO.TXT.2. 



If a *file* is a symbolic link to another *file* (in a *file system* permitting such a thing), it is conventional for the *truename* to be the canonical name of the *file* after any symbolic links have been followed; that is, it is the canonical name of the *file* whose contents would become available if an *input stream* to that *file* were opened. 



In the case of a *file* still being created (that is, of an *output stream* open to such a *file*), the exact *truename* of the file might not be known until the *stream* is closed. In this case, the *function* **truename** might return different values for such a *stream* before and after it was closed. In fact, before it is closed, the name returned might not even be a valid name in the *file system*—for example, while a file is being written, it might have version :newest and might only take on a specific numeric value later when the file is closed even in a *file system* where all files have numeric versions. 







 



 



