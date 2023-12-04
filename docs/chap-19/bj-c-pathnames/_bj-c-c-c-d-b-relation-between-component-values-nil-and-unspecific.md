 



If a *pathname* is converted to a *namestring*, the *symbols* **nil** and :unspecific cause the field to be treated as if it were empty. That is, both **nil** and :unspecific cause the component not to appear in the *namestring*. 



However, when merging a *pathname* with a set of defaults, only a **nil** value for a component will be replaced with the default for that component, while a value of :unspecific will be left alone as if the field were “filled”; see the *function* **merge-pathnames** and Section 19.2.3 (Merging Pathnames). 



