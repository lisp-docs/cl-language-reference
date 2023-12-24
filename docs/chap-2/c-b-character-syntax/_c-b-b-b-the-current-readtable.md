 



Several <ClLinks styled={true} term={"readtable"}><i>readtables</i></ClLinks> describing different syntaxes can exist, but at any given time only one, called the *current readtable*, affects the way in which <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks><sub>2</sub> are parsed into <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> by the *Lisp reader* . The *current readtable* in a given *dynamic environment* is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. To make a different <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> become the *current readtable*, <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> can be *assigned* or <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>. 



