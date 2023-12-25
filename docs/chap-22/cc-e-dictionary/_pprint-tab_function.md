**pprint-tab** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-tab"}><b>pprint-tab</b></DictionaryLink> *kind colnum colinc* &amp;optional *stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 







 



 



**Arguments and Values:** 



*kind*—one of :line, :section, :line-relative, or :section-relative. 



*colnum*—a non-negative *integer* . 



*colinc*—a non-negative *integer* . 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream designator* . 



**Description:** 



Specifies tabbing to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> as performed by the standard &#126;T format directive. If <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is a *pretty printing stream* and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, tabbing is performed; otherwise, <DictionaryLink styled={true} term={"pprint-tab"}><b>pprint-tab</b></DictionaryLink> has no effect. 



The arguments *colnum* and *colinc* correspond to the two <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> to &#126;T and are in terms of <GlossaryTerm styled={true} term={"em"}><i>ems</i></GlossaryTerm>. The *kind* argument specifies the style of tabbing. It must be one of :line (tab as by &#126;T), :section (tab as by &#126;:T, but measuring horizontal positions relative to the start of the dynamically enclosing section), :line-relative (tab as by &#126;@T), or :section-relative (tab as by &#126;:@T, but measuring 



horizontal positions relative to the start of the dynamically enclosing section). 



**Exceptional Situations:** 



An error is signaled if *kind* is not one of :line, :section, :line-relative, or :section-relative. 



**See Also:** 



<DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> 



