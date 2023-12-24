**synonym-stream** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"synonym-stream"}><b>synonym-stream</b></ClLinks>, <ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is an alias for another <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of a *dynamic variable* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the *synonym stream symbol* of the *synonym stream*. 



Any operations on a *synonym stream* will be performed on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is then the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *dynamic variable* named by the *synonym stream symbol*. If the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> should change, or if the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> should be <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>, then the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> will operate on the new <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks>, <ClLinks styled={true} term={"synonym-stream-symbol"}><b>synonym-stream-symbol</b></ClLinks> 







 



 



