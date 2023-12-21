```lisp

(loop for char across (the simple-string (find-message channel)) 
      do (write-char char stream)) 

```