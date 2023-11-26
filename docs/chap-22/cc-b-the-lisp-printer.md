---
title: "22.1 The Lisp Printer"
---

# 22.1 The Lisp Printer

import CcBTheLispPrinter from './cc-b-the-lisp-printer/_cc-b-the-lisp-printer.md';

<CcBTheLispPrinter />

## 22.1.1 Overview of The Lisp Printer

import CcBBOverviewofTheLispPrinter from './cc-b-the-lisp-printer/_cc-b-b-overview-of-the-lisp-printer.md';

<CcBBOverviewofTheLispPrinter />

### 22.1.1.1 Multiple Possible Textual Representations

import CcBBBMultiplePossibleTextualRepresentations from './cc-b-the-lisp-printer/_cc-b-b-b-multiple-possible-textual-representations.md';

<CcBBBMultiplePossibleTextualRepresentations />

#### 22.1.1.1.1 Printer Escaping

import CcBBBBPrinterEscaping from './cc-b-the-lisp-printer/_cc-b-b-b-b-printer-escaping.md';

<CcBBBBPrinterEscaping />

## 22.1.2 Printer Dispatching

import CcBCPrinterDispatching from './cc-b-the-lisp-printer/_cc-b-c-printer-dispatching.md';

<CcBCPrinterDispatching />

## 22.1.3 Default Print

import CcBDDefaultPrintObjectMethods from './cc-b-the-lisp-printer/_cc-b-d-default-printobject-methods.md';

<CcBDDefaultPrintObjectMethods />

### 22.1.3.1 Printing Numbers

import CcBDBPrintingNumbers from './cc-b-the-lisp-printer/_cc-b-d-b-printing-numbers.md';

<CcBDBPrintingNumbers />

#### 22.1.3.1.1 Printing Integers

import CcBDBBPrintingIntegers from './cc-b-the-lisp-printer/_cc-b-d-b-b-printing-integers.md';

<CcBDBBPrintingIntegers />

#### 22.1.3.1.2 Printing Ratios

import CcBDBCPrintingRatios from './cc-b-the-lisp-printer/_cc-b-d-b-c-printing-ratios.md';

<CcBDBCPrintingRatios />

#### 22.1.3.1.3 Printing Floats

import CcBDBDPrintingFloats from './cc-b-the-lisp-printer/_cc-b-d-b-d-printing-floats.md';

<CcBDBDPrintingFloats />

#### 22.1.3.1.4 Printing Complexes

import CcBDBEPrintingComplexes from './cc-b-the-lisp-printer/_cc-b-d-b-e-printing-complexes.md';

<CcBDBEPrintingComplexes />

#### 22.1.3.1.5 Note about Printing Numbers

import CcBDBFNoteaboutPrintingNumbers from './cc-b-the-lisp-printer/_cc-b-d-b-f-note-about-printing-numbers.md';

<CcBDBFNoteaboutPrintingNumbers />

### 22.1.3.2 Printing Characters

import CcBDCPrintingCharacters from './cc-b-the-lisp-printer/_cc-b-d-c-printing-characters.md';

<CcBDCPrintingCharacters />

### 22.1.3.3 Printing Symbols

import CcBDDPrintingSymbols from './cc-b-the-lisp-printer/_cc-b-d-d-printing-symbols.md';

<CcBDDPrintingSymbols />

#### 22.1.3.3.1 Package Prefixes for Symbols

import CcBDDBPackagePrefixesforSymbols from './cc-b-the-lisp-printer/_cc-b-d-d-b-package-prefixes-for-symbols.md';

<CcBDDBPackagePrefixesforSymbols />

#### 22.1.3.3.2 Effect of Readtable Case on the Lisp Printer

import CcBDDCEffectofReadtableCaseontheLispPrinter from './cc-b-the-lisp-printer/_cc-b-d-d-c-effect-of-readtable-case-on-the-lisp-printer.md';

<CcBDDCEffectofReadtableCaseontheLispPrinter />

##### 22.1.3.3.2.1 Examples of Effect of Readtable Case on the Lisp Printer

import CcBDDCBExamplesofEffectofReadtableCaseontheLispPrinter from './cc-b-the-lisp-printer/_cc-b-d-d-c-b-examples-of-effect-of-readtable-case-on-the-lisp-printer.md';

<CcBDDCBExamplesofEffectofReadtableCaseontheLispPrinter />

### 22.1.3.4 Printing Strings

import CcBDEPrintingStrings from './cc-b-the-lisp-printer/_cc-b-d-e-printing-strings.md';

<CcBDEPrintingStrings />

### 22.1.3.5 Printing Lists and Conses

import CcBDFPrintingListsandConses from './cc-b-the-lisp-printer/_cc-b-d-f-printing-lists-and-conses.md';

<CcBDFPrintingListsandConses />

### 22.1.3.6 Printing Bit Vectors

import CcBDGPrintingBitVectors from './cc-b-the-lisp-printer/_cc-b-d-g-printing-bit-vectors.md';

<CcBDGPrintingBitVectors />

### 22.1.3.7 Printing Other Vectors

import CcBDHPrintingOtherVectors from './cc-b-the-lisp-printer/_cc-b-d-h-printing-other-vectors.md';

<CcBDHPrintingOtherVectors />

### 22.1.3.8 Printing Other Arrays

import CcBDIPrintingOtherArrays from './cc-b-the-lisp-printer/_cc-b-d-i-printing-other-arrays.md';

<CcBDIPrintingOtherArrays />

### 22.1.3.9 Examples of Printing Arrays

import CcBDJExamplesofPrintingArrays from './cc-b-the-lisp-printer/_cc-b-d-j-examples-of-printing-arrays.md';

<CcBDJExamplesofPrintingArrays />

### 22.1.3.10 Printing Random States

import CcBDBaPrintingRandomStates from './cc-b-the-lisp-printer/_cc-b-d-ba-printing-random-states.md';

<CcBDBaPrintingRandomStates />

### 22.1.3.11 Printing Pathnames

import CcBDBbPrintingPathnames from './cc-b-the-lisp-printer/_cc-b-d-bb-printing-pathnames.md';

<CcBDBbPrintingPathnames />

### 22.1.3.12 Printing Structures

import CcBDBcPrintingStructures from './cc-b-the-lisp-printer/_cc-b-d-bc-printing-structures.md';

<CcBDBcPrintingStructures />

### 22.1.3.13 Printing Other Objects

import CcBDBdPrintingOtherObjects from './cc-b-the-lisp-printer/_cc-b-d-bd-printing-other-objects.md';

<CcBDBdPrintingOtherObjects />

## 22.1.4 Examples of Printer Behavior

import CcBEExamplesofPrinterBehavior from './cc-b-the-lisp-printer/_cc-b-e-examples-of-printer-behavior.md';

<CcBEExamplesofPrinterBehavior />

