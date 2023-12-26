 



A <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that can be used with an input or output function to identify an appropriate source or sink of <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> or <GlossaryTerm  term={"byte"}><i>bytes</i></GlossaryTerm> for that operation. A *character stream* is a source or sink of <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>. A *binary stream* is a source or sink of <GlossaryTerm  term={"byte"}><i>bytes</i></GlossaryTerm>. 



Some operations may be performed on any kind of <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>; Figure 21–1 provides a list of <GlossaryTerm  term={"standardized"}><i>standardized</i></GlossaryTerm> operations that are potentially useful with any kind of <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



|<p>**close stream-element-type** </p><p>**input-stream-p streamp** </p><p>**interactive-stream-p with-open-stream** </p><p>**output-stream-p**</p>|

| :- |





**Figure 21–1. Some General-Purpose Stream Operations** 



Other operations are only meaningful on certain *stream types*. For example, <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> is only defined for *character streams* and <DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink> is only defined for *binary streams*. 



