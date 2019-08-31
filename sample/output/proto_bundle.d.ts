type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace game. */
declare namespace game {

    /** Namespace mindmaster. */
    namespace mindmaster {

        /** CMD enum. */
        enum CMD {
            CMD_UNDEFINED = 0,
            CMD_USER_BASE_INFO = 10001,
            CMD_USER_INFO_CHANGED = 10002,
            CMD_ROTARY_DIAL_REWARD = 20001,
            CMD_RANK_INFO = 30001,
            CMD_START_CHALLANGE = 40001,
            CMD_VIDEO_RELIVE = 40002,
            CMD_ANSWER_SUBMIT = 40003,
            CMD_VIDEO_GIVEUP_RELIVE = 40004,
            CMD_MIAOCOIN_EXCHANGE = 50001,
            CMD_VIDEO_RECOVERY = 60001,
            CMD_HEART_BEAT = 89999,
            CMD_GLOBAL_ERROR = 99999
        }

        /** RankType enum. */
        enum RankType {
            RANK_TYPE_UNDEFINED = 0,
            RANK_TYPE_WORLD = 1,
            RANK_TYPE_FRIEND = 2
        }

        /** Properties of a RequestMessage. */
        interface IRequestMessage {

            /** RequestMessage cmd */
            cmd?: (game.mindmaster.CMD|null);

            /** RequestMessage data */
            data?: (Uint8Array|null);
        }

        /** Represents a RequestMessage. */
        class RequestMessage implements IRequestMessage {

            /**
             * Constructs a new RequestMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestMessage);

            /** RequestMessage cmd. */
            public cmd: game.mindmaster.CMD;

            /** RequestMessage data. */
            public data: Uint8Array;

            /**
             * Encodes the specified RequestMessage message. Does not implicitly {@link game.mindmaster.RequestMessage.verify|verify} messages.
             * @param message RequestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestMessage, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestMessage;
        }

        /** Properties of a ResponseMessage. */
        interface IResponseMessage {

            /** ResponseMessage cmd */
            cmd?: (game.mindmaster.CMD|null);

            /** ResponseMessage code */
            code?: (number|Long|null);

            /** ResponseMessage data */
            data?: (Uint8Array|null);
        }

        /** Represents a ResponseMessage. */
        class ResponseMessage implements IResponseMessage {

            /**
             * Constructs a new ResponseMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseMessage);

            /** ResponseMessage cmd. */
            public cmd: game.mindmaster.CMD;

            /** ResponseMessage code. */
            public code: (number|Long);

            /** ResponseMessage data. */
            public data: Uint8Array;

            /**
             * Encodes the specified ResponseMessage message. Does not implicitly {@link game.mindmaster.ResponseMessage.verify|verify} messages.
             * @param message ResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseMessage, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseMessage;
        }

        /** Properties of a ResponseMessageArray. */
        interface IResponseMessageArray {

            /** ResponseMessageArray response */
            response?: (game.mindmaster.IResponseMessage[]|null);
        }

        /** Represents a ResponseMessageArray. */
        class ResponseMessageArray implements IResponseMessageArray {

            /**
             * Constructs a new ResponseMessageArray.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseMessageArray);

            /** ResponseMessageArray response. */
            public response: game.mindmaster.IResponseMessage[];

            /**
             * Encodes the specified ResponseMessageArray message. Does not implicitly {@link game.mindmaster.ResponseMessageArray.verify|verify} messages.
             * @param message ResponseMessageArray message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseMessageArray, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseMessageArray message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseMessageArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseMessageArray;
        }

        /** Properties of a RequestUserBaseInfo. */
        interface IRequestUserBaseInfo {
        }

        /** Represents a RequestUserBaseInfo. */
        class RequestUserBaseInfo implements IRequestUserBaseInfo {

            /**
             * Constructs a new RequestUserBaseInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestUserBaseInfo);

            /**
             * Encodes the specified RequestUserBaseInfo message. Does not implicitly {@link game.mindmaster.RequestUserBaseInfo.verify|verify} messages.
             * @param message RequestUserBaseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestUserBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestUserBaseInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestUserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestUserBaseInfo;
        }

        /** Properties of a RequestRotaryDialReward. */
        interface IRequestRotaryDialReward {
        }

