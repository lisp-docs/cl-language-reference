 



~&lt;...~:&gt; 



If ~:&gt; is used to terminate a ~&lt;...~&gt;, the directive is equivalent to a call to **pprint-logical-block**. The argument corresponding to the ~&lt;...~:&gt; directive is treated in the same way as the *list* argument to **pprint-logical-block**, thereby providing automatic support for non-*list* arguments and the detection of circularity, sharing, and depth abbreviation. The portion of the *control-string* nested within the ~&lt;...~:&gt; specifies the :prefix (or :per-line-prefix), :suffix, and body of the **pprint-logical-block**. 



The *control-string* portion enclosed by ~&lt;...~:&gt; can be divided into segments ~&lt;*prefix*~;*body*~;*suffix*~:&gt; by ~; directives. If the first section is terminated by ~@;, it speci fies a per-line prefix rather than a simple prefix. The *prefix* and *suffix* cannot contain format directives. An error is signaled if either the prefix or suffix fails to be a constant string or if the enclosed portion is divided into more than three segments. 



If the enclosed portion is divided into only two segments, the *suffix* defaults to the null string. If the enclosed portion consists of only a single segment, both the *prefix* and the *suffix* default to the null string. If the *colon* modifier is used (*i.e.*, ~:&lt;...~:&gt;), the *prefix* and *suffix* default to "(" and ")" (respectively) instead of the null string. 



The body segment can be any arbitrary <i>format string</i>. This <i>format string</i> is applied to the elements of the list corresponding to the ~&lt;...~:&gt; directive as a whole. Elements are extracted from this list using <b>pprint-pop</b>, thereby providing automatic support for malformed lists, and the detection of circularity, sharing, and length abbreviation. Within the body segment, ~<i><sup>∧</sup></i> acts like <b>pprint-exit-if-list-exhausted</b>. 



~&lt;...~:&gt; supports a feature not supported by **pprint-logical-block**. If ~:@&gt; is used to terminate the directive (*i.e.*, ~&lt;...~:@&gt;), then a fill-style conditional newline is automatically inserted after each group of blanks immediately contained in the body (except for blanks after a *hNewlinei* directive). This makes it easy to achieve the equivalent of paragraph filling. 



If the *at-sign* modifier is used with ~&lt;...~:&gt;, the entire remaining argument list is passed to the directive as its argument. All of the remaining arguments are always consumed by ~@&lt;...~:&gt;, even if they are not all used by the *format string* nested in the directive. Other than the difference in its argument, ~@&lt;...~:&gt; is exactly the same as ~&lt;...~:&gt; except that circularity detection is not applied if ~@&lt;...~:&gt; is encountered at top level in a *format string*. This ensures that circularity detection is applied only to data lists, not to *format argument lists*. 



" . #*n*#" is printed if circularity or sharing has to be indicated for its argument as a whole. 



 



 



To a considerable extent, the basic form of the directive ~&lt;...~&gt; is incompatible with the dynamic control of the arrangement of output by ~W, ~ , ~&lt;...~:&gt;, ~I, and ~:T. As a result, an error is signaled if any of these directives is nested within ~&lt;...~&gt;. Beyond this, an error is also signaled if the ~&lt;...~:;...~&gt; form of ~&lt;...~&gt; is used in the same *format string* with ~W, ~ , ~&lt;...~:&gt;, ~I, or ~:T. 



See also Section 22.3.6.2 (Tilde Less-Than-Sign: Justification). 



