*∗<ClLinks styled={true} term={"print-radix"}><b>*print-radix*</b></ClLinks>∗ Variable* 



**Value Type:** 



**\*print-base\***—a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks>—a *generalized boolean*. 



**Initial Value:** 



The initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*print-base\*** is 10. The initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Description:** 



**\*print-base\*** and <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks> control the printing of <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks>. The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*print-base\*** is called the *current output base*. 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*print-base\*** is the <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> in which the printer will print <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks>. For radices above 10, letters of the alphabet are used to represent digits above 9. 



If the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the printer will print a radix specifier to indicate the <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> in which it is printing a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> number. The radix specifier is always printed using lowercase letters. If **\*print-base\*** is 2, 8, or 16, then the radix specifier used is #b, #o, or #x, respectively. For *integers*, base ten is indicated by a trailing decimal point instead of a leading radix specifier; for <ClLinks styled={true} term={"ratio"}><i>ratios</i></ClLinks>, #10r is used. 



**Examples:**
```lisp

(let ((\*print-base\* 24.) (\*print-radix\* t)) 
  (print 23.)) 
▷ #24rN 
→ 23 
(setq \*print-base\* 10) → 10 
(setq \*print-radix\* nil) → NIL 
(dotimes (i 35) 
  (let ((\*print-base\* (+ i 2))) ;print the decimal number 40 
    (write 40) ;in each base from 2 to 36 
    (if (zerop (mod i 10)) (terpri) (format t " ")))) 
▷ 101000 
▷ 1111 220 130 104 55 50 44 40 37 34 
▷ 31 2C 2A 28 26 24 22 20 1J 1I 
▷ 1H 1G 1F 1E 1D 1C 1B 1A 19 18 
▷ 17 16 15 14 
→ NIL 
(dolist (pb ’(2 3 8 10 16)) 

  
  
  (let ((\*print-radix\* t) ;print the integer 10 and 
	(\*print-base\* pb)) ;the ratio 1/10 in bases 2, 
    (format t "~&~S ~S~%" 10 1/10))) ;3, 8, 10, 16 
▷ #b1010 #b1/1010 
▷ #3r101 #3r1/101 
▷ #o12 #o1/12 
▷ 10. #10r1/10 
▷ #xA #x1/A 
→ NIL 

```
**Affected By:** 



Might be <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> by <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>, and <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks>, <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"write-to-string"}><b>write-to-string</b></ClLinks> 



