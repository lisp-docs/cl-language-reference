**synonym-stream** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"synonym-stream"}><b>synonym-stream</b></ClLinks>, <ClLinks  term={"stream"}><b>stream</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is an alias for another <ClLinks  term={"stream"}><i>stream</i></ClLinks>, which is the <ClLinks  term={"value"}><i>value</i></ClLinks> of a *dynamic variable* whose <ClLinks  term={"name"}><i>name</i></ClLinks> is the *synonym stream symbol* of the *synonym stream*. 



Any operations on a *synonym stream* will be performed on the <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is then the <ClLinks  term={"value"}><i>value</i></ClLinks> of the *dynamic variable* named by the *synonym stream symbol*. If the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks> should change, or if the <ClLinks  term={"variable"}><i>variable</i></ClLinks> should be <ClLinks  term={"bound"}><i>bound</i></ClLinks>, then the <ClLinks  term={"stream"}><i>stream</i></ClLinks> will operate on the new <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks>, <ClLinks  term={"synonym-stream-symbol"}><b>synonym-stream-symbol</b></ClLinks> 







 



 



