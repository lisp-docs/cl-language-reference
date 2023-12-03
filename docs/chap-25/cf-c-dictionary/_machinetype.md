**machine-type** *Function* 

**Syntax:** 

**machine-type** *hno argumentsi → description* 

**Arguments and Values:** 

*description*—a *string* or **nil**. 

**Description:** 

Returns a *string* that identifies the generic name of the computer hardware on which Common Lisp is running. 

**Examples:** 

(machine-type) 

*→* "DEC PDP-10" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "Symbolics LM-2" 

**Affected By:** 

The machine type. The implementation. 

**See Also:** 

**machine-version** 

