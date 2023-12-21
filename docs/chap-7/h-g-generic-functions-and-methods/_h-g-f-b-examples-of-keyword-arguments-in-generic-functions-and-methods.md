```lisp
For example, suppose there are two methods defined for width as follows: 
(defmethod width ((c character-class) &key font) ...) 
(defmethod width ((p picture-class) &key pixel-size) ...) 



Assume that there are no other methods and no generic function definition for width. The evaluation of the following form should signal an error because the keyword argument :pixel-size is not accepted by the applicable method. 
(width (make-instance ‘character-class :char #\Q) 
       :font ’baskerville :pixel-size 10) 
The evaluation of the following form should signal an error. 
(width (make-instance ‘picture-class :glyph (glyph #\Q)) 
       :font ’baskerville :pixel-size 10) 
The evaluation of the following form will not signal an error if the class named character-picture class is a subclass of both picture-class and character-class. 
(width (make-instance ‘character-picture-class :char #\Q) 
       :font ’baskerville :pixel-size 10) 

```