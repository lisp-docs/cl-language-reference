 



Although the following examples are possible to execute only in *implementations* which permit :unspecific in the indicated position andwhich permit four-letter type components, they serve to illustrate the basic concept of *pathname* merging. 



(pathname-type 



(merge-pathnames (make-pathname :type "LISP") 



(make-pathname :type "TEXT"))) 



*→* "LISP" 



(pathname-type 



(merge-pathnames (make-pathname :type nil) 



(make-pathname :type "LISP"))) 



*→* "LISP" 



(pathname-type 



(merge-pathnames (make-pathname :type :unspecific) 



(make-pathname :type "LISP"))) 



*→* :UNSPECIFIC 







 



 



