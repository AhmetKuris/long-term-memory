# Service locator

### What is Service Locator?

Service locator is an implementation of IoC(Inversion of Control) principle. You can see an example in the code.

### Types of Service Locator

1. Strong Type
2. Generic Type

Example code is a generic type.

### Decoupling

Coupling is simply how closely different parts of your system are connected. Decoupling actually means making your system loosely coupled. Everything below is there to achieve decoupling.

### Inversion of Control Principle

Changing the flow of an application upside down. For example user input is an IoC.
Some patterns that implement IoC:

1. Service Locator
2. Factory
3. Dependency Injection and many more...

### Dependency Inversion Principle of SOLID

"High-level modules should not depend on low-level modules. Both should depend on the abstraction." Simply put, it is where you accept dependency as an abstraction (like interface in C#/Java context).

### Depedency Injection

DI is specifiyng dependecies rather than requesting them. Then specified dependencies are injected by others(This can be manuel or automatic with Depedency Injection Container).

### Service locator vs Depedency Injection

In service locator the module/class requests the depedency but in DI you only specifiy the dependency and something external injects those dependencies. Service locator also makes testing harder than dependency injection.

### Depedency Injection Container

Automatizes the injections of depedencies. Some people also call it IoC container.

### Decoupling Best Practice

Currently best practice consists of using interfaces as dependencies and constructor injection with dependency injection container.

### Disadvantage of Property Injection Over Constructor Injection

When you call a class the constructor is called for sure and you can be sure that its dependency is initialized if use constructor injection. But if you use propery injection you will not know if depedency initialized before you call the property. This opens up a possibility where in a production code you can have an unexpected null dependency.