        /** Represents a RequestRotaryDialReward. */
        class RequestRotaryDialReward implements IRequestRotaryDialReward {

            /**
             * Constructs a new RequestRotaryDialReward.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestRotaryDialReward);

            /**
             * Encodes the specified RequestRotaryDialReward message. Does not implicitly {@link game.mindmaster.RequestRotaryDialReward.verify|verify} messages.
             * @param message RequestRotaryDialReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestRotaryDialReward, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestRotaryDialReward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestRotaryDialReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestRotaryDialReward;
        }

        /** Properties of a RequestRankInfo. */
        interface IRequestRankInfo {

            /** RequestRankInfo type */
            type?: (game.mindmaster.RankType|null);
        }

        /** Represents a RequestRankInfo. */
        class RequestRankInfo implements IRequestRankInfo {

            /**
             * Constructs a new RequestRankInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestRankInfo);

            /** RequestRankInfo type. */
            public type: game.mindmaster.RankType;

            /**
             * Encodes the specified RequestRankInfo message. Does not implicitly {@link game.mindmaster.RequestRankInfo.verify|verify} messages.
             * @param message RequestRankInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestRankInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestRankInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestRankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestRankInfo;
        }

        /** Properties of a RequestStartChallange. */
        interface IRequestStartChallange {

            /** RequestStartChallange screen */
            screen?: (number|Long|null);
        }

        /** Represents a RequestStartChallange. */
        class RequestStartChallange implements IRequestStartChallange {

            /**
             * Constructs a new RequestStartChallange.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestStartChallange);

            /** RequestStartChallange screen. */
            public screen: (number|Long);

            /**
             * Encodes the specified RequestStartChallange message. Does not implicitly {@link game.mindmaster.RequestStartChallange.verify|verify} messages.
             * @param message RequestStartChallange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestStartChallange, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestStartChallange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestStartChallange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestStartChallange;
        }

        /** Properties of a RequestVideoRelive. */
        interface IRequestVideoRelive {

            /** RequestVideoRelive screen */
            screen?: (number|Long|null);
        }

        /** Represents a RequestVideoRelive. */
        class RequestVideoRelive implements IRequestVideoRelive {

            /**
             * Constructs a new RequestVideoRelive.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestVideoRelive);

            /** RequestVideoRelive screen. */
            public screen: (number|Long);

            /**
             * Encodes the specified RequestVideoRelive message. Does not implicitly {@link game.mindmaster.RequestVideoRelive.verify|verify} messages.
             * @param message RequestVideoRelive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestVideoRelive, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestVideoRelive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestVideoRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestVideoRelive;
        }

        /** Properties of a QuestionAnswerItem. */
        interface IQuestionAnswerItem {

            /** QuestionAnswerItem id */
            id?: (number|Long|null);

            /** QuestionAnswerItem time */
            time?: (number|Long|null);

            /** QuestionAnswerItem option */
            option?: (number|Long|null);
        }

        /** Represents a QuestionAnswerItem. */
        class QuestionAnswerItem implements IQuestionAnswerItem {

            /**
             * Constructs a new QuestionAnswerItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IQuestionAnswerItem);

            /** QuestionAnswerItem id. */
            public id: (number|Long);

            /** QuestionAnswerItem time. */
            public time: (number|Long);

            /** QuestionAnswerItem option. */
            public option: (number|Long);

            /**
             * Encodes the specified QuestionAnswerItem message. Does not implicitly {@link game.mindmaster.QuestionAnswerItem.verify|verify} messages.
             * @param message QuestionAnswerItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IQuestionAnswerItem, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a QuestionAnswerItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuestionAnswerItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.QuestionAnswerItem;
        }

        /** Properties of a RequestAnswerSubmit. */
        interface IRequestAnswerSubmit {

            /** RequestAnswerSubmit screen */
            screen?: (number|Long|null);

            /** RequestAnswerSubmit answers */
            answers?: (game.mindmaster.IQuestionAnswerItem[]|null);

            /** RequestAnswerSubmit video */
            video?: (boolean|null);
        }

