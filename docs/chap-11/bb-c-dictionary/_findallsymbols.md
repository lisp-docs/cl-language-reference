**find-all-symbols** *Function* 

**Syntax:** 

**find-all-symbols** *string → symbols* 

**Arguments and Values:** 

*string*—a *string designator* . 

*symbols*—a *list* of *symbols*. 

**Description:** 

**find-all-symbols** searches every *registered package* for *symbols* that have a *name* that is the *same* (under **string=**) as *string*. A *list* of all such *symbols* is returned. Whether or how the *list* is ordered is *implementation-dependent*. 

**Examples:** 

(find-all-symbols ’car) 

*→* (CAR) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (CAR VEHICLES:CAR) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (VEHICLES:CAR CAR) 

(intern "CAR" (make-package ’temp :use nil)) *→* TEMP::CAR, NIL 

(find-all-symbols ’car) 

*→* (TEMP::CAR CAR) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (CAR TEMP::CAR) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (TEMP::CAR CAR VEHICLES:CAR) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (CAR TEMP::CAR VEHICLES:CAR) 

**See Also:** 

**find-symbol** 

