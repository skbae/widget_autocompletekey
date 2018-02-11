# widget_autocompletekey
The standard widget Auto Complete works from a list of Data. Users gives type some characters, and then a list of value appears.
User can then select the final value.
  The Standard Autocomplete use a list of Text, and return a Text.
 
 The Autocomplete key has the same behavior, except it return not a TEXT, but a KEY.
 
 
 <img src="screenShot_autocomplete.jpg"/>
 
 For example, the list of available value may be :
 [  { "country" : "French", "code":"FR" }
	{ "country" : "Germany", "code":"GR" }
	{ "country" : "Italia", "code":"IT" }
	{ "country" : "Span", "code":"SP" }
	{ "country" : "England", "code":"EN" }
 ];
 then the user select Italia, the autocomplete key return "IT" as a result.
 The second advantage of the Automplete key (and it's the main one maybe !) is it's able to display the value "Italia" when the variable contains "IT". So, you can save in the process variable (or the BDM) the code IT. When you want to diplay it on the form, just give "IT" to the widget : it will display Italia to the user.
 
 So, for this point of view, the autocomplete key works like a Select Widget.
 Nota : the autocomplet key return only a Key. So it's not possible to the user to give "My new country" in the widget (in this situation, the widget return a "null" key), where the standard autocomplete return the text (because the standard autocomplete is only here to help the user to give a text).
 
 But because the version of AngularJS bundled in the latest version of BonitaBPM is 1.4.7, this bundled widget doesn't work properly as you expect while you composing Korean. Several work-arounds are known for this issue but still AngularJS version1.x have this issue. I checked that the version 1.2.0 worked but Bonitasoft maybe don't want to downgrade.
 One of the solution I found was here. https://github.com/angular/angular.js/issues/6656/#issuecomment-77684151. There are two way to apply this code block to the INPUT widget bonitasoft provide. The first one is to modify INPUT widget, but because I don't want to touch any codes in the opened source code, I had to think another way and that's the second way. This way is to create a custom widget based on the basic INPUT widget. Then create a .js file and add this file into assets. Even though next version of Bonita BPM is available, just you need to export the custom widget from the old version and import it to the latest one.
