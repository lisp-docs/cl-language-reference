 The directory might be a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, :wild, :unspecific, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



The directory can be a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> and <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. The <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is one of the symbols :absolute or :relative, meaning: 



:absolute 



A <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> is the symbol :absolute represents a directory path starting from the root direc tory. The list (:absolute) represents the root directory. The list (:absolute "foo" "bar" "baz") represents the directory called "/foo/bar/baz" in Unix (except possibly for <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm>). 



:relative 



A <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> is the symbol :relative represents a directory path starting from a default directory. The list (:relative) has the same meaning as <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and hence is not used. The list (:relative "foo" "bar") represents the directory named "bar" in the directory named "foo" in the default directory. 



Each remaining element of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 







 



 



Each <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> names a single level of directory structure. The <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> should contain only the directory names themselves—no punctuation characters. 



In place of a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, at any point in the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> can occur to indicate special file notations. Figure 19–3 lists the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that have standard meanings. Implementations are permitted to add additional <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of any <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> that is disjoint from <DictionaryLink  term={"string"}><b>string</b></DictionaryLink> if necessary to represent features of their file systems that cannot be represented with the standard <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> and <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



Supplying any non-<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, including any of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> listed below, to a file system for which it does not make sense signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink>. For example, Unix does not support :wild-inferiors in most implementations. 



|**Symbol Meaning**|

| :- |

|<p>:wild Wildcard match of one level of directory structure :wild-inferiors Wildcard match of any number of directory levels :up Go upward in directory structure (semantic) </p><p>:back Go upward in directory structure (syntactic)</p>|





**Figure 19–3. Special Markers In Directory Component** 



The following notes apply to the previous figure: 



Invalid Combinations 



Using :absolute or :wild-inferiors immediately followed by :up or :back signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink>. 



Syntactic vs Semantic 



“Syntactic” means that the action of :back depends only on the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> and not on the contents of the file system. 



“Semantic” means that the action of :up depends on the contents of the file system; to resolve a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> containing :up to a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> whose directory component contains only :absolute and <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> requires probing the file system. 



:up differs from :back only in file systems that support multiple names for directories, perhaps via symbolic links. For example, suppose that there is a directory (:absolute "X" "Y" "Z") linked to (:absolute "A" "B" "C") and there also exist directories (:absolute "A" "B" "Q") and (:absolute "X" "Y" "Q"). Then (:absolute "X" "Y" "Z" :up "Q") desig 



nates (:absolute "A" "B" "Q") while (:absolute "X" "Y" "Z" :back "Q") designates (:absolute "X" "Y" "Q") 







 



 



