 



&#126;&lt;...&#126;:&gt; 



If &#126;:&gt; is used to terminate a &#126;&lt;...&#126;&gt;, the directive is equivalent to a call to <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. The argument corresponding to the &#126;&lt;...&#126;:&gt; directive is treated in the same way as the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> argument to <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>, thereby providing automatic support for non-<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> arguments and the detection of circularity, sharing, and depth abbreviation. The portion of the *control-string* nested within the &#126;&lt;...&#126;:&gt; specifies the :prefix (or :per-line-prefix), :suffix, and body of the <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. 



The *control-string* portion enclosed by &#126;&lt;...&#126;:&gt; can be divided into segments &#126;&lt;*prefix*&#126;;*body*&#126;;*suffix*&#126;:&gt; by &#126;; directives. If the first section is terminated by &#126;@;, it speci fies a per-line prefix rather than a simple prefix. The *prefix* and *suffix* cannot contain format directives. An error is signaled if either the prefix or suffix fails to be a constant string or if the enclosed portion is divided into more than three segments. 



If the enclosed portion is divided into only two segments, the *suffix* defaults to the null string. If the enclosed portion consists of only a single segment, both the *prefix* and the *suffix* default to the null string. If the <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> modifier is used (*i.e.*, &#126;:&lt;...&#126;:&gt;), the *prefix* and *suffix* default to "(" and ")" (respectively) instead of the null string. 



The body segment can be any arbitrary <i>format string</i>. This <i>format string</i> is applied to the elements of the list corresponding to the &#126;&lt;...&#126;:&gt; directive as a whole. Elements are extracted from this list using <b>pprint-pop</b>, thereby providing automatic support for malformed lists, and the detection of circularity, sharing, and length abbreviation. Within the body segment, &#126;<i><sup>∧</sup></i> acts like <b>pprint-exit-if-list-exhausted</b>. 



&#126;&lt;...&#126;:&gt; supports a feature not supported by <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. If &#126;:@&gt; is used to terminate the directive (*i.e.*, &#126;&lt;...&#126;:@&gt;), then a fill-style conditional newline is automatically inserted after each group of blanks immediately contained in the body (except for blanks after a *hNewlinei* directive). This makes it easy to achieve the equivalent of paragraph filling. 



If the <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> modifier is used with &#126;&lt;...&#126;:&gt;, the entire remaining argument list is passed to the directive as its argument. All of the remaining arguments are always consumed by &#126;@&lt;...&#126;:&gt;, even if they are not all used by the *format string* nested in the directive. Other than the difference in its argument, &#126;@&lt;...&#126;:&gt; is exactly the same as &#126;&lt;...&#126;:&gt; except that circularity detection is not applied if &#126;@&lt;...&#126;:&gt; is encountered at top level in a *format string*. This ensures that circularity detection is applied only to data lists, not to *format argument lists*. 



" . #*n*#" is printed if circularity or sharing has to be indicated for its argument as a whole. 



 



 



To a considerable extent, the basic form of the directive &#126;&lt;...&#126;&gt; is incompatible with the dynamic control of the arrangement of output by &#126;W, &#126; , &#126;&lt;...&#126;:&gt;, &#126;I, and &#126;:T. As a result, an error is signaled if any of these directives is nested within &#126;&lt;...&#126;&gt;. Beyond this, an error is also signaled if the &#126;&lt;...&#126;:;...&#126;&gt; form of &#126;&lt;...&#126;&gt; is used in the same *format string* with &#126;W, &#126; , &#126;&lt;...&#126;:&gt;, &#126;I, or &#126;:T. 



See also Section 22.3.6.2 (Tilde Less-Than-Sign: Justification). 



