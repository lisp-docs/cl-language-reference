**6.1.2.1.5.1 Examples of for-as-across subclause** 

(loop for char across (the simple-string (find-message channel)) 

do (write-char char stream)) 

