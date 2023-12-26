 



Several <GlossaryTerm  term={"readtable"}><i>readtables</i></GlossaryTerm> describing different syntaxes can exist, but at any given time only one, called the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>, affects the way in which <GlossaryTerm  term={"expression"}><i>expressions</i></GlossaryTerm><sub>2</sub> are parsed into <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> by the *Lisp reader* . The <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> in a given <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. To make a different <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> become the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>, <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> can be *assigned* or <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>. 



