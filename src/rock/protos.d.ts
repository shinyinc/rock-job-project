import * as $protobuf from "protobufjs";
/** Namespace protos. */
export namespace protos {

    /** SpaceApp enum. */
    enum SpaceApp {
        NOT_AN_APP = 0,
        TASKS = 1,
        NOTES = 2,
        FILES = 3
    }

    /** Properties of an ObjId. */
    interface IObjId {

        /** ObjId app */
        app?: (protos.SpaceApp|null);

        /** ObjId id */
        id?: (number|null);
    }

    /** Represents an ObjId. */
    class ObjId implements IObjId {

        /**
         * Constructs a new ObjId.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IObjId);

        /** ObjId app. */
        public app: protos.SpaceApp;

        /** ObjId id. */
        public id: number;

        /**
         * Creates a new ObjId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjId instance
         */
        public static create(properties?: protos.IObjId): protos.ObjId;

        /**
         * Encodes the specified ObjId message. Does not implicitly {@link protos.ObjId.verify|verify} messages.
         * @param message ObjId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IObjId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ObjId;

        /**
         * Creates an ObjId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjId
         */
        public static fromObject(object: { [k: string]: any }): protos.ObjId;

        /**
         * Creates a plain object from an ObjId message. Also converts values to other types if specified.
         * @param message ObjId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ObjId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObjIds. */
    interface IObjIds {

        /** ObjIds app */
        app?: (protos.SpaceApp|null);

        /** ObjIds ids */
        ids?: (number[]|null);
    }

    /** Represents an ObjIds. */
    class ObjIds implements IObjIds {

        /**
         * Constructs a new ObjIds.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IObjIds);

        /** ObjIds app. */
        public app: protos.SpaceApp;

        /** ObjIds ids. */
        public ids: number[];

        /**
         * Creates a new ObjIds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjIds instance
         */
        public static create(properties?: protos.IObjIds): protos.ObjIds;

        /**
         * Encodes the specified ObjIds message. Does not implicitly {@link protos.ObjIds.verify|verify} messages.
         * @param message ObjIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IObjIds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjIds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ObjIds;

        /**
         * Creates an ObjIds message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjIds
         */
        public static fromObject(object: { [k: string]: any }): protos.ObjIds;

        /**
         * Creates a plain object from an ObjIds message. Also converts values to other types if specified.
         * @param message ObjIds
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ObjIds, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjIds to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IdObjMap. */
    interface IIdObjMap {

        /** IdObjMap objs */
        objs?: ({ [k: string]: protos.ISpaceObj }|null);
    }

    /** Represents an IdObjMap. */
    class IdObjMap implements IIdObjMap {

        /**
         * Constructs a new IdObjMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IIdObjMap);

        /** IdObjMap objs. */
        public objs: { [k: string]: protos.ISpaceObj };

        /**
         * Creates a new IdObjMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdObjMap instance
         */
        public static create(properties?: protos.IIdObjMap): protos.IdObjMap;

        /**
         * Encodes the specified IdObjMap message. Does not implicitly {@link protos.IdObjMap.verify|verify} messages.
         * @param message IdObjMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IIdObjMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdObjMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdObjMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.IdObjMap;

        /**
         * Creates an IdObjMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdObjMap
         */
        public static fromObject(object: { [k: string]: any }): protos.IdObjMap;

        /**
         * Creates a plain object from an IdObjMap message. Also converts values to other types if specified.
         * @param message IdObjMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.IdObjMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdObjMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Uint32Ids. */
    interface IUint32Ids {

        /** Uint32Ids ids */
        ids?: (number[]|null);
    }

    /** Represents an Uint32Ids. */
    class Uint32Ids implements IUint32Ids {

        /**
         * Constructs a new Uint32Ids.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IUint32Ids);

        /** Uint32Ids ids. */
        public ids: number[];

        /**
         * Creates a new Uint32Ids instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Uint32Ids instance
         */
        public static create(properties?: protos.IUint32Ids): protos.Uint32Ids;

        /**
         * Encodes the specified Uint32Ids message. Does not implicitly {@link protos.Uint32Ids.verify|verify} messages.
         * @param message Uint32Ids message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IUint32Ids, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Uint32Ids message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Uint32Ids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.Uint32Ids;

        /**
         * Creates an Uint32Ids message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Uint32Ids
         */
        public static fromObject(object: { [k: string]: any }): protos.Uint32Ids;

