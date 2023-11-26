**20.1 File System Concepts** 

This section describes the Common Lisp interface to file systems. The model used by this interface assumes that *files* are named by *filenames*, that a *filename* can be represented by a *pathname object*, and that given a *pathname* a *stream* can be constructed that connects to a *file* whose *filename* it represents. 

For information about opening and closing *files*, and manipulating their contents, see Chapter 21 (Streams). 

Figure 20–1 lists some *operators* that are applicable to *files* and directories. 

|\<p\>**compile-file file-length open** \</p\>\<p\>**delete-file file-position probe-file** \</p\>\<p\>**directory file-write-date rename-file** \</p\>\<p\>**file-author load with-open-file**\</p\>|
| :- |


**Figure 20–1. File and Directory Operations** 

