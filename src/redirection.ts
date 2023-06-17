import { HTTPResponse } from './HTTPResponse';

function generateRedirection(status: number, body: any = {}): Promise<HTTPResponse> {
  return new Promise((resolve) => {
    process.nextTick(() => resolve({ status, body }));
  });
}

export const MultipleChoices = (body: any) => generateRedirection(300, body);
export const MovedPermanently = (body: any) => generateRedirection(301, body);
export const Found = (body: any) => generateRedirection(302, body);
export const SeeOther = (body: any) => generateRedirection(303, body);
export const NotModified = () => generateRedirection(304);
export const UseProxy = (body: any) => generateRedirection(305, body);
export const TemporaryRedirect = (body: any) => generateRedirection(307, body);
export const PermanentRedirect = (body: any) => generateRedirection(308, body);
