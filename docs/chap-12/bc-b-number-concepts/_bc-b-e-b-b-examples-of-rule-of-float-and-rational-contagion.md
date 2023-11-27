 

;;;; Combining rationals with floats. 

;;; This example assumes an implementation in which 

;;; (float-radix 0.5) is 2 (as in IEEE) or 16 (as in IBM/360), 

;;; or else some other implementation in which 1/2 has an exact 

;;; representation in floating point. 

(+ 1/2 0.5) *→* 1.0 

(- 1/2 0.5d0) *→* 0.0d0 

(+ 0.5 -0.5 1/2) *→* 0.5 

;;;; Comparing rationals with floats. 

;;; This example assumes an implementation in which the default float 

;;; format is IEEE single-float, IEEE double-float, or some other format 

;;; in which 5/7 is rounded upwards by FLOAT. 

(&#60; 5/7 (float 5/7)) *→ true* 

(&#60; 5/7 (rational (float 5/7))) *→ true* 

(&#60; (float 5/7) (float 5/7)) *→ false* 