        /** Represents a RequestAnswerSubmit. */
        class RequestAnswerSubmit implements IRequestAnswerSubmit {

            /**
             * Constructs a new RequestAnswerSubmit.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestAnswerSubmit);

            /** RequestAnswerSubmit screen. */
            public screen: (number|Long);

            /** RequestAnswerSubmit answers. */
            public answers: game.mindmaster.IQuestionAnswerItem[];

            /** RequestAnswerSubmit video. */
            public video: boolean;

            /**
             * Encodes the specified RequestAnswerSubmit message. Does not implicitly {@link game.mindmaster.RequestAnswerSubmit.verify|verify} messages.
             * @param message RequestAnswerSubmit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestAnswerSubmit, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestAnswerSubmit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestAnswerSubmit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestAnswerSubmit;
        }

        /** Properties of a RequestMiaoCoinExchange. */
        interface IRequestMiaoCoinExchange {

            /** RequestMiaoCoinExchange gold */
            gold?: (number|Long|null);
        }

        /** Represents a RequestMiaoCoinExchange. */
        class RequestMiaoCoinExchange implements IRequestMiaoCoinExchange {

            /**
             * Constructs a new RequestMiaoCoinExchange.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestMiaoCoinExchange);

            /** RequestMiaoCoinExchange gold. */
            public gold: (number|Long);

            /**
             * Encodes the specified RequestMiaoCoinExchange message. Does not implicitly {@link game.mindmaster.RequestMiaoCoinExchange.verify|verify} messages.
             * @param message RequestMiaoCoinExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestMiaoCoinExchange, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestMiaoCoinExchange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestMiaoCoinExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestMiaoCoinExchange;
        }

        /** Properties of a RequestHeartBeat. */
        interface IRequestHeartBeat {
        }

        /** Represents a RequestHeartBeat. */
        class RequestHeartBeat implements IRequestHeartBeat {

            /**
             * Constructs a new RequestHeartBeat.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestHeartBeat);

            /**
             * Encodes the specified RequestHeartBeat message. Does not implicitly {@link game.mindmaster.RequestHeartBeat.verify|verify} messages.
             * @param message RequestHeartBeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestHeartBeat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestHeartBeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestHeartBeat;
        }

        /** Properties of a RequestVideoGiveUpRelive. */
        interface IRequestVideoGiveUpRelive {

            /** RequestVideoGiveUpRelive screen */
            screen?: (number|Long|null);
        }

        /** Represents a RequestVideoGiveUpRelive. */
        class RequestVideoGiveUpRelive implements IRequestVideoGiveUpRelive {

            /**
             * Constructs a new RequestVideoGiveUpRelive.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestVideoGiveUpRelive);

            /** RequestVideoGiveUpRelive screen. */
            public screen: (number|Long);

            /**
             * Encodes the specified RequestVideoGiveUpRelive message. Does not implicitly {@link game.mindmaster.RequestVideoGiveUpRelive.verify|verify} messages.
             * @param message RequestVideoGiveUpRelive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestVideoGiveUpRelive, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestVideoGiveUpRelive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestVideoGiveUpRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestVideoGiveUpRelive;
        }

        /** Properties of a RequestVideoRecovery. */
        interface IRequestVideoRecovery {
        }

        /** Represents a RequestVideoRecovery. */
        class RequestVideoRecovery implements IRequestVideoRecovery {

            /**
             * Constructs a new RequestVideoRecovery.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestVideoRecovery);

            /**
             * Encodes the specified RequestVideoRecovery message. Does not implicitly {@link game.mindmaster.RequestVideoRecovery.verify|verify} messages.
             * @param message RequestVideoRecovery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestVideoRecovery, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestVideoRecovery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestVideoRecovery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestVideoRecovery;
        }

        /** Properties of a RequestUserInfoChanged. */
        interface IRequestUserInfoChanged {
        }

        /** Represents a RequestUserInfoChanged. */
        class RequestUserInfoChanged implements IRequestUserInfoChanged {

