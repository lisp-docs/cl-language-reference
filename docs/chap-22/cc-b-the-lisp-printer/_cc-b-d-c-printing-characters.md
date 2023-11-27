 

When *printer escaping* is disabled, a *character* prints as itself; it is sent directly to the output *stream*. When *printer escaping* is enabled, then #\ syntax is used. 

When the printer types out the name of a *character* , it uses the same table as the #\ *reader macro* would use; therefore any *character* name that is typed out is acceptable as input (in that *implementation*). If a *non-graphic character* has a *standardized name*&#60;sub&#62;5&#60;/sub&#62;, that *name* is preferred over non-standard *names* for printing in #\ notation. For the *graphic standard characters*, the *character* itself is always used for printing in #\ notation—even if the *character* also has a *name*&#60;sub&#62;5&#60;/sub&#62;. 

For details about the #\ *reader macro*, see Section 2.4.8.1 (Sharpsign Backslash). 

