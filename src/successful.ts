import { HTTPResponse } from './HTTPResponse';

function generateSuccess(status: number, body: any = {}): Promise<HTTPResponse> {
  return new Promise((resolve) => {
    process.nextTick(() => resolve({ status, body }));
  });
}

const OK = (body: any) => generateSuccess(200, body);
const Created = (body: any) => generateSuccess(201, body);
const Accepted = (body: any) => generateSuccess(202, body);
const NonAuthoritativeInformation = (body: any) => generateSuccess(203, body);
const NoContent = () => generateSuccess(204);
const ResetContent = () => generateSuccess(205);
const PartialContent = (body: any) => generateSuccess(206, body);

export {
  OK,
  Created,
  Accepted,
  NonAuthoritativeInformation,
  NoContent,
  ResetContent,
  PartialContent,
};
