import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.reflection.v2alpha1";
/** Since: cosmos-sdk 0.43 */
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     */
    authn?: AuthnDescriptor;
    /** chain provides the chain descriptor */
    chain?: ChainDescriptor;
    /** codec provides metadata information regarding codec related types */
    codec?: CodecDescriptor;
    /** configuration provides metadata information regarding the sdk.Config type */
    configuration?: ConfigurationDescriptor;
    /** query_services provides metadata information regarding the available queriable endpoints */
    query_services?: QueryServicesDescriptor;
    /** tx provides metadata information regarding how to send transactions to the given application */
    tx?: TxDescriptor;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     */
    fullname: string;
    /** msgs lists the accepted application messages (sdk.Msg) */
    msgs: MsgDescriptor[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
    /** sign_modes defines the supported signature algorithm */
    sign_modes: SigningModeDescriptor[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
    /** name defines the unique name of the signing mode */
    name: string;
    /** number is the unique int32 identifier for the sign_mode enum */
    number: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     */
    authn_info_provider_method_fullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
    /** id is the chain id */
    id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
    /** interfaces is a list of the registerted interfaces descriptors */
    interfaces: InterfaceDescriptor[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
    /** fullname is the name of the interface */
    fullname: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     */
    interface_accepting_messages: InterfaceAcceptingMessageDescriptor[];
    /** interface_implementers is a list of the descriptors of the interface implementers */
    interface_implementers: InterfaceImplementerDescriptor[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
    /** fullname is the protobuf queryable name of the interface implementer */
    fullname: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     */
    type_url: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
    /** fullname is the protobuf fullname of the type containing the interface */
    fullname: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     */
    field_descriptor_names: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
    /** bech32_account_address_prefix is the account address prefix */
    bech32_account_address_prefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
    /** msg_type_url contains the TypeURL of a sdk.Msg. */
    msg_type_url: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
    /** authn describes how to authenticate to the application when sending transactions */
    authn?: AuthnDescriptor;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
    /** chain describes application chain information */
    chain?: ChainDescriptor;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
    /** codec describes the application codec such as registered interfaces and implementations */
    codec?: CodecDescriptor;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
    /** config describes the application's sdk.Config */
    config?: ConfigurationDescriptor;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
    /** queries provides information on the available queryable services */
    queries?: QueryServicesDescriptor;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     */
    tx?: TxDescriptor;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
    /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
    query_services: QueryServiceDescriptor[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
    /** fullname is the protobuf fullname of the service descriptor */
    fullname: string;
    /** is_module describes if this service is actually exposed by an application's module */
    is_module: boolean;
    /** methods provides a list of query service methods */
    methods: QueryMethodDescriptor[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
    /** name is the protobuf name (not fullname) of the method */
    name: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     */
    full_query_path: string;
}
export declare const AppDescriptor: {
    encode(message: AppDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AppDescriptor;
    fromJSON(object: any): AppDescriptor;
    toJSON(message: AppDescriptor): unknown;
    fromPartial<I extends {
        authn?: {
            sign_modes?: {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[] | undefined;
        } | undefined;
        chain?: {
            id?: string | undefined;
        } | undefined;
        codec?: {
            interfaces?: {
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        configuration?: {
            bech32_account_address_prefix?: string | undefined;
        } | undefined;
        query_services?: {
            query_services?: {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        tx?: {
            fullname?: string | undefined;
            msgs?: {
                msg_type_url?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        authn?: ({
            sign_modes?: {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[] | undefined;
        } & {
            sign_modes?: ({
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[] & ({
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            } & {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            } & Record<Exclude<keyof I["authn"]["sign_modes"][number], keyof SigningModeDescriptor>, never>)[] & Record<Exclude<keyof I["authn"]["sign_modes"], keyof {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["authn"], "sign_modes">, never>) | undefined;
        chain?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & Record<Exclude<keyof I["chain"], "id">, never>) | undefined;
        codec?: ({
            interfaces?: {
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            interfaces?: ({
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                interface_accepting_messages?: ({
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                } & {
                    fullname?: string | undefined;
                    field_descriptor_names?: (string[] & string[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_accepting_messages"][number]["field_descriptor_names"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_accepting_messages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_accepting_messages"], keyof {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[]>, never>) | undefined;
                interface_implementers?: ({
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                } & {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_implementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_implementers"], keyof {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["codec"]["interfaces"][number], keyof InterfaceDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"], keyof {
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["codec"], "interfaces">, never>) | undefined;
        configuration?: ({
            bech32_account_address_prefix?: string | undefined;
        } & {
            bech32_account_address_prefix?: string | undefined;
        } & Record<Exclude<keyof I["configuration"], "bech32_account_address_prefix">, never>) | undefined;
        query_services?: ({
            query_services?: {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            query_services?: ({
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: ({
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                } & {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                } & Record<Exclude<keyof I["query_services"]["query_services"][number]["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["query_services"]["query_services"][number]["methods"], keyof {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["query_services"]["query_services"][number], keyof QueryServiceDescriptor>, never>)[] & Record<Exclude<keyof I["query_services"]["query_services"], keyof {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["query_services"], "query_services">, never>) | undefined;
        tx?: ({
            fullname?: string | undefined;
            msgs?: {
                msg_type_url?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            msgs?: ({
                msg_type_url?: string | undefined;
            }[] & ({
                msg_type_url?: string | undefined;
            } & {
                msg_type_url?: string | undefined;
            } & Record<Exclude<keyof I["tx"]["msgs"][number], "msg_type_url">, never>)[] & Record<Exclude<keyof I["tx"]["msgs"], keyof {
                msg_type_url?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["tx"], keyof TxDescriptor>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AppDescriptor>, never>>(object: I): AppDescriptor;
};
export declare const TxDescriptor: {
    encode(message: TxDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TxDescriptor;
    fromJSON(object: any): TxDescriptor;
    toJSON(message: TxDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string | undefined;
        msgs?: {
            msg_type_url?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        msgs?: ({
            msg_type_url?: string | undefined;
        }[] & ({
            msg_type_url?: string | undefined;
        } & {
            msg_type_url?: string | undefined;
        } & Record<Exclude<keyof I["msgs"][number], "msg_type_url">, never>)[] & Record<Exclude<keyof I["msgs"], keyof {
            msg_type_url?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TxDescriptor>, never>>(object: I): TxDescriptor;
};
export declare const AuthnDescriptor: {
    encode(message: AuthnDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthnDescriptor;
    fromJSON(object: any): AuthnDescriptor;
    toJSON(message: AuthnDescriptor): unknown;
    fromPartial<I extends {
        sign_modes?: {
            name?: string | undefined;
            number?: number | undefined;
            authn_info_provider_method_fullname?: string | undefined;
        }[] | undefined;
    } & {
        sign_modes?: ({
            name?: string | undefined;
            number?: number | undefined;
            authn_info_provider_method_fullname?: string | undefined;
        }[] & ({
            name?: string | undefined;
            number?: number | undefined;
            authn_info_provider_method_fullname?: string | undefined;
        } & {
            name?: string | undefined;
            number?: number | undefined;
            authn_info_provider_method_fullname?: string | undefined;
        } & Record<Exclude<keyof I["sign_modes"][number], keyof SigningModeDescriptor>, never>)[] & Record<Exclude<keyof I["sign_modes"], keyof {
            name?: string | undefined;
            number?: number | undefined;
            authn_info_provider_method_fullname?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "sign_modes">, never>>(object: I): AuthnDescriptor;
};
export declare const SigningModeDescriptor: {
    encode(message: SigningModeDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningModeDescriptor;
    fromJSON(object: any): SigningModeDescriptor;
    toJSON(message: SigningModeDescriptor): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        number?: number | undefined;
        authn_info_provider_method_fullname?: string | undefined;
    } & {
        name?: string | undefined;
        number?: number | undefined;
        authn_info_provider_method_fullname?: string | undefined;
    } & Record<Exclude<keyof I, keyof SigningModeDescriptor>, never>>(object: I): SigningModeDescriptor;
};
export declare const ChainDescriptor: {
    encode(message: ChainDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainDescriptor;
    fromJSON(object: any): ChainDescriptor;
    toJSON(message: ChainDescriptor): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): ChainDescriptor;
};
export declare const CodecDescriptor: {
    encode(message: CodecDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CodecDescriptor;
    fromJSON(object: any): CodecDescriptor;
    toJSON(message: CodecDescriptor): unknown;
    fromPartial<I extends {
        interfaces?: {
            fullname?: string | undefined;
            interface_accepting_messages?: {
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            }[] | undefined;
            interface_implementers?: {
                fullname?: string | undefined;
                type_url?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        interfaces?: ({
            fullname?: string | undefined;
            interface_accepting_messages?: {
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            }[] | undefined;
            interface_implementers?: {
                fullname?: string | undefined;
                type_url?: string | undefined;
            }[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            interface_accepting_messages?: {
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            }[] | undefined;
            interface_implementers?: {
                fullname?: string | undefined;
                type_url?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            interface_accepting_messages?: ({
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            } & {
                fullname?: string | undefined;
                field_descriptor_names?: (string[] & string[] & Record<Exclude<keyof I["interfaces"][number]["interface_accepting_messages"][number]["field_descriptor_names"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["interfaces"][number]["interface_accepting_messages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["interfaces"][number]["interface_accepting_messages"], keyof {
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            }[]>, never>) | undefined;
            interface_implementers?: ({
                fullname?: string | undefined;
                type_url?: string | undefined;
            }[] & ({
                fullname?: string | undefined;
                type_url?: string | undefined;
            } & {
                fullname?: string | undefined;
                type_url?: string | undefined;
            } & Record<Exclude<keyof I["interfaces"][number]["interface_implementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["interfaces"][number]["interface_implementers"], keyof {
                fullname?: string | undefined;
                type_url?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["interfaces"][number], keyof InterfaceDescriptor>, never>)[] & Record<Exclude<keyof I["interfaces"], keyof {
            fullname?: string | undefined;
            interface_accepting_messages?: {
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            }[] | undefined;
            interface_implementers?: {
                fullname?: string | undefined;
                type_url?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "interfaces">, never>>(object: I): CodecDescriptor;
};
export declare const InterfaceDescriptor: {
    encode(message: InterfaceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InterfaceDescriptor;
    fromJSON(object: any): InterfaceDescriptor;
    toJSON(message: InterfaceDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string | undefined;
        interface_accepting_messages?: {
            fullname?: string | undefined;
            field_descriptor_names?: string[] | undefined;
        }[] | undefined;
        interface_implementers?: {
            fullname?: string | undefined;
            type_url?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        interface_accepting_messages?: ({
            fullname?: string | undefined;
            field_descriptor_names?: string[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            field_descriptor_names?: string[] | undefined;
        } & {
            fullname?: string | undefined;
            field_descriptor_names?: (string[] & string[] & Record<Exclude<keyof I["interface_accepting_messages"][number]["field_descriptor_names"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["interface_accepting_messages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["interface_accepting_messages"], keyof {
            fullname?: string | undefined;
            field_descriptor_names?: string[] | undefined;
        }[]>, never>) | undefined;
        interface_implementers?: ({
            fullname?: string | undefined;
            type_url?: string | undefined;
        }[] & ({
            fullname?: string | undefined;
            type_url?: string | undefined;
        } & {
            fullname?: string | undefined;
            type_url?: string | undefined;
        } & Record<Exclude<keyof I["interface_implementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["interface_implementers"], keyof {
            fullname?: string | undefined;
            type_url?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof InterfaceDescriptor>, never>>(object: I): InterfaceDescriptor;
};
export declare const InterfaceImplementerDescriptor: {
    encode(message: InterfaceImplementerDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InterfaceImplementerDescriptor;
    fromJSON(object: any): InterfaceImplementerDescriptor;
    toJSON(message: InterfaceImplementerDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string | undefined;
        type_url?: string | undefined;
    } & {
        fullname?: string | undefined;
        type_url?: string | undefined;
    } & Record<Exclude<keyof I, keyof InterfaceImplementerDescriptor>, never>>(object: I): InterfaceImplementerDescriptor;
};
export declare const InterfaceAcceptingMessageDescriptor: {
    encode(message: InterfaceAcceptingMessageDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InterfaceAcceptingMessageDescriptor;
    fromJSON(object: any): InterfaceAcceptingMessageDescriptor;
    toJSON(message: InterfaceAcceptingMessageDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string | undefined;
        field_descriptor_names?: string[] | undefined;
    } & {
        fullname?: string | undefined;
        field_descriptor_names?: (string[] & string[] & Record<Exclude<keyof I["field_descriptor_names"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof InterfaceAcceptingMessageDescriptor>, never>>(object: I): InterfaceAcceptingMessageDescriptor;
};
export declare const ConfigurationDescriptor: {
    encode(message: ConfigurationDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigurationDescriptor;
    fromJSON(object: any): ConfigurationDescriptor;
    toJSON(message: ConfigurationDescriptor): unknown;
    fromPartial<I extends {
        bech32_account_address_prefix?: string | undefined;
    } & {
        bech32_account_address_prefix?: string | undefined;
    } & Record<Exclude<keyof I, "bech32_account_address_prefix">, never>>(object: I): ConfigurationDescriptor;
};
export declare const MsgDescriptor: {
    encode(message: MsgDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDescriptor;
    fromJSON(object: any): MsgDescriptor;
    toJSON(message: MsgDescriptor): unknown;
    fromPartial<I extends {
        msg_type_url?: string | undefined;
    } & {
        msg_type_url?: string | undefined;
    } & Record<Exclude<keyof I, "msg_type_url">, never>>(object: I): MsgDescriptor;
};
export declare const GetAuthnDescriptorRequest: {
    encode(_: GetAuthnDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAuthnDescriptorRequest;
    fromJSON(_: any): GetAuthnDescriptorRequest;
    toJSON(_: GetAuthnDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetAuthnDescriptorRequest;
};
export declare const GetAuthnDescriptorResponse: {
    encode(message: GetAuthnDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAuthnDescriptorResponse;
    fromJSON(object: any): GetAuthnDescriptorResponse;
    toJSON(message: GetAuthnDescriptorResponse): unknown;
    fromPartial<I extends {
        authn?: {
            sign_modes?: {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        authn?: ({
            sign_modes?: {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[] | undefined;
        } & {
            sign_modes?: ({
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[] & ({
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            } & {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            } & Record<Exclude<keyof I["authn"]["sign_modes"][number], keyof SigningModeDescriptor>, never>)[] & Record<Exclude<keyof I["authn"]["sign_modes"], keyof {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["authn"], "sign_modes">, never>) | undefined;
    } & Record<Exclude<keyof I, "authn">, never>>(object: I): GetAuthnDescriptorResponse;
};
export declare const GetChainDescriptorRequest: {
    encode(_: GetChainDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChainDescriptorRequest;
    fromJSON(_: any): GetChainDescriptorRequest;
    toJSON(_: GetChainDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetChainDescriptorRequest;
};
export declare const GetChainDescriptorResponse: {
    encode(message: GetChainDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChainDescriptorResponse;
    fromJSON(object: any): GetChainDescriptorResponse;
    toJSON(message: GetChainDescriptorResponse): unknown;
    fromPartial<I extends {
        chain?: {
            id?: string | undefined;
        } | undefined;
    } & {
        chain?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & Record<Exclude<keyof I["chain"], "id">, never>) | undefined;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): GetChainDescriptorResponse;
};
export declare const GetCodecDescriptorRequest: {
    encode(_: GetCodecDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCodecDescriptorRequest;
    fromJSON(_: any): GetCodecDescriptorRequest;
    toJSON(_: GetCodecDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetCodecDescriptorRequest;
};
export declare const GetCodecDescriptorResponse: {
    encode(message: GetCodecDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCodecDescriptorResponse;
    fromJSON(object: any): GetCodecDescriptorResponse;
    toJSON(message: GetCodecDescriptorResponse): unknown;
    fromPartial<I extends {
        codec?: {
            interfaces?: {
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        codec?: ({
            interfaces?: {
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            interfaces?: ({
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                interface_accepting_messages?: ({
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                } & {
                    fullname?: string | undefined;
                    field_descriptor_names?: (string[] & string[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_accepting_messages"][number]["field_descriptor_names"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_accepting_messages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_accepting_messages"], keyof {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[]>, never>) | undefined;
                interface_implementers?: ({
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                } & {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_implementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interface_implementers"], keyof {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["codec"]["interfaces"][number], keyof InterfaceDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"], keyof {
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["codec"], "interfaces">, never>) | undefined;
    } & Record<Exclude<keyof I, "codec">, never>>(object: I): GetCodecDescriptorResponse;
};
export declare const GetConfigurationDescriptorRequest: {
    encode(_: GetConfigurationDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetConfigurationDescriptorRequest;
    fromJSON(_: any): GetConfigurationDescriptorRequest;
    toJSON(_: GetConfigurationDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetConfigurationDescriptorRequest;
};
export declare const GetConfigurationDescriptorResponse: {
    encode(message: GetConfigurationDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetConfigurationDescriptorResponse;
    fromJSON(object: any): GetConfigurationDescriptorResponse;
    toJSON(message: GetConfigurationDescriptorResponse): unknown;
    fromPartial<I extends {
        config?: {
            bech32_account_address_prefix?: string | undefined;
        } | undefined;
    } & {
        config?: ({
            bech32_account_address_prefix?: string | undefined;
        } & {
            bech32_account_address_prefix?: string | undefined;
        } & Record<Exclude<keyof I["config"], "bech32_account_address_prefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "config">, never>>(object: I): GetConfigurationDescriptorResponse;
};
export declare const GetQueryServicesDescriptorRequest: {
    encode(_: GetQueryServicesDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetQueryServicesDescriptorRequest;
    fromJSON(_: any): GetQueryServicesDescriptorRequest;
    toJSON(_: GetQueryServicesDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetQueryServicesDescriptorRequest;
};
export declare const GetQueryServicesDescriptorResponse: {
    encode(message: GetQueryServicesDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetQueryServicesDescriptorResponse;
    fromJSON(object: any): GetQueryServicesDescriptorResponse;
    toJSON(message: GetQueryServicesDescriptorResponse): unknown;
    fromPartial<I extends {
        queries?: {
            query_services?: {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        queries?: ({
            query_services?: {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            query_services?: ({
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: ({
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                } & {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                } & Record<Exclude<keyof I["queries"]["query_services"][number]["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["queries"]["query_services"][number]["methods"], keyof {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["queries"]["query_services"][number], keyof QueryServiceDescriptor>, never>)[] & Record<Exclude<keyof I["queries"]["query_services"], keyof {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["queries"], "query_services">, never>) | undefined;
    } & Record<Exclude<keyof I, "queries">, never>>(object: I): GetQueryServicesDescriptorResponse;
};
export declare const GetTxDescriptorRequest: {
    encode(_: GetTxDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTxDescriptorRequest;
    fromJSON(_: any): GetTxDescriptorRequest;
    toJSON(_: GetTxDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetTxDescriptorRequest;
};
export declare const GetTxDescriptorResponse: {
    encode(message: GetTxDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTxDescriptorResponse;
    fromJSON(object: any): GetTxDescriptorResponse;
    toJSON(message: GetTxDescriptorResponse): unknown;
    fromPartial<I extends {
        tx?: {
            fullname?: string | undefined;
            msgs?: {
                msg_type_url?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        tx?: ({
            fullname?: string | undefined;
            msgs?: {
                msg_type_url?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            msgs?: ({
                msg_type_url?: string | undefined;
            }[] & ({
                msg_type_url?: string | undefined;
            } & {
                msg_type_url?: string | undefined;
            } & Record<Exclude<keyof I["tx"]["msgs"][number], "msg_type_url">, never>)[] & Record<Exclude<keyof I["tx"]["msgs"], keyof {
                msg_type_url?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["tx"], keyof TxDescriptor>, never>) | undefined;
    } & Record<Exclude<keyof I, "tx">, never>>(object: I): GetTxDescriptorResponse;
};
export declare const QueryServicesDescriptor: {
    encode(message: QueryServicesDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryServicesDescriptor;
    fromJSON(object: any): QueryServicesDescriptor;
    toJSON(message: QueryServicesDescriptor): unknown;
    fromPartial<I extends {
        query_services?: {
            fullname?: string | undefined;
            is_module?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                full_query_path?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        query_services?: ({
            fullname?: string | undefined;
            is_module?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                full_query_path?: string | undefined;
            }[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            is_module?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                full_query_path?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            is_module?: boolean | undefined;
            methods?: ({
                name?: string | undefined;
                full_query_path?: string | undefined;
            }[] & ({
                name?: string | undefined;
                full_query_path?: string | undefined;
            } & {
                name?: string | undefined;
                full_query_path?: string | undefined;
            } & Record<Exclude<keyof I["query_services"][number]["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["query_services"][number]["methods"], keyof {
                name?: string | undefined;
                full_query_path?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["query_services"][number], keyof QueryServiceDescriptor>, never>)[] & Record<Exclude<keyof I["query_services"], keyof {
            fullname?: string | undefined;
            is_module?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                full_query_path?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "query_services">, never>>(object: I): QueryServicesDescriptor;
};
export declare const QueryServiceDescriptor: {
    encode(message: QueryServiceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryServiceDescriptor;
    fromJSON(object: any): QueryServiceDescriptor;
    toJSON(message: QueryServiceDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string | undefined;
        is_module?: boolean | undefined;
        methods?: {
            name?: string | undefined;
            full_query_path?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        is_module?: boolean | undefined;
        methods?: ({
            name?: string | undefined;
            full_query_path?: string | undefined;
        }[] & ({
            name?: string | undefined;
            full_query_path?: string | undefined;
        } & {
            name?: string | undefined;
            full_query_path?: string | undefined;
        } & Record<Exclude<keyof I["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["methods"], keyof {
            name?: string | undefined;
            full_query_path?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryServiceDescriptor>, never>>(object: I): QueryServiceDescriptor;
};
export declare const QueryMethodDescriptor: {
    encode(message: QueryMethodDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryMethodDescriptor;
    fromJSON(object: any): QueryMethodDescriptor;
    toJSON(message: QueryMethodDescriptor): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        full_query_path?: string | undefined;
    } & {
        name?: string | undefined;
        full_query_path?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryMethodDescriptor>, never>>(object: I): QueryMethodDescriptor;
};
/** ReflectionService defines a service for application reflection. */
export interface ReflectionService {
    /**
     * GetAuthnDescriptor returns information on how to authenticate transactions in the application
     * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
     * future releases of the cosmos-sdk.
     */
    GetAuthnDescriptor(request: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse>;
    /** GetChainDescriptor returns the description of the chain */
    GetChainDescriptor(request: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse>;
    /** GetCodecDescriptor returns the descriptor of the codec of the application */
    GetCodecDescriptor(request: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse>;
    /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
    GetConfigurationDescriptor(request: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse>;
    /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
    GetQueryServicesDescriptor(request: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse>;
    /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
    GetTxDescriptor(request: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse>;
}
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetAuthnDescriptor(request: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse>;
    GetChainDescriptor(request: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse>;
    GetCodecDescriptor(request: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse>;
    GetConfigurationDescriptor(request: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse>;
    GetQueryServicesDescriptor(request: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse>;
    GetTxDescriptor(request: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=reflection.d.ts.map