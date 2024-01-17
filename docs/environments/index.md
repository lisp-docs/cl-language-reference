---
title: "26. Environments"
---

This chapter will discuss the difference between the startup environment, the evaluation environment, the compilation environment, the static lexical environment, and the dynamic environment.

:::tip
TODO: This chapter and article are stubs, please contribute by writing anything you can.
:::

## 1 Introduction

The concept of an *environment* is present everywhere in the Common
Lisp language.  But it can be confusing, because there are many
different types of environments, and several environments of the same
type can exist simultaneously.  In this chapter, we describe the
different kinds of environment, what different roles they play, and
when they are used.

## 2 Types of environment

## 2.1 Run-time environment

A *run-time environment* is an environment relative to which
evaluations are performed and the effects of evaluations are stored.
For example, when a top-level form such as (setq y (f x)) is
evaluated, the current run-time environment is consulted to find a
function definition for f and a variable definition for x in order to
compute the value of the form (f x).  Then the current run-time
environment is consulted again to find a variable definition for y so
that the new value of y can be stored in the environment associated
with y.

## 2.2 Compilation environment

A *compilation environment* is an environment maintained by the file
compiler to record definitions found during compilation of a file.  A
new compilation environment is created each time a file is compiled,
and is valid only for that file.  It is no longer accessible when the
compilation of the file terminates.

For example, the macro DEFUN does not define the function at compile
time, but the compiler still records the fact that a function with the
relevant name has been defined, so that when the name is referred to
in a function call later in the file, the compiler can check that a
function with that name will exist after the compiled file has been
loaded, and it can check that the arguments of the function call are
valid, given the lambda list of the DEFUN form.

The definitions of many operators, including DEFUN, contain phrases
such as "An implementation may choose to store information about the
function for the purposes of compile-time error-checking (such as
checking the number of arguments on calls), or to enable the function
to be expanded inline."  Such phrases implicitly refer to the
compilation environment.

## 2.3 Lexical environment

A *lexical environment* is an environment maintained by the compiler,
and it contains information about lexical definitions that the
compiler encounters so that references to such definitions can be
checked and connected to the corresponding definition.

For example, when the compiler processes a form such as (block b
... (return-from b 234)), this processing is done relative to a
lexical environment.  This lexical environment is augmented with a
block definition for b for the purpose of processing the body of the
BLOCK form.  When the (return-from b 234) form is encountered, the
compiler consults the lexical environment to verify that b is the name
of a block in that environment, and it connects the definition and the
reference, so that, at run-time, control is transferred to the correct
place as a result of the RETURN-FROM.

The lexical environment can be thought of a as an ordered sequence of
entries where the last entry is the run-time environment from which
the compilation was started.   It is an ordered sequence, because some
lexical forms can *shadow* others.  For example in (let ((x 10)) (+ (let
((x 20)) x) x)), there are two references to variables named x, but
they refer to different variables.  One occurrence of x is in the body
of the innermost LET, so when it is encountered by the compiler, the
entry containing the binding (x 20) is encountered first, thereby
allowing the compiler to resolve x to that definition.  The other
occurrence is outside the body of the innermost LET but inside the
body of the outermost LET, so when it is encountered by the compiler,
the entry containing the binding (x 10) is encountered, allowing the
compiler to resolve that reference to the relevant binding.

A lexical environment contains definitions of lexical variables
introduced by many constructs including LET and LET*.  It contains
local functions introduced by FLET and LABELS.  It also contains
definitions of blocks, TAGBODY tags, local macros introduced by
MACROLET, local symbol macros introduced by SYMBOL-MACROLET.
