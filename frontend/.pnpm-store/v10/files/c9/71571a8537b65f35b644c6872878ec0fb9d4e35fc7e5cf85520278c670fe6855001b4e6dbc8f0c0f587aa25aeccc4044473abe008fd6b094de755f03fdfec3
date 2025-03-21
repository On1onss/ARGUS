type Fn = (rect: DOMRect) => void;
type Measurable = {
    getBoundingClientRect(): DOMRect;
};
declare function observeElementRect(el: Measurable, fn: Fn): () => void;

export { Measurable, observeElementRect };
