// The Form Data
// Write your code below this array
var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
// this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character

// Looping
// Sample of how to loop over the formData
// for(let i=0; i<formData.length; i++){

  // Check your dev tools console for what the items in formData have
  // console.log(formData[i])

for (var i = 0; i < formData.length; i++) {
   let form = document.querySelector("form")
   let obj = formData[i];
   let text;
   if (obj.options.length === 0) {
    text = '<input class="look-pretty" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
   } else {
    text = '<input class="look-pretty" options="' + obj.options[0].label +'" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
   }
   form.insertAdjacentHTML("beforeend", text);
  }


  for (var i = 0; i < formData.length; i++) {
   let form = document.querySelector("form")
   let obj = formData[i];
   let text;
   if (obj.options.length === 0) {
    text = '<input type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'"><br>'
 }  else {
    text = '<select>';
    for (var i = 0; i < obj.options.length; i++) {
        let currOption = obj.options[i];
        text += '<option value="' + currOption.value + '">' + currOption.label + </option>';
}
    text += '</select>''
}
    form.insertAdjacentHTML("beforeend", text);
}