            /**
             * Constructs a new RequestUserInfoChanged.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRequestUserInfoChanged);

            /**
             * Encodes the specified RequestUserInfoChanged message. Does not implicitly {@link game.mindmaster.RequestUserInfoChanged.verify|verify} messages.
             * @param message RequestUserInfoChanged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRequestUserInfoChanged, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RequestUserInfoChanged message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestUserInfoChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RequestUserInfoChanged;
        }

        /** Properties of a UserBaseData. */
        interface IUserBaseData {

            /** UserBaseData gold */
            gold?: (number|Long|null);

            /** UserBaseData power */
            power?: (number|Long|null);

            /** UserBaseData screen */
            screen?: (number|Long|null);

            /** UserBaseData star */
            star?: (number|Long|null);

            /** UserBaseData exchange_gold */
            exchange_gold?: (number|Long|null);

            /** UserBaseData total_relive_times */
            total_relive_times?: (number|Long|null);

            /** UserBaseData today_relive_times */
            today_relive_times?: (number|Long|null);

            /** UserBaseData total_recovery_times */
            total_recovery_times?: (number|Long|null);

            /** UserBaseData today_recovery_times */
            today_recovery_times?: (number|Long|null);
        }

        /** Represents a UserBaseData. */
        class UserBaseData implements IUserBaseData {

            /**
             * Constructs a new UserBaseData.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IUserBaseData);

            /** UserBaseData gold. */
            public gold: (number|Long);

            /** UserBaseData power. */
            public power: (number|Long);

            /** UserBaseData screen. */
            public screen: (number|Long);

            /** UserBaseData star. */
            public star: (number|Long);

            /** UserBaseData exchange_gold. */
            public exchange_gold: (number|Long);

            /** UserBaseData total_relive_times. */
            public total_relive_times: (number|Long);

            /** UserBaseData today_relive_times. */
            public today_relive_times: (number|Long);

            /** UserBaseData total_recovery_times. */
            public total_recovery_times: (number|Long);

            /** UserBaseData today_recovery_times. */
            public today_recovery_times: (number|Long);

            /**
             * Encodes the specified UserBaseData message. Does not implicitly {@link game.mindmaster.UserBaseData.verify|verify} messages.
             * @param message UserBaseData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IUserBaseData, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a UserBaseData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserBaseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.UserBaseData;
        }

        /** Properties of a ResponseUserBaseInfo. */
        interface IResponseUserBaseInfo {

            /** ResponseUserBaseInfo user */
            user?: (game.mindmaster.IUserBaseData|null);
        }

        /** Represents a ResponseUserBaseInfo. */
        class ResponseUserBaseInfo implements IResponseUserBaseInfo {

            /**
             * Constructs a new ResponseUserBaseInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseUserBaseInfo);

            /** ResponseUserBaseInfo user. */
            public user?: (game.mindmaster.IUserBaseData|null);

            /**
             * Encodes the specified ResponseUserBaseInfo message. Does not implicitly {@link game.mindmaster.ResponseUserBaseInfo.verify|verify} messages.
             * @param message ResponseUserBaseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseUserBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseUserBaseInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseUserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseUserBaseInfo;
        }

        /** Properties of a ResponseRotaryDialReward. */
        interface IResponseRotaryDialReward {

            /** ResponseRotaryDialReward index */
            index?: (number|Long|null);
        }

        /** Represents a ResponseRotaryDialReward. */
        class ResponseRotaryDialReward implements IResponseRotaryDialReward {

            /**
             * Constructs a new ResponseRotaryDialReward.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseRotaryDialReward);

            /** ResponseRotaryDialReward index. */
            public index: (number|Long);

            /**
             * Encodes the specified ResponseRotaryDialReward message. Does not implicitly {@link game.mindmaster.ResponseRotaryDialReward.verify|verify} messages.
             * @param message ResponseRotaryDialReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseRotaryDialReward, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseRotaryDialReward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseRotaryDialReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseRotaryDialReward;
        }

        /** Properties of a RankItem. */
        interface IRankItem {

            /** RankItem rank */
            rank?: (number|Long|null);

            /** RankItem avatar */
            avatar?: (string|null);

            /** RankItem name */
            name?: (string|null);

            /** RankItem star */
            star?: (number|Long|null);
        }

        /** Represents a RankItem. */
        class RankItem implements IRankItem {

