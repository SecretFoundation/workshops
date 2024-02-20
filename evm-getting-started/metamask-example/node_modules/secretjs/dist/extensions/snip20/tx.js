"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSnip20SetViewingKey = exports.MsgSnip20DecreaseAllowance = exports.MsgSnip20IncreaseAllowance = exports.MsgSnip20Transfer = exports.MsgSnip20Send = void 0;
const tx_1 = require("../../tx");
class MsgSnip20Send extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20Send = MsgSnip20Send;
class MsgSnip20Transfer extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20Transfer = MsgSnip20Transfer;
class MsgSnip20IncreaseAllowance extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20IncreaseAllowance = MsgSnip20IncreaseAllowance;
class MsgSnip20DecreaseAllowance extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20DecreaseAllowance = MsgSnip20DecreaseAllowance;
class MsgSnip20SetViewingKey extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20SetViewingKey = MsgSnip20SetViewingKey;
//# sourceMappingURL=tx.js.map