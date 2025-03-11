export class Interceptors {
    constructor() {
        Object.defineProperty(this, "_fns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._fns = [];
    }
    eject(fn) {
        const index = this._fns.indexOf(fn);
        if (index !== -1) {
            this._fns = [...this._fns.slice(0, index), ...this._fns.slice(index + 1)];
        }
    }
    use(fn) {
        this._fns = [...this._fns, fn];
    }
}
export const OpenAPI = {
    BASE: "",
    CREDENTIALS: "include",
    ENCODE_PATH: undefined,
    HEADERS: undefined,
    PASSWORD: undefined,
    TOKEN: undefined,
    USERNAME: undefined,
    VERSION: "0.0.1",
    WITH_CREDENTIALS: false,
    interceptors: {
        request: new Interceptors(),
        response: new Interceptors(),
    },
};
