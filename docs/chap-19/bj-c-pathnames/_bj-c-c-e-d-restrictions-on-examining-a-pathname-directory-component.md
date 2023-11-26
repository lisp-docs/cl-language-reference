 The directory might be a *string*, :wild, :unspecific, or **nil**. 

The directory can be a *list* of *strings* and *symbols*. The *car* of the *list* is one of the symbols :absolute or :relative, meaning: 

:absolute 

A *list* whose *car* is the symbol :absolute represents a directory path starting from the root direc tory. The list (:absolute) represents the root directory. The list (:absolute "foo" "bar" "baz") represents the directory called "/foo/bar/baz" in Unix (except possibly for *case*). 

:relative 

A *list* whose *car* is the symbol :relative represents a directory path starting from a default directory. The list (:relative) has the same meaning as **nil** and hence is not used. The list (:relative "foo" "bar") represents the directory named "bar" in the directory named "foo" in the default directory. 

Each remaining element of the *list* is a *string* or a *symbol*. 

Filenames **19–7**

 

 

Each *string* names a single level of directory structure. The *strings* should contain only the directory names themselves—no punctuation characters. 

In place of a *string*, at any point in the *list*, *symbols* can occur to indicate special file notations. Figure 19–3 lists the *symbols* that have standard meanings. Implementations are permitted to add additional *objects* of any *type* that is disjoint from **string** if necessary to represent features of their file systems that cannot be represented with the standard *strings* and *symbols*. 

Supplying any non-*string*, including any of the *symbols* listed below, to a file system for which it does not make sense signals an error of *type* **file-error**. For example, Unix does not support :wild-inferiors in most implementations. 

|**Symbol Meaning**|
| :- |
|\<p\>:wild Wildcard match of one level of directory structure :wild-inferiors Wildcard match of any number of directory levels :up Go upward in directory structure (semantic) \</p\>\<p\>:back Go upward in directory structure (syntactic)\</p\>|


**Figure 19–3. Special Markers In Directory Component** 

The following notes apply to the previous figure: 

Invalid Combinations 

Using :absolute or :wild-inferiors immediately followed by :up or :back signals an error of *type* **file-error**. 

Syntactic vs Semantic 

“Syntactic” means that the action of :back depends only on the *pathname* and not on the contents of the file system. 

“Semantic” means that the action of :up depends on the contents of the file system; to resolve a *pathname* containing :up to a *pathname* whose directory component contains only :absolute and *strings* requires probing the file system. 

:up differs from :back only in file systems that support multiple names for directories, perhaps via symbolic links. For example, suppose that there is a directory (:absolute "X" "Y" "Z") linked to (:absolute "A" "B" "C") and there also exist directories (:absolute "A" "B" "Q") and (:absolute "X" "Y" "Q"). Then (:absolute "X" "Y" "Z" :up "Q") desig 

nates (:absolute "A" "B" "Q") while (:absolute "X" "Y" "Z" :back "Q") designates (:absolute "X" "Y" "Q") 



 

 

