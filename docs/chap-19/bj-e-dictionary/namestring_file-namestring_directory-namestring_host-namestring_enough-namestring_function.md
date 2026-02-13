---
title: "namestring, file-namestring, directory-namestring, host-namestring, enough-namestring"
---

# namestring, file-namestring, directory-namestring, host-namestring, enough-namestring

import NamestringFunction from './_namestring_file-namestring_directory-namestring_host-namestring_enough-namestring_function.md';

<NamestringFunction />

## Expanded Reference: namestring, file-namestring, directory-namestring, host-namestring, enough-namestring

### Getting the full namestring

`namestring` converts a pathname designator into its full string representation.

```lisp
(namestring #P"/home/user/data.csv")
→ "/home/user/data.csv"

(namestring (make-pathname :directory '(:absolute "tmp")
                           :name "log"
                           :type "txt"))
→ "/tmp/log.txt"
```

### Extracting just the file portion

`file-namestring` returns only the name, type, and version portion of a pathname, without the directory.

```lisp
(file-namestring #P"/home/user/report.pdf")
→ "report.pdf"

(file-namestring (make-pathname :directory '(:absolute "var" "log")
                                :name "syslog"
                                :type "txt"))
→ "syslog.txt"
```

### Extracting just the directory portion

`directory-namestring` returns only the directory portion of a pathname.

```lisp
(directory-namestring #P"/home/user/report.pdf")
→ "/home/user/"
```

### Using enough-namestring for relative references

`enough-namestring` produces the shortest namestring sufficient to identify a file relative to given defaults.

```lisp
(enough-namestring #P"/home/user/projects/app/main.lisp"
                   #P"/home/user/projects/")
→ "app/main.lisp"  ; implementation-dependent
```

### Namestrings are always strings

All of these functions return strings (or nil), never pathname objects.

```lisp
(stringp (namestring #P"/tmp/test.lisp"))
→ T

(stringp (file-namestring #P"/tmp/test.lisp"))
→ T
```
