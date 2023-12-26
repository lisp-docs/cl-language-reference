**synonym-stream** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"synonym-stream"}><b>synonym-stream</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is an alias for another <ClLinks  term={"stream"}><i>stream</i></ClLinks>, which is the <ClLinks  term={"value"}><i>value</i></ClLinks> of a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> whose <ClLinks  term={"name"}><i>name</i></ClLinks> is the <GlossaryTerm styled={true} term={"synonym stream symbol"}><i>synonym stream symbol</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"synonym stream"}><i>synonym stream</i></GlossaryTerm>. 



Any operations on a <GlossaryTerm styled={true} term={"synonym stream"}><i>synonym stream</i></GlossaryTerm> will be performed on the <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is then the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named by the <GlossaryTerm styled={true} term={"synonym stream symbol"}><i>synonym stream symbol</i></GlossaryTerm>. If the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks> should change, or if the <ClLinks  term={"variable"}><i>variable</i></ClLinks> should be <ClLinks  term={"bound"}><i>bound</i></ClLinks>, then the <ClLinks  term={"stream"}><i>stream</i></ClLinks> will operate on the new <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"make-synonym-stream"}><b>make-synonym-stream</b></DictionaryLink>, <DictionaryLink  term={"synonym-stream-symbol"}><b>synonym-stream-symbol</b></DictionaryLink> 







 



 



