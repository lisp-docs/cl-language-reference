Reinitialization of Class Metaobjects
=====================================

#### Reinitialization of Class Metaobjects

Some class metaobject classes allow their instances to be reinitialized. This is done by calling [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance). The initialization arguments have the same interpretation as in class initialization.

If the class metaobject was finalized before the call to [reinitialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_reinit.htm#reinitialize-instance), [finalize-inheritance](/meta-object-protocol/finalize-inheritance) will be called again once all the initialization arguments have been processed and associated with the class metaobject. In addition, once finalization is complete, any dependents of the class metaobject will be updated by calling [update-dependent](/meta-object-protocol/update-dependent).
