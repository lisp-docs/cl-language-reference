**22.1.1.1.1 Printer Escaping** 

The *variable* **\*print-escape\*** controls whether the *Lisp printer* tries to produce notations such as escape characters and package prefixes. 

The *variable* **\*print-readably\*** can be used to override many of the individual aspects controlled by the other *printer control variables* when program-readable output is especially important. 

One of the many effects of making the *value* of **\*print-readably\*** be *true* is that the *Lisp printer* behaves as if **\*print-escape\*** were also *true*. For notational convenience, we say that if the value of either **\*print-readably\*** or **\*print-escape\*** is *true*, then *printer escaping* is “enabled”; and we say that if the values of both **\*print-readably\*** and **\*print-escape\*** are *false*, then *printer escaping* is “disabled”. 

