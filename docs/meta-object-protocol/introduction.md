Introduction
============

Introduction
------------

The [CLOS Specification](http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node260.md#SECTION003200000000000000000) describes the standard Programmer Interface for the Common Lisp Object System (CLOS). This document extends that specification by defining a metaobject protocol for CLOS---that is, a description of CLOS itself as an extensible CLOS program. In this description, the fundamental elements of CLOS programs (classes, slot definitions, generic functions, methods, specializers and method combinations) are represented by first-class objects. The behavior of CLOS is provided by these objects, or, more precisely, by methods specialized to the classes of these objects.

Because these objects represent pieces of CLOS programs, and because their behavior provides the behavior of the CLOS language itself, they are considered meta-level objects or metaobjects. The protocol followed by the metaobjects to provide the behavior of CLOS is called the CLOS Metaobject Protocol (MOP).
