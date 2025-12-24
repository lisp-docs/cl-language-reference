---
title: "7.6 Generic Functions and Methods"
---

# 7.6 Generic Functions and Methods

import HGGenericFunctionsandMethods from './h-g-generic-functions-and-methods/_h-g-generic-functions-and-methods.md';

<HGGenericFunctionsandMethods />

## 7.6.1 Introduction to Generic Functions

import HGBIntroductiontoGenericFunctions from './h-g-generic-functions-and-methods/_h-g-b-introduction-to-generic-functions.md';

<HGBIntroductiontoGenericFunctions />

## 7.6.2 Introduction to Methods

import HGCIntroductiontoMethods from './h-g-generic-functions-and-methods/_h-g-c-introduction-to-methods.md';

<HGCIntroductiontoMethods />

## 7.6.3 Agreement on Parameter Specializers and Qualifiers

import HGDAgreementonParameterSpecializersandQualifiers from './h-g-generic-functions-and-methods/_h-g-d-agreement-on-parameter-specializers-and-qualifiers.md';

<HGDAgreementonParameterSpecializersandQualifiers />

## 7.6.4 Congruent Lambda

import HGECongruentLambdalistsforallMethodsofaGenericFunction from './h-g-generic-functions-and-methods/_h-g-e-congruent-lambdalists-for-all-methods-of-a-generic-function.md';

<HGECongruentLambdalistsforallMethodsofaGenericFunction />

## 7.6.5 Keyword Arguments in Generic Functions and Methods

import HGFKeywordArgumentsinGenericFunctionsandMethods from './h-g-generic-functions-and-methods/_h-g-f-keyword-arguments-in-generic-functions-and-methods.md';

<HGFKeywordArgumentsinGenericFunctionsandMethods />

### 7.6.5.1 Examples of Keyword Arguments in Generic Functions and Methods

import HGFBExamplesofKeywordArgumentsinGenericFunctionsandMethods from './h-g-generic-functions-and-methods/_h-g-f-b-examples-of-keyword-arguments-in-generic-functions-and-methods.md';

<HGFBExamplesofKeywordArgumentsinGenericFunctionsandMethods />

## 7.6.6 Method Selection and Combination

import HGGMethodSelectionandCombination from './h-g-generic-functions-and-methods/_h-g-g-method-selection-and-combination.md';

<HGGMethodSelectionandCombination />

### 7.6.6.1 Determining the Effective Method

import HGGBDeterminingtheEffectiveMethod from './h-g-generic-functions-and-methods/_h-g-g-b-determining-the-effective-method.md';

<HGGBDeterminingtheEffectiveMethod />

#### 7.6.6.1.1 Selecting the Applicable Methods

import HGGBBSelectingtheApplicableMethods from './h-g-generic-functions-and-methods/_h-g-g-b-b-selecting-the-applicable-methods.md';

<HGGBBSelectingtheApplicableMethods />

#### 7.6.6.1.2 Sorting the Applicable Methods by Precedence Order

import HGGBCSortingtheApplicableMethodsbyPrecedenceOrder from './h-g-generic-functions-and-methods/_h-g-g-b-c-sorting-the-applicable-methods-by-precedence-order.md';

<HGGBCSortingtheApplicableMethodsbyPrecedenceOrder />

#### 7.6.6.1.3 Applying method combination to the sorted list of applicable methods

import HGGBDApplyingmethodcombinationtothesortedlistofapplicablemethods from './h-g-generic-functions-and-methods/_h-g-g-b-d-applying-method-combination-to-the-sorted-list-of-applicable-methods.md';

<HGGBDApplyingmethodcombinationtothesortedlistofapplicablemethods />

### 7.6.6.2 Standard Method Combination

import HGGCStandardMethodCombination from './h-g-generic-functions-and-methods/_h-g-g-c-standard-method-combination.md';

<HGGCStandardMethodCombination />

### Expanded Reference: Standard Method Combination

The following example shows how the standard method combination works with multiple `:before`, `:after`, and `:around` methods.

The following definitions:

```lisp
(defgeneric operate (x y)
  (:documentation "Performs an operation on x and y."))

(defmethod operate :before ((x number) (y number))
  (format t "Before operation (number): x = ~a, y = ~a~%" x y))

(defmethod operate :after ((x number) (y number))
  (format t "After operation (number).~%"))

(defmethod operate :before ((x integer) (y integer))
  (format t "Before operation (integer): x = ~a, y = ~a~%" x y))

(defmethod operate :after ((x integer) (y integer))
  (format t "After operation (integer).~%"))

(defmethod operate :around ((x number) (y number))
  (format t "Around operation (number) (before).~%")
  (let ((result (call-next-method))) ; Call the next most specific method
    (format t "Around operation (after). Result was ~a~%" result)
    result))

(defmethod operate :around ((x integer) (y integer))
  (format t "Around operation (integer) (before).~%")
  (let ((result (call-next-method))) ; Call the next most specific method
    (format t "Around operation (after). Result was ~a~%" result)
    result))

(defmethod operate ((x integer) (y integer))
  (format t "Primary method (integers): ~%")
  (+ x y))

(defmethod operate ((x float) (y float))
  (format t "Primary method (floats): ~%")
  (* x y))
```

Can be used to produce the following output:

```lisp
CL-USER> (operate 5 3)
Around operation (integer) (before).
Around operation (number) (before).
Before operation (integer): x = 5, y = 3
Before operation (number): x = 5, y = 3
Primary method (integers): 
After operation (number).
After operation (integer).
Around operation (after). Result was 8
Around operation (after). Result was 8
8 (4 bits, #x8, #o10, #b1000)
CL-USER> (operate 2.5 4.0)
Around operation (number) (before).
Before operation (number): x = 2.5, y = 4.0
Primary method (floats): 
After operation (number).
Around operation (after). Result was 10.0
10.0
```

Notice the order of execution of each qualified method and the wrapping effect the `:around` qualified methods can have.

### 7.6.6.3 Declarative Method Combination

import HGGDDeclarativeMethodCombination from './h-g-generic-functions-and-methods/_h-g-g-d-declarative-method-combination.md';

<HGGDDeclarativeMethodCombination />

### 7.6.6.4 Built In Method Combination Types

import HGGEBuiltinMethodCombinationTypes from './h-g-generic-functions-and-methods/_h-g-g-e-builtin-method-combination-types.md';

<HGGEBuiltinMethodCombinationTypes />

## 7.6.7 Inheritance of Methods

import HGHInheritanceofMethods from './h-g-generic-functions-and-methods/_h-g-h-inheritance-of-methods.md';

<HGHInheritanceofMethods />

