//Create an empty array to store the users input data
tagList = [];

//Variable containing the first input box
var p = document.getElementById("p_tag1");

//Variable containing error message for 'export_p_tag()' function
var error_message = "Es funktioniert nicht!";

//Value of the '<p></p>' character length
var tag_val = 7;

//Variable containing the new element generated from 'createInputElement()'
var element;

//Works with the 'createInputElement()' function to insert after the current <input> field
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


//Function thats creates  a new '<input>' element
function createInputElement() {
    element = document.createElement("input"); //Creates input element
    element.setAttribute("type", "text"); //Sets the element 'type = text'
    element.setAttribute("id", "newInput"); //Sets the element 'id = newInput'
    element.setAttribute("placeholder", "Enter more text here"); //Sets the element 'placeholder = Enter more text here'
    document.body.appendChild(element); //Appends new element to the body
    console.log("<input> element created");

    //Variable containing the new element
    var i = document.getElementById("newInput"); //Variable containing the new element

    insertAfter(p, element); //See function 'insertAfter'
    console.log("Inserted after p 'Enter text here'");
    //Increases the style width of the 'big_box' class
    var box_big = document.querySelector(".box_big").style.width = "407px";
	
	if (i) {
		var change = document.getElementById("p_tag_btn").innerHTML = "Remove button";
	} 
	
}



//Function that exports the <input> text within tags'<p>UsersText</p>
Tag_Exporter = {
    ConvertTag: function () {

        p.style.color = "black"; //Initialise/Reinitialise the input color to black

        /*	
						Runs conditional logic: 
							...This sequence is documented in the below code
							1) Checks if the 'createInputElement()' function has created a new element
							2) If a new <input> element has not been created, export '<p>UsersText</p>'
							3) If the new <input> element has been created then export both ' tagList[0] ' & ' tagList[1]'	
					*/

        // 1) Checks if the 'createInputElement()' function has created a new element
        if (typeof element === 'undefined') {
            // 2) If a new <input> element has not been created, export '<p>UsersText</p>'
            var p_export = document.getElementById("p_tag_export").innerHTML = p_export = "<p>" + p.value + "</p>";
            p.style.color = "green";

            if (p_export == "<p></p>") {
                console.log("User submitted empty form");
                p.value = "Empty form submitted...";
                p.style.color = "red";

            }

        } else {

            var newField = document.getElementById("newInput").innerHTML = element.value; //Variable containing the new element
            tagList.push(p.value, newField); // Stores data pushed from p_value 
            tagList.toString(); //Converts the tagList array to a string
            //3) If the new <input> element has been created then export both ' tagList[0] ' & ' tagList[1]'
            var p_export = document.getElementById("p_tag_export").innerHTML = "<p>" + tagList[0] + "</p>" + '\n' + "<p>" + tagList[1] + "</p>";

        }

        console.log(p_export.length);

    }
}

//Inherits properties from 'Tag_Exporter', specifically the 'ConvertTag' function
Paragraph_Tag_Exporter = Object.create(Tag_Exporter);
//Paragraph_Tag_Exporter.ConvertTag() will convert the user input into a HTML paragraph tag

//Function to take the tag(s) output, create a new 'textbox' element and place it there *Needs fixing*
function take_tag() {
    make_box = document.createElement("textbox"); //Creates <input> element
    make_box.setAttribute("id", "take_tag");
    console.log("TextBox Element created, with id added");
    make_box_text = document.getElementById("take_tag");
    document.body.appendChild(make_box);
}