        /**
         * Creates a plain object from an Uint32Ids message. Also converts values to other types if specified.
         * @param message Uint32Ids
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.Uint32Ids, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Uint32Ids to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskList. */
    interface ITaskList {

        /** TaskList id */
        id?: (number|null);

        /** TaskList name */
        name?: (string|null);

        /** TaskList color */
        color?: (number|null);

        /** TaskList completed */
        completed?: (boolean|null);

        /** TaskList ver */
        ver?: (number|null);

        /** TaskList taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a TaskList. */
    class TaskList implements ITaskList {

        /**
         * Constructs a new TaskList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ITaskList);

        /** TaskList id. */
        public id: number;

        /** TaskList name. */
        public name: string;

        /** TaskList color. */
        public color: number;

        /** TaskList completed. */
        public completed: boolean;

        /** TaskList ver. */
        public ver: number;

        /** TaskList taskIds. */
        public taskIds: number[];

        /**
         * Creates a new TaskList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskList instance
         */
        public static create(properties?: protos.ITaskList): protos.TaskList;

        /**
         * Encodes the specified TaskList message. Does not implicitly {@link protos.TaskList.verify|verify} messages.
         * @param message TaskList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ITaskList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskList;

        /**
         * Creates a TaskList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskList
         */
        public static fromObject(object: { [k: string]: any }): protos.TaskList;

        /**
         * Creates a plain object from a TaskList message. Also converts values to other types if specified.
         * @param message TaskList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.TaskList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskLists. */
    interface ITaskLists {

        /** TaskLists lists */
        lists?: (protos.ITaskList[]|null);
    }

    /** Represents a TaskLists. */
    class TaskLists implements ITaskLists {

        /**
         * Constructs a new TaskLists.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ITaskLists);

        /** TaskLists lists. */
        public lists: protos.ITaskList[];

        /**
         * Creates a new TaskLists instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskLists instance
         */
        public static create(properties?: protos.ITaskLists): protos.TaskLists;

        /**
         * Encodes the specified TaskLists message. Does not implicitly {@link protos.TaskLists.verify|verify} messages.
         * @param message TaskLists message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ITaskLists, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskLists message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskLists
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskLists;

        /**
         * Creates a TaskLists message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskLists
         */
        public static fromObject(object: { [k: string]: any }): protos.TaskLists;

        /**
         * Creates a plain object from a TaskLists message. Also converts values to other types if specified.
         * @param message TaskLists
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.TaskLists, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskLists to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Task. */
    interface ITask {

        /** Task title */
        title?: (string|null);

        /** Task listId */
        listId?: (number|null);

        /** Task body */
        body?: (string|null);

        /** Task priority */
        priority?: (number|null);
    }

    /** Represents a Task. */
    class Task implements ITask {

        /**
         * Constructs a new Task.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ITask);

        /** Task title. */
        public title: string;

        /** Task listId. */
        public listId: number;

        /** Task body. */
        public body: string;

        /** Task priority. */
        public priority: number;

        /**
         * Creates a new Task instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Task instance
         */
        public static create(properties?: protos.ITask): protos.Task;

        /**
         * Encodes the specified Task message. Does not implicitly {@link protos.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.Task;

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Task
         */
        public static fromObject(object: { [k: string]: any }): protos.Task;

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @param message Task
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Task to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpaceObj. */
    interface ISpaceObj {

        /** SpaceObj id */
        id?: (number|null);

        /** SpaceObj app */
        app?: (protos.SpaceApp|null);

        /** SpaceObj comments */
        comments?: (number|null);

        /** SpaceObj ver */
        ver?: (number|null);

        /** SpaceObj task */
        task?: (protos.ITask|null);
    }

    /** Represents a SpaceObj. */
    class SpaceObj implements ISpaceObj {

        /**
         * Constructs a new SpaceObj.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ISpaceObj);

        /** SpaceObj id. */
        public id: number;

        /** SpaceObj app. */
        public app: protos.SpaceApp;

        /** SpaceObj comments. */
        public comments: number;

        /** SpaceObj ver. */
        public ver: number;

        /** SpaceObj task. */
        public task?: (protos.ITask|null);

        /** SpaceObj data. */
        public data?: "task";

