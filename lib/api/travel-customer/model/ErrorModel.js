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
    define(['ApiClient', 'model/ErrorModelMessageDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorModelMessageDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.SolartisCreateCustomerApiForIlt) {
      root.SolartisCreateCustomerApiForIlt = {};
    }
    root.SolartisCreateCustomerApiForIlt.ErrorModel = factory(root.SolartisCreateCustomerApiForIlt.ApiClient, root.SolartisCreateCustomerApiForIlt.ErrorModelMessageDetail);
  }
}(this, function(ApiClient, ErrorModelMessageDetail) {
  'use strict';




  /**
   * The ErrorModel model module.
   * @module model/ErrorModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ErrorModel</code>.
   * @alias module:model/ErrorModel
   * @class
   * @param requestStatus {String} 
   * @param messageDetail {module:model/ErrorModelMessageDetail} 
   */
  var exports = function(requestStatus, messageDetail) {
    var _this = this;

    _this['RequestStatus'] = requestStatus;
    _this['MessageDetail'] = messageDetail;
  };

  /**
   * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorModel} obj Optional instance to populate.
   * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RequestStatus')) {
        obj['RequestStatus'] = ApiClient.convertToType(data['RequestStatus'], 'String');
      }
      if (data.hasOwnProperty('MessageDetail')) {
        obj['MessageDetail'] = ErrorModelMessageDetail.constructFromObject(data['MessageDetail']);
      }
    }
    return obj;
  }

  /**
   * @member {String} RequestStatus
   */
  exports.prototype['RequestStatus'] = undefined;
  /**
   * @member {module:model/ErrorModelMessageDetail} MessageDetail
   */
  exports.prototype['MessageDetail'] = undefined;



  return exports;
}));


