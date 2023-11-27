 

A *stream* is an *object* that can be used with an input or output function to identify an appropriate source or sink of *characters* or *bytes* for that operation. A *character stream* is a source or sink of *characters*. A *binary stream* is a source or sink of *bytes*. 

Some operations may be performed on any kind of *stream*; Figure 21–1 provides a list of *standardized* operations that are potentially useful with any kind of *stream*. 

|&#60;p&#62;**close stream-element-type** &#60;/p&#62;&#60;p&#62;**input-stream-p streamp** &#60;/p&#62;&#60;p&#62;**interactive-stream-p with-open-stream** &#60;/p&#62;&#60;p&#62;**output-stream-p**&#60;/p&#62;|
| :- |


**Figure 21–1. Some General-Purpose Stream Operations** 

Other operations are only meaningful on certain *stream types*. For example, **read-char** is only defined for *character streams* and **read-byte** is only defined for *binary streams*. 