        /**
         * Creates a new SpaceObj instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpaceObj instance
         */
        public static create(properties?: protos.ISpaceObj): protos.SpaceObj;

        /**
         * Encodes the specified SpaceObj message. Does not implicitly {@link protos.SpaceObj.verify|verify} messages.
         * @param message SpaceObj message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ISpaceObj, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpaceObj message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpaceObj
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.SpaceObj;

        /**
         * Creates a SpaceObj message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpaceObj
         */
        public static fromObject(object: { [k: string]: any }): protos.SpaceObj;

        /**
         * Creates a plain object from a SpaceObj message. Also converts values to other types if specified.
         * @param message SpaceObj
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.SpaceObj, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpaceObj to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a APIRequest. */
    interface IAPIRequest {

        /** APIRequest id */
        id?: (number|null);

        /** APIRequest accessToken */
        accessToken?: (Uint8Array|null);

        /** APIRequest objs */
        objs?: (protos.IObjsReq|null);

        /** APIRequest taskLists */
        taskLists?: (protos.ITaskListsReq|null);
    }

    /** Represents a APIRequest. */
    class APIRequest implements IAPIRequest {

        /**
         * Constructs a new APIRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IAPIRequest);

        /** APIRequest id. */
        public id: number;

        /** APIRequest accessToken. */
        public accessToken: Uint8Array;

        /** APIRequest objs. */
        public objs?: (protos.IObjsReq|null);

        /** APIRequest taskLists. */
        public taskLists?: (protos.ITaskListsReq|null);

        /** APIRequest request. */
        public request?: ("objs"|"taskLists");

        /**
         * Creates a new APIRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns APIRequest instance
         */
        public static create(properties?: protos.IAPIRequest): protos.APIRequest;

        /**
         * Encodes the specified APIRequest message. Does not implicitly {@link protos.APIRequest.verify|verify} messages.
         * @param message APIRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IAPIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a APIRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns APIRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.APIRequest;

        /**
         * Creates a APIRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns APIRequest
         */
        public static fromObject(object: { [k: string]: any }): protos.APIRequest;

        /**
         * Creates a plain object from a APIRequest message. Also converts values to other types if specified.
         * @param message APIRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.APIRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this APIRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a APIResponse. */
    interface IAPIResponse {

        /** APIResponse id */
        id?: (number|null);

        /** APIResponse error */
        error?: (protos.APIResponse.Error|null);

        /** APIResponse objs */
        objs?: (protos.IObjsResp|null);

        /** APIResponse taskLists */
        taskLists?: (protos.ITaskListsResp|null);
    }

    /** Represents a APIResponse. */
    class APIResponse implements IAPIResponse {

        /**
         * Constructs a new APIResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IAPIResponse);

        /** APIResponse id. */
        public id: number;

        /** APIResponse error. */
        public error: protos.APIResponse.Error;

        /** APIResponse objs. */
        public objs?: (protos.IObjsResp|null);

        /** APIResponse taskLists. */
        public taskLists?: (protos.ITaskListsResp|null);

        /** APIResponse response. */
        public response?: ("objs"|"taskLists");

        /**
         * Creates a new APIResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns APIResponse instance
         */
        public static create(properties?: protos.IAPIResponse): protos.APIResponse;

        /**
         * Encodes the specified APIResponse message. Does not implicitly {@link protos.APIResponse.verify|verify} messages.
         * @param message APIResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IAPIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a APIResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns APIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.APIResponse;

        /**
         * Creates a APIResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns APIResponse
         */
        public static fromObject(object: { [k: string]: any }): protos.APIResponse;

        /**
         * Creates a plain object from a APIResponse message. Also converts values to other types if specified.
         * @param message APIResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.APIResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this APIResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace APIResponse {

        /** Error enum. */
        enum Error {
            OK = 0,
            INVALID_ACCESS_TOKEN = 1,
            INVALID_METHOD = 2,
            INVALID_REQUEST = 3
        }
    }

    /** Properties of an ObjsReq. */
    interface IObjsReq {

        /** ObjsReq spaceId */
        spaceId?: (string|null);

        /** ObjsReq get */
        get?: (protos.IObjId|null);

        /** ObjsReq getMany */
        getMany?: (protos.IObjIds|null);
    }

