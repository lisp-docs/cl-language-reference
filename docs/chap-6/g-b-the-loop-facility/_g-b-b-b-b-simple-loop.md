
 



A simple <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true}>form</ClLinks> is one that has a body containing only *compound forms*. Each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is *evaluated* in turn from left to right. When the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> has been *evaluated*, then the first <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated again, and so on, in a never-ending cycle. A simple <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> establishes an *implicit block* named 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The execution of a simple <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> can be terminated by explicitly transfering control to the *implicit block* (using <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>) or to some *exit point* outside of the <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> (*e.g.*, using <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>). 



