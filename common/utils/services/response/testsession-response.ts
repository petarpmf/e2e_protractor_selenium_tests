export class TestSessionResponse {
  inactivityTime: number;
  internalKey: any;
  msg: string;
  proxyId: string;
  session: string;
  success: boolean;

  constructor(userResponse: any) {
     this.inactivityTime = userResponse.inactivityTime;
     this.internalKey = userResponse.internalKey;
     this.msg = userResponse.msg;
     this.proxyId = userResponse.proxyId;
     this.session = userResponse.session;
     this.success = userResponse.success;
  }
}