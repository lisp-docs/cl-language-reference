 

~&#60;...~:&#62; 

If ~:&#62; is used to terminate a ~&#60;...~&#62;, the directive is equivalent to a call to **pprint-logical-block**. The argument corresponding to the ~&#60;...~:&#62; directive is treated in the same way as the *list* argument to **pprint-logical-block**, thereby providing automatic support for non-*list* arguments and the detection of circularity, sharing, and depth abbreviation. The portion of the *control-string* nested within the ~&#60;...~:&#62; specifies the :prefix (or :per-line-prefix), :suffix, and body of the **pprint-logical-block**. 

The *control-string* portion enclosed by ~&#60;...~:&#62; can be divided into segments ~&#60;*prefix*~;*body*~;*suffix*~:&#62; by ~; directives. If the first section is terminated by ~@;, it speci fies a per-line prefix rather than a simple prefix. The *prefix* and *suffix* cannot contain format directives. An error is signaled if either the prefix or suffix fails to be a constant string or if the enclosed portion is divided into more than three segments. 

If the enclosed portion is divided into only two segments, the *suffix* defaults to the null string. If the enclosed portion consists of only a single segment, both the *prefix* and the *suffix* default to the null string. If the *colon* modifier is used (*i.e.*, ~:&#60;...~:&#62;), the *prefix* and *suffix* default to "(" and ")" (respectively) instead of the null string. 

The body segment can be any arbitrary &#60;i&#62;format string&#60;/i&#62;. This &#60;i&#62;format string&#60;/i&#62; is applied to the elements of the list corresponding to the ~&#60;...~:&#62; directive as a whole. Elements are extracted from this list using &#60;b&#62;pprint-pop&#60;/b&#62;, thereby providing automatic support for malformed lists, and the detection of circularity, sharing, and length abbreviation. Within the body segment, ~&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; acts like &#60;b&#62;pprint-exit-if-list-exhausted&#60;/b&#62;. 

~&#60;...~:&#62; supports a feature not supported by **pprint-logical-block**. If ~:@&#62; is used to terminate the directive (*i.e.*, ~&#60;...~:@&#62;), then a fill-style conditional newline is automatically inserted after each group of blanks immediately contained in the body (except for blanks after a *hNewlinei* directive). This makes it easy to achieve the equivalent of paragraph filling. 

If the *at-sign* modifier is used with ~&#60;...~:&#62;, the entire remaining argument list is passed to the directive as its argument. All of the remaining arguments are always consumed by ~@&#60;...~:&#62;, even if they are not all used by the *format string* nested in the directive. Other than the difference in its argument, ~@&#60;...~:&#62; is exactly the same as ~&#60;...~:&#62; except that circularity detection is not applied if ~@&#60;...~:&#62; is encountered at top level in a *format string*. This ensures that circularity detection is applied only to data lists, not to *format argument lists*. 

" . #*n*#" is printed if circularity or sharing has to be indicated for its argument as a whole. 

 

 

To a considerable extent, the basic form of the directive ~&#60;...~&#62; is incompatible with the dynamic control of the arrangement of output by ~W, ~ , ~&#60;...~:&#62;, ~I, and ~:T. As a result, an error is signaled if any of these directives is nested within ~&#60;...~&#62;. Beyond this, an error is also signaled if the ~&#60;...~:;...~&#62; form of ~&#60;...~&#62; is used in the same *format string* with ~W, ~ , ~&#60;...~:&#62;, ~I, or ~:T. 

See also Section 22.3.6.2 (Tilde Less-Than-Sign: Justification). 

