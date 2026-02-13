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
(user-homedir-pathname)
; → #P"/home/username/"
```

### Inspecting the Result

The returned value is a pathname object, so standard pathname functions can be used to examine it.

```lisp
(let ((home (user-homedir-pathname)))
  (list :directory (pathname-directory home)
        :name      (pathname-name home)
        :type      (pathname-type home)))
; → (:DIRECTORY (:ABSOLUTE "home" "username") :NAME NIL :TYPE NIL)
```

### Building File Paths Relative to Home

A common use is constructing paths to configuration files or data directories within the user's home.

```lisp
(merge-pathnames ".config/myapp/settings.conf"
                 (user-homedir-pathname))
; → #P"/home/username/.config/myapp/settings.conf"

(merge-pathnames "Documents/data.csv"
                 (user-homedir-pathname))
; → #P"/home/username/Documents/data.csv"
```

### Checking for a File in the Home Directory

You can combine the result with `probe-file` to check whether a specific file exists under the home directory.

```lisp
(let ((init-file (merge-pathnames ".sbclrc" (user-homedir-pathname))))
  (if (probe-file init-file)
      (format nil "Init file found: ~A" init-file)
      (format nil "No init file at ~A" init-file)))
; → "Init file found: /home/username/.sbclrc"
```

### Important Notes

The function returns a pathname that always has a trailing directory component (it names a directory, not a file). If the home directory cannot be determined, the implementation may return a default or signal an error. The optional `host` parameter is relevant primarily for implementations supporting logical or remote pathnames.
