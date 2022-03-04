# Singleton

Singleton pattern is one of the design patterns that was defined by the gang of four.
Simply, singleton pattern is using the same class instance whenever it is called.

Implementation is thread safe. There are two null checks so that unnecessary locking can't occur and multiple threads do not create a new instance.
Can be improved by static constructors if needed but most of the time this is sufficient.

```
Note: Static constructor will be called only once when a class first created or a static member is first referenced.
```
