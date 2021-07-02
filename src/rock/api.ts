import { config } from './config';
import { protos } from './protos';

function errorText(code: protos.APIResponse.Error) {
  switch (code) {
    case protos.APIResponse.Error.INVALID_METHOD:
      return 'Invalid method.';
    case protos.APIResponse.Error.INVALID_ACCESS_TOKEN:
      return 'Not authenticated.';
    default:
      return 'Request failed.';
  }
}

class ApiError extends Error {
  constructor(readonly code: protos.APIResponse.Error) {
    super(errorText(code));
  }
}

class ApiClient {
  async taskLists(req: protos.TaskListsReq): Promise<protos.TaskListsResp> {
    const res = await this.post(protos.APIRequest.create({ taskLists: req, accessToken: config.accessToken }));
    return res.taskLists as protos.TaskListsResp;
  }
  async objs(req: protos.ObjsReq): Promise<protos.ObjsResp> {
    const res = await this.post(protos.APIRequest.create({ objs: req, accessToken: config.accessToken }));
    return res.objs as protos.ObjsResp;
  }

  protected async post(req: protos.APIRequest): Promise<protos.APIResponse> {
    const httpResponse = await window.fetch(config.endpoint, {
      method: 'POST',
      body: protos.APIRequest.encode(req).finish(),
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    });
    const buf = await httpResponse.arrayBuffer();
    const res = protos.APIResponse.decode(new Uint8Array(buf));

    if (res.error === protos.APIResponse.Error.OK) {
      return res;
    }

    throw new ApiError(res.error);
  }
}

export const api = new ApiClient();
