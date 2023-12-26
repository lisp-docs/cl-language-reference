 



In order to make the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> conform to the class *C*<sub>to</sub>, <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> specified by the class *C*<sub>to</sub> that are not specified by the class *C*<sub>from</sub> are added, and <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> not specified by the class *C*<sub>to</sub> that are specified by the class *C*<sub>from</sub> are discarded. 



The values of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> specified by both the class *C*<sub>to</sub> and the class *C*<sub>from</sub> are retained. If such a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> was unbound, it remains unbound. 



The values of <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> specified as shared in the class *C*<sub>from</sub> and as local in the class *C*<sub>to</sub> are retained. This first step of the update does not affect the values of any <GlossaryTerm styled={true} term={"shared slot"}><i>shared slots</i></GlossaryTerm>. 



