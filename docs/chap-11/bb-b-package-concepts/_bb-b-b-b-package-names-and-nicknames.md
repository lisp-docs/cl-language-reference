 



Each <ClLinks  term={"package"}><i>package</i></ClLinks> has a <ClLinks  term={"name"}><i>name</i></ClLinks> (a <ClLinks  term={"string"}><i>string</i></ClLinks>) and perhaps some <ClLinks  term={"nickname"}><i>nicknames</i></ClLinks> (also <ClLinks  term={"string"}><i>strings</i></ClLinks>). These are assigned when the <ClLinks  term={"package"}><i>package</i></ClLinks> is created and can be changed later. 



There is a single namespace for <ClLinks  term={"package"}><i>packages</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> translates a package <ClLinks  term={"name"}><i>name</i></ClLinks> or <ClLinks  term={"nickname"}><i>nickname</i></ClLinks> into the associated <ClLinks  term={"package"}><i>package</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"package-name"}><b>package-name</b></DictionaryLink> returns the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"package"}><i>package</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"package-nicknames"}><b>package-nicknames</b></DictionaryLink> returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of all <ClLinks  term={"nickname"}><i>nicknames</i></ClLinks> for a <ClLinks  term={"package"}><i>package</i></ClLinks>. <DictionaryLink  term={"rename-package"}><b>rename-package</b></DictionaryLink> 



removes a <ClLinks  term={"package"}><i>package</i></ClLinks>’s current <ClLinks  term={"name"}><i>name</i></ClLinks> and <ClLinks  term={"nickname"}><i>nicknames</i></ClLinks> and replaces them with new ones specified by the caller. 



