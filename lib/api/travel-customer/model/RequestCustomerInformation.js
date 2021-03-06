/**
 * Solartis Create Customer API for ILT
 * To create customer for Leisure Travel from Solartis Rate API.Umbrella insurance is extra liability insurance.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RequestCustomerInformationTravelerList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RequestCustomerInformationTravelerList'));
  } else {
    // Browser globals (root is window)
    if (!root.SolartisCreateCustomerApiForIlt) {
      root.SolartisCreateCustomerApiForIlt = {};
    }
    root.SolartisCreateCustomerApiForIlt.RequestCustomerInformation = factory(root.SolartisCreateCustomerApiForIlt.ApiClient, root.SolartisCreateCustomerApiForIlt.RequestCustomerInformationTravelerList);
  }
}(this, function(ApiClient, RequestCustomerInformationTravelerList) {
  'use strict';




  /**
   * The RequestCustomerInformation model module.
   * @module model/RequestCustomerInformation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RequestCustomerInformation</code>.
   * @alias module:model/RequestCustomerInformation
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>RequestCustomerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestCustomerInformation} obj Optional instance to populate.
   * @return {module:model/RequestCustomerInformation} The populated <code>RequestCustomerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('ProductVerID')) {
        obj['ProductVerID'] = ApiClient.convertToType(data['ProductVerID'], 'String');
      }
      if (data.hasOwnProperty('ProductNumber')) {
        obj['ProductNumber'] = ApiClient.convertToType(data['ProductNumber'], 'String');
      }
      if (data.hasOwnProperty('ProductVerNumber')) {
        obj['ProductVerNumber'] = ApiClient.convertToType(data['ProductVerNumber'], 'String');
      }
      if (data.hasOwnProperty('ProducerCode')) {
        obj['ProducerCode'] = ApiClient.convertToType(data['ProducerCode'], 'String');
      }
      if (data.hasOwnProperty('OwnerId')) {
        obj['OwnerId'] = ApiClient.convertToType(data['OwnerId'], 'String');
      }
      if (data.hasOwnProperty('PlanName')) {
        obj['PlanName'] = ApiClient.convertToType(data['PlanName'], 'String');
      }
      if (data.hasOwnProperty('PlanCode')) {
        obj['PlanCode'] = ApiClient.convertToType(data['PlanCode'], 'String');
      }
      if (data.hasOwnProperty('PlanType')) {
        obj['PlanType'] = ApiClient.convertToType(data['PlanType'], 'String');
      }
      if (data.hasOwnProperty('DepartureDate')) {
        obj['DepartureDate'] = ApiClient.convertToType(data['DepartureDate'], 'String');
      }
      if (data.hasOwnProperty('ReturnDate')) {
        obj['ReturnDate'] = ApiClient.convertToType(data['ReturnDate'], 'String');
      }
      if (data.hasOwnProperty('DepositDate')) {
        obj['DepositDate'] = ApiClient.convertToType(data['DepositDate'], 'String');
      }
      if (data.hasOwnProperty('DestinationCountry')) {
        obj['DestinationCountry'] = ApiClient.convertToType(data['DestinationCountry'], 'String');
      }
      if (data.hasOwnProperty('PolicyEffectiveDate')) {
        obj['PolicyEffectiveDate'] = ApiClient.convertToType(data['PolicyEffectiveDate'], 'String');
      }
      if (data.hasOwnProperty('StateCode')) {
        obj['StateCode'] = ApiClient.convertToType(data['StateCode'], 'String');
      }
      if (data.hasOwnProperty('QuoteType')) {
        obj['QuoteType'] = ApiClient.convertToType(data['QuoteType'], 'String');
      }
      if (data.hasOwnProperty('EventName')) {
        obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
      }
      if (data.hasOwnProperty('TravelerList')) {
        obj['TravelerList'] = ApiClient.convertToType(data['TravelerList'], [RequestCustomerInformationTravelerList]);
      }
    }
    return obj;
  }

  /**
   * @member {String} ProductID
   * @default '619'
   */
  exports.prototype['ProductID'] = '619';
  /**
   * @member {String} ProductVerID
   * @default '706'
   */
  exports.prototype['ProductVerID'] = '706';
  /**
   * @member {String} ProductNumber
   * @default 'ILT'
   */
  exports.prototype['ProductNumber'] = 'ILT';
  /**
   * @member {String} ProductVerNumber
   * @default '1.0'
   */
  exports.prototype['ProductVerNumber'] = '1.0';
  /**
   * @member {String} ProducerCode
   * @default '86201'
   */
  exports.prototype['ProducerCode'] = '86201';
  /**
   * @member {String} OwnerId
   * @default '15'
   */
  exports.prototype['OwnerId'] = '15';
  /**
   * @member {String} PlanName
   * @default 'Air Ticket Protector'
   */
  exports.prototype['PlanName'] = 'Air Ticket Protector';
  /**
   * @member {String} PlanCode
   * @default '1'
   */
  exports.prototype['PlanCode'] = '1';
  /**
   * @member {String} PlanType
   * @default 'Single Trip'
   */
  exports.prototype['PlanType'] = 'Single Trip';
  /**
   * @member {String} DepartureDate
   * @default '11/01/2020'
   */
  exports.prototype['DepartureDate'] = '11/01/2020';
  /**
   * @member {String} ReturnDate
   * @default '11/25/2020'
   */
  exports.prototype['ReturnDate'] = '11/25/2020';
  /**
   * @member {String} DepositDate
   * @default '05/31/2017'
   */
  exports.prototype['DepositDate'] = '05/31/2017';
  /**
   * @member {String} DestinationCountry
   * @default 'France'
   */
  exports.prototype['DestinationCountry'] = 'France';
  /**
   * @member {String} PolicyEffectiveDate
   * @default '11/01/2020'
   */
  exports.prototype['PolicyEffectiveDate'] = '11/01/2020';
  /**
   * @member {String} StateCode
   * @default 'GA'
   */
  exports.prototype['StateCode'] = 'GA';
  /**
   * @member {String} QuoteType
   * @default 'New Business'
   */
  exports.prototype['QuoteType'] = 'New Business';
  /**
   * @member {String} EventName
   * @default 'CreateCustomer'
   */
  exports.prototype['EventName'] = 'CreateCustomer';
  /**
   * @member {Array.<module:model/RequestCustomerInformationTravelerList>} TravelerList
   */
  exports.prototype['TravelerList'] = undefined;



  return exports;
}));


