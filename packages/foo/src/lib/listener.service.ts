export class ListenerService {
    constructor() {
      this.receive();
    }

  public receive() {
    window.addEventListener('CALL_FOO', (event) => {
      console.log('Received event', event);
  });
  }
}
