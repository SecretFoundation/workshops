"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseMsgCreateVestingAccount() {
    return {
        from_address: "",
        to_address: "",
        amount: [],
        end_time: "0",
        delayed: false,
    };
}
exports.MsgCreateVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.end_time !== "0") {
            writer.uint32(32).int64(message.end_time);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.end_time = longToString(reader.int64());
                    break;
                case 5:
                    message.delayed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            from_address: isSet(object.from_address)
                ? String(object.from_address)
                : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            end_time: isSet(object.end_time) ? String(object.end_time) : "0",
            delayed: isSet(object.delayed) ? Boolean(object.delayed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined &&
            (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        message.end_time !== undefined && (obj.end_time = message.end_time);
        message.delayed !== undefined && (obj.delayed = message.delayed);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgCreateVestingAccount();
        message.from_address = (_a = object.from_address) !== null && _a !== void 0 ? _a : "";
        message.to_address = (_b = object.to_address) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.end_time = (_d = object.end_time) !== null && _d !== void 0 ? _d : "0";
        message.delayed = (_e = object.delayed) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
    }
    CreateVestingAccount(request) {
        const data = exports.MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
        return promise.then((data) => exports.MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map