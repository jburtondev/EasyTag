//------------------------------------Global space---------------------------------------------//

//Sets the main <textbox> height and width
var box_big = document.getElementById("p_tag_export").style.width = 276 + "px";
document.getElementById("p_tag_export").style.height = 276 + "px";

//Variable containing the first input box
var p = document.getElementById("newInput0");

//Variable containing error message for 'export_p_tag()' function
var error_message = "Es funktioniert nicht!";

//Value of the '<p></p>' character length
var tag_val = 7;

var countElement = 1;

//Variable containing the new element generated from 'createInputElement()'
var element;

//Works with the 'createInputElement()' function to insert after the current <input> field
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//------------------------------------ End of Global space---------------------------------------------//



//-----------------------------------Add Field Button Function-----------------------------------//

function createInputElement() {
    element = document.createElement("input"); //Creates input element
    element.setAttribute("type", "text"); //Sets the element 'type = text'
    element.setAttribute("id", "newInput" + countElement); //Sets the element 'id = newInput'
    element.setAttribute("class", "latestfield");
    element.setAttribute("placeholder", "Enter more text here"); //Sets the element 'placeholder = Enter more text here'
    document.body.appendChild(element); //Appends new element to the body
    console.log("<input> element created");
    countElement++;
    //Variable containing the new element
    var i = document.getElementById("newInput"); //Variable containing the new element

    insertAfter(p, element); //See function 'insertAfter'
    console.log("Inserted after p 'Enter text here'");
    //Increases the style width of the 'big_box' class 

}


Tag_Exporter = {

    //-----------------------------------'Convert Tag' Button Function-----------------------------------//

    ConvertTag: function () {

        p.style.color = "black"; //Initialise/Reinitialise the input color to black

        /*	
			Runs conditional logic: 
			...This sequence is documented in the below code
			1) Checks if the 'createInputElement()' function has created a new element
			2) If a new <input> element has not been created, export '<tag>UsersText</tag>'
			3) If the new <input> element has been created then export both 'selectTag.value' & 'selectTag.value'	
			*/

        // 1) Checks if the 'createInputElement()' function has created a new element
        if (typeof element === 'undefined') {
            // 2) If a new <input> element has not been created, export '<p>UsersText</p>'

            //Selects the '<select>' id and gets the value
            //Uses this value to then 
            var p_export = document.getElementById("p_tag_export").innerHTML = p_export = "<" + document.getElementById("selectTag").value + ">" + p.value + "</" + document.getElementById("selectTag").value + ">";

            p.style.color = "green";

            if (p_export == "<p></p>") {
                console.log("User submitted empty form");
                p.value = "Empty form page..";
                p.style.color = "red";

            }

        } else {

            var p_export = document.getElementById("p_tag_export").innerHTML = exportArray();

        }

    }

    //-----------------------------------End of 'Convert Tag Button' Function-----------------------------------//

};

//-----------------------------------Export Array Function-----------------------------------//

//Iterates through the countElement
function exportArray() {

    var j = "";
    for (var i = 0; i < countElement; i++) {
        if (document.getElementById("newInput" + i).value !== "") {

            //Create an empty array to store the users input data
            var tagList = [];

            var p = document.getElementById("newInput" + i).value;
            taglist = tagList.push(p);

            //Perfom sorting algorithm function
            tagList.sort(

            function (a, b) {
                return a - b;
            });

            tagList.length = 0; //Empty array to prevent duplicate values
            
            console.log("Pushed newInput[] into array " + document.getElementById("selectTag").value);
            j = j + "<" + document.getElementById("selectTag").value + ">" + document.getElementById("newInput" + i).value + "</" + document.getElementById("selectTag").value + ">" + "\n";

        }
    }
    


    return j;
}

//-----------------------------------End of Export Array Function-----------------------------------//

//Inherits properties from 'Tag_Exporter', specifically the 'ConvertTag' function
Paragraph_Tag_Exporter = Object.create(Tag_Exporter);
//Paragraph_Tag_Exporter.ConvertTag() will convert the user input into a HTML paragraph tag


//-----------------------------------Take Tag Button Function - *Needs fixing*-----------------------------------//
function take_tag() {
    make_box = document.createElement("textbox"); //Creates <input> element
    make_box.setAttribute("id", "take_tag");
    console.log("TextBox Element created, with id added");
    make_box_text = document.getElementById("take_tag");
    document.body.appendChild(make_box);
}
//-----------------------------------End of 'Take Tag' Button Function - *Needs fixing*-----------------------------------//
