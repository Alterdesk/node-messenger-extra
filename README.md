# Node Messenger Extra

Extra node helper functions for the messenger

## Setup
Require the extra object
```javascript
var extra = require('node-messenger-extra');
```

## Escape a string to use for regular expression
```javascript
// Text to search for
var searchText = "Hello?";
// Escaped to "Hello\\?"
var escapedText = extra.escapeRegex(searchText);
// Create regex to search with
var regex = new RegExp(escapedText, 'gi');
```

## Replace all instances of a string
```javascript
// Filename with spaces
var filename = "Photo of my cat.jpg";
// Filename changed to "Photo_of_my_cat.jpg"
filename = extra.replaceAll(filename, " ", "_");
```

## Capitalize a word or sentence
Capitalize the first letter in a string
```javascript
// String that starts with lowercase letter
var text = "messenger";
// Capitalized string "Messenger"
var capitalized = extra.capitalizeFirstLetter(text);
```

## Capitalize last name
Capitalize only the last word in a string
```javascript
// Last name in lowercase
var text = "de boer";
// Capitalized last name "de Boer"
var capitalized = extra.capitalizeLastName(text);
```

## Format a mention to a string
```javascript
// Format for a mentioned all tag
var formatAllMembers = "All members";
// Example user mention data from the messenger
var mention = {};
mention["id"] = <USER_UUID>;
mention["first_name"] = "Piet";
mention["last_name"] = "de Boer";
mention["company_name"] = "Messenger";
// Formatted as "Piet de Boer (Messenger)"
var formattedUser = extra.mentionToUserString(mention, formatAllMembers);

// Example all mention data from the messenger
var allMention = {};
allMention["id"] = "@all";
// Formatted as "All Members"
var formattedAll = extra.mentionToUserString(mention, formatAllMembers);
```

## Round a number
Round a number by a given precision of decimals
```javascript
// A fraction
var pi = Math.PI;
// Rounded to "3.14"
var rounded = extra.round(pi, 2);
```

## Regex
To make user input validation easier, regex for text, numbers, phone numbers, email addresses and mentioned all are 
provided.

### Text
Text detection *(non-whitespace)*
```javascript
// Whitespace will fail
var negative = "  ";
var fail = negative.match(extra.getTextRegex());
// Non-whitespace will pass
var postive = "example";
var pass = positive.match(extra.getTextRegex());
```

### Number
Number detection *(integer)*
```javascript
// Text will fail
var negative = "two";
var fail = negative.match(extra.getNumberRegex());
// Number will pass
var postive = "2";
var pass = positive.match(extra.getNumberRegex());
```

### Phone number
Phone number detection *(+311234567890)*
```javascript
// Invalid phone number will fail
var negative = "9238479823578757";
var fail = negative.match(extra.getPhoneRegex());
// Valid phone number will pass
var postive = "+311234567890";
var pass = positive.match(extra.getPhoneRegex());
```

### Email address
Email address detection *(user@example.com)*
```javascript
// Invalid email address will fail
var negative = "a@b.c";
var fail = negative.match(extra.getEmailRegex());
// Valid email address will pass
var postive = "user@example.com";
var pass = positive.match(extra.getEmailRegex());
```

### Mentioned all
To detect a *@All Members* in the messenger this regex can be used
```javascript
// Invalid mention all will fail
var negative = "Hello @All Members";
var fail = negative.match(extra.getMentionedAllRegex());
// Valid mention all will pass
var postive = "Hello [mention=@all]";
var pass = positive.match(extra.getMentionedAllRegex());
```