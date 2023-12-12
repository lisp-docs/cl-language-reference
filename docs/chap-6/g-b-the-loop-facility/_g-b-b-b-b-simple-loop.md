
import ClLinks from '@site/src/components/cl-links.js';
 



A simple **loop** *form* is one that has a body containing only *compound forms*. Each *form* is *evaluated* in turn from left to right. When the last *form* has been *evaluated*, then the first *form* is evaluated again, and so on, in a never-ending cycle. A simple **loop** *form* establishes an *implicit block* named **nil**. The execution of a simple **loop** can be terminated by explicitly transfering control to the <ClLinks styled={true}>implicit block</ClLinks> (using <ClLinks styled={true}>return</ClLinks> or **return-from**) or to some *exit point* outside of the *block* (*e.g.*, using <ClLinks styled={true}>throw</ClLinks>, <ClLinks styled={true}>go</ClLinks>, or **return-from**). 



