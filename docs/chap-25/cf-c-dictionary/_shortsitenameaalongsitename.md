**short-site-name, long-site-name** *Function* 

**Syntax:** 

**short-site-name** *hno argumentsi → description* 

**long-site-name** *hno argumentsi → description* 



 

 

**Arguments and Values:** 

*description*—a *string* or **nil**. 

**Description:** 

**short-site-name** and **long-site-name** return a *string* that identifies the physical location of the computer hardware, or **nil** if no appropriate *description* can be produced. 

**Examples:** 

(short-site-name) 

*→* "MIT AI Lab" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "CMU-CSD" 

(long-site-name) 

*→* "MIT Artificial Intelligence Laboratory" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "CMU Computer Science Department" 

**Affected By:** 

The implementation, the location of the computer hardware, and the installation/configuration process. 

