import { HTTPResponse } from './HTTPResponse';
function generateClientError(status: number, body: any = {}): Promise<HTTPResponse> {
  return new Promise((resolve) => {
    process.nextTick(() => resolve({ status, body }));
  });
}

export const BadRequest = (body: any) => generateClientError(400, body);
export const Unauthorized = (body: any) => generateClientError(401, body);
export const PaymentRequired = (body: any) => generateClientError(402, body);
export const Forbidden = (body: any) => generateClientError(403, body);
export const NotFound = (body: any) => generateClientError(404, body);
export const MethodNotAllowed = (body: any) => generateClientError(405, body);
export const NotAcceptable = (body: any) => generateClientError(406, body);
export const ProxyAuthenticationRequired = (body: any) => generateClientError(407, body);
export const RequestTimeout = (body: any) => generateClientError(408, body);
export const Conflict = (body: any) => generateClientError(409, body);
export const Gone = (body: any) => generateClientError(410, body);
