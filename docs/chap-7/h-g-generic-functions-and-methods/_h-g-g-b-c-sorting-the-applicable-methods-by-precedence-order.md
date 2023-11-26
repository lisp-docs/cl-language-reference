**7.6.6.1.2 Sorting the Applicable Methods by Precedence Order** 

To compare the precedence of two methods, their *parameter specializers* are examined in order. The default examination order is from left to right, but an alternative order may be specified by the :argument-precedence-order option to **defgeneric** or to any of the other operators that specify generic function options. 

The corresponding *parameter specializers* from each method are compared. When a pair of *parameter specializers* agree, the next pair are compared for agreement. If all corresponding parameter specializers agree, the two methods must have different *qualifiers*; in this case, either method can be selected to precede the other. For information about agreement, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 

If some corresponding *parameter specializers* do not agree, the first pair of *parameter specializers* that do not agree determines the precedence. If both *parameter specializers* are classes, the more specific of the two methods is the method whose *parameter specializer* appears earlier in the *class precedence list* of the corresponding argument. Because of the way in which the set of applicable methods is chosen, the *parameter specializers* are guaranteed to be present in the class precedence list of the class of the argument. 

If just one of a pair of corresponding *parameter specializers* is (eql *object*), the *method* with that *parameter specializer* precedes the other *method*. If both *parameter specializers* are **eql** *expressions*, the specializers must agree (otherwise the two *methods* would not both have been applicable to this argument). 

The resulting list of *applicable methods* has the most specific *method* first and the least specific *method* last. 

