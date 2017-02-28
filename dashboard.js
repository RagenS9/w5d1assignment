// node dashboard.js in the terminal to look at this.
// 1. Count the number of records in the "Current Quarter Details" table.
//need to count the number of rows minus the heading row.
var tableRows = document.querySelectorAll('tr').length -1;
console.log(tableRows);

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
// did this a couple of ways. First way sets the querySelectAll as a var that I can use. I could then use the imgSwitch var with the slot number to change each src and alt description and consolelog that one var and see all of them.
var imgNew = document.querySelectorAll('img');

imgNew[0].src="http://unsplash.it/400?image=1036";
imgNew[0].alt="winter mountain scene";
imgNew[1].src="http://unsplash.it/400?image=976";
imgNew[1].alt="spring flowers";
imgNew[2].src="http://unsplash.it/400?image=900";
imgNew[2].alt="sunset seen through underside of boardwalk on a summer evening";
imgNew[3].src="http://unsplash.it/400?image=924";
imgNew[3].alt="leaves turning colors in the fall";
console.log(imgNew);

//but this is how I started doing it, because I was taking it one photo at a time and just trying to get one thing to work. I did, but saw that the umbrella var is probably the way to go for a group of photos like this. However, I like knowing how to do it separately if I need to, so I'm leaving this in for my own reference. This way, each one got it's own querySelectAll var, and then I used those individual vars to set the src and alt for each once. I then had to console log each one separately. 

// var imgWinter = document.querySelectorAll('img')[0];
// imgWinter.src="http://unsplash.it/400?image=1036";
// imgWinter.alt="winter mountain scene";

// var imgSpring = document.querySelectorAll('img')[1];
// imgSpring.src="http://unsplash.it/400?image=976";
// imgSpring.alt="spring flowers";

// var imgSummer = document.querySelectorAll('img')[2];
// imgSummer.src="http://unsplash.it/400?image=900";
// imgSummer.alt="sunset seen through underside of boardwalk on a summer evening";

// var imgFall = document.querySelectorAll('img')[3];
// imgFall.src="http://unsplash.it/400?image=924";
// imgFall.alt="leaves turning colors in the fall";
// console.log(imgWinter, imgSpring, imgSummer, imgFall);


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
    // Okay . . . been working on this for two hours. Have to move on. It's already 9pm. Help! Console said it was one of those nodeList thingies, but when I tried to make an array, it said it had no items. I went ahead and set it up as I would if there were items, but couldn't figure out how to target these ellipses.
var moneySet = document.querySelectorAll('.textMuted');
moneySet = Array.from(moneySet);
// moneySet.innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10); //tried changing all four at once. nope.

//tried changing them individually. nope.
// moneySet[0].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);
// moneySet[1].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);
// moneySet[2].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);
// moneySet[3].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);

//tried a for loop, but that broke the whole page, so it had to die.
// moneySet.forEach(function( {
//     innerHTML= '$' + (Math.ceil(Math.random() * 1000) /10);
// });

console.log(moneySet);


// 4. Change the currently selected left side menu item from Overview to Reports.
// can't get this one to work, either. it made the one in blue totally disappear. And didn't add the selected highlighting to the next one. And I have no idea why these aren't places 0 and 1. I couldn't get the console log to show anything so I just guessed at numbers until something changed.
var menuOption = document.querySelectorAll('.nav li');
menuOption[3].classList.remove('sr-only');//need to remove <span class="sr-only">(current)</span>; to the first list item
// menuOption[3].classList.add('icon-bar'); // add this back in???
menuOption[4].classList.add('sr-only');//need to add <span class="sr-only">(current)</span> to the second list item
console.log(menuOption);

// 5. Set the default search input value to "Q4 sales".
//I don't know what this question means. are you talking about the grayed-out thing that says "Search..."? If that's what you mean, I tried to target the class, form-control and reset its placeholder. It didn't do anything. tried both formControl and form-control.
var searchGray = document.querySelectorAll('.form-control');
searchGray = Array.from(searchGray); //thought maybe it was one of those nodeList thingies.
searchGray.placeholder = 'Q4 sales';
console.log(searchGray);
//it shows up in the console log, but nothing changed on the actual page. 


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
//well, that didn't work.
var tableHover = document.querySelectorAll('.table');
tableHover.classList.add('.table-hover');
console.log(tableHover);


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
//i literally can't think anymore.  This assignment has broken me.
var tableSuccess = document.querySelectorAll('table');

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

// var data = [];
var rows = document.querySelectorAll('tbody tr');
rows = Array.from(rows);
console.dir(rows);

// console.log(rows);
// console.log(rows[0].filter);

// console.log(rows)
// // 1. loop over the rows with ForEach
// rows.forEach(function(){

// })
// }

// 2. declare a var named object and set it to an object literal
// 3. set object.id to the row.children[0].innterTExt
// 4. push the object var into the data array using the push method.


// 10. Make each word in the table capitalized.


