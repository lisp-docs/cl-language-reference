 



Many <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that perform <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> operations accept either <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> or *closed streams* as <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>; see Section 21.1.3 (Stream Arguments to Standardized Functions). 



Of these, the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> in Figure 20–2 treat <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> and *closed streams* differently. 



|<p>**delete-file file-author probe-file** </p><p>**directory file-write-date truename**</p>|

| :- |





**Figure 20–2. File Functions that Treat Open and Closed Streams Differently** 







 



 



Since treatment of *open streams* by the *file system* may vary considerably between <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>, however, a *closed stream* might be the most reliable kind of <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> for some of these functions—in particular, those in Figure 20–3. For example, in some *file systems*, *open files* are written under temporary names and not renamed until <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm> and/or are held invisible until <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>. In general, any code that is intended to be portable should use such <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> carefully. 



|**directory probe-file truename**|

| :- |





**Figure 20–3. File Functions where Closed Streams Might Work Best** 