    /** Represents an ObjsReq. */
    class ObjsReq implements IObjsReq {

        /**
         * Constructs a new ObjsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IObjsReq);

        /** ObjsReq spaceId. */
        public spaceId: string;

        /** ObjsReq get. */
        public get?: (protos.IObjId|null);

        /** ObjsReq getMany. */
        public getMany?: (protos.IObjIds|null);

        /** ObjsReq method. */
        public method?: ("get"|"getMany");

        /**
         * Creates a new ObjsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjsReq instance
         */
        public static create(properties?: protos.IObjsReq): protos.ObjsReq;

        /**
         * Encodes the specified ObjsReq message. Does not implicitly {@link protos.ObjsReq.verify|verify} messages.
         * @param message ObjsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IObjsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ObjsReq;

        /**
         * Creates an ObjsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjsReq
         */
        public static fromObject(object: { [k: string]: any }): protos.ObjsReq;

        /**
         * Creates a plain object from an ObjsReq message. Also converts values to other types if specified.
         * @param message ObjsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ObjsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObjsResp. */
    interface IObjsResp {

        /** ObjsResp error */
        error?: (protos.ObjsResp.Error|null);

        /** ObjsResp get */
        get?: (protos.ISpaceObj|null);

        /** ObjsResp getMany */
        getMany?: (protos.IIdObjMap|null);
    }

    /** Represents an ObjsResp. */
    class ObjsResp implements IObjsResp {

        /**
         * Constructs a new ObjsResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IObjsResp);

        /** ObjsResp error. */
        public error: protos.ObjsResp.Error;

        /** ObjsResp get. */
        public get?: (protos.ISpaceObj|null);

        /** ObjsResp getMany. */
        public getMany?: (protos.IIdObjMap|null);

        /** ObjsResp result. */
        public result?: ("get"|"getMany");

        /**
         * Creates a new ObjsResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjsResp instance
         */
        public static create(properties?: protos.IObjsResp): protos.ObjsResp;

        /**
         * Encodes the specified ObjsResp message. Does not implicitly {@link protos.ObjsResp.verify|verify} messages.
         * @param message ObjsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IObjsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjsResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ObjsResp;

        /**
         * Creates an ObjsResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjsResp
         */
        public static fromObject(object: { [k: string]: any }): protos.ObjsResp;

        /**
         * Creates a plain object from an ObjsResp message. Also converts values to other types if specified.
         * @param message ObjsResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ObjsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjsResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ObjsResp {

        /** Error enum. */
        enum Error {
            OK = 0,
            INVALID_SPACE = 1,
            INVALID_OBJ_ID = 2
        }
    }

    /** Properties of a TaskListsReq. */
    interface ITaskListsReq {

        /** TaskListsReq spaceId */
        spaceId?: (string|null);

        /** TaskListsReq getAll */
        getAll?: (boolean|null);

        /** TaskListsReq setTasksOrder */
        setTasksOrder?: (protos.TaskListsReq.ISetTasksOrder|null);

        /** TaskListsReq moveTask */
        moveTask?: (protos.TaskListsReq.IMoveTask|null);
    }

    /** Represents a TaskListsReq. */
    class TaskListsReq implements ITaskListsReq {

        /**
         * Constructs a new TaskListsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ITaskListsReq);

        /** TaskListsReq spaceId. */
        public spaceId: string;

        /** TaskListsReq getAll. */
        public getAll?: (boolean|null);

        /** TaskListsReq setTasksOrder. */
        public setTasksOrder?: (protos.TaskListsReq.ISetTasksOrder|null);

        /** TaskListsReq moveTask. */
        public moveTask?: (protos.TaskListsReq.IMoveTask|null);

        /** TaskListsReq method. */
        public method?: ("getAll"|"setTasksOrder"|"moveTask");

        /**
         * Creates a new TaskListsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskListsReq instance
         */
        public static create(properties?: protos.ITaskListsReq): protos.TaskListsReq;

        /**
         * Encodes the specified TaskListsReq message. Does not implicitly {@link protos.TaskListsReq.verify|verify} messages.
         * @param message TaskListsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ITaskListsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskListsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskListsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskListsReq;

        /**
         * Creates a TaskListsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskListsReq
         */
        public static fromObject(object: { [k: string]: any }): protos.TaskListsReq;

