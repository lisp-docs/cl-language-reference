 

In order to make the *instance* conform to the class *C*&#60;sub&#62;to&#60;/sub&#62;, *local slots* specified by the class *C*&#60;sub&#62;to&#60;/sub&#62; that are not specified by the class *C*&#60;sub&#62;from&#60;/sub&#62; are added, and *local slots* not specified by the class *C*&#60;sub&#62;to&#60;/sub&#62; that are specified by the class *C*&#60;sub&#62;from&#60;/sub&#62; are discarded. 

The values of *local slots* specified by both the class *C*&#60;sub&#62;to&#60;/sub&#62; and the class *C*&#60;sub&#62;from&#60;/sub&#62; are retained. If such a *local slot* was unbound, it remains unbound. 

The values of *slots* specified as shared in the class *C*&#60;sub&#62;from&#60;/sub&#62; and as local in the class *C*&#60;sub&#62;to&#60;/sub&#62; are retained. This first step of the update does not affect the values of any *shared slots*. 

