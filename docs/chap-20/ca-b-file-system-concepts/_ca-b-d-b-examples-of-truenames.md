 



For example, a DEC TOPS-20 system with <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> PS:&lt;JOE&gt;FOO.TXT.1 and PS:&lt;JOE&gt;FOO.TXT.2 might permit the second <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> to be referred to as PS:&lt;JOE&gt;FOO.TXT.0, since the “.0” notation denotes “newest” version of several <ClLinks styled={true} term={"file"}><i>files</i></ClLinks>. In the same *file system*, a “logical device” “JOE:” might be taken to refer to PS:&lt;JOE&gt;” and so the names JOE:FOO.TXT.2 or JOE:FOO.TXT.0 might refer to PS:&lt;JOE&gt;FOO.TXT.2. In all of these cases, the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of the file would probably be PS:&lt;JOE&gt;FOO.TXT.2. 



If a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is a symbolic link to another <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> (in a *file system* permitting such a thing), it is conventional for the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> to be the canonical name of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> after any symbolic links have been followed; that is, it is the canonical name of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> whose contents would become available if an *input stream* to that <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> were opened. 



In the case of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> still being created (that is, of an *output stream* open to such a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>), the exact <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of the file might not be known until the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is closed. In this case, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> might return different values for such a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> before and after it was closed. In fact, before it is closed, the name returned might not even be a valid name in the *file system*—for example, while a file is being written, it might have version :newest and might only take on a specific numeric value later when the file is closed even in a *file system* where all files have numeric versions. 







 



 



