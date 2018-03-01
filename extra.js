// Description:
//   Node Messenger Extra
//
// Dependencies:
//   moment
//
// Configuration:
//
// Commands:
//
// Author:
//   Alterdesk

// Requirements
var Moment = require('moment');

// Regex to check for text
var textRegex = new RegExp(/\w+/, 'i');

// Regex to check for a number
var numberRegex = new RegExp(/\d+/, 'i');

// Regex to check for a phone number
var phoneRegex = new RegExp(/^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d| 2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]| 4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/);

// Regex to check for an email address
var emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/, 'i');

// Regex to check for mentioned all tag
var mentionedAllRegex = new RegExp(/\[mention=@all\]/, 'i');

module.exports = {

    // Only capitalize last word in the name: "de Boer"
    capitalizeLastName: function(string) {
        if(string == null || string == "") {
            return string;
        }
        var words = string.split(" ");
        var result = "";
        for(var index in words) {
            var word = words[index];
            var nextIndex = parseInt(index) + 1;
            if(nextIndex < words.length) {
                result +=  " " + word;
            } else {
                result += " " + this.capitalizeFirstLetter(word);
            }
        }
        return result;
    },

    // Capitalize first letter in the string
    capitalizeFirstLetter: function(string) {
        if(string == null || string == "") {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    // Round a number to a given precision
    round: function(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    },

    // Format a date to a string(Moment wrapper)
    formatDate: function(date, customLocale, customFormat) {
        var format = customFormat || "LLLL";
        var locale = customLocale || "en-US";
        return Moment(date).locale(locale).format(format);
    },

    // Get the regular expression to detect text
    getTextRegex: function() {
        return textRegex;
    },

    // Get the regular expression to detect a number
    getNumberRegex: function() {
        return numberRegex;
    },

    // Get the regular expression to detect a phone number
    getPhoneRegex: function() {
        return phoneRegex;
    },

    // Get the regular expression to detect an email address
    getEmailRegex: function() {
        return emailRegex;
    },

    // Get the regular expression to detect the mentioned all tag
    getMentionedAllRegex: function() {
        return mentionedAllRegex;
    },
}
