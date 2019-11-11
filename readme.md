
## Installation Instructions

``` 
1. Download the file from the button that says `Clone or download`

2. Unzip, and open "index.html"
````

If it opens your browser with a box containing `"Hello World!"` you are set up.

## Explaining the code

In the folder that you downloaded are some files with diferent extensions: `*.html`, `*.js`, `*.css` 
and `*.md`, only the first 3 are important. When we make applications there are some goals we want
to acomplish. 

- Usually we want to show something in the screen to the user 
- Get some user input, ex. if we are making a calculator we need a way they can enter numbers and so.
- Do some calculations with the received input from the user
- Show the result of those calculations back in the scren

Usually that is why we have different languages for different things, each one is used for different parts of this goals, html is used to create elements like buttons, input fields and show information such as text, images, videos; 

`*.css` is used as a complement to html, not only do we want to show a button on screen, we also want that the text is blue and the background to be black, or when we put the mouse over it, we want it to show some visual feedback, like changing color or animate it in some way; with `css` we can specify how we want it to behave

The most important part of any aplication is the functionality, its like the brain of ur program, every program makes some sort of calculation, thats what we want computers for us, be it sum 2 numbers, order something from amazon, of search something in google, the `logic` or `instructions` of our program are done in `javascript` / `*.js`, so if we want the computer to do something for us, we will use `js` for this

!explain how they all work together

All these three are the building blocks of almost every webpage out there, as i mentioned earlier, the most important file right here is `index.html`, it is common/standard for all the servers to accept this file as the entry point for a webpage, so lets study it:

> This are comments in html, they are not code, they will be used as visual help for the actual code:

> `<!-- comments -->` 

``` html
<!-- Ex.1 -->
<!-- ./index.html -->

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hypperapp Sandbox</title>

    <link rel="stylesheet" href="./css/style.css">
  </head>

  <body> 
    <div id="app"></div>
    <script type="module" src="./sandbox.js" defer></script>
  </body>

</html>
```

As we can se in the first example `(Ex.1)`, this is `html` it has 3 important things we have to put attention:

``` html
<!-- Everithing between the two: <html> ... </html> tags will be your application -->
<html lang="en">
  
  <!-- This is used to specify things like language, some SEO, and load your .css  -->
  <head>
    ...
  </head>

  <!-- This is used to specify the html element: buttons, text, tables, images etc... and to execute .js  -->
  <body> 
    ...
  </body>

</html>

```

In `html` everything that goes with in the form of `<something> ... </something>`, is called an element, they represent an `object/element` that will be used in a webpage, there are many elements that all work for what we want, show information to the user like paragraphs, lists, images, etc... as well to receive input from the user like buttons and input fields where the user can type into, some are:
``` html


<button >Click me!</button> <!-- button -->

<p ></p>              <!-- paragraph -->
<h1 ></h1>            <!-- biggest title -->
<h3 ></h3>            <!-- medium title -->
<h6 ></h6>            <!-- smallest title -->

<ul>                  <!-- unordered list -->
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>

<input >                                    <!-- input field -->
<input placeholder="name" type="text">      <!-- input field with placegolder text -->
<input placeholder="name" type="password">  <!-- input field with hidden text -->

<link href="sandbox.css" rel="stylesheet" > <!-- link tells the browser to load this css code -->
<script src="sandbox.js" ></script>         <!-- script tells the browser to load this javascript code -->
<a href="http://google.com" target="_blank" >Go to Google</a> <!-- anchor tells the browser to open another webpage -->

```

As you can see there are elements for many different things, this is just a fraction of all the elements that html has, i wont go into detail to explain every single one of them, they could be a tutorial on their own, feel free to explore by yourself, look at [w3chools](https://www.w3schools.com/html/html_basic.asp) they have exellent information about all `html`, `css` and `javascript` if you want to dive deeper, an element has 3 key parts to it, lets explain them:

The element `name`, this is tells the browser what each element is, this is usually what goes between 
`< ... >` like: `button`, `link`, `input`, etc..
``` html
<button></button>
<p></p>
<image></image>
```

The element `attributes`, this are like special values that are usefull for each element, they tell information like, what file name use to load the `*.js` or `*.css` files in some cases, in other we want to tell the browser something is a password or a date and it will show the corresponding element for it:

``` html
<!-- link uses href attribute to specify the file name of the css code that will be loaded and rel/relation attribute is to tell the browser to use the file as css code -->
<link href="sandbox.css" rel="stylesheet"> 

<!-- script uses src/source instead as attribute name to secify the javascript file name  -->
<script src="sandbox.js" ></script> 

<!-- They both are the same type of element (input) but the placeholder and type attributes are used to tell the browser that each element is slighty different from the other -->

<input placeholder="name" type="text">      
<input placeholder="password" type="password">
```

> _** note that some have a closing tag and some dont most of them have but look at [w3chools](https://www.w3schools.com/html/html_basic.asp) as reference its always helpfull_

### Head

!explain head
!explain body

## 


