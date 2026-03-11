;;;; verify-transcripts.lisp — Verify ```lisp examples via MGL-PAX transcribe
;;;;
;;;; Usage:
;;;;   sbcl --noinform --non-interactive --load verify-transcripts.lisp [FILES...]
;;;;
;;;; Requires: Quicklisp with mgl-pax. If no files given, discovers all
;;;; non-partial .md files under docs/.

(load "~/quicklisp/setup.lisp")
(ql:quickload "mgl-pax/transcribe" :silent t)

(defpackage :verify (:use :cl))
(in-package :verify)

(defvar *pass* 0)
(defvar *fail* 0)
(defvar *error-count* 0)
(defvar *skip* 0)
(defvar *failures* nil)

(defun extract-lisp-blocks (text)
  "Return list of (LINE-NUMBER . CONTENT) for each ```lisp block in TEXT."
  (let (blocks (pos 0) (line 1))
    (loop
      (let ((start (search "```lisp" text :start2 pos)))
        (unless start (return (nreverse blocks)))
        (loop for i from pos below start
              when (char= (char text i) #\Newline) do (incf line))
        (let ((nl (position #\Newline text :start start)))
          (unless nl (return (nreverse blocks)))
          (incf nl) (incf line)
          (let ((end (search (format nil "~%```") text :start2 nl)))
            (unless end
              (setf end (search "```" text :start2 nl))
              (unless end (return (nreverse blocks))))
            (push (cons line (subseq text nl end)) blocks)
            (setf pos (+ end 3))
            (loop for i from nl below pos
                  when (char= (char text i) #\Newline) do (incf line))))))))

(defun has-markers-p (text)
  (let ((s (format nil "~%~A" text)))
    (or (search (format nil "~%=> ") s)
        (search (format nil "~%==> ") s)
        (search (format nil "~%.. ") s))))

(defun verify-block (text file line idx)
  (when (or (= 0 (length (string-trim '(#\Space #\Tab #\Newline) text)))
            (not (has-markers-p text)))
    (incf *skip*) (return-from verify-block))
  (let* ((pkg-name (format nil "VER-~A-~D" (pathname-name (pathname file)) idx))
         (pkg (or (find-package pkg-name) (make-package pkg-name :use '(:cl))))
         (had-fail nil))
    (flet ((on-fail (c &optional prefix)
             (setf had-fail t)
             (push (list file line idx
                         (format nil "~@[~A ~]~A" prefix c)) *failures*)
             (let ((r (find-restart 'continue c))) (when r (invoke-restart r)))))
      (handler-bind
          ((mgl-pax:transcription-values-consistency-error #'on-fail)
           (mgl-pax:transcription-output-consistency-error
             (lambda (c) (on-fail c "OUTPUT:"))))
        (handler-case
            (sb-ext:with-timeout 10
              (mgl-pax:transcribe text nil
                :check-consistency '((:readable t) (:output t) (:unreadable nil))
                :update-only t :default-syntax :default
                :dynenv (lambda (fn)
                          (let ((*package* pkg) (*print-case* :upcase)
                                (*print-pretty* nil) (*print-circle* nil)
                                (*read-eval* t))
                            (funcall fn))))
              (if had-fail (incf *fail*) (incf *pass*)))
          (sb-ext:timeout ()
            (incf *error-count*)
            (push (list file line idx "TIMEOUT") *failures*))
          (error (c)
            (incf *error-count*)
            (push (list file line idx (format nil "~A" c)) *failures*)))))))

(defun verify-file (path)
  (let ((before (list-all-packages))
        (text (uiop:read-file-string path)))
    (loop for (line . blk) in (extract-lisp-blocks text)
          for i from 0 do (verify-block blk path line i))
    (dolist (pkg (set-difference (list-all-packages) before))
      (unless (search "VER-" (package-name pkg))
        (ignore-errors (delete-package pkg))))))

(defun find-md-files ()
  (sort (remove-if (lambda (p) (char= #\_ (char (pathname-name p) 0)))
                   (directory (merge-pathnames "docs/**/*.md" (truename "."))))
        #'string< :key #'namestring))

(defun main ()
  (let ((files (or (remove-if (lambda (a)
                                (or (string= a "--noinform") (string= a "--non-interactive")
                                    (string= a "--load") (string= a "verify-transcripts.lisp")
                                    (search "--dynamic-space" a)))
                              (rest sb-ext:*posix-argv*))
                   (mapcar #'namestring (find-md-files)))))
    (format t "Verifying ~D files...~%" (length files))
    (dolist (f files) (verify-file f))
    (format t "~%Total: ~D pass, ~D fail, ~D error, ~D skip~%"
            *pass* *fail* *error-count* *skip*)
    (when *failures*
      (format t "~%FAILURES (~D):~%" (length *failures*))
      (dolist (f (reverse *failures*))
        (destructuring-bind (file line idx msg) f
          (format t "  ~A:~D [~D] ~A~%" file line idx
                  (subseq msg 0 (min (length msg) 200))))))
    (sb-ext:exit :code (if *failures* 1 0))))

(main)