        /**
         * Creates a plain object from a TaskListsReq message. Also converts values to other types if specified.
         * @param message TaskListsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.TaskListsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskListsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace TaskListsReq {

        /** Properties of a SetTasksOrder. */
        interface ISetTasksOrder {

            /** SetTasksOrder listId */
            listId?: (number|null);

            /** SetTasksOrder tasksIds */
            tasksIds?: (number[]|null);
        }

        /** Represents a SetTasksOrder. */
        class SetTasksOrder implements ISetTasksOrder {

            /**
             * Constructs a new SetTasksOrder.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.TaskListsReq.ISetTasksOrder);

            /** SetTasksOrder listId. */
            public listId: number;

            /** SetTasksOrder tasksIds. */
            public tasksIds: number[];

            /**
             * Creates a new SetTasksOrder instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetTasksOrder instance
             */
            public static create(properties?: protos.TaskListsReq.ISetTasksOrder): protos.TaskListsReq.SetTasksOrder;

            /**
             * Encodes the specified SetTasksOrder message. Does not implicitly {@link protos.TaskListsReq.SetTasksOrder.verify|verify} messages.
             * @param message SetTasksOrder message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.TaskListsReq.ISetTasksOrder, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetTasksOrder message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetTasksOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskListsReq.SetTasksOrder;

            /**
             * Creates a SetTasksOrder message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetTasksOrder
             */
            public static fromObject(object: { [k: string]: any }): protos.TaskListsReq.SetTasksOrder;

            /**
             * Creates a plain object from a SetTasksOrder message. Also converts values to other types if specified.
             * @param message SetTasksOrder
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.TaskListsReq.SetTasksOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetTasksOrder to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MoveTask. */
        interface IMoveTask {

            /** MoveTask taskId */
            taskId?: (number|null);

            /** MoveTask currentListId */
            currentListId?: (number|null);

            /** MoveTask targetListId */
            targetListId?: (number|null);

            /** MoveTask listIndex */
            listIndex?: (number|null);
        }

        /** Represents a MoveTask. */
        class MoveTask implements IMoveTask {

            /**
             * Constructs a new MoveTask.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.TaskListsReq.IMoveTask);

            /** MoveTask taskId. */
            public taskId: number;

            /** MoveTask currentListId. */
            public currentListId: number;

            /** MoveTask targetListId. */
            public targetListId: number;

            /** MoveTask listIndex. */
            public listIndex: number;

            /**
             * Creates a new MoveTask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveTask instance
             */
            public static create(properties?: protos.TaskListsReq.IMoveTask): protos.TaskListsReq.MoveTask;

            /**
             * Encodes the specified MoveTask message. Does not implicitly {@link protos.TaskListsReq.MoveTask.verify|verify} messages.
             * @param message MoveTask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.TaskListsReq.IMoveTask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveTask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoveTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskListsReq.MoveTask;

            /**
             * Creates a MoveTask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveTask
             */
            public static fromObject(object: { [k: string]: any }): protos.TaskListsReq.MoveTask;

            /**
             * Creates a plain object from a MoveTask message. Also converts values to other types if specified.
             * @param message MoveTask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.TaskListsReq.MoveTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveTask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a TaskListsResp. */
    interface ITaskListsResp {

        /** TaskListsResp error */
        error?: (protos.TaskListsResp.Error|null);

        /** TaskListsResp getAll */
        getAll?: (protos.ITaskLists|null);

        /** TaskListsResp setTasksOrder */
        setTasksOrder?: (protos.TaskListsResp.ISetTasksOrder|null);

        /** TaskListsResp moveTask */
        moveTask?: (protos.TaskListsResp.IMoveTask|null);
    }

    /** Represents a TaskListsResp. */
    class TaskListsResp implements ITaskListsResp {

        /**
         * Constructs a new TaskListsResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ITaskListsResp);

        /** TaskListsResp error. */
        public error: protos.TaskListsResp.Error;

        /** TaskListsResp getAll. */
        public getAll?: (protos.ITaskLists|null);

        /** TaskListsResp setTasksOrder. */
        public setTasksOrder?: (protos.TaskListsResp.ISetTasksOrder|null);

        /** TaskListsResp moveTask. */
        public moveTask?: (protos.TaskListsResp.IMoveTask|null);

