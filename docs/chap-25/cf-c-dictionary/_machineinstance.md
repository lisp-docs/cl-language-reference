**machine-instance** *Function* 

**Syntax:** 

**machine-instance** *hno argumentsi → description* 

**Arguments and Values:** 

*description*—a *string* or **nil**. 

**Description:** 

Returns a *string* that identifies the particular instance of the computer hardware on which Common Lisp is running, or **nil** if no such *string* can be computed. 

**Examples:** 

(machine-instance) 

*→* "ACME.COM" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "S/N 123231" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "18.26.0.179" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "AA-00-04-00-A7-A4" 

**Affected By:** 

The machine instance, and the *implementation*. 



 

 

**See Also:** 

**machine-type**, **machine-version** 

