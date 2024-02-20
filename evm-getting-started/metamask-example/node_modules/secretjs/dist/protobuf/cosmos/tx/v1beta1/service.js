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
exports.ServiceClientImpl = exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.GetTxResponse = exports.GetTxRequest = exports.SimulateResponse = exports.SimulateRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.broadcastModeToJSON = exports.broadcastModeFromJSON = exports.BroadcastMode = exports.orderByToJSON = exports.orderByFromJSON = exports.OrderBy = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("../../base/query/v1beta1/pagination");
const abci_1 = require("../../base/abci/v1beta1/abci");
const tx_1 = require("./tx");
const types_1 = require("../../../tendermint/types/types");
const block_1 = require("../../../tendermint/types/block");
exports.protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
var OrderBy;
(function (OrderBy) {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
exports.orderByFromJSON = orderByFromJSON;
function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        default:
            return "UNKNOWN";
    }
}
exports.orderByToJSON = orderByToJSON;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode = exports.BroadcastMode || (exports.BroadcastMode = {}));
function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
exports.broadcastModeFromJSON = broadcastModeFromJSON;
function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        default:
            return "UNKNOWN";
    }
}
exports.broadcastModeToJSON = broadcastModeToJSON;
function createBaseGetTxsEventRequest() {
    return { events: [], pagination: undefined, order_by: 0 };
}
exports.GetTxsEventRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.order_by !== 0) {
            writer.uint32(24).int32(message.order_by);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.order_by = reader.int32();
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
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events)
                ? object.events.map((e) => String(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            order_by: isSet(object.order_by) ? orderByFromJSON(object.order_by) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map((e) => e);
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.order_by !== undefined &&
            (obj.order_by = orderByToJSON(message.order_by));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetTxsEventRequest();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.order_by = (_b = object.order_by) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGetTxsEventResponse() {
    return { txs: [], tx_responses: [], pagination: undefined };
}
exports.GetTxsEventResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tx_responses) {
            abci_1.TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tx_responses.push(abci_1.TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs)
                ? object.txs.map((e) => tx_1.Tx.fromJSON(e))
                : [],
            tx_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.tx_responses)
                ? object.tx_responses.map((e) => abci_1.TxResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => (e ? tx_1.Tx.toJSON(e) : undefined));
        }
        else {
            obj.txs = [];
        }
        if (message.tx_responses) {
            obj.tx_responses = message.tx_responses.map((e) => e ? abci_1.TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetTxsEventResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map((e) => tx_1.Tx.fromPartial(e))) || [];
        message.tx_responses =
            ((_b = object.tx_responses) === null || _b === void 0 ? void 0 : _b.map((e) => abci_1.TxResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseBroadcastTxRequest() {
    return { tx_bytes: new Uint8Array(), mode: 0 };
}
exports.BroadcastTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx_bytes.length !== 0) {
            writer.uint32(10).bytes(message.tx_bytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_bytes = reader.bytes();
                    break;
                case 2:
                    message.mode = reader.int32();
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
            tx_bytes: isSet(object.tx_bytes)
                ? bytesFromBase64(object.tx_bytes)
                : new Uint8Array(),
            mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_bytes !== undefined &&
            (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        message.mode !== undefined &&
            (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBroadcastTxRequest();
        message.tx_bytes = (_a = object.tx_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseBroadcastTxResponse() {
    return { tx_response: undefined };
}
exports.BroadcastTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx_response !== undefined) {
            abci_1.TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_response = abci_1.TxResponse.decode(reader, reader.uint32());
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
            tx_response: isSet(object.tx_response)
                ? abci_1.TxResponse.fromJSON(object.tx_response)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_response !== undefined &&
            (obj.tx_response = message.tx_response
                ? abci_1.TxResponse.toJSON(message.tx_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxResponse();
        message.tx_response =
            object.tx_response !== undefined && object.tx_response !== null
                ? abci_1.TxResponse.fromPartial(object.tx_response)
                : undefined;
        return message;
    },
};
function createBaseSimulateRequest() {
    return { tx: undefined, tx_bytes: new Uint8Array() };
}
exports.SimulateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_bytes.length !== 0) {
            writer.uint32(18).bytes(message.tx_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_bytes = reader.bytes();
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
            tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            tx_bytes: isSet(object.tx_bytes)
                ? bytesFromBase64(object.tx_bytes)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.tx_bytes !== undefined &&
            (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSimulateRequest();
        message.tx =
            object.tx !== undefined && object.tx !== null
                ? tx_1.Tx.fromPartial(object.tx)
                : undefined;
        message.tx_bytes = (_a = object.tx_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseSimulateResponse() {
    return { gas_info: undefined, result: undefined };
}
exports.SimulateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gas_info !== undefined) {
            abci_1.GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            abci_1.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = abci_1.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = abci_1.Result.decode(reader, reader.uint32());
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
            gas_info: isSet(object.gas_info)
                ? abci_1.GasInfo.fromJSON(object.gas_info)
                : undefined,
            result: isSet(object.result) ? abci_1.Result.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas_info !== undefined &&
            (obj.gas_info = message.gas_info
                ? abci_1.GasInfo.toJSON(message.gas_info)
                : undefined);
        message.result !== undefined &&
            (obj.result = message.result ? abci_1.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulateResponse();
        message.gas_info =
            object.gas_info !== undefined && object.gas_info !== null
                ? abci_1.GasInfo.fromPartial(object.gas_info)
                : undefined;
        message.result =
            object.result !== undefined && object.result !== null
                ? abci_1.Result.fromPartial(object.result)
                : undefined;
        return message;
    },
};
function createBaseGetTxRequest() {
    return { hash: "" };
}
exports.GetTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
            hash: isSet(object.hash) ? String(object.hash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTxRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTxResponse() {
    return { tx: undefined, tx_response: undefined };
}
exports.GetTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_response !== undefined) {
            abci_1.TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_response = abci_1.TxResponse.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            tx_response: isSet(object.tx_response)
                ? abci_1.TxResponse.fromJSON(object.tx_response)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.tx_response !== undefined &&
            (obj.tx_response = message.tx_response
                ? abci_1.TxResponse.toJSON(message.tx_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxResponse();
        message.tx =
            object.tx !== undefined && object.tx !== null
                ? tx_1.Tx.fromPartial(object.tx)
                : undefined;
        message.tx_response =
            object.tx_response !== undefined && object.tx_response !== null
                ? abci_1.TxResponse.fromPartial(object.tx_response)
                : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsRequest() {
    return { height: "0", pagination: undefined };
}
exports.GetBlockWithTxsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBlockWithTxsRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsResponse() {
    return {
        txs: [],
        block_id: undefined,
        block: undefined,
        pagination: undefined,
    };
}
exports.GetBlockWithTxsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs)
                ? object.txs.map((e) => tx_1.Tx.fromJSON(e))
                : [],
            block_id: isSet(object.block_id)
                ? types_1.BlockID.fromJSON(object.block_id)
                : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => (e ? tx_1.Tx.toJSON(e) : undefined));
        }
        else {
            obj.txs = [];
        }
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? types_1.BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map((e) => tx_1.Tx.fromPartial(e))) || [];
        message.block_id =
            object.block_id !== undefined && object.block_id !== null
                ? types_1.BlockID.fromPartial(object.block_id)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? block_1.Block.fromPartial(object.block)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class ServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Simulate = this.Simulate.bind(this);
        this.GetTx = this.GetTx.bind(this);
        this.BroadcastTx = this.BroadcastTx.bind(this);
        this.GetTxsEvent = this.GetTxsEvent.bind(this);
        this.GetBlockWithTxs = this.GetBlockWithTxs.bind(this);
    }
    Simulate(request) {
        const data = exports.SimulateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
        return promise.then((data) => exports.SimulateResponse.decode(new _m0.Reader(data)));
    }
    GetTx(request) {
        const data = exports.GetTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
        return promise.then((data) => exports.GetTxResponse.decode(new _m0.Reader(data)));
    }
    BroadcastTx(request) {
        const data = exports.BroadcastTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
        return promise.then((data) => exports.BroadcastTxResponse.decode(new _m0.Reader(data)));
    }
    GetTxsEvent(request) {
        const data = exports.GetTxsEventRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
        return promise.then((data) => exports.GetTxsEventResponse.decode(new _m0.Reader(data)));
    }
    GetBlockWithTxs(request) {
        const data = exports.GetBlockWithTxsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
        return promise.then((data) => exports.GetBlockWithTxsResponse.decode(new _m0.Reader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
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
//# sourceMappingURL=service.js.map