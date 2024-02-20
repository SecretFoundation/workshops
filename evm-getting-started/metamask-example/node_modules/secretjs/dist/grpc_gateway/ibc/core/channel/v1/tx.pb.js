"use strict";
/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = exports.ResponseResultType = void 0;
const fm = __importStar(require("../../../../fetch.pb"));
var ResponseResultType;
(function (ResponseResultType) {
    ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = "RESPONSE_RESULT_TYPE_NOOP";
    ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = "RESPONSE_RESULT_TYPE_SUCCESS";
})(ResponseResultType = exports.ResponseResultType || (exports.ResponseResultType = {}));
class Msg {
    static ChannelOpenInit(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenInit`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static ChannelOpenTry(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenTry`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static ChannelOpenAck(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenAck`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static ChannelOpenConfirm(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenConfirm`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static ChannelCloseInit(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelCloseInit`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static ChannelCloseConfirm(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelCloseConfirm`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static RecvPacket(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/RecvPacket`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static Timeout(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/Timeout`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static TimeoutOnClose(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/TimeoutOnClose`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static Acknowledgement(req, initReq) {
        return fm.fetchReq(`/ibc.core.channel.v1.Msg/Acknowledgement`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
}
exports.Msg = Msg;
//# sourceMappingURL=tx.pb.js.map