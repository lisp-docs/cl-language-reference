  



 



**Description:** 



If it is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, it specifies the right margin (as *integer* number of <GlossaryTerm styled={true} term={"em"}><i>ems</i></GlossaryTerm>) to use when the *pretty printer* is making layout decisions. 



If it is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the right margin is taken to be the maximum line length such that output can be displayed without wraparound or truncation. If this cannot be determined, an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> value is used. 



**Notes:** 



This measure is in units of <GlossaryTerm styled={true} term={"em"}><i>ems</i></GlossaryTerm> in order to be compatible with <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> variable-width fonts while still not requiring the language to provide support for fonts. 



