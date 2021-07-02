/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protos = $root.protos = (() => {

    /**
     * Namespace protos.
     * @exports protos
     * @namespace
     */
    const protos = {};

    /**
     * SpaceApp enum.
     * @name protos.SpaceApp
     * @enum {number}
     * @property {number} NOT_AN_APP=0 NOT_AN_APP value
     * @property {number} TASKS=1 TASKS value
     * @property {number} NOTES=2 NOTES value
     * @property {number} FILES=3 FILES value
     */
    protos.SpaceApp = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NOT_AN_APP"] = 0;
        values[valuesById[1] = "TASKS"] = 1;
        values[valuesById[2] = "NOTES"] = 2;
        values[valuesById[3] = "FILES"] = 3;
        return values;
    })();

    protos.ObjId = (function() {

        /**
         * Properties of an ObjId.
         * @memberof protos
         * @interface IObjId
         * @property {protos.SpaceApp|null} [app] ObjId app
         * @property {number|null} [id] ObjId id
         */

        /**
         * Constructs a new ObjId.
         * @memberof protos
         * @classdesc Represents an ObjId.
         * @implements IObjId
         * @constructor
         * @param {protos.IObjId=} [properties] Properties to set
         */
        function ObjId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjId app.
         * @member {protos.SpaceApp} app
         * @memberof protos.ObjId
         * @instance
         */
        ObjId.prototype.app = 0;

        /**
         * ObjId id.
         * @member {number} id
         * @memberof protos.ObjId
         * @instance
         */
        ObjId.prototype.id = 0;

        /**
         * Creates a new ObjId instance using the specified properties.
         * @function create
         * @memberof protos.ObjId
         * @static
         * @param {protos.IObjId=} [properties] Properties to set
         * @returns {protos.ObjId} ObjId instance
         */
        ObjId.create = function create(properties) {
            return new ObjId(properties);
        };

        /**
         * Encodes the specified ObjId message. Does not implicitly {@link protos.ObjId.verify|verify} messages.
         * @function encode
         * @memberof protos.ObjId
         * @static
         * @param {protos.IObjId} message ObjId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.app);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
            return writer;
        };

        /**
         * Decodes an ObjId message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ObjId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ObjId} ObjId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjId.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ObjId();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.app = reader.int32();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an ObjId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ObjId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ObjId} ObjId
         */
        ObjId.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ObjId)
                return object;
            let message = new $root.protos.ObjId();
            switch (object.app) {
            case "NOT_AN_APP":
            case 0:
                message.app = 0;
                break;
            case "TASKS":
            case 1:
                message.app = 1;
                break;
            case "NOTES":
            case 2:
                message.app = 2;
                break;
            case "FILES":
            case 3:
                message.app = 3;
                break;
            }
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an ObjId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ObjId
         * @static
         * @param {protos.ObjId} message ObjId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.app = options.enums === String ? "NOT_AN_APP" : 0;
                object.id = 0;
            }
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = options.enums === String ? $root.protos.SpaceApp[message.app] : message.app;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this ObjId to JSON.
         * @function toJSON
         * @memberof protos.ObjId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObjId;
    })();

    protos.ObjIds = (function() {

        /**
         * Properties of an ObjIds.
         * @memberof protos
         * @interface IObjIds
         * @property {protos.SpaceApp|null} [app] ObjIds app
         * @property {Array.<number>|null} [ids] ObjIds ids
         */

        /**
         * Constructs a new ObjIds.
         * @memberof protos
         * @classdesc Represents an ObjIds.
         * @implements IObjIds
         * @constructor
         * @param {protos.IObjIds=} [properties] Properties to set
         */
        function ObjIds(properties) {
            this.ids = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjIds app.
         * @member {protos.SpaceApp} app
         * @memberof protos.ObjIds
         * @instance
         */
        ObjIds.prototype.app = 0;

        /**
         * ObjIds ids.
         * @member {Array.<number>} ids
         * @memberof protos.ObjIds
         * @instance
         */
        ObjIds.prototype.ids = $util.emptyArray;

        /**
         * Creates a new ObjIds instance using the specified properties.
         * @function create
         * @memberof protos.ObjIds
         * @static
         * @param {protos.IObjIds=} [properties] Properties to set
         * @returns {protos.ObjIds} ObjIds instance
         */
        ObjIds.create = function create(properties) {
            return new ObjIds(properties);
        };

        /**
         * Encodes the specified ObjIds message. Does not implicitly {@link protos.ObjIds.verify|verify} messages.
         * @function encode
         * @memberof protos.ObjIds
         * @static
         * @param {protos.IObjIds} message ObjIds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjIds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.app);
            if (message.ids != null && message.ids.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.ids.length; ++i)
                    writer.uint32(message.ids[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes an ObjIds message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ObjIds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ObjIds} ObjIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjIds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ObjIds();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.app = reader.int32();
                    break;
                case 2:
                    if (!(message.ids && message.ids.length))
                        message.ids = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ids.push(reader.uint32());
                    } else
                        message.ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an ObjIds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ObjIds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ObjIds} ObjIds
         */
        ObjIds.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ObjIds)
                return object;
            let message = new $root.protos.ObjIds();
            switch (object.app) {
            case "NOT_AN_APP":
            case 0:
                message.app = 0;
                break;
            case "TASKS":
            case 1:
                message.app = 1;
                break;
            case "NOTES":
            case 2:
                message.app = 2;
                break;
            case "FILES":
            case 3:
                message.app = 3;
                break;
            }
            if (object.ids) {
                if (!Array.isArray(object.ids))
                    throw TypeError(".protos.ObjIds.ids: array expected");
                message.ids = [];
                for (let i = 0; i < object.ids.length; ++i)
                    message.ids[i] = object.ids[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an ObjIds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ObjIds
         * @static
         * @param {protos.ObjIds} message ObjIds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjIds.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ids = [];
            if (options.defaults)
                object.app = options.enums === String ? "NOT_AN_APP" : 0;
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = options.enums === String ? $root.protos.SpaceApp[message.app] : message.app;
            if (message.ids && message.ids.length) {
                object.ids = [];
                for (let j = 0; j < message.ids.length; ++j)
                    object.ids[j] = message.ids[j];
            }
            return object;
        };

        /**
         * Converts this ObjIds to JSON.
         * @function toJSON
         * @memberof protos.ObjIds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjIds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObjIds;
    })();

    protos.IdObjMap = (function() {

        /**
         * Properties of an IdObjMap.
         * @memberof protos
         * @interface IIdObjMap
         * @property {Object.<string,protos.ISpaceObj>|null} [objs] IdObjMap objs
         */

        /**
         * Constructs a new IdObjMap.
         * @memberof protos
         * @classdesc Represents an IdObjMap.
         * @implements IIdObjMap
         * @constructor
         * @param {protos.IIdObjMap=} [properties] Properties to set
         */
        function IdObjMap(properties) {
            this.objs = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdObjMap objs.
         * @member {Object.<string,protos.ISpaceObj>} objs
         * @memberof protos.IdObjMap
         * @instance
         */
        IdObjMap.prototype.objs = $util.emptyObject;

        /**
         * Creates a new IdObjMap instance using the specified properties.
         * @function create
         * @memberof protos.IdObjMap
         * @static
         * @param {protos.IIdObjMap=} [properties] Properties to set
         * @returns {protos.IdObjMap} IdObjMap instance
         */
        IdObjMap.create = function create(properties) {
            return new IdObjMap(properties);
        };

        /**
         * Encodes the specified IdObjMap message. Does not implicitly {@link protos.IdObjMap.verify|verify} messages.
         * @function encode
         * @memberof protos.IdObjMap
         * @static
         * @param {protos.IIdObjMap} message IdObjMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdObjMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objs != null && Object.hasOwnProperty.call(message, "objs"))
                for (let keys = Object.keys(message.objs), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.protos.SpaceObj.encode(message.objs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes an IdObjMap message from the specified reader or buffer.
         * @function decode
         * @memberof protos.IdObjMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.IdObjMap} IdObjMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdObjMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.IdObjMap(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.objs === $util.emptyObject)
                        message.objs = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = $root.protos.SpaceObj.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.objs[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an IdObjMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.IdObjMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.IdObjMap} IdObjMap
         */
        IdObjMap.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.IdObjMap)
                return object;
            let message = new $root.protos.IdObjMap();
            if (object.objs) {
                if (typeof object.objs !== "object")
                    throw TypeError(".protos.IdObjMap.objs: object expected");
                message.objs = {};
                for (let keys = Object.keys(object.objs), i = 0; i < keys.length; ++i) {
                    if (typeof object.objs[keys[i]] !== "object")
                        throw TypeError(".protos.IdObjMap.objs: object expected");
                    message.objs[keys[i]] = $root.protos.SpaceObj.fromObject(object.objs[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an IdObjMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.IdObjMap
         * @static
         * @param {protos.IdObjMap} message IdObjMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdObjMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.objs = {};
            let keys2;
            if (message.objs && (keys2 = Object.keys(message.objs)).length) {
                object.objs = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.objs[keys2[j]] = $root.protos.SpaceObj.toObject(message.objs[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this IdObjMap to JSON.
         * @function toJSON
         * @memberof protos.IdObjMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdObjMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdObjMap;
    })();

    protos.Uint32Ids = (function() {

        /**
         * Properties of an Uint32Ids.
         * @memberof protos
         * @interface IUint32Ids
         * @property {Array.<number>|null} [ids] Uint32Ids ids
         */

        /**
         * Constructs a new Uint32Ids.
         * @memberof protos
         * @classdesc Represents an Uint32Ids.
         * @implements IUint32Ids
         * @constructor
         * @param {protos.IUint32Ids=} [properties] Properties to set
         */
        function Uint32Ids(properties) {
            this.ids = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Uint32Ids ids.
         * @member {Array.<number>} ids
         * @memberof protos.Uint32Ids
         * @instance
         */
        Uint32Ids.prototype.ids = $util.emptyArray;

        /**
         * Creates a new Uint32Ids instance using the specified properties.
         * @function create
         * @memberof protos.Uint32Ids
         * @static
         * @param {protos.IUint32Ids=} [properties] Properties to set
         * @returns {protos.Uint32Ids} Uint32Ids instance
         */
        Uint32Ids.create = function create(properties) {
            return new Uint32Ids(properties);
        };

        /**
         * Encodes the specified Uint32Ids message. Does not implicitly {@link protos.Uint32Ids.verify|verify} messages.
         * @function encode
         * @memberof protos.Uint32Ids
         * @static
         * @param {protos.IUint32Ids} message Uint32Ids message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Uint32Ids.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ids != null && message.ids.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.ids.length; ++i)
                    writer.uint32(message.ids[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes an Uint32Ids message from the specified reader or buffer.
         * @function decode
         * @memberof protos.Uint32Ids
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.Uint32Ids} Uint32Ids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Uint32Ids.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.Uint32Ids();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ids && message.ids.length))
                        message.ids = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ids.push(reader.uint32());
                    } else
                        message.ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an Uint32Ids message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.Uint32Ids
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.Uint32Ids} Uint32Ids
         */
        Uint32Ids.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.Uint32Ids)
                return object;
            let message = new $root.protos.Uint32Ids();
            if (object.ids) {
                if (!Array.isArray(object.ids))
                    throw TypeError(".protos.Uint32Ids.ids: array expected");
                message.ids = [];
                for (let i = 0; i < object.ids.length; ++i)
                    message.ids[i] = object.ids[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an Uint32Ids message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.Uint32Ids
         * @static
         * @param {protos.Uint32Ids} message Uint32Ids
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Uint32Ids.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ids = [];
            if (message.ids && message.ids.length) {
                object.ids = [];
                for (let j = 0; j < message.ids.length; ++j)
                    object.ids[j] = message.ids[j];
            }
            return object;
        };

        /**
         * Converts this Uint32Ids to JSON.
         * @function toJSON
         * @memberof protos.Uint32Ids
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Uint32Ids.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Uint32Ids;
    })();

    protos.TaskList = (function() {

        /**
         * Properties of a TaskList.
         * @memberof protos
         * @interface ITaskList
         * @property {number|null} [id] TaskList id
         * @property {string|null} [name] TaskList name
         * @property {number|null} [color] TaskList color
         * @property {boolean|null} [completed] TaskList completed
         * @property {number|null} [ver] TaskList ver
         * @property {Array.<number>|null} [taskIds] TaskList taskIds
         */

        /**
         * Constructs a new TaskList.
         * @memberof protos
         * @classdesc Represents a TaskList.
         * @implements ITaskList
         * @constructor
         * @param {protos.ITaskList=} [properties] Properties to set
         */
        function TaskList(properties) {
            this.taskIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskList id.
         * @member {number} id
         * @memberof protos.TaskList
         * @instance
         */
        TaskList.prototype.id = 0;

        /**
         * TaskList name.
         * @member {string} name
         * @memberof protos.TaskList
         * @instance
         */
        TaskList.prototype.name = "";

        /**
         * TaskList color.
         * @member {number} color
         * @memberof protos.TaskList
         * @instance
         */
        TaskList.prototype.color = 0;

        /**
         * TaskList completed.
         * @member {boolean} completed
         * @memberof protos.TaskList
         * @instance
         */
        TaskList.prototype.completed = false;

        /**
         * TaskList ver.
         * @member {number} ver
         * @memberof protos.TaskList
         * @instance
         */
        TaskList.prototype.ver = 0;

        /**
         * TaskList taskIds.
         * @member {Array.<number>} taskIds
         * @memberof protos.TaskList
         * @instance
         */
        TaskList.prototype.taskIds = $util.emptyArray;

        /**
         * Creates a new TaskList instance using the specified properties.
         * @function create
         * @memberof protos.TaskList
         * @static
         * @param {protos.ITaskList=} [properties] Properties to set
         * @returns {protos.TaskList} TaskList instance
         */
        TaskList.create = function create(properties) {
            return new TaskList(properties);
        };

        /**
         * Encodes the specified TaskList message. Does not implicitly {@link protos.TaskList.verify|verify} messages.
         * @function encode
         * @memberof protos.TaskList
         * @static
         * @param {protos.ITaskList} message TaskList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.color);
            if (message.completed != null && Object.hasOwnProperty.call(message, "completed"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.completed);
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ver);
            if (message.taskIds != null && message.taskIds.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.taskIds.length; ++i)
                    writer.uint32(message.taskIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a TaskList message from the specified reader or buffer.
         * @function decode
         * @memberof protos.TaskList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.TaskList} TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.color = reader.uint32();
                    break;
                case 4:
                    message.completed = reader.bool();
                    break;
                case 5:
                    message.ver = reader.uint32();
                    break;
                case 6:
                    if (!(message.taskIds && message.taskIds.length))
                        message.taskIds = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.taskIds.push(reader.uint32());
                    } else
                        message.taskIds.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a TaskList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.TaskList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.TaskList} TaskList
         */
        TaskList.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.TaskList)
                return object;
            let message = new $root.protos.TaskList();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.color != null)
                message.color = object.color >>> 0;
            if (object.completed != null)
                message.completed = Boolean(object.completed);
            if (object.ver != null)
                message.ver = object.ver >>> 0;
            if (object.taskIds) {
                if (!Array.isArray(object.taskIds))
                    throw TypeError(".protos.TaskList.taskIds: array expected");
                message.taskIds = [];
                for (let i = 0; i < object.taskIds.length; ++i)
                    message.taskIds[i] = object.taskIds[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.TaskList
         * @static
         * @param {protos.TaskList} message TaskList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.taskIds = [];
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.color = 0;
                object.completed = false;
                object.ver = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.completed != null && message.hasOwnProperty("completed"))
                object.completed = message.completed;
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.taskIds && message.taskIds.length) {
                object.taskIds = [];
                for (let j = 0; j < message.taskIds.length; ++j)
                    object.taskIds[j] = message.taskIds[j];
            }
            return object;
        };

        /**
         * Converts this TaskList to JSON.
         * @function toJSON
         * @memberof protos.TaskList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskList;
    })();

    protos.TaskLists = (function() {

        /**
         * Properties of a TaskLists.
         * @memberof protos
         * @interface ITaskLists
         * @property {Array.<protos.ITaskList>|null} [lists] TaskLists lists
         */

        /**
         * Constructs a new TaskLists.
         * @memberof protos
         * @classdesc Represents a TaskLists.
         * @implements ITaskLists
         * @constructor
         * @param {protos.ITaskLists=} [properties] Properties to set
         */
        function TaskLists(properties) {
            this.lists = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskLists lists.
         * @member {Array.<protos.ITaskList>} lists
         * @memberof protos.TaskLists
         * @instance
         */
        TaskLists.prototype.lists = $util.emptyArray;

        /**
         * Creates a new TaskLists instance using the specified properties.
         * @function create
         * @memberof protos.TaskLists
         * @static
         * @param {protos.ITaskLists=} [properties] Properties to set
         * @returns {protos.TaskLists} TaskLists instance
         */
        TaskLists.create = function create(properties) {
            return new TaskLists(properties);
        };

        /**
         * Encodes the specified TaskLists message. Does not implicitly {@link protos.TaskLists.verify|verify} messages.
         * @function encode
         * @memberof protos.TaskLists
         * @static
         * @param {protos.ITaskLists} message TaskLists message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskLists.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lists != null && message.lists.length)
                for (let i = 0; i < message.lists.length; ++i)
                    $root.protos.TaskList.encode(message.lists[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TaskLists message from the specified reader or buffer.
         * @function decode
         * @memberof protos.TaskLists
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.TaskLists} TaskLists
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskLists.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskLists();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.lists && message.lists.length))
                        message.lists = [];
                    message.lists.push($root.protos.TaskList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a TaskLists message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.TaskLists
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.TaskLists} TaskLists
         */
        TaskLists.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.TaskLists)
                return object;
            let message = new $root.protos.TaskLists();
            if (object.lists) {
                if (!Array.isArray(object.lists))
                    throw TypeError(".protos.TaskLists.lists: array expected");
                message.lists = [];
                for (let i = 0; i < object.lists.length; ++i) {
                    if (typeof object.lists[i] !== "object")
                        throw TypeError(".protos.TaskLists.lists: object expected");
                    message.lists[i] = $root.protos.TaskList.fromObject(object.lists[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskLists message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.TaskLists
         * @static
         * @param {protos.TaskLists} message TaskLists
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskLists.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lists = [];
            if (message.lists && message.lists.length) {
                object.lists = [];
                for (let j = 0; j < message.lists.length; ++j)
                    object.lists[j] = $root.protos.TaskList.toObject(message.lists[j], options);
            }
            return object;
        };

        /**
         * Converts this TaskLists to JSON.
         * @function toJSON
         * @memberof protos.TaskLists
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskLists.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskLists;
    })();

    protos.Task = (function() {

        /**
         * Properties of a Task.
         * @memberof protos
         * @interface ITask
         * @property {string|null} [title] Task title
         * @property {number|null} [listId] Task listId
         * @property {string|null} [body] Task body
         * @property {number|null} [priority] Task priority
         */

        /**
         * Constructs a new Task.
         * @memberof protos
         * @classdesc Represents a Task.
         * @implements ITask
         * @constructor
         * @param {protos.ITask=} [properties] Properties to set
         */
        function Task(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Task title.
         * @member {string} title
         * @memberof protos.Task
         * @instance
         */
        Task.prototype.title = "";

        /**
         * Task listId.
         * @member {number} listId
         * @memberof protos.Task
         * @instance
         */
        Task.prototype.listId = 0;

        /**
         * Task body.
         * @member {string} body
         * @memberof protos.Task
         * @instance
         */
        Task.prototype.body = "";

        /**
         * Task priority.
         * @member {number} priority
         * @memberof protos.Task
         * @instance
         */
        Task.prototype.priority = 0;

        /**
         * Creates a new Task instance using the specified properties.
         * @function create
         * @memberof protos.Task
         * @static
         * @param {protos.ITask=} [properties] Properties to set
         * @returns {protos.Task} Task instance
         */
        Task.create = function create(properties) {
            return new Task(properties);
        };

        /**
         * Encodes the specified Task message. Does not implicitly {@link protos.Task.verify|verify} messages.
         * @function encode
         * @memberof protos.Task
         * @static
         * @param {protos.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.listId != null && Object.hasOwnProperty.call(message, "listId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.listId);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.body);
            if (message.priority != null && Object.hasOwnProperty.call(message, "priority"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.priority);
            return writer;
        };

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @function decode
         * @memberof protos.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.Task();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.listId = reader.uint32();
                    break;
                case 3:
                    message.body = reader.string();
                    break;
                case 4:
                    message.priority = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.Task
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.Task} Task
         */
        Task.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.Task)
                return object;
            let message = new $root.protos.Task();
            if (object.title != null)
                message.title = String(object.title);
            if (object.listId != null)
                message.listId = object.listId >>> 0;
            if (object.body != null)
                message.body = String(object.body);
            if (object.priority != null)
                message.priority = object.priority | 0;
            return message;
        };

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.Task
         * @static
         * @param {protos.Task} message Task
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Task.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.title = "";
                object.listId = 0;
                object.body = "";
                object.priority = 0;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.listId != null && message.hasOwnProperty("listId"))
                object.listId = message.listId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.priority != null && message.hasOwnProperty("priority"))
                object.priority = message.priority;
            return object;
        };

        /**
         * Converts this Task to JSON.
         * @function toJSON
         * @memberof protos.Task
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Task.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Task;
    })();

    protos.SpaceObj = (function() {

        /**
         * Properties of a SpaceObj.
         * @memberof protos
         * @interface ISpaceObj
         * @property {number|null} [id] SpaceObj id
         * @property {protos.SpaceApp|null} [app] SpaceObj app
         * @property {number|null} [comments] SpaceObj comments
         * @property {number|null} [ver] SpaceObj ver
         * @property {protos.ITask|null} [task] SpaceObj task
         */

        /**
         * Constructs a new SpaceObj.
         * @memberof protos
         * @classdesc Represents a SpaceObj.
         * @implements ISpaceObj
         * @constructor
         * @param {protos.ISpaceObj=} [properties] Properties to set
         */
        function SpaceObj(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpaceObj id.
         * @member {number} id
         * @memberof protos.SpaceObj
         * @instance
         */
        SpaceObj.prototype.id = 0;

        /**
         * SpaceObj app.
         * @member {protos.SpaceApp} app
         * @memberof protos.SpaceObj
         * @instance
         */
        SpaceObj.prototype.app = 0;

        /**
         * SpaceObj comments.
         * @member {number} comments
         * @memberof protos.SpaceObj
         * @instance
         */
        SpaceObj.prototype.comments = 0;

        /**
         * SpaceObj ver.
         * @member {number} ver
         * @memberof protos.SpaceObj
         * @instance
         */
        SpaceObj.prototype.ver = 0;

        /**
         * SpaceObj task.
         * @member {protos.ITask|null|undefined} task
         * @memberof protos.SpaceObj
         * @instance
         */
        SpaceObj.prototype.task = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SpaceObj data.
         * @member {"task"|undefined} data
         * @memberof protos.SpaceObj
         * @instance
         */
        Object.defineProperty(SpaceObj.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["task"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SpaceObj instance using the specified properties.
         * @function create
         * @memberof protos.SpaceObj
         * @static
         * @param {protos.ISpaceObj=} [properties] Properties to set
         * @returns {protos.SpaceObj} SpaceObj instance
         */
        SpaceObj.create = function create(properties) {
            return new SpaceObj(properties);
        };

        /**
         * Encodes the specified SpaceObj message. Does not implicitly {@link protos.SpaceObj.verify|verify} messages.
         * @function encode
         * @memberof protos.SpaceObj
         * @static
         * @param {protos.ISpaceObj} message SpaceObj message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpaceObj.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.app);
            if (message.comments != null && Object.hasOwnProperty.call(message, "comments"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.comments);
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ver);
            if (message.task != null && Object.hasOwnProperty.call(message, "task"))
                $root.protos.Task.encode(message.task, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SpaceObj message from the specified reader or buffer.
         * @function decode
         * @memberof protos.SpaceObj
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.SpaceObj} SpaceObj
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpaceObj.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.SpaceObj();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.app = reader.int32();
                    break;
                case 3:
                    message.comments = reader.uint32();
                    break;
                case 4:
                    message.ver = reader.uint32();
                    break;
                case 101:
                    message.task = $root.protos.Task.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a SpaceObj message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.SpaceObj
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.SpaceObj} SpaceObj
         */
        SpaceObj.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.SpaceObj)
                return object;
            let message = new $root.protos.SpaceObj();
            if (object.id != null)
                message.id = object.id >>> 0;
            switch (object.app) {
            case "NOT_AN_APP":
            case 0:
                message.app = 0;
                break;
            case "TASKS":
            case 1:
                message.app = 1;
                break;
            case "NOTES":
            case 2:
                message.app = 2;
                break;
            case "FILES":
            case 3:
                message.app = 3;
                break;
            }
            if (object.comments != null)
                message.comments = object.comments >>> 0;
            if (object.ver != null)
                message.ver = object.ver >>> 0;
            if (object.task != null) {
                if (typeof object.task !== "object")
                    throw TypeError(".protos.SpaceObj.task: object expected");
                message.task = $root.protos.Task.fromObject(object.task);
            }
            return message;
        };

        /**
         * Creates a plain object from a SpaceObj message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.SpaceObj
         * @static
         * @param {protos.SpaceObj} message SpaceObj
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpaceObj.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.app = options.enums === String ? "NOT_AN_APP" : 0;
                object.comments = 0;
                object.ver = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = options.enums === String ? $root.protos.SpaceApp[message.app] : message.app;
            if (message.comments != null && message.hasOwnProperty("comments"))
                object.comments = message.comments;
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.task != null && message.hasOwnProperty("task")) {
                object.task = $root.protos.Task.toObject(message.task, options);
                if (options.oneofs)
                    object.data = "task";
            }
            return object;
        };

        /**
         * Converts this SpaceObj to JSON.
         * @function toJSON
         * @memberof protos.SpaceObj
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpaceObj.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpaceObj;
    })();

    protos.APIRequest = (function() {

        /**
         * Properties of a APIRequest.
         * @memberof protos
         * @interface IAPIRequest
         * @property {number|null} [id] APIRequest id
         * @property {Uint8Array|null} [accessToken] APIRequest accessToken
         * @property {protos.IObjsReq|null} [objs] APIRequest objs
         * @property {protos.ITaskListsReq|null} [taskLists] APIRequest taskLists
         */

        /**
         * Constructs a new APIRequest.
         * @memberof protos
         * @classdesc Represents a APIRequest.
         * @implements IAPIRequest
         * @constructor
         * @param {protos.IAPIRequest=} [properties] Properties to set
         */
        function APIRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * APIRequest id.
         * @member {number} id
         * @memberof protos.APIRequest
         * @instance
         */
        APIRequest.prototype.id = 0;

        /**
         * APIRequest accessToken.
         * @member {Uint8Array} accessToken
         * @memberof protos.APIRequest
         * @instance
         */
        APIRequest.prototype.accessToken = $util.newBuffer([]);

        /**
         * APIRequest objs.
         * @member {protos.IObjsReq|null|undefined} objs
         * @memberof protos.APIRequest
         * @instance
         */
        APIRequest.prototype.objs = null;

        /**
         * APIRequest taskLists.
         * @member {protos.ITaskListsReq|null|undefined} taskLists
         * @memberof protos.APIRequest
         * @instance
         */
        APIRequest.prototype.taskLists = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * APIRequest request.
         * @member {"objs"|"taskLists"|undefined} request
         * @memberof protos.APIRequest
         * @instance
         */
        Object.defineProperty(APIRequest.prototype, "request", {
            get: $util.oneOfGetter($oneOfFields = ["objs", "taskLists"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new APIRequest instance using the specified properties.
         * @function create
         * @memberof protos.APIRequest
         * @static
         * @param {protos.IAPIRequest=} [properties] Properties to set
         * @returns {protos.APIRequest} APIRequest instance
         */
        APIRequest.create = function create(properties) {
            return new APIRequest(properties);
        };

        /**
         * Encodes the specified APIRequest message. Does not implicitly {@link protos.APIRequest.verify|verify} messages.
         * @function encode
         * @memberof protos.APIRequest
         * @static
         * @param {protos.IAPIRequest} message APIRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        APIRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.accessToken);
            if (message.objs != null && Object.hasOwnProperty.call(message, "objs"))
                $root.protos.ObjsReq.encode(message.objs, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.taskLists != null && Object.hasOwnProperty.call(message, "taskLists"))
                $root.protos.TaskListsReq.encode(message.taskLists, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a APIRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protos.APIRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.APIRequest} APIRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        APIRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.APIRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.accessToken = reader.bytes();
                    break;
                case 10:
                    message.objs = $root.protos.ObjsReq.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.taskLists = $root.protos.TaskListsReq.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a APIRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.APIRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.APIRequest} APIRequest
         */
        APIRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.APIRequest)
                return object;
            let message = new $root.protos.APIRequest();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.accessToken != null)
                if (typeof object.accessToken === "string")
                    $util.base64.decode(object.accessToken, message.accessToken = $util.newBuffer($util.base64.length(object.accessToken)), 0);
                else if (object.accessToken.length)
                    message.accessToken = object.accessToken;
            if (object.objs != null) {
                if (typeof object.objs !== "object")
                    throw TypeError(".protos.APIRequest.objs: object expected");
                message.objs = $root.protos.ObjsReq.fromObject(object.objs);
            }
            if (object.taskLists != null) {
                if (typeof object.taskLists !== "object")
                    throw TypeError(".protos.APIRequest.taskLists: object expected");
                message.taskLists = $root.protos.TaskListsReq.fromObject(object.taskLists);
            }
            return message;
        };

        /**
         * Creates a plain object from a APIRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.APIRequest
         * @static
         * @param {protos.APIRequest} message APIRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        APIRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === String)
                    object.accessToken = "";
                else {
                    object.accessToken = [];
                    if (options.bytes !== Array)
                        object.accessToken = $util.newBuffer(object.accessToken);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                object.accessToken = options.bytes === String ? $util.base64.encode(message.accessToken, 0, message.accessToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.accessToken) : message.accessToken;
            if (message.objs != null && message.hasOwnProperty("objs")) {
                object.objs = $root.protos.ObjsReq.toObject(message.objs, options);
                if (options.oneofs)
                    object.request = "objs";
            }
            if (message.taskLists != null && message.hasOwnProperty("taskLists")) {
                object.taskLists = $root.protos.TaskListsReq.toObject(message.taskLists, options);
                if (options.oneofs)
                    object.request = "taskLists";
            }
            return object;
        };

        /**
         * Converts this APIRequest to JSON.
         * @function toJSON
         * @memberof protos.APIRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        APIRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return APIRequest;
    })();

    protos.APIResponse = (function() {

        /**
         * Properties of a APIResponse.
         * @memberof protos
         * @interface IAPIResponse
         * @property {number|null} [id] APIResponse id
         * @property {protos.APIResponse.Error|null} [error] APIResponse error
         * @property {protos.IObjsResp|null} [objs] APIResponse objs
         * @property {protos.ITaskListsResp|null} [taskLists] APIResponse taskLists
         */

        /**
         * Constructs a new APIResponse.
         * @memberof protos
         * @classdesc Represents a APIResponse.
         * @implements IAPIResponse
         * @constructor
         * @param {protos.IAPIResponse=} [properties] Properties to set
         */
        function APIResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * APIResponse id.
         * @member {number} id
         * @memberof protos.APIResponse
         * @instance
         */
        APIResponse.prototype.id = 0;

        /**
         * APIResponse error.
         * @member {protos.APIResponse.Error} error
         * @memberof protos.APIResponse
         * @instance
         */
        APIResponse.prototype.error = 0;

        /**
         * APIResponse objs.
         * @member {protos.IObjsResp|null|undefined} objs
         * @memberof protos.APIResponse
         * @instance
         */
        APIResponse.prototype.objs = null;

        /**
         * APIResponse taskLists.
         * @member {protos.ITaskListsResp|null|undefined} taskLists
         * @memberof protos.APIResponse
         * @instance
         */
        APIResponse.prototype.taskLists = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * APIResponse response.
         * @member {"objs"|"taskLists"|undefined} response
         * @memberof protos.APIResponse
         * @instance
         */
        Object.defineProperty(APIResponse.prototype, "response", {
            get: $util.oneOfGetter($oneOfFields = ["objs", "taskLists"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new APIResponse instance using the specified properties.
         * @function create
         * @memberof protos.APIResponse
         * @static
         * @param {protos.IAPIResponse=} [properties] Properties to set
         * @returns {protos.APIResponse} APIResponse instance
         */
        APIResponse.create = function create(properties) {
            return new APIResponse(properties);
        };

        /**
         * Encodes the specified APIResponse message. Does not implicitly {@link protos.APIResponse.verify|verify} messages.
         * @function encode
         * @memberof protos.APIResponse
         * @static
         * @param {protos.IAPIResponse} message APIResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        APIResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.error);
            if (message.objs != null && Object.hasOwnProperty.call(message, "objs"))
                $root.protos.ObjsResp.encode(message.objs, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.taskLists != null && Object.hasOwnProperty.call(message, "taskLists"))
                $root.protos.TaskListsResp.encode(message.taskLists, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a APIResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protos.APIResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.APIResponse} APIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        APIResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.APIResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.error = reader.int32();
                    break;
                case 10:
                    message.objs = $root.protos.ObjsResp.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.taskLists = $root.protos.TaskListsResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a APIResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.APIResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.APIResponse} APIResponse
         */
        APIResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.APIResponse)
                return object;
            let message = new $root.protos.APIResponse();
            if (object.id != null)
                message.id = object.id | 0;
            switch (object.error) {
            case "OK":
            case 0:
                message.error = 0;
                break;
            case "INVALID_ACCESS_TOKEN":
            case 1:
                message.error = 1;
                break;
            case "INVALID_METHOD":
            case 2:
                message.error = 2;
                break;
            case "INVALID_REQUEST":
            case 3:
                message.error = 3;
                break;
            }
            if (object.objs != null) {
                if (typeof object.objs !== "object")
                    throw TypeError(".protos.APIResponse.objs: object expected");
                message.objs = $root.protos.ObjsResp.fromObject(object.objs);
            }
            if (object.taskLists != null) {
                if (typeof object.taskLists !== "object")
                    throw TypeError(".protos.APIResponse.taskLists: object expected");
                message.taskLists = $root.protos.TaskListsResp.fromObject(object.taskLists);
            }
            return message;
        };

        /**
         * Creates a plain object from a APIResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.APIResponse
         * @static
         * @param {protos.APIResponse} message APIResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        APIResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.error = options.enums === String ? "OK" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.protos.APIResponse.Error[message.error] : message.error;
            if (message.objs != null && message.hasOwnProperty("objs")) {
                object.objs = $root.protos.ObjsResp.toObject(message.objs, options);
                if (options.oneofs)
                    object.response = "objs";
            }
            if (message.taskLists != null && message.hasOwnProperty("taskLists")) {
                object.taskLists = $root.protos.TaskListsResp.toObject(message.taskLists, options);
                if (options.oneofs)
                    object.response = "taskLists";
            }
            return object;
        };

        /**
         * Converts this APIResponse to JSON.
         * @function toJSON
         * @memberof protos.APIResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        APIResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Error enum.
         * @name protos.APIResponse.Error
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} INVALID_ACCESS_TOKEN=1 INVALID_ACCESS_TOKEN value
         * @property {number} INVALID_METHOD=2 INVALID_METHOD value
         * @property {number} INVALID_REQUEST=3 INVALID_REQUEST value
         */
        APIResponse.Error = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "INVALID_ACCESS_TOKEN"] = 1;
            values[valuesById[2] = "INVALID_METHOD"] = 2;
            values[valuesById[3] = "INVALID_REQUEST"] = 3;
            return values;
        })();

        return APIResponse;
    })();

    protos.ObjsReq = (function() {

        /**
         * Properties of an ObjsReq.
         * @memberof protos
         * @interface IObjsReq
         * @property {string|null} [spaceId] ObjsReq spaceId
         * @property {protos.IObjId|null} [get] ObjsReq get
         * @property {protos.IObjIds|null} [getMany] ObjsReq getMany
         */

        /**
         * Constructs a new ObjsReq.
         * @memberof protos
         * @classdesc Represents an ObjsReq.
         * @implements IObjsReq
         * @constructor
         * @param {protos.IObjsReq=} [properties] Properties to set
         */
        function ObjsReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjsReq spaceId.
         * @member {string} spaceId
         * @memberof protos.ObjsReq
         * @instance
         */
        ObjsReq.prototype.spaceId = "";

        /**
         * ObjsReq get.
         * @member {protos.IObjId|null|undefined} get
         * @memberof protos.ObjsReq
         * @instance
         */
        ObjsReq.prototype.get = null;

        /**
         * ObjsReq getMany.
         * @member {protos.IObjIds|null|undefined} getMany
         * @memberof protos.ObjsReq
         * @instance
         */
        ObjsReq.prototype.getMany = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ObjsReq method.
         * @member {"get"|"getMany"|undefined} method
         * @memberof protos.ObjsReq
         * @instance
         */
        Object.defineProperty(ObjsReq.prototype, "method", {
            get: $util.oneOfGetter($oneOfFields = ["get", "getMany"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ObjsReq instance using the specified properties.
         * @function create
         * @memberof protos.ObjsReq
         * @static
         * @param {protos.IObjsReq=} [properties] Properties to set
         * @returns {protos.ObjsReq} ObjsReq instance
         */
        ObjsReq.create = function create(properties) {
            return new ObjsReq(properties);
        };

        /**
         * Encodes the specified ObjsReq message. Does not implicitly {@link protos.ObjsReq.verify|verify} messages.
         * @function encode
         * @memberof protos.ObjsReq
         * @static
         * @param {protos.IObjsReq} message ObjsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.spaceId);
            if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                $root.protos.ObjId.encode(message.get, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.getMany != null && Object.hasOwnProperty.call(message, "getMany"))
                $root.protos.ObjIds.encode(message.getMany, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjsReq message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ObjsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ObjsReq} ObjsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ObjsReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.spaceId = reader.string();
                    break;
                case 10:
                    message.get = $root.protos.ObjId.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.getMany = $root.protos.ObjIds.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an ObjsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ObjsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ObjsReq} ObjsReq
         */
        ObjsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ObjsReq)
                return object;
            let message = new $root.protos.ObjsReq();
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.get != null) {
                if (typeof object.get !== "object")
                    throw TypeError(".protos.ObjsReq.get: object expected");
                message.get = $root.protos.ObjId.fromObject(object.get);
            }
            if (object.getMany != null) {
                if (typeof object.getMany !== "object")
                    throw TypeError(".protos.ObjsReq.getMany: object expected");
                message.getMany = $root.protos.ObjIds.fromObject(object.getMany);
            }
            return message;
        };

        /**
         * Creates a plain object from an ObjsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ObjsReq
         * @static
         * @param {protos.ObjsReq} message ObjsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjsReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.spaceId = "";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.get != null && message.hasOwnProperty("get")) {
                object.get = $root.protos.ObjId.toObject(message.get, options);
                if (options.oneofs)
                    object.method = "get";
            }
            if (message.getMany != null && message.hasOwnProperty("getMany")) {
                object.getMany = $root.protos.ObjIds.toObject(message.getMany, options);
                if (options.oneofs)
                    object.method = "getMany";
            }
            return object;
        };

        /**
         * Converts this ObjsReq to JSON.
         * @function toJSON
         * @memberof protos.ObjsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObjsReq;
    })();

    protos.ObjsResp = (function() {

        /**
         * Properties of an ObjsResp.
         * @memberof protos
         * @interface IObjsResp
         * @property {protos.ObjsResp.Error|null} [error] ObjsResp error
         * @property {protos.ISpaceObj|null} [get] ObjsResp get
         * @property {protos.IIdObjMap|null} [getMany] ObjsResp getMany
         */

        /**
         * Constructs a new ObjsResp.
         * @memberof protos
         * @classdesc Represents an ObjsResp.
         * @implements IObjsResp
         * @constructor
         * @param {protos.IObjsResp=} [properties] Properties to set
         */
        function ObjsResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjsResp error.
         * @member {protos.ObjsResp.Error} error
         * @memberof protos.ObjsResp
         * @instance
         */
        ObjsResp.prototype.error = 0;

        /**
         * ObjsResp get.
         * @member {protos.ISpaceObj|null|undefined} get
         * @memberof protos.ObjsResp
         * @instance
         */
        ObjsResp.prototype.get = null;

        /**
         * ObjsResp getMany.
         * @member {protos.IIdObjMap|null|undefined} getMany
         * @memberof protos.ObjsResp
         * @instance
         */
        ObjsResp.prototype.getMany = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ObjsResp result.
         * @member {"get"|"getMany"|undefined} result
         * @memberof protos.ObjsResp
         * @instance
         */
        Object.defineProperty(ObjsResp.prototype, "result", {
            get: $util.oneOfGetter($oneOfFields = ["get", "getMany"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ObjsResp instance using the specified properties.
         * @function create
         * @memberof protos.ObjsResp
         * @static
         * @param {protos.IObjsResp=} [properties] Properties to set
         * @returns {protos.ObjsResp} ObjsResp instance
         */
        ObjsResp.create = function create(properties) {
            return new ObjsResp(properties);
        };

        /**
         * Encodes the specified ObjsResp message. Does not implicitly {@link protos.ObjsResp.verify|verify} messages.
         * @function encode
         * @memberof protos.ObjsResp
         * @static
         * @param {protos.IObjsResp} message ObjsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjsResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                $root.protos.SpaceObj.encode(message.get, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.getMany != null && Object.hasOwnProperty.call(message, "getMany"))
                $root.protos.IdObjMap.encode(message.getMany, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjsResp message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ObjsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ObjsResp} ObjsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjsResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ObjsResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 10:
                    message.get = $root.protos.SpaceObj.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.getMany = $root.protos.IdObjMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates an ObjsResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ObjsResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ObjsResp} ObjsResp
         */
        ObjsResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ObjsResp)
                return object;
            let message = new $root.protos.ObjsResp();
            switch (object.error) {
            case "OK":
            case 0:
                message.error = 0;
                break;
            case "INVALID_SPACE":
            case 1:
                message.error = 1;
                break;
            case "INVALID_OBJ_ID":
            case 2:
                message.error = 2;
                break;
            }
            if (object.get != null) {
                if (typeof object.get !== "object")
                    throw TypeError(".protos.ObjsResp.get: object expected");
                message.get = $root.protos.SpaceObj.fromObject(object.get);
            }
            if (object.getMany != null) {
                if (typeof object.getMany !== "object")
                    throw TypeError(".protos.ObjsResp.getMany: object expected");
                message.getMany = $root.protos.IdObjMap.fromObject(object.getMany);
            }
            return message;
        };

        /**
         * Creates a plain object from an ObjsResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ObjsResp
         * @static
         * @param {protos.ObjsResp} message ObjsResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjsResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.error = options.enums === String ? "OK" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.protos.ObjsResp.Error[message.error] : message.error;
            if (message.get != null && message.hasOwnProperty("get")) {
                object.get = $root.protos.SpaceObj.toObject(message.get, options);
                if (options.oneofs)
                    object.result = "get";
            }
            if (message.getMany != null && message.hasOwnProperty("getMany")) {
                object.getMany = $root.protos.IdObjMap.toObject(message.getMany, options);
                if (options.oneofs)
                    object.result = "getMany";
            }
            return object;
        };

        /**
         * Converts this ObjsResp to JSON.
         * @function toJSON
         * @memberof protos.ObjsResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjsResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Error enum.
         * @name protos.ObjsResp.Error
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} INVALID_SPACE=1 INVALID_SPACE value
         * @property {number} INVALID_OBJ_ID=2 INVALID_OBJ_ID value
         */
        ObjsResp.Error = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "INVALID_SPACE"] = 1;
            values[valuesById[2] = "INVALID_OBJ_ID"] = 2;
            return values;
        })();

        return ObjsResp;
    })();

    protos.TaskListsReq = (function() {

        /**
         * Properties of a TaskListsReq.
         * @memberof protos
         * @interface ITaskListsReq
         * @property {string|null} [spaceId] TaskListsReq spaceId
         * @property {boolean|null} [getAll] TaskListsReq getAll
         * @property {protos.TaskListsReq.ISetTasksOrder|null} [setTasksOrder] TaskListsReq setTasksOrder
         * @property {protos.TaskListsReq.IMoveTask|null} [moveTask] TaskListsReq moveTask
         */

        /**
         * Constructs a new TaskListsReq.
         * @memberof protos
         * @classdesc Represents a TaskListsReq.
         * @implements ITaskListsReq
         * @constructor
         * @param {protos.ITaskListsReq=} [properties] Properties to set
         */
        function TaskListsReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskListsReq spaceId.
         * @member {string} spaceId
         * @memberof protos.TaskListsReq
         * @instance
         */
        TaskListsReq.prototype.spaceId = "";

        /**
         * TaskListsReq getAll.
         * @member {boolean|null|undefined} getAll
         * @memberof protos.TaskListsReq
         * @instance
         */
        TaskListsReq.prototype.getAll = null;

        /**
         * TaskListsReq setTasksOrder.
         * @member {protos.TaskListsReq.ISetTasksOrder|null|undefined} setTasksOrder
         * @memberof protos.TaskListsReq
         * @instance
         */
        TaskListsReq.prototype.setTasksOrder = null;

        /**
         * TaskListsReq moveTask.
         * @member {protos.TaskListsReq.IMoveTask|null|undefined} moveTask
         * @memberof protos.TaskListsReq
         * @instance
         */
        TaskListsReq.prototype.moveTask = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * TaskListsReq method.
         * @member {"getAll"|"setTasksOrder"|"moveTask"|undefined} method
         * @memberof protos.TaskListsReq
         * @instance
         */
        Object.defineProperty(TaskListsReq.prototype, "method", {
            get: $util.oneOfGetter($oneOfFields = ["getAll", "setTasksOrder", "moveTask"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new TaskListsReq instance using the specified properties.
         * @function create
         * @memberof protos.TaskListsReq
         * @static
         * @param {protos.ITaskListsReq=} [properties] Properties to set
         * @returns {protos.TaskListsReq} TaskListsReq instance
         */
        TaskListsReq.create = function create(properties) {
            return new TaskListsReq(properties);
        };

        /**
         * Encodes the specified TaskListsReq message. Does not implicitly {@link protos.TaskListsReq.verify|verify} messages.
         * @function encode
         * @memberof protos.TaskListsReq
         * @static
         * @param {protos.ITaskListsReq} message TaskListsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskListsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spaceId != null && Object.hasOwnProperty.call(message, "spaceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.spaceId);
            if (message.getAll != null && Object.hasOwnProperty.call(message, "getAll"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.getAll);
            if (message.setTasksOrder != null && Object.hasOwnProperty.call(message, "setTasksOrder"))
                $root.protos.TaskListsReq.SetTasksOrder.encode(message.setTasksOrder, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.moveTask != null && Object.hasOwnProperty.call(message, "moveTask"))
                $root.protos.TaskListsReq.MoveTask.encode(message.moveTask, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TaskListsReq message from the specified reader or buffer.
         * @function decode
         * @memberof protos.TaskListsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.TaskListsReq} TaskListsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskListsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskListsReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.spaceId = reader.string();
                    break;
                case 10:
                    message.getAll = reader.bool();
                    break;
                case 11:
                    message.setTasksOrder = $root.protos.TaskListsReq.SetTasksOrder.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.moveTask = $root.protos.TaskListsReq.MoveTask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a TaskListsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.TaskListsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.TaskListsReq} TaskListsReq
         */
        TaskListsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.TaskListsReq)
                return object;
            let message = new $root.protos.TaskListsReq();
            if (object.spaceId != null)
                message.spaceId = String(object.spaceId);
            if (object.getAll != null)
                message.getAll = Boolean(object.getAll);
            if (object.setTasksOrder != null) {
                if (typeof object.setTasksOrder !== "object")
                    throw TypeError(".protos.TaskListsReq.setTasksOrder: object expected");
                message.setTasksOrder = $root.protos.TaskListsReq.SetTasksOrder.fromObject(object.setTasksOrder);
            }
            if (object.moveTask != null) {
                if (typeof object.moveTask !== "object")
                    throw TypeError(".protos.TaskListsReq.moveTask: object expected");
                message.moveTask = $root.protos.TaskListsReq.MoveTask.fromObject(object.moveTask);
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskListsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.TaskListsReq
         * @static
         * @param {protos.TaskListsReq} message TaskListsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskListsReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.spaceId = "";
            if (message.spaceId != null && message.hasOwnProperty("spaceId"))
                object.spaceId = message.spaceId;
            if (message.getAll != null && message.hasOwnProperty("getAll")) {
                object.getAll = message.getAll;
                if (options.oneofs)
                    object.method = "getAll";
            }
            if (message.setTasksOrder != null && message.hasOwnProperty("setTasksOrder")) {
                object.setTasksOrder = $root.protos.TaskListsReq.SetTasksOrder.toObject(message.setTasksOrder, options);
                if (options.oneofs)
                    object.method = "setTasksOrder";
            }
            if (message.moveTask != null && message.hasOwnProperty("moveTask")) {
                object.moveTask = $root.protos.TaskListsReq.MoveTask.toObject(message.moveTask, options);
                if (options.oneofs)
                    object.method = "moveTask";
            }
            return object;
        };

        /**
         * Converts this TaskListsReq to JSON.
         * @function toJSON
         * @memberof protos.TaskListsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskListsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TaskListsReq.SetTasksOrder = (function() {

            /**
             * Properties of a SetTasksOrder.
             * @memberof protos.TaskListsReq
             * @interface ISetTasksOrder
             * @property {number|null} [listId] SetTasksOrder listId
             * @property {Array.<number>|null} [tasksIds] SetTasksOrder tasksIds
             */

            /**
             * Constructs a new SetTasksOrder.
             * @memberof protos.TaskListsReq
             * @classdesc Represents a SetTasksOrder.
             * @implements ISetTasksOrder
             * @constructor
             * @param {protos.TaskListsReq.ISetTasksOrder=} [properties] Properties to set
             */
            function SetTasksOrder(properties) {
                this.tasksIds = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetTasksOrder listId.
             * @member {number} listId
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @instance
             */
            SetTasksOrder.prototype.listId = 0;

            /**
             * SetTasksOrder tasksIds.
             * @member {Array.<number>} tasksIds
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @instance
             */
            SetTasksOrder.prototype.tasksIds = $util.emptyArray;

            /**
             * Creates a new SetTasksOrder instance using the specified properties.
             * @function create
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @static
             * @param {protos.TaskListsReq.ISetTasksOrder=} [properties] Properties to set
             * @returns {protos.TaskListsReq.SetTasksOrder} SetTasksOrder instance
             */
            SetTasksOrder.create = function create(properties) {
                return new SetTasksOrder(properties);
            };

            /**
             * Encodes the specified SetTasksOrder message. Does not implicitly {@link protos.TaskListsReq.SetTasksOrder.verify|verify} messages.
             * @function encode
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @static
             * @param {protos.TaskListsReq.ISetTasksOrder} message SetTasksOrder message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetTasksOrder.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.listId != null && Object.hasOwnProperty.call(message, "listId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.listId);
                if (message.tasksIds != null && message.tasksIds.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (let i = 0; i < message.tasksIds.length; ++i)
                        writer.uint32(message.tasksIds[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Decodes a SetTasksOrder message from the specified reader or buffer.
             * @function decode
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protos.TaskListsReq.SetTasksOrder} SetTasksOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetTasksOrder.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskListsReq.SetTasksOrder();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.listId = reader.uint32();
                        break;
                    case 2:
                        if (!(message.tasksIds && message.tasksIds.length))
                            message.tasksIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.tasksIds.push(reader.uint32());
                        } else
                            message.tasksIds.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Creates a SetTasksOrder message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protos.TaskListsReq.SetTasksOrder} SetTasksOrder
             */
            SetTasksOrder.fromObject = function fromObject(object) {
                if (object instanceof $root.protos.TaskListsReq.SetTasksOrder)
                    return object;
                let message = new $root.protos.TaskListsReq.SetTasksOrder();
                if (object.listId != null)
                    message.listId = object.listId >>> 0;
                if (object.tasksIds) {
                    if (!Array.isArray(object.tasksIds))
                        throw TypeError(".protos.TaskListsReq.SetTasksOrder.tasksIds: array expected");
                    message.tasksIds = [];
                    for (let i = 0; i < object.tasksIds.length; ++i)
                        message.tasksIds[i] = object.tasksIds[i] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a SetTasksOrder message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @static
             * @param {protos.TaskListsReq.SetTasksOrder} message SetTasksOrder
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetTasksOrder.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.tasksIds = [];
                if (options.defaults)
                    object.listId = 0;
                if (message.listId != null && message.hasOwnProperty("listId"))
                    object.listId = message.listId;
                if (message.tasksIds && message.tasksIds.length) {
                    object.tasksIds = [];
                    for (let j = 0; j < message.tasksIds.length; ++j)
                        object.tasksIds[j] = message.tasksIds[j];
                }
                return object;
            };

            /**
             * Converts this SetTasksOrder to JSON.
             * @function toJSON
             * @memberof protos.TaskListsReq.SetTasksOrder
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetTasksOrder.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SetTasksOrder;
        })();

        TaskListsReq.MoveTask = (function() {

            /**
             * Properties of a MoveTask.
             * @memberof protos.TaskListsReq
             * @interface IMoveTask
             * @property {number|null} [taskId] MoveTask taskId
             * @property {number|null} [currentListId] MoveTask currentListId
             * @property {number|null} [targetListId] MoveTask targetListId
             * @property {number|null} [listIndex] MoveTask listIndex
             */

            /**
             * Constructs a new MoveTask.
             * @memberof protos.TaskListsReq
             * @classdesc Represents a MoveTask.
             * @implements IMoveTask
             * @constructor
             * @param {protos.TaskListsReq.IMoveTask=} [properties] Properties to set
             */
            function MoveTask(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MoveTask taskId.
             * @member {number} taskId
             * @memberof protos.TaskListsReq.MoveTask
             * @instance
             */
            MoveTask.prototype.taskId = 0;

            /**
             * MoveTask currentListId.
             * @member {number} currentListId
             * @memberof protos.TaskListsReq.MoveTask
             * @instance
             */
            MoveTask.prototype.currentListId = 0;

            /**
             * MoveTask targetListId.
             * @member {number} targetListId
             * @memberof protos.TaskListsReq.MoveTask
             * @instance
             */
            MoveTask.prototype.targetListId = 0;

            /**
             * MoveTask listIndex.
             * @member {number} listIndex
             * @memberof protos.TaskListsReq.MoveTask
             * @instance
             */
            MoveTask.prototype.listIndex = 0;

            /**
             * Creates a new MoveTask instance using the specified properties.
             * @function create
             * @memberof protos.TaskListsReq.MoveTask
             * @static
             * @param {protos.TaskListsReq.IMoveTask=} [properties] Properties to set
             * @returns {protos.TaskListsReq.MoveTask} MoveTask instance
             */
            MoveTask.create = function create(properties) {
                return new MoveTask(properties);
            };

            /**
             * Encodes the specified MoveTask message. Does not implicitly {@link protos.TaskListsReq.MoveTask.verify|verify} messages.
             * @function encode
             * @memberof protos.TaskListsReq.MoveTask
             * @static
             * @param {protos.TaskListsReq.IMoveTask} message MoveTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoveTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.taskId);
                if (message.currentListId != null && Object.hasOwnProperty.call(message, "currentListId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.currentListId);
                if (message.targetListId != null && Object.hasOwnProperty.call(message, "targetListId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.targetListId);
                if (message.listIndex != null && Object.hasOwnProperty.call(message, "listIndex"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.listIndex);
                return writer;
            };

            /**
             * Decodes a MoveTask message from the specified reader or buffer.
             * @function decode
             * @memberof protos.TaskListsReq.MoveTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protos.TaskListsReq.MoveTask} MoveTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoveTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskListsReq.MoveTask();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.taskId = reader.uint32();
                        break;
                    case 2:
                        message.currentListId = reader.uint32();
                        break;
                    case 3:
                        message.targetListId = reader.uint32();
                        break;
                    case 4:
                        message.listIndex = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Creates a MoveTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protos.TaskListsReq.MoveTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protos.TaskListsReq.MoveTask} MoveTask
             */
            MoveTask.fromObject = function fromObject(object) {
                if (object instanceof $root.protos.TaskListsReq.MoveTask)
                    return object;
                let message = new $root.protos.TaskListsReq.MoveTask();
                if (object.taskId != null)
                    message.taskId = object.taskId >>> 0;
                if (object.currentListId != null)
                    message.currentListId = object.currentListId >>> 0;
                if (object.targetListId != null)
                    message.targetListId = object.targetListId >>> 0;
                if (object.listIndex != null)
                    message.listIndex = object.listIndex >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a MoveTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protos.TaskListsReq.MoveTask
             * @static
             * @param {protos.TaskListsReq.MoveTask} message MoveTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MoveTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.taskId = 0;
                    object.currentListId = 0;
                    object.targetListId = 0;
                    object.listIndex = 0;
                }
                if (message.taskId != null && message.hasOwnProperty("taskId"))
                    object.taskId = message.taskId;
                if (message.currentListId != null && message.hasOwnProperty("currentListId"))
                    object.currentListId = message.currentListId;
                if (message.targetListId != null && message.hasOwnProperty("targetListId"))
                    object.targetListId = message.targetListId;
                if (message.listIndex != null && message.hasOwnProperty("listIndex"))
                    object.listIndex = message.listIndex;
                return object;
            };

            /**
             * Converts this MoveTask to JSON.
             * @function toJSON
             * @memberof protos.TaskListsReq.MoveTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MoveTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MoveTask;
        })();

        return TaskListsReq;
    })();

    protos.TaskListsResp = (function() {

        /**
         * Properties of a TaskListsResp.
         * @memberof protos
         * @interface ITaskListsResp
         * @property {protos.TaskListsResp.Error|null} [error] TaskListsResp error
         * @property {protos.ITaskLists|null} [getAll] TaskListsResp getAll
         * @property {protos.TaskListsResp.ISetTasksOrder|null} [setTasksOrder] TaskListsResp setTasksOrder
         * @property {protos.TaskListsResp.IMoveTask|null} [moveTask] TaskListsResp moveTask
         */

        /**
         * Constructs a new TaskListsResp.
         * @memberof protos
         * @classdesc Represents a TaskListsResp.
         * @implements ITaskListsResp
         * @constructor
         * @param {protos.ITaskListsResp=} [properties] Properties to set
         */
        function TaskListsResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskListsResp error.
         * @member {protos.TaskListsResp.Error} error
         * @memberof protos.TaskListsResp
         * @instance
         */
        TaskListsResp.prototype.error = 0;

        /**
         * TaskListsResp getAll.
         * @member {protos.ITaskLists|null|undefined} getAll
         * @memberof protos.TaskListsResp
         * @instance
         */
        TaskListsResp.prototype.getAll = null;

        /**
         * TaskListsResp setTasksOrder.
         * @member {protos.TaskListsResp.ISetTasksOrder|null|undefined} setTasksOrder
         * @memberof protos.TaskListsResp
         * @instance
         */
        TaskListsResp.prototype.setTasksOrder = null;

        /**
         * TaskListsResp moveTask.
         * @member {protos.TaskListsResp.IMoveTask|null|undefined} moveTask
         * @memberof protos.TaskListsResp
         * @instance
         */
        TaskListsResp.prototype.moveTask = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * TaskListsResp result.
         * @member {"getAll"|"setTasksOrder"|"moveTask"|undefined} result
         * @memberof protos.TaskListsResp
         * @instance
         */
        Object.defineProperty(TaskListsResp.prototype, "result", {
            get: $util.oneOfGetter($oneOfFields = ["getAll", "setTasksOrder", "moveTask"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new TaskListsResp instance using the specified properties.
         * @function create
         * @memberof protos.TaskListsResp
         * @static
         * @param {protos.ITaskListsResp=} [properties] Properties to set
         * @returns {protos.TaskListsResp} TaskListsResp instance
         */
        TaskListsResp.create = function create(properties) {
            return new TaskListsResp(properties);
        };

        /**
         * Encodes the specified TaskListsResp message. Does not implicitly {@link protos.TaskListsResp.verify|verify} messages.
         * @function encode
         * @memberof protos.TaskListsResp
         * @static
         * @param {protos.ITaskListsResp} message TaskListsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskListsResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.getAll != null && Object.hasOwnProperty.call(message, "getAll"))
                $root.protos.TaskLists.encode(message.getAll, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.setTasksOrder != null && Object.hasOwnProperty.call(message, "setTasksOrder"))
                $root.protos.TaskListsResp.SetTasksOrder.encode(message.setTasksOrder, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.moveTask != null && Object.hasOwnProperty.call(message, "moveTask"))
                $root.protos.TaskListsResp.MoveTask.encode(message.moveTask, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TaskListsResp message from the specified reader or buffer.
         * @function decode
         * @memberof protos.TaskListsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.TaskListsResp} TaskListsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskListsResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskListsResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 10:
                    message.getAll = $root.protos.TaskLists.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.setTasksOrder = $root.protos.TaskListsResp.SetTasksOrder.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.moveTask = $root.protos.TaskListsResp.MoveTask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a TaskListsResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.TaskListsResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.TaskListsResp} TaskListsResp
         */
        TaskListsResp.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.TaskListsResp)
                return object;
            let message = new $root.protos.TaskListsResp();
            switch (object.error) {
            case "OK":
            case 0:
                message.error = 0;
                break;
            case "INVALID_SPACE":
            case 1:
                message.error = 1;
                break;
            }
            if (object.getAll != null) {
                if (typeof object.getAll !== "object")
                    throw TypeError(".protos.TaskListsResp.getAll: object expected");
                message.getAll = $root.protos.TaskLists.fromObject(object.getAll);
            }
            if (object.setTasksOrder != null) {
                if (typeof object.setTasksOrder !== "object")
                    throw TypeError(".protos.TaskListsResp.setTasksOrder: object expected");
                message.setTasksOrder = $root.protos.TaskListsResp.SetTasksOrder.fromObject(object.setTasksOrder);
            }
            if (object.moveTask != null) {
                if (typeof object.moveTask !== "object")
                    throw TypeError(".protos.TaskListsResp.moveTask: object expected");
                message.moveTask = $root.protos.TaskListsResp.MoveTask.fromObject(object.moveTask);
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskListsResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.TaskListsResp
         * @static
         * @param {protos.TaskListsResp} message TaskListsResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskListsResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.error = options.enums === String ? "OK" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.protos.TaskListsResp.Error[message.error] : message.error;
            if (message.getAll != null && message.hasOwnProperty("getAll")) {
                object.getAll = $root.protos.TaskLists.toObject(message.getAll, options);
                if (options.oneofs)
                    object.result = "getAll";
            }
            if (message.setTasksOrder != null && message.hasOwnProperty("setTasksOrder")) {
                object.setTasksOrder = $root.protos.TaskListsResp.SetTasksOrder.toObject(message.setTasksOrder, options);
                if (options.oneofs)
                    object.result = "setTasksOrder";
            }
            if (message.moveTask != null && message.hasOwnProperty("moveTask")) {
                object.moveTask = $root.protos.TaskListsResp.MoveTask.toObject(message.moveTask, options);
                if (options.oneofs)
                    object.result = "moveTask";
            }
            return object;
        };

        /**
         * Converts this TaskListsResp to JSON.
         * @function toJSON
         * @memberof protos.TaskListsResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskListsResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Error enum.
         * @name protos.TaskListsResp.Error
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} INVALID_SPACE=1 INVALID_SPACE value
         */
        TaskListsResp.Error = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "INVALID_SPACE"] = 1;
            return values;
        })();

        TaskListsResp.SetTasksOrder = (function() {

            /**
             * Properties of a SetTasksOrder.
             * @memberof protos.TaskListsResp
             * @interface ISetTasksOrder
             * @property {protos.TaskListsResp.SetTasksOrder.Error|null} [error] SetTasksOrder error
             * @property {protos.ITaskList|null} [list] SetTasksOrder list
             */

            /**
             * Constructs a new SetTasksOrder.
             * @memberof protos.TaskListsResp
             * @classdesc Represents a SetTasksOrder.
             * @implements ISetTasksOrder
             * @constructor
             * @param {protos.TaskListsResp.ISetTasksOrder=} [properties] Properties to set
             */
            function SetTasksOrder(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetTasksOrder error.
             * @member {protos.TaskListsResp.SetTasksOrder.Error} error
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @instance
             */
            SetTasksOrder.prototype.error = 0;

            /**
             * SetTasksOrder list.
             * @member {protos.ITaskList|null|undefined} list
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @instance
             */
            SetTasksOrder.prototype.list = null;

            /**
             * Creates a new SetTasksOrder instance using the specified properties.
             * @function create
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @static
             * @param {protos.TaskListsResp.ISetTasksOrder=} [properties] Properties to set
             * @returns {protos.TaskListsResp.SetTasksOrder} SetTasksOrder instance
             */
            SetTasksOrder.create = function create(properties) {
                return new SetTasksOrder(properties);
            };

            /**
             * Encodes the specified SetTasksOrder message. Does not implicitly {@link protos.TaskListsResp.SetTasksOrder.verify|verify} messages.
             * @function encode
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @static
             * @param {protos.TaskListsResp.ISetTasksOrder} message SetTasksOrder message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetTasksOrder.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
                if (message.list != null && Object.hasOwnProperty.call(message, "list"))
                    $root.protos.TaskList.encode(message.list, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a SetTasksOrder message from the specified reader or buffer.
             * @function decode
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protos.TaskListsResp.SetTasksOrder} SetTasksOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetTasksOrder.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskListsResp.SetTasksOrder();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = reader.int32();
                        break;
                    case 2:
                        message.list = $root.protos.TaskList.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Creates a SetTasksOrder message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protos.TaskListsResp.SetTasksOrder} SetTasksOrder
             */
            SetTasksOrder.fromObject = function fromObject(object) {
                if (object instanceof $root.protos.TaskListsResp.SetTasksOrder)
                    return object;
                let message = new $root.protos.TaskListsResp.SetTasksOrder();
                switch (object.error) {
                case "OK":
                case 0:
                    message.error = 0;
                    break;
                case "INVALID_LIST_ID":
                case 1:
                    message.error = 1;
                    break;
                case "INVALID_TASK_IDS":
                case 2:
                    message.error = 2;
                    break;
                }
                if (object.list != null) {
                    if (typeof object.list !== "object")
                        throw TypeError(".protos.TaskListsResp.SetTasksOrder.list: object expected");
                    message.list = $root.protos.TaskList.fromObject(object.list);
                }
                return message;
            };

            /**
             * Creates a plain object from a SetTasksOrder message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @static
             * @param {protos.TaskListsResp.SetTasksOrder} message SetTasksOrder
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetTasksOrder.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.error = options.enums === String ? "OK" : 0;
                    object.list = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = options.enums === String ? $root.protos.TaskListsResp.SetTasksOrder.Error[message.error] : message.error;
                if (message.list != null && message.hasOwnProperty("list"))
                    object.list = $root.protos.TaskList.toObject(message.list, options);
                return object;
            };

            /**
             * Converts this SetTasksOrder to JSON.
             * @function toJSON
             * @memberof protos.TaskListsResp.SetTasksOrder
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetTasksOrder.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Error enum.
             * @name protos.TaskListsResp.SetTasksOrder.Error
             * @enum {number}
             * @property {number} OK=0 OK value
             * @property {number} INVALID_LIST_ID=1 INVALID_LIST_ID value
             * @property {number} INVALID_TASK_IDS=2 INVALID_TASK_IDS value
             */
            SetTasksOrder.Error = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "OK"] = 0;
                values[valuesById[1] = "INVALID_LIST_ID"] = 1;
                values[valuesById[2] = "INVALID_TASK_IDS"] = 2;
                return values;
            })();

            return SetTasksOrder;
        })();

        TaskListsResp.MoveTask = (function() {

            /**
             * Properties of a MoveTask.
             * @memberof protos.TaskListsResp
             * @interface IMoveTask
             * @property {protos.TaskListsResp.MoveTask.Error|null} [error] MoveTask error
             * @property {protos.ISpaceObj|null} [task] MoveTask task
             */

            /**
             * Constructs a new MoveTask.
             * @memberof protos.TaskListsResp
             * @classdesc Represents a MoveTask.
             * @implements IMoveTask
             * @constructor
             * @param {protos.TaskListsResp.IMoveTask=} [properties] Properties to set
             */
            function MoveTask(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MoveTask error.
             * @member {protos.TaskListsResp.MoveTask.Error} error
             * @memberof protos.TaskListsResp.MoveTask
             * @instance
             */
            MoveTask.prototype.error = 0;

            /**
             * MoveTask task.
             * @member {protos.ISpaceObj|null|undefined} task
             * @memberof protos.TaskListsResp.MoveTask
             * @instance
             */
            MoveTask.prototype.task = null;

            /**
             * Creates a new MoveTask instance using the specified properties.
             * @function create
             * @memberof protos.TaskListsResp.MoveTask
             * @static
             * @param {protos.TaskListsResp.IMoveTask=} [properties] Properties to set
             * @returns {protos.TaskListsResp.MoveTask} MoveTask instance
             */
            MoveTask.create = function create(properties) {
                return new MoveTask(properties);
            };

            /**
             * Encodes the specified MoveTask message. Does not implicitly {@link protos.TaskListsResp.MoveTask.verify|verify} messages.
             * @function encode
             * @memberof protos.TaskListsResp.MoveTask
             * @static
             * @param {protos.TaskListsResp.IMoveTask} message MoveTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoveTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
                if (message.task != null && Object.hasOwnProperty.call(message, "task"))
                    $root.protos.SpaceObj.encode(message.task, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a MoveTask message from the specified reader or buffer.
             * @function decode
             * @memberof protos.TaskListsResp.MoveTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protos.TaskListsResp.MoveTask} MoveTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoveTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.TaskListsResp.MoveTask();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = reader.int32();
                        break;
                    case 2:
                        message.task = $root.protos.SpaceObj.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Creates a MoveTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protos.TaskListsResp.MoveTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protos.TaskListsResp.MoveTask} MoveTask
             */
            MoveTask.fromObject = function fromObject(object) {
                if (object instanceof $root.protos.TaskListsResp.MoveTask)
                    return object;
                let message = new $root.protos.TaskListsResp.MoveTask();
                switch (object.error) {
                case "OK":
                case 0:
                    message.error = 0;
                    break;
                case "INVALID_LIST_ID":
                case 1:
                    message.error = 1;
                    break;
                case "INVALID_TASK_ID":
                case 2:
                    message.error = 2;
                    break;
                case "MISMATCHED_CURRENT_LIST_ID":
                case 3:
                    message.error = 3;
                    break;
                }
                if (object.task != null) {
                    if (typeof object.task !== "object")
                        throw TypeError(".protos.TaskListsResp.MoveTask.task: object expected");
                    message.task = $root.protos.SpaceObj.fromObject(object.task);
                }
                return message;
            };

            /**
             * Creates a plain object from a MoveTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protos.TaskListsResp.MoveTask
             * @static
             * @param {protos.TaskListsResp.MoveTask} message MoveTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MoveTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.error = options.enums === String ? "OK" : 0;
                    object.task = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = options.enums === String ? $root.protos.TaskListsResp.MoveTask.Error[message.error] : message.error;
                if (message.task != null && message.hasOwnProperty("task"))
                    object.task = $root.protos.SpaceObj.toObject(message.task, options);
                return object;
            };

            /**
             * Converts this MoveTask to JSON.
             * @function toJSON
             * @memberof protos.TaskListsResp.MoveTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MoveTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Error enum.
             * @name protos.TaskListsResp.MoveTask.Error
             * @enum {number}
             * @property {number} OK=0 OK value
             * @property {number} INVALID_LIST_ID=1 INVALID_LIST_ID value
             * @property {number} INVALID_TASK_ID=2 INVALID_TASK_ID value
             * @property {number} MISMATCHED_CURRENT_LIST_ID=3 MISMATCHED_CURRENT_LIST_ID value
             */
            MoveTask.Error = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "OK"] = 0;
                values[valuesById[1] = "INVALID_LIST_ID"] = 1;
                values[valuesById[2] = "INVALID_TASK_ID"] = 2;
                values[valuesById[3] = "MISMATCHED_CURRENT_LIST_ID"] = 3;
                return values;
            })();

            return MoveTask;
        })();

        return TaskListsResp;
    })();

    return protos;
})();

export { $root as default };
