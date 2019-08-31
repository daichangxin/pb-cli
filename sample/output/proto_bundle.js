$protobuf=protobuf;// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.mindmaster = (function() {

        /**
         * Namespace mindmaster.
         * @memberof game
         * @namespace
         */
        var mindmaster = {};

        /**
         * CMD enum.
         * @name game.mindmaster.CMD
         * @enum {string}
         * @property {number} CMD_UNDEFINED=0 CMD_UNDEFINED value
         * @property {number} CMD_USER_BASE_INFO=10001 CMD_USER_BASE_INFO value
         * @property {number} CMD_USER_INFO_CHANGED=10002 CMD_USER_INFO_CHANGED value
         * @property {number} CMD_ROTARY_DIAL_REWARD=20001 CMD_ROTARY_DIAL_REWARD value
         * @property {number} CMD_RANK_INFO=30001 CMD_RANK_INFO value
         * @property {number} CMD_START_CHALLANGE=40001 CMD_START_CHALLANGE value
         * @property {number} CMD_VIDEO_RELIVE=40002 CMD_VIDEO_RELIVE value
         * @property {number} CMD_ANSWER_SUBMIT=40003 CMD_ANSWER_SUBMIT value
         * @property {number} CMD_VIDEO_GIVEUP_RELIVE=40004 CMD_VIDEO_GIVEUP_RELIVE value
         * @property {number} CMD_MIAOCOIN_EXCHANGE=50001 CMD_MIAOCOIN_EXCHANGE value
         * @property {number} CMD_VIDEO_RECOVERY=60001 CMD_VIDEO_RECOVERY value
         * @property {number} CMD_HEART_BEAT=89999 CMD_HEART_BEAT value
         * @property {number} CMD_GLOBAL_ERROR=99999 CMD_GLOBAL_ERROR value
         */
        mindmaster.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CMD_UNDEFINED"] = 0;
            values[valuesById[10001] = "CMD_USER_BASE_INFO"] = 10001;
            values[valuesById[10002] = "CMD_USER_INFO_CHANGED"] = 10002;
            values[valuesById[20001] = "CMD_ROTARY_DIAL_REWARD"] = 20001;
            values[valuesById[30001] = "CMD_RANK_INFO"] = 30001;
            values[valuesById[40001] = "CMD_START_CHALLANGE"] = 40001;
            values[valuesById[40002] = "CMD_VIDEO_RELIVE"] = 40002;
            values[valuesById[40003] = "CMD_ANSWER_SUBMIT"] = 40003;
            values[valuesById[40004] = "CMD_VIDEO_GIVEUP_RELIVE"] = 40004;
            values[valuesById[50001] = "CMD_MIAOCOIN_EXCHANGE"] = 50001;
            values[valuesById[60001] = "CMD_VIDEO_RECOVERY"] = 60001;
            values[valuesById[89999] = "CMD_HEART_BEAT"] = 89999;
            values[valuesById[99999] = "CMD_GLOBAL_ERROR"] = 99999;
            return values;
        })();

        /**
         * RankType enum.
         * @name game.mindmaster.RankType
         * @enum {string}
         * @property {number} RANK_TYPE_UNDEFINED=0 RANK_TYPE_UNDEFINED value
         * @property {number} RANK_TYPE_WORLD=1 RANK_TYPE_WORLD value
         * @property {number} RANK_TYPE_FRIEND=2 RANK_TYPE_FRIEND value
         */
        mindmaster.RankType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RANK_TYPE_UNDEFINED"] = 0;
            values[valuesById[1] = "RANK_TYPE_WORLD"] = 1;
            values[valuesById[2] = "RANK_TYPE_FRIEND"] = 2;
            return values;
        })();

        mindmaster.RequestMessage = (function() {

            /**
             * Properties of a RequestMessage.
             * @memberof game.mindmaster
             * @interface IRequestMessage
             * @property {game.mindmaster.CMD|null} [cmd] RequestMessage cmd
             * @property {Uint8Array|null} [data] RequestMessage data
             */

            /**
             * Constructs a new RequestMessage.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestMessage.
             * @implements IRequestMessage
             * @constructor
             * @param {game.mindmaster.IRequestMessage=} [properties] Properties to set
             */
            function RequestMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestMessage cmd.
             * @member {game.mindmaster.CMD} cmd
             * @memberof game.mindmaster.RequestMessage
             * @instance
             */
            RequestMessage.prototype.cmd = 0;

            /**
             * RequestMessage data.
             * @member {Uint8Array} data
             * @memberof game.mindmaster.RequestMessage
             * @instance
             */
            RequestMessage.prototype.data = $util.newBuffer([]);

            /**
             * Encodes the specified RequestMessage message. Does not implicitly {@link game.mindmaster.RequestMessage.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestMessage
             * @static
             * @param {game.mindmaster.IRequestMessage} message RequestMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cmd != null && message.hasOwnProperty("cmd"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };

            /**
             * Decodes a RequestMessage message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestMessage} RequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.cmd = reader.int32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestMessage;
        })();

        mindmaster.ResponseMessage = (function() {

            /**
             * Properties of a ResponseMessage.
             * @memberof game.mindmaster
             * @interface IResponseMessage
             * @property {game.mindmaster.CMD|null} [cmd] ResponseMessage cmd
             * @property {number|Long|null} [code] ResponseMessage code
             * @property {Uint8Array|null} [data] ResponseMessage data
             */

            /**
             * Constructs a new ResponseMessage.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseMessage.
             * @implements IResponseMessage
             * @constructor
             * @param {game.mindmaster.IResponseMessage=} [properties] Properties to set
             */
            function ResponseMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseMessage cmd.
             * @member {game.mindmaster.CMD} cmd
             * @memberof game.mindmaster.ResponseMessage
             * @instance
             */
            ResponseMessage.prototype.cmd = 0;

            /**
             * ResponseMessage code.
             * @member {number|Long} code
             * @memberof game.mindmaster.ResponseMessage
             * @instance
             */
            ResponseMessage.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseMessage data.
             * @member {Uint8Array} data
             * @memberof game.mindmaster.ResponseMessage
             * @instance
             */
            ResponseMessage.prototype.data = $util.newBuffer([]);

            /**
             * Encodes the specified ResponseMessage message. Does not implicitly {@link game.mindmaster.ResponseMessage.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseMessage
             * @static
             * @param {game.mindmaster.IResponseMessage} message ResponseMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cmd != null && message.hasOwnProperty("cmd"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.code);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };

            /**
             * Decodes a ResponseMessage message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseMessage} ResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.cmd = reader.int32();
                        break;
                    case 2:
                        message.code = reader.int64();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseMessage;
        })();

        mindmaster.ResponseMessageArray = (function() {

            /**
             * Properties of a ResponseMessageArray.
             * @memberof game.mindmaster
             * @interface IResponseMessageArray
             * @property {Array.<game.mindmaster.IResponseMessage>|null} [response] ResponseMessageArray response
             */

            /**
             * Constructs a new ResponseMessageArray.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseMessageArray.
             * @implements IResponseMessageArray
             * @constructor
             * @param {game.mindmaster.IResponseMessageArray=} [properties] Properties to set
             */
            function ResponseMessageArray(properties) {
                this.response = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseMessageArray response.
             * @member {Array.<game.mindmaster.IResponseMessage>} response
             * @memberof game.mindmaster.ResponseMessageArray
             * @instance
             */
            ResponseMessageArray.prototype.response = $util.emptyArray;

            /**
             * Encodes the specified ResponseMessageArray message. Does not implicitly {@link game.mindmaster.ResponseMessageArray.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseMessageArray
             * @static
             * @param {game.mindmaster.IResponseMessageArray} message ResponseMessageArray message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseMessageArray.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.response != null && message.response.length)
                    for (var i = 0; i < message.response.length; ++i)
                        $root.game.mindmaster.ResponseMessage.encode(message.response[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ResponseMessageArray message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseMessageArray
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseMessageArray} ResponseMessageArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseMessageArray.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseMessageArray();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.response && message.response.length))
                            message.response = [];
                        message.response.push($root.game.mindmaster.ResponseMessage.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseMessageArray;
        })();

        mindmaster.RequestUserBaseInfo = (function() {

            /**
             * Properties of a RequestUserBaseInfo.
             * @memberof game.mindmaster
             * @interface IRequestUserBaseInfo
             */

            /**
             * Constructs a new RequestUserBaseInfo.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestUserBaseInfo.
             * @implements IRequestUserBaseInfo
             * @constructor
             * @param {game.mindmaster.IRequestUserBaseInfo=} [properties] Properties to set
             */
            function RequestUserBaseInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified RequestUserBaseInfo message. Does not implicitly {@link game.mindmaster.RequestUserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestUserBaseInfo
             * @static
             * @param {game.mindmaster.IRequestUserBaseInfo} message RequestUserBaseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestUserBaseInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a RequestUserBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestUserBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestUserBaseInfo} RequestUserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestUserBaseInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestUserBaseInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestUserBaseInfo;
        })();

        mindmaster.RequestRotaryDialReward = (function() {

            /**
             * Properties of a RequestRotaryDialReward.
             * @memberof game.mindmaster
             * @interface IRequestRotaryDialReward
             */

            /**
             * Constructs a new RequestRotaryDialReward.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestRotaryDialReward.
             * @implements IRequestRotaryDialReward
             * @constructor
             * @param {game.mindmaster.IRequestRotaryDialReward=} [properties] Properties to set
             */
            function RequestRotaryDialReward(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified RequestRotaryDialReward message. Does not implicitly {@link game.mindmaster.RequestRotaryDialReward.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestRotaryDialReward
             * @static
             * @param {game.mindmaster.IRequestRotaryDialReward} message RequestRotaryDialReward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestRotaryDialReward.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a RequestRotaryDialReward message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestRotaryDialReward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestRotaryDialReward} RequestRotaryDialReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestRotaryDialReward.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestRotaryDialReward();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestRotaryDialReward;
        })();

        mindmaster.RequestRankInfo = (function() {

            /**
             * Properties of a RequestRankInfo.
             * @memberof game.mindmaster
             * @interface IRequestRankInfo
             * @property {game.mindmaster.RankType|null} [type] RequestRankInfo type
             */

            /**
             * Constructs a new RequestRankInfo.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestRankInfo.
             * @implements IRequestRankInfo
             * @constructor
             * @param {game.mindmaster.IRequestRankInfo=} [properties] Properties to set
             */
            function RequestRankInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestRankInfo type.
             * @member {game.mindmaster.RankType} type
             * @memberof game.mindmaster.RequestRankInfo
             * @instance
             */
            RequestRankInfo.prototype.type = 0;

            /**
             * Encodes the specified RequestRankInfo message. Does not implicitly {@link game.mindmaster.RequestRankInfo.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestRankInfo
             * @static
             * @param {game.mindmaster.IRequestRankInfo} message RequestRankInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestRankInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                return writer;
            };

            /**
             * Decodes a RequestRankInfo message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestRankInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestRankInfo} RequestRankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestRankInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestRankInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestRankInfo;
        })();

        mindmaster.RequestStartChallange = (function() {

            /**
             * Properties of a RequestStartChallange.
             * @memberof game.mindmaster
             * @interface IRequestStartChallange
             * @property {number|Long|null} [screen] RequestStartChallange screen
             */

            /**
             * Constructs a new RequestStartChallange.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestStartChallange.
             * @implements IRequestStartChallange
             * @constructor
             * @param {game.mindmaster.IRequestStartChallange=} [properties] Properties to set
             */
            function RequestStartChallange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestStartChallange screen.
             * @member {number|Long} screen
             * @memberof game.mindmaster.RequestStartChallange
             * @instance
             */
            RequestStartChallange.prototype.screen = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified RequestStartChallange message. Does not implicitly {@link game.mindmaster.RequestStartChallange.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestStartChallange
             * @static
             * @param {game.mindmaster.IRequestStartChallange} message RequestStartChallange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestStartChallange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.screen != null && message.hasOwnProperty("screen"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.screen);
                return writer;
            };

            /**
             * Decodes a RequestStartChallange message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestStartChallange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestStartChallange} RequestStartChallange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestStartChallange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestStartChallange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.screen = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestStartChallange;
        })();

        mindmaster.RequestVideoRelive = (function() {

            /**
             * Properties of a RequestVideoRelive.
             * @memberof game.mindmaster
             * @interface IRequestVideoRelive
             * @property {number|Long|null} [screen] RequestVideoRelive screen
             */

            /**
             * Constructs a new RequestVideoRelive.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestVideoRelive.
             * @implements IRequestVideoRelive
             * @constructor
             * @param {game.mindmaster.IRequestVideoRelive=} [properties] Properties to set
             */
            function RequestVideoRelive(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestVideoRelive screen.
             * @member {number|Long} screen
             * @memberof game.mindmaster.RequestVideoRelive
             * @instance
             */
            RequestVideoRelive.prototype.screen = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified RequestVideoRelive message. Does not implicitly {@link game.mindmaster.RequestVideoRelive.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestVideoRelive
             * @static
             * @param {game.mindmaster.IRequestVideoRelive} message RequestVideoRelive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestVideoRelive.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.screen != null && message.hasOwnProperty("screen"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.screen);
                return writer;
            };

            /**
             * Decodes a RequestVideoRelive message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestVideoRelive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestVideoRelive} RequestVideoRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestVideoRelive.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestVideoRelive();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.screen = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestVideoRelive;
        })();

        mindmaster.QuestionAnswerItem = (function() {

            /**
             * Properties of a QuestionAnswerItem.
             * @memberof game.mindmaster
             * @interface IQuestionAnswerItem
             * @property {number|Long|null} [id] QuestionAnswerItem id
             * @property {number|Long|null} [time] QuestionAnswerItem time
             * @property {number|Long|null} [option] QuestionAnswerItem option
             */

            /**
             * Constructs a new QuestionAnswerItem.
             * @memberof game.mindmaster
             * @classdesc Represents a QuestionAnswerItem.
             * @implements IQuestionAnswerItem
             * @constructor
             * @param {game.mindmaster.IQuestionAnswerItem=} [properties] Properties to set
             */
            function QuestionAnswerItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QuestionAnswerItem id.
             * @member {number|Long} id
             * @memberof game.mindmaster.QuestionAnswerItem
             * @instance
             */
            QuestionAnswerItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * QuestionAnswerItem time.
             * @member {number|Long} time
             * @memberof game.mindmaster.QuestionAnswerItem
             * @instance
             */
            QuestionAnswerItem.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * QuestionAnswerItem option.
             * @member {number|Long} option
             * @memberof game.mindmaster.QuestionAnswerItem
             * @instance
             */
            QuestionAnswerItem.prototype.option = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified QuestionAnswerItem message. Does not implicitly {@link game.mindmaster.QuestionAnswerItem.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.QuestionAnswerItem
             * @static
             * @param {game.mindmaster.IQuestionAnswerItem} message QuestionAnswerItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuestionAnswerItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
                if (message.option != null && message.hasOwnProperty("option"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.option);
                return writer;
            };

            /**
             * Decodes a QuestionAnswerItem message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.QuestionAnswerItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.QuestionAnswerItem} QuestionAnswerItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuestionAnswerItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.QuestionAnswerItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.time = reader.int64();
                        break;
                    case 3:
                        message.option = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return QuestionAnswerItem;
        })();

        mindmaster.RequestAnswerSubmit = (function() {

            /**
             * Properties of a RequestAnswerSubmit.
             * @memberof game.mindmaster
             * @interface IRequestAnswerSubmit
             * @property {number|Long|null} [screen] RequestAnswerSubmit screen
             * @property {Array.<game.mindmaster.IQuestionAnswerItem>|null} [answers] RequestAnswerSubmit answers
             * @property {boolean|null} [video] RequestAnswerSubmit video
             */

            /**
             * Constructs a new RequestAnswerSubmit.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestAnswerSubmit.
             * @implements IRequestAnswerSubmit
             * @constructor
             * @param {game.mindmaster.IRequestAnswerSubmit=} [properties] Properties to set
             */
            function RequestAnswerSubmit(properties) {
                this.answers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestAnswerSubmit screen.
             * @member {number|Long} screen
             * @memberof game.mindmaster.RequestAnswerSubmit
             * @instance
             */
            RequestAnswerSubmit.prototype.screen = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RequestAnswerSubmit answers.
             * @member {Array.<game.mindmaster.IQuestionAnswerItem>} answers
             * @memberof game.mindmaster.RequestAnswerSubmit
             * @instance
             */
            RequestAnswerSubmit.prototype.answers = $util.emptyArray;

            /**
             * RequestAnswerSubmit video.
             * @member {boolean} video
             * @memberof game.mindmaster.RequestAnswerSubmit
             * @instance
             */
            RequestAnswerSubmit.prototype.video = false;

            /**
             * Encodes the specified RequestAnswerSubmit message. Does not implicitly {@link game.mindmaster.RequestAnswerSubmit.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestAnswerSubmit
             * @static
             * @param {game.mindmaster.IRequestAnswerSubmit} message RequestAnswerSubmit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestAnswerSubmit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.screen != null && message.hasOwnProperty("screen"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.screen);
                if (message.answers != null && message.answers.length)
                    for (var i = 0; i < message.answers.length; ++i)
                        $root.game.mindmaster.QuestionAnswerItem.encode(message.answers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.video != null && message.hasOwnProperty("video"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.video);
                return writer;
            };

            /**
             * Decodes a RequestAnswerSubmit message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestAnswerSubmit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestAnswerSubmit} RequestAnswerSubmit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestAnswerSubmit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestAnswerSubmit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.screen = reader.int64();
                        break;
                    case 2:
                        if (!(message.answers && message.answers.length))
                            message.answers = [];
                        message.answers.push($root.game.mindmaster.QuestionAnswerItem.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.video = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestAnswerSubmit;
        })();

        mindmaster.RequestMiaoCoinExchange = (function() {

            /**
             * Properties of a RequestMiaoCoinExchange.
             * @memberof game.mindmaster
             * @interface IRequestMiaoCoinExchange
             * @property {number|Long|null} [gold] RequestMiaoCoinExchange gold
             */

            /**
             * Constructs a new RequestMiaoCoinExchange.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestMiaoCoinExchange.
             * @implements IRequestMiaoCoinExchange
             * @constructor
             * @param {game.mindmaster.IRequestMiaoCoinExchange=} [properties] Properties to set
             */
            function RequestMiaoCoinExchange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestMiaoCoinExchange gold.
             * @member {number|Long} gold
             * @memberof game.mindmaster.RequestMiaoCoinExchange
             * @instance
             */
            RequestMiaoCoinExchange.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified RequestMiaoCoinExchange message. Does not implicitly {@link game.mindmaster.RequestMiaoCoinExchange.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestMiaoCoinExchange
             * @static
             * @param {game.mindmaster.IRequestMiaoCoinExchange} message RequestMiaoCoinExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestMiaoCoinExchange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gold);
                return writer;
            };

            /**
             * Decodes a RequestMiaoCoinExchange message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestMiaoCoinExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestMiaoCoinExchange} RequestMiaoCoinExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestMiaoCoinExchange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestMiaoCoinExchange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gold = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestMiaoCoinExchange;
        })();

        mindmaster.RequestHeartBeat = (function() {

            /**
             * Properties of a RequestHeartBeat.
             * @memberof game.mindmaster
             * @interface IRequestHeartBeat
             */

            /**
             * Constructs a new RequestHeartBeat.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestHeartBeat.
             * @implements IRequestHeartBeat
             * @constructor
             * @param {game.mindmaster.IRequestHeartBeat=} [properties] Properties to set
             */
            function RequestHeartBeat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified RequestHeartBeat message. Does not implicitly {@link game.mindmaster.RequestHeartBeat.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestHeartBeat
             * @static
             * @param {game.mindmaster.IRequestHeartBeat} message RequestHeartBeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestHeartBeat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a RequestHeartBeat message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestHeartBeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestHeartBeat} RequestHeartBeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestHeartBeat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestHeartBeat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestHeartBeat;
        })();

        mindmaster.RequestVideoGiveUpRelive = (function() {

            /**
             * Properties of a RequestVideoGiveUpRelive.
             * @memberof game.mindmaster
             * @interface IRequestVideoGiveUpRelive
             * @property {number|Long|null} [screen] RequestVideoGiveUpRelive screen
             */

            /**
             * Constructs a new RequestVideoGiveUpRelive.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestVideoGiveUpRelive.
             * @implements IRequestVideoGiveUpRelive
             * @constructor
             * @param {game.mindmaster.IRequestVideoGiveUpRelive=} [properties] Properties to set
             */
            function RequestVideoGiveUpRelive(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestVideoGiveUpRelive screen.
             * @member {number|Long} screen
             * @memberof game.mindmaster.RequestVideoGiveUpRelive
             * @instance
             */
            RequestVideoGiveUpRelive.prototype.screen = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified RequestVideoGiveUpRelive message. Does not implicitly {@link game.mindmaster.RequestVideoGiveUpRelive.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestVideoGiveUpRelive
             * @static
             * @param {game.mindmaster.IRequestVideoGiveUpRelive} message RequestVideoGiveUpRelive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestVideoGiveUpRelive.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.screen != null && message.hasOwnProperty("screen"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.screen);
                return writer;
            };

            /**
             * Decodes a RequestVideoGiveUpRelive message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestVideoGiveUpRelive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestVideoGiveUpRelive} RequestVideoGiveUpRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestVideoGiveUpRelive.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestVideoGiveUpRelive();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.screen = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestVideoGiveUpRelive;
        })();

        mindmaster.RequestVideoRecovery = (function() {

            /**
             * Properties of a RequestVideoRecovery.
             * @memberof game.mindmaster
             * @interface IRequestVideoRecovery
             */

            /**
             * Constructs a new RequestVideoRecovery.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestVideoRecovery.
             * @implements IRequestVideoRecovery
             * @constructor
             * @param {game.mindmaster.IRequestVideoRecovery=} [properties] Properties to set
             */
            function RequestVideoRecovery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified RequestVideoRecovery message. Does not implicitly {@link game.mindmaster.RequestVideoRecovery.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestVideoRecovery
             * @static
             * @param {game.mindmaster.IRequestVideoRecovery} message RequestVideoRecovery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestVideoRecovery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a RequestVideoRecovery message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestVideoRecovery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestVideoRecovery} RequestVideoRecovery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestVideoRecovery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestVideoRecovery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestVideoRecovery;
        })();

        mindmaster.RequestUserInfoChanged = (function() {

            /**
             * Properties of a RequestUserInfoChanged.
             * @memberof game.mindmaster
             * @interface IRequestUserInfoChanged
             */

            /**
             * Constructs a new RequestUserInfoChanged.
             * @memberof game.mindmaster
             * @classdesc Represents a RequestUserInfoChanged.
             * @implements IRequestUserInfoChanged
             * @constructor
             * @param {game.mindmaster.IRequestUserInfoChanged=} [properties] Properties to set
             */
            function RequestUserInfoChanged(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified RequestUserInfoChanged message. Does not implicitly {@link game.mindmaster.RequestUserInfoChanged.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RequestUserInfoChanged
             * @static
             * @param {game.mindmaster.IRequestUserInfoChanged} message RequestUserInfoChanged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestUserInfoChanged.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a RequestUserInfoChanged message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RequestUserInfoChanged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RequestUserInfoChanged} RequestUserInfoChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestUserInfoChanged.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RequestUserInfoChanged();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RequestUserInfoChanged;
        })();

        mindmaster.UserBaseData = (function() {

            /**
             * Properties of a UserBaseData.
             * @memberof game.mindmaster
             * @interface IUserBaseData
             * @property {number|Long|null} [gold] UserBaseData gold
             * @property {number|Long|null} [power] UserBaseData power
             * @property {number|Long|null} [screen] UserBaseData screen
             * @property {number|Long|null} [star] UserBaseData star
             * @property {number|Long|null} [exchange_gold] UserBaseData exchange_gold
             * @property {number|Long|null} [total_relive_times] UserBaseData total_relive_times
             * @property {number|Long|null} [today_relive_times] UserBaseData today_relive_times
             * @property {number|Long|null} [total_recovery_times] UserBaseData total_recovery_times
             * @property {number|Long|null} [today_recovery_times] UserBaseData today_recovery_times
             */

            /**
             * Constructs a new UserBaseData.
             * @memberof game.mindmaster
             * @classdesc Represents a UserBaseData.
             * @implements IUserBaseData
             * @constructor
             * @param {game.mindmaster.IUserBaseData=} [properties] Properties to set
             */
            function UserBaseData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserBaseData gold.
             * @member {number|Long} gold
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData power.
             * @member {number|Long} power
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData screen.
             * @member {number|Long} screen
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.screen = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData star.
             * @member {number|Long} star
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.star = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData exchange_gold.
             * @member {number|Long} exchange_gold
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.exchange_gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData total_relive_times.
             * @member {number|Long} total_relive_times
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.total_relive_times = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData today_relive_times.
             * @member {number|Long} today_relive_times
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.today_relive_times = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData total_recovery_times.
             * @member {number|Long} total_recovery_times
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.total_recovery_times = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserBaseData today_recovery_times.
             * @member {number|Long} today_recovery_times
             * @memberof game.mindmaster.UserBaseData
             * @instance
             */
            UserBaseData.prototype.today_recovery_times = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified UserBaseData message. Does not implicitly {@link game.mindmaster.UserBaseData.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.UserBaseData
             * @static
             * @param {game.mindmaster.IUserBaseData} message UserBaseData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserBaseData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gold);
                if (message.power != null && message.hasOwnProperty("power"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.power);
                if (message.screen != null && message.hasOwnProperty("screen"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.screen);
                if (message.star != null && message.hasOwnProperty("star"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.star);
                if (message.exchange_gold != null && message.hasOwnProperty("exchange_gold"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.exchange_gold);
                if (message.total_relive_times != null && message.hasOwnProperty("total_relive_times"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.total_relive_times);
                if (message.today_relive_times != null && message.hasOwnProperty("today_relive_times"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.today_relive_times);
                if (message.total_recovery_times != null && message.hasOwnProperty("total_recovery_times"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.total_recovery_times);
                if (message.today_recovery_times != null && message.hasOwnProperty("today_recovery_times"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int64(message.today_recovery_times);
                return writer;
            };

            /**
             * Decodes a UserBaseData message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.UserBaseData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.UserBaseData} UserBaseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserBaseData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.UserBaseData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gold = reader.int64();
                        break;
                    case 2:
                        message.power = reader.int64();
                        break;
                    case 3:
                        message.screen = reader.int64();
                        break;
                    case 4:
                        message.star = reader.int64();
                        break;
                    case 5:
                        message.exchange_gold = reader.int64();
                        break;
                    case 6:
                        message.total_relive_times = reader.int64();
                        break;
                    case 7:
                        message.today_relive_times = reader.int64();
                        break;
                    case 8:
                        message.total_recovery_times = reader.int64();
                        break;
                    case 9:
                        message.today_recovery_times = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return UserBaseData;
        })();

        mindmaster.ResponseUserBaseInfo = (function() {

            /**
             * Properties of a ResponseUserBaseInfo.
             * @memberof game.mindmaster
             * @interface IResponseUserBaseInfo
             * @property {game.mindmaster.IUserBaseData|null} [user] ResponseUserBaseInfo user
             */

            /**
             * Constructs a new ResponseUserBaseInfo.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseUserBaseInfo.
             * @implements IResponseUserBaseInfo
             * @constructor
             * @param {game.mindmaster.IResponseUserBaseInfo=} [properties] Properties to set
             */
            function ResponseUserBaseInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseUserBaseInfo user.
             * @member {game.mindmaster.IUserBaseData|null|undefined} user
             * @memberof game.mindmaster.ResponseUserBaseInfo
             * @instance
             */
            ResponseUserBaseInfo.prototype.user = null;

            /**
             * Encodes the specified ResponseUserBaseInfo message. Does not implicitly {@link game.mindmaster.ResponseUserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseUserBaseInfo
             * @static
             * @param {game.mindmaster.IResponseUserBaseInfo} message ResponseUserBaseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseUserBaseInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && message.hasOwnProperty("user"))
                    $root.game.mindmaster.UserBaseData.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ResponseUserBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseUserBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseUserBaseInfo} ResponseUserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseUserBaseInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseUserBaseInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = $root.game.mindmaster.UserBaseData.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseUserBaseInfo;
        })();

        mindmaster.ResponseRotaryDialReward = (function() {

            /**
             * Properties of a ResponseRotaryDialReward.
             * @memberof game.mindmaster
             * @interface IResponseRotaryDialReward
             * @property {number|Long|null} [index] ResponseRotaryDialReward index
             */

            /**
             * Constructs a new ResponseRotaryDialReward.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseRotaryDialReward.
             * @implements IResponseRotaryDialReward
             * @constructor
             * @param {game.mindmaster.IResponseRotaryDialReward=} [properties] Properties to set
             */
            function ResponseRotaryDialReward(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseRotaryDialReward index.
             * @member {number|Long} index
             * @memberof game.mindmaster.ResponseRotaryDialReward
             * @instance
             */
            ResponseRotaryDialReward.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified ResponseRotaryDialReward message. Does not implicitly {@link game.mindmaster.ResponseRotaryDialReward.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseRotaryDialReward
             * @static
             * @param {game.mindmaster.IResponseRotaryDialReward} message ResponseRotaryDialReward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRotaryDialReward.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.index);
                return writer;
            };

            /**
             * Decodes a ResponseRotaryDialReward message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseRotaryDialReward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseRotaryDialReward} ResponseRotaryDialReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRotaryDialReward.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseRotaryDialReward();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.index = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseRotaryDialReward;
        })();

        mindmaster.RankItem = (function() {

            /**
             * Properties of a RankItem.
             * @memberof game.mindmaster
             * @interface IRankItem
             * @property {number|Long|null} [rank] RankItem rank
             * @property {string|null} [avatar] RankItem avatar
             * @property {string|null} [name] RankItem name
             * @property {number|Long|null} [star] RankItem star
             */

            /**
             * Constructs a new RankItem.
             * @memberof game.mindmaster
             * @classdesc Represents a RankItem.
             * @implements IRankItem
             * @constructor
             * @param {game.mindmaster.IRankItem=} [properties] Properties to set
             */
            function RankItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RankItem rank.
             * @member {number|Long} rank
             * @memberof game.mindmaster.RankItem
             * @instance
             */
            RankItem.prototype.rank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RankItem avatar.
             * @member {string} avatar
             * @memberof game.mindmaster.RankItem
             * @instance
             */
            RankItem.prototype.avatar = "";

            /**
             * RankItem name.
             * @member {string} name
             * @memberof game.mindmaster.RankItem
             * @instance
             */
            RankItem.prototype.name = "";

            /**
             * RankItem star.
             * @member {number|Long} star
             * @memberof game.mindmaster.RankItem
             * @instance
             */
            RankItem.prototype.star = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified RankItem message. Does not implicitly {@link game.mindmaster.RankItem.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.RankItem
             * @static
             * @param {game.mindmaster.IRankItem} message RankItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rank != null && message.hasOwnProperty("rank"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.rank);
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatar);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.star != null && message.hasOwnProperty("star"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.star);
                return writer;
            };

            /**
             * Decodes a RankItem message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.RankItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.RankItem} RankItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.RankItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rank = reader.int64();
                        break;
                    case 2:
                        message.avatar = reader.string();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.star = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return RankItem;
        })();

        mindmaster.ResponseRankInfo = (function() {

            /**
             * Properties of a ResponseRankInfo.
             * @memberof game.mindmaster
             * @interface IResponseRankInfo
             * @property {game.mindmaster.IRankItem|null} [self] ResponseRankInfo self
             * @property {Array.<game.mindmaster.IRankItem>|null} [list] ResponseRankInfo list
             */

            /**
             * Constructs a new ResponseRankInfo.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseRankInfo.
             * @implements IResponseRankInfo
             * @constructor
             * @param {game.mindmaster.IResponseRankInfo=} [properties] Properties to set
             */
            function ResponseRankInfo(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseRankInfo self.
             * @member {game.mindmaster.IRankItem|null|undefined} self
             * @memberof game.mindmaster.ResponseRankInfo
             * @instance
             */
            ResponseRankInfo.prototype.self = null;

            /**
             * ResponseRankInfo list.
             * @member {Array.<game.mindmaster.IRankItem>} list
             * @memberof game.mindmaster.ResponseRankInfo
             * @instance
             */
            ResponseRankInfo.prototype.list = $util.emptyArray;

            /**
             * Encodes the specified ResponseRankInfo message. Does not implicitly {@link game.mindmaster.ResponseRankInfo.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseRankInfo
             * @static
             * @param {game.mindmaster.IResponseRankInfo} message ResponseRankInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRankInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.self != null && message.hasOwnProperty("self"))
                    $root.game.mindmaster.RankItem.encode(message.self, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.list != null && message.list.length)
                    for (var i = 0; i < message.list.length; ++i)
                        $root.game.mindmaster.RankItem.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ResponseRankInfo message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseRankInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseRankInfo} ResponseRankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRankInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseRankInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.self = $root.game.mindmaster.RankItem.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.game.mindmaster.RankItem.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseRankInfo;
        })();

        mindmaster.ResponseStartChallange = (function() {

            /**
             * Properties of a ResponseStartChallange.
             * @memberof game.mindmaster
             * @interface IResponseStartChallange
             * @property {Array.<number|Long>|null} [list] ResponseStartChallange list
             */

            /**
             * Constructs a new ResponseStartChallange.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseStartChallange.
             * @implements IResponseStartChallange
             * @constructor
             * @param {game.mindmaster.IResponseStartChallange=} [properties] Properties to set
             */
            function ResponseStartChallange(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseStartChallange list.
             * @member {Array.<number|Long>} list
             * @memberof game.mindmaster.ResponseStartChallange
             * @instance
             */
            ResponseStartChallange.prototype.list = $util.emptyArray;

            /**
             * Encodes the specified ResponseStartChallange message. Does not implicitly {@link game.mindmaster.ResponseStartChallange.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseStartChallange
             * @static
             * @param {game.mindmaster.IResponseStartChallange} message ResponseStartChallange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseStartChallange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.list.length; ++i)
                        writer.int64(message.list[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Decodes a ResponseStartChallange message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseStartChallange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseStartChallange} ResponseStartChallange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseStartChallange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseStartChallange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.list.push(reader.int64());
                        } else
                            message.list.push(reader.int64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseStartChallange;
        })();

        mindmaster.ResponseVideoRelive = (function() {

            /**
             * Properties of a ResponseVideoRelive.
             * @memberof game.mindmaster
             * @interface IResponseVideoRelive
             * @property {number|Long|null} [left_video_times] ResponseVideoRelive left_video_times
             */

            /**
             * Constructs a new ResponseVideoRelive.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseVideoRelive.
             * @implements IResponseVideoRelive
             * @constructor
             * @param {game.mindmaster.IResponseVideoRelive=} [properties] Properties to set
             */
            function ResponseVideoRelive(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseVideoRelive left_video_times.
             * @member {number|Long} left_video_times
             * @memberof game.mindmaster.ResponseVideoRelive
             * @instance
             */
            ResponseVideoRelive.prototype.left_video_times = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified ResponseVideoRelive message. Does not implicitly {@link game.mindmaster.ResponseVideoRelive.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseVideoRelive
             * @static
             * @param {game.mindmaster.IResponseVideoRelive} message ResponseVideoRelive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseVideoRelive.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.left_video_times != null && message.hasOwnProperty("left_video_times"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.left_video_times);
                return writer;
            };

            /**
             * Decodes a ResponseVideoRelive message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseVideoRelive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseVideoRelive} ResponseVideoRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseVideoRelive.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseVideoRelive();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.left_video_times = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseVideoRelive;
        })();

        mindmaster.ResponseAnswerSubmit = (function() {

            /**
             * Properties of a ResponseAnswerSubmit.
             * @memberof game.mindmaster
             * @interface IResponseAnswerSubmit
             * @property {number|Long|null} [star] ResponseAnswerSubmit star
             * @property {number|Long|null} [power] ResponseAnswerSubmit power
             * @property {number|Long|null} [gold] ResponseAnswerSubmit gold
             */

            /**
             * Constructs a new ResponseAnswerSubmit.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseAnswerSubmit.
             * @implements IResponseAnswerSubmit
             * @constructor
             * @param {game.mindmaster.IResponseAnswerSubmit=} [properties] Properties to set
             */
            function ResponseAnswerSubmit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseAnswerSubmit star.
             * @member {number|Long} star
             * @memberof game.mindmaster.ResponseAnswerSubmit
             * @instance
             */
            ResponseAnswerSubmit.prototype.star = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseAnswerSubmit power.
             * @member {number|Long} power
             * @memberof game.mindmaster.ResponseAnswerSubmit
             * @instance
             */
            ResponseAnswerSubmit.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseAnswerSubmit gold.
             * @member {number|Long} gold
             * @memberof game.mindmaster.ResponseAnswerSubmit
             * @instance
             */
            ResponseAnswerSubmit.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified ResponseAnswerSubmit message. Does not implicitly {@link game.mindmaster.ResponseAnswerSubmit.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseAnswerSubmit
             * @static
             * @param {game.mindmaster.IResponseAnswerSubmit} message ResponseAnswerSubmit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseAnswerSubmit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.star != null && message.hasOwnProperty("star"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.star);
                if (message.power != null && message.hasOwnProperty("power"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.power);
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.gold);
                return writer;
            };

            /**
             * Decodes a ResponseAnswerSubmit message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseAnswerSubmit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseAnswerSubmit} ResponseAnswerSubmit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseAnswerSubmit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseAnswerSubmit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.star = reader.int64();
                        break;
                    case 2:
                        message.power = reader.int64();
                        break;
                    case 3:
                        message.gold = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseAnswerSubmit;
        })();

        mindmaster.ResponseMiaoCoinExchange = (function() {

            /**
             * Properties of a ResponseMiaoCoinExchange.
             * @memberof game.mindmaster
             * @interface IResponseMiaoCoinExchange
             */

            /**
             * Constructs a new ResponseMiaoCoinExchange.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseMiaoCoinExchange.
             * @implements IResponseMiaoCoinExchange
             * @constructor
             * @param {game.mindmaster.IResponseMiaoCoinExchange=} [properties] Properties to set
             */
            function ResponseMiaoCoinExchange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified ResponseMiaoCoinExchange message. Does not implicitly {@link game.mindmaster.ResponseMiaoCoinExchange.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseMiaoCoinExchange
             * @static
             * @param {game.mindmaster.IResponseMiaoCoinExchange} message ResponseMiaoCoinExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseMiaoCoinExchange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a ResponseMiaoCoinExchange message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseMiaoCoinExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseMiaoCoinExchange} ResponseMiaoCoinExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseMiaoCoinExchange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseMiaoCoinExchange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseMiaoCoinExchange;
        })();

        mindmaster.ResponseHeartBeat = (function() {

            /**
             * Properties of a ResponseHeartBeat.
             * @memberof game.mindmaster
             * @interface IResponseHeartBeat
             * @property {number|Long|null} [time] ResponseHeartBeat time
             */

            /**
             * Constructs a new ResponseHeartBeat.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseHeartBeat.
             * @implements IResponseHeartBeat
             * @constructor
             * @param {game.mindmaster.IResponseHeartBeat=} [properties] Properties to set
             */
            function ResponseHeartBeat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseHeartBeat time.
             * @member {number|Long} time
             * @memberof game.mindmaster.ResponseHeartBeat
             * @instance
             */
            ResponseHeartBeat.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified ResponseHeartBeat message. Does not implicitly {@link game.mindmaster.ResponseHeartBeat.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseHeartBeat
             * @static
             * @param {game.mindmaster.IResponseHeartBeat} message ResponseHeartBeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseHeartBeat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
                return writer;
            };

            /**
             * Decodes a ResponseHeartBeat message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseHeartBeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseHeartBeat} ResponseHeartBeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseHeartBeat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseHeartBeat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.time = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseHeartBeat;
        })();

        mindmaster.ResponseVideoGiveUpRelive = (function() {

            /**
             * Properties of a ResponseVideoGiveUpRelive.
             * @memberof game.mindmaster
             * @interface IResponseVideoGiveUpRelive
             */

            /**
             * Constructs a new ResponseVideoGiveUpRelive.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseVideoGiveUpRelive.
             * @implements IResponseVideoGiveUpRelive
             * @constructor
             * @param {game.mindmaster.IResponseVideoGiveUpRelive=} [properties] Properties to set
             */
            function ResponseVideoGiveUpRelive(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified ResponseVideoGiveUpRelive message. Does not implicitly {@link game.mindmaster.ResponseVideoGiveUpRelive.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseVideoGiveUpRelive
             * @static
             * @param {game.mindmaster.IResponseVideoGiveUpRelive} message ResponseVideoGiveUpRelive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseVideoGiveUpRelive.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a ResponseVideoGiveUpRelive message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseVideoGiveUpRelive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseVideoGiveUpRelive} ResponseVideoGiveUpRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseVideoGiveUpRelive.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseVideoGiveUpRelive();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseVideoGiveUpRelive;
        })();

        mindmaster.ResponseVideoRecovery = (function() {

            /**
             * Properties of a ResponseVideoRecovery.
             * @memberof game.mindmaster
             * @interface IResponseVideoRecovery
             * @property {number|Long|null} [left_video_recovery_times] ResponseVideoRecovery left_video_recovery_times
             */

            /**
             * Constructs a new ResponseVideoRecovery.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseVideoRecovery.
             * @implements IResponseVideoRecovery
             * @constructor
             * @param {game.mindmaster.IResponseVideoRecovery=} [properties] Properties to set
             */
            function ResponseVideoRecovery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseVideoRecovery left_video_recovery_times.
             * @member {number|Long} left_video_recovery_times
             * @memberof game.mindmaster.ResponseVideoRecovery
             * @instance
             */
            ResponseVideoRecovery.prototype.left_video_recovery_times = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified ResponseVideoRecovery message. Does not implicitly {@link game.mindmaster.ResponseVideoRecovery.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseVideoRecovery
             * @static
             * @param {game.mindmaster.IResponseVideoRecovery} message ResponseVideoRecovery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseVideoRecovery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.left_video_recovery_times != null && message.hasOwnProperty("left_video_recovery_times"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.left_video_recovery_times);
                return writer;
            };

            /**
             * Decodes a ResponseVideoRecovery message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseVideoRecovery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseVideoRecovery} ResponseVideoRecovery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseVideoRecovery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseVideoRecovery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.left_video_recovery_times = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseVideoRecovery;
        })();

        mindmaster.ResponseUserInfoChanged = (function() {

            /**
             * Properties of a ResponseUserInfoChanged.
             * @memberof game.mindmaster
             * @interface IResponseUserInfoChanged
             * @property {number|Long|null} [gold] ResponseUserInfoChanged gold
             * @property {number|Long|null} [power] ResponseUserInfoChanged power
             * @property {number|Long|null} [power_time] ResponseUserInfoChanged power_time
             */

            /**
             * Constructs a new ResponseUserInfoChanged.
             * @memberof game.mindmaster
             * @classdesc Represents a ResponseUserInfoChanged.
             * @implements IResponseUserInfoChanged
             * @constructor
             * @param {game.mindmaster.IResponseUserInfoChanged=} [properties] Properties to set
             */
            function ResponseUserInfoChanged(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseUserInfoChanged gold.
             * @member {number|Long} gold
             * @memberof game.mindmaster.ResponseUserInfoChanged
             * @instance
             */
            ResponseUserInfoChanged.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseUserInfoChanged power.
             * @member {number|Long} power
             * @memberof game.mindmaster.ResponseUserInfoChanged
             * @instance
             */
            ResponseUserInfoChanged.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseUserInfoChanged power_time.
             * @member {number|Long} power_time
             * @memberof game.mindmaster.ResponseUserInfoChanged
             * @instance
             */
            ResponseUserInfoChanged.prototype.power_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified ResponseUserInfoChanged message. Does not implicitly {@link game.mindmaster.ResponseUserInfoChanged.verify|verify} messages.
             * @function encode
             * @memberof game.mindmaster.ResponseUserInfoChanged
             * @static
             * @param {game.mindmaster.IResponseUserInfoChanged} message ResponseUserInfoChanged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseUserInfoChanged.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gold);
                if (message.power != null && message.hasOwnProperty("power"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.power);
                if (message.power_time != null && message.hasOwnProperty("power_time"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.power_time);
                return writer;
            };

            /**
             * Decodes a ResponseUserInfoChanged message from the specified reader or buffer.
             * @function decode
             * @memberof game.mindmaster.ResponseUserInfoChanged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game.mindmaster.ResponseUserInfoChanged} ResponseUserInfoChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseUserInfoChanged.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.mindmaster.ResponseUserInfoChanged();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gold = reader.int64();
                        break;
                    case 2:
                        message.power = reader.int64();
                        break;
                    case 3:
                        message.power_time = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ResponseUserInfoChanged;
        })();

        return mindmaster;
    })();

    return game;
})();