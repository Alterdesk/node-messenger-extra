// Description:
//   Node Messenger Extra
//
// Dependencies:
//
// Configuration:
//
// Commands:
//
// Author:
//   Alterdesk

var escapeRegex = function(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

var replaceAll = function(string, search, replace) {
    return string.replace(new RegExp(escapeRegex(search), 'g'), replace);
}

// String to lowercase
var lowercase = function(string) {
    if(string == null || string == "") {
        return string;
    }
    return string.toLowerCase();
}

// String to uppercase
var uppercase = function(string) {
    if(string == null || string == "") {
        return string;
    }
    return string.toUpperCase();
}

// Capitalize first letter in the string
var capitalizeFirstLetter = function(string) {
    if(string == null || string == "") {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Only capitalize last word in the name: "de Boer"
var capitalizeLastName = function(string) {
    if(string == null || string == "") {
        return string;
    }
    var words = string.split(" ");
    var result = "";
    for(var index in words) {
        if(index > 0) {
            result += " ";
        }
        var word = words[index];
        var nextIndex = parseInt(index) + 1;
        if(nextIndex < words.length) {
            result += word;
        } else {
            result += capitalizeFirstLetter(word);
        }
    }
    return result;
}

var mentionToUserString = function(mention, mentionedAllText) {
    if(mention["id"].toUpperCase() === "@ALL") {
        return mentionedAllText || "All members";
    }
    var firstName = mention["first_name"];
    var lastName = mention["last_name"];
    var companyName = mention["company_name"];
    var user = "";
    if(firstName && lastName) {
        user += firstName + " " + lastName;
    } else if(firstName) {
        user += firstName;
    } else if(lastName) {
        user += lastName;
    }
    if(user.length === 0) {
        user += mention["id"];
    }
    if(companyName && companyName.length > 0) {
        user += " (" + companyName + ")";
    }
    return user;
}

// Round a number to a given precision
var round = function(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// Get the regular expression to detect non empty characters
var getNonEmptyRegex = function() {
    return new RegExp(/\S+/, 'gi');
}

// Get the regular expression to detect text
var getTextRegex = function() {
    return new RegExp(/\w+/, 'gi');
}

// Get the regular expression to detect a number
var getNumberRegex = function() {
    return new RegExp(/\d+/, 'g');
}

// Get the regular expression to detect a phone number
var getPhoneRegex = function() {
    return new RegExp(/^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d| 2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]| 4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/, 'g');
}

// Get the regular expression to detect an email address
var getEmailRegex = function() {
    return new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/, 'gi');
}

// Get the regular expression to detect mentioned tags
var getMentionedRegex = function() {
    return new RegExp(/\[mention=(([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})||(@all))\]/, 'gi');
}

// Get the regular expression to detect mentioned user tag
var getMentionedUserRegex = function() {
    return new RegExp(/\[mention=[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}\]/, 'gi');
}

// Get the regular expression to detect the mentioned all tag
var getMentionedAllRegex = function() {
    return new RegExp(/\[mention=@all\]/, 'g');
}

var getUuidRegex  = function() {
    return new RegExp(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/, 'gi');
}

var getFilePathRegex = function() {
    return new RegExp(/^((\/tmp\/messenger-pdfs\/)|(\/tmp\/messenger-downloads\/)|(\/usr\/local\/share\/bots\/resources\/))([0-9a-zA-Z\_\-\/]+(.[0-9a-zA-Z]+)?)+$/, 'g');
}

module.exports = {
    escapeRegex : escapeRegex,
    replaceAll : replaceAll,
    lowercase : lowercase,
    uppercase : uppercase,
    capitalizeFirstLetter : capitalizeFirstLetter,
    capitalizeLastName : capitalizeLastName,
    mentionToUserString : mentionToUserString,
    round : round,
    getNonEmptyRegex : getNonEmptyRegex,
    getTextRegex : getTextRegex,
    getNumberRegex : getNumberRegex,
    getPhoneRegex : getPhoneRegex,
    getEmailRegex : getEmailRegex,
    getMentionedRegex : getMentionedRegex,
    getMentionedUserRegex : getMentionedUserRegex,
    getMentionedAllRegex : getMentionedAllRegex,
    getUuidRegex : getUuidRegex,
    getFilePathRegex : getFilePathRegex
}
