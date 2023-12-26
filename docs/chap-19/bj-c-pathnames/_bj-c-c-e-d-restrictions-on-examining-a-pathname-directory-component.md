 The directory might be a <ClLinks  term={"string"}><i>string</i></ClLinks>, :wild, :unspecific, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



The directory can be a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"string"}><i>strings</i></ClLinks> and <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. The <ClLinks  term={"car"}><i>car</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks> is one of the symbols :absolute or :relative, meaning: 



:absolute 



A <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is the symbol :absolute represents a directory path starting from the root direc tory. The list (:absolute) represents the root directory. The list (:absolute "foo" "bar" "baz") represents the directory called "/foo/bar/baz" in Unix (except possibly for <ClLinks  term={"case"}><i>case</i></ClLinks>). 



:relative 



A <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is the symbol :relative represents a directory path starting from a default directory. The list (:relative) has the same meaning as <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and hence is not used. The list (:relative "foo" "bar") represents the directory named "bar" in the directory named "foo" in the default directory. 



Each remaining element of the <ClLinks  term={"list"}><i>list</i></ClLinks> is a <ClLinks  term={"string"}><i>string</i></ClLinks> or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



Each <ClLinks  term={"string"}><i>string</i></ClLinks> names a single level of directory structure. The <ClLinks  term={"string"}><i>strings</i></ClLinks> should contain only the directory names themselves—no punctuation characters. 



In place of a <ClLinks  term={"string"}><i>string</i></ClLinks>, at any point in the <ClLinks  term={"list"}><i>list</i></ClLinks>, <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> can occur to indicate special file notations. Figure 19–3 lists the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that have standard meanings. Implementations are permitted to add additional <ClLinks  term={"object"}><i>objects</i></ClLinks> of any <ClLinks  term={"type"}><i>type</i></ClLinks> that is disjoint from <DictionaryLink  term={"string"}><b>string</b></DictionaryLink> if necessary to represent features of their file systems that cannot be represented with the standard <ClLinks  term={"string"}><i>strings</i></ClLinks> and <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



Supplying any non-<ClLinks  term={"string"}><i>string</i></ClLinks>, including any of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> listed below, to a file system for which it does not make sense signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink>. For example, Unix does not support :wild-inferiors in most implementations. 



|**Symbol Meaning**|

| :- |

|<p>:wild Wildcard match of one level of directory structure :wild-inferiors Wildcard match of any number of directory levels :up Go upward in directory structure (semantic) </p><p>:back Go upward in directory structure (syntactic)</p>|





**Figure 19–3. Special Markers In Directory Component** 



The following notes apply to the previous figure: 



Invalid Combinations 



Using :absolute or :wild-inferiors immediately followed by :up or :back signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink>. 



Syntactic vs Semantic 



“Syntactic” means that the action of :back depends only on the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> and not on the contents of the file system. 



“Semantic” means that the action of :up depends on the contents of the file system; to resolve a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> containing :up to a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> whose directory component contains only :absolute and <ClLinks  term={"string"}><i>strings</i></ClLinks> requires probing the file system. 



:up differs from :back only in file systems that support multiple names for directories, perhaps via symbolic links. For example, suppose that there is a directory (:absolute "X" "Y" "Z") linked to (:absolute "A" "B" "C") and there also exist directories (:absolute "A" "B" "Q") and (:absolute "X" "Y" "Q"). Then (:absolute "X" "Y" "Z" :up "Q") desig 



nates (:absolute "A" "B" "Q") while (:absolute "X" "Y" "Z" :back "Q") designates (:absolute "X" "Y" "Q") 







 



 



