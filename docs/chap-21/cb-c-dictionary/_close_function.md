**close** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink> <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> &amp;key *abort → result* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> (either <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>). 



*abort*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*result*—<DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> was <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> at the time it was received as an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>, or *implementation dependent* otherwise. 



**Description:** 



<DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink> closes <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. Closing a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> means that it may no longer be used in input or output operations. The act of *closing* a *file stream* ends the association between the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> and its associated <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>; the transaction with the *file system* is terminated, and input/output may no longer be performed on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



If *abort* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, an attempt is made to clean up any side effects of having created <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> performs output to a file that was created when the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> was created, the file is deleted and any previously existing file is not superseded. 



It is permissible to close an already closed <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, but in that case the *result* is *implementation dependent*. 



After <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is closed, it is still possible to perform the following query operations upon it: <DictionaryLink styled={true} term={"streamp"}><b>streamp</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>, **pathname-host**, **pathname-device**, **pathname-directory**,**pathname-name**, **pathname-type**, **pathname-version**, <DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink>, <DictionaryLink styled={true} term={"file-namestring"}><b>file-namestring</b></DictionaryLink>, <DictionaryLink styled={true} term={"directory-namestring"}><b>directory-namestring</b></DictionaryLink>, <DictionaryLink styled={true} term={"host-namestring"}><b>host-namestring</b></DictionaryLink>, <DictionaryLink styled={true} term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink>, <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink styled={true} term={"probe-file"}><b>probe-file</b></DictionaryLink>, and <DictionaryLink styled={true} term={"directory"}><b>directory</b></DictionaryLink>. 



The effect of <DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink> on a *constructed stream* is to close the argument <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> only. There is no effect on the <GlossaryTerm styled={true} term={"constituent"}><i>constituents</i></GlossaryTerm> of *composite streams*. 



For a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> created with <DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>, the result of <DictionaryLink styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink> is unspecified after <DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink>. 







 



 



**Examples:**
```lisp

(setq s (make-broadcast-stream)) *→* #<BROADCAST-STREAM> 
(close s) *→* T 
(output-stream-p s) *→ true* 

```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm> (if necessary). If *abort* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is an *output file stream*, its associated <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> might be deleted. 



**See Also:** 



<DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> 



