 



The consequences are undefined if *literal objects* are destructively modified. For this purpose, the following operations are considered <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks>: 



<ClLinks styled={true} term={"random-state"}><b>random-state</b></ClLinks> 



Using it as an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"random"}><b>random</b></ClLinks>. 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> 



Changing the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> <sub>1</sub> or <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> <sub>1</sub> of the <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, or performing a <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is either the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> <sub>2</sub> or the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> <sub>2</sub> of the <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



<ClLinks styled={true} term={"array"}><b>array</b></ClLinks> 



Storing a new value into some element of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, or performing a <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is already such an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. 



Changing the *fill pointer* , <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>, or displacement of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> (regardless of whether the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is *actually adjustable*). 



Performing a <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> operation on another <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is displaced to the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> or that otherwise shares its contents with the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



<ClLinks styled={true} term={"hash-table"}><b>hash-table</b></ClLinks> 



Performing a <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> operation on any <ClLinks styled={true} term={"key"}><i>key</i></ClLinks>. 



Storing a new <ClLinks styled={true} term={"value"}><i>value</i></ClLinks><sub>4</sub> for any <ClLinks styled={true} term={"key"}><i>key</i></ClLinks>, or performing a <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> operation on any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is such a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. 



Adding or removing entries from the *hash table*. 



<ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks> 



Storing a new value into any slot, or performing a <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is the value of some slot. 



<ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> 



Storing a new value into any slot, or performing a <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> operation on an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is the value of some slot. 



Changing the class of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (*e.g.*, using the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>).  







<ClLinks styled={true} term={"readtable"}><b>readtable</b></ClLinks> 



Altering the *readtable case*. 



Altering the syntax type of any character in this readtable. 



Altering the *reader macro function* associated with any <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> in the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>, or altering the *reader macro functions* associated with <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> defined as *dispatching macro characters* in the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. 



<ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks> 



Performing I/O operations on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or *closing* the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



All other standardized types 



[This category includes, for example, <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, 



<ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>, <ClLinks styled={true} term={"method"}><b>method</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"package"}><b>package</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"restart"}><b>restart</b></ClLinks>, and <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>.] There are no *standardized destructive* operations defined on <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of these <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. 



