 



Several <GlossaryTerm styled={true} term={"readtable"}><i>readtables</i></GlossaryTerm> describing different syntaxes can exist, but at any given time only one, called the *current readtable*, affects the way in which <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm><sub>2</sub> are parsed into <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> by the *Lisp reader* . The *current readtable* in a given *dynamic environment* is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. To make a different <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> become the *current readtable*, <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> can be *assigned* or <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>. 



