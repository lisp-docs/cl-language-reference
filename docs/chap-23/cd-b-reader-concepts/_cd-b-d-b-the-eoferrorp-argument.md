 



*Eof-error-p* in input function calls controls what happens if input is from a file (or any other input source that has a definite end) and the end of the file is reached. If *eof-error-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> (the default), an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled at end of file. If it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, then no error is signaled, and instead the function returns *eof-value*. 



Functions such as <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> that read the representation of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> rather than a single character always signals an error, regardless of *eof-error-p*, if the file ends in the middle of an object representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> signals an error. If a file ends in a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> immediately followed by end-of-file, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> reads the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> successfully and when called again will act according to *eof-error-p*. Similarly, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"read-line"}><b>read-line</b></ClLinks> successfully reads the last line of a file even if that line is terminated by end-of-file rather than the newline character. Ignorable text, such as lines containing only <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> or comments, are not considered to begin an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; if <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> begins to read an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> but sees only such ignorable text, it does not consider the file to end in the middle of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. Thus an *eof-error-p* argument controls what happens when the file ends between <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. 







 



 



