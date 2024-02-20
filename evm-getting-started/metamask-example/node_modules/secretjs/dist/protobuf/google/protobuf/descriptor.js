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
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.methodOptions_IdempotencyLevelToJSON = exports.methodOptions_IdempotencyLevelFromJSON = exports.MethodOptions_IdempotencyLevel = exports.fieldOptions_JSTypeToJSON = exports.fieldOptions_JSTypeFromJSON = exports.FieldOptions_JSType = exports.fieldOptions_CTypeToJSON = exports.fieldOptions_CTypeFromJSON = exports.FieldOptions_CType = exports.fileOptions_OptimizeModeToJSON = exports.fileOptions_OptimizeModeFromJSON = exports.FileOptions_OptimizeMode = exports.fieldDescriptorProto_LabelToJSON = exports.fieldDescriptorProto_LabelFromJSON = exports.FieldDescriptorProto_Label = exports.fieldDescriptorProto_TypeToJSON = exports.fieldDescriptorProto_TypeFromJSON = exports.FieldDescriptorProto_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type = exports.FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        default:
            return "UNKNOWN";
    }
}
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label = exports.FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        default:
            return "UNKNOWN";
    }
}
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode = exports.FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        default:
            return "UNKNOWN";
    }
}
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType = exports.FieldOptions_CType || (exports.FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        default:
            return "UNKNOWN";
    }
}
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType = exports.FieldOptions_JSType || (exports.FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        default:
            return "UNKNOWN";
    }
}
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel = exports.MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        default:
            return "UNKNOWN";
    }
}
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
function createBaseFileDescriptorSet() {
    return { file: [] };
}
exports.FileDescriptorSet = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.file) {
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
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
            file: Array.isArray(object === null || object === void 0 ? void 0 : object.file)
                ? object.file.map((e) => exports.FileDescriptorProto.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.file) {
            obj.file = message.file.map((e) => e ? exports.FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.file = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFileDescriptorSet();
        message.file =
            ((_a = object.file) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FileDescriptorProto.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        public_dependency: [],
        weak_dependency: [],
        message_type: [],
        enum_type: [],
        service: [],
        extension: [],
        options: undefined,
        source_code_info: undefined,
        syntax: "",
    };
}
exports.FileDescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        for (const v of message.dependency) {
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (const v of message.public_dependency) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (const v of message.weak_dependency) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.message_type) {
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enum_type) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.service) {
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.source_code_info !== undefined) {
            exports.SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.package = reader.string();
                    break;
                case 3:
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.public_dependency.push(reader.int32());
                        }
                    }
                    else {
                        message.public_dependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weak_dependency.push(reader.int32());
                        }
                    }
                    else {
                        message.weak_dependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.message_type.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enum_type.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.source_code_info = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            package: isSet(object.package) ? String(object.package) : "",
            dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.dependency)
                ? object.dependency.map((e) => String(e))
                : [],
            public_dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.public_dependency)
                ? object.public_dependency.map((e) => Number(e))
                : [],
            weak_dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.weak_dependency)
                ? object.weak_dependency.map((e) => Number(e))
                : [],
            message_type: Array.isArray(object === null || object === void 0 ? void 0 : object.message_type)
                ? object.message_type.map((e) => exports.DescriptorProto.fromJSON(e))
                : [],
            enum_type: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type)
                ? object.enum_type.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : [],
            service: Array.isArray(object === null || object === void 0 ? void 0 : object.service)
                ? object.service.map((e) => exports.ServiceDescriptorProto.fromJSON(e))
                : [],
            extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options)
                ? exports.FileOptions.fromJSON(object.options)
                : undefined,
            source_code_info: isSet(object.source_code_info)
                ? exports.SourceCodeInfo.fromJSON(object.source_code_info)
                : undefined,
            syntax: isSet(object.syntax) ? String(object.syntax) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.package !== undefined && (obj.package = message.package);
        if (message.dependency) {
            obj.dependency = message.dependency.map((e) => e);
        }
        else {
            obj.dependency = [];
        }
        if (message.public_dependency) {
            obj.public_dependency = message.public_dependency.map((e) => Math.round(e));
        }
        else {
            obj.public_dependency = [];
        }
        if (message.weak_dependency) {
            obj.weak_dependency = message.weak_dependency.map((e) => Math.round(e));
        }
        else {
            obj.weak_dependency = [];
        }
        if (message.message_type) {
            obj.message_type = message.message_type.map((e) => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.message_type = [];
        }
        if (message.enum_type) {
            obj.enum_type = message.enum_type.map((e) => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enum_type = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => e ? exports.ServiceDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.FileOptions.toJSON(message.options)
                : undefined);
        message.source_code_info !== undefined &&
            (obj.source_code_info = message.source_code_info
                ? exports.SourceCodeInfo.toJSON(message.source_code_info)
                : undefined);
        message.syntax !== undefined && (obj.syntax = message.syntax);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseFileDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.dependency = ((_c = object.dependency) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.public_dependency = ((_d = object.public_dependency) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.weak_dependency = ((_e = object.weak_dependency) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.message_type =
            ((_f = object.message_type) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto.fromPartial(e))) || [];
        message.enum_type =
            ((_g = object.enum_type) === null || _g === void 0 ? void 0 : _g.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || [];
        message.service =
            ((_h = object.service) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ServiceDescriptorProto.fromPartial(e))) || [];
        message.extension =
            ((_j = object.extension) === null || _j === void 0 ? void 0 : _j.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.FileOptions.fromPartial(object.options)
                : undefined;
        message.source_code_info =
            object.source_code_info !== undefined && object.source_code_info !== null
                ? exports.SourceCodeInfo.fromPartial(object.source_code_info)
                : undefined;
        message.syntax = (_k = object.syntax) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nested_type: [],
        enum_type: [],
        extension_range: [],
        oneof_decl: [],
        options: undefined,
        reserved_range: [],
        reserved_name: [],
    };
}
exports.DescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.field) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.nested_type) {
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.enum_type) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.extension_range) {
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.oneof_decl) {
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reserved_range) {
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.reserved_name) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nested_type.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enum_type.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extension_range.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneof_decl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reserved_range.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reserved_name.push(reader.string());
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
            name: isSet(object.name) ? String(object.name) : "",
            field: Array.isArray(object === null || object === void 0 ? void 0 : object.field)
                ? object.field.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            nested_type: Array.isArray(object === null || object === void 0 ? void 0 : object.nested_type)
                ? object.nested_type.map((e) => exports.DescriptorProto.fromJSON(e))
                : [],
            enum_type: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type)
                ? object.enum_type.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : [],
            extension_range: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_range)
                ? object.extension_range.map((e) => exports.DescriptorProto_ExtensionRange.fromJSON(e))
                : [],
            oneof_decl: Array.isArray(object === null || object === void 0 ? void 0 : object.oneof_decl)
                ? object.oneof_decl.map((e) => exports.OneofDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options)
                ? exports.MessageOptions.fromJSON(object.options)
                : undefined,
            reserved_range: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range)
                ? object.reserved_range.map((e) => exports.DescriptorProto_ReservedRange.fromJSON(e))
                : [],
            reserved_name: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name)
                ? object.reserved_name.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        if (message.nested_type) {
            obj.nested_type = message.nested_type.map((e) => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.nested_type = [];
        }
        if (message.enum_type) {
            obj.enum_type = message.enum_type.map((e) => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enum_type = [];
        }
        if (message.extension_range) {
            obj.extension_range = message.extension_range.map((e) => e ? exports.DescriptorProto_ExtensionRange.toJSON(e) : undefined);
        }
        else {
            obj.extension_range = [];
        }
        if (message.oneof_decl) {
            obj.oneof_decl = message.oneof_decl.map((e) => e ? exports.OneofDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.oneof_decl = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.MessageOptions.toJSON(message.options)
                : undefined);
        if (message.reserved_range) {
            obj.reserved_range = message.reserved_range.map((e) => e ? exports.DescriptorProto_ReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reserved_range = [];
        }
        if (message.reserved_name) {
            obj.reserved_name = message.reserved_name.map((e) => e);
        }
        else {
            obj.reserved_name = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.field =
            ((_b = object.field) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.extension =
            ((_c = object.extension) === null || _c === void 0 ? void 0 : _c.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.nested_type =
            ((_d = object.nested_type) === null || _d === void 0 ? void 0 : _d.map((e) => exports.DescriptorProto.fromPartial(e))) || [];
        message.enum_type =
            ((_e = object.enum_type) === null || _e === void 0 ? void 0 : _e.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || [];
        message.extension_range =
            ((_f = object.extension_range) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto_ExtensionRange.fromPartial(e))) || [];
        message.oneof_decl =
            ((_g = object.oneof_decl) === null || _g === void 0 ? void 0 : _g.map((e) => exports.OneofDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.MessageOptions.fromPartial(object.options)
                : undefined;
        message.reserved_range =
            ((_h = object.reserved_range) === null || _h === void 0 ? void 0 : _h.map((e) => exports.DescriptorProto_ReservedRange.fromPartial(e))) || [];
        message.reserved_name = ((_j = object.reserved_name) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        return message;
    },
};
function createBaseDescriptorProto_ExtensionRange() {
    return { start: 0, end: 0, options: undefined };
}
exports.DescriptorProto_ExtensionRange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
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
            start: isSet(object.start) ? Number(object.start) : 0,
            end: isSet(object.end) ? Number(object.end) : 0,
            options: isSet(object.options)
                ? exports.ExtensionRangeOptions.fromJSON(object.options)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.ExtensionRangeOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDescriptorProto_ExtensionRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ExtensionRangeOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
function createBaseDescriptorProto_ReservedRange() {
    return { start: 0, end: 0 };
}
exports.DescriptorProto_ReservedRange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
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
            start: isSet(object.start) ? Number(object.start) : 0,
            end: isSet(object.end) ? Number(object.end) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDescriptorProto_ReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseExtensionRangeOptions() {
    return { uninterpreted_option: [] };
}
exports.ExtensionRangeOptions = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExtensionRangeOptions();
        message.uninterpreted_option =
            ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        type_name: "",
        extendee: "",
        default_value: "",
        oneof_index: 0,
        json_name: "",
        options: undefined,
        proto3_optional: false,
    };
}
exports.FieldDescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.type_name !== "") {
            writer.uint32(50).string(message.type_name);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.default_value !== "") {
            writer.uint32(58).string(message.default_value);
        }
        if (message.oneof_index !== 0) {
            writer.uint32(72).int32(message.oneof_index);
        }
        if (message.json_name !== "") {
            writer.uint32(82).string(message.json_name);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3_optional === true) {
            writer.uint32(136).bool(message.proto3_optional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.type_name = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.default_value = reader.string();
                    break;
                case 9:
                    message.oneof_index = reader.int32();
                    break;
                case 10:
                    message.json_name = reader.string();
                    break;
                case 8:
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.proto3_optional = reader.bool();
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
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            label: isSet(object.label)
                ? fieldDescriptorProto_LabelFromJSON(object.label)
                : 1,
            type: isSet(object.type)
                ? fieldDescriptorProto_TypeFromJSON(object.type)
                : 1,
            type_name: isSet(object.type_name) ? String(object.type_name) : "",
            extendee: isSet(object.extendee) ? String(object.extendee) : "",
            default_value: isSet(object.default_value)
                ? String(object.default_value)
                : "",
            oneof_index: isSet(object.oneof_index) ? Number(object.oneof_index) : 0,
            json_name: isSet(object.json_name) ? String(object.json_name) : "",
            options: isSet(object.options)
                ? exports.FieldOptions.fromJSON(object.options)
                : undefined,
            proto3_optional: isSet(object.proto3_optional)
                ? Boolean(object.proto3_optional)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.label !== undefined &&
            (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
        message.type !== undefined &&
            (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
        message.type_name !== undefined && (obj.type_name = message.type_name);
        message.extendee !== undefined && (obj.extendee = message.extendee);
        message.default_value !== undefined &&
            (obj.default_value = message.default_value);
        message.oneof_index !== undefined &&
            (obj.oneof_index = Math.round(message.oneof_index));
        message.json_name !== undefined && (obj.json_name = message.json_name);
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.FieldOptions.toJSON(message.options)
                : undefined);
        message.proto3_optional !== undefined &&
            (obj.proto3_optional = message.proto3_optional);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseFieldDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : 1;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 1;
        message.type_name = (_e = object.type_name) !== null && _e !== void 0 ? _e : "";
        message.extendee = (_f = object.extendee) !== null && _f !== void 0 ? _f : "";
        message.default_value = (_g = object.default_value) !== null && _g !== void 0 ? _g : "";
        message.oneof_index = (_h = object.oneof_index) !== null && _h !== void 0 ? _h : 0;
        message.json_name = (_j = object.json_name) !== null && _j !== void 0 ? _j : "";
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.FieldOptions.fromPartial(object.options)
                : undefined;
        message.proto3_optional = (_k = object.proto3_optional) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
function createBaseOneofDescriptorProto() {
    return { name: "", options: undefined };
}
exports.OneofDescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            options: isSet(object.options)
                ? exports.OneofOptions.fromJSON(object.options)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.OneofOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOneofDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.OneofOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
function createBaseEnumDescriptorProto() {
    return {
        name: "",
        value: [],
        options: undefined,
        reserved_range: [],
        reserved_name: [],
    };
}
exports.EnumDescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.value) {
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reserved_range) {
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reserved_name) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reserved_range.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reserved_name.push(reader.string());
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
            name: isSet(object.name) ? String(object.name) : "",
            value: Array.isArray(object === null || object === void 0 ? void 0 : object.value)
                ? object.value.map((e) => exports.EnumValueDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options)
                ? exports.EnumOptions.fromJSON(object.options)
                : undefined,
            reserved_range: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range)
                ? object.reserved_range.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromJSON(e))
                : [],
            reserved_name: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name)
                ? object.reserved_name.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.value) {
            obj.value = message.value.map((e) => e ? exports.EnumValueDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.value = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.EnumOptions.toJSON(message.options)
                : undefined);
        if (message.reserved_range) {
            obj.reserved_range = message.reserved_range.map((e) => e ? exports.EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reserved_range = [];
        }
        if (message.reserved_name) {
            obj.reserved_name = message.reserved_name.map((e) => e);
        }
        else {
            obj.reserved_name = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEnumDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value =
            ((_b = object.value) === null || _b === void 0 ? void 0 : _b.map((e) => exports.EnumValueDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.EnumOptions.fromPartial(object.options)
                : undefined;
        message.reserved_range =
            ((_c = object.reserved_range) === null || _c === void 0 ? void 0 : _c.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e))) || [];
        message.reserved_name = ((_d = object.reserved_name) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return { start: 0, end: 0 };
}
exports.EnumDescriptorProto_EnumReservedRange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
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
            start: isSet(object.start) ? Number(object.start) : 0,
            end: isSet(object.end) ? Number(object.end) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseEnumValueDescriptorProto() {
    return { name: "", number: 0, options: undefined };
}
exports.EnumValueDescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            options: isSet(object.options)
                ? exports.EnumValueOptions.fromJSON(object.options)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.EnumValueOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumValueDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.EnumValueOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
function createBaseServiceDescriptorProto() {
    return { name: "", method: [], options: undefined };
}
exports.ServiceDescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.method) {
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            method: Array.isArray(object === null || object === void 0 ? void 0 : object.method)
                ? object.method.map((e) => exports.MethodDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options)
                ? exports.ServiceOptions.fromJSON(object.options)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.method) {
            obj.method = message.method.map((e) => e ? exports.MethodDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.method = [];
        }
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.ServiceOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method =
            ((_b = object.method) === null || _b === void 0 ? void 0 : _b.map((e) => exports.MethodDescriptorProto.fromPartial(e))) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ServiceOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        input_type: "",
        output_type: "",
        options: undefined,
        client_streaming: false,
        server_streaming: false,
    };
}
exports.MethodDescriptorProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.input_type !== "") {
            writer.uint32(18).string(message.input_type);
        }
        if (message.output_type !== "") {
            writer.uint32(26).string(message.output_type);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.client_streaming === true) {
            writer.uint32(40).bool(message.client_streaming);
        }
        if (message.server_streaming === true) {
            writer.uint32(48).bool(message.server_streaming);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.input_type = reader.string();
                    break;
                case 3:
                    message.output_type = reader.string();
                    break;
                case 4:
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.client_streaming = reader.bool();
                    break;
                case 6:
                    message.server_streaming = reader.bool();
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
            name: isSet(object.name) ? String(object.name) : "",
            input_type: isSet(object.input_type) ? String(object.input_type) : "",
            output_type: isSet(object.output_type) ? String(object.output_type) : "",
            options: isSet(object.options)
                ? exports.MethodOptions.fromJSON(object.options)
                : undefined,
            client_streaming: isSet(object.client_streaming)
                ? Boolean(object.client_streaming)
                : false,
            server_streaming: isSet(object.server_streaming)
                ? Boolean(object.server_streaming)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.input_type !== undefined && (obj.input_type = message.input_type);
        message.output_type !== undefined &&
            (obj.output_type = message.output_type);
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.MethodOptions.toJSON(message.options)
                : undefined);
        message.client_streaming !== undefined &&
            (obj.client_streaming = message.client_streaming);
        message.server_streaming !== undefined &&
            (obj.server_streaming = message.server_streaming);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMethodDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.input_type = (_b = object.input_type) !== null && _b !== void 0 ? _b : "";
        message.output_type = (_c = object.output_type) !== null && _c !== void 0 ? _c : "";
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.MethodOptions.fromPartial(object.options)
                : undefined;
        message.client_streaming = (_d = object.client_streaming) !== null && _d !== void 0 ? _d : false;
        message.server_streaming = (_e = object.server_streaming) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseFileOptions() {
    return {
        java_package: "",
        java_outer_classname: "",
        java_multiple_files: false,
        java_generate_equals_and_hash: false,
        java_string_check_utf8: false,
        optimize_for: 1,
        go_package: "",
        cc_generic_services: false,
        java_generic_services: false,
        py_generic_services: false,
        php_generic_services: false,
        deprecated: false,
        cc_enable_arenas: false,
        objc_class_prefix: "",
        csharp_namespace: "",
        swift_prefix: "",
        php_class_prefix: "",
        php_namespace: "",
        php_metadata_namespace: "",
        ruby_package: "",
        uninterpreted_option: [],
    };
}
exports.FileOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.java_package !== "") {
            writer.uint32(10).string(message.java_package);
        }
        if (message.java_outer_classname !== "") {
            writer.uint32(66).string(message.java_outer_classname);
        }
        if (message.java_multiple_files === true) {
            writer.uint32(80).bool(message.java_multiple_files);
        }
        if (message.java_generate_equals_and_hash === true) {
            writer.uint32(160).bool(message.java_generate_equals_and_hash);
        }
        if (message.java_string_check_utf8 === true) {
            writer.uint32(216).bool(message.java_string_check_utf8);
        }
        if (message.optimize_for !== 1) {
            writer.uint32(72).int32(message.optimize_for);
        }
        if (message.go_package !== "") {
            writer.uint32(90).string(message.go_package);
        }
        if (message.cc_generic_services === true) {
            writer.uint32(128).bool(message.cc_generic_services);
        }
        if (message.java_generic_services === true) {
            writer.uint32(136).bool(message.java_generic_services);
        }
        if (message.py_generic_services === true) {
            writer.uint32(144).bool(message.py_generic_services);
        }
        if (message.php_generic_services === true) {
            writer.uint32(336).bool(message.php_generic_services);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.cc_enable_arenas === true) {
            writer.uint32(248).bool(message.cc_enable_arenas);
        }
        if (message.objc_class_prefix !== "") {
            writer.uint32(290).string(message.objc_class_prefix);
        }
        if (message.csharp_namespace !== "") {
            writer.uint32(298).string(message.csharp_namespace);
        }
        if (message.swift_prefix !== "") {
            writer.uint32(314).string(message.swift_prefix);
        }
        if (message.php_class_prefix !== "") {
            writer.uint32(322).string(message.php_class_prefix);
        }
        if (message.php_namespace !== "") {
            writer.uint32(330).string(message.php_namespace);
        }
        if (message.php_metadata_namespace !== "") {
            writer.uint32(354).string(message.php_metadata_namespace);
        }
        if (message.ruby_package !== "") {
            writer.uint32(362).string(message.ruby_package);
        }
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.java_package = reader.string();
                    break;
                case 8:
                    message.java_outer_classname = reader.string();
                    break;
                case 10:
                    message.java_multiple_files = reader.bool();
                    break;
                case 20:
                    message.java_generate_equals_and_hash = reader.bool();
                    break;
                case 27:
                    message.java_string_check_utf8 = reader.bool();
                    break;
                case 9:
                    message.optimize_for = reader.int32();
                    break;
                case 11:
                    message.go_package = reader.string();
                    break;
                case 16:
                    message.cc_generic_services = reader.bool();
                    break;
                case 17:
                    message.java_generic_services = reader.bool();
                    break;
                case 18:
                    message.py_generic_services = reader.bool();
                    break;
                case 42:
                    message.php_generic_services = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.cc_enable_arenas = reader.bool();
                    break;
                case 36:
                    message.objc_class_prefix = reader.string();
                    break;
                case 37:
                    message.csharp_namespace = reader.string();
                    break;
                case 39:
                    message.swift_prefix = reader.string();
                    break;
                case 40:
                    message.php_class_prefix = reader.string();
                    break;
                case 41:
                    message.php_namespace = reader.string();
                    break;
                case 44:
                    message.php_metadata_namespace = reader.string();
                    break;
                case 45:
                    message.ruby_package = reader.string();
                    break;
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            java_package: isSet(object.java_package)
                ? String(object.java_package)
                : "",
            java_outer_classname: isSet(object.java_outer_classname)
                ? String(object.java_outer_classname)
                : "",
            java_multiple_files: isSet(object.java_multiple_files)
                ? Boolean(object.java_multiple_files)
                : false,
            java_generate_equals_and_hash: isSet(object.java_generate_equals_and_hash)
                ? Boolean(object.java_generate_equals_and_hash)
                : false,
            java_string_check_utf8: isSet(object.java_string_check_utf8)
                ? Boolean(object.java_string_check_utf8)
                : false,
            optimize_for: isSet(object.optimize_for)
                ? fileOptions_OptimizeModeFromJSON(object.optimize_for)
                : 1,
            go_package: isSet(object.go_package) ? String(object.go_package) : "",
            cc_generic_services: isSet(object.cc_generic_services)
                ? Boolean(object.cc_generic_services)
                : false,
            java_generic_services: isSet(object.java_generic_services)
                ? Boolean(object.java_generic_services)
                : false,
            py_generic_services: isSet(object.py_generic_services)
                ? Boolean(object.py_generic_services)
                : false,
            php_generic_services: isSet(object.php_generic_services)
                ? Boolean(object.php_generic_services)
                : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            cc_enable_arenas: isSet(object.cc_enable_arenas)
                ? Boolean(object.cc_enable_arenas)
                : false,
            objc_class_prefix: isSet(object.objc_class_prefix)
                ? String(object.objc_class_prefix)
                : "",
            csharp_namespace: isSet(object.csharp_namespace)
                ? String(object.csharp_namespace)
                : "",
            swift_prefix: isSet(object.swift_prefix)
                ? String(object.swift_prefix)
                : "",
            php_class_prefix: isSet(object.php_class_prefix)
                ? String(object.php_class_prefix)
                : "",
            php_namespace: isSet(object.php_namespace)
                ? String(object.php_namespace)
                : "",
            php_metadata_namespace: isSet(object.php_metadata_namespace)
                ? String(object.php_metadata_namespace)
                : "",
            ruby_package: isSet(object.ruby_package)
                ? String(object.ruby_package)
                : "",
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.java_package !== undefined &&
            (obj.java_package = message.java_package);
        message.java_outer_classname !== undefined &&
            (obj.java_outer_classname = message.java_outer_classname);
        message.java_multiple_files !== undefined &&
            (obj.java_multiple_files = message.java_multiple_files);
        message.java_generate_equals_and_hash !== undefined &&
            (obj.java_generate_equals_and_hash =
                message.java_generate_equals_and_hash);
        message.java_string_check_utf8 !== undefined &&
            (obj.java_string_check_utf8 = message.java_string_check_utf8);
        message.optimize_for !== undefined &&
            (obj.optimize_for = fileOptions_OptimizeModeToJSON(message.optimize_for));
        message.go_package !== undefined && (obj.go_package = message.go_package);
        message.cc_generic_services !== undefined &&
            (obj.cc_generic_services = message.cc_generic_services);
        message.java_generic_services !== undefined &&
            (obj.java_generic_services = message.java_generic_services);
        message.py_generic_services !== undefined &&
            (obj.py_generic_services = message.py_generic_services);
        message.php_generic_services !== undefined &&
            (obj.php_generic_services = message.php_generic_services);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.cc_enable_arenas !== undefined &&
            (obj.cc_enable_arenas = message.cc_enable_arenas);
        message.objc_class_prefix !== undefined &&
            (obj.objc_class_prefix = message.objc_class_prefix);
        message.csharp_namespace !== undefined &&
            (obj.csharp_namespace = message.csharp_namespace);
        message.swift_prefix !== undefined &&
            (obj.swift_prefix = message.swift_prefix);
        message.php_class_prefix !== undefined &&
            (obj.php_class_prefix = message.php_class_prefix);
        message.php_namespace !== undefined &&
            (obj.php_namespace = message.php_namespace);
        message.php_metadata_namespace !== undefined &&
            (obj.php_metadata_namespace = message.php_metadata_namespace);
        message.ruby_package !== undefined &&
            (obj.ruby_package = message.ruby_package);
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseFileOptions();
        message.java_package = (_a = object.java_package) !== null && _a !== void 0 ? _a : "";
        message.java_outer_classname = (_b = object.java_outer_classname) !== null && _b !== void 0 ? _b : "";
        message.java_multiple_files = (_c = object.java_multiple_files) !== null && _c !== void 0 ? _c : false;
        message.java_generate_equals_and_hash =
            (_d = object.java_generate_equals_and_hash) !== null && _d !== void 0 ? _d : false;
        message.java_string_check_utf8 = (_e = object.java_string_check_utf8) !== null && _e !== void 0 ? _e : false;
        message.optimize_for = (_f = object.optimize_for) !== null && _f !== void 0 ? _f : 1;
        message.go_package = (_g = object.go_package) !== null && _g !== void 0 ? _g : "";
        message.cc_generic_services = (_h = object.cc_generic_services) !== null && _h !== void 0 ? _h : false;
        message.java_generic_services = (_j = object.java_generic_services) !== null && _j !== void 0 ? _j : false;
        message.py_generic_services = (_k = object.py_generic_services) !== null && _k !== void 0 ? _k : false;
        message.php_generic_services = (_l = object.php_generic_services) !== null && _l !== void 0 ? _l : false;
        message.deprecated = (_m = object.deprecated) !== null && _m !== void 0 ? _m : false;
        message.cc_enable_arenas = (_o = object.cc_enable_arenas) !== null && _o !== void 0 ? _o : false;
        message.objc_class_prefix = (_p = object.objc_class_prefix) !== null && _p !== void 0 ? _p : "";
        message.csharp_namespace = (_q = object.csharp_namespace) !== null && _q !== void 0 ? _q : "";
        message.swift_prefix = (_r = object.swift_prefix) !== null && _r !== void 0 ? _r : "";
        message.php_class_prefix = (_s = object.php_class_prefix) !== null && _s !== void 0 ? _s : "";
        message.php_namespace = (_t = object.php_namespace) !== null && _t !== void 0 ? _t : "";
        message.php_metadata_namespace = (_u = object.php_metadata_namespace) !== null && _u !== void 0 ? _u : "";
        message.ruby_package = (_v = object.ruby_package) !== null && _v !== void 0 ? _v : "";
        message.uninterpreted_option =
            ((_w = object.uninterpreted_option) === null || _w === void 0 ? void 0 : _w.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMessageOptions() {
    return {
        message_set_wire_format: false,
        no_standard_descriptor_accessor: false,
        deprecated: false,
        map_entry: false,
        uninterpreted_option: [],
    };
}
exports.MessageOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message_set_wire_format === true) {
            writer.uint32(8).bool(message.message_set_wire_format);
        }
        if (message.no_standard_descriptor_accessor === true) {
            writer.uint32(16).bool(message.no_standard_descriptor_accessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.map_entry === true) {
            writer.uint32(56).bool(message.map_entry);
        }
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message_set_wire_format = reader.bool();
                    break;
                case 2:
                    message.no_standard_descriptor_accessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.map_entry = reader.bool();
                    break;
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            message_set_wire_format: isSet(object.message_set_wire_format)
                ? Boolean(object.message_set_wire_format)
                : false,
            no_standard_descriptor_accessor: isSet(object.no_standard_descriptor_accessor)
                ? Boolean(object.no_standard_descriptor_accessor)
                : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            map_entry: isSet(object.map_entry) ? Boolean(object.map_entry) : false,
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.message_set_wire_format !== undefined &&
            (obj.message_set_wire_format = message.message_set_wire_format);
        message.no_standard_descriptor_accessor !== undefined &&
            (obj.no_standard_descriptor_accessor =
                message.no_standard_descriptor_accessor);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.map_entry !== undefined && (obj.map_entry = message.map_entry);
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMessageOptions();
        message.message_set_wire_format = (_a = object.message_set_wire_format) !== null && _a !== void 0 ? _a : false;
        message.no_standard_descriptor_accessor =
            (_b = object.no_standard_descriptor_accessor) !== null && _b !== void 0 ? _b : false;
        message.deprecated = (_c = object.deprecated) !== null && _c !== void 0 ? _c : false;
        message.map_entry = (_d = object.map_entry) !== null && _d !== void 0 ? _d : false;
        message.uninterpreted_option =
            ((_e = object.uninterpreted_option) === null || _e === void 0 ? void 0 : _e.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFieldOptions() {
    return {
        ctype: 0,
        packed: false,
        jstype: 0,
        lazy: false,
        deprecated: false,
        weak: false,
        uninterpreted_option: [],
    };
}
exports.FieldOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ctype !== 0) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 0) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
            packed: isSet(object.packed) ? Boolean(object.packed) : false,
            jstype: isSet(object.jstype)
                ? fieldOptions_JSTypeFromJSON(object.jstype)
                : 0,
            lazy: isSet(object.lazy) ? Boolean(object.lazy) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            weak: isSet(object.weak) ? Boolean(object.weak) : false,
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.ctype !== undefined &&
            (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
        message.packed !== undefined && (obj.packed = message.packed);
        message.jstype !== undefined &&
            (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
        message.lazy !== undefined && (obj.lazy = message.lazy);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.weak !== undefined && (obj.weak = message.weak);
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseFieldOptions();
        message.ctype = (_a = object.ctype) !== null && _a !== void 0 ? _a : 0;
        message.packed = (_b = object.packed) !== null && _b !== void 0 ? _b : false;
        message.jstype = (_c = object.jstype) !== null && _c !== void 0 ? _c : 0;
        message.lazy = (_d = object.lazy) !== null && _d !== void 0 ? _d : false;
        message.deprecated = (_e = object.deprecated) !== null && _e !== void 0 ? _e : false;
        message.weak = (_f = object.weak) !== null && _f !== void 0 ? _f : false;
        message.uninterpreted_option =
            ((_g = object.uninterpreted_option) === null || _g === void 0 ? void 0 : _g.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOneofOptions() {
    return { uninterpreted_option: [] };
}
exports.OneofOptions = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOneofOptions();
        message.uninterpreted_option =
            ((_a = object.uninterpreted_option) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEnumOptions() {
    return { allow_alias: false, deprecated: false, uninterpreted_option: [] };
}
exports.EnumOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.allow_alias === true) {
            writer.uint32(16).bool(message.allow_alias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.allow_alias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            allow_alias: isSet(object.allow_alias)
                ? Boolean(object.allow_alias)
                : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.allow_alias !== undefined &&
            (obj.allow_alias = message.allow_alias);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEnumOptions();
        message.allow_alias = (_a = object.allow_alias) !== null && _a !== void 0 ? _a : false;
        message.deprecated = (_b = object.deprecated) !== null && _b !== void 0 ? _b : false;
        message.uninterpreted_option =
            ((_c = object.uninterpreted_option) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEnumValueOptions() {
    return { deprecated: false, uninterpreted_option: [] };
}
exports.EnumValueOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumValueOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpreted_option =
            ((_b = object.uninterpreted_option) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseServiceOptions() {
    return { deprecated: false, uninterpreted_option: [] };
}
exports.ServiceOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpreted_option =
            ((_b = object.uninterpreted_option) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMethodOptions() {
    return { deprecated: false, idempotency_level: 0, uninterpreted_option: [] };
}
exports.MethodOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotency_level !== 0) {
            writer.uint32(272).int32(message.idempotency_level);
        }
        for (const v of message.uninterpreted_option) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotency_level = reader.int32();
                    break;
                case 999:
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            idempotency_level: isSet(object.idempotency_level)
                ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level)
                : 0,
            uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.idempotency_level !== undefined &&
            (obj.idempotency_level = methodOptions_IdempotencyLevelToJSON(message.idempotency_level));
        if (message.uninterpreted_option) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpreted_option = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMethodOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.idempotency_level = (_b = object.idempotency_level) !== null && _b !== void 0 ? _b : 0;
        message.uninterpreted_option =
            ((_c = object.uninterpreted_option) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifier_value: "",
        positive_int_value: "0",
        negative_int_value: "0",
        double_value: 0,
        string_value: new Uint8Array(),
        aggregate_value: "",
    };
}
exports.UninterpretedOption = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.name) {
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifier_value !== "") {
            writer.uint32(26).string(message.identifier_value);
        }
        if (message.positive_int_value !== "0") {
            writer.uint32(32).uint64(message.positive_int_value);
        }
        if (message.negative_int_value !== "0") {
            writer.uint32(40).int64(message.negative_int_value);
        }
        if (message.double_value !== 0) {
            writer.uint32(49).double(message.double_value);
        }
        if (message.string_value.length !== 0) {
            writer.uint32(58).bytes(message.string_value);
        }
        if (message.aggregate_value !== "") {
            writer.uint32(66).string(message.aggregate_value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifier_value = reader.string();
                    break;
                case 4:
                    message.positive_int_value = longToString(reader.uint64());
                    break;
                case 5:
                    message.negative_int_value = longToString(reader.int64());
                    break;
                case 6:
                    message.double_value = reader.double();
                    break;
                case 7:
                    message.string_value = reader.bytes();
                    break;
                case 8:
                    message.aggregate_value = reader.string();
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
            name: Array.isArray(object === null || object === void 0 ? void 0 : object.name)
                ? object.name.map((e) => exports.UninterpretedOption_NamePart.fromJSON(e))
                : [],
            identifier_value: isSet(object.identifier_value)
                ? String(object.identifier_value)
                : "",
            positive_int_value: isSet(object.positive_int_value)
                ? String(object.positive_int_value)
                : "0",
            negative_int_value: isSet(object.negative_int_value)
                ? String(object.negative_int_value)
                : "0",
            double_value: isSet(object.double_value)
                ? Number(object.double_value)
                : 0,
            string_value: isSet(object.string_value)
                ? bytesFromBase64(object.string_value)
                : new Uint8Array(),
            aggregate_value: isSet(object.aggregate_value)
                ? String(object.aggregate_value)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name) {
            obj.name = message.name.map((e) => e ? exports.UninterpretedOption_NamePart.toJSON(e) : undefined);
        }
        else {
            obj.name = [];
        }
        message.identifier_value !== undefined &&
            (obj.identifier_value = message.identifier_value);
        message.positive_int_value !== undefined &&
            (obj.positive_int_value = message.positive_int_value);
        message.negative_int_value !== undefined &&
            (obj.negative_int_value = message.negative_int_value);
        message.double_value !== undefined &&
            (obj.double_value = message.double_value);
        message.string_value !== undefined &&
            (obj.string_value = base64FromBytes(message.string_value !== undefined
                ? message.string_value
                : new Uint8Array()));
        message.aggregate_value !== undefined &&
            (obj.aggregate_value = message.aggregate_value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseUninterpretedOption();
        message.name =
            ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption_NamePart.fromPartial(e))) ||
                [];
        message.identifier_value = (_b = object.identifier_value) !== null && _b !== void 0 ? _b : "";
        message.positive_int_value = (_c = object.positive_int_value) !== null && _c !== void 0 ? _c : "0";
        message.negative_int_value = (_d = object.negative_int_value) !== null && _d !== void 0 ? _d : "0";
        message.double_value = (_e = object.double_value) !== null && _e !== void 0 ? _e : 0;
        message.string_value = (_f = object.string_value) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.aggregate_value = (_g = object.aggregate_value) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseUninterpretedOption_NamePart() {
    return { name_part: "", is_extension: false };
}
exports.UninterpretedOption_NamePart = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name_part !== "") {
            writer.uint32(10).string(message.name_part);
        }
        if (message.is_extension === true) {
            writer.uint32(16).bool(message.is_extension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name_part = reader.string();
                    break;
                case 2:
                    message.is_extension = reader.bool();
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
            name_part: isSet(object.name_part) ? String(object.name_part) : "",
            is_extension: isSet(object.is_extension)
                ? Boolean(object.is_extension)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name_part !== undefined && (obj.name_part = message.name_part);
        message.is_extension !== undefined &&
            (obj.is_extension = message.is_extension);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUninterpretedOption_NamePart();
        message.name_part = (_a = object.name_part) !== null && _a !== void 0 ? _a : "";
        message.is_extension = (_b = object.is_extension) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSourceCodeInfo() {
    return { location: [] };
}
exports.SourceCodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.location) {
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
            location: Array.isArray(object === null || object === void 0 ? void 0 : object.location)
                ? object.location.map((e) => exports.SourceCodeInfo_Location.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.location) {
            obj.location = message.location.map((e) => e ? exports.SourceCodeInfo_Location.toJSON(e) : undefined);
        }
        else {
            obj.location = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSourceCodeInfo();
        message.location =
            ((_a = object.location) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SourceCodeInfo_Location.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSourceCodeInfo_Location() {
    return {
        path: [],
        span: [],
        leading_comments: "",
        trailing_comments: "",
        leading_detached_comments: [],
    };
}
exports.SourceCodeInfo_Location = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.span) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leading_comments !== "") {
            writer.uint32(26).string(message.leading_comments);
        }
        if (message.trailing_comments !== "") {
            writer.uint32(34).string(message.trailing_comments);
        }
        for (const v of message.leading_detached_comments) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                    }
                    else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leading_comments = reader.string();
                    break;
                case 4:
                    message.trailing_comments = reader.string();
                    break;
                case 6:
                    message.leading_detached_comments.push(reader.string());
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
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path)
                ? object.path.map((e) => Number(e))
                : [],
            span: Array.isArray(object === null || object === void 0 ? void 0 : object.span)
                ? object.span.map((e) => Number(e))
                : [],
            leading_comments: isSet(object.leading_comments)
                ? String(object.leading_comments)
                : "",
            trailing_comments: isSet(object.trailing_comments)
                ? String(object.trailing_comments)
                : "",
            leading_detached_comments: Array.isArray(object === null || object === void 0 ? void 0 : object.leading_detached_comments)
                ? object.leading_detached_comments.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        if (message.span) {
            obj.span = message.span.map((e) => Math.round(e));
        }
        else {
            obj.span = [];
        }
        message.leading_comments !== undefined &&
            (obj.leading_comments = message.leading_comments);
        message.trailing_comments !== undefined &&
            (obj.trailing_comments = message.trailing_comments);
        if (message.leading_detached_comments) {
            obj.leading_detached_comments = message.leading_detached_comments.map((e) => e);
        }
        else {
            obj.leading_detached_comments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSourceCodeInfo_Location();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.span = ((_b = object.span) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.leading_comments = (_c = object.leading_comments) !== null && _c !== void 0 ? _c : "";
        message.trailing_comments = (_d = object.trailing_comments) !== null && _d !== void 0 ? _d : "";
        message.leading_detached_comments =
            ((_e = object.leading_detached_comments) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseGeneratedCodeInfo() {
    return { annotation: [] };
}
exports.GeneratedCodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.annotation) {
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
            annotation: Array.isArray(object === null || object === void 0 ? void 0 : object.annotation)
                ? object.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.annotation) {
            obj.annotation = message.annotation.map((e) => e ? exports.GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
        }
        else {
            obj.annotation = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGeneratedCodeInfo();
        message.annotation =
            ((_a = object.annotation) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GeneratedCodeInfo_Annotation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGeneratedCodeInfo_Annotation() {
    return { path: [], source_file: "", begin: 0, end: 0 };
}
exports.GeneratedCodeInfo_Annotation = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.source_file !== "") {
            writer.uint32(18).string(message.source_file);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.source_file = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
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
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path)
                ? object.path.map((e) => Number(e))
                : [],
            source_file: isSet(object.source_file) ? String(object.source_file) : "",
            begin: isSet(object.begin) ? Number(object.begin) : 0,
            end: isSet(object.end) ? Number(object.end) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        message.source_file !== undefined &&
            (obj.source_file = message.source_file);
        message.begin !== undefined && (obj.begin = Math.round(message.begin));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGeneratedCodeInfo_Annotation();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.source_file = (_b = object.source_file) !== null && _b !== void 0 ? _b : "";
        message.begin = (_c = object.begin) !== null && _c !== void 0 ? _c : 0;
        message.end = (_d = object.end) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
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
//# sourceMappingURL=descriptor.js.map