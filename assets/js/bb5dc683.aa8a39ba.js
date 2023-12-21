"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[41817],{75734:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=i(85893),r=i(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"asin, acos, atan"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"asin"})," ",(0,s.jsx)(n.em,{children:"number \u2192 radians"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"acos"})," ",(0,s.jsx)(n.em,{children:"number \u2192 radians"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"atan"})," ",(0,s.jsx)(n.em,{children:"number1"})," &optional ",(0,s.jsx)(n.em,{children:"number2 \u2192 radians"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"number"}),"\u2014a ",(0,s.jsx)(n.em,{children:"number"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"number1"}),"\u2014a ",(0,s.jsx)(n.em,{children:"number"})," if ",(0,s.jsx)(n.em,{children:"number2"})," is not supplied, or a ",(0,s.jsx)(n.em,{children:"real"})," if ",(0,s.jsx)(n.em,{children:"number2"})," is supplied."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"number2"}),"\u2014a ",(0,s.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"radians"}),"\u2014a ",(0,s.jsx)(n.em,{children:"number"})," (of radians)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"asin"}),", ",(0,s.jsx)(n.strong,{children:"acos"}),", and ",(0,s.jsx)(n.strong,{children:"atan"})," compute the arc sine, arc cosine, and arc tangent respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["The arc sine, arc cosine, and arc tangent (with only ",(0,s.jsx)(n.em,{children:"number1"})," supplied) functions can be defined mathematically for ",(0,s.jsx)(n.em,{children:"number"})," or ",(0,s.jsx)(n.em,{children:"number1"})," specified as ",(0,s.jsx)(n.em,{children:"x"})," as in Figure 12\u201314."]}),"\n",(0,s.jsxs)(n.p,{children:["|",(0,s.jsx)("b",{children:(0,s.jsx)("sup",{children:"Function Definition"})}),(0,s.jsx)("i",{children:"\u221a"})," |"]}),"\n",(0,s.jsx)(n.p,{children:"| :- |"}),"\n",(0,s.jsxs)(n.p,{children:["|",(0,s.jsxs)("p",{children:["Arc sine ",(0,s.jsx)(n.em,{children:"\u2212i"})," log ",(0,s.jsx)(n.em,{children:"ix"})," +1 ",(0,s.jsx)(n.em,{children:"\u2212 x"}),(0,s.jsx)("sup",{children:"2"})," "]}),(0,s.jsxs)("p",{children:["Arc cosine (*\u03c0/*2) ",(0,s.jsx)(n.em,{children:"\u2212"})," arcsin ",(0,s.jsx)(n.em,{children:"x"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsxs)("sub",{children:["Arc tangent ",(0,s.jsx)("i",{children:"\u2212i"})," log (1 + ",(0,s.jsx)("i",{children:"ix"}),")"]}),(0,s.jsx)("sup",{children:"p"}),"1",(0,s.jsx)("i",{children:"/"}),"(1 + ",(0,s.jsx)("i",{children:"x"}),(0,s.jsx)("sup",{children:"2"}),(0,s.jsx)("sub",{children:")"})," "]}),"|"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Figure 12\u201314. Mathematical definition of arc sine, arc cosine, and arc tangent"})}),"\n",(0,s.jsx)(n.p,{children:"These formulae are mathematically correct, assuming completely accurate computation. They are not necessarily the simplest ones for real-valued computations."}),"\n",(0,s.jsxs)(n.p,{children:["If both ",(0,s.jsx)(n.em,{children:"number1"})," and ",(0,s.jsx)(n.em,{children:"number2"})," are supplied for ",(0,s.jsx)(n.strong,{children:"atan"}),", the result is the arc tangent of ",(0,s.jsx)(n.em,{children:"number1"}),"/",(0,s.jsx)(n.em,{children:"number2"}),". The value of ",(0,s.jsx)(n.strong,{children:"atan"})," is always between ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"})," (exclusive) and ",(0,s.jsx)(n.em,{children:"\u03c0"})," (inclusive) when minus zero is not supported. The range of the two-argument arc tangent when minus zero is supported includes ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For a ",(0,s.jsx)(n.em,{children:"real number1"}),", the result is a ",(0,s.jsx)(n.em,{children:"real"})," and lies between *\u2212\u03c0/*2 and *\u03c0/*2 (both exclusive). ",(0,s.jsx)(n.em,{children:"number1"})," can be a ",(0,s.jsx)(n.em,{children:"complex"})," if ",(0,s.jsx)(n.em,{children:"number2"})," is not supplied. If both are supplied, ",(0,s.jsx)(n.em,{children:"number2"})," can be zero provided ",(0,s.jsx)(n.em,{children:"number1"})," is not zero."]}),"\n",(0,s.jsx)(n.p,{children:"The following definition for arc sine determines the range and branch cuts:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"asin, acos, atan"})}),"\n",(0,s.jsxs)(n.p,{children:["arcsin ",(0,s.jsx)(n.em,{children:"z"})," = ",(0,s.jsx)(n.em,{children:"\u2212i"})," log"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("sub",{children:[(0,s.jsx)("i",{children:"iz"})," +"]}),(0,s.jsx)("sup",{children:"p"}),"1 ",(0,s.jsx)("i",{children:"\u2212 z"}),(0,s.jsx)("sup",{children:"2"})]}),"\n",(0,s.jsxs)(n.p,{children:["The branch cut for the arc sine function is in two pieces: one along the negative real axis to the left of ",(0,s.jsx)(n.em,{children:"\u2212"}),"1 (inclusive), continuous with quadrant II, and one along the positive real axis to the right of 1 (inclusive), continuous with quadrant IV. The range is that strip of the complex plane containing numbers whose real part is between *\u2212\u03c0/*2 and *\u03c0/*2. A number with real part equal to *\u2212\u03c0/*2 is in the range if and only if its imaginary part is non-negative; a number with real part equal to *\u03c0/*2 is in the range if and only if its imaginary part is non-positive."]}),"\n",(0,s.jsxs)(n.p,{children:["The following definition for arc cosine determines the range and branch cuts: ",(0,s.jsxs)("sub",{children:["arccos ",(0,s.jsx)("i",{children:"z"})," ="]}),(0,s.jsx)("i",{children:(0,s.jsx)("sup",{children:"\u03c0"})}),(0,s.jsx)("sub",{children:"2"}),(0,s.jsx)("i",{children:"\u2212"})," arcsin ",(0,s.jsx)("i",{children:"z"})]}),"\n",(0,s.jsx)(n.p,{children:"or, which are equivalent,"}),"\n",(0,s.jsxs)(n.p,{children:["arccos ",(0,s.jsx)(n.em,{children:"z"})," = ",(0,s.jsx)(n.em,{children:"\u2212i"})," log"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("sub",{children:[(0,s.jsx)("i",{children:"z"})," + ",(0,s.jsx)("i",{children:"i"})]}),(0,s.jsx)("sup",{children:"p"}),"1 ",(0,s.jsx)("i",{children:"\u2212 z"}),(0,s.jsx)("sup",{children:"2"})]}),"\n",(0,s.jsxs)("sub",{children:["arccos ",(0,s.jsx)("i",{children:"z"})," =2 log"]}),"\n",(0,s.jsx)("sup",{children:"p"}),"\n",(0,s.jsxs)("sub",{children:["(1 + ",(0,s.jsx)("i",{children:"z"}),")",(0,s.jsx)("i",{children:"/"}),"2 + ",(0,s.jsx)("i",{children:"i"})]}),"\n",(0,s.jsx)("sup",{children:"p"}),"\n",(0,s.jsxs)("sub",{children:["(1 ",(0,s.jsx)("i",{children:"\u2212 z"}),")",(0,s.jsx)("i",{children:"/"}),"2"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"i"})}),"\n",(0,s.jsxs)(n.p,{children:["The branch cut for the arc cosine function is in two pieces: one along the negative real axis to the left of ",(0,s.jsx)(n.em,{children:"\u2212"}),"1 (inclusive), continuous with quadrant II, and one along the positive real axis to the right of 1 (inclusive), continuous with quadrant IV. This is the same branch cut as for arc sine. The range is that strip of the complex plane containing numbers whose real part is between 0 and ",(0,s.jsx)(n.em,{children:"\u03c0"}),". A number with real part equal to 0 is in the range if and only if its imaginary part is non-negative; a number with real part equal to ",(0,s.jsx)(n.em,{children:"\u03c0"})," is in the range if and only if its imaginary part is non-positive."]}),"\n",(0,s.jsx)(n.p,{children:"The following definition for (one-argument) arc tangent determines the range and branch cuts:"}),"\n",(0,s.jsxs)(n.p,{children:["arctan ",(0,s.jsx)("i",{children:"z"})," =",(0,s.jsxs)("sup",{children:["log (1 + ",(0,s.jsx)("i",{children:"iz"}),") ",(0,s.jsx)("i",{children:"\u2212"})," log (1 ",(0,s.jsx)("i",{children:"\u2212 iz"}),")"]})]}),"\n",(0,s.jsxs)(n.p,{children:["2",(0,s.jsx)(n.em,{children:"i"})]}),"\n",(0,s.jsxs)(n.p,{children:["Beware of simplifying this formula; \u201cobvious\u201d simplifications are likely to alter the branch cuts or the values on the branch cuts incorrectly. The branch cut for the arc tangent function is in two pieces: one along the positive imaginary axis above ",(0,s.jsx)(n.em,{children:"i"})," (exclusive), continuous with quadrant"]}),"\n",(0,s.jsxs)(n.p,{children:["II, and one along the negative imaginary axis below ",(0,s.jsx)(n.em,{children:"\u2212i"})," (exclusive), continuous with quadrant IV. The points ",(0,s.jsx)(n.em,{children:"i"})," and ",(0,s.jsx)(n.em,{children:"\u2212i"})," are excluded from the domain. The range is that strip of the complex plane containing numbers whose real part is between *\u2212\u03c0/*2 and *\u03c0/*2. A number with real part equal to *\u2212\u03c0/*2 is in the range if and only if its imaginary part is strictly positive; a number with real part equal to *\u03c0/*2 is in the range if and only if its imaginary part is strictly negative. Thus the range of"]}),"\n",(0,s.jsx)(n.p,{children:"arc tangent is identical to that of arc sine with the points *\u2212\u03c0/*2 and *\u03c0/*2 excluded."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"asin, acos, atan"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.strong,{children:"atan"}),", the signs of ",(0,s.jsx)(n.em,{children:"number1"})," (indicated as ",(0,s.jsx)(n.em,{children:"x"}),") and ",(0,s.jsx)(n.em,{children:"number2"})," (indicated as ",(0,s.jsx)(n.em,{children:"y"}),") are used to derive quadrant information. Figure 12\u201315 details various special cases. The asterisk (*) indicates that the entry in the figure applies to implementations that support minus zero."]}),"\n",(0,s.jsxs)(n.p,{children:["|",(0,s.jsx)(n.em,{children:"y"})," ",(0,s.jsx)(n.strong,{children:"Condition"})," ",(0,s.jsx)(n.em,{children:"x"})," ",(0,s.jsx)(n.strong,{children:"Condition Cartesian locus Range of result"}),"|"]}),"\n",(0,s.jsx)(n.p,{children:"| :- |"}),"\n",(0,s.jsxs)(n.p,{children:["|",(0,s.jsxs)("p",{children:[(0,s.jsx)(n.em,{children:"y"})," = 0 ",(0,s.jsx)(n.em,{children:"x"})," > 0 Positive x-axis 0 "]}),(0,s.jsxs)("p",{children:["* ",(0,s.jsx)(n.em,{children:"y"})," = +0 ",(0,s.jsx)(n.em,{children:"x"})," > 0 Positive x-axis +0 "]}),(0,s.jsxs)("p",{children:["* ",(0,s.jsx)(n.em,{children:"y"})," = ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 ",(0,s.jsx)(n.em,{children:"x"})," > 0 Positive x-axis ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.em,{children:"y"})," > 0 ",(0,s.jsx)(n.em,{children:"x"})," > 0 Quadrant I 0 < result < *\u03c0/*2 ",(0,s.jsx)(n.em,{children:"y"})," > 0 ",(0,s.jsx)(n.em,{children:"x"})," = 0 Positive y-axis *\u03c0/*2 "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.em,{children:"y"})," > 0 ",(0,s.jsx)(n.em,{children:"x"})," < 0 Quadrant II *\u03c0/*2 < result < ",(0,s.jsx)(n.em,{children:"\u03c0 y"})," = 0 ",(0,s.jsx)(n.em,{children:"x"})," < 0 Negative x-axis ",(0,s.jsx)(n.em,{children:"\u03c0"})," "]}),(0,s.jsxs)("p",{children:["* ",(0,s.jsx)(n.em,{children:"y"})," = +0 ",(0,s.jsx)(n.em,{children:"x"})," < 0 Negative x-axis +",(0,s.jsx)(n.em,{children:"\u03c0"})," "]}),(0,s.jsxs)("p",{children:["* ",(0,s.jsx)(n.em,{children:"y"})," = ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 ",(0,s.jsx)(n.em,{children:"x"})," < 0 Negative x-axis ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.em,{children:"y"})," < 0 ",(0,s.jsx)(n.em,{children:"x"})," < 0 Quadrant III ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"})," < result < *\u2212\u03c0/*2 ",(0,s.jsx)(n.em,{children:"y"})," < 0 ",(0,s.jsx)(n.em,{children:"x"})," = 0 Negative y-axis *\u2212\u03c0/*2 "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.em,{children:"y"})," < 0 ",(0,s.jsx)(n.em,{children:"x"})," > 0 Quadrant IV *\u2212\u03c0/*2 < result < 0 ",(0,s.jsx)(n.em,{children:"y"})," = 0 ",(0,s.jsx)(n.em,{children:"x"})," = 0 Origin undefined consequences * ",(0,s.jsx)(n.em,{children:"y"})," = +0 ",(0,s.jsx)(n.em,{children:"x"})," = +0 Origin +0 "]}),(0,s.jsxs)("p",{children:["* ",(0,s.jsx)(n.em,{children:"y"})," = ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 ",(0,s.jsx)(n.em,{children:"x"})," = +0 Origin ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 "]}),(0,s.jsxs)("p",{children:["* ",(0,s.jsx)(n.em,{children:"y"})," = +0 ",(0,s.jsx)(n.em,{children:"x"})," = ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 Origin +",(0,s.jsx)(n.em,{children:"\u03c0"})," "]}),(0,s.jsxs)("p",{children:["* ",(0,s.jsx)(n.em,{children:"y"})," = ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 ",(0,s.jsx)(n.em,{children:"x"})," = ",(0,s.jsx)(n.em,{children:"\u2212"}),"0 Origin ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"})]}),"|"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Figure 12\u201315. Quadrant information for arc tangent"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n(asin 0) \u2192 0.0 \n(acos #c(0 1)) \u2192 #C(1.5707963267948966 -0.8813735870195432) \n(/ (atan 1 (sqrt 3)) 6) \u2192 0.087266 \n(atan #c(0 2)) \u2192 #C(-1.5707964 0.54930615) \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"acos"})," and ",(0,s.jsx)(n.strong,{children:"asin"})," should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"number"})," is not a ",(0,s.jsx)(n.em,{children:"number"})," . ",(0,s.jsx)(n.strong,{children:"atan"})," should signal ",(0,s.jsx)(n.strong,{children:"type-error"})," if one argument is supplied and that argument is not a ",(0,s.jsx)(n.em,{children:"number"})," , or if two arguments are supplied and both of those arguments are not ",(0,s.jsx)(n.em,{children:"reals"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"acos"}),", ",(0,s.jsx)(n.strong,{children:"asin"}),", and ",(0,s.jsx)(n.strong,{children:"atan"})," might signal ",(0,s.jsx)(n.strong,{children:"arithmetic-error"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"log"}),", ",(0,s.jsx)(n.strong,{children:"sqrt"}),", Section 12.1.3.3 (Rule of Float Substitutability)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The result of either ",(0,s.jsx)(n.strong,{children:"asin"})," or ",(0,s.jsx)(n.strong,{children:"acos"})," can be a ",(0,s.jsx)(n.em,{children:"complex"})," even if ",(0,s.jsx)(n.em,{children:"number"})," is not a ",(0,s.jsx)(n.em,{children:"complex"})," ; this occurs when the absolute value of ",(0,s.jsx)(n.em,{children:"number"})," is greater than one."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pi"})," ",(0,s.jsx)(n.em,{children:"Constant Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value:"})}),"\n",(0,s.jsxs)(n.p,{children:["an ",(0,s.jsx)(n.em,{children:"implementation-dependent long float"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The best ",(0,s.jsx)(n.em,{children:"long float"})," approximation to the mathematical constant ",(0,s.jsx)(n.em,{children:"\u03c0"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"\n;; In each of the following computations, the precision depends \n;; on the implementation. Also, if \u2018long float\u2019 is treated by \n;; the implementation as equivalent to some other float format \n;; (e.g., \u2018double float\u2019) the exponent marker might be the marker \n;; for that equivalent (e.g., \u2018D\u2019 instead of \u2018L\u2019). \npi \u2192 3.141592653589793L0 \n(cos pi) \u2192 -1.0L0 \n(defun sin-of-degrees (degrees) \n  (let ((x (if (floatp degrees) degrees (float degrees pi)))) \n    (sin (\\* x (/ (float pi x) 180))))) \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["An approximation to ",(0,s.jsx)(n.em,{children:"\u03c0"})," in some other precision can be obtained by writing (float pi x), where x is a ",(0,s.jsx)(n.em,{children:"float"})," of the desired precision, or by writing (coerce pi ",(0,s.jsx)(n.em,{children:"type"}),"), where ",(0,s.jsx)(n.em,{children:"type"})," is the desired type, such as ",(0,s.jsx)(n.strong,{children:"short-float"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"sinh, cosh, tanh, asinh, acosh, atanh"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}const t={title:"asin, acos, atan"},l="asin, acos, atan",d={id:"chap-12/bc-c-dictionary/asin_acos_atan_function",title:"asin, acos, atan",description:"Expanded Reference: asin, acos, atan",source:"@site/docs/chap-12/bc-c-dictionary/asin_acos_atan_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/asin_acos_atan_function",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/asin_acos_atan_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/asin_acos_atan_function.md",tags:[],version:"current",frontMatter:{title:"asin, acos, atan"},sidebar:"tutorialSidebar",previous:{title:"ash",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/ash_function"},next:{title:"bignum",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/bignum_type"}},h={},o=[{value:"Expanded Reference: asin, acos, atan",id:"expanded-reference-asin-acos-atan",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"asin-acos-atan",children:"asin, acos, atan"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-asin-acos-atan",children:"Expanded Reference: asin, acos, atan"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(asin, acos, atan )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>a});var s=i(67294);const r={},c=s.createContext(r);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);