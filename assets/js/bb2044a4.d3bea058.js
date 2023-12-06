"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[6443],{5114:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=r(85893),i=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"with-standard-io-syntax"})," ",(0,s.jsx)(n.em,{children:"Macro"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"with-standard-io-syntax"})," ",(0,s.jsx)(n.em,{children:"{form}"}),"* ",(0,s.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,s.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014the ",(0,s.jsx)(n.em,{children:"values"})," returned by the ",(0,s.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Within the dynamic extent of the body of ",(0,s.jsx)(n.em,{children:"forms"}),", all reader/printer control variables, including any ",(0,s.jsx)(n.em,{children:"implementation-defined"})," ones not specified by this standard, are bound to values that produce standard read/print behavior. The values for the variables specified by this standard are listed in Figure 23\u20131."]}),"\n",(0,s.jsxs)(n.p,{children:["|",(0,s.jsx)(n.strong,{children:"Variable Value"}),"|"]}),"\n",(0,s.jsx)(n.p,{children:"| :- |"}),"\n",(0,s.jsxs)(n.p,{children:["|",(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*package*"})," The CL-USER ",(0,s.jsx)(n.em,{children:"package"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-array* t"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-base*"})," 10 "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-case*"})," ",":upcase"," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-circle* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-escape* t"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-gensym* t"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-length* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-level* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-lines* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-miser-width* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-pprint-dispatch*"})," The ",(0,s.jsx)(n.em,{children:"standard pprint dispatch table"})," ",(0,s.jsx)(n.strong,{children:"*print-pretty* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-radix* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-readably* t"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*print-right-margin* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*read-base*"})," 10 "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*read-default-float-format* single-float"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*read-eval* t"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*read-suppress* nil"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"*readtable*"})," The ",(0,s.jsx)(n.em,{children:"standard readtable"})]}),"|"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Figure 23\u20131. Values of standard control variables"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(with-open-file (file pathname :direction :output) \n\n\n\n(with-standard-io-syntax \n\n\n\n(print data file))) \n\n\n\n;;; ... Later, in another Lisp: \n\n\n\n(with-open-file (file pathname :direction :input) \n\n\n\n(with-standard-io-syntax \n\n\n\n(setq data (read file)))) \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n*\u2217***read-base***\u2217 Variable* \n\n\n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"radix"})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsx)(n.p,{children:"10."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Controls the interpretation of tokens by ",(0,s.jsx)(n.strong,{children:"read"})," as being ",(0,s.jsx)(n.em,{children:"integers"})," or ",(0,s.jsx)(n.em,{children:"ratios"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*read-base*"}),", called the ",(0,s.jsx)(n.em,{children:"current input base"}),", is the radix in which ",(0,s.jsx)(n.em,{children:"integers"})," and ",(0,s.jsx)(n.em,{children:"ratios"})," are to be read by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," . The parsing of other numeric ",(0,s.jsx)(n.em,{children:"types"})," (",(0,s.jsx)(n.em,{children:"e.g."}),", ",(0,s.jsx)(n.em,{children:"floats"}),") is not affected by this option."]}),"\n",(0,s.jsxs)(n.p,{children:["The effect of ",(0,s.jsx)(n.strong,{children:"*read-base*"})," on the reading of any particular ",(0,s.jsx)(n.em,{children:"rational"})," number can be locally overridden by explicit use of the #O, #X, #B, or #",(0,s.jsx)(n.em,{children:"n"}),"R syntax or by a trailing decimal point."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(dotimes (i 6) \n\n\n\n(let ((\\*read-base\\* (+ 10. i))) \n\n\n\n(let ((object (read-from-string "(\\\\DAD DAD |BEE| BEE 123. 123)"))) \n\n\n\n(print (list \\*read-base\\* object))))) \n\n\n\n\u25b7 (10 (DAD DAD BEE BEE 123 123)) \n\n\n\n\u25b7 (11 (DAD DAD BEE BEE 123 146)) \n\n\n\n\u25b7 (12 (DAD DAD BEE BEE 123 171)) \n\n\n\n\u25b7 (13 (DAD DAD BEE BEE 123 198)) \n\n\n\n\u25b7 (14 (DAD 2701 BEE BEE 123 227)) \n\n\n\n\u25b7 (15 (DAD 3088 BEE 2699 123 258)) \n\n\n\n*\u2192* NIL \n\n\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsx)(n.p,{children:"Altering the input radix can be useful when reading data files in special formats."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"read-default-float-format"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["one of the ",(0,s.jsx)(n.em,{children:"atomic type specifiers"})," ",(0,s.jsx)(n.strong,{children:"short-float"}),", ",(0,s.jsx)(n.strong,{children:"single-float"}),", ",(0,s.jsx)(n.strong,{children:"double-float"}),", or ",(0,s.jsx)(n.strong,{children:"long-float"}),", or else some other ",(0,s.jsx)(n.em,{children:"type specifier"})," defined by the ",(0,s.jsx)(n.em,{children:"implementation"})," to be acceptable."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"symbol"})," ",(0,s.jsx)(n.strong,{children:"single-float"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Controls the floating-point format that is to be used when reading a floating-point number that has no ",(0,s.jsx)(n.em,{children:"exponent marker"})," or that has e or E for an ",(0,s.jsx)(n.em,{children:"exponent marker"})," . Other ",(0,s.jsx)(n.em,{children:"exponent markers"})," explicitly prescribe the floating-point format to be used."]}),"\n",(0,s.jsxs)(n.p,{children:["The printer uses ",(0,s.jsx)(n.strong,{children:"*read-default-float-format*"})," to guide the choice of ",(0,s.jsx)(n.em,{children:"exponent markers"})," when printing floating-point numbers."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(let ((\\*read-default-float-format\\* \u2019double-float)) \n\n\n\n(read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)")) \n\n\n\n*\u2192* (1.0 1.0 1.0 1.0 1.0 1.0) ;Implementation has float format F. \n\n\n\n*\u2192* (1.0 1.0 1.0s0 1.0 1.0 1.0) ;Implementation has float formats S and F. *\u2192* (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0d0) ;Implementation has float formats F and D. *\u2192* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D. *\u2192* (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L. *\u2192* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L. \n\n\n\n*\u2217***read-eval***\u2217 Variable* \n\n\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["If it is ",(0,s.jsx)(n.em,{children:"true"}),", the #. ",(0,s.jsx)(n.em,{children:"reader macro"})," has its normal effect. Otherwise, that ",(0,s.jsx)(n.em,{children:"reader macro"})," signals an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"reader-error"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"*print-readably*"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.strong,{children:"*read-eval*"})," is ",(0,s.jsx)(n.em,{children:"false"})," and ",(0,s.jsx)(n.strong,{children:"*print-readably*"})," is ",(0,s.jsx)(n.em,{children:"true"}),", any ",(0,s.jsx)(n.em,{children:"method"})," for ",(0,s.jsx)(n.strong,{children:"print-object"})," that would output a reference to the #. ",(0,s.jsx)(n.em,{children:"reader macro"})," either outputs something different or signals an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"print-not-readable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"read-suppress"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the ",(0,s.jsx)(n.em,{children:"reader macros"})," which implement these notations to be able to skip over the printed representation of an ",(0,s.jsx)(n.em,{children:"expression"})," despite the possibility that the syntax of the skipped ",(0,s.jsx)(n.em,{children:"expression"})," may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax."]}),"\n",(0,s.jsxs)(n.p,{children:["If it is ",(0,s.jsx)(n.em,{children:"false"}),", the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," operates normally."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*read-suppress*"})," is ",(0,s.jsx)(n.em,{children:"true"}),", ",(0,s.jsx)(n.strong,{children:"read"}),", ",(0,s.jsx)(n.strong,{children:"read-preserving-whitespace"}),", ",(0,s.jsx)(n.strong,{children:"read-delimited-list"}),", and ",(0,s.jsx)(n.strong,{children:"read-from-string"})," all return a ",(0,s.jsx)(n.em,{children:"primary value"})," of ",(0,s.jsx)(n.strong,{children:"nil"})," when they complete successfully; however, they continue to parse the representation of an ",(0,s.jsx)(n.em,{children:"object"})," in the normal way, in order to skip over the ",(0,s.jsx)(n.em,{children:"object"}),", and continue to indicate ",(0,s.jsx)(n.em,{children:"end of file"})," in the normal way. Except as noted below, any ",(0,s.jsx)(n.em,{children:"standardized reader macro"}),(0,s.jsx)("sub",{children:"2"})," that is defined to ",(0,s.jsx)(n.em,{children:"read"})," ",(0,s.jsx)("sub",{children:"2"})," a following ",(0,s.jsx)(n.em,{children:"object"})," or ",(0,s.jsx)(n.em,{children:"token"})," will do so, but not signal an error if the ",(0,s.jsx)(n.em,{children:"object"})," read is not of an appropriate type or syntax. The ",(0,s.jsx)(n.em,{children:"standard syntax"})," and its associated ",(0,s.jsx)(n.em,{children:"reader macros"})," will not construct any new ",(0,s.jsx)(n.em,{children:"objects"})," (",(0,s.jsx)(n.em,{children:"e.g."}),", when reading the representation of a ",(0,s.jsx)(n.em,{children:"symbol"}),", no ",(0,s.jsx)(n.em,{children:"symbol"})," will be constructed or interned)."]}),"\n",(0,s.jsx)(n.p,{children:"Extended tokens"}),"\n",(0,s.jsxs)(n.p,{children:["All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid ",(0,s.jsx)(n.em,{children:"potential numbers"}),", invalid patterns of ",(0,s.jsx)(n.em,{children:"package markers"}),", and invalid uses of the ",(0,s.jsx)(n.em,{children:"dot"})," character are suppressed."]}),"\n",(0,s.jsxs)(n.p,{children:["Dispatching macro characters (including ",(0,s.jsx)(n.em,{children:"sharpsign"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Dispatching macro characters"})," continue to parse an infix numerical argument, and invoke the dispatch function. The ",(0,s.jsx)(n.em,{children:"standardized sharpsign reader macros"})," do not enforce any constraints on either the presence of or the value of the numerical argument."]}),"\n",(0,s.jsx)(n.p,{children:"#="}),"\n",(0,s.jsxs)(n.p,{children:["The #= notation is totally ignored. It does not read a following ",(0,s.jsx)(n.em,{children:"object"}),". It produces no ",(0,s.jsx)(n.em,{children:"object"}),", but is treated as ",(0,s.jsx)(n.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"##"}),"\n",(0,s.jsxs)(n.p,{children:["The ## notation always produces ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["No matter what the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*read-suppress*"}),", parentheses still continue to delimit and construct ",(0,s.jsx)(n.em,{children:"lists"}),"; the #( notation continues to delimit ",(0,s.jsx)(n.em,{children:"vectors"}),"; and comments, ",(0,s.jsx)(n.em,{children:"strings"}),", and the ",(0,s.jsx)(n.em,{children:"single-quote"})," and ",(0,s.jsx)(n.em,{children:"backquote"})," notations continue to be interpreted properly. Such situations as \u2019), #<, #), and #",(0,s.jsx)(n.em,{children:"hSpacei"})," continue to signal errors."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(let ((\\*read-suppress\\* t)) \n\n\n\n(mapcar #\u2019read-from-string \n\n\n\n\u2019("#(foo bar baz)" "#P(:type :lisp)" "#c1.2" \n\n\n\n"#.(PRINT \u2019FOO)" "#3AHELLO" "#S(INTEGER)" \n\n\n\n"#\\*ABC" "#\\GARBAGE" "#RALPHA" "#3R444"))) \n\n\n\n*\u2192* (NIL NIL NIL NIL NIL NIL NIL NIL NIL NIL) \n\n\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read"}),", Chapter 2 (Syntax)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Programmers"})," and ",(0,s.jsx)(n.em,{children:"implementations"})," that define additional ",(0,s.jsx)(n.em,{children:"macro characters"})," are strongly encouraged to make them respect ",(0,s.jsx)(n.strong,{children:"*read-suppress*"})," just as ",(0,s.jsx)(n.em,{children:"standardized macro characters"})," do. That is, when the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*read-suppress*"})," is ",(0,s.jsx)(n.em,{children:"true"}),", they should ignore type errors when reading a following ",(0,s.jsx)(n.em,{children:"object"})," and the ",(0,s.jsx)(n.em,{children:"functions"})," that implement ",(0,s.jsx)(n.em,{children:"dispatching macro characters"})," should tolerate ",(0,s.jsx)(n.strong,{children:"nil"})," as their infix ",(0,s.jsx)(n.em,{children:"parameter"})," value even if a numeric value would ordinarily be required."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"readtable"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"readtable"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"readtable"})," that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*readtable*"})," is called the ",(0,s.jsx)(n.em,{children:"current readtable"}),". It controls the parsing behavior of the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," , and can also influence the ",(0,s.jsx)(n.em,{children:"Lisp printer"})," (",(0,s.jsx)(n.em,{children:"e.g."}),", see the ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"readtable-case"}),")."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(readtablep \\*readtable\\*) *\u2192 true* \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n(setq zvar 123) *\u2192* 123 \n\n\n\n(set-syntax-from-char #\\z #\\\u2019 (setq table2 (copy-readtable))) *\u2192* T \n\n\n\nzvar *\u2192* 123 \n\n\n\n(setq \\*readtable\\* table2) *\u2192* #&lt;READTABLE&gt; \n\n\n\nzvar *\u2192* VAR \n\n\n\n(setq \\*readtable\\* (copy-readtable nil)) *\u2192* #&lt;READTABLE&gt; \n\n\n\nzvar *\u2192* 123 \n\n\n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"compile-file"}),", ",(0,s.jsx)(n.strong,{children:"load"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"compile-file"}),", ",(0,s.jsx)(n.strong,{children:"load"}),", ",(0,s.jsx)(n.strong,{children:"readtable"}),", Section 2.1.1.1 (The Current Readtable)"]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const d={},l="with-standard-io-syntax",c={id:"chap-23/cd-c-dictionary/withstandardiosyntax",title:"with-standard-io-syntax",description:"Expanded Reference: with-standard-io-syntax",source:"@site/docs/chap-23/cd-c-dictionary/withstandardiosyntax.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/withstandardiosyntax",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/withstandardiosyntax",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/withstandardiosyntax.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set-syntax-from-char",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/setsyntaxfromchar"},next:{title:"24. System Construction",permalink:"/cl-language-reference/docs/category/24-system-construction"}},o={},h=[{value:"Expanded Reference: with-standard-io-syntax",id:"expanded-reference-with-standard-io-syntax",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"with-standard-io-syntax",children:"with-standard-io-syntax"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-with-standard-io-syntax",children:"Expanded Reference: with-standard-io-syntax"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(with-standard-io-syntax )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>a});var s=r(67294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);