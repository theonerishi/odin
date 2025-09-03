# What is the DOM?
The document object model- details the structure of a webpage
# How do you target the nodes you want to work with?
You can use querySelector or a getElementBy method
# How do you create an element in the DOM?
The createElement method.
# How do you add an element to the DOM?
appendChild
# How do you remove an element from the DOM?
removeChild
# How can you alter an element in the DOM?
Use querySelector and then . to access an attribute.
# When adding text to a DOM element, should you use textContent or innerHTML? Why?
Use textContent to prevent cross site scripting attacks.
# Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
In the head section of the HTML and include the defer attribute.
# How do “events” and “listeners” work?
The code in an eventListener runs when the event happens.
# What are three ways to use events in your code?
Set a property in the form of onEventType or attach event listeners.
# Why are event listeners the preferred way to handle events?
Avoids cluttering HTML.
# What are the benefits of using named functions in your listeners?
You can reuse code.
# How do you attach listeners to groups of nodes?
Using the forEach loop
# What is the difference between the return values of querySelector and querySelectorAll?
querySelectorAll returns a NodeList that may have to be converted to an array.
# What does a “NodeList” contain?
References to all the matches of the selector.
# Explain the difference between “capture” and “bubbling”.
Bubbling is where an event acts on elements that wrap around the element the event happened on. Capturing is where an event propagates to child elements.