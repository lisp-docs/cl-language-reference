 



Many <ClLinks  term={"function"}><i>functions</i></ClLinks> that perform <ClLinks  term={"file"}><i>file</i></ClLinks> operations accept either <ClLinks  term={"open"}><i>open</i></ClLinks> or *closed streams* as <ClLinks  term={"argument"}><i>arguments</i></ClLinks>; see Section 21.1.3 (Stream Arguments to Standardized Functions). 



Of these, the <ClLinks  term={"function"}><i>functions</i></ClLinks> in Figure 20–2 treat <ClLinks  term={"open"}><i>open</i></ClLinks> and *closed streams* differently. 



|<p>**delete-file file-author probe-file** </p><p>**directory file-write-date truename**</p>|

| :- |





**Figure 20–2. File Functions that Treat Open and Closed Streams Differently** 







 



 



Since treatment of *open streams* by the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> may vary considerably between <ClLinks  term={"implementation"}><i>implementations</i></ClLinks>, however, a *closed stream* might be the most reliable kind of <ClLinks  term={"argument"}><i>argument</i></ClLinks> for some of these functions—in particular, those in Figure 20–3. For example, in some <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm>, *open files* are written under temporary names and not renamed until <ClLinks  term={"closed"}><i>closed</i></ClLinks> and/or are held invisible until <ClLinks  term={"closed"}><i>closed</i></ClLinks>. In general, any code that is intended to be portable should use such <ClLinks  term={"function"}><i>functions</i></ClLinks> carefully. 



|**directory probe-file truename**|

| :- |





**Figure 20–3. File Functions where Closed Streams Might Work Best** 



