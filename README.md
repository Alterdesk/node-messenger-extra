# Node Messenger Extra

Extra node helper functions for the messenger

Dependencies
* [moment](https://github.com/moment/moment)

## Setup
Require the extra object
```javascript
var extra = require('node-messenger-extra');
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

## Round a number
Round a number by a given precision of decimals
```javascript
// A fraction
var pi = Math.PI;
// Rounded to "3.14"
var rounded = extra.round(pi, 2);
```

## Format a date
Format date to "LLLL" with "en-US"
```javascript
// A date
var date = Date.now();
// Formatted string "Thursday, Febuari 20, 2018 8:30 AM"
var formatted = extra.formatDate(date);
```

Format date to "D MMMM YYYY, LTS" with "nl-NL"
```javascript
// A date
var date = Date.now();
var locale = "nl-NL";
var format = "D MMMM YYYY, LTS";
// Formatted string "20 februari 2018, 8:30:45"
var formatted = extra.formatDate(date, locale, format);
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