 

The first step modifies the structure of *instances* of the redefined *class* to conform to its new *class* definition. *Local slots* specified by the new *class* definition that are not specified as either local or shared by the old *class* are added, and *slots* not specified as either local or shared by the new *class* definition that are specified as local by the old *class* are discarded. The *names* of these added and discarded *slots* are passed as arguments to **update-instance-for-redefined-class** as described in 

the next section. 

The values of *local slots* specified by both the new and old *classes* are retained. If such a *local slot* was unbound, it remains unbound. 

The value of a *slot* that is specified as shared in the old *class* and as local in the new *class* is retained. If such a *shared slot* was unbound, the *local slot* is unbound.  



