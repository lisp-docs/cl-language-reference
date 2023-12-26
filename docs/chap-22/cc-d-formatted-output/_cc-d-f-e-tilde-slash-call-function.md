 



&#126;/<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>/ 



User defined functions can be called from within a format string by using the directive &#126;/<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>/. The <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> modifier, the <ClLinks styled={true} term={"at-sign"}><i>at-sign</i></ClLinks> modifier, and arbitrarily many parameters can be specified with the &#126;/<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>/ directive. <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> can be any arbitrary string that does not contain a ”/”. All of the characters in <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> are treated as if they were upper case. If <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> contains a single <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> (:) or double <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> (::), then everything up to but not including the first ":" or "::" is taken to be a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that names a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. Everything after the first ":" or "::" (if any) is taken to be a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> 



that names a symbol. The function corresponding to a &#126;/name/ directive is obtained by looking up the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that has the indicated name in the indicated <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. If <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> does not contain a ":" or "::", then the whole <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> string is looked up in the COMMON-LISP-USER <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



When a &#126;/name/ directive is encountered, the indicated function is called with four or more arguments. The first four arguments are: the output stream, the <GlossaryTerm styled={true} term={"format argument"}><i>format argument</i></GlossaryTerm> corresponding to the directive, a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> modifier was used, and a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"at-sign"}><i>at-sign</i></ClLinks> modifier was used. The remaining arguments consist of any parameters specified with the directive. The function should print the argument appropriately. Any values returned by the function are ignored. 



The three <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"pprint-linear"}><b>pprint-linear</b></ClLinks>, <ClLinks styled={true} term={"pprint-fill"}><b>pprint-fill</b></ClLinks>, and <ClLinks styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></ClLinks> are specifically designed so that they can be called by &#126;/.../ (*i.e.*, &#126;/pprint-linear/, &#126;/pprint-fill/, and &#126;/pprint-tabular/). In particular they take <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> and <ClLinks styled={true} term={"at-sign"}><i>at-sign</i></ClLinks> arguments. 



