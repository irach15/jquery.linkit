/*********** 
name: LinkIt
author: Iryna Charkashyna
version: 0.1.0
license: MIT
***********/


/*****
*** validation passed
link Validate Your Manifest File Here
Upload your manifest file to check for common errors:  
Since this tool uses the new HTML5 FileReader API to look at the file contents without actually uploading your file to the server, you'll need a modern browser like Chrome, Safari, Firefox, Opera or IE10.

Congratulations, your manifest file is valid.

****/

// passing jQuery as a parameter, so we don't need to use on document ready
(function($) {
    $.fn.linkIt = function(options) {
        // to test plugin
        //alert(this.html());
        
        // default settings
        var settings = $.extend({
            href: null, // null by default
            text: null,
            target: '_self'
        }, options);
        
        // validate
        if(settings.href == null) {
            console.log('you need an href for plugin to work');
            return this;
        }
        
        return this.each(function() {
            var obj = $(this);
            // checking if the text is empty
            if(settings.text == null) {
                settings.text = obj.text; // use the actual text
            }
            
            // add link and chain with text
            obj.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });
        
        
    }
 }(jQuery));
