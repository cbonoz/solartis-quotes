/**
 * Solartis Rate API for ILT
 * To get rate for Leisure Travel from Solartis Rate API.
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/ErrorModelMessageDetail', 'model/ErrorModelMessageDetailMessageList', 'model/RatingRequest', 'model/RatingRequestQuoteInformation', 'model/RatingRequestQuoteInformationTravelerList', 'model/RatingRequestServiceRequestDetail', 'model/RatingSuccessResponse', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ErrorModel'), require('./model/ErrorModelMessageDetail'), require('./model/ErrorModelMessageDetailMessageList'), require('./model/RatingRequest'), require('./model/RatingRequestQuoteInformation'), require('./model/RatingRequestQuoteInformationTravelerList'), require('./model/RatingRequestServiceRequestDetail'), require('./model/RatingSuccessResponse'), require('./api/DefaultApi'));
  }
}(function(ApiClient, ErrorModel, ErrorModelMessageDetail, ErrorModelMessageDetailMessageList, RatingRequest, RatingRequestQuoteInformation, RatingRequestQuoteInformationTravelerList, RatingRequestServiceRequestDetail, RatingSuccessResponse, DefaultApi) {
  'use strict';

  /**
   * To_get_rate_for_Leisure_Travel_from_Solartis_Rate_API_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SolartisRateApiForIlt = require('index'); // See note below*.
   * var xxxSvc = new SolartisRateApiForIlt.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SolartisRateApiForIlt.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SolartisRateApiForIlt.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SolartisRateApiForIlt.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ErrorModel model constructor.
     * @property {module:model/ErrorModel}
     */
    ErrorModel: ErrorModel,
    /**
     * The ErrorModelMessageDetail model constructor.
     * @property {module:model/ErrorModelMessageDetail}
     */
    ErrorModelMessageDetail: ErrorModelMessageDetail,
    /**
     * The ErrorModelMessageDetailMessageList model constructor.
     * @property {module:model/ErrorModelMessageDetailMessageList}
     */
    ErrorModelMessageDetailMessageList: ErrorModelMessageDetailMessageList,
    /**
     * The RatingRequest model constructor.
     * @property {module:model/RatingRequest}
     */
    RatingRequest: RatingRequest,
    /**
     * The RatingRequestQuoteInformation model constructor.
     * @property {module:model/RatingRequestQuoteInformation}
     */
    RatingRequestQuoteInformation: RatingRequestQuoteInformation,
    /**
     * The RatingRequestQuoteInformationTravelerList model constructor.
     * @property {module:model/RatingRequestQuoteInformationTravelerList}
     */
    RatingRequestQuoteInformationTravelerList: RatingRequestQuoteInformationTravelerList,
    /**
     * The RatingRequestServiceRequestDetail model constructor.
     * @property {module:model/RatingRequestServiceRequestDetail}
     */
    RatingRequestServiceRequestDetail: RatingRequestServiceRequestDetail,
    /**
     * The RatingSuccessResponse model constructor.
     * @property {module:model/RatingSuccessResponse}
     */
    RatingSuccessResponse: RatingSuccessResponse,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
