**11.1.1.2.1 Internal and External Symbols** 

The mappings in a *package* are divided into two classes, external and internal. The *symbols* targeted by these different mappings are called *external symbols* and *internal symbols* of the *package*. Within a *package*, a name refers to one *symbol* or to none; if it does refer to a *symbol*, then it is either external or internal in that *package*, but not both. *External symbols* are part of the package’s public interface to other *packages*. *Symbols* become *external symbols* of a given *package* if they have been *exported* from that *package*. 

A *symbol* has the same *name* no matter what *package* it is *present* in, but it might be an *external symbol* of some *packages* and an *internal symbol* of others. 

