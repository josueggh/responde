import { HTTPResponse } from './HTTPResponse';

export function IntermittentError(errorRate: number, successResponse: HTTPResponse, errorResponse: HTTPResponse): Promise<HTTPResponse> {
  const randomValue = Math.random();
  if (randomValue < errorRate) {
    return Promise.resolve(errorResponse);
  } else {
    return Promise.resolve(successResponse);
  }
}
