**6.1.3.5 Examples of SUM clause** 

(loop for i of-type fixnum in ’(1 2 3 4 5) 

sum i) 

*→* 15 

(setq series ’(1.2 4.3 5.7)) 

*→* (1.2 4.3 5.7) 

(loop for v in series 

sum (\* 2.0 v)) 

*→* 22.4 