        /** TaskListsResp result. */
        public result?: ("getAll"|"setTasksOrder"|"moveTask");

        /**
         * Creates a new TaskListsResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskListsResp instance
         */
        public static create(properties?: protos.ITaskListsResp): protos.TaskListsResp;

        /**
         * Encodes the specified TaskListsResp message. Does not implicitly {@link protos.TaskListsResp.verify|verify} messages.
         * @param message TaskListsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ITaskListsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskListsResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskListsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskListsResp;

        /**
         * Creates a TaskListsResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskListsResp
         */
        public static fromObject(object: { [k: string]: any }): protos.TaskListsResp;

        /**
         * Creates a plain object from a TaskListsResp message. Also converts values to other types if specified.
         * @param message TaskListsResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.TaskListsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskListsResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace TaskListsResp {

        /** Error enum. */
        enum Error {
            OK = 0,
            INVALID_SPACE = 1
        }

        /** Properties of a SetTasksOrder. */
        interface ISetTasksOrder {

            /** SetTasksOrder error */
            error?: (protos.TaskListsResp.SetTasksOrder.Error|null);

            /** SetTasksOrder list */
            list?: (protos.ITaskList|null);
        }

        /** Represents a SetTasksOrder. */
        class SetTasksOrder implements ISetTasksOrder {

            /**
             * Constructs a new SetTasksOrder.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.TaskListsResp.ISetTasksOrder);

            /** SetTasksOrder error. */
            public error: protos.TaskListsResp.SetTasksOrder.Error;

            /** SetTasksOrder list. */
            public list?: (protos.ITaskList|null);

            /**
             * Creates a new SetTasksOrder instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetTasksOrder instance
             */
            public static create(properties?: protos.TaskListsResp.ISetTasksOrder): protos.TaskListsResp.SetTasksOrder;

            /**
             * Encodes the specified SetTasksOrder message. Does not implicitly {@link protos.TaskListsResp.SetTasksOrder.verify|verify} messages.
             * @param message SetTasksOrder message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.TaskListsResp.ISetTasksOrder, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetTasksOrder message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetTasksOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskListsResp.SetTasksOrder;

            /**
             * Creates a SetTasksOrder message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetTasksOrder
             */
            public static fromObject(object: { [k: string]: any }): protos.TaskListsResp.SetTasksOrder;

            /**
             * Creates a plain object from a SetTasksOrder message. Also converts values to other types if specified.
             * @param message SetTasksOrder
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.TaskListsResp.SetTasksOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetTasksOrder to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SetTasksOrder {

            /** Error enum. */
            enum Error {
                OK = 0,
                INVALID_LIST_ID = 1,
                INVALID_TASK_IDS = 2
            }
        }

        /** Properties of a MoveTask. */
        interface IMoveTask {

            /** MoveTask error */
            error?: (protos.TaskListsResp.MoveTask.Error|null);

            /** MoveTask task */
            task?: (protos.ISpaceObj|null);
        }

        /** Represents a MoveTask. */
        class MoveTask implements IMoveTask {

            /**
             * Constructs a new MoveTask.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.TaskListsResp.IMoveTask);

            /** MoveTask error. */
            public error: protos.TaskListsResp.MoveTask.Error;

            /** MoveTask task. */
            public task?: (protos.ISpaceObj|null);

            /**
             * Creates a new MoveTask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveTask instance
             */
            public static create(properties?: protos.TaskListsResp.IMoveTask): protos.TaskListsResp.MoveTask;

            /**
             * Encodes the specified MoveTask message. Does not implicitly {@link protos.TaskListsResp.MoveTask.verify|verify} messages.
             * @param message MoveTask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.TaskListsResp.IMoveTask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveTask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoveTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.TaskListsResp.MoveTask;

            /**
             * Creates a MoveTask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveTask
             */
            public static fromObject(object: { [k: string]: any }): protos.TaskListsResp.MoveTask;

            /**
             * Creates a plain object from a MoveTask message. Also converts values to other types if specified.
             * @param message MoveTask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.TaskListsResp.MoveTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveTask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MoveTask {

            /** Error enum. */
            enum Error {
                OK = 0,
                INVALID_LIST_ID = 1,
                INVALID_TASK_ID = 2,
                MISMATCHED_CURRENT_LIST_ID = 3
            }
        }
    }
}
