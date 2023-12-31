import { encode, TAlgorithm } from "jwt-simple";
import { PartialSession } from "../types/custom.types";
import { Session, EncodeResult } from "../types/interface.types";

export const encodeSession = async (
  secretKey: string,
  partialSession: PartialSession
) => {
  const algorithm: TAlgorithm = "HS512";

  const issued = Date.now();
  const expires = issued + 86400;
  const session: Session = {
    ...partialSession,
    issued: issued,
    expires: expires
  };

  const encoded: EncodeResult = {
    token: encode(session, secretKey, algorithm),
    issued: issued,
    expires: expires
  };

  return encoded;
};
