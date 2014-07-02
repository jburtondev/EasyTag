//------------------------------------Global space---------------------------------------------//

//Variable containing the first <select> element on the page
var select_elem = document.getElementById("selectTag0");

//Clone of the var 'select_elem'
var select_elem_clone = select_elem.cloneNode(true);

//Variable containing the first input box
var p = document.getElementById("newInput0");

//Variable containing error message for 'export_p_tag()' function
var error_message = "Es funktioniert nicht!";

var count_element = 1;

//Variable containing the new element generated from 'createInputElement()'
var element;

//Works with the 'createInputElement()' function to insert after the current <input> field
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

}

//------------------------------------ End of Global space---------------------------------------------//



//-----------------------------------Add Field Button Function-----------------------------------//

function createInputElement() {
    var select_elem_clone = select_elem.cloneNode(true);
    select_elem_clone.setAttribute("id", "selectTag" + count_element);
    select_elem_clone.setAttribute("style", "float:left;");
    document.body.appendChild(select_elem_clone);
    insertAfter(p, select_elem_clone); //See function 'insertAfter'

    element = document.createElement("input"); //Creates input element
    element.setAttribute("type", "text"); //Sets the element 'type = text'
    element.setAttribute("id", "newInput" + count_element); //Sets the element 'id = newInput'
    element.setAttribute("class", "latestfield");
    element.setAttribute("placeholder", "Enter more text here"); //Sets the element 'placeholder = Enter more text here'
    document.body.appendChild(element); //Appends new element to the body
    console.log("<input> element created");
    count_element++;
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

            var p_export = document.getElementById("p_tag_export").innerHTML = p_export =
                "<" + document.getElementById("selectTag0").value + ">" + p.value +
                "</" + document.getElementById("selectTag0").value + ">";

            p.style.color = "green";

        } else var p_export = document.getElementById("p_tag_export").innerHTML = exportArray();

        p.style.color = "green";

        if (p_export == "<p></p>") {
            console.log("User submitted empty form");
            p.value = "User submitted empty form";
            p.style.color = "red";

        }

    }

};

//-----------------------------------End of 'Convert Tag Button' Function-----------------------------------//



//-----------------------------------Export Array Function-----------------------------------//

//Iterates through the count_element
function exportArray() {

    var j = "";
    for (var i = 0; i < count_element; i++) {
        if (document.getElementById("newInput" + i).value !== "" && document.getElementById("newInput" + i).value !== "") {

            //Create an empty array to store the users input data
            var tagList = [];

            var p = document.getElementById("newInput" + i).value;
            taglist = tagList.push(p);

            //Perform sorting algorithm function
            tagList.sort(

            function (a, b) {
                return a - b;
            });

            tagList.length = 0; //Empty array to prevent duplicate values

            console.log("Pushed newInput " + [i] + " into array " + document.getElementById("selectTag0").value);
            j = j + "<" + document.getElementById("selectTag" + i).value + ">" + document.getElementById("newInput" + i).value + "</" + document.getElementById("selectTag" + i).value + ">" + "\n";

        }
    }



    return j;
}

//-----------------------------------End of Export Array Function-----------------------------------//

//Inherits properties from 'Tag_Exporter', specifically the 'ConvertTag' function
Paragraph_Tag_Exporter = Object.create(Tag_Exporter);
//Paragraph_Tag_Exporter.ConvertTag() will convert the user input into a HTML paragraph tag


//-----------------------------------Take Tag Button Function - *Needs fixing*-----------------------------------//
function takeTag() {

    if (p.value === "") {
        alert("Nothing to output");
    } else {

        var text_output = document.getElementById("p_tag_export");

        var html_holder = document.getElementById("export_box"); //.innerHTML = text_output.value;

        html_holder.innerHTML = html_holder.innerHTML + text_output.innerHTML + "\n";

        text_output.value = "";

        console.log("Emptied main output");

        function removeInputFields() {
            for (i = 1; i < 15; i++) {
                newInputFields = document.getElementById("newInput" + i);
                form_container.removeChild(newInputFields);
                selectTagFields = document.getElementById("selectTag" + i);
                form_container.removeChild(selectTagFields);

                resetFirstInput = document.getElementById("newInput0").value = "";

            }
        }
        removeInputFields();
    }

}
//-----------------------------------End of 'Take Tag' Button Function - *Needs fixing*-----------------------------------//
