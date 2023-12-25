 



The consequences are undefined if *literal objects* are destructively modified. For this purpose, the following operations are considered <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm>: 



<DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink> 



Using it as an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> 



Changing the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> <sub>1</sub> or <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>1</sub> of the <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, or performing a <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is either the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> <sub>2</sub> or the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>2</sub> of the <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink> 



Storing a new value into some element of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, or performing a <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is already such an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. 



Changing the *fill pointer* , <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>, or displacement of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> (regardless of whether the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is *actually adjustable*). 



Performing a <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> operation on another <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that is displaced to the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> or that otherwise shares its contents with the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"hash-table"}><b>hash-table</b></DictionaryLink> 



Performing a <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> operation on any <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>. 



Storing a new <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm><sub>4</sub> for any <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>, or performing a <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> operation on any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is such a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. 



Adding or removing entries from the *hash table*. 



<DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink> 



Storing a new value into any slot, or performing a <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is the value of some slot. 



<DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> 



Storing a new value into any slot, or performing a <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is the value of some slot. 



Changing the class of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (*e.g.*, using the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>).  







<DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink> 



Altering the *readtable case*. 



Altering the syntax type of any character in this readtable. 



Altering the *reader macro function* associated with any <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>, or altering the *reader macro functions* associated with <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> defined as *dispatching macro characters* in the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink> 



Performing I/O operations on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or *closing* the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



All other standardized types 



[This category includes, for example, <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, 



<DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink>, <DictionaryLink styled={true} term={"method"}><b>method</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart"}><b>restart</b></DictionaryLink>, and <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>.] There are no *standardized destructive* operations defined on <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of these <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. 



