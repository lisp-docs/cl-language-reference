 



Time is represented in four different ways in Common Lisp: *decoded time*, *universal time*, *internal time*, and seconds. *Decoded time* and *universal time* are used primarily to represent calendar time, and are precise only to one second. *Internal time* is used primarily to represent measurements of 



computer time (such as run time) and is precise to some <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> fraction of a second called an *internal time unit*, as specified by <DictionaryLink styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></DictionaryLink>. An *internal time* can be used for either <GlossaryTerm styled={true} term={"absolute"}><i>absolute</i></GlossaryTerm> and *relative time* measurements. Both a *universal time* and a *decoded time* can be used only for *absolute time* measurements. In the case of one function, <DictionaryLink styled={true} term={"sleep"}><b>sleep</b></DictionaryLink>, time intervals are represented as a non-negative *real* number of seconds. 



Figure 25–4 shows *defined names* relating to <GlossaryTerm styled={true} term={"time"}><i>time</i></GlossaryTerm>. 



|<p>**decode-universal-time get-internal-run-time** </p><p>**encode-universal-time get-universal-time** </p><p>**get-decoded-time internal-time-units-per-second** </p><p>**get-internal-real-time sleep**</p>|

| :- |





**Figure 25–4. Defined names involving Time.** 



