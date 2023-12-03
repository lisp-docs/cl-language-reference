**stream-element-type** *Function* 

**Syntax:** 

**stream-element-type** *stream → typespec* 

**Arguments and Values:** 

*stream*—a *stream*. 

*typespec*—a *type specifier* . 

**Description:** 

**stream-element-type** returns a *type specifier* that indicates the *types* of *objects* that may be read from or written to *stream*. 

*Streams* created by **open** have an *element type* restricted to **integer** or a *subtype* of *type* **character**. **Examples:** 

;; Note that the stream must accomodate at least the specified type, 

;; but might accomodate other types. Further note that even if it does 

;; accomodate exactly the specified type, the type might be specified in 

;; any of several ways. 

(with-open-file (s "test" :element-type ’(integer 0 1) 

:if-exists :error 

:direction :output) 



 

 

(stream-element-type s)) 

*→* INTEGER 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (UNSIGNED-BYTE 16) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (UNSIGNED-BYTE 8) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; BIT 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (UNSIGNED-BYTE 1) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (INTEGER 0 1) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (INTEGER 0 (2)) 

**Exceptional Situations:** 

Should signal an error of *type* **type-error** if *stream* is not a *stream*. 

