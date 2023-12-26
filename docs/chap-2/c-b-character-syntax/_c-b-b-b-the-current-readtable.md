 



Several <ClLinks  term={"readtable"}><i>readtables</i></ClLinks> describing different syntaxes can exist, but at any given time only one, called the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>, affects the way in which <ClLinks  term={"expression"}><i>expressions</i></ClLinks><sub>2</sub> are parsed into <ClLinks  term={"object"}><i>objects</i></ClLinks> by the *Lisp reader* . The <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> in a given <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>. To make a different <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> become the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>, <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> can be *assigned* or <ClLinks  term={"bound"}><i>bound</i></ClLinks>. 



