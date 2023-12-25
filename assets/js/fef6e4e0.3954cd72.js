"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[95713],{49194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>T,default:()=>I,frontMatter:()=>k,metadata:()=>P,toc:()=>F});var i=n(85893),r=n(11151);function s(e){return(0,i.jsx)(i.Fragment,{})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s()}function a(e){const t={em:"em",p:"p",...(0,r.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The facilities provided by the ",(0,i.jsx)(t.em,{children:"pretty printer"})," permit ",(0,i.jsx)(n,{styled:!0,term:"program",children:(0,i.jsx)("i",{children:"programs"})})," to redefine the way in which ",(0,i.jsx)(n,{styled:!0,term:"code",children:(0,i.jsx)("i",{children:"code"})})," is displayed, and allow the full power of ",(0,i.jsx)(t.em,{children:"pretty printing"})," to be applied to complex combinations of data structures."]}),"\n",(0,i.jsxs)(t.p,{children:["Whether any given style of output is in fact \u201cpretty\u201d is inherently a somewhat subjective issue. However, since the effect of the ",(0,i.jsx)(t.em,{children:"pretty printer"})," can be customized by ",(0,i.jsx)(t.em,{children:"conforming programs"}),", the necessary flexibility is provided for individual ",(0,i.jsx)(n,{styled:!0,term:"program",children:(0,i.jsx)("i",{children:"programs"})})," to achieve an arbitrary degree of aesthetic control."]}),"\n",(0,i.jsxs)(t.p,{children:["By providing direct access to the mechanisms within the pretty printer that make dynamic decisions about layout, the macros and functions ",(0,i.jsx)(n,{styled:!0,term:"pprint-logical-block",children:(0,i.jsx)("b",{children:"pprint-logical-block"})}),", ",(0,i.jsx)(n,{styled:!0,term:"pprint-newline",children:(0,i.jsx)("b",{children:"pprint-newline"})}),", and ",(0,i.jsx)(n,{styled:!0,term:"pprint-indent",children:(0,i.jsx)("b",{children:"pprint-indent"})})," make it possible to specify pretty printing layout rules as a part of any function that produces output. They also make it very easy for the detection of circularity and sharing, and abbreviation based on length and nesting depth to be supported by the function."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"pretty printer"})," is driven entirely by dispatch based on the ",(0,i.jsx)(n,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of ",(0,i.jsx)(n,{styled:!0,term:"print-pprint-dispatch",children:(0,i.jsx)("b",{children:"*print-pprint-dispatch*"})}),". The ",(0,i.jsx)(n,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(n,{styled:!0,term:"set-pprint-dispatch",children:(0,i.jsx)("b",{children:"set-pprint-dispatch"})})," makes it possible for ",(0,i.jsx)(t.em,{children:"conforming programs"})," to associate new pretty printing functions with a ",(0,i.jsx)(n,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function p(e){const t={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The actions of the ",(0,i.jsx)(t.em,{children:"pretty printer"})," when a piece of output is too large to fit in the space available can be precisely controlled. Three concepts underlie the way these operations work\u2014",(0,i.jsx)(t.em,{children:"logical blocks"}),", ",(0,i.jsx)(t.em,{children:"conditional newlines"}),", and ",(0,i.jsx)(n,{styled:!0,term:"section",children:(0,i.jsx)("i",{children:"sections"})}),". Before proceeding further, it is important to define these terms."]}),"\n",(0,i.jsx)(t.p,{children:"The first line of Figure 22\u20133 shows a schematic piece of output. Each of the characters in the output is represented by \u201c-\u201d. The positions of conditional newlines are indicated by digits. The beginnings and ends of logical blocks are indicated by \u201c<\u201d and \u201c>\u201d respectively."}),"\n",(0,i.jsxs)(t.p,{children:["The output as a whole is a logical block and the outermost section. This section is indicated by the 0\u2019s on the second line of Figure 1. Logical blocks nested within the output are specified by the macro ",(0,i.jsx)(n,{styled:!0,term:"pprint-logical-block",children:(0,i.jsx)("b",{children:"pprint-logical-block"})}),". Conditional newline positions are specified by calls to ",(0,i.jsx)(n,{styled:!0,term:"pprint-newline",children:(0,i.jsx)("b",{children:"pprint-newline"})}),". Each conditional newline defines two sections (one before it and one after it) and is associated with a third (the section immediately containing it)."]}),"\n",(0,i.jsx)(t.p,{children:"The section after a conditional newline consists of: all the output up to, but not including, (a) the next conditional newline immediately contained in the same logical block; or if (a) is not applicable, (b) the next newline that is at a lesser level of nesting in logical blocks; or if (b) is not applicable, (c) the end of the output."}),"\n",(0,i.jsx)(t.p,{children:"The section before a conditional newline consists of: all the output back to, but not including, (a) the previous conditional newline that is immediately contained in the same logical block; or if (a)"}),"\n",(0,i.jsx)(t.p,{children:"is not applicable, (b) the beginning of the immediately containing logical block. The last four lines in Figure 1 indicate the sections before and after the four conditional newlines."}),"\n",(0,i.jsx)(t.p,{children:"The section immediately containing a conditional newline is the shortest section that contains the conditional newline in question. In Figure 22\u20133, the first conditional newline is immediately contained in the section marked with 0\u2019s, the second and third conditional newlines are immediately contained in the section before the fourth conditional newline, and the fourth conditional newline is immediately contained in the section after the first conditional newline."}),"\n",(0,i.jsx)(t.p,{children:"<-1\u2013-<\u2013<\u20132\u2013-3->\u20134\u2013>->"}),"\n",(0,i.jsx)(t.p,{children:"000000000000000000000000000"}),"\n",(0,i.jsx)(t.p,{children:"11 111111111111111111111111"}),"\n",(0,i.jsx)(t.p,{children:"22 222"}),"\n",(0,i.jsx)(t.p,{children:"333 3333"}),"\n",(0,i.jsx)(t.p,{children:"44444444444444 44444"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Figure 22\u20133. Example of Logical Blocks, Conditional Newlines, and Sections"})}),"\n",(0,i.jsx)(t.p,{children:"Whenever possible, the pretty printer displays the entire contents of a section on a single line. However, if the section is too long to fit in the space available, line breaks are inserted at conditional newline positions within the section."})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function d(e){const t={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The primary interface to operations for dynamically determining the arrangement of output is provided through the functions and macros of the pretty printer. Figure 22\u20134 shows the defined names related to ",(0,i.jsx)(t.em,{children:"pretty printing"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["|",(0,i.jsxs)("p",{children:[(0,i.jsx)(t.strong,{children:"*print-lines* pprint-dispatch pprint-pop *print-miser-width* pprint-exit-if-list-exhausted pprint-tab *print-pprint-dispatch* pprint-fill pprint-tabular *print-right-margin* pprint-indent set-pprint-dispatch copy-pprint-dispatch pprint-linear write"})," "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(t.strong,{children:"format pprint-logical-block"})," "]}),(0,i.jsx)("p",{children:(0,i.jsx)(t.strong,{children:"formatter pprint-newline"})}),"|"]}),"\n",(0,i.jsx)(t.p,{children:"| :- |"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Figure 22\u20134. Defined names related to pretty printing."})}),"\n",(0,i.jsxs)(t.p,{children:["Figure 22\u20135 identifies a set of ",(0,i.jsx)(t.em,{children:"format directives"})," which serve as an alternate interface to the same pretty printing operations in a more textually compact form."]}),"\n",(0,i.jsxs)(t.p,{children:["|",(0,i.jsx)("p",{children:"~I ~W ~<...~:> "}),(0,i.jsxs)("p",{children:["~",":T"," ~/.../ ~"]}),"|"]}),"\n",(0,i.jsx)(t.p,{children:"| :- |"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Figure 22\u20135. Format directives related to Pretty Printing"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e){const t={em:"em",p:"p",...(0,r.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.em,{children:"format string"})," is essentially a program in a special-purpose language that performs printing, and that is interpreted by the ",(0,i.jsx)(n,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(n,{styled:!0,term:"format",children:(0,i.jsx)("b",{children:"format"})}),". The ",(0,i.jsx)(n,{styled:!0,term:"formatter",children:(0,i.jsx)("b",{children:"formatter"})})," ",(0,i.jsx)(n,{styled:!0,term:"macro",children:(0,i.jsx)("i",{children:"macro"})})," provides the efficiency of using a ",(0,i.jsx)(t.em,{children:"compiled function"})," to do that same printing but without losing the textual compactness of ",(0,i.jsx)(t.em,{children:"format strings"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.em,{children:"format control"})," is either a ",(0,i.jsx)(t.em,{children:"format string"})," or a ",(0,i.jsx)(n,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," that was returned by the the ",(0,i.jsx)(n,{styled:!0,term:"formatter",children:(0,i.jsx)("b",{children:"formatter"})})," ",(0,i.jsx)(n,{styled:!0,term:"macro",children:(0,i.jsx)("i",{children:"macro"})}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function m(e){const t={em:"em",p:"p",...(0,r.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.em,{children:"pprint dispatch table"})," is a mapping from keys to pairs of values. Each key is a ",(0,i.jsx)(t.em,{children:"type specifier"})," . The values associated with a key are a \u201cfunction\u201d (specifically, a ",(0,i.jsx)(t.em,{children:"function designator"})," or ",(0,i.jsx)(n,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),") and a \u201cnumerical priority\u201d (specifically, a ",(0,i.jsx)(t.em,{children:"real"}),"). Basic insertion and retrieval is done based on the keys with the equality of keys being tested by ",(0,i.jsx)(n,{styled:!0,term:"equal",children:(0,i.jsx)("b",{children:"equal"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When ",(0,i.jsx)(n,{styled:!0,term:"print-pretty",children:(0,i.jsx)("b",{children:"*print-pretty*"})})," is ",(0,i.jsx)(n,{styled:!0,term:"true",children:(0,i.jsx)("i",{children:"true"})}),", the ",(0,i.jsx)(t.em,{children:"current pprint dispatch table"})," (in ",(0,i.jsx)(n,{styled:!0,term:"print-pprint-dispatch",children:(0,i.jsx)("b",{children:"*print-pprint-dispatch*"})}),") controls how ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})})," are printed. The information in this table takes precedence over all other mechanisms for specifying how to print ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})}),". In particular, it has priority over user-defined ",(0,i.jsx)(n,{styled:!0,term:"print-object",children:(0,i.jsx)("b",{children:"print-object"})})," ",(0,i.jsx)(n,{styled:!0,term:"method",children:(0,i.jsx)("i",{children:"methods"})})," because the ",(0,i.jsx)(t.em,{children:"current pprint dispatch table"})," is consulted first."]}),"\n",(0,i.jsxs)(t.p,{children:["The function is chosen from the ",(0,i.jsx)(t.em,{children:"current pprint dispatch table"})," by finding the highest priority function that is associated with a ",(0,i.jsx)(t.em,{children:"type specifier"})," that matches the ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})}),"; if there is more than one such function, it is ",(0,i.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})})," which is used."]}),"\n",(0,i.jsxs)(t.p,{children:["However, if there is no information in the table about how to ",(0,i.jsx)(t.em,{children:"pretty print"})," a particular kind of ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})}),", a ",(0,i.jsx)(n,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," is invoked which uses ",(0,i.jsx)(n,{styled:!0,term:"print-object",children:(0,i.jsx)("b",{children:"print-object"})})," to print the ",(0,i.jsx)(n,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})}),". The value of ",(0,i.jsx)(n,{styled:!0,term:"print-pretty",children:(0,i.jsx)("b",{children:"*print-pretty*"})})," is still ",(0,i.jsx)(n,{styled:!0,term:"true",children:(0,i.jsx)("i",{children:"true"})})," when this function is ",(0,i.jsx)(t.em,{children:"called"}),", and individual methods for ",(0,i.jsx)(n,{styled:!0,term:"print-object",children:(0,i.jsx)("b",{children:"print-object"})})," might still elect to produce output in a special format conditional on the ",(0,i.jsx)(n,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of ",(0,i.jsx)(n,{styled:!0,term:"print-pretty",children:(0,i.jsx)("b",{children:"*print-pretty*"})}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}function b(e){const t={p:"p",...(0,r.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(t.p,{children:["A primary goal of pretty printing is to keep the output between a pair of margins. The column where the output begins is taken as the left margin. If the current column cannot be determined at the time output begins, the left margin is assumed to be zero. The right margin is controlled by ",(0,i.jsx)(n,{styled:!0,term:"print-right-margin",children:(0,i.jsx)("b",{children:"*print-right-margin*"})}),"."]})}function y(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}function g(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lisp",children:'\nAs an example of the interaction of logical blocks, conditional newlines, and indentation, consider the function simple-pprint-defun below. This function prints out lists whose *cars* are **defun** in the standard way assuming that the list has exactly length 4. \n(defun simple-pprint-defun (\\*standard-output\\* list) \n  (pprint-logical-block (\\*standard-output\\* list :prefix "(" :suffix ")") \n    (write (first list)) \n\n    \n    \n    (write-char #\\Space) \n    (pprint-newline :miser) \n    (pprint-indent :current 0) \n    (write (second list)) \n    (write-char #\\Space) \n    (pprint-newline :fill) \n    (write (third list)) \n    (pprint-indent :block 1) \n    (write-char #\\Space) \n    (pprint-newline :linear) \n    (write (fourth list)))) \nSuppose that one evaluates the following: \n(simple-pprint-defun \\*standard-output\\* \u2019(defun prod (x y) (\\* x y))) \nIf the line width available is greater than or equal to 26, then all of the output appears on one line. If the line width available is reduced to 25, a line break is inserted at the linear-style conditional newline before the *expression* (\\* x y), producing the output shown. The (pprint-indent :block 1) causes (\\* x y) to be printed at a relative indentation of 1 in the logical block. \n(DEFUN PROD (X Y) \n  (\\* X Y)) \nIf the line width available is 15, a line break is also inserted at the fill style conditional newline before the argument list. The call on (pprint-indent :current 0) causes the argument list to line up under the function name. \n(DEFUN PROD \n    (X Y) \n  (\\* X Y)) \nIf **\\*print-miser-width\\*** were greater than or equal to 14, the example output above would have been as follows, because all indentation changes are ignored in miser mode and line breaks are inserted at miser-style conditional newlines. \n(DEFUN \n    PROD \n    (X Y) \n  (\\* X Y)) \nAs an example of a per-line prefix, consider that evaluating the following produces the output shown with a line width of 20 and **\\*print-miser-width\\*** of **nil**. \n(pprint-logical-block (\\*standard-output\\* nil :per-line-prefix ";;; ") \n  (simple-pprint-defun \\*standard-output\\* \u2019(defun prod (x y) (\\* x y)))) \n;;; (DEFUN PROD \n\n\n\n;;; (X Y) \n;;; (\\* X Y)) \nAs a more complex (and realistic) example, consider the function pprint-let below. This specifies how to print a **let** *form* in the traditional style. It is more complex than the example above, because it has to deal with nested structure. Also, unlike the example above it contains complete code to readably print any possible list that begins with the *symbol* **let**. The outermost **pprint-logical-block** \n*form* handles the printing of the input list as a whole and specifies that parentheses should be printed in the output. The second **pprint-logical-block** *form* handles the list of binding pairs. Each pair in the list is itself printed by the innermost **pprint-logical-block**. (A **loop** *form* is used instead of merely decomposing the pair into two *objects* so that readable output will be produced no matter whether the list corresponding to the pair has one element, two elements, or (being malformed) has more than two elements.) A space and a fill-style conditional newline are placed after each pair except the last. The loop at the end of the topmost **pprint-logical-block** *form* prints out the forms in the body of the **let** *form* separated by spaces and linear-style conditional newlines. \n(defun pprint-let (\\*standard-output\\* list) \n  (pprint-logical-block (nil list :prefix "(" :suffix ")") \n    (write (pprint-pop)) \n    (pprint-exit-if-list-exhausted) \n    (write-char #\\Space) \n    (pprint-logical-block (nil (pprint-pop) :prefix "(" :suffix ")") \n      (pprint-exit-if-list-exhausted) \n      (loop (pprint-logical-block (nil (pprint-pop) :prefix "(" :suffix ")") \n\t      (pprint-exit-if-list-exhausted) \n\t      (loop (write (pprint-pop)) \n\t       (pprint-exit-if-list-exhausted) \n\t       (write-char #\\Space) \n\t       (pprint-newline :linear))) \n       (pprint-exit-if-list-exhausted) \n       (write-char #\\Space) \n       (pprint-newline :fill))) \n    (pprint-indent :block 1) \n    (loop (pprint-exit-if-list-exhausted) \n     (write-char #\\Space) \n     (pprint-newline :linear) \n     (write (pprint-pop))))) \nSuppose that one evaluates the following with **\\*print-level\\*** being 4, and **\\*print-circle\\*** being *true*. \n(pprint-let \\*standard-output\\* \n\t    \u2019#1=(let (x (\\*print-length\\* (f (g 3))) \n\t\t\t(z . 2) (k (car y))) \n\t\t  (setq x (sqrt z)) #1#)) \nIf the line length is greater than or equal to 77, the output produced appears on one line. However, \n\n\nif the line length is 76, line breaks are inserted at the linear-style conditional newlines separating the forms in the body and the output below is produced. Note that, the degenerate binding pair x is printed readably even though it fails to be a list; a depth abbreviation marker is printed in place of (g 3); the binding pair (z . 2) is printed readably even though it is not a proper list; and appropriate circularity markers are printed. \n#1=(LET (X (\\*PRINT-LENGTH\\* (F #)) (Z . 2) (K (CAR Y))) \n     (SETQ X (SQRT Z)) \n     #1#) \nIf the line length is reduced to 35, a line break is inserted at one of the fill-style conditional newlines separating the binding pairs. \n#1=(LET (X (\\*PRINT-PRETTY\\* (F #)) \n\t   (Z . 2) (K (CAR Y))) \n     (SETQ X (SQRT Z)) \n     #1#) \nSuppose that the line length is further reduced to 22 and **\\*print-length\\*** is set to 3. In this situation, line breaks are inserted after both the first and second binding pairs. In addition, the second binding pair is itself broken across two lines. Clause (b) of the description of fill-style conditional newlines (see the *function* **pprint-newline**) prevents the binding pair (z . 2) from being printed at the end of the third line. Note that the length abbreviation hides the circularity from view and therefore the printing of circularity markers disappears. \n(LET (X \n      (\\*PRINT-LENGTH\\* \n       (F #)) \n      (Z . 2) ...) \n  (SETQ X (SQRT Z)) \n  ...) \nThe next function prints a vector using \u201c#(...)\u201d notation. \n(defun pprint-vector (\\*standard-output\\* v) \n  (pprint-logical-block (nil nil :prefix "#(" :suffix ")") \n    (let ((end (length v)) (i 0)) \n      (when (plusp end) \n\t(loop (pprint-pop) \n\t (write (aref v i)) \n\t (if (= (incf i) end) (return nil)) \n\t (write-char #\\Space) \n\t (pprint-newline :fill)))))) \nEvaluating the following with a line length of 15 produces the output shown. \n(pprint-vector \\*standard-output\\* \u2019#(12 34 567 8 9012 34 567 89 0 1 23)) \n\n\n\n#(12 34 567 8 \n  9012 34 567 \n  89 0 1 23) \nAs examples of the convenience of specifying pretty printing with *format strings*, consider that the functions simple-pprint-defun and pprint-let used as examples above can be compactly defined as follows. (The function pprint-vector cannot be defined using **format** because the data structure it traverses is not a list.) \n(defun simple-pprint-defun (\\*standard-output\\* list) \n  (format T "~:<~W ~@ ~:I~W ~: ~W~1I ~ ~W~:>" list)) \n(defun pprint-let (\\*standard-output\\* list) \n  (format T "~:<~W~<i><sup>\u2227</sup></i>~:<~@\\&#123;~:<~@\\&#123;~W~<i><sup>\u2227</sup></i>~ ~\\&#125;~:>~<i><sup>\u2227</sup></i>~: ~\\&#125;~:>~1I~@\\&#123;~<i><sup>\u2227</sup></i>~ ~W~\\&#125;~:>" list)) \nIn the following example, the first *form* restores **\\*print-pprint-dispatch\\*** to the equivalent of its initial value. The next two forms then set up a special way to pretty print ratios. Note that the more specific *type specifier* has to be associated with a higher priority. \n(setq \\*print-pprint-dispatch\\* (copy-pprint-dispatch nil)) \n(set-pprint-dispatch \u2019ratio \n\t\t      #\u2019(lambda (s obj) \n\t\t\t  (format s "#.(/ ~W ~W)" \n\t\t\t\t  (numerator obj) (denominator obj)))) \n(set-pprint-dispatch \u2019(and ratio (satisfies minusp)) \n\t\t      #\u2019(lambda (s obj) \n\t\t\t  (format s "#.(- (/ ~W ~W))" \n\t\t\t\t  (- (numerator obj)) (denominator obj))) \n\t\t      \\5) \n(pprint \u2019(1/3 -2/3)) \n(#.(/ 1 3) #.(- (/ 2 3))) \nThe following two *forms* illustrate the definition of pretty printing functions for types of *code*. The first *form* illustrates how to specify the traditional method for printing quoted objects using *single-quote*. Note the care taken to ensure that data lists that happen to begin with **quote** will be printed readably. The second form specifies that lists beginning with the symbol my-let should print the same way that lists beginning with **let** print when the initial *pprint dispatch table* is in effect. \n(set-pprint-dispatch \u2019(cons (member quote)) () \n\t\t      #\u2019(lambda (s list) \n\t\t\t  (if (and (consp (cdr list)) (null (cddr list))) \n\t\t\t      (funcall (formatter "\u2019~W") s (cadr list)) \n\t\t\t      (pprint-fill s list)))) \n\n\n\n(set-pprint-dispatch \u2019(cons (member my-let)) \n\t\t      (pprint-dispatch \u2019(let) nil)) \nThe next example specifies a default method for printing lists that do not correspond to function calls. Note that the functions **pprint-linear**, **pprint-fill**, and **pprint-tabular** are all defined with optional *colon-p* and *at-sign-p* arguments so that they can be used as **pprint dispatch functions** as well as ~/.../ functions. \n(set-pprint-dispatch \u2019(cons (not (and symbol (satisfies fboundp)))) \n\t\t      #\u2019pprint-fill -5) \n;; Assume a line length of 9 \n(pprint \u2019(0 b c d e f g h i j k)) \n(0 b c d \n   e f g h \n   i j k) \nThis final example shows how to define a pretty printing function for a user defined data structure. (defstruct family mom kids) \n(set-pprint-dispatch \u2019family \n\t\t      #\u2019(lambda (s f) \n\t\t\t  (funcall (formatter "~@<#<~;~W and ~2I~ ~/pprint-fill/~;>~:>") \n\t\t\t\t   s (family-mom f) (family-kids f)))) \nThe pretty printing function for the structure family specifies how to adjust the layout of the output so that it can fit aesthetically into a variety of line widths. In addition, it obeys the printer control variables **\\*print-level\\***, **\\*print-length\\***, **\\*print-lines\\***, **\\*print-circle\\*** and **\\*print-escape\\***, and can tolerate several different kinds of malformity in the data structure. The output below shows what is printed out with a right margin of 25, **\\*print-pretty\\*** being *true*, **\\*print-escape\\*** being *false*, and a malformed kids list. \n(write (list \u2019principal-family \n\t      (make-family :mom "Lucy" \n\t\t\t   :kids \u2019("Mark" "Bob" . "Dan"))) \n       :right-margin 25 :pretty T :escape nil :miser-width nil) \n(PRINCIPAL-FAMILY \n #<Lucy and \n Mark Bob . Dan>) \nNote that a pretty printing function for a structure is different from the structure\u2019s **print-object** *method*. While **print-object** *methods* are permanently associated with a structure, pretty printing functions are stored in *pprint dispatch tables* and can be rapidly changed to reflect different printing needs. If there is no pretty printing function for a structure in the current *pprint dispatch table*, its **print-object** *method* is used instead. \n\n\n\n\n'})})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}function w(e){const t={em:"em",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(t.p,{children:["For a background reference to the abstract concepts detailed in this section, see ",(0,i.jsx)(t.em,{children:"XP: A Common Lisp Pretty Printing System"}),". The details of that paper are not binding on this document, but may be helpful in establishing a conceptual basis for understanding this material."]})}function v(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}const k={title:"22.2 The Lisp Pretty Printer"},T="22.2 The Lisp Pretty Printer",P={id:"chap-22/cc-c-the-lisp-pretty-printer",title:"22.2 The Lisp Pretty Printer",description:"22.2.1 Pretty Printer Concepts",source:"@site/docs/chap-22/cc-c-the-lisp-pretty-printer.md",sourceDirName:"chap-22",slug:"/chap-22/cc-c-the-lisp-pretty-printer",permalink:"/cl-language-reference/chap-22/cc-c-the-lisp-pretty-printer",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-c-the-lisp-pretty-printer.md",tags:[],version:"current",frontMatter:{title:"22.2 The Lisp Pretty Printer"},sidebar:"tutorialSidebar",previous:{title:"22.1 The Lisp Printer",permalink:"/cl-language-reference/chap-22/cc-b-the-lisp-printer"},next:{title:"22.3 Formatted Output",permalink:"/cl-language-reference/chap-22/cc-d-formatted-output"}},E={},F=[{value:"22.2.1 Pretty Printer Concepts",id:"2221-pretty-printer-concepts",level:2},{value:"22.2.1.1 Dynamic Control of the Arrangement of Output",id:"22211-dynamic-control-of-the-arrangement-of-output",level:3},{value:"22.2.1.2 Format Directive Interface",id:"22212-format-directive-interface",level:3},{value:"22.2.1.3 Compiling Format Strings",id:"22213-compiling-format-strings",level:3},{value:"22.2.1.4 Pretty Print Dispatch Tables",id:"22214-pretty-print-dispatch-tables",level:3},{value:"22.2.1.5 Pretty Printer Margins",id:"22215-pretty-printer-margins",level:3},{value:"22.2.2 Examples of using the Pretty Printer",id:"2222-examples-of-using-the-pretty-printer",level:2},{value:"22.2.3 Notes about the Pretty Printer",id:"2223-notes-about-the-pretty-printer",level:2}];function C(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"222-the-lisp-pretty-printer",children:"22.2 The Lisp Pretty Printer"}),"\n","\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(t.h2,{id:"2221-pretty-printer-concepts",children:"22.2.1 Pretty Printer Concepts"}),"\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(t.h3,{id:"22211-dynamic-control-of-the-arrangement-of-output",children:"22.2.1.1 Dynamic Control of the Arrangement of Output"}),"\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(t.h3,{id:"22212-format-directive-interface",children:"22.2.1.2 Format Directive Interface"}),"\n","\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(t.h3,{id:"22213-compiling-format-strings",children:"22.2.1.3 Compiling Format Strings"}),"\n","\n",(0,i.jsx)(f,{}),"\n",(0,i.jsx)(t.h3,{id:"22214-pretty-print-dispatch-tables",children:"22.2.1.4 Pretty Print Dispatch Tables"}),"\n","\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(t.h3,{id:"22215-pretty-printer-margins",children:"22.2.1.5 Pretty Printer Margins"}),"\n","\n",(0,i.jsx)(y,{}),"\n",(0,i.jsx)(t.h2,{id:"2222-examples-of-using-the-pretty-printer",children:"22.2.2 Examples of using the Pretty Printer"}),"\n","\n",(0,i.jsx)(j,{}),"\n",(0,i.jsx)(t.h2,{id:"2223-notes-about-the-pretty-printer",children:"22.2.3 Notes about the Pretty Printer"}),"\n","\n","\n",(0,i.jsx)(v,{})]})}function I(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);