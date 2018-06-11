const sDate = require('sugar-date').Date;
var countries = require('country-list')();
var country = require('countryjs');

function capitalize(s) {
    return s.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

function formatDate(date) {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

module.exports = {
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
    moneyToNumber: function(value) {
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