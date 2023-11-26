 

Especially if it is long, it is permissible and appropriate for a *report message* to contain one or more embedded *newlines*. 

If the calling routine conventionally inserts some additional prefix (such as “Error: ” or “;; Error: ”) on the first line of the message, it must also assure that an appropriate prefix will 

Conditions **9–5**

 

 

be added to each subsequent line of the output, so that the left edge of the message output by the *condition reporter* will still be properly aligned. 

(defun test () 

(error "This is an error message.~%It has two lines.")) 

;; Implementation A 

(test) 

This is an error message. 

It has two lines. 

;; Implementation B 

(test) 

;; Error: This is an error message. 

;; It has two lines. 

;; Implementation C 

(test) 

» Error: This is an error message. 

It has two lines. 