            /**
             * Constructs a new RankItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IRankItem);

            /** RankItem rank. */
            public rank: (number|Long);

            /** RankItem avatar. */
            public avatar: string;

            /** RankItem name. */
            public name: string;

            /** RankItem star. */
            public star: (number|Long);

            /**
             * Encodes the specified RankItem message. Does not implicitly {@link game.mindmaster.RankItem.verify|verify} messages.
             * @param message RankItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IRankItem, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RankItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RankItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.RankItem;
        }

        /** Properties of a ResponseRankInfo. */
        interface IResponseRankInfo {

            /** ResponseRankInfo self */
            self?: (game.mindmaster.IRankItem|null);

            /** ResponseRankInfo list */
            list?: (game.mindmaster.IRankItem[]|null);
        }

        /** Represents a ResponseRankInfo. */
        class ResponseRankInfo implements IResponseRankInfo {

            /**
             * Constructs a new ResponseRankInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseRankInfo);

            /** ResponseRankInfo self. */
            public self?: (game.mindmaster.IRankItem|null);

            /** ResponseRankInfo list. */
            public list: game.mindmaster.IRankItem[];

            /**
             * Encodes the specified ResponseRankInfo message. Does not implicitly {@link game.mindmaster.ResponseRankInfo.verify|verify} messages.
             * @param message ResponseRankInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseRankInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseRankInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseRankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseRankInfo;
        }

        /** Properties of a ResponseStartChallange. */
        interface IResponseStartChallange {

            /** ResponseStartChallange list */
            list?: ((number|Long)[]|null);
        }

        /** Represents a ResponseStartChallange. */
        class ResponseStartChallange implements IResponseStartChallange {

            /**
             * Constructs a new ResponseStartChallange.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseStartChallange);

            /** ResponseStartChallange list. */
            public list: (number|Long)[];

            /**
             * Encodes the specified ResponseStartChallange message. Does not implicitly {@link game.mindmaster.ResponseStartChallange.verify|verify} messages.
             * @param message ResponseStartChallange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseStartChallange, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseStartChallange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseStartChallange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseStartChallange;
        }

        /** Properties of a ResponseVideoRelive. */
        interface IResponseVideoRelive {

            /** ResponseVideoRelive left_video_times */
            left_video_times?: (number|Long|null);
        }

        /** Represents a ResponseVideoRelive. */
        class ResponseVideoRelive implements IResponseVideoRelive {

            /**
             * Constructs a new ResponseVideoRelive.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseVideoRelive);

            /** ResponseVideoRelive left_video_times. */
            public left_video_times: (number|Long);

            /**
             * Encodes the specified ResponseVideoRelive message. Does not implicitly {@link game.mindmaster.ResponseVideoRelive.verify|verify} messages.
             * @param message ResponseVideoRelive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseVideoRelive, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseVideoRelive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseVideoRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseVideoRelive;
        }

        /** Properties of a ResponseAnswerSubmit. */
        interface IResponseAnswerSubmit {

            /** ResponseAnswerSubmit star */
            star?: (number|Long|null);

            /** ResponseAnswerSubmit power */
            power?: (number|Long|null);

            /** ResponseAnswerSubmit gold */
            gold?: (number|Long|null);
        }

        /** Represents a ResponseAnswerSubmit. */
        class ResponseAnswerSubmit implements IResponseAnswerSubmit {

            /**
             * Constructs a new ResponseAnswerSubmit.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseAnswerSubmit);

            /** ResponseAnswerSubmit star. */
            public star: (number|Long);

            /** ResponseAnswerSubmit power. */
            public power: (number|Long);

            /** ResponseAnswerSubmit gold. */
            public gold: (number|Long);

            /**
             * Encodes the specified ResponseAnswerSubmit message. Does not implicitly {@link game.mindmaster.ResponseAnswerSubmit.verify|verify} messages.
             * @param message ResponseAnswerSubmit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseAnswerSubmit, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseAnswerSubmit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseAnswerSubmit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseAnswerSubmit;
        }

        /** Properties of a ResponseMiaoCoinExchange. */
        interface IResponseMiaoCoinExchange {
        }

        /** Represents a ResponseMiaoCoinExchange. */
        class ResponseMiaoCoinExchange implements IResponseMiaoCoinExchange {

