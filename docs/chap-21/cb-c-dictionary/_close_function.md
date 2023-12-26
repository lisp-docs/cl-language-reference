**close** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink> <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> &amp;key *abort → result* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> (either <GlossaryTerm  term={"open"}><i>open</i></GlossaryTerm> or <GlossaryTerm  term={"closed"}><i>closed</i></GlossaryTerm>). 



*abort*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*result*—<DictionaryLink  term={"t"}><b>t</b></DictionaryLink> if the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> was <GlossaryTerm  term={"open"}><i>open</i></GlossaryTerm> at the time it was received as an <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>, or *implementation dependent* otherwise. 



**Description:** 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink> closes <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. Closing a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> means that it may no longer be used in input or output operations. The act of *closing* a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> ends the association between the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> and its associated <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>; the transaction with the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> is terminated, and input/output may no longer be performed on the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



If *abort* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, an attempt is made to clean up any side effects of having created <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. If <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> performs output to a file that was created when the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> was created, the file is deleted and any previously existing file is not superseded. 



It is permissible to close an already closed <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, but in that case the *result* is *implementation dependent*. 



After <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is closed, it is still possible to perform the following query operations upon it: <DictionaryLink  term={"streamp"}><b>streamp</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>, **pathname-host**, **pathname-device**, **pathname-directory**,**pathname-name**, **pathname-type**, **pathname-version**, <DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink>, <DictionaryLink  term={"file-namestring"}><b>file-namestring</b></DictionaryLink>, <DictionaryLink  term={"directory-namestring"}><b>directory-namestring</b></DictionaryLink>, <DictionaryLink  term={"host-namestring"}><b>host-namestring</b></DictionaryLink>, <DictionaryLink  term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink>, <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink>, and <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink>. 



The effect of <DictionaryLink  term={"close"}><b>close</b></DictionaryLink> on a <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed stream</i></GlossaryTerm> is to close the argument <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> only. There is no effect on the <GlossaryTerm  term={"constituent"}><i>constituents</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"composite stream"}><i>composite streams</i></GlossaryTerm>. 



For a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> created with <DictionaryLink  term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>, the result of <DictionaryLink  term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink> is unspecified after <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>. 







 



 



**Examples:**
```lisp
(setq s (make-broadcast-stream)) → #<BROADCAST-STREAM> 
(close s) → T 
(output-stream-p s) → true 
```
**Side Effects:** 



The <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is <GlossaryTerm  term={"closed"}><i>closed</i></GlossaryTerm> (if necessary). If *abort* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> and the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is an *output file stream*, its associated <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> might be deleted. 



**See Also:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



