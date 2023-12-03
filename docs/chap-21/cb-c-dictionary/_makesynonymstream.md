**make-synonym-stream** *Function* 

**Syntax:** 

**make-synonym-stream** *symbol → synonym-stream* 

**Arguments and Values:** 

*symbol*—a *symbol* that names a *dynamic variable*. 

*synonym-stream*—a *synonym stream*. 

**Description:** 

Returns a *synonym stream* whose *synonym stream symbol* is *symbol*. 

**Examples:** 

(setq a-stream (make-string-input-stream "a-stream") 

b-stream (make-string-input-stream "b-stream")) 

*→* #&#60;String Input Stream&#62; 

(setq s-stream (make-synonym-stream ’c-stream)) 

*→* #&#60;SYNONYM-STREAM for C-STREAM&#62; 

(setq c-stream a-stream) 

*→* #&#60;String Input Stream&#62; 

(read s-stream) *→* A-STREAM 

(setq c-stream b-stream) 

*→* #&#60;String Input Stream&#62; 

(read s-stream) *→* B-STREAM 

**Exceptional Situations:** 

Should signal **type-error** if its argument is not a *symbol*. 

**See Also:** 

Section 21.1 (Stream Concepts) 

