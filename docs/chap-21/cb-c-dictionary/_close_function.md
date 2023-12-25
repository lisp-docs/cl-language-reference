**close** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"close"}><b>close</b></ClLinks> <ClLinks  term={"stream"}><i>stream</i></ClLinks> &amp;key *abort → result* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks> (either <ClLinks  term={"open"}><i>open</i></ClLinks> or <ClLinks  term={"closed"}><i>closed</i></ClLinks>). 



*abort*—a *generalized boolean*. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*result*—<ClLinks  term={"t"}><b>t</b></ClLinks> if the <ClLinks  term={"stream"}><i>stream</i></ClLinks> was <ClLinks  term={"open"}><i>open</i></ClLinks> at the time it was received as an <ClLinks  term={"argument"}><i>argument</i></ClLinks>, or *implementation dependent* otherwise. 



**Description:** 



<ClLinks  term={"close"}><b>close</b></ClLinks> closes <ClLinks  term={"stream"}><i>stream</i></ClLinks>. Closing a <ClLinks  term={"stream"}><i>stream</i></ClLinks> means that it may no longer be used in input or output operations. The act of *closing* a *file stream* ends the association between the <ClLinks  term={"stream"}><i>stream</i></ClLinks> and its associated <ClLinks  term={"file"}><i>file</i></ClLinks>; the transaction with the *file system* is terminated, and input/output may no longer be performed on the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



If *abort* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an attempt is made to clean up any side effects of having created <ClLinks  term={"stream"}><i>stream</i></ClLinks>. If <ClLinks  term={"stream"}><i>stream</i></ClLinks> performs output to a file that was created when the <ClLinks  term={"stream"}><i>stream</i></ClLinks> was created, the file is deleted and any previously existing file is not superseded. 



It is permissible to close an already closed <ClLinks  term={"stream"}><i>stream</i></ClLinks>, but in that case the *result* is *implementation dependent*. 



After <ClLinks  term={"stream"}><i>stream</i></ClLinks> is closed, it is still possible to perform the following query operations upon it: <ClLinks  term={"streamp"}><b>streamp</b></ClLinks>, <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"truename"}><b>truename</b></ClLinks>, <ClLinks  term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks>, **pathname-host**, **pathname-device**, **pathname-directory**,**pathname-name**, **pathname-type**, **pathname-version**, <ClLinks  term={"namestring"}><b>namestring</b></ClLinks>, <ClLinks  term={"file-namestring"}><b>file-namestring</b></ClLinks>, <ClLinks  term={"directory-namestring"}><b>directory-namestring</b></ClLinks>, <ClLinks  term={"host-namestring"}><b>host-namestring</b></ClLinks>, <ClLinks  term={"enough-namestring"}><b>enough-namestring</b></ClLinks>, <ClLinks  term={"open"}><b>open</b></ClLinks>, <ClLinks  term={"probe-file"}><b>probe-file</b></ClLinks>, and <ClLinks  term={"directory"}><b>directory</b></ClLinks>. 



The effect of <ClLinks  term={"close"}><b>close</b></ClLinks> on a *constructed stream* is to close the argument <ClLinks  term={"stream"}><i>stream</i></ClLinks> only. There is no effect on the <ClLinks  term={"constituent"}><i>constituents</i></ClLinks> of *composite streams*. 



For a <ClLinks  term={"stream"}><i>stream</i></ClLinks> created with <ClLinks  term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>, the result of <ClLinks  term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks> is unspecified after <ClLinks  term={"close"}><b>close</b></ClLinks>. 







 



 



**Examples:**
```lisp
(setq s (make-broadcast-stream)) → #<BROADCAST-STREAM> 
(close s) → T 
(output-stream-p s) → true 
```
**Side Effects:** 



The <ClLinks  term={"stream"}><i>stream</i></ClLinks> is <ClLinks  term={"closed"}><i>closed</i></ClLinks> (if necessary). If *abort* is <ClLinks  term={"true"}><i>true</i></ClLinks> and the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an *output file stream*, its associated <ClLinks  term={"file"}><i>file</i></ClLinks> might be deleted. 



**See Also:** 



<ClLinks  term={"open"}><b>open</b></ClLinks> 



