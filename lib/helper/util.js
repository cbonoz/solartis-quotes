const sDate = require('sugar-date').Date;
var countries = require('country-list')();
var country = require('countryjs');

function capitalize(s) {
    return s.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
}

function capSplit(s) {
    s = capitalize(s);
    return s.split(/(?=[A-Z])/).join(" "); 
}

function formatDate(date) {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

module.exports = {
    createBasicInputQuestion(fieldName) {
        return {
            type: 'input',
            name: fieldName,
            message: `Please enter your ${capSplit(fieldName)}:`
        };
    },
    createNumericInputQuestion(fieldName, maxVal) {
        let msg = `Please enter your numeric ${capSplit(fieldName)}`;
        if (maxVal) {
            msg += ` (should be less than or equal to ${maxVal}):`;
        } else {
            msg += ':';
        }
        return {
            type: 'input',
            name: fieldName,
            message: msg,
            validate: function (value) {
                var val = parseFloat(value);
                if (isNaN(val)) {
                    return 'Please enter a number';
                }
                if (maxVal && val > maxVal) {
                    return 'Please enter a number less than or equal to ' + maxVal;
                }
                return true
            },
            filter: Number
        }
    },
    doneMessage: 'No problem, thanks for using our Insurance CLI!',
    capitalize: capitalize,
    formatDate: formatDate,
    checkDate: function (val) {
        const d = sDate.create(val);
        if (d instanceof Date && isFinite(d)) {
            return true;
        }

        return "Enter a valid date/day";
    },
    convertDate: function (d) {
        return formatDate(sDate.create(d));
    },
    isCountry: function (country) {
        // Reformat
        country = capitalize(country.toLowerCase());
        if (countries.getNames().includes(country)) {
            return true;
        }

        return 'Enter a valid country';
    },
    isMoneyAmount: function (value) {
        value = value + "";
        value = value.replace("$", "")
        var valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
    },
    moneyToNumber: function (value) {
        return parseFloat(value.replace("$", ""));
    },
    getStates(name) {
        // name = country.name(countryName, "ISO2");
        return country.states(name);
    },
    altSpellings(name) {
        return country.altSpellings(name);
    },

}