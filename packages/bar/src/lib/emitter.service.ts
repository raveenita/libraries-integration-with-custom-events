export class EmitterService {
    public emit() {
      const payload = { message: 'Hello World!' };

      const customEvent = new CustomEvent('CALL_FOO', { detail: payload });

      window.dispatchEvent(customEvent);
    }
}
