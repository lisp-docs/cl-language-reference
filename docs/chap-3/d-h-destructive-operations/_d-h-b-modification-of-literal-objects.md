 



The consequences are undefined if *literal objects* are destructively modified. For this purpose, the following operations are considered <ClLinks  term={"destructive"}><i>destructive</i></ClLinks>: 



<ClLinks  term={"random-state"}><b>random-state</b></ClLinks> 



Using it as an <ClLinks  term={"argument"}><i>argument</i></ClLinks> to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"random"}><b>random</b></ClLinks>. 



<ClLinks  term={"cons"}><b>cons</b></ClLinks> 



Changing the <ClLinks  term={"car"}><i>car</i></ClLinks> <sub>1</sub> or <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> <sub>1</sub> of the <ClLinks  term={"cons"}><i>cons</i></ClLinks>, or performing a <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks  term={"object"}><i>object</i></ClLinks> which is either the <ClLinks  term={"car"}><i>car</i></ClLinks> <sub>2</sub> or the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of the <ClLinks  term={"cons"}><i>cons</i></ClLinks>. 



<ClLinks  term={"array"}><b>array</b></ClLinks> 



Storing a new value into some element of the <ClLinks  term={"array"}><i>array</i></ClLinks>, or performing a <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks  term={"object"}><i>object</i></ClLinks> that is already such an <ClLinks  term={"element"}><i>element</i></ClLinks>. 



Changing the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , <ClLinks  term={"dimension"}><i>dimensions</i></ClLinks>, or displacement of the <ClLinks  term={"array"}><i>array</i></ClLinks> (regardless of whether the <ClLinks  term={"array"}><i>array</i></ClLinks> is <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>). 



Performing a <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> operation on another <ClLinks  term={"array"}><i>array</i></ClLinks> that is displaced to the <ClLinks  term={"array"}><i>array</i></ClLinks> or that otherwise shares its contents with the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



<ClLinks  term={"hash-table"}><b>hash-table</b></ClLinks> 



Performing a <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> operation on any <ClLinks  term={"key"}><i>key</i></ClLinks>. 



Storing a new <ClLinks  term={"value"}><i>value</i></ClLinks><sub>4</sub> for any <ClLinks  term={"key"}><i>key</i></ClLinks>, or performing a <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> operation on any <ClLinks  term={"object"}><i>object</i></ClLinks> that is such a <ClLinks  term={"value"}><i>value</i></ClLinks>. 



Adding or removing entries from the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



<ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks> 



Storing a new value into any slot, or performing a <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks  term={"object"}><i>object</i></ClLinks> that is the value of some slot. 



<ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks> 



Storing a new value into any slot, or performing a <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks  term={"object"}><i>object</i></ClLinks> that is the value of some slot. 



Changing the class of the <ClLinks  term={"object"}><i>object</i></ClLinks> (*e.g.*, using the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"change-class"}><b>change-class</b></ClLinks>).  







<ClLinks  term={"readtable"}><b>readtable</b></ClLinks> 



Altering the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm>. 



Altering the syntax type of any character in this readtable. 



Altering the <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> associated with any <ClLinks  term={"character"}><i>character</i></ClLinks> in the <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>, or altering the <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro functions</i></GlossaryTerm> associated with <ClLinks  term={"character"}><i>characters</i></ClLinks> defined as <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro characters</i></GlossaryTerm> in the <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



<ClLinks  term={"stream"}><b>stream</b></ClLinks> 



Performing I/O operations on the <ClLinks  term={"stream"}><i>stream</i></ClLinks>, or *closing* the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



All other standardized types 



[This category includes, for example, <ClLinks  term={"character"}><b>character</b></ClLinks>, <ClLinks  term={"condition"}><b>condition</b></ClLinks>, <ClLinks  term={"function"}><b>function</b></ClLinks>, 



<ClLinks  term={"method-combination"}><b>method-combination</b></ClLinks>, <ClLinks  term={"method"}><b>method</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"package"}><b>package</b></ClLinks>, <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"restart"}><b>restart</b></ClLinks>, and <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>.] There are no *standardized destructive* operations defined on <ClLinks  term={"object"}><i>objects</i></ClLinks> of these <ClLinks  term={"type"}><i>types</i></ClLinks>. 



