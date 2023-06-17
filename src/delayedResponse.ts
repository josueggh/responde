import { HTTPResponse } from './HTTPResponse';

export function DelayedResponse(delay: number, response: HTTPResponse): Promise<HTTPResponse> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), delay);
  });
}
