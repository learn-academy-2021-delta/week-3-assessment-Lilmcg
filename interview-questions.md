# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 'This' is used to refer to an object it belongs to.

  Researched answer: 'This' is a keyword in JavaScript used to reference an object inside of itself. 'This' can be used to access a variable inside of an object. For example:
    const person = {
      firstName: "Lillian"
      lastName: "McGillivray"
        return this.firstName

        In the above example this.firstName is referencing an object inside of itself. 'This' is accessing the firstName (property variable) of 'this' person (object) and will return it's value "Lillian". This.firstName cannot be used outside of this method because it is an instance of the current object ('person') in the method of the class.


2. What is React? Why would you use it?

  Your answer: React is a Javascript library for building user interfaces. You would use it for creating what you can visually see on a website or mobile app.

  Researched answer: React was created by Facebook to handle user interaction. React literally reacts to users. It is a Javascript library for building interactive user interfaces. You would use it for creating what you can visually see on a website or mobile app (makes changes to the DOM that are triggered by the user). It is made up of many components that are joined together to create entire applications (components return something similar to a function). React structures the code to be reusable and handles the user interactions extremely fast. React will efficiently update and render just the right components when your data changes.



3. Which lifecycle method is required in a React class component?

  Your answer: Render is is a lifecycle method required in a React class component.

  Researched answer: Render is is a lifecycle method required in a React class component. The render method opens a block of code. Elements are rendered (displayed) with a render method. The render method only returns a single element.



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is is hybrid of Javascript and html.

  Researched answer: JSX stands for "Javascript XML". JSX is a marriage between HTML and Javascript. It allows you to write HTML in React by converting HTML into React components. JSX is a Javascript flavored markup language that is inside a javascript class. Html is the most basic building block of the web. Html alone will only display plain text/content that cannot be changed (static), while JSX makes it easier to create React components (syntactic sugar) and adds more advanced dynamic functionality to the content to make it more interactive.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a Javascript package manager that keeps track of node modules.

  Researched answer: Yarn is a Javascript package manager for our code that keeps track of node modules. A package contains all the files you need for a module. Modules are Javascript libraries you can include in your project. Every time a module is added, Yarn will create or update a yarn.lock file.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is an undeclared function?

  Researched answer: An anonymous function is a function that was declared without any name associated with it. You cannot access the function after it is created.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Works the same way conditions work in Javascript. It allows us to render different elements or components based on a condition. React will update the user interface to match certain conditions. Example: making a 'log out' button visible when the user is logged in, and a 'login/signup' form visible when the user is not logged in.

2. Props: Props stands for properties. It is a keyword in React for passing component info in one direction from the parent to the child. They cannot be updated. Props come from the state mostly. They are a snapshot of state and passed on to components that allow a user to interact with that info.

3. JavaScript Events: Events have built in properties and methods.

4. Object oriented programming: OOP is a programming model that relies on classes and objects versus function and logic.

5. Ruby: Ruby is a server-side, object-oriented scripting language that is open sourced. It acts as a buffer between programmers and the underlying computing machinery.
