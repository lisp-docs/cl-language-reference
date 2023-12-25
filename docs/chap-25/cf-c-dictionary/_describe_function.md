**describe** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *stream → hno valuesi* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream designator* . The default is *standard output*. 



**Description:** 



<DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> displays information about <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



For example, <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> might show the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s value, its definition, and each of its properties. <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> of a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> might show the number’s internal representation in a way that is useful for tracking down round-off errors. In all cases, however, the nature and format of the output of <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> can describe something that it finds inside the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; in such cases, a notational device such as increased indentation or positioning in a table is typically used in order to visually distinguish such recursive descriptions from descriptions of the argument <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 







 



 



The actual act of describing the object is implemented by <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink>. <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> exists as an interface primarily to manage argument defaulting (including conversion of arguments <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> into *stream objects*) and to inhibit any return values from <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> is not intended to be an interactive function. In a *conforming implementation*, <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> must not, by default, prompt for user input. User-defined methods for <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> are likewise restricted. 



**Side Effects:** 



Output to *standard output* or *terminal I/O*. 



**Affected By:** 



**\*standard-output\*** and <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, methods on <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> for <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> having user-defined *classes*. 



**See Also:** 



<DictionaryLink styled={true} term={"inspect"}><b>inspect</b></DictionaryLink>, <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> 



