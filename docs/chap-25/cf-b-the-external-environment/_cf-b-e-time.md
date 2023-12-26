 



Time is represented in four different ways in Common Lisp: <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"internal time"}><i>internal time</i></GlossaryTerm>, and seconds. <GlossaryTerm styled={true} term={"decoded time"}><i>Decoded time</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm> are used primarily to represent calendar time, and are precise only to one second. <GlossaryTerm styled={true} term={"internal time"}><i>Internal time</i></GlossaryTerm> is used primarily to represent measurements of 



computer time (such as run time) and is precise to some <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> fraction of a second called an <GlossaryTerm styled={true} term={"internal time unit"}><i>internal time unit</i></GlossaryTerm>, as specified by <ClLinks styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></ClLinks>. An <GlossaryTerm styled={true} term={"internal time"}><i>internal time</i></GlossaryTerm> can be used for either <ClLinks styled={true} term={"absolute"}><i>absolute</i></ClLinks> and *relative time* measurements. Both a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm> and a <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm> can be used only for *absolute time* measurements. In the case of one function, <ClLinks styled={true} term={"sleep"}><b>sleep</b></ClLinks>, time intervals are represented as a non-negative *real* number of seconds. 



Figure 25–4 shows <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> relating to <ClLinks styled={true} term={"time"}><i>time</i></ClLinks>. 



|<p>**decode-universal-time get-internal-run-time** </p><p>**encode-universal-time get-universal-time** </p><p>**get-decoded-time internal-time-units-per-second** </p><p>**get-internal-real-time sleep**</p>|

| :- |





**Figure 25–4. Defined names involving Time.** 



