---
title: "user-homedir-pathname"
---

# user-homedir-pathname

import UserHomedirPathnameFunction from './_user-homedir-pathname_function.md';

<UserHomedirPathnameFunction />

## Expanded Reference: user-homedir-pathname

### Basic Usage

`user-homedir-pathname` returns a pathname corresponding to the user's home directory. The optional `host` argument specifies which host to query, defaulting to the local machine.

```lisp
(pathnamep (user-homedir-pathname))
;; => T
```

### Inspecting the Result

The returned value is a pathname object, so standard pathname functions can be used to examine it.

```lisp
(let ((home (user-homedir-pathname)))
  (eq (first (pathname-directory home)) :absolute))
;; => T
```

### Building File Paths Relative to Home

A common use is constructing paths to configuration files or data directories within the user's home.

```lisp
(pathnamep (merge-pathnames ".config/myapp/settings.conf"
                            (user-homedir-pathname)))
;; => T

(pathnamep (merge-pathnames "Documents/data.csv"
                            (user-homedir-pathname)))
;; => T
```

### Checking for a File in the Home Directory

You can combine the result with `probe-file` to check whether a specific file exists under the home directory.

```lisp
(let ((init-file (merge-pathnames ".sbclrc" (user-homedir-pathname))))
  (stringp (if (probe-file init-file)
               (format nil "Init file found: ~A" init-file)
               (format nil "No init file at ~A" init-file))))
;; => T
```

### Important Notes

The function returns a pathname that always has a trailing directory component (it names a directory, not a file). If the home directory cannot be determined, the implementation may return a default or signal an error. The optional `host` parameter is relevant primarily for implementations supporting logical or remote pathnames.
