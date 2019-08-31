$protobuf=protobuf;// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.doomsday_pt = (function() {

    /**
     * Namespace doomsday_pt.
     * @exports doomsday_pt
     * @namespace
     */
    var doomsday_pt = {};

    doomsday_pt.ResData = (function() {

        /**
         * Properties of a ResData.
         * @memberof doomsday_pt
         * @interface IResData
         * @property {number} result ResData result
         * @property {Array.<string>|null} [param] ResData param
         */

        /**
         * Constructs a new ResData.
         * @memberof doomsday_pt
         * @classdesc Represents a ResData.
         * @implements IResData
         * @constructor
         * @param {doomsday_pt.IResData=} [properties] Properties to set
         */
        function ResData(properties) {
            this.param = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResData result.
         * @member {number} result
         * @memberof doomsday_pt.ResData
         * @instance
         */
        ResData.prototype.result = 0;

        /**
         * ResData param.
         * @member {Array.<string>} param
         * @memberof doomsday_pt.ResData
         * @instance
         */
        ResData.prototype.param = $util.emptyArray;

        /**
         * Encodes the specified ResData message. Does not implicitly {@link doomsday_pt.ResData.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.ResData
         * @static
         * @param {doomsday_pt.IResData} message ResData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.param != null && message.param.length)
                for (var i = 0; i < message.param.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.param[i]);
            return writer;
        };

        /**
         * Decodes a ResData message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.ResData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.ResData} ResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.ResData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                case 2:
                    if (!(message.param && message.param.length))
                        message.param = [];
                    message.param.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        return ResData;
    })();

    doomsday_pt.DrawAward = (function() {

        /**
         * Properties of a DrawAward.
         * @memberof doomsday_pt
         * @interface IDrawAward
         * @property {number} award_type DrawAward award_type
         * @property {number} award_id DrawAward award_id
         * @property {number} award_num DrawAward award_num
         */

        /**
         * Constructs a new DrawAward.
         * @memberof doomsday_pt
         * @classdesc Represents a DrawAward.
         * @implements IDrawAward
         * @constructor
         * @param {doomsday_pt.IDrawAward=} [properties] Properties to set
         */
        function DrawAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawAward award_type.
         * @member {number} award_type
         * @memberof doomsday_pt.DrawAward
         * @instance
         */
        DrawAward.prototype.award_type = 0;

        /**
         * DrawAward award_id.
         * @member {number} award_id
         * @memberof doomsday_pt.DrawAward
         * @instance
         */
        DrawAward.prototype.award_id = 0;

        /**
         * DrawAward award_num.
         * @member {number} award_num
         * @memberof doomsday_pt.DrawAward
         * @instance
         */
        DrawAward.prototype.award_num = 0;

        /**
         * Encodes the specified DrawAward message. Does not implicitly {@link doomsday_pt.DrawAward.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.DrawAward
         * @static
         * @param {doomsday_pt.IDrawAward} message DrawAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.award_type);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.award_id);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.award_num);
            return writer;
        };

        /**
         * Decodes a DrawAward message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.DrawAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.DrawAward} DrawAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.DrawAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.award_type = reader.uint32();
                    break;
                case 2:
                    message.award_id = reader.uint32();
                    break;
                case 3:
                    message.award_num = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("award_type"))
                throw $util.ProtocolError("missing required 'award_type'", { instance: message });
            if (!message.hasOwnProperty("award_id"))
                throw $util.ProtocolError("missing required 'award_id'", { instance: message });
            if (!message.hasOwnProperty("award_num"))
                throw $util.ProtocolError("missing required 'award_num'", { instance: message });
            return message;
        };

        return DrawAward;
    })();

    doomsday_pt.HeroExpMsg = (function() {

        /**
         * Properties of a HeroExpMsg.
         * @memberof doomsday_pt
         * @interface IHeroExpMsg
         * @property {number} hero_id HeroExpMsg hero_id
         * @property {number} grade HeroExpMsg grade
         * @property {number} exp HeroExpMsg exp
         */

        /**
         * Constructs a new HeroExpMsg.
         * @memberof doomsday_pt
         * @classdesc Represents a HeroExpMsg.
         * @implements IHeroExpMsg
         * @constructor
         * @param {doomsday_pt.IHeroExpMsg=} [properties] Properties to set
         */
        function HeroExpMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroExpMsg hero_id.
         * @member {number} hero_id
         * @memberof doomsday_pt.HeroExpMsg
         * @instance
         */
        HeroExpMsg.prototype.hero_id = 0;

        /**
         * HeroExpMsg grade.
         * @member {number} grade
         * @memberof doomsday_pt.HeroExpMsg
         * @instance
         */
        HeroExpMsg.prototype.grade = 0;

        /**
         * HeroExpMsg exp.
         * @member {number} exp
         * @memberof doomsday_pt.HeroExpMsg
         * @instance
         */
        HeroExpMsg.prototype.exp = 0;

        /**
         * Encodes the specified HeroExpMsg message. Does not implicitly {@link doomsday_pt.HeroExpMsg.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.HeroExpMsg
         * @static
         * @param {doomsday_pt.IHeroExpMsg} message HeroExpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroExpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.hero_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.grade);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.exp);
            return writer;
        };

        /**
         * Decodes a HeroExpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.HeroExpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.HeroExpMsg} HeroExpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroExpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.HeroExpMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hero_id = reader.uint32();
                    break;
                case 2:
                    message.grade = reader.uint32();
                    break;
                case 3:
                    message.exp = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("hero_id"))
                throw $util.ProtocolError("missing required 'hero_id'", { instance: message });
            if (!message.hasOwnProperty("grade"))
                throw $util.ProtocolError("missing required 'grade'", { instance: message });
            if (!message.hasOwnProperty("exp"))
                throw $util.ProtocolError("missing required 'exp'", { instance: message });
            return message;
        };

        return HeroExpMsg;
    })();

    doomsday_pt.BattleAward = (function() {

        /**
         * Properties of a BattleAward.
         * @memberof doomsday_pt
         * @interface IBattleAward
         * @property {Array.<doomsday_pt.IDrawAward>|null} [draw_award] BattleAward draw_award
         * @property {Array.<doomsday_pt.IHeroExpMsg>|null} [hero_exp_msg] BattleAward hero_exp_msg
         */

        /**
         * Constructs a new BattleAward.
         * @memberof doomsday_pt
         * @classdesc Represents a BattleAward.
         * @implements IBattleAward
         * @constructor
         * @param {doomsday_pt.IBattleAward=} [properties] Properties to set
         */
        function BattleAward(properties) {
            this.draw_award = [];
            this.hero_exp_msg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleAward draw_award.
         * @member {Array.<doomsday_pt.IDrawAward>} draw_award
         * @memberof doomsday_pt.BattleAward
         * @instance
         */
        BattleAward.prototype.draw_award = $util.emptyArray;

        /**
         * BattleAward hero_exp_msg.
         * @member {Array.<doomsday_pt.IHeroExpMsg>} hero_exp_msg
         * @memberof doomsday_pt.BattleAward
         * @instance
         */
        BattleAward.prototype.hero_exp_msg = $util.emptyArray;

        /**
         * Encodes the specified BattleAward message. Does not implicitly {@link doomsday_pt.BattleAward.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.BattleAward
         * @static
         * @param {doomsday_pt.IBattleAward} message BattleAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.draw_award != null && message.draw_award.length)
                for (var i = 0; i < message.draw_award.length; ++i)
                    $root.doomsday_pt.DrawAward.encode(message.draw_award[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.hero_exp_msg != null && message.hero_exp_msg.length)
                for (var i = 0; i < message.hero_exp_msg.length; ++i)
                    $root.doomsday_pt.HeroExpMsg.encode(message.hero_exp_msg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a BattleAward message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.BattleAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.BattleAward} BattleAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.BattleAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.draw_award && message.draw_award.length))
                        message.draw_award = [];
                    message.draw_award.push($root.doomsday_pt.DrawAward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.hero_exp_msg && message.hero_exp_msg.length))
                        message.hero_exp_msg = [];
                    message.hero_exp_msg.push($root.doomsday_pt.HeroExpMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BattleAward;
    })();

    doomsday_pt.GetGoods = (function() {

        /**
         * Properties of a GetGoods.
         * @memberof doomsday_pt
         * @interface IGetGoods
         * @property {number} tab_id GetGoods tab_id
         * @property {number} number GetGoods number
         */

        /**
         * Constructs a new GetGoods.
         * @memberof doomsday_pt
         * @classdesc Represents a GetGoods.
         * @implements IGetGoods
         * @constructor
         * @param {doomsday_pt.IGetGoods=} [properties] Properties to set
         */
        function GetGoods(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGoods tab_id.
         * @member {number} tab_id
         * @memberof doomsday_pt.GetGoods
         * @instance
         */
        GetGoods.prototype.tab_id = 0;

        /**
         * GetGoods number.
         * @member {number} number
         * @memberof doomsday_pt.GetGoods
         * @instance
         */
        GetGoods.prototype.number = 0;

        /**
         * Encodes the specified GetGoods message. Does not implicitly {@link doomsday_pt.GetGoods.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.GetGoods
         * @static
         * @param {doomsday_pt.IGetGoods} message GetGoods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGoods.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tab_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.number);
            return writer;
        };

        /**
         * Decodes a GetGoods message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.GetGoods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.GetGoods} GetGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGoods.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.GetGoods();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tab_id = reader.uint32();
                    break;
                case 2:
                    message.number = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tab_id"))
                throw $util.ProtocolError("missing required 'tab_id'", { instance: message });
            if (!message.hasOwnProperty("number"))
                throw $util.ProtocolError("missing required 'number'", { instance: message });
            return message;
        };

        return GetGoods;
    })();

    doomsday_pt.Cs_10000001 = (function() {

        /**
         * Properties of a Cs_10000001.
         * @memberof doomsday_pt
         * @interface ICs_10000001
         * @property {string} mg_name Cs_10000001 mg_name
         * @property {number} id Cs_10000001 id
         * @property {number} num Cs_10000001 num
         */

        /**
         * Constructs a new Cs_10000001.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10000001.
         * @implements ICs_10000001
         * @constructor
         * @param {doomsday_pt.ICs_10000001=} [properties] Properties to set
         */
        function Cs_10000001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10000001 mg_name.
         * @member {string} mg_name
         * @memberof doomsday_pt.Cs_10000001
         * @instance
         */
        Cs_10000001.prototype.mg_name = "";

        /**
         * Cs_10000001 id.
         * @member {number} id
         * @memberof doomsday_pt.Cs_10000001
         * @instance
         */
        Cs_10000001.prototype.id = 0;

        /**
         * Cs_10000001 num.
         * @member {number} num
         * @memberof doomsday_pt.Cs_10000001
         * @instance
         */
        Cs_10000001.prototype.num = 0;

        /**
         * Encodes the specified Cs_10000001 message. Does not implicitly {@link doomsday_pt.Cs_10000001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10000001
         * @static
         * @param {doomsday_pt.ICs_10000001} message Cs_10000001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10000001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mg_name);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            return writer;
        };

        /**
         * Decodes a Cs_10000001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10000001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10000001} Cs_10000001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10000001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10000001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mg_name = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mg_name"))
                throw $util.ProtocolError("missing required 'mg_name'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        return Cs_10000001;
    })();

    doomsday_pt.Sc_10000001 = (function() {

        /**
         * Properties of a Sc_10000001.
         * @memberof doomsday_pt
         * @interface ISc_10000001
         * @property {doomsday_pt.IResData} res Sc_10000001 res
         */

        /**
         * Constructs a new Sc_10000001.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10000001.
         * @implements ISc_10000001
         * @constructor
         * @param {doomsday_pt.ISc_10000001=} [properties] Properties to set
         */
        function Sc_10000001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10000001 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10000001
         * @instance
         */
        Sc_10000001.prototype.res = null;

        /**
         * Encodes the specified Sc_10000001 message. Does not implicitly {@link doomsday_pt.Sc_10000001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10000001
         * @static
         * @param {doomsday_pt.ISc_10000001} message Sc_10000001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10000001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10000001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10000001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10000001} Sc_10000001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10000001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10000001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10000001;
    })();

    doomsday_pt.Pt_HeroMsg = (function() {

        /**
         * Properties of a Pt_HeroMsg.
         * @memberof doomsday_pt
         * @interface IPt_HeroMsg
         * @property {number|Long} hero_id Pt_HeroMsg hero_id
         * @property {number} index_id Pt_HeroMsg index_id
         * @property {number} grade Pt_HeroMsg grade
         */

        /**
         * Constructs a new Pt_HeroMsg.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_HeroMsg.
         * @implements IPt_HeroMsg
         * @constructor
         * @param {doomsday_pt.IPt_HeroMsg=} [properties] Properties to set
         */
        function Pt_HeroMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_HeroMsg hero_id.
         * @member {number|Long} hero_id
         * @memberof doomsday_pt.Pt_HeroMsg
         * @instance
         */
        Pt_HeroMsg.prototype.hero_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pt_HeroMsg index_id.
         * @member {number} index_id
         * @memberof doomsday_pt.Pt_HeroMsg
         * @instance
         */
        Pt_HeroMsg.prototype.index_id = 0;

        /**
         * Pt_HeroMsg grade.
         * @member {number} grade
         * @memberof doomsday_pt.Pt_HeroMsg
         * @instance
         */
        Pt_HeroMsg.prototype.grade = 0;

        /**
         * Encodes the specified Pt_HeroMsg message. Does not implicitly {@link doomsday_pt.Pt_HeroMsg.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_HeroMsg
         * @static
         * @param {doomsday_pt.IPt_HeroMsg} message Pt_HeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_HeroMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.hero_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.index_id);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.grade);
            return writer;
        };

        /**
         * Decodes a Pt_HeroMsg message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_HeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_HeroMsg} Pt_HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_HeroMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_HeroMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hero_id = reader.uint64();
                    break;
                case 2:
                    message.index_id = reader.uint32();
                    break;
                case 3:
                    message.grade = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("hero_id"))
                throw $util.ProtocolError("missing required 'hero_id'", { instance: message });
            if (!message.hasOwnProperty("index_id"))
                throw $util.ProtocolError("missing required 'index_id'", { instance: message });
            if (!message.hasOwnProperty("grade"))
                throw $util.ProtocolError("missing required 'grade'", { instance: message });
            return message;
        };

        return Pt_HeroMsg;
    })();

    doomsday_pt.Pt_RoleInfo = (function() {

        /**
         * Properties of a Pt_RoleInfo.
         * @memberof doomsday_pt
         * @interface IPt_RoleInfo
         * @property {number|Long} role_id Pt_RoleInfo role_id
         * @property {string} nickname Pt_RoleInfo nickname
         * @property {number|Long} exp_pool Pt_RoleInfo exp_pool
         * @property {number} vip_grade Pt_RoleInfo vip_grade
         * @property {number} vip_exp Pt_RoleInfo vip_exp
         * @property {number} gold_coin Pt_RoleInfo gold_coin
         * @property {number} diamond Pt_RoleInfo diamond
         * @property {number} fighting Pt_RoleInfo fighting
         * @property {Array.<doomsday_pt.IPt_HeroMsg>|null} [hero_list] Pt_RoleInfo hero_list
         */

        /**
         * Constructs a new Pt_RoleInfo.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_RoleInfo.
         * @implements IPt_RoleInfo
         * @constructor
         * @param {doomsday_pt.IPt_RoleInfo=} [properties] Properties to set
         */
        function Pt_RoleInfo(properties) {
            this.hero_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_RoleInfo role_id.
         * @member {number|Long} role_id
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.role_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pt_RoleInfo nickname.
         * @member {string} nickname
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.nickname = "";

        /**
         * Pt_RoleInfo exp_pool.
         * @member {number|Long} exp_pool
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.exp_pool = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pt_RoleInfo vip_grade.
         * @member {number} vip_grade
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.vip_grade = 0;

        /**
         * Pt_RoleInfo vip_exp.
         * @member {number} vip_exp
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.vip_exp = 0;

        /**
         * Pt_RoleInfo gold_coin.
         * @member {number} gold_coin
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.gold_coin = 0;

        /**
         * Pt_RoleInfo diamond.
         * @member {number} diamond
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.diamond = 0;

        /**
         * Pt_RoleInfo fighting.
         * @member {number} fighting
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.fighting = 0;

        /**
         * Pt_RoleInfo hero_list.
         * @member {Array.<doomsday_pt.IPt_HeroMsg>} hero_list
         * @memberof doomsday_pt.Pt_RoleInfo
         * @instance
         */
        Pt_RoleInfo.prototype.hero_list = $util.emptyArray;

        /**
         * Encodes the specified Pt_RoleInfo message. Does not implicitly {@link doomsday_pt.Pt_RoleInfo.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_RoleInfo
         * @static
         * @param {doomsday_pt.IPt_RoleInfo} message Pt_RoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_RoleInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.role_id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.exp_pool);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.vip_grade);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.vip_exp);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.gold_coin);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.diamond);
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.fighting);
            if (message.hero_list != null && message.hero_list.length)
                for (var i = 0; i < message.hero_list.length; ++i)
                    $root.doomsday_pt.Pt_HeroMsg.encode(message.hero_list[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Pt_RoleInfo message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_RoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_RoleInfo} Pt_RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_RoleInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_RoleInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.role_id = reader.uint64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.exp_pool = reader.uint64();
                    break;
                case 4:
                    message.vip_grade = reader.uint32();
                    break;
                case 5:
                    message.vip_exp = reader.uint32();
                    break;
                case 6:
                    message.gold_coin = reader.uint32();
                    break;
                case 7:
                    message.diamond = reader.uint32();
                    break;
                case 8:
                    message.fighting = reader.uint32();
                    break;
                case 9:
                    if (!(message.hero_list && message.hero_list.length))
                        message.hero_list = [];
                    message.hero_list.push($root.doomsday_pt.Pt_HeroMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("role_id"))
                throw $util.ProtocolError("missing required 'role_id'", { instance: message });
            if (!message.hasOwnProperty("nickname"))
                throw $util.ProtocolError("missing required 'nickname'", { instance: message });
            if (!message.hasOwnProperty("exp_pool"))
                throw $util.ProtocolError("missing required 'exp_pool'", { instance: message });
            if (!message.hasOwnProperty("vip_grade"))
                throw $util.ProtocolError("missing required 'vip_grade'", { instance: message });
            if (!message.hasOwnProperty("vip_exp"))
                throw $util.ProtocolError("missing required 'vip_exp'", { instance: message });
            if (!message.hasOwnProperty("gold_coin"))
                throw $util.ProtocolError("missing required 'gold_coin'", { instance: message });
            if (!message.hasOwnProperty("diamond"))
                throw $util.ProtocolError("missing required 'diamond'", { instance: message });
            if (!message.hasOwnProperty("fighting"))
                throw $util.ProtocolError("missing required 'fighting'", { instance: message });
            return message;
        };

        return Pt_RoleInfo;
    })();

    doomsday_pt.Pt_Currency = (function() {

        /**
         * Properties of a Pt_Currency.
         * @memberof doomsday_pt
         * @interface IPt_Currency
         * @property {number} exp_pool Pt_Currency exp_pool
         * @property {number} vip_grade Pt_Currency vip_grade
         * @property {number} vip_exp Pt_Currency vip_exp
         * @property {number} gold_coin Pt_Currency gold_coin
         * @property {number} diamond Pt_Currency diamond
         * @property {number} fighting Pt_Currency fighting
         */

        /**
         * Constructs a new Pt_Currency.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_Currency.
         * @implements IPt_Currency
         * @constructor
         * @param {doomsday_pt.IPt_Currency=} [properties] Properties to set
         */
        function Pt_Currency(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_Currency exp_pool.
         * @member {number} exp_pool
         * @memberof doomsday_pt.Pt_Currency
         * @instance
         */
        Pt_Currency.prototype.exp_pool = 0;

        /**
         * Pt_Currency vip_grade.
         * @member {number} vip_grade
         * @memberof doomsday_pt.Pt_Currency
         * @instance
         */
        Pt_Currency.prototype.vip_grade = 0;

        /**
         * Pt_Currency vip_exp.
         * @member {number} vip_exp
         * @memberof doomsday_pt.Pt_Currency
         * @instance
         */
        Pt_Currency.prototype.vip_exp = 0;

        /**
         * Pt_Currency gold_coin.
         * @member {number} gold_coin
         * @memberof doomsday_pt.Pt_Currency
         * @instance
         */
        Pt_Currency.prototype.gold_coin = 0;

        /**
         * Pt_Currency diamond.
         * @member {number} diamond
         * @memberof doomsday_pt.Pt_Currency
         * @instance
         */
        Pt_Currency.prototype.diamond = 0;

        /**
         * Pt_Currency fighting.
         * @member {number} fighting
         * @memberof doomsday_pt.Pt_Currency
         * @instance
         */
        Pt_Currency.prototype.fighting = 0;

        /**
         * Encodes the specified Pt_Currency message. Does not implicitly {@link doomsday_pt.Pt_Currency.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_Currency
         * @static
         * @param {doomsday_pt.IPt_Currency} message Pt_Currency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_Currency.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.exp_pool);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.vip_grade);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.vip_exp);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gold_coin);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.diamond);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.fighting);
            return writer;
        };

        /**
         * Decodes a Pt_Currency message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_Currency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_Currency} Pt_Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_Currency.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_Currency();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.exp_pool = reader.uint32();
                    break;
                case 2:
                    message.vip_grade = reader.uint32();
                    break;
                case 3:
                    message.vip_exp = reader.uint32();
                    break;
                case 4:
                    message.gold_coin = reader.uint32();
                    break;
                case 5:
                    message.diamond = reader.uint32();
                    break;
                case 6:
                    message.fighting = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("exp_pool"))
                throw $util.ProtocolError("missing required 'exp_pool'", { instance: message });
            if (!message.hasOwnProperty("vip_grade"))
                throw $util.ProtocolError("missing required 'vip_grade'", { instance: message });
            if (!message.hasOwnProperty("vip_exp"))
                throw $util.ProtocolError("missing required 'vip_exp'", { instance: message });
            if (!message.hasOwnProperty("gold_coin"))
                throw $util.ProtocolError("missing required 'gold_coin'", { instance: message });
            if (!message.hasOwnProperty("diamond"))
                throw $util.ProtocolError("missing required 'diamond'", { instance: message });
            if (!message.hasOwnProperty("fighting"))
                throw $util.ProtocolError("missing required 'fighting'", { instance: message });
            return message;
        };

        return Pt_Currency;
    })();

    doomsday_pt.Cs_10010001 = (function() {

        /**
         * Properties of a Cs_10010001.
         * @memberof doomsday_pt
         * @interface ICs_10010001
         * @property {number} account_id Cs_10010001 account_id
         * @property {string} token Cs_10010001 token
         */

        /**
         * Constructs a new Cs_10010001.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10010001.
         * @implements ICs_10010001
         * @constructor
         * @param {doomsday_pt.ICs_10010001=} [properties] Properties to set
         */
        function Cs_10010001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10010001 account_id.
         * @member {number} account_id
         * @memberof doomsday_pt.Cs_10010001
         * @instance
         */
        Cs_10010001.prototype.account_id = 0;

        /**
         * Cs_10010001 token.
         * @member {string} token
         * @memberof doomsday_pt.Cs_10010001
         * @instance
         */
        Cs_10010001.prototype.token = "";

        /**
         * Encodes the specified Cs_10010001 message. Does not implicitly {@link doomsday_pt.Cs_10010001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10010001
         * @static
         * @param {doomsday_pt.ICs_10010001} message Cs_10010001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10010001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Decodes a Cs_10010001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10010001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10010001} Cs_10010001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10010001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10010001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account_id"))
                throw $util.ProtocolError("missing required 'account_id'", { instance: message });
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            return message;
        };

        return Cs_10010001;
    })();

    doomsday_pt.Sc_10010001 = (function() {

        /**
         * Properties of a Sc_10010001.
         * @memberof doomsday_pt
         * @interface ISc_10010001
         * @property {doomsday_pt.IResData} res Sc_10010001 res
         * @property {doomsday_pt.IPt_RoleInfo|null} [role_info] Sc_10010001 role_info
         */

        /**
         * Constructs a new Sc_10010001.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10010001.
         * @implements ISc_10010001
         * @constructor
         * @param {doomsday_pt.ISc_10010001=} [properties] Properties to set
         */
        function Sc_10010001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10010001 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10010001
         * @instance
         */
        Sc_10010001.prototype.res = null;

        /**
         * Sc_10010001 role_info.
         * @member {doomsday_pt.IPt_RoleInfo|null|undefined} role_info
         * @memberof doomsday_pt.Sc_10010001
         * @instance
         */
        Sc_10010001.prototype.role_info = null;

        /**
         * Encodes the specified Sc_10010001 message. Does not implicitly {@link doomsday_pt.Sc_10010001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10010001
         * @static
         * @param {doomsday_pt.ISc_10010001} message Sc_10010001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10010001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.role_info != null && message.hasOwnProperty("role_info"))
                $root.doomsday_pt.Pt_RoleInfo.encode(message.role_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10010001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10010001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10010001} Sc_10010001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10010001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10010001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.role_info = $root.doomsday_pt.Pt_RoleInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10010001;
    })();

    doomsday_pt.Cs_10010002 = (function() {

        /**
         * Properties of a Cs_10010002.
         * @memberof doomsday_pt
         * @interface ICs_10010002
         * @property {number} account_id Cs_10010002 account_id
         * @property {string} token Cs_10010002 token
         * @property {string} nickname Cs_10010002 nickname
         * @property {number} hero_id Cs_10010002 hero_id
         */

        /**
         * Constructs a new Cs_10010002.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10010002.
         * @implements ICs_10010002
         * @constructor
         * @param {doomsday_pt.ICs_10010002=} [properties] Properties to set
         */
        function Cs_10010002(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10010002 account_id.
         * @member {number} account_id
         * @memberof doomsday_pt.Cs_10010002
         * @instance
         */
        Cs_10010002.prototype.account_id = 0;

        /**
         * Cs_10010002 token.
         * @member {string} token
         * @memberof doomsday_pt.Cs_10010002
         * @instance
         */
        Cs_10010002.prototype.token = "";

        /**
         * Cs_10010002 nickname.
         * @member {string} nickname
         * @memberof doomsday_pt.Cs_10010002
         * @instance
         */
        Cs_10010002.prototype.nickname = "";

        /**
         * Cs_10010002 hero_id.
         * @member {number} hero_id
         * @memberof doomsday_pt.Cs_10010002
         * @instance
         */
        Cs_10010002.prototype.hero_id = 0;

        /**
         * Encodes the specified Cs_10010002 message. Does not implicitly {@link doomsday_pt.Cs_10010002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10010002
         * @static
         * @param {doomsday_pt.ICs_10010002} message Cs_10010002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10010002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.hero_id);
            return writer;
        };

        /**
         * Decodes a Cs_10010002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10010002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10010002} Cs_10010002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10010002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10010002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.hero_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account_id"))
                throw $util.ProtocolError("missing required 'account_id'", { instance: message });
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            if (!message.hasOwnProperty("nickname"))
                throw $util.ProtocolError("missing required 'nickname'", { instance: message });
            if (!message.hasOwnProperty("hero_id"))
                throw $util.ProtocolError("missing required 'hero_id'", { instance: message });
            return message;
        };

        return Cs_10010002;
    })();

    doomsday_pt.Sc_10010002 = (function() {

        /**
         * Properties of a Sc_10010002.
         * @memberof doomsday_pt
         * @interface ISc_10010002
         * @property {doomsday_pt.IResData} res Sc_10010002 res
         */

        /**
         * Constructs a new Sc_10010002.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10010002.
         * @implements ISc_10010002
         * @constructor
         * @param {doomsday_pt.ISc_10010002=} [properties] Properties to set
         */
        function Sc_10010002(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10010002 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10010002
         * @instance
         */
        Sc_10010002.prototype.res = null;

        /**
         * Encodes the specified Sc_10010002 message. Does not implicitly {@link doomsday_pt.Sc_10010002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10010002
         * @static
         * @param {doomsday_pt.ISc_10010002} message Sc_10010002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10010002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10010002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10010002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10010002} Sc_10010002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10010002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10010002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10010002;
    })();

    doomsday_pt.Cs_10010003 = (function() {

        /**
         * Properties of a Cs_10010003.
         * @memberof doomsday_pt
         * @interface ICs_10010003
         * @property {number|null} [rand] Cs_10010003 rand
         */

        /**
         * Constructs a new Cs_10010003.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10010003.
         * @implements ICs_10010003
         * @constructor
         * @param {doomsday_pt.ICs_10010003=} [properties] Properties to set
         */
        function Cs_10010003(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10010003 rand.
         * @member {number} rand
         * @memberof doomsday_pt.Cs_10010003
         * @instance
         */
        Cs_10010003.prototype.rand = 0;

        /**
         * Encodes the specified Cs_10010003 message. Does not implicitly {@link doomsday_pt.Cs_10010003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10010003
         * @static
         * @param {doomsday_pt.ICs_10010003} message Cs_10010003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10010003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rand != null && message.hasOwnProperty("rand"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rand);
            return writer;
        };

        /**
         * Decodes a Cs_10010003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10010003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10010003} Cs_10010003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10010003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10010003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rand = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Cs_10010003;
    })();

    doomsday_pt.Sc_10010003 = (function() {

        /**
         * Properties of a Sc_10010003.
         * @memberof doomsday_pt
         * @interface ISc_10010003
         * @property {number} interval Sc_10010003 interval
         */

        /**
         * Constructs a new Sc_10010003.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10010003.
         * @implements ISc_10010003
         * @constructor
         * @param {doomsday_pt.ISc_10010003=} [properties] Properties to set
         */
        function Sc_10010003(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10010003 interval.
         * @member {number} interval
         * @memberof doomsday_pt.Sc_10010003
         * @instance
         */
        Sc_10010003.prototype.interval = 0;

        /**
         * Encodes the specified Sc_10010003 message. Does not implicitly {@link doomsday_pt.Sc_10010003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10010003
         * @static
         * @param {doomsday_pt.ISc_10010003} message Sc_10010003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10010003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.interval);
            return writer;
        };

        /**
         * Decodes a Sc_10010003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10010003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10010003} Sc_10010003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10010003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10010003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.interval = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("interval"))
                throw $util.ProtocolError("missing required 'interval'", { instance: message });
            return message;
        };

        return Sc_10010003;
    })();

    doomsday_pt.Sc_10010004 = (function() {

        /**
         * Properties of a Sc_10010004.
         * @memberof doomsday_pt
         * @interface ISc_10010004
         * @property {doomsday_pt.IResData} res Sc_10010004 res
         */

        /**
         * Constructs a new Sc_10010004.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10010004.
         * @implements ISc_10010004
         * @constructor
         * @param {doomsday_pt.ISc_10010004=} [properties] Properties to set
         */
        function Sc_10010004(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10010004 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10010004
         * @instance
         */
        Sc_10010004.prototype.res = null;

        /**
         * Encodes the specified Sc_10010004 message. Does not implicitly {@link doomsday_pt.Sc_10010004.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10010004
         * @static
         * @param {doomsday_pt.ISc_10010004} message Sc_10010004 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10010004.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10010004 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10010004
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10010004} Sc_10010004
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10010004.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10010004();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10010004;
    })();

    doomsday_pt.Sc_10010005 = (function() {

        /**
         * Properties of a Sc_10010005.
         * @memberof doomsday_pt
         * @interface ISc_10010005
         * @property {doomsday_pt.IPt_Currency} currency Sc_10010005 currency
         */

        /**
         * Constructs a new Sc_10010005.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10010005.
         * @implements ISc_10010005
         * @constructor
         * @param {doomsday_pt.ISc_10010005=} [properties] Properties to set
         */
        function Sc_10010005(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10010005 currency.
         * @member {doomsday_pt.IPt_Currency} currency
         * @memberof doomsday_pt.Sc_10010005
         * @instance
         */
        Sc_10010005.prototype.currency = null;

        /**
         * Encodes the specified Sc_10010005 message. Does not implicitly {@link doomsday_pt.Sc_10010005.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10010005
         * @static
         * @param {doomsday_pt.ISc_10010005} message Sc_10010005 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10010005.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.Pt_Currency.encode(message.currency, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10010005 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10010005
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10010005} Sc_10010005
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10010005.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10010005();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currency = $root.doomsday_pt.Pt_Currency.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("currency"))
                throw $util.ProtocolError("missing required 'currency'", { instance: message });
            return message;
        };

        return Sc_10010005;
    })();

    doomsday_pt.Pt_AttList = (function() {

        /**
         * Properties of a Pt_AttList.
         * @memberof doomsday_pt
         * @interface IPt_AttList
         * @property {number} att_id Pt_AttList att_id
         * @property {number} att_value Pt_AttList att_value
         */

        /**
         * Constructs a new Pt_AttList.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_AttList.
         * @implements IPt_AttList
         * @constructor
         * @param {doomsday_pt.IPt_AttList=} [properties] Properties to set
         */
        function Pt_AttList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_AttList att_id.
         * @member {number} att_id
         * @memberof doomsday_pt.Pt_AttList
         * @instance
         */
        Pt_AttList.prototype.att_id = 0;

        /**
         * Pt_AttList att_value.
         * @member {number} att_value
         * @memberof doomsday_pt.Pt_AttList
         * @instance
         */
        Pt_AttList.prototype.att_value = 0;

        /**
         * Encodes the specified Pt_AttList message. Does not implicitly {@link doomsday_pt.Pt_AttList.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_AttList
         * @static
         * @param {doomsday_pt.IPt_AttList} message Pt_AttList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_AttList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.att_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.att_value);
            return writer;
        };

        /**
         * Decodes a Pt_AttList message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_AttList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_AttList} Pt_AttList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_AttList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_AttList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.att_id = reader.uint32();
                    break;
                case 2:
                    message.att_value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("att_id"))
                throw $util.ProtocolError("missing required 'att_id'", { instance: message });
            if (!message.hasOwnProperty("att_value"))
                throw $util.ProtocolError("missing required 'att_value'", { instance: message });
            return message;
        };

        return Pt_AttList;
    })();

    doomsday_pt.Pt_HeroPanel = (function() {

        /**
         * Properties of a Pt_HeroPanel.
         * @memberof doomsday_pt
         * @interface IPt_HeroPanel
         * @property {number|Long} power Pt_HeroPanel power
         * @property {string} heroname Pt_HeroPanel heroname
         */

        /**
         * Constructs a new Pt_HeroPanel.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_HeroPanel.
         * @implements IPt_HeroPanel
         * @constructor
         * @param {doomsday_pt.IPt_HeroPanel=} [properties] Properties to set
         */
        function Pt_HeroPanel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_HeroPanel power.
         * @member {number|Long} power
         * @memberof doomsday_pt.Pt_HeroPanel
         * @instance
         */
        Pt_HeroPanel.prototype.power = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pt_HeroPanel heroname.
         * @member {string} heroname
         * @memberof doomsday_pt.Pt_HeroPanel
         * @instance
         */
        Pt_HeroPanel.prototype.heroname = "";

        /**
         * Encodes the specified Pt_HeroPanel message. Does not implicitly {@link doomsday_pt.Pt_HeroPanel.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_HeroPanel
         * @static
         * @param {doomsday_pt.IPt_HeroPanel} message Pt_HeroPanel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_HeroPanel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.power);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.heroname);
            return writer;
        };

        /**
         * Decodes a Pt_HeroPanel message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_HeroPanel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_HeroPanel} Pt_HeroPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_HeroPanel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_HeroPanel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.power = reader.uint64();
                    break;
                case 2:
                    message.heroname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("power"))
                throw $util.ProtocolError("missing required 'power'", { instance: message });
            if (!message.hasOwnProperty("heroname"))
                throw $util.ProtocolError("missing required 'heroname'", { instance: message });
            return message;
        };

        return Pt_HeroPanel;
    })();

    doomsday_pt.Pt_HeroInfo = (function() {

        /**
         * Properties of a Pt_HeroInfo.
         * @memberof doomsday_pt
         * @interface IPt_HeroInfo
         * @property {number|Long} hero_id Pt_HeroInfo hero_id
         * @property {number} index_id Pt_HeroInfo index_id
         * @property {string} heroname Pt_HeroInfo heroname
         * @property {number|Long} exper Pt_HeroInfo exper
         * @property {number} grade Pt_HeroInfo grade
         */

        /**
         * Constructs a new Pt_HeroInfo.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_HeroInfo.
         * @implements IPt_HeroInfo
         * @constructor
         * @param {doomsday_pt.IPt_HeroInfo=} [properties] Properties to set
         */
        function Pt_HeroInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_HeroInfo hero_id.
         * @member {number|Long} hero_id
         * @memberof doomsday_pt.Pt_HeroInfo
         * @instance
         */
        Pt_HeroInfo.prototype.hero_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pt_HeroInfo index_id.
         * @member {number} index_id
         * @memberof doomsday_pt.Pt_HeroInfo
         * @instance
         */
        Pt_HeroInfo.prototype.index_id = 0;

        /**
         * Pt_HeroInfo heroname.
         * @member {string} heroname
         * @memberof doomsday_pt.Pt_HeroInfo
         * @instance
         */
        Pt_HeroInfo.prototype.heroname = "";

        /**
         * Pt_HeroInfo exper.
         * @member {number|Long} exper
         * @memberof doomsday_pt.Pt_HeroInfo
         * @instance
         */
        Pt_HeroInfo.prototype.exper = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pt_HeroInfo grade.
         * @member {number} grade
         * @memberof doomsday_pt.Pt_HeroInfo
         * @instance
         */
        Pt_HeroInfo.prototype.grade = 0;

        /**
         * Encodes the specified Pt_HeroInfo message. Does not implicitly {@link doomsday_pt.Pt_HeroInfo.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_HeroInfo
         * @static
         * @param {doomsday_pt.IPt_HeroInfo} message Pt_HeroInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_HeroInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.hero_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.index_id);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.heroname);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.exper);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.grade);
            return writer;
        };

        /**
         * Decodes a Pt_HeroInfo message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_HeroInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_HeroInfo} Pt_HeroInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_HeroInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_HeroInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hero_id = reader.uint64();
                    break;
                case 2:
                    message.index_id = reader.uint32();
                    break;
                case 3:
                    message.heroname = reader.string();
                    break;
                case 4:
                    message.exper = reader.uint64();
                    break;
                case 5:
                    message.grade = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("hero_id"))
                throw $util.ProtocolError("missing required 'hero_id'", { instance: message });
            if (!message.hasOwnProperty("index_id"))
                throw $util.ProtocolError("missing required 'index_id'", { instance: message });
            if (!message.hasOwnProperty("heroname"))
                throw $util.ProtocolError("missing required 'heroname'", { instance: message });
            if (!message.hasOwnProperty("exper"))
                throw $util.ProtocolError("missing required 'exper'", { instance: message });
            if (!message.hasOwnProperty("grade"))
                throw $util.ProtocolError("missing required 'grade'", { instance: message });
            return message;
        };

        return Pt_HeroInfo;
    })();

    doomsday_pt.Cs_10020001 = (function() {

        /**
         * Properties of a Cs_10020001.
         * @memberof doomsday_pt
         * @interface ICs_10020001
         * @property {number|Long} hero_id Cs_10020001 hero_id
         */

        /**
         * Constructs a new Cs_10020001.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10020001.
         * @implements ICs_10020001
         * @constructor
         * @param {doomsday_pt.ICs_10020001=} [properties] Properties to set
         */
        function Cs_10020001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10020001 hero_id.
         * @member {number|Long} hero_id
         * @memberof doomsday_pt.Cs_10020001
         * @instance
         */
        Cs_10020001.prototype.hero_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Encodes the specified Cs_10020001 message. Does not implicitly {@link doomsday_pt.Cs_10020001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10020001
         * @static
         * @param {doomsday_pt.ICs_10020001} message Cs_10020001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10020001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.hero_id);
            return writer;
        };

        /**
         * Decodes a Cs_10020001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10020001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10020001} Cs_10020001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10020001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10020001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hero_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("hero_id"))
                throw $util.ProtocolError("missing required 'hero_id'", { instance: message });
            return message;
        };

        return Cs_10020001;
    })();

    doomsday_pt.Sc_10020001 = (function() {

        /**
         * Properties of a Sc_10020001.
         * @memberof doomsday_pt
         * @interface ISc_10020001
         * @property {Array.<doomsday_pt.IPt_AttList>|null} [att_list] Sc_10020001 att_list
         */

        /**
         * Constructs a new Sc_10020001.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10020001.
         * @implements ISc_10020001
         * @constructor
         * @param {doomsday_pt.ISc_10020001=} [properties] Properties to set
         */
        function Sc_10020001(properties) {
            this.att_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10020001 att_list.
         * @member {Array.<doomsday_pt.IPt_AttList>} att_list
         * @memberof doomsday_pt.Sc_10020001
         * @instance
         */
        Sc_10020001.prototype.att_list = $util.emptyArray;

        /**
         * Encodes the specified Sc_10020001 message. Does not implicitly {@link doomsday_pt.Sc_10020001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10020001
         * @static
         * @param {doomsday_pt.ISc_10020001} message Sc_10020001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10020001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.att_list != null && message.att_list.length)
                for (var i = 0; i < message.att_list.length; ++i)
                    $root.doomsday_pt.Pt_AttList.encode(message.att_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10020001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10020001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10020001} Sc_10020001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10020001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10020001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.att_list && message.att_list.length))
                        message.att_list = [];
                    message.att_list.push($root.doomsday_pt.Pt_AttList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Sc_10020001;
    })();

    doomsday_pt.Cs_10020002 = (function() {

        /**
         * Properties of a Cs_10020002.
         * @memberof doomsday_pt
         * @interface ICs_10020002
         * @property {number|Long} hero_id Cs_10020002 hero_id
         */

        /**
         * Constructs a new Cs_10020002.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10020002.
         * @implements ICs_10020002
         * @constructor
         * @param {doomsday_pt.ICs_10020002=} [properties] Properties to set
         */
        function Cs_10020002(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10020002 hero_id.
         * @member {number|Long} hero_id
         * @memberof doomsday_pt.Cs_10020002
         * @instance
         */
        Cs_10020002.prototype.hero_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Encodes the specified Cs_10020002 message. Does not implicitly {@link doomsday_pt.Cs_10020002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10020002
         * @static
         * @param {doomsday_pt.ICs_10020002} message Cs_10020002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10020002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.hero_id);
            return writer;
        };

        /**
         * Decodes a Cs_10020002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10020002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10020002} Cs_10020002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10020002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10020002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hero_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("hero_id"))
                throw $util.ProtocolError("missing required 'hero_id'", { instance: message });
            return message;
        };

        return Cs_10020002;
    })();

    doomsday_pt.Sc_10020002 = (function() {

        /**
         * Properties of a Sc_10020002.
         * @memberof doomsday_pt
         * @interface ISc_10020002
         * @property {doomsday_pt.IPt_HeroPanel} HeroPanel Sc_10020002 HeroPanel
         * @property {Array.<doomsday_pt.IPt_AttList>|null} [att_list] Sc_10020002 att_list
         */

        /**
         * Constructs a new Sc_10020002.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10020002.
         * @implements ISc_10020002
         * @constructor
         * @param {doomsday_pt.ISc_10020002=} [properties] Properties to set
         */
        function Sc_10020002(properties) {
            this.att_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10020002 HeroPanel.
         * @member {doomsday_pt.IPt_HeroPanel} HeroPanel
         * @memberof doomsday_pt.Sc_10020002
         * @instance
         */
        Sc_10020002.prototype.HeroPanel = null;

        /**
         * Sc_10020002 att_list.
         * @member {Array.<doomsday_pt.IPt_AttList>} att_list
         * @memberof doomsday_pt.Sc_10020002
         * @instance
         */
        Sc_10020002.prototype.att_list = $util.emptyArray;

        /**
         * Encodes the specified Sc_10020002 message. Does not implicitly {@link doomsday_pt.Sc_10020002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10020002
         * @static
         * @param {doomsday_pt.ISc_10020002} message Sc_10020002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10020002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.Pt_HeroPanel.encode(message.HeroPanel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.att_list != null && message.att_list.length)
                for (var i = 0; i < message.att_list.length; ++i)
                    $root.doomsday_pt.Pt_AttList.encode(message.att_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10020002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10020002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10020002} Sc_10020002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10020002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10020002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HeroPanel = $root.doomsday_pt.Pt_HeroPanel.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.att_list && message.att_list.length))
                        message.att_list = [];
                    message.att_list.push($root.doomsday_pt.Pt_AttList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("HeroPanel"))
                throw $util.ProtocolError("missing required 'HeroPanel'", { instance: message });
            return message;
        };

        return Sc_10020002;
    })();

    doomsday_pt.Cs_10020003 = (function() {

        /**
         * Properties of a Cs_10020003.
         * @memberof doomsday_pt
         * @interface ICs_10020003
         * @property {number|null} [rand] Cs_10020003 rand
         */

        /**
         * Constructs a new Cs_10020003.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10020003.
         * @implements ICs_10020003
         * @constructor
         * @param {doomsday_pt.ICs_10020003=} [properties] Properties to set
         */
        function Cs_10020003(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10020003 rand.
         * @member {number} rand
         * @memberof doomsday_pt.Cs_10020003
         * @instance
         */
        Cs_10020003.prototype.rand = 0;

        /**
         * Encodes the specified Cs_10020003 message. Does not implicitly {@link doomsday_pt.Cs_10020003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10020003
         * @static
         * @param {doomsday_pt.ICs_10020003} message Cs_10020003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10020003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rand != null && message.hasOwnProperty("rand"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rand);
            return writer;
        };

        /**
         * Decodes a Cs_10020003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10020003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10020003} Cs_10020003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10020003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10020003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rand = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Cs_10020003;
    })();

    doomsday_pt.Sc_10020003 = (function() {

        /**
         * Properties of a Sc_10020003.
         * @memberof doomsday_pt
         * @interface ISc_10020003
         * @property {number|Long} exper_pool Sc_10020003 exper_pool
         * @property {Array.<doomsday_pt.IPt_HeroInfo>|null} [hero_list] Sc_10020003 hero_list
         */

        /**
         * Constructs a new Sc_10020003.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10020003.
         * @implements ISc_10020003
         * @constructor
         * @param {doomsday_pt.ISc_10020003=} [properties] Properties to set
         */
        function Sc_10020003(properties) {
            this.hero_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10020003 exper_pool.
         * @member {number|Long} exper_pool
         * @memberof doomsday_pt.Sc_10020003
         * @instance
         */
        Sc_10020003.prototype.exper_pool = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Sc_10020003 hero_list.
         * @member {Array.<doomsday_pt.IPt_HeroInfo>} hero_list
         * @memberof doomsday_pt.Sc_10020003
         * @instance
         */
        Sc_10020003.prototype.hero_list = $util.emptyArray;

        /**
         * Encodes the specified Sc_10020003 message. Does not implicitly {@link doomsday_pt.Sc_10020003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10020003
         * @static
         * @param {doomsday_pt.ISc_10020003} message Sc_10020003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10020003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.exper_pool);
            if (message.hero_list != null && message.hero_list.length)
                for (var i = 0; i < message.hero_list.length; ++i)
                    $root.doomsday_pt.Pt_HeroInfo.encode(message.hero_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10020003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10020003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10020003} Sc_10020003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10020003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10020003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.exper_pool = reader.uint64();
                    break;
                case 2:
                    if (!(message.hero_list && message.hero_list.length))
                        message.hero_list = [];
                    message.hero_list.push($root.doomsday_pt.Pt_HeroInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("exper_pool"))
                throw $util.ProtocolError("missing required 'exper_pool'", { instance: message });
            return message;
        };

        return Sc_10020003;
    })();

    doomsday_pt.Cs_10020004 = (function() {

        /**
         * Properties of a Cs_10020004.
         * @memberof doomsday_pt
         * @interface ICs_10020004
         * @property {number|Long} hero_id Cs_10020004 hero_id
         */

        /**
         * Constructs a new Cs_10020004.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10020004.
         * @implements ICs_10020004
         * @constructor
         * @param {doomsday_pt.ICs_10020004=} [properties] Properties to set
         */
        function Cs_10020004(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10020004 hero_id.
         * @member {number|Long} hero_id
         * @memberof doomsday_pt.Cs_10020004
         * @instance
         */
        Cs_10020004.prototype.hero_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Encodes the specified Cs_10020004 message. Does not implicitly {@link doomsday_pt.Cs_10020004.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10020004
         * @static
         * @param {doomsday_pt.ICs_10020004} message Cs_10020004 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10020004.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.hero_id);
            return writer;
        };

        /**
         * Decodes a Cs_10020004 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10020004
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10020004} Cs_10020004
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10020004.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10020004();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hero_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("hero_id"))
                throw $util.ProtocolError("missing required 'hero_id'", { instance: message });
            return message;
        };

        return Cs_10020004;
    })();

    doomsday_pt.Sc_10020004 = (function() {

        /**
         * Properties of a Sc_10020004.
         * @memberof doomsday_pt
         * @interface ISc_10020004
         * @property {doomsday_pt.IResData} res Sc_10020004 res
         * @property {doomsday_pt.IPt_HeroInfo} hero_info Sc_10020004 hero_info
         */

        /**
         * Constructs a new Sc_10020004.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10020004.
         * @implements ISc_10020004
         * @constructor
         * @param {doomsday_pt.ISc_10020004=} [properties] Properties to set
         */
        function Sc_10020004(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10020004 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10020004
         * @instance
         */
        Sc_10020004.prototype.res = null;

        /**
         * Sc_10020004 hero_info.
         * @member {doomsday_pt.IPt_HeroInfo} hero_info
         * @memberof doomsday_pt.Sc_10020004
         * @instance
         */
        Sc_10020004.prototype.hero_info = null;

        /**
         * Encodes the specified Sc_10020004 message. Does not implicitly {@link doomsday_pt.Sc_10020004.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10020004
         * @static
         * @param {doomsday_pt.ISc_10020004} message Sc_10020004 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10020004.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.doomsday_pt.Pt_HeroInfo.encode(message.hero_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10020004 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10020004
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10020004} Sc_10020004
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10020004.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10020004();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hero_info = $root.doomsday_pt.Pt_HeroInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            if (!message.hasOwnProperty("hero_info"))
                throw $util.ProtocolError("missing required 'hero_info'", { instance: message });
            return message;
        };

        return Sc_10020004;
    })();

    doomsday_pt.Pt_GoodsMsg = (function() {

        /**
         * Properties of a Pt_GoodsMsg.
         * @memberof doomsday_pt
         * @interface IPt_GoodsMsg
         * @property {number|Long} id Pt_GoodsMsg id
         * @property {number} base_id Pt_GoodsMsg base_id
         * @property {number} num Pt_GoodsMsg num
         * @property {number|null} [valid_time] Pt_GoodsMsg valid_time
         */

        /**
         * Constructs a new Pt_GoodsMsg.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_GoodsMsg.
         * @implements IPt_GoodsMsg
         * @constructor
         * @param {doomsday_pt.IPt_GoodsMsg=} [properties] Properties to set
         */
        function Pt_GoodsMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_GoodsMsg id.
         * @member {number|Long} id
         * @memberof doomsday_pt.Pt_GoodsMsg
         * @instance
         */
        Pt_GoodsMsg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pt_GoodsMsg base_id.
         * @member {number} base_id
         * @memberof doomsday_pt.Pt_GoodsMsg
         * @instance
         */
        Pt_GoodsMsg.prototype.base_id = 0;

        /**
         * Pt_GoodsMsg num.
         * @member {number} num
         * @memberof doomsday_pt.Pt_GoodsMsg
         * @instance
         */
        Pt_GoodsMsg.prototype.num = 0;

        /**
         * Pt_GoodsMsg valid_time.
         * @member {number} valid_time
         * @memberof doomsday_pt.Pt_GoodsMsg
         * @instance
         */
        Pt_GoodsMsg.prototype.valid_time = 0;

        /**
         * Encodes the specified Pt_GoodsMsg message. Does not implicitly {@link doomsday_pt.Pt_GoodsMsg.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_GoodsMsg
         * @static
         * @param {doomsday_pt.IPt_GoodsMsg} message Pt_GoodsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_GoodsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.base_id);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.num);
            if (message.valid_time != null && message.hasOwnProperty("valid_time"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.valid_time);
            return writer;
        };

        /**
         * Decodes a Pt_GoodsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_GoodsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_GoodsMsg} Pt_GoodsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_GoodsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_GoodsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.base_id = reader.uint32();
                    break;
                case 3:
                    message.num = reader.uint32();
                    break;
                case 4:
                    message.valid_time = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("base_id"))
                throw $util.ProtocolError("missing required 'base_id'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        return Pt_GoodsMsg;
    })();

    doomsday_pt.Sc_10030001 = (function() {

        /**
         * Properties of a Sc_10030001.
         * @memberof doomsday_pt
         * @interface ISc_10030001
         * @property {number} now_time Sc_10030001 now_time
         * @property {Array.<doomsday_pt.IPt_GoodsMsg>|null} [bag_msg] Sc_10030001 bag_msg
         * @property {Array.<doomsday_pt.IPt_GoodsMsg>|null} [entrepot_msg] Sc_10030001 entrepot_msg
         */

        /**
         * Constructs a new Sc_10030001.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10030001.
         * @implements ISc_10030001
         * @constructor
         * @param {doomsday_pt.ISc_10030001=} [properties] Properties to set
         */
        function Sc_10030001(properties) {
            this.bag_msg = [];
            this.entrepot_msg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10030001 now_time.
         * @member {number} now_time
         * @memberof doomsday_pt.Sc_10030001
         * @instance
         */
        Sc_10030001.prototype.now_time = 0;

        /**
         * Sc_10030001 bag_msg.
         * @member {Array.<doomsday_pt.IPt_GoodsMsg>} bag_msg
         * @memberof doomsday_pt.Sc_10030001
         * @instance
         */
        Sc_10030001.prototype.bag_msg = $util.emptyArray;

        /**
         * Sc_10030001 entrepot_msg.
         * @member {Array.<doomsday_pt.IPt_GoodsMsg>} entrepot_msg
         * @memberof doomsday_pt.Sc_10030001
         * @instance
         */
        Sc_10030001.prototype.entrepot_msg = $util.emptyArray;

        /**
         * Encodes the specified Sc_10030001 message. Does not implicitly {@link doomsday_pt.Sc_10030001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10030001
         * @static
         * @param {doomsday_pt.ISc_10030001} message Sc_10030001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10030001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.now_time);
            if (message.bag_msg != null && message.bag_msg.length)
                for (var i = 0; i < message.bag_msg.length; ++i)
                    $root.doomsday_pt.Pt_GoodsMsg.encode(message.bag_msg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.entrepot_msg != null && message.entrepot_msg.length)
                for (var i = 0; i < message.entrepot_msg.length; ++i)
                    $root.doomsday_pt.Pt_GoodsMsg.encode(message.entrepot_msg[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10030001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10030001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10030001} Sc_10030001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10030001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10030001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.now_time = reader.uint32();
                    break;
                case 2:
                    if (!(message.bag_msg && message.bag_msg.length))
                        message.bag_msg = [];
                    message.bag_msg.push($root.doomsday_pt.Pt_GoodsMsg.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.entrepot_msg && message.entrepot_msg.length))
                        message.entrepot_msg = [];
                    message.entrepot_msg.push($root.doomsday_pt.Pt_GoodsMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("now_time"))
                throw $util.ProtocolError("missing required 'now_time'", { instance: message });
            return message;
        };

        return Sc_10030001;
    })();

    doomsday_pt.Sc_10030002 = (function() {

        /**
         * Properties of a Sc_10030002.
         * @memberof doomsday_pt
         * @interface ISc_10030002
         * @property {number} location Sc_10030002 location
         * @property {Array.<doomsday_pt.IPt_GoodsMsg>|null} [goods_msg] Sc_10030002 goods_msg
         */

        /**
         * Constructs a new Sc_10030002.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10030002.
         * @implements ISc_10030002
         * @constructor
         * @param {doomsday_pt.ISc_10030002=} [properties] Properties to set
         */
        function Sc_10030002(properties) {
            this.goods_msg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10030002 location.
         * @member {number} location
         * @memberof doomsday_pt.Sc_10030002
         * @instance
         */
        Sc_10030002.prototype.location = 0;

        /**
         * Sc_10030002 goods_msg.
         * @member {Array.<doomsday_pt.IPt_GoodsMsg>} goods_msg
         * @memberof doomsday_pt.Sc_10030002
         * @instance
         */
        Sc_10030002.prototype.goods_msg = $util.emptyArray;

        /**
         * Encodes the specified Sc_10030002 message. Does not implicitly {@link doomsday_pt.Sc_10030002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10030002
         * @static
         * @param {doomsday_pt.ISc_10030002} message Sc_10030002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10030002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.location);
            if (message.goods_msg != null && message.goods_msg.length)
                for (var i = 0; i < message.goods_msg.length; ++i)
                    $root.doomsday_pt.Pt_GoodsMsg.encode(message.goods_msg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10030002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10030002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10030002} Sc_10030002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10030002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10030002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.location = reader.uint32();
                    break;
                case 2:
                    if (!(message.goods_msg && message.goods_msg.length))
                        message.goods_msg = [];
                    message.goods_msg.push($root.doomsday_pt.Pt_GoodsMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("location"))
                throw $util.ProtocolError("missing required 'location'", { instance: message });
            return message;
        };

        return Sc_10030002;
    })();

    doomsday_pt.Cs_10030003 = (function() {

        /**
         * Properties of a Cs_10030003.
         * @memberof doomsday_pt
         * @interface ICs_10030003
         * @property {number|Long} id Cs_10030003 id
         * @property {number} num Cs_10030003 num
         */

        /**
         * Constructs a new Cs_10030003.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10030003.
         * @implements ICs_10030003
         * @constructor
         * @param {doomsday_pt.ICs_10030003=} [properties] Properties to set
         */
        function Cs_10030003(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10030003 id.
         * @member {number|Long} id
         * @memberof doomsday_pt.Cs_10030003
         * @instance
         */
        Cs_10030003.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Cs_10030003 num.
         * @member {number} num
         * @memberof doomsday_pt.Cs_10030003
         * @instance
         */
        Cs_10030003.prototype.num = 0;

        /**
         * Encodes the specified Cs_10030003 message. Does not implicitly {@link doomsday_pt.Cs_10030003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10030003
         * @static
         * @param {doomsday_pt.ICs_10030003} message Cs_10030003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10030003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.num);
            return writer;
        };

        /**
         * Decodes a Cs_10030003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10030003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10030003} Cs_10030003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10030003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10030003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.num = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        return Cs_10030003;
    })();

    doomsday_pt.Sc_10030003 = (function() {

        /**
         * Properties of a Sc_10030003.
         * @memberof doomsday_pt
         * @interface ISc_10030003
         * @property {doomsday_pt.IResData} res Sc_10030003 res
         */

        /**
         * Constructs a new Sc_10030003.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10030003.
         * @implements ISc_10030003
         * @constructor
         * @param {doomsday_pt.ISc_10030003=} [properties] Properties to set
         */
        function Sc_10030003(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10030003 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10030003
         * @instance
         */
        Sc_10030003.prototype.res = null;

        /**
         * Encodes the specified Sc_10030003 message. Does not implicitly {@link doomsday_pt.Sc_10030003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10030003
         * @static
         * @param {doomsday_pt.ISc_10030003} message Sc_10030003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10030003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10030003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10030003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10030003} Sc_10030003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10030003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10030003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10030003;
    })();

    doomsday_pt.Cs_10030004 = (function() {

        /**
         * Properties of a Cs_10030004.
         * @memberof doomsday_pt
         * @interface ICs_10030004
         * @property {number|Long} id Cs_10030004 id
         */

        /**
         * Constructs a new Cs_10030004.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10030004.
         * @implements ICs_10030004
         * @constructor
         * @param {doomsday_pt.ICs_10030004=} [properties] Properties to set
         */
        function Cs_10030004(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10030004 id.
         * @member {number|Long} id
         * @memberof doomsday_pt.Cs_10030004
         * @instance
         */
        Cs_10030004.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Encodes the specified Cs_10030004 message. Does not implicitly {@link doomsday_pt.Cs_10030004.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10030004
         * @static
         * @param {doomsday_pt.ICs_10030004} message Cs_10030004 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10030004.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            return writer;
        };

        /**
         * Decodes a Cs_10030004 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10030004
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10030004} Cs_10030004
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10030004.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10030004();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        return Cs_10030004;
    })();

    doomsday_pt.Sc_10030004 = (function() {

        /**
         * Properties of a Sc_10030004.
         * @memberof doomsday_pt
         * @interface ISc_10030004
         * @property {doomsday_pt.IResData} res Sc_10030004 res
         */

        /**
         * Constructs a new Sc_10030004.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10030004.
         * @implements ISc_10030004
         * @constructor
         * @param {doomsday_pt.ISc_10030004=} [properties] Properties to set
         */
        function Sc_10030004(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10030004 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10030004
         * @instance
         */
        Sc_10030004.prototype.res = null;

        /**
         * Encodes the specified Sc_10030004 message. Does not implicitly {@link doomsday_pt.Sc_10030004.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10030004
         * @static
         * @param {doomsday_pt.ISc_10030004} message Sc_10030004 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10030004.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10030004 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10030004
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10030004} Sc_10030004
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10030004.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10030004();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10030004;
    })();

    doomsday_pt.Cs_10030005 = (function() {

        /**
         * Properties of a Cs_10030005.
         * @memberof doomsday_pt
         * @interface ICs_10030005
         * @property {number|null} [id] Cs_10030005 id
         */

        /**
         * Constructs a new Cs_10030005.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10030005.
         * @implements ICs_10030005
         * @constructor
         * @param {doomsday_pt.ICs_10030005=} [properties] Properties to set
         */
        function Cs_10030005(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10030005 id.
         * @member {number} id
         * @memberof doomsday_pt.Cs_10030005
         * @instance
         */
        Cs_10030005.prototype.id = 0;

        /**
         * Encodes the specified Cs_10030005 message. Does not implicitly {@link doomsday_pt.Cs_10030005.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10030005
         * @static
         * @param {doomsday_pt.ICs_10030005} message Cs_10030005 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10030005.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            return writer;
        };

        /**
         * Decodes a Cs_10030005 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10030005
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10030005} Cs_10030005
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10030005.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10030005();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Cs_10030005;
    })();

    doomsday_pt.Sc_10030005 = (function() {

        /**
         * Properties of a Sc_10030005.
         * @memberof doomsday_pt
         * @interface ISc_10030005
         * @property {doomsday_pt.IResData} res Sc_10030005 res
         */

        /**
         * Constructs a new Sc_10030005.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10030005.
         * @implements ISc_10030005
         * @constructor
         * @param {doomsday_pt.ISc_10030005=} [properties] Properties to set
         */
        function Sc_10030005(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10030005 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10030005
         * @instance
         */
        Sc_10030005.prototype.res = null;

        /**
         * Encodes the specified Sc_10030005 message. Does not implicitly {@link doomsday_pt.Sc_10030005.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10030005
         * @static
         * @param {doomsday_pt.ISc_10030005} message Sc_10030005 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10030005.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10030005 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10030005
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10030005} Sc_10030005
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10030005.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10030005();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10030005;
    })();

    doomsday_pt.Cs_10030006 = (function() {

        /**
         * Properties of a Cs_10030006.
         * @memberof doomsday_pt
         * @interface ICs_10030006
         * @property {number|Long} id Cs_10030006 id
         */

        /**
         * Constructs a new Cs_10030006.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10030006.
         * @implements ICs_10030006
         * @constructor
         * @param {doomsday_pt.ICs_10030006=} [properties] Properties to set
         */
        function Cs_10030006(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10030006 id.
         * @member {number|Long} id
         * @memberof doomsday_pt.Cs_10030006
         * @instance
         */
        Cs_10030006.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Encodes the specified Cs_10030006 message. Does not implicitly {@link doomsday_pt.Cs_10030006.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10030006
         * @static
         * @param {doomsday_pt.ICs_10030006} message Cs_10030006 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10030006.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            return writer;
        };

        /**
         * Decodes a Cs_10030006 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10030006
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10030006} Cs_10030006
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10030006.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10030006();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        return Cs_10030006;
    })();

    doomsday_pt.Sc_10030006 = (function() {

        /**
         * Properties of a Sc_10030006.
         * @memberof doomsday_pt
         * @interface ISc_10030006
         * @property {doomsday_pt.IResData} res Sc_10030006 res
         */

        /**
         * Constructs a new Sc_10030006.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10030006.
         * @implements ISc_10030006
         * @constructor
         * @param {doomsday_pt.ISc_10030006=} [properties] Properties to set
         */
        function Sc_10030006(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10030006 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10030006
         * @instance
         */
        Sc_10030006.prototype.res = null;

        /**
         * Encodes the specified Sc_10030006 message. Does not implicitly {@link doomsday_pt.Sc_10030006.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10030006
         * @static
         * @param {doomsday_pt.ISc_10030006} message Sc_10030006 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10030006.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10030006 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10030006
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10030006} Sc_10030006
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10030006.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10030006();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10030006;
    })();

    doomsday_pt.Cs_10030007 = (function() {

        /**
         * Properties of a Cs_10030007.
         * @memberof doomsday_pt
         * @interface ICs_10030007
         * @property {number|Long} id Cs_10030007 id
         * @property {number} use_num Cs_10030007 use_num
         * @property {number|null} [select_id] Cs_10030007 select_id
         */

        /**
         * Constructs a new Cs_10030007.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10030007.
         * @implements ICs_10030007
         * @constructor
         * @param {doomsday_pt.ICs_10030007=} [properties] Properties to set
         */
        function Cs_10030007(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10030007 id.
         * @member {number|Long} id
         * @memberof doomsday_pt.Cs_10030007
         * @instance
         */
        Cs_10030007.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Cs_10030007 use_num.
         * @member {number} use_num
         * @memberof doomsday_pt.Cs_10030007
         * @instance
         */
        Cs_10030007.prototype.use_num = 0;

        /**
         * Cs_10030007 select_id.
         * @member {number} select_id
         * @memberof doomsday_pt.Cs_10030007
         * @instance
         */
        Cs_10030007.prototype.select_id = 0;

        /**
         * Encodes the specified Cs_10030007 message. Does not implicitly {@link doomsday_pt.Cs_10030007.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10030007
         * @static
         * @param {doomsday_pt.ICs_10030007} message Cs_10030007 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10030007.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.use_num);
            if (message.select_id != null && message.hasOwnProperty("select_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.select_id);
            return writer;
        };

        /**
         * Decodes a Cs_10030007 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10030007
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10030007} Cs_10030007
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10030007.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10030007();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.use_num = reader.uint32();
                    break;
                case 3:
                    message.select_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("use_num"))
                throw $util.ProtocolError("missing required 'use_num'", { instance: message });
            return message;
        };

        return Cs_10030007;
    })();

    doomsday_pt.Sc_10030007 = (function() {

        /**
         * Properties of a Sc_10030007.
         * @memberof doomsday_pt
         * @interface ISc_10030007
         * @property {doomsday_pt.IResData} res Sc_10030007 res
         */

        /**
         * Constructs a new Sc_10030007.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10030007.
         * @implements ISc_10030007
         * @constructor
         * @param {doomsday_pt.ISc_10030007=} [properties] Properties to set
         */
        function Sc_10030007(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10030007 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10030007
         * @instance
         */
        Sc_10030007.prototype.res = null;

        /**
         * Encodes the specified Sc_10030007 message. Does not implicitly {@link doomsday_pt.Sc_10030007.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10030007
         * @static
         * @param {doomsday_pt.ISc_10030007} message Sc_10030007 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10030007.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10030007 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10030007
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10030007} Sc_10030007
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10030007.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10030007();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10030007;
    })();

    doomsday_pt.Pt_Pos = (function() {

        /**
         * Properties of a Pt_Pos.
         * @memberof doomsday_pt
         * @interface IPt_Pos
         * @property {number} x Pt_Pos x
         * @property {number} y Pt_Pos y
         */

        /**
         * Constructs a new Pt_Pos.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_Pos.
         * @implements IPt_Pos
         * @constructor
         * @param {doomsday_pt.IPt_Pos=} [properties] Properties to set
         */
        function Pt_Pos(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_Pos x.
         * @member {number} x
         * @memberof doomsday_pt.Pt_Pos
         * @instance
         */
        Pt_Pos.prototype.x = 0;

        /**
         * Pt_Pos y.
         * @member {number} y
         * @memberof doomsday_pt.Pt_Pos
         * @instance
         */
        Pt_Pos.prototype.y = 0;

        /**
         * Encodes the specified Pt_Pos message. Does not implicitly {@link doomsday_pt.Pt_Pos.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_Pos
         * @static
         * @param {doomsday_pt.IPt_Pos} message Pt_Pos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_Pos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };

        /**
         * Decodes a Pt_Pos message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_Pos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_Pos} Pt_Pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_Pos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_Pos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            return message;
        };

        return Pt_Pos;
    })();

    doomsday_pt.Cs_10040001 = (function() {

        /**
         * Properties of a Cs_10040001.
         * @memberof doomsday_pt
         * @interface ICs_10040001
         * @property {number} id Cs_10040001 id
         */

        /**
         * Constructs a new Cs_10040001.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10040001.
         * @implements ICs_10040001
         * @constructor
         * @param {doomsday_pt.ICs_10040001=} [properties] Properties to set
         */
        function Cs_10040001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10040001 id.
         * @member {number} id
         * @memberof doomsday_pt.Cs_10040001
         * @instance
         */
        Cs_10040001.prototype.id = 0;

        /**
         * Encodes the specified Cs_10040001 message. Does not implicitly {@link doomsday_pt.Cs_10040001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10040001
         * @static
         * @param {doomsday_pt.ICs_10040001} message Cs_10040001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10040001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            return writer;
        };

        /**
         * Decodes a Cs_10040001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10040001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10040001} Cs_10040001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10040001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10040001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        return Cs_10040001;
    })();

    doomsday_pt.Sc_10040001 = (function() {

        /**
         * Properties of a Sc_10040001.
         * @memberof doomsday_pt
         * @interface ISc_10040001
         * @property {Array.<number>|null} [id_list] Sc_10040001 id_list
         */

        /**
         * Constructs a new Sc_10040001.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10040001.
         * @implements ISc_10040001
         * @constructor
         * @param {doomsday_pt.ISc_10040001=} [properties] Properties to set
         */
        function Sc_10040001(properties) {
            this.id_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10040001 id_list.
         * @member {Array.<number>} id_list
         * @memberof doomsday_pt.Sc_10040001
         * @instance
         */
        Sc_10040001.prototype.id_list = $util.emptyArray;

        /**
         * Encodes the specified Sc_10040001 message. Does not implicitly {@link doomsday_pt.Sc_10040001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10040001
         * @static
         * @param {doomsday_pt.ISc_10040001} message Sc_10040001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10040001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id_list != null && message.id_list.length)
                for (var i = 0; i < message.id_list.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id_list[i]);
            return writer;
        };

        /**
         * Decodes a Sc_10040001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10040001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10040001} Sc_10040001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10040001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10040001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.id_list && message.id_list.length))
                        message.id_list = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.id_list.push(reader.uint32());
                    } else
                        message.id_list.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Sc_10040001;
    })();

    doomsday_pt.Cs_10040002 = (function() {

        /**
         * Properties of a Cs_10040002.
         * @memberof doomsday_pt
         * @interface ICs_10040002
         * @property {number} atk_id Cs_10040002 atk_id
         * @property {number} tar_id Cs_10040002 tar_id
         */

        /**
         * Constructs a new Cs_10040002.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10040002.
         * @implements ICs_10040002
         * @constructor
         * @param {doomsday_pt.ICs_10040002=} [properties] Properties to set
         */
        function Cs_10040002(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10040002 atk_id.
         * @member {number} atk_id
         * @memberof doomsday_pt.Cs_10040002
         * @instance
         */
        Cs_10040002.prototype.atk_id = 0;

        /**
         * Cs_10040002 tar_id.
         * @member {number} tar_id
         * @memberof doomsday_pt.Cs_10040002
         * @instance
         */
        Cs_10040002.prototype.tar_id = 0;

        /**
         * Encodes the specified Cs_10040002 message. Does not implicitly {@link doomsday_pt.Cs_10040002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10040002
         * @static
         * @param {doomsday_pt.ICs_10040002} message Cs_10040002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10040002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.atk_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.tar_id);
            return writer;
        };

        /**
         * Decodes a Cs_10040002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10040002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10040002} Cs_10040002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10040002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10040002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.atk_id = reader.uint32();
                    break;
                case 2:
                    message.tar_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("atk_id"))
                throw $util.ProtocolError("missing required 'atk_id'", { instance: message });
            if (!message.hasOwnProperty("tar_id"))
                throw $util.ProtocolError("missing required 'tar_id'", { instance: message });
            return message;
        };

        return Cs_10040002;
    })();

    doomsday_pt.Sc_10040002 = (function() {

        /**
         * Properties of a Sc_10040002.
         * @memberof doomsday_pt
         * @interface ISc_10040002
         * @property {doomsday_pt.IPt_Pos|null} [tar_pos] Sc_10040002 tar_pos
         */

        /**
         * Constructs a new Sc_10040002.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10040002.
         * @implements ISc_10040002
         * @constructor
         * @param {doomsday_pt.ISc_10040002=} [properties] Properties to set
         */
        function Sc_10040002(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10040002 tar_pos.
         * @member {doomsday_pt.IPt_Pos|null|undefined} tar_pos
         * @memberof doomsday_pt.Sc_10040002
         * @instance
         */
        Sc_10040002.prototype.tar_pos = null;

        /**
         * Encodes the specified Sc_10040002 message. Does not implicitly {@link doomsday_pt.Sc_10040002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10040002
         * @static
         * @param {doomsday_pt.ISc_10040002} message Sc_10040002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10040002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tar_pos != null && message.hasOwnProperty("tar_pos"))
                $root.doomsday_pt.Pt_Pos.encode(message.tar_pos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10040002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10040002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10040002} Sc_10040002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10040002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10040002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tar_pos = $root.doomsday_pt.Pt_Pos.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Sc_10040002;
    })();

    doomsday_pt.Pt_GoodsList = (function() {

        /**
         * Properties of a Pt_GoodsList.
         * @memberof doomsday_pt
         * @interface IPt_GoodsList
         * @property {number} goods_id Pt_GoodsList goods_id
         * @property {number} goods_bought Pt_GoodsList goods_bought
         */

        /**
         * Constructs a new Pt_GoodsList.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_GoodsList.
         * @implements IPt_GoodsList
         * @constructor
         * @param {doomsday_pt.IPt_GoodsList=} [properties] Properties to set
         */
        function Pt_GoodsList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_GoodsList goods_id.
         * @member {number} goods_id
         * @memberof doomsday_pt.Pt_GoodsList
         * @instance
         */
        Pt_GoodsList.prototype.goods_id = 0;

        /**
         * Pt_GoodsList goods_bought.
         * @member {number} goods_bought
         * @memberof doomsday_pt.Pt_GoodsList
         * @instance
         */
        Pt_GoodsList.prototype.goods_bought = 0;

        /**
         * Encodes the specified Pt_GoodsList message. Does not implicitly {@link doomsday_pt.Pt_GoodsList.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_GoodsList
         * @static
         * @param {doomsday_pt.IPt_GoodsList} message Pt_GoodsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_GoodsList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.goods_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goods_bought);
            return writer;
        };

        /**
         * Decodes a Pt_GoodsList message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_GoodsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_GoodsList} Pt_GoodsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_GoodsList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_GoodsList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.goods_id = reader.uint32();
                    break;
                case 2:
                    message.goods_bought = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("goods_id"))
                throw $util.ProtocolError("missing required 'goods_id'", { instance: message });
            if (!message.hasOwnProperty("goods_bought"))
                throw $util.ProtocolError("missing required 'goods_bought'", { instance: message });
            return message;
        };

        return Pt_GoodsList;
    })();

    doomsday_pt.Pt_Goodsfresh = (function() {

        /**
         * Properties of a Pt_Goodsfresh.
         * @memberof doomsday_pt
         * @interface IPt_Goodsfresh
         * @property {number} goods_id Pt_Goodsfresh goods_id
         * @property {number} goods_num Pt_Goodsfresh goods_num
         */

        /**
         * Constructs a new Pt_Goodsfresh.
         * @memberof doomsday_pt
         * @classdesc Represents a Pt_Goodsfresh.
         * @implements IPt_Goodsfresh
         * @constructor
         * @param {doomsday_pt.IPt_Goodsfresh=} [properties] Properties to set
         */
        function Pt_Goodsfresh(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pt_Goodsfresh goods_id.
         * @member {number} goods_id
         * @memberof doomsday_pt.Pt_Goodsfresh
         * @instance
         */
        Pt_Goodsfresh.prototype.goods_id = 0;

        /**
         * Pt_Goodsfresh goods_num.
         * @member {number} goods_num
         * @memberof doomsday_pt.Pt_Goodsfresh
         * @instance
         */
        Pt_Goodsfresh.prototype.goods_num = 0;

        /**
         * Encodes the specified Pt_Goodsfresh message. Does not implicitly {@link doomsday_pt.Pt_Goodsfresh.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Pt_Goodsfresh
         * @static
         * @param {doomsday_pt.IPt_Goodsfresh} message Pt_Goodsfresh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pt_Goodsfresh.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.goods_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.goods_num);
            return writer;
        };

        /**
         * Decodes a Pt_Goodsfresh message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Pt_Goodsfresh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Pt_Goodsfresh} Pt_Goodsfresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pt_Goodsfresh.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Pt_Goodsfresh();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.goods_id = reader.uint32();
                    break;
                case 2:
                    message.goods_num = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("goods_id"))
                throw $util.ProtocolError("missing required 'goods_id'", { instance: message });
            if (!message.hasOwnProperty("goods_num"))
                throw $util.ProtocolError("missing required 'goods_num'", { instance: message });
            return message;
        };

        return Pt_Goodsfresh;
    })();

    doomsday_pt.Cs_10050001 = (function() {

        /**
         * Properties of a Cs_10050001.
         * @memberof doomsday_pt
         * @interface ICs_10050001
         * @property {number} shop_type Cs_10050001 shop_type
         * @property {number} shop_lv Cs_10050001 shop_lv
         */

        /**
         * Constructs a new Cs_10050001.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10050001.
         * @implements ICs_10050001
         * @constructor
         * @param {doomsday_pt.ICs_10050001=} [properties] Properties to set
         */
        function Cs_10050001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10050001 shop_type.
         * @member {number} shop_type
         * @memberof doomsday_pt.Cs_10050001
         * @instance
         */
        Cs_10050001.prototype.shop_type = 0;

        /**
         * Cs_10050001 shop_lv.
         * @member {number} shop_lv
         * @memberof doomsday_pt.Cs_10050001
         * @instance
         */
        Cs_10050001.prototype.shop_lv = 0;

        /**
         * Encodes the specified Cs_10050001 message. Does not implicitly {@link doomsday_pt.Cs_10050001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10050001
         * @static
         * @param {doomsday_pt.ICs_10050001} message Cs_10050001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10050001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.shop_type);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.shop_lv);
            return writer;
        };

        /**
         * Decodes a Cs_10050001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10050001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10050001} Cs_10050001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10050001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10050001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.shop_type = reader.uint32();
                    break;
                case 2:
                    message.shop_lv = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("shop_type"))
                throw $util.ProtocolError("missing required 'shop_type'", { instance: message });
            if (!message.hasOwnProperty("shop_lv"))
                throw $util.ProtocolError("missing required 'shop_lv'", { instance: message });
            return message;
        };

        return Cs_10050001;
    })();

    doomsday_pt.Sc_10050001 = (function() {

        /**
         * Properties of a Sc_10050001.
         * @memberof doomsday_pt
         * @interface ISc_10050001
         * @property {Array.<doomsday_pt.IPt_GoodsList>|null} [goods_list] Sc_10050001 goods_list
         * @property {doomsday_pt.IPt_Goodsfresh} goods_fresh Sc_10050001 goods_fresh
         */

        /**
         * Constructs a new Sc_10050001.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10050001.
         * @implements ISc_10050001
         * @constructor
         * @param {doomsday_pt.ISc_10050001=} [properties] Properties to set
         */
        function Sc_10050001(properties) {
            this.goods_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10050001 goods_list.
         * @member {Array.<doomsday_pt.IPt_GoodsList>} goods_list
         * @memberof doomsday_pt.Sc_10050001
         * @instance
         */
        Sc_10050001.prototype.goods_list = $util.emptyArray;

        /**
         * Sc_10050001 goods_fresh.
         * @member {doomsday_pt.IPt_Goodsfresh} goods_fresh
         * @memberof doomsday_pt.Sc_10050001
         * @instance
         */
        Sc_10050001.prototype.goods_fresh = null;

        /**
         * Encodes the specified Sc_10050001 message. Does not implicitly {@link doomsday_pt.Sc_10050001.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10050001
         * @static
         * @param {doomsday_pt.ISc_10050001} message Sc_10050001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10050001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goods_list != null && message.goods_list.length)
                for (var i = 0; i < message.goods_list.length; ++i)
                    $root.doomsday_pt.Pt_GoodsList.encode(message.goods_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.doomsday_pt.Pt_Goodsfresh.encode(message.goods_fresh, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10050001 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10050001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10050001} Sc_10050001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10050001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10050001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.goods_list && message.goods_list.length))
                        message.goods_list = [];
                    message.goods_list.push($root.doomsday_pt.Pt_GoodsList.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.goods_fresh = $root.doomsday_pt.Pt_Goodsfresh.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("goods_fresh"))
                throw $util.ProtocolError("missing required 'goods_fresh'", { instance: message });
            return message;
        };

        return Sc_10050001;
    })();

    doomsday_pt.Cs_10050002 = (function() {

        /**
         * Properties of a Cs_10050002.
         * @memberof doomsday_pt
         * @interface ICs_10050002
         * @property {number} shop_type Cs_10050002 shop_type
         * @property {number} shop_lv Cs_10050002 shop_lv
         * @property {number} goods_id Cs_10050002 goods_id
         */

        /**
         * Constructs a new Cs_10050002.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10050002.
         * @implements ICs_10050002
         * @constructor
         * @param {doomsday_pt.ICs_10050002=} [properties] Properties to set
         */
        function Cs_10050002(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10050002 shop_type.
         * @member {number} shop_type
         * @memberof doomsday_pt.Cs_10050002
         * @instance
         */
        Cs_10050002.prototype.shop_type = 0;

        /**
         * Cs_10050002 shop_lv.
         * @member {number} shop_lv
         * @memberof doomsday_pt.Cs_10050002
         * @instance
         */
        Cs_10050002.prototype.shop_lv = 0;

        /**
         * Cs_10050002 goods_id.
         * @member {number} goods_id
         * @memberof doomsday_pt.Cs_10050002
         * @instance
         */
        Cs_10050002.prototype.goods_id = 0;

        /**
         * Encodes the specified Cs_10050002 message. Does not implicitly {@link doomsday_pt.Cs_10050002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10050002
         * @static
         * @param {doomsday_pt.ICs_10050002} message Cs_10050002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10050002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.shop_type);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.shop_lv);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.goods_id);
            return writer;
        };

        /**
         * Decodes a Cs_10050002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10050002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10050002} Cs_10050002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10050002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10050002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.shop_type = reader.uint32();
                    break;
                case 2:
                    message.shop_lv = reader.uint32();
                    break;
                case 3:
                    message.goods_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("shop_type"))
                throw $util.ProtocolError("missing required 'shop_type'", { instance: message });
            if (!message.hasOwnProperty("shop_lv"))
                throw $util.ProtocolError("missing required 'shop_lv'", { instance: message });
            if (!message.hasOwnProperty("goods_id"))
                throw $util.ProtocolError("missing required 'goods_id'", { instance: message });
            return message;
        };

        return Cs_10050002;
    })();

    doomsday_pt.Sc_10050002 = (function() {

        /**
         * Properties of a Sc_10050002.
         * @memberof doomsday_pt
         * @interface ISc_10050002
         * @property {doomsday_pt.IResData} res Sc_10050002 res
         * @property {doomsday_pt.IPt_GoodsList} goods_list Sc_10050002 goods_list
         */

        /**
         * Constructs a new Sc_10050002.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10050002.
         * @implements ISc_10050002
         * @constructor
         * @param {doomsday_pt.ISc_10050002=} [properties] Properties to set
         */
        function Sc_10050002(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10050002 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10050002
         * @instance
         */
        Sc_10050002.prototype.res = null;

        /**
         * Sc_10050002 goods_list.
         * @member {doomsday_pt.IPt_GoodsList} goods_list
         * @memberof doomsday_pt.Sc_10050002
         * @instance
         */
        Sc_10050002.prototype.goods_list = null;

        /**
         * Encodes the specified Sc_10050002 message. Does not implicitly {@link doomsday_pt.Sc_10050002.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10050002
         * @static
         * @param {doomsday_pt.ISc_10050002} message Sc_10050002 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10050002.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.doomsday_pt.Pt_GoodsList.encode(message.goods_list, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10050002 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10050002
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10050002} Sc_10050002
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10050002.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10050002();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.goods_list = $root.doomsday_pt.Pt_GoodsList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            if (!message.hasOwnProperty("goods_list"))
                throw $util.ProtocolError("missing required 'goods_list'", { instance: message });
            return message;
        };

        return Sc_10050002;
    })();

    doomsday_pt.Cs_10050003 = (function() {

        /**
         * Properties of a Cs_10050003.
         * @memberof doomsday_pt
         * @interface ICs_10050003
         * @property {number} shop_type Cs_10050003 shop_type
         * @property {number} shop_lv Cs_10050003 shop_lv
         * @property {number} fresh_goodsid Cs_10050003 fresh_goodsid
         */

        /**
         * Constructs a new Cs_10050003.
         * @memberof doomsday_pt
         * @classdesc Represents a Cs_10050003.
         * @implements ICs_10050003
         * @constructor
         * @param {doomsday_pt.ICs_10050003=} [properties] Properties to set
         */
        function Cs_10050003(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cs_10050003 shop_type.
         * @member {number} shop_type
         * @memberof doomsday_pt.Cs_10050003
         * @instance
         */
        Cs_10050003.prototype.shop_type = 0;

        /**
         * Cs_10050003 shop_lv.
         * @member {number} shop_lv
         * @memberof doomsday_pt.Cs_10050003
         * @instance
         */
        Cs_10050003.prototype.shop_lv = 0;

        /**
         * Cs_10050003 fresh_goodsid.
         * @member {number} fresh_goodsid
         * @memberof doomsday_pt.Cs_10050003
         * @instance
         */
        Cs_10050003.prototype.fresh_goodsid = 0;

        /**
         * Encodes the specified Cs_10050003 message. Does not implicitly {@link doomsday_pt.Cs_10050003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Cs_10050003
         * @static
         * @param {doomsday_pt.ICs_10050003} message Cs_10050003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cs_10050003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.shop_type);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.shop_lv);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fresh_goodsid);
            return writer;
        };

        /**
         * Decodes a Cs_10050003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Cs_10050003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Cs_10050003} Cs_10050003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cs_10050003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Cs_10050003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.shop_type = reader.uint32();
                    break;
                case 2:
                    message.shop_lv = reader.uint32();
                    break;
                case 3:
                    message.fresh_goodsid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("shop_type"))
                throw $util.ProtocolError("missing required 'shop_type'", { instance: message });
            if (!message.hasOwnProperty("shop_lv"))
                throw $util.ProtocolError("missing required 'shop_lv'", { instance: message });
            if (!message.hasOwnProperty("fresh_goodsid"))
                throw $util.ProtocolError("missing required 'fresh_goodsid'", { instance: message });
            return message;
        };

        return Cs_10050003;
    })();

    doomsday_pt.Sc_10050003 = (function() {

        /**
         * Properties of a Sc_10050003.
         * @memberof doomsday_pt
         * @interface ISc_10050003
         * @property {doomsday_pt.IResData} res Sc_10050003 res
         * @property {Array.<doomsday_pt.IPt_GoodsList>|null} [goods_list] Sc_10050003 goods_list
         */

        /**
         * Constructs a new Sc_10050003.
         * @memberof doomsday_pt
         * @classdesc Represents a Sc_10050003.
         * @implements ISc_10050003
         * @constructor
         * @param {doomsday_pt.ISc_10050003=} [properties] Properties to set
         */
        function Sc_10050003(properties) {
            this.goods_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sc_10050003 res.
         * @member {doomsday_pt.IResData} res
         * @memberof doomsday_pt.Sc_10050003
         * @instance
         */
        Sc_10050003.prototype.res = null;

        /**
         * Sc_10050003 goods_list.
         * @member {Array.<doomsday_pt.IPt_GoodsList>} goods_list
         * @memberof doomsday_pt.Sc_10050003
         * @instance
         */
        Sc_10050003.prototype.goods_list = $util.emptyArray;

        /**
         * Encodes the specified Sc_10050003 message. Does not implicitly {@link doomsday_pt.Sc_10050003.verify|verify} messages.
         * @function encode
         * @memberof doomsday_pt.Sc_10050003
         * @static
         * @param {doomsday_pt.ISc_10050003} message Sc_10050003 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sc_10050003.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.doomsday_pt.ResData.encode(message.res, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.goods_list != null && message.goods_list.length)
                for (var i = 0; i < message.goods_list.length; ++i)
                    $root.doomsday_pt.Pt_GoodsList.encode(message.goods_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Sc_10050003 message from the specified reader or buffer.
         * @function decode
         * @memberof doomsday_pt.Sc_10050003
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {doomsday_pt.Sc_10050003} Sc_10050003
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sc_10050003.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.doomsday_pt.Sc_10050003();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.res = $root.doomsday_pt.ResData.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.goods_list && message.goods_list.length))
                        message.goods_list = [];
                    message.goods_list.push($root.doomsday_pt.Pt_GoodsList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("res"))
                throw $util.ProtocolError("missing required 'res'", { instance: message });
            return message;
        };

        return Sc_10050003;
    })();

    return doomsday_pt;
})();