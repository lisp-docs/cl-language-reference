**close** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink> <ClLinks  term={"stream"}><i>stream</i></ClLinks> &amp;key *abort → result* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks> (either <ClLinks  term={"open"}><i>open</i></ClLinks> or <ClLinks  term={"closed"}><i>closed</i></ClLinks>). 



*abort*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*result*—<DictionaryLink  term={"t"}><b>t</b></DictionaryLink> if the <ClLinks  term={"stream"}><i>stream</i></ClLinks> was <ClLinks  term={"open"}><i>open</i></ClLinks> at the time it was received as an <ClLinks  term={"argument"}><i>argument</i></ClLinks>, or *implementation dependent* otherwise. 



**Description:** 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink> closes <ClLinks  term={"stream"}><i>stream</i></ClLinks>. Closing a <ClLinks  term={"stream"}><i>stream</i></ClLinks> means that it may no longer be used in input or output operations. The act of *closing* a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> ends the association between the <ClLinks  term={"stream"}><i>stream</i></ClLinks> and its associated <ClLinks  term={"file"}><i>file</i></ClLinks>; the transaction with the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> is terminated, and input/output may no longer be performed on the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



If *abort* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an attempt is made to clean up any side effects of having created <ClLinks  term={"stream"}><i>stream</i></ClLinks>. If <ClLinks  term={"stream"}><i>stream</i></ClLinks> performs output to a file that was created when the <ClLinks  term={"stream"}><i>stream</i></ClLinks> was created, the file is deleted and any previously existing file is not superseded. 



It is permissible to close an already closed <ClLinks  term={"stream"}><i>stream</i></ClLinks>, but in that case the *result* is *implementation dependent*. 



After <ClLinks  term={"stream"}><i>stream</i></ClLinks> is closed, it is still possible to perform the following query operations upon it: <DictionaryLink  term={"streamp"}><b>streamp</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>, **pathname-host**, **pathname-device**, **pathname-directory**,**pathname-name**, **pathname-type**, **pathname-version**, <DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink>, <DictionaryLink  term={"file-namestring"}><b>file-namestring</b></DictionaryLink>, <DictionaryLink  term={"directory-namestring"}><b>directory-namestring</b></DictionaryLink>, <DictionaryLink  term={"host-namestring"}><b>host-namestring</b></DictionaryLink>, <DictionaryLink  term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink>, <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink>, and <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink>. 



The effect of <DictionaryLink  term={"close"}><b>close</b></DictionaryLink> on a <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed stream</i></GlossaryTerm> is to close the argument <ClLinks  term={"stream"}><i>stream</i></ClLinks> only. There is no effect on the <ClLinks  term={"constituent"}><i>constituents</i></ClLinks> of <GlossaryTerm styled={true} term={"composite stream"}><i>composite streams</i></GlossaryTerm>. 



For a <ClLinks  term={"stream"}><i>stream</i></ClLinks> created with <DictionaryLink  term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>, the result of <DictionaryLink  term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink> is unspecified after <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>. 







 



 



**Examples:**
```lisp
(setq s (make-broadcast-stream)) → #<BROADCAST-STREAM> 
(close s) → T 
(output-stream-p s) → true 
```
**Side Effects:** 



The <ClLinks  term={"stream"}><i>stream</i></ClLinks> is <ClLinks  term={"closed"}><i>closed</i></ClLinks> (if necessary). If *abort* is <ClLinks  term={"true"}><i>true</i></ClLinks> and the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an *output file stream*, its associated <ClLinks  term={"file"}><i>file</i></ClLinks> might be deleted. 



**See Also:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



