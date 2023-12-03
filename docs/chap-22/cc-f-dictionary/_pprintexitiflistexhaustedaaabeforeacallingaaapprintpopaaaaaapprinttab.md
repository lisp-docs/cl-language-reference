**pprint-exit-if-list-exhausted** before calling **pprint-pop**. **pprint-tab** *Function* 

**Syntax:** 

**pprint-tab** *kind colnum colinc* &optional *stream →* **nil** 



 

 

**Arguments and Values:** 

*kind*—one of :line, :section, :line-relative, or :section-relative. 

*colnum*—a non-negative *integer* . 

*colinc*—a non-negative *integer* . 

*stream*—an *output stream designator* . 

**Description:** 

Specifies tabbing to *stream* as performed by the standard ~T format directive. If *stream* is a *pretty printing stream* and the *value* of **\*print-pretty\*** is *true*, tabbing is performed; otherwise, **pprint-tab** has no effect. 

The arguments *colnum* and *colinc* correspond to the two *parameters* to ~T and are in terms of *ems*. The *kind* argument specifies the style of tabbing. It must be one of :line (tab as by ~T), :section (tab as by ~:T, but measuring horizontal positions relative to the start of the dynamically enclosing section), :line-relative (tab as by ~@T), or :section-relative (tab as by ~:@T, but measuring 

horizontal positions relative to the start of the dynamically enclosing section). 

**Exceptional Situations:** 

An error is signaled if *kind* is not one of :line, :section, :line-relative, or :section-relative. 

**See Also:** 

**pprint-logical-block** 

