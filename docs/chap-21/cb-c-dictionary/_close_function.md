**close** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"close"}><b>close</b></ClLinks> <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> &amp;key *abort → result* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (either <ClLinks styled={true} term={"open"}><i>open</i></ClLinks> or <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks>). 



*abort*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*result*—<ClLinks styled={true} term={"t"}><b>t</b></ClLinks> if the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> was <ClLinks styled={true} term={"open"}><i>open</i></ClLinks> at the time it was received as an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>, or *implementation dependent* otherwise. 



**Description:** 



<ClLinks styled={true} term={"close"}><b>close</b></ClLinks> closes <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. Closing a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> means that it may no longer be used in input or output operations. The act of *closing* a *file stream* ends the association between the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> and its associated <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>; the transaction with the *file system* is terminated, and input/output may no longer be performed on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



If *abort* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, an attempt is made to clean up any side effects of having created <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. If <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> performs output to a file that was created when the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> was created, the file is deleted and any previously existing file is not superseded. 



It is permissible to close an already closed <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, but in that case the *result* is *implementation dependent*. 



After <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is closed, it is still possible to perform the following query operations upon it: <ClLinks styled={true} term={"streamp"}><b>streamp</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks>, <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks>, **pathname-host**, **pathname-device**, **pathname-directory**,**pathname-name**, **pathname-type**, **pathname-version**, <ClLinks styled={true} term={"namestring"}><b>namestring</b></ClLinks>, <ClLinks styled={true} term={"file-namestring"}><b>file-namestring</b></ClLinks>, <ClLinks styled={true} term={"directory-namestring"}><b>directory-namestring</b></ClLinks>, <ClLinks styled={true} term={"host-namestring"}><b>host-namestring</b></ClLinks>, <ClLinks styled={true} term={"enough-namestring"}><b>enough-namestring</b></ClLinks>, <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>, <ClLinks styled={true} term={"probe-file"}><b>probe-file</b></ClLinks>, and <ClLinks styled={true} term={"directory"}><b>directory</b></ClLinks>. 



The effect of <ClLinks styled={true} term={"close"}><b>close</b></ClLinks> on a *constructed stream* is to close the argument <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> only. There is no effect on the <ClLinks styled={true} term={"constituent"}><i>constituents</i></ClLinks> of *composite streams*. 



For a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> created with <ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>, the result of <ClLinks styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks> is unspecified after <ClLinks styled={true} term={"close"}><b>close</b></ClLinks>. 







 



 



**Examples:**
```lisp

(setq s (make-broadcast-stream)) → #<BROADCAST-STREAM> 
(close s) → T 
(output-stream-p s) → true 

```
**Side Effects:** 



The <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks> (if necessary). If *abort* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is an *output file stream*, its associated <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> might be deleted. 



**See Also:** 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> 