            /**
             * Constructs a new ResponseMiaoCoinExchange.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseMiaoCoinExchange);

            /**
             * Encodes the specified ResponseMiaoCoinExchange message. Does not implicitly {@link game.mindmaster.ResponseMiaoCoinExchange.verify|verify} messages.
             * @param message ResponseMiaoCoinExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseMiaoCoinExchange, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseMiaoCoinExchange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseMiaoCoinExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseMiaoCoinExchange;
        }

        /** Properties of a ResponseHeartBeat. */
        interface IResponseHeartBeat {

            /** ResponseHeartBeat time */
            time?: (number|Long|null);
        }

        /** Represents a ResponseHeartBeat. */
        class ResponseHeartBeat implements IResponseHeartBeat {

            /**
             * Constructs a new ResponseHeartBeat.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseHeartBeat);

            /** ResponseHeartBeat time. */
            public time: (number|Long);

            /**
             * Encodes the specified ResponseHeartBeat message. Does not implicitly {@link game.mindmaster.ResponseHeartBeat.verify|verify} messages.
             * @param message ResponseHeartBeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseHeartBeat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseHeartBeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseHeartBeat;
        }

        /** Properties of a ResponseVideoGiveUpRelive. */
        interface IResponseVideoGiveUpRelive {
        }

        /** Represents a ResponseVideoGiveUpRelive. */
        class ResponseVideoGiveUpRelive implements IResponseVideoGiveUpRelive {

            /**
             * Constructs a new ResponseVideoGiveUpRelive.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseVideoGiveUpRelive);

            /**
             * Encodes the specified ResponseVideoGiveUpRelive message. Does not implicitly {@link game.mindmaster.ResponseVideoGiveUpRelive.verify|verify} messages.
             * @param message ResponseVideoGiveUpRelive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseVideoGiveUpRelive, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseVideoGiveUpRelive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseVideoGiveUpRelive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseVideoGiveUpRelive;
        }

        /** Properties of a ResponseVideoRecovery. */
        interface IResponseVideoRecovery {

            /** ResponseVideoRecovery left_video_recovery_times */
            left_video_recovery_times?: (number|Long|null);
        }

        /** Represents a ResponseVideoRecovery. */
        class ResponseVideoRecovery implements IResponseVideoRecovery {

            /**
             * Constructs a new ResponseVideoRecovery.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseVideoRecovery);

            /** ResponseVideoRecovery left_video_recovery_times. */
            public left_video_recovery_times: (number|Long);

            /**
             * Encodes the specified ResponseVideoRecovery message. Does not implicitly {@link game.mindmaster.ResponseVideoRecovery.verify|verify} messages.
             * @param message ResponseVideoRecovery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseVideoRecovery, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseVideoRecovery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseVideoRecovery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseVideoRecovery;
        }

        /** Properties of a ResponseUserInfoChanged. */
        interface IResponseUserInfoChanged {

            /** ResponseUserInfoChanged gold */
            gold?: (number|Long|null);

            /** ResponseUserInfoChanged power */
            power?: (number|Long|null);

            /** ResponseUserInfoChanged power_time */
            power_time?: (number|Long|null);
        }

        /** Represents a ResponseUserInfoChanged. */
        class ResponseUserInfoChanged implements IResponseUserInfoChanged {

            /**
             * Constructs a new ResponseUserInfoChanged.
             * @param [properties] Properties to set
             */
            constructor(properties?: game.mindmaster.IResponseUserInfoChanged);

            /** ResponseUserInfoChanged gold. */
            public gold: (number|Long);

            /** ResponseUserInfoChanged power. */
            public power: (number|Long);

            /** ResponseUserInfoChanged power_time. */
            public power_time: (number|Long);

            /**
             * Encodes the specified ResponseUserInfoChanged message. Does not implicitly {@link game.mindmaster.ResponseUserInfoChanged.verify|verify} messages.
             * @param message ResponseUserInfoChanged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: game.mindmaster.IResponseUserInfoChanged, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ResponseUserInfoChanged message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseUserInfoChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.mindmaster.ResponseUserInfoChanged;
        }
    }
}
