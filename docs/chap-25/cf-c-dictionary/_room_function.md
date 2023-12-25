**room** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"room"}><b>room</b></DictionaryLink> &amp;optional *x → implementation-dependent* 



**Arguments and Values:** 



*x*—one of <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, or :default. 



**Description:** 



<DictionaryLink styled={true} term={"room"}><b>room</b></DictionaryLink> prints, to *standard output*, information about the state of internal storage and its management. This might include descriptions of the amount of memory in use and the degree of memory compaction, possibly broken down by internal data type if that is appropriate. The nature and format of the printed information is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. The intent is to provide information that a <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> might use to tune a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> for a particular <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



(room nil) prints out a minimal amount of information. (room t) prints out a maximal amount of information. (room) or (room :default) prints out an intermediate amount of information that is likely to be useful. 



**Side Effects:** 



Output to *standard output*. 







 



 



**Affected By:** 



**\*standard-output\***. 



