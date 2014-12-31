/*
 * Copyright (c) 2014 www.jjburton.com All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*
 * Implements module pattern:
 * http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
 */

var EasyTag = (function() {

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
    var insertAfter = function(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

    }

    return {

        createInputElement: function() {
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
            //Increases the style width of the 'big_box' css class 
        },

        convertTag: function() {

            //Reinitialise input color
            p.style.color = "black";

            // 1) Checks if the 'createInputElement()' function has created a new element
            if (typeof element === 'undefined') {
                // 2) If a new <input> element has not been created, export '<p>UsersText</p>'
                var p_export = document.getElementById("p_tag_export")
                    .innerHTML = p_export = "<" + document.getElementById("selectTag0")
                    .value + ">" + p.value + "</" + document.getElementById("selectTag0").value + ">";

                p.style.color = "green";

            } else var p_export = document.getElementById("p_tag_export").innerHTML = EasyTag.exportArray();

            p.style.color = "green";

            if (p_export == "<p></p>") {
                console.log("User submitted empty form");
                p.value = "User submitted empty form";
                p.style.color = "red";

            }

        },

        //Iterates through the count_element
        exportArray: function() {

            var j = "";
            for (var i = 0; i < count_element; i++) {
                if (document.getElementById("newInput" + i).value !== "" && document.getElementById("newInput" + i).value !== "") {

                    //Create an empty array to store the users input data
                    var tagList = [];

                    var p = document.getElementById("newInput" + i).value;
                    taglist = tagList.push(p);

                    //Sorts the input fields
                    tagList.sort(

                        function(a, b) {
                            return a - b;
                        });

                    tagList.length = 0; //Empty array to prevent duplicate values
                    console.log("Pushed newInput " + [i] + " into array " + document.getElementById("selectTag0").value);
                    j = j + "<" + document.getElementById("selectTag" + i)
                    .value + ">" + document.getElementById("newInput" + i)
                    .value + "</" + document.getElementById("selectTag" + i).value + ">" + "\n";

                }
            }

            return j;
        },

        takeTag: function() {

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

    }

})();
