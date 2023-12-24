**describe** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;optional *stream → ⟨no values⟩* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output stream designator* . The default is *standard output*. 



**Description:** 



<ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> displays information about <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



For example, <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> might show the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s value, its definition, and each of its properties. <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> of a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> might show the number’s internal representation in a way that is useful for tracking down round-off errors. In all cases, however, the nature and format of the output of <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



<ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> can describe something that it finds inside the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; in such cases, a notational device such as increased indentation or positioning in a table is typically used in order to visually distinguish such recursive descriptions from descriptions of the argument <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 







 



 



The actual act of describing the object is implemented by <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks>. <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> exists as an interface primarily to manage argument defaulting (including conversion of arguments <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> into *stream objects*) and to inhibit any return values from <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks>. 



<ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> is not intended to be an interactive function. In a *conforming implementation*, <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> must not, by default, prompt for user input. User-defined methods for <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> are likewise restricted. 



**Side Effects:** 



Output to *standard output* or *terminal I/O*. 



**Affected By:** 



**\*standard-output\*** and <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>, methods on <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> and <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> for <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> having user-defined *classes*. 



**See Also:** 



<ClLinks styled={true} term={"inspect"}><b>inspect</b></ClLinks>, <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> 



