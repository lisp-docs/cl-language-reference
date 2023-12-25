 



&#126;/<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>/ 



User defined functions can be called from within a format string by using the directive &#126;/<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>/. The <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> modifier, the <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> modifier, and arbitrarily many parameters can be specified with the &#126;/<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>/ directive. <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> can be any arbitrary string that does not contain a ”/”. All of the characters in <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> are treated as if they were upper case. If <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> contains a single <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> (:) or double <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> (::), then everything up to but not including the first ":" or "::" is taken to be a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. Everything after the first ":" or "::" (if any) is taken to be a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> 



that names a symbol. The function corresponding to a &#126;/name/ directive is obtained by looking up the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that has the indicated name in the indicated <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> does not contain a ":" or "::", then the whole <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> string is looked up in the COMMON-LISP-USER <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



When a &#126;/name/ directive is encountered, the indicated function is called with four or more arguments. The first four arguments are: the output stream, the *format argument* corresponding to the directive, a *generalized boolean* that is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> modifier was used, and a *generalized boolean* that is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> modifier was used. The remaining arguments consist of any parameters specified with the directive. The function should print the argument appropriately. Any values returned by the function are ignored. 



The three <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-linear"}><b>pprint-linear</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-fill"}><b>pprint-fill</b></DictionaryLink>, and <DictionaryLink styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></DictionaryLink> are specifically designed so that they can be called by &#126;/.../ (*i.e.*, &#126;/pprint-linear/, &#126;/pprint-fill/, and &#126;/pprint-tabular/). In particular they take <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> arguments. 



