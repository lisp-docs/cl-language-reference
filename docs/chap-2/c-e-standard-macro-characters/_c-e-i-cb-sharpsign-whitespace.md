**2.4.8.21 Sharpsign Whitespace** 

\# followed immediately by *whitespace*\<sub\>1\</sub\> is not valid reader syntax. The *Lisp reader* will signal an error of *type* **reader-error** if it encounters the reader macro notation #*hNewlinei* or #*hSpacei*.  



