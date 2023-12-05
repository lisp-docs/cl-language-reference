 



~*mincol*,*colinc*,*minpad*,*padchar*&lt;*str*~&gt; 



This justifies the text produced by processing *str* within a field at least *mincol* columns wide. *str* may be divided up into segments with ~;, in which case the spacing is evenly divided between the text segments. 



With no modifiers, the leftmost text segment is left justified in the field, and the rightmost text segment is right justified. If there is only one text element, as a special case, it is right justified. The : modifier causes spacing to be introduced before the first text segment; the @ modifier causes spacing to be added after the last. The *minpad* parameter (default 0) is the minimum number of padding characters to be output between each segment. The padding character is supplied by *padchar* , which defaults to the space character. If the total width needed to satisfy these constraints is greater than *mincol*, then the width used is *mincol*+*k*\**colinc* for the smallest possible non-negative integer value *k*. *colinc* defaults to 1, and *mincol* defaults to 0. 



Note that *str* may include **format** directives. All the clauses in *str* are processed in order; it is the resulting pieces of text that are justified. 







 



 



The ~<i><sup>∧</sup></i> directive may be used to terminate processing of the clauses prematurely, in which case only the completely processed clauses are justified. 



If the first clause of a ~&lt; is terminated with ~:; instead of ~;, then it is used in a special way. All of the clauses are processed (subject to ~<i><sup>∧</sup></i>, of course), but the first one is not used in performing the spacing and padding. When the padded result has been determined, then if it will fit on the current line of output, it is output, and the text for the first clause is discarded. If, however, the 



padded text will not fit on the current line, then the text segment for the first clause is output before the padded text. The first clause ought to contain a newline (such as a ~% directive). The first clause is always processed, and so any arguments it refers to will be used; the decision is whether to use the resulting segment of text, not whether to process the first clause. If the ~:; has a prefix parameter *n*, then the padded text must fit on the current line with *n* character positions to spare to avoid outputting the first clause’s text. For example, the control string 



"~%;; ~\{~&lt;~%;; ~1:; ~S~&gt;~<i><sup>∧</sup></i>,~\}.~%" 



can be used to print a list of items separated by commas without breaking items over line boundaries, beginning each line with ;; . The prefix parameter 1 in ~1:; accounts for the width of the comma that will follow the justified item if it is not the last element in the list, or the period if it is. If ~:; has a second prefix parameter, then it is used as the width of the line, thus overriding the natural line width of the output stream. To make the preceding example use a line width of 50, one would write 



"~%;; ~\{~&lt;~%;; ~1,50:; ~S~&gt;~<i><sup>∧</sup></i>,~\} .~%" 



If the second argument is not supplied, then **format** uses the line width of the *destination* output stream. If this cannot be determined (for example, when producing a *string* result), then **format** uses 72 as the line length. 



See also Section 22.3.5.2 (Tilde Less-Than-Sign: Logical Block). 



