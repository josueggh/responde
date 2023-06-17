import { HTTPResponse } from './HTTPResponse';

function generateInformational(status: number, body: any = {}): Promise<HTTPResponse> {
  return new Promise((resolve) => {
    process.nextTick(() => resolve({status, body}));
  });
}

export const Continue = (body: any) => generateInformational(100, body);
export const SwitchingProtocols = (body: any) => generateInformational(101, body);
export const Processing = (body: any) => generateInformational(102, body);
export const EarlyHints = (body: any) => generateInformational(103, body);
