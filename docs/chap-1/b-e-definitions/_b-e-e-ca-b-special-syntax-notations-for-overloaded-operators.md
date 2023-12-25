 



If two descriptions exist for the same operation but with different numbers of arguments, then the extra arguments are to be treated as optional. For example, this pair of lines: 



<ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> *stream → position* 



<ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> *stream position-spec → success-p* 



is operationally equivalent to this line: 



<ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> &amp;optional *position-spec → result* 



and differs only in that it provides on opportunity to introduce different names for <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> for each case. The separated (multi-line) notation is used when an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is overloaded in such a way that the <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> are used in different ways depending on how many <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are supplied (*e.g.*, for the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"/"}><b>/</b></ClLinks>) or the return values are different in the two cases (*e.g.*, for the 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks>). 



