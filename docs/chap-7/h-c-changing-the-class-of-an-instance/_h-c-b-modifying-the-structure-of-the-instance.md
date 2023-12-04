 



In order to make the *instance* conform to the class *C*<sub>to</sub>, *local slots* specified by the class *C*<sub>to</sub> that are not specified by the class *C*<sub>from</sub> are added, and *local slots* not specified by the class *C*<sub>to</sub> that are specified by the class *C*<sub>from</sub> are discarded. 



The values of *local slots* specified by both the class *C*<sub>to</sub> and the class *C*<sub>from</sub> are retained. If such a *local slot* was unbound, it remains unbound. 



The values of *slots* specified as shared in the class *C*<sub>from</sub> and as local in the class *C*<sub>to</sub> are retained. This first step of the update does not affect the values of any *shared slots*. 



