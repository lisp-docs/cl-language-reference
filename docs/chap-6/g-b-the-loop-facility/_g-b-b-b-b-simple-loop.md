
 



A simple <ClLinks  term={"loop"}><b>loop</b></ClLinks> <ClLinks >form</ClLinks> is one that has a body containing only *compound forms*. Each <ClLinks  term={"form"}><i>form</i></ClLinks> is *evaluated* in turn from left to right. When the last <ClLinks  term={"form"}><i>form</i></ClLinks> has been *evaluated*, then the first <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated again, and so on, in a never-ending cycle. A simple <ClLinks  term={"loop"}><b>loop</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> establishes an *implicit block* named 



<ClLinks  term={"nil"}><b>nil</b></ClLinks>. The execution of a simple <ClLinks  term={"loop"}><b>loop</b></ClLinks> can be terminated by explicitly transfering control to the *implicit block* (using <ClLinks  term={"return"}><b>return</b></ClLinks> or <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>) or to some *exit point* outside of the <ClLinks  term={"block"}><i>block</i></ClLinks> (*e.g.*, using <ClLinks  term={"throw"}><b>throw</b></ClLinks>, <ClLinks  term={"go"}><b>go</b></ClLinks>, or <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>). 



