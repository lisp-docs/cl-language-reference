```lisp

(defclass C1 () 
  ((S1 :initform 5.4 :type number) 
   (S2 :allocation :class))) 
(defclass C2 (C1) 
  ((S1 :initform 5 :type integer) 
   (S2 :allocation :instance) 
   (S3 :accessor C2-S3))) 
*Instances* of the class C1 have a *local slot* named S1, whose default initial value is 5.4 and whose *value* should always be a *number* . The class C1 also has a *shared slot* named S2. 
There is a *local slot* named S1 in *instances* of C2. The default initial value of S1 is 5. The value of S1 should always be of type (and integer number). There are also *local slots* named S2 and S3 in *instances* of C2. The class C2 has a *method* for C2-S3 for reading the value of slot S3; there is also a *method* for (setf C2-S3) that writes the value of S3. 

```