import { HTTPResponse } from './HTTPResponse';

function generateServerError(status: number, body: any = {}): Promise<HTTPResponse> {
  return new Promise((resolve) => {
    process.nextTick(() => resolve({ status, body }));
  });
}

export const InternalServerError = (body: any) => generateServerError(500, body);
export const NotImplemented = (body: any) => generateServerError(501, body);
export const BadGateway = (body: any) => generateServerError(502, body);
export const ServiceUnavailable = (body: any) => generateServerError(503, body);
export const GatewayTimeout = (body: any) => generateServerError(504, body);
export const HTTPVersionNotSupported = (body: any) => generateServerError(505, body);
