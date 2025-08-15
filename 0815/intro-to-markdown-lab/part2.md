# HTML Boilerplate Tutorial

![HTML photo](https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## Step 1: Open Your Code Editor

Any modern text editor or IDE will work. Examples: _VS Code_, _Sublime Text_, or _WebStorm_. Create a new file named **index.html**.

## Step 2: Declare the Document Type

At the very top of the file, declare the HTML5 doctype to ensure the browser uses the latest rendering mode.

Example:

```
<!DOCTYPE html>
```

## Step 3: Create the HTML Structure

Add the root **"\<html>"** element. Include the lang attribute to set the language of the document (important for accessibility and SEO).

Example:

```
<html lang="en">
```

Step 4: Add the Head Section
Inside **<head>**, include essential meta tags and resources.

- **"\<meta charset="UTF-8">"** sets the character encoding to UTF-8 for broad character support.
- **"\<meta name="viewport" content="width=device-width, initial-scale=1.0">** ensures proper scaling on mobile devices.
- **"\<meta name="description" content="A short, relevant page description for SEO.">"**
- **"\<title>Page Title</title> defines the text shown in the browser tab."**
- Link to your CSS file using **"\<link rel="stylesheet" href="styles.css">"**.

## Step 5: Add the Body Section

The **"\<body>"** contains the visible content of your page. Even in a boilerplate, it’s good to add a basic heading and placeholder content.

Example:

```
<body> <h1>Hello, world!</h1> <p>This is a boilerplate HTML file.</p> <script src="script.js"></script> </body>
```

## Step 6: Close the HTML Tag

Make sure to close **"\</html>"** after the body.

## Step 7: Save and Test

Save your file, open it in a browser, and confirm the structure loads without errors.

## Step 8: Optional Enhancements

- Include a favicon link in the head: **"\<link rel="icon" href="favicon.ico" type="image/x-icon">"**
- Use **"\<meta http-equiv="X-UA-Compatible" content="IE=edge">"** for better compatibility with old IE versions.
- Consider preloading important resources with **"\<link rel="preload">"** if performance matters.

## Step 9: Minimal HTML5 Boilerplate Example

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Basic HTML5 boilerplate example" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>Boilerplate ready.</p>
    <script src="script.js"></script>
  </body>
</html>
```
