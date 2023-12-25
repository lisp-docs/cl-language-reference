 



If two descriptions exist for the same operation but with different numbers of arguments, then the extra arguments are to be treated as optional. For example, this pair of lines: 



<DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> *stream → position* 



<DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> *stream position-spec → success-p* 



is operationally equivalent to this line: 



<DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> &amp;optional *position-spec → result* 



and differs only in that it provides on opportunity to introduce different names for <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> for each case. The separated (multi-line) notation is used when an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is overloaded in such a way that the <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> are used in different ways depending on how many <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are supplied (*e.g.*, for the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink>) or the return values are different in the two cases (*e.g.*, for the 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink>). 



