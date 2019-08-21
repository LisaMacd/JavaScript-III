/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
Principle 1: Window/Global Object Binding:
It refers to when the function calls the standalone function invocation. When in the global scope, the value of “this” will be the window/console Object.

2- Implicit Binding:
This refers to when the object that is standing before the dot is what this keyword will be bound to.

3. Explicit Binding:
It refers to when you can deliberately make a function call to use a specific object for this binding, without putting a property function reference on the object. In other words it is explicitly said to a function what object it should use for this. This is done by using functions such as call, apply and bind.

4. New-Binding:
When you refer to new binding the following things happen:
One creates an empty object that is referenced by the this variable that inherits the prototype of the function.
Properties and methods are added to the object which are referenced by this.
The new object that is referenced by this is returned at the end implicitly.


* write out a code example of each explanation above
*/

// Principle 1

var newFunction = function() {
    console.log(this.windowGlobal);
 }
 
 var windowGlobal = "I am Window/Global Object Binding." ;
 newFunction();  

// Principle 2

function implicit(){
	console.log(this.value);
}

var obj = {
	value: "Howdy! I am Implicit Binding",
	implicit:implicit
};

obj.implicit()

// Principle 3

function greetExplicit() {
	console.log(this.name);
}

var person = {
	name:'I am Explicit Binding'
};

var greetPerson = greetExplicit.bind(person); 
greetPerson(); 

// Principle 4

function NewExample() {        

          this.name = 'New Binding';
        this.say = function () {
        return "I am " + this.name; 
         };
    }
    
    var name = 'Lisa';
    var result = new NewExample();
    console.log(result.name); 