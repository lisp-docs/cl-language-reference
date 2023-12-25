 



The facilities provided by the *pretty printer* permit <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm> to redefine the way in which <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> is displayed, and allow the full power of *pretty printing* to be applied to complex combinations of data structures. 



Whether any given style of output is in fact “pretty” is inherently a somewhat subjective issue. However, since the effect of the *pretty printer* can be customized by *conforming programs*, the necessary flexibility is provided for individual <GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm> to achieve an arbitrary degree of aesthetic control. 



By providing direct access to the mechanisms within the pretty printer that make dynamic decisions about layout, the macros and functions <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-newline"}><b>pprint-newline</b></DictionaryLink>, and <DictionaryLink styled={true} term={"pprint-indent"}><b>pprint-indent</b></DictionaryLink> make it possible to specify pretty printing layout rules as a part of any function that produces output. They also make it very easy for the detection of circularity and sharing, and abbreviation based on length and nesting depth to be supported by the function. 



The *pretty printer* is driven entirely by dispatch based on the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></DictionaryLink> makes it possible for *conforming programs* to associate new pretty printing functions with a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



