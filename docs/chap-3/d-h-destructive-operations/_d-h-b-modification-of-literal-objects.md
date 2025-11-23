 



The consequences are undefined if *literal objects* are destructively modified. For this purpose, the following operations are considered <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm>: 



<DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink> 



Using it as an <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"random"}><b>random</b></DictionaryLink>. 



<DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink> 



Changing the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> <sub>1</sub> or <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>1</sub> of the <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>, or performing a <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which is either the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> <sub>2</sub> or the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>2</sub> of the <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>. 



<DictionaryLink  term={"array"}><b>array</b></DictionaryLink> 



Storing a new value into some element of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, or performing a <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is already such an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>. 



Changing the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>, or displacement of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> (regardless of whether the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>). 



Performing a <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> operation on another <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that is displaced to the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> or that otherwise shares its contents with the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



<DictionaryLink  term={"hash-table"}><b>hash-table</b></DictionaryLink> 



Performing a <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> operation on any <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>. 



Storing a new <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm><sub>4</sub> for any <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>, or performing a <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> operation on any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is such a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. 



Adding or removing entries from the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



<DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> 



Storing a new value into any slot, or performing a <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is the value of some slot. 



<DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> 



Storing a new value into any slot, or performing a <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> operation on an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is the value of some slot. 



Changing the class of the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> (*e.g.*, using the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>).  







<DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink> 



Altering the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm>. 



Altering the syntax type of any character in this readtable. 



Altering the <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> associated with any <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> in the <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>, or altering the <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro functions</i></GlossaryTerm> associated with <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> defined as <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro characters</i></GlossaryTerm> in the <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. 



<DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink> 



Performing I/O operations on the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, or *closing* the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



All other standardized types 



[This category includes, for example, <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"method-combination"}><b>method-combination</b></DictionaryLink>, <DictionaryLink  term={"method"}><b>method</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"package"}><b>package</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"restart"}><b>restart</b></DictionaryLink>, and <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>.] There are no *standardized destructive* operations defined on <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of these <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>. 



