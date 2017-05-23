-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 
-- Версия на сървъра: 5.7.14-log
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frontend_island`
--

-- --------------------------------------------------------

--
-- Структура на таблица `css`
--

CREATE TABLE `css` (
  `id` int(11) NOT NULL,
  `question` varchar(500) CHARACTER SET utf8 NOT NULL,
  `first` varchar(300) CHARACTER SET utf8 NOT NULL,
  `second` varchar(300) CHARACTER SET utf8 NOT NULL,
  `third` varchar(300) CHARACTER SET utf8 NOT NULL,
  `correct` varchar(20) CHARACTER SET utf8 NOT NULL,
  `level` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Схема на данните от таблица `css`
--

INSERT INTO `css` (`id`, `question`, `first`, `second`, `third`, `correct`, `level`) VALUES
(1, 'What does CSS stand for?', 'Colorful Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'second', 'easy'),
(2, 'What is the correct HTML for referring to an external style sheet?', '<stylesheet>mystyle.css</stylesheet>', '<style src=\"mystyle.css\">', '<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">', 'third', 'easy'),
(3, 'Where in an HTML document is the correct place to refer to an external style sheet?', 'At the end of the document', 'In the <head> section', 'In the <body> section', 'second', 'easy'),
(4, 'Which HTML tag is used to define an internal style sheet?', '<style>', '<css>', '<script>', 'first', 'easy'),
(5, 'Which HTML attribute is used to define inline styles?', 'style', 'styles', 'font', 'first', 'easy'),
(6, 'Which is the correct CSS syntax?', '{body;color:black;}', '{body:color=black;}', 'body {color: black;}', 'third', 'easy'),
(7, 'How do you insert a comment in a CSS file?', '/* this is a comment */', '// this is a comment //', '// this is a comment', 'first', 'easy'),
(8, 'Which property is used to change the background color?', 'color', 'bgcolor', 'background-color', 'third', 'easy'),
(9, 'How do you add a background color for all <h1> elements?', 'all.h1 {background-color:#FFFFFF;}', 'h1.all {background-color:#FFFFFF;}', 'h1 {background-color:#FFFFFF;}', 'third', 'easy'),
(10, 'Which CSS property is used to change the text color of an element?', 'fgcolor', 'text-color', 'color', 'third', 'easy'),
(11, 'Which CSS property controls the text size?', 'font-style', 'font-size', 'text-size', 'second', 'easy'),
(12, 'What is the correct CSS syntax for making all the <p> elements bold?', '<p style=\"font-size:bold;\">', 'p {font-weight:bold;}', 'p {text-size:bold;}', 'second', 'easy'),
(13, 'How do you display hyperlinks without an underline?', 'a {text-decoration:no-underline;}', 'a {underline:none;}', 'a {text-decoration:none;}', 'third', 'easy'),
(14, 'How do you make each word in a text start with a capital letter?', 'text-transform:capitalize', 'text-transform:uppercase', 'You can not do that with CSS', 'first', 'easy'),
(15, 'Which property is used to change the font of an element?', 'font', 'Both font-family and font can be used', 'font-family', 'second', 'easy'),
(16, 'How do you make the text bold?', 'font-weight:bold;', 'font:bold;', 'style:bold;', 'first', 'easy'),
(17, 'Which property is used to change the left margin of an element?', 'margin-left', 'indent', 'padding-left', 'first', 'easy'),
(18, 'How do you make a list that lists its items with squares?', 'list: square;', 'list-type: square;', 'list-style-type: square;', 'third', 'easy'),
(19, 'HHow do you select an element with id \"demo\"?', '#demo', '.demo', '*demo', 'first', 'easy'),
(20, ' How do you select elements with class name \"test\"?', '#test', '.test', '*test', 'second', 'easy'),
(21, 'Select the property that is used to change the list style to show roman numerals instead of normal numbers?', 'list-type:roman;', 'list-style-type:upper-roman;', 'list-style:roman;', 'second', 'medium'),
(22, 'For users that use the tab key to navigate websites, what property represents this way of moving from one element to another?', 'a:focus', 'a:link', ' a:visited', 'first', 'medium'),
(23, 'In CSS, Select the property to set an image in a list instead of a standard bullet?', 'image-list:', ' list-style-image:', 'list-image-src:', 'second', 'medium'),
(24, 'In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element?', 'display:inline;', ' display:left;', 'display:horizontal;', 'first', 'medium'),
(25, 'Are CSS property names case-sensitive?', 'yes', 'no', 'someone', 'second', 'medium'),
(26, 'Does setting margin-top and margin-bottom have an affect on an inline element?', 'yes', 'no', 'someone', 'second', 'medium'),
(27, 'If you have a <p> element with font-size: 10rem, will the text be responsive when the user resizes / drags the browser window?', 'yes', 'no', 'may be', 'second', 'medium'),
(28, 'The pseudo class :checked will select inputs with type radio or checkbox, but not <option> elements.', 'true', 'false', 'I do not know', 'second', 'medium'),
(29, 'In a HTML document, the pseudo class :root always refers to the <html> element', 'true', 'false', 'I do not know', 'first', 'medium'),
(30, 'The translate() function can move the position of an element on the z-axis.', 'true', 'false', 'I do not know', 'second', 'medium'),
(31, 'In the following code, what value is given for the right margin: margin: 5px 12px 4px 8px;', '5px', '12px', '8px', 'second', 'medium'),
(32, 'Which of the following selector selects all paragraph elements whose lang attribute contains values that are exactly \"fr\", or begin with \"fr-\"?', 'p[lang]', 'p[lang=\"fr\"]', 'p[lang|=\"fr\"]', 'third', 'medium'),
(33, 'Which of the following defines 1% of viewport height?', 'px', 'vw', 'vh', 'third', 'medium'),
(34, 'Which of the following property of a table element specifies the width that should appear between table cells?', ':border-collapse', ':caption-side', ':border-spacing', 'third', 'medium'),
(36, 'Which of the following value of cursor shows it as an arrow?', 'default', 'pointer', 'crosshair', 'first', 'hard'),
(37, 'Which of the following is correct about Hex Code format of CSS colors?', 'The first two digits(RR) represent a red value.', 'The next two are a green value(GG)', 'All of the above.', 'third', 'hard'),
(38, 'Which of the following is correct about Browser Safe Colors?', 'These are 216 colors which are supposed to be most safe and computer independent colors.', 'These colors vary from hexa code 000000 to FFFFFF.', 'All of the above.', 'third', 'hard'),
(39, 'Which of the following property is used to set the text shadow around a text?', 'text-shadow', 'text-decoration', 'text-transform', 'first', 'hard'),
(40, 'Which of the following is a component of CSS style rule?', 'Selector', 'Property', 'All of the above.', 'third', 'hard');

-- --------------------------------------------------------

--
-- Структура на таблица `html`
--

CREATE TABLE `html` (
  `id` int(1) NOT NULL,
  `question` varchar(500) CHARACTER SET utf8 NOT NULL,
  `first` varchar(300) CHARACTER SET utf8 NOT NULL,
  `second` varchar(300) CHARACTER SET utf8 NOT NULL,
  `third` varchar(300) CHARACTER SET utf8 NOT NULL,
  `correct` varchar(20) CHARACTER SET utf8 NOT NULL,
  `level` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Схема на данните от таблица `html`
--

INSERT INTO `html` (`id`, `question`, `first`, `second`, `third`, `correct`, `level`) VALUES
(1, 'What does HTML stand for?', 'Hyperlinks and Text Markup Language', ' Home Tool Markup Language', ' Hyper Text Markup Language', 'third', 'easy'),
(2, 'Who is making the Web standards?', 'The World Wide Web Consortium', 'Google', 'Microsoft', 'first', 'easy'),
(3, 'What is the correct HTML element for inserting a line break?', '<break>', '<lb>', '<br>', 'third', 'easy'),
(4, 'What is the correct HTML for adding a background color?', '<body style=\"background-color:yellow;\">', '<background>yellow</background>', '<body bg=\"yellow\">', 'first', 'easy'),
(5, 'Choose the correct HTML element to define important text', '<strong>', '<i>', '<important>', 'first', 'easy'),
(6, 'Choose the correct HTML element to define emphasized text', '<em>', '<i>', '<italic>', 'first', 'easy'),
(7, 'What is the correct HTML for creating a hyperlink?', '<a name=\"http://www.w3schools.com\">W3Schools.com</a>', '<a url=\"http://www.w3schools.com\">W3Schools.com</a>', '<a href=\"http://www.w3schools.com\">W3Schools</a>', 'third', 'easy'),
(8, 'Which character is used to indicate an end tag?', '*', '<', '/', 'third', 'easy'),
(9, 'How can you open a link in a new tab/browser window?', '<a href=\"url\" target=\"new\">', '<a href=\"url\" target=\"_blank\">', '<a href=\"url\" new>', 'second', 'easy'),
(10, 'Which of these elements are all <table> elements?', '<table><head><tfoot>', '<thead><body><tr>', '<table><tr><td>', 'third', 'easy'),
(11, 'Which HTML element is used to specify a footer for a document or section?', '<footer>', '<section>', '<bottom>', 'first', 'easy'),
(12, 'How can you make a numbered list?', '<list>', '<ol>', '<ul>', 'second', 'easy'),
(13, 'What is the correct HTML for making a text input field?', '<input type=\"textfield\">', '<input type=\"text\">', '<textfield>', 'second', 'easy'),
(14, 'What is the correct HTML for making a drop-down list?', '<select>', '<input type=\"text\">', '<input type=\"dropdown\">', 'first', 'easy'),
(15, 'What is the correct HTML for making a text area?', '<textarea>', '<input type=\"textarea\">', '<input type=\"textbox\">', 'first', 'easy'),
(16, 'What is the correct HTML for inserting an image?', '<img alt=\"MyImage\">image.gif</img>', '<img src=\"image.gif\" alt=\"MyImage\">', '<image src=\"image.gif\" alt=\"MyImage\">', 'second', 'easy'),
(17, 'What is the correct HTML element for playing video files?', '<movie>', '<media>', '<video>', 'third', 'easy'),
(18, 'Which HTML element defines the title of a document?', '<title>', '<head>', '<meta>', 'first', 'easy'),
(19, 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?', 'src', 'alt', 'title', 'second', 'easy'),
(20, 'Which doctype is correct for HTML5?', '<!DOCTYPE html>', '<!DOCTYPE HTML5>', '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\" \"http://www.w3.org/TR/html5/strict.dtd\">', 'first', 'easy'),
(21, 'What is an element that does not having a closing tag called?', 'Tag', 'Empty element', 'Closed element', 'second', 'medium'),
(22, 'What should be the first tag in any HTML document?', ' <head>', '<document>', ' <html>', 'third', 'medium'),
(23, 'Tags and test that are not directly displayed on the page are written in _____ section.', '<title>', '<body>', '<head>', 'first', 'medium'),
(24, 'How can you make an e-mail link?', '<mail href=\"xxx@yyy\">', '<a href=\"mailto:xxx@yyy\">', '<mail>xxx@yyy</mail>', 'second', 'medium'),
(25, 'Which of the following is not a pair tag?', '<p>', '< u >', '<img>', 'third', 'hard'),
(26, 'Which of the following is true about HTML 5?', 'HTML5 is the next major revision of the HTML standard superseding HTML 4.01, XHTML 1.0, and XHTML 1.1.', 'HTML5 is a standard for structuring and presenting content on the World Wide Web.', 'All of the above', 'third', 'medium'),
(27, 'Which of the following is correct about Web form 2.0 in HTML5?', 'Form elements and attributes in HTML5 provide a greater degree of semantic mark-up than HTML4.', 'Form elements and attributes in HTML5 remove a great deal of the need for tedious scripting and styling that was required in HTML4.', 'All of the above', 'third', 'medium'),
(28, 'Which of the following input control represents a date and time (year, month, day, hour, minute, second, fractions of a second) encoded according to ISO 8601 with no time zone information in Web Form 2.0?', 'datetime-local', 'date', 'datetime', 'first', 'medium'),
(29, 'Which of the following is true about Local Storage in HTML5?', 'HTML5 introduces the localStorage attribute which would be used to access a page is local storage area without no time limit.', 'this local storage will be available whenever you would use that page.', 'Both of the above.', 'tird', 'medium'),
(30, 'When a session storage data gets deleted in HTML5?', 'If you want to clear all settings, you need to call localStorage.clear() method.', 'The Session Storage Data would be deleted by the browsers immediately after the session gets terminated.', 'Both of the above.', 'second', 'medium'),
(31, 'Which of the following method retrieves the current geographic location of the user?', 'geolocation.clearPosition()', 'geolocation.getCurrentPosition()', 'geolocation.watchPosition()', 'second', 'medium'),
(32, 'Which of the following attribute is used to group items?', 'itemprop', 'itemcheck', 'itemgroup)', 'first', 'medium'),
(33, 'Which of the following attribute triggers event at the end of a drag operation?', 'ondragend', 'ondrag', 'ondragleave', 'first', 'medium'),
(34, 'Which of the following attribute triggers event when an element leaves a valid drop target?', 'ondrag', 'ondragleave', 'ondragover', 'second', 'medium'),
(35, 'Which of the following attribute triggers event when the document goes offline?', 'onloadstart', 'onoffline', 'onmessage', 'second', 'medium'),
(36, 'Which of the following input control represents a date consisting of a year and a week number encoded according to ISO 8601 in Web Form 2.0?', 'time', 'week', 'range', 'second', 'medium'),
(37, 'Which of the following is true about audio tag in HTML5?', 'Commonly used audio formats ogg, mp3 and wav are supported.', 'You can use <source> tag to specify media along with media type and many other attributes.', 'All of the above.', 'third', 'medium'),
(38, 'Which of the following attribute specifies if the user can edit the element is content or not?', 'contenteditable', 'editable', 'contextmenu', 'first', 'medium'),
(39, 'Which of the following attribute triggers event when a media resource element suddenly becomes empty?', 'onemptied', 'ondrop', 'ondurationchange', 'first', 'medium'),
(40, 'Which of the following tag represents an independent piece of content of a document in HTML5?', 'article', 'section', 'aside', 'first', 'hard'),
(41, 'Which of the following is true about canvas tag in HTML5?', 'HTML5 element <canvas> gives you an easy and powerful way to draw graphics using JavaScript.', 'It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations.', 'Both of the above.', 'third', 'hard'),
(42, 'Which of the following tag can be used to mark up a conversation in HTML5?', 'dialog', 'figure', 'footer', 'first', 'hard'),
(43, 'Which of the following tag insists to have a value in an input control in HTML5?', 'required', 'placeholder', 'output', 'first', 'hard'),
(44, 'Which form method will put the form information into the URL string?', 'Get ', 'Post', 'Both of the above.', 'first', 'hard');

-- --------------------------------------------------------

--
-- Структура на таблица `js`
--

CREATE TABLE `js` (
  `id` int(1) NOT NULL,
  `question` varchar(500) CHARACTER SET utf8 NOT NULL,
  `first` varchar(300) CHARACTER SET utf8 NOT NULL,
  `second` varchar(300) CHARACTER SET utf8 NOT NULL,
  `third` varchar(300) CHARACTER SET utf8 NOT NULL,
  `correct` varchar(20) CHARACTER SET utf8 NOT NULL,
  `level` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Схема на данните от таблица `js`
--

INSERT INTO `js` (`id`, `question`, `first`, `second`, `third`, `correct`, `level`) VALUES
(1, 'Inside which HTML element do we put the JavaScript?', '<javascript>', '<script>', '<js>', 'second', 'easy'),
(2, 'What is the correct JavaScript syntax to change the content of the HTML element below?\r\n\r\n\r\n<p id=\"demo\">This is a demonstration.</p>', 'document.getElementById(\"demo\").innerHTML = \"Hello World!\";', 'document.getElement(\"p\").innerHTML = \"Hello World!\";', '#demo.innerHTML = \"Hello World!\";', 'first', 'easy'),
(3, 'Where is the correct place to insert a JavaScript?', 'The <head> section', 'Both the <head> section and the <body> section are correct', 'The <body> section', 'second', 'easy'),
(4, 'What is the correct syntax for referring to an external script called \"xxx.js\"?', '<script href=\"xxx.js\">', '<script name=\"xxx.js\">', '<script src=\"xxx.js\">', 'third', 'easy'),
(5, 'How do you write \"Hello World\" in an alert box?', 'alert(\"Hello World\");', 'msg(\"Hello World\");', 'alertBox(\"Hello World\");', 'first', 'easy'),
(6, 'How do you create a function in JavaScript?', 'function myFunction()', 'function:myFunction()', 'function = myFunction()', 'first', 'easy'),
(7, 'How do you call a function named \"myFunction\"?', 'call function myFunction()', 'call myFunction()', 'myFunction()', 'third', 'easy'),
(8, 'How to write an IF statement in JavaScript?', 'if (i == 5)', 'if i = 5 then', 'if i = 5', 'first', 'easy'),
(9, 'How to write an IF statement for executing some code if \"i\" is NOT equal to 5?', 'if (i <> 5)', 'if i <> 5', 'if (i != 5)', 'third', 'easy'),
(10, 'How does a WHILE loop start?', 'while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10)', 'third', 'easy'),
(11, ' How does a FOR loop start?', 'for (i = 0; i <= 5; i++)', 'for (i <= 5; i++)', 'for (i = 0; i <= 5)', 'first', 'easy'),
(12, 'How can you add a comment in a JavaScript?', '//This is a comment', '\'This is a comment', '<!--This is a comment-->', 'first', 'easy'),
(13, 'What is the correct way to write a JavaScript array?', 'var colors = [\"red\", \"green\", \"blue\"]', 'var colors = (1:\"red\", 2:\"green\", 3:\"blue\")', 'var colors = \"red\", \"green\", \"blue\"', 'first', 'easy'),
(14, 'How do you round the number 7.25, to the nearest integer?', 'round(7.25)', 'Math.rnd(7.25)', 'Math.round(7.25)', 'thirdd', 'easy'),
(15, 'How do you find the number with the highest value of x and y?', 'Math.max(x, y)', 'Math.rnd(7.25)', 'Math.ceil(x, y)', 'first', 'easy'),
(16, 'How can you detect the clients browser name?', 'navigator.appName', 'client.navName', 'browser.name', 'first', 'easy'),
(17, 'Which event occurs when the user clicks on an HTML element?', 'onclick', 'onmouseclick', 'onmouseover', 'first', 'easy'),
(18, 'How do you declare a JavaScript variable?', 'variable carName;', 'v carName;', 'var carName;', 'third', 'easy'),
(19, 'Which operator is used to assign a value to a variable?', '-', '=', '*', 'second', 'easy'),
(20, 'What will the following code return: Boolean(10 > 9)', 'NaN', 'true', 'false', 'second', 'easy'),
(21, 'Which of the following is a disadvantage of using JavaScript?', 'Client-side JavaScript does not allow the reading or writing of files.', 'JavaScript does not have any multithreading or multiprocess capabilities', 'All of the above.', 'third', 'medium'),
(22, 'Which built-in method combines the text of two strings and returns a new string?', 'concat()', 'append()', 'append()', 'first', 'medium'),
(23, 'All user-defined objects and built-in objects are descendants of an object called Object?', 'true', 'false', 'I dont know', 'first', 'medium'),
(24, 'Which of the following function of String object returns the character at the specified index?', 'charAt()', 'charCodeAt()', 'indexOf()', 'first', 'medium'),
(25, 'Which of the following function of String object executes the search for a match between a regular expression and a specified string?', 'match()', 'search()', 'replace()', 'second', 'medium'),
(26, 'Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?', 'toLowerCase()', 'toLocaleLowerCase()', 'toString()', 'second', 'medium'),
(27, 'Which of the following function of Array object removes the last element from an array and returns that element?', 'push()', 'pop()', 'push()', 'second', 'medium'),
(28, 'Which of the following function of Array object adds and/or removes elements from an array?', 'splice()', 'sort()', 'unshift()', 'first', 'medium'),
(29, 'Can you access Cookie using javascript?', 'true', 'false', 'I dont know', 'first', 'medium'),
(30, 'Can you pass a anonymous function as an argument to another function?', 'true', 'false', 'I dont know', 'first', 'medium'),
(31, 'Which built-in method calls a function for each element in the array?', 'while()', 'forEach()', 'loop()', 'second', 'hard'),
(32, 'Which built-in method sorts the elements of an array?', 'order()', 'sort()', 'All of the above.', 'second', 'hard'),
(33, 'Which of the following function of Number object returns a string value version of the current number?', 'toString()', 'toFixed()', 'toPrecision()', 'first', 'hard'),
(34, 'Which of the following is true about typeof operator in JavaScript?', 'Its value is a string indicating the data type of the operand', 'The typeof is a unary operator that is placed before its single operand, which can be of any type.', 'Both of the above.', 'third', 'hard'),
(35, 'Which of the following is a valid type of function javascript supports?', 'named function', 'anonymous function', 'Both of the above.', 'third', 'hard'),
(36, 'Which of the following is a valid type of function javascript supports?', 'named function', 'anonymous function', 'Both of the above.', 'third', 'medium');

-- --------------------------------------------------------

--
-- Структура на таблица `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` char(32) NOT NULL,
  `email` varchar(45) NOT NULL,
  `points` decimal(10,0) NOT NULL,
  `games` decimal(10,0) NOT NULL,
  `wins` decimal(10,0) NOT NULL,
  `html` varchar(20) NOT NULL,
  `css` varchar(20) NOT NULL,
  `js` varchar(20) NOT NULL,
  `bomb` varchar(45) NOT NULL,
  `hook` varchar(45) NOT NULL,
  `pipe` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`, `email`, `points`, `games`, `wins`, `html`, `css`, `js`, `bomb`, `hook`, `pipe`) VALUES
(1, 'ani', 'aaaaaa', 'anna_mihailova@abv.bg', '0', '22', '13', '0', '0', '0', '5', '5', '0'),
(11, 'ani1', 'aaaaaa', 'anichkka@abv.bg', '20', '0', '0', '1', '1', '1', '5', '5', '0'),
(12, 'ani2', 'aaaaaa', 'banichkka@abv.bg', '0', '0', '0', '2', '2', '2', '5', '5', '0'),
(13, 'ani3', 'aaaaaa', 'anna.a.mihailova@gmail.com', '0', '0', '0', '3', '3', '3', '0', '0', '0'),
(14, 'annn', 'aaaaaa', 'aaa@abv.bg', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(15, 'aniddd', 'aaaaaa', 'anfva@abv.bg', '0', '0', '0', '0', '0', '0', '0', '0', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `css`
--
ALTER TABLE `css`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `html`
--
ALTER TABLE `html`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `js`
--
ALTER TABLE `js`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
