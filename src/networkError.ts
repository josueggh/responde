
import { HTTPResponse } from './HTTPResponse';

export function NetworkError(): Promise<HTTPResponse> {
  return new Promise((_, reject) => {
    process.nextTick(() => reject(new Error('Network Error')));
  });
}
