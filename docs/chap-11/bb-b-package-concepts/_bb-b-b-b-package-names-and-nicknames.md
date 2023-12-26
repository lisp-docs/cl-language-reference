 



Each <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> has a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> (a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>) and perhaps some <GlossaryTerm  term={"nickname"}><i>nicknames</i></GlossaryTerm> (also <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm>). These are assigned when the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is created and can be changed later. 



There is a single namespace for <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> translates a package <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> or <GlossaryTerm  term={"nickname"}><i>nickname</i></GlossaryTerm> into the associated <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"package-name"}><b>package-name</b></DictionaryLink> returns the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"package-nicknames"}><b>package-nicknames</b></DictionaryLink> returns a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of all <GlossaryTerm  term={"nickname"}><i>nicknames</i></GlossaryTerm> for a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. <DictionaryLink  term={"rename-package"}><b>rename-package</b></DictionaryLink> 



removes a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>’s current <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> and <GlossaryTerm  term={"nickname"}><i>nicknames</i></GlossaryTerm> and replaces them with new ones specified by the caller. 



