// node dashboard.js in the terminal to look at this.
// 1. Count the number of records in the "Current Quarter Details" table.
//need to count the number of rows minus the heading row.
// var tableRows = document.querySelectorAll('tr').length -1;
// console.log(tableRows);

// he did it this way:
var rows = document.querySelectorAll('tbody tr');
console.log(rows.length);

        //could also do the scope: ('.table tbody tr'); wouldn't need > unless you wanted to say the immediate child, and in this case, we didn't want just those because we could see there weren't any nested rows.

        // another way to do it is getElementsByTagName . . . sophie did this.

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
    // did this a couple of ways. First way sets the querySelectAll as a var that I can use. I could then use the imgSwitch var with the slot number to change each src and alt description and consolelog that one var and see all of them.

//he did it this way in class, too.
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

// this one is slower because it is querying multiple times.
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

            //tried changing them individually. I had trouble getting it to work, Collin says this should be okay, though.
            // var moneyEllipses = document.querySelectorAll('.textMuted'); //querySelectorAll looks through all of the html, finds the textMuted class items, and puts them in an array called moneySet. Then can access each item with the [#].
                // moneyEllipses[0].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);
                // moneyEllipses[1].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);
                // moneyEllipses[2].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);
                // moneyEllipses[3].innerHTML = '$' + (Math.ceil(Math.random() * 1000) /10);

                // console.log(moneyEllipses);

            //Collin has fixed this so it would work now. //QQRagen/Collin: still doesn't work. 
            // var moneySet = document.querySelectorAll('.textMuted');
            //     moneySet.forEach(function(moneyItem) {
            //         moneyItem.innerHTML= '$' + (Math.ceil(Math.random() * 1000) /10);
            //     });

            //     console.log(moneySet);

//how he did it in class: -- was going to show us how to put in the commas within the price by chunking it up into threes or to go get accounting.js and bring it into the project. But he wanted to move on so that he could show us # 9.
var currencies = document.querySelectorAll('.text-muted');

currencies.forEach(function(currency) {
    var randomCurrency = Math.round(Math.random() * 20000);
    currency.innerHTML = '$' + randomCurrency + '.00'
})
console.log(currencies);


// 4. Change the currently selected left side menu item from Overview to Reports.
    // collin made this work.
    // NEEDED TO LOOK FOR THE .nav-sidebar li-s . . . was getting all of the nav li-s from the whole page. Collin suggested using the li:nth-child 1 and 2 to target the specific ones to first remove active and then add it. 
            var menuOption = document.querySelector('.nav-sidebar li:nth-child(1)');
            menuOption.classList.remove('active');
            var menuOption = document.querySelector('.nav-sidebar li:nth-child(2)');
            menuOption.classList.add('active');
            console.log(menuOption);

// 5. Set the default search input value to "Q4 sales".
    //Not the placeholder . . . it is a search that is preset to come up when the page loads.
            var searchGray = document.querySelector('.form-control');
            searchGray.value = 'Q4 sales';
            console.log(searchGray);


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
    //Originally had querySelectorAll on it, and that would have come have come back as an array. and you can't do anything with an array. if have an array, would have to do a for each loop.  But since we only have one table, there's not point in doing that. (uless you want to complicate it.)
//Don't need a dog in front of table-hover because of "classList" telling it that it is a class already.
            var tableHover = document.querySelector('.table');
            tableHover.classList.add('table-hover');
            console.log(tableHover);

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
//one way to do it 
            var tableRows1 = document.querySelectorAll('tbody tr:nth-child(7), tbody tr:nth-child(8), tbody tr:nth-child(9), tbody tr:nth-child(10)');

            tableRows1.forEach(function(tableRow) {
                tableRow.classList.add('success');
            });
            console.log(tableRows1)

//second way to do it. //QQRAGEN, COLLIN: THIS DIDN'T WORK--MADE IT HOVER ON ROWS 8-11.
            // var tableRows2 = document.querySelectorAll('tbody tr');

            // tableRows2.forEach(function(tableRow, rowCount) {
            //     if (rowCount >= 7 && rowCount <= 10) {
            //         tableRow.classList.add('success');
            //     }
            // });
            // console.log(tableRows2)


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
    // search for the theader. Tried this, with the info all on one line.  That didn't do anything.

var tableHeaders = document.querySelectorAll('th');
tableHeaders[0].innerHTML= 'ID';
tableHeaders[1].innerHTML= 'First Name';
tableHeaders[2].innerHTML= 'Last Name';
tableHeaders[3].innerHTML= 'Department';
tableHeaders[4].innerHTML= 'Client';

console.log(tableHeaders);

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

    // I started this. And got something turned into an array. But beyond that, I had no idea what to even reach for. The numbered steps are what Collin told ManPreet to do during lab.
        // var data = [];
        // var rows = document.querySelectorAll('tbody tr');

        // // 1. loop over the rows with ForEach
        // rows.forEach(function(){
        //     var rowData = {

        //     }
        // })

        // 2. declare a var named object and set it to an object literal
        // 3. set object.id to the row.children[0].innterTExt
        // 4. push the object var into the data array using the push method.

//how he did it in class:
var data = []; // the square brackets are for an array. this is for an empty array that we'll fill in with more code to follow.
var rows = document.querySelectorAll('tbody tr');
// console.log(rows); //do this just to check console log to make sure you got what you wanted.

rows.forEach(function(row) {
    var object = {}; //make an empty object literal. the curly brackets are for objects.
    
    //need to look at row.children.
    // console.log(row.children) // check to see that you got what you wanted.
    
    object.id = Number(row.children[0].innerText.replace(/,/g, '')); // all of the child records that get nested. children property is actually an array. used reg-ex /,/ to get rid of all of the commas. 
   
    // console.log(object); // check in to make sure you got rid of the commas
    // Number converted the text into a string.

//now we convert things into objects and get their text
    object.firstName = row.children[0].innerText;
    object.lastName = row.children[1].innerText;
    object.department = row.children[2].innerText;
    object.client = row.children[3].innerText;
    object.client = row.children[4].innerText;

// could have done it this way--it's probably the more common way. This is the way that I was planning on trying it, based on class notes:
    // var object = {
    //     id: Number(row.children[0].innerText.replace(/,/g, '')),
    //     firsttName: row.children[1].innerText,
    //     lastName: row.children[2].innerText,
    //     department: row.children[3].innerText,
    //     client: row.children[4].innerText,
    // }

    // console.log(object);

    data.push(object); // this is how you push things into your array.
})

console.log(data);


// 10. Make each word in the table capitalized.

//how he did it in class:
var tableText = document.querySelector('table').classList.add('text-capitalize');
console.log(tableText);
//this is the same as saying: 
// document.querySelector('.table').style.textTransform = 'capitalize';
//could also loop through every table cell and replace things to capitlize things. you would have actually inspected it and it would actually capitalize it instead of just styling it to be capitalized.


