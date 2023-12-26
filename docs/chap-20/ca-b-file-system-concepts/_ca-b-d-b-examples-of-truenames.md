 



For example, a DEC TOPS-20 system with <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> PS:&lt;JOE&gt;FOO.TXT.1 and PS:&lt;JOE&gt;FOO.TXT.2 might permit the second <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> to be referred to as PS:&lt;JOE&gt;FOO.TXT.0, since the “.0” notation denotes “newest” version of several <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm>. In the same <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, a “logical device” “JOE:” might be taken to refer to PS:&lt;JOE&gt;” and so the names JOE:FOO.TXT.2 or JOE:FOO.TXT.0 might refer to PS:&lt;JOE&gt;FOO.TXT.2. In all of these cases, the <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> of the file would probably be PS:&lt;JOE&gt;FOO.TXT.2. 



If a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is a symbolic link to another <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> (in a <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> permitting such a thing), it is conventional for the <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> to be the canonical name of the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> after any symbolic links have been followed; that is, it is the canonical name of the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> whose contents would become available if an *input stream* to that <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> were opened. 



In the case of a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> still being created (that is, of an *output stream* open to such a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>), the exact <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> of the file might not be known until the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is closed. In this case, the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> might return different values for such a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> before and after it was closed. In fact, before it is closed, the name returned might not even be a valid name in the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>—for example, while a file is being written, it might have version :newest and might only take on a specific numeric value later when the file is closed even in a <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> where all files have numeric versions. 







 



 



