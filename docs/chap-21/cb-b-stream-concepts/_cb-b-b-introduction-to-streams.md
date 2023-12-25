 



A <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an <ClLinks  term={"object"}><i>object</i></ClLinks> that can be used with an input or output function to identify an appropriate source or sink of <ClLinks  term={"character"}><i>characters</i></ClLinks> or <ClLinks  term={"byte"}><i>bytes</i></ClLinks> for that operation. A *character stream* is a source or sink of <ClLinks  term={"character"}><i>characters</i></ClLinks>. A *binary stream* is a source or sink of <ClLinks  term={"byte"}><i>bytes</i></ClLinks>. 



Some operations may be performed on any kind of <ClLinks  term={"stream"}><i>stream</i></ClLinks>; Figure 21–1 provides a list of <ClLinks  term={"standardized"}><i>standardized</i></ClLinks> operations that are potentially useful with any kind of <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



|<p>**close stream-element-type** </p><p>**input-stream-p streamp** </p><p>**interactive-stream-p with-open-stream** </p><p>**output-stream-p**</p>|

| :- |





**Figure 21–1. Some General-Purpose Stream Operations** 



Other operations are only meaningful on certain *stream types*. For example, <ClLinks  term={"read-char"}><b>read-char</b></ClLinks> is only defined for *character streams* and <ClLinks  term={"read-byte"}><b>read-byte</b></ClLinks> is only defined for *binary streams*. 



