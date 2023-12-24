 



The facilities provided by the *pretty printer* permit <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks> to redefine the way in which <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> is displayed, and allow the full power of *pretty printing* to be applied to complex combinations of data structures. 



Whether any given style of output is in fact “pretty” is inherently a somewhat subjective issue. However, since the effect of the *pretty printer* can be customized by *conforming programs*, the necessary flexibility is provided for individual <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks> to achieve an arbitrary degree of aesthetic control. 



By providing direct access to the mechanisms within the pretty printer that make dynamic decisions about layout, the macros and functions <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>, <ClLinks styled={true} term={"pprint-newline"}><b>pprint-newline</b></ClLinks>, and <ClLinks styled={true} term={"pprint-indent"}><b>pprint-indent</b></ClLinks> make it possible to specify pretty printing layout rules as a part of any function that produces output. They also make it very easy for the detection of circularity and sharing, and abbreviation based on length and nesting depth to be supported by the function. 



The *pretty printer* is driven entirely by dispatch based on the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></ClLinks> makes it possible for *conforming programs* to associate new pretty printing functions with a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



