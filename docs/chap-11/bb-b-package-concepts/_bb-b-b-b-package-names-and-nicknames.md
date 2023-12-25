 



Each <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> has a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) and perhaps some <GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm> (also <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>). These are assigned when the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is created and can be changed later. 



There is a single namespace for <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> translates a package <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"nickname"}><i>nickname</i></GlossaryTerm> into the associated <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-name"}><b>package-name</b></DictionaryLink> returns the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-nicknames"}><b>package-nicknames</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of all <GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. <DictionaryLink styled={true} term={"rename-package"}><b>rename-package</b></DictionaryLink> 



removes a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s current <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm> and replaces them with new ones specified by the caller. 



