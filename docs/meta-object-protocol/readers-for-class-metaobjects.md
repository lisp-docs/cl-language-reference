readers for Class Metaobjects
=============================

### Readers for Class Metaobjects

In this and the immediately following sections, the ``reader'' generic functions which simply return information associated with a particular kind of metaobject are presented together. General information is presented first, followed by a description of the purpose of each, and ending with the specified methods for these generic functions.

The reader generic functions which simply return information associated with class metaobjects are presented together in this section.

Each of the reader generic functions for class metaobjects has the same syntax, accepting one required argument called *class*, which must be an class metaobject; otherwise, an error is signaled. An error is also signaled if the class metaobject has not been initialized.

These generic functions can be called by the user or the implementation.

For any of these generic functions which returns a list, such lists will not be mutated by the implementation. The results are undefined if a portable program allows such a list to be mutated.

#### Functions

  ------------------ -----------------------------------------------------------------------
  Generic Function   [**class-default-initargs**](class-default-initargs.md)
  Generic Function   [**class-direct-default-initargs**](class-direct-default-initargs.md)
  Generic Function   [**class-direct-slots**](class-direct-slots.md)
  Generic Function   [**class-direct-subclasses**](class-direct-subclasses.md)
  Generic Function   [**class-direct-superclasses**](class-direct-superclasses.md)
  Generic Function   [**class-finalized-p**](class-finalized-p.md)
  Generic Function   [**class-name**](class-name.md)
  Generic Function   [**class-precedence-list**](class-precedence-list.md)
  Generic Function   [**class-prototype**](class-prototype.md)
  Generic Function   [**class-slots**](class-slots.md)
  ------------------ -----------------------------------------------------------------------

#### Methods

The specified methods for the class metaobject reader generic functions are presented below.

Each entry in the table indicates a method on one of the reader generic functions, specialized to a specified class. The number in each entry is a reference to the full description of the method. The full descriptions appear after the table.

  ------------------ ------------------ ------------------ ------------------
                     `standard-class an `forward-reference `built-in-class`
                     d`                 d-class`           

                     `funcallable-stand                    
                     ard-class`                            

  `class-default-ini 2                  3                  4
  targs`                                                   

  `class-direct-defa 1                  4                  4
  ult-initargs`                                            

  `class-direct-slot 1                  4                  4
  s`                                                       

  `class-direct-subc 9                  9                  7
  lasses`                                                  

  `class-direct-supe 1                  4                  7
  rclasses`                                                

  `class-finalized-p 2                  6                  5
  `                                                        

  `class-name`       1                  1                  8

  `class-precedence- 2                  3                  7
  list`                                                    

  `class-prototype`  10                 10                 10

  `class-slots`      2                  3                  4
  ------------------ ------------------ ------------------ ------------------

1.  This method returns the value which was associated with the class metaobject during initialization or reinitialization.

2.  This method returns the value associated with the class metaobject by [`finalize-inheritance` (*class* standard-class)](finalize-inheritance-standard-class.md) or [`finalize-inheritance` (*class* funcallable-standard-class)](finalize-inheritance-funcallable-standard-class.md).

3.  This method signals an error.

4.  This method returns the empty list.

5.  This method returns true.

6.  This method returns false.

7.  This method returns a value derived from the information in [this table](table-class-inheritance.md), except that implementation-specific modifications are permitted as described in [section ``Implementation and User Specialization.''](implementation-and-user-specialization.md)

8.  This method returns the name of the built-in class.

9.  This methods returns a value which is maintained by [`add-direct-subclass` (*superclass* class) (*subclass* class)](add-direct-subclass-class-class.md) and [`remove-direct-subclass` (*superclass* class) (*subclass* class)](remove-direct-subclass-class-class.md) This method can be overridden only if those methods are overridden as well.

10. No behavior is specified for this method beyond that specified for the generic function.

#### Comments and remarks

It is not clear what is meant by the phrase "Each entry in the table indicates a method on one of the reader generic functions" above. It clearly does not mean that each number represents one method, because the same number appears in different rows of the table. One interpretation is that there are exactly 30 methods, but this can not be the case because the specification does not mention a common superclass for `standard-class` and `funcallable-standard-class`, so there can not be a single method for the two. Another interpretation, then, is that there are exactly 40 methods. However, in other parts of the document, there is mention of a single method specialized for `class` that does not correspond to the table above.
