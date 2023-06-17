export function MalformedResponse(): Promise<string> {
  const malformedResponse = '{"thisIs": "a malformed JSON string" missingClosingBrace';
  return Promise.resolve(malformedResponse);
}
