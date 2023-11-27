 

If :unspecific is the value of a *pathname* component, the component is considered to be “absent” or to “have no meaning” in the *filename* being represented by the *pathname*. 

Whether a value of :unspecific is permitted for any component on any given *file system* accessible to the *implementation* is *implementation-defined*. A *conforming program* must never unconditionally use a :unspecific as the value of a *pathname* component because such a value is not guaranteed to be permissible in all implementations. However, a *conforming program* can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable *pathname* components. And certainly a *conforming program* should be prepared for the possibility that any components of a *pathname* could be :unspecific. 

When *reading*&#60;sub&#62;1&#60;/sub&#62; the value of any *pathname* component, *conforming programs* should be prepared for the value to be :unspecific. 

When *writing*&#60;sub&#62;1&#60;/sub&#62; the value of any *pathname* component, the consequences are undefined if :unspecific is given for a *pathname* in a *file system* for which it does not make sense. 

