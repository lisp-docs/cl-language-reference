**room** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"room"}><b>room</b></ClLinks> &amp;optional *x → implementation-dependent* 



**Arguments and Values:** 



*x*—one of <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, or :default. 



**Description:** 



<ClLinks styled={true} term={"room"}><b>room</b></ClLinks> prints, to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>, information about the state of internal storage and its management. This might include descriptions of the amount of memory in use and the degree of memory compaction, possibly broken down by internal data type if that is appropriate. The nature and format of the printed information is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. The intent is to provide information that a <ClLinks styled={true} term={"programmer"}><i>programmer</i></ClLinks> might use to tune a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> for a particular <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



(room nil) prints out a minimal amount of information. (room t) prints out a maximal amount of information. (room) or (room :default) prints out an intermediate amount of information that is likely to be useful. 



**Side Effects:** 



Output to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 







 



 



**Affected By:** 



**\*standard-output\***. 



