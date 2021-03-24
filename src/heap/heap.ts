export default abstract class Heap {
    protected _size: number = 0;
    public get size() {
        return this._size;
    }

    protected heapArray: number[] = [];

    constructor(initialValues: number[]) {
        for (let i = 0; i < initialValues.length; i++) {
            this.add(initialValues[i]);
        }
    }

    protected abstract heapfyDown(): void;
    protected abstract heapfyUp(): void;

    public toString(): string {
        let toReturn = "";

        for (let i = 0; i < this.size; ++i) {
            toReturn += this.heapArray[i] + " ";
        }

        toReturn += "\n";

        return toReturn;
    }

    protected add(newValue: number) {
        this.heapArray[this._size] = newValue;
        this._size++;
        this.heapfyUp();
    }

    public peek(): number {
        return this.heapArray[0];
    }

    public poll(): number {
        const toReturn = this.heapArray[0];
        this.heapArray[0] = this.heapArray[this._size - 1];
        this._size--;
        this.heapfyDown();
        return toReturn;
    }

    protected getParentIndex(index: number) {
        return Math.floor((index - 1)/2);
    }

    protected getLeftIndex(index: number) {
        return index * 2 + 1;
    }

    protected getRightIndex(index: number) {
        return index * 2 + 2;
    }

    protected hasLeftChild(index: number) {
        return this.getLeftIndex(index) <= this._size;
    }

    protected hasRightChild(index: number) {
        return this.getRightIndex(index) <= this._size;
    }

    protected hasParent(index: number) {
        return index > 0;
    }

    protected getLeftChild(index: number) {
        return this.heapArray[this.getLeftIndex(index)];
    }

    protected getRightChild(index: number) {
        return this.heapArray[this.getRightIndex(index)];
    }

    protected getParent(index: number) {
        return this.heapArray[this.getParentIndex(index)];
    }

    protected swap(indexOne: number, indexTwo: number) {
        const temp = this.heapArray[indexOne];
        this.heapArray[indexOne] = this.heapArray[indexTwo];
        this.heapArray[indexTwo] = temp;
    }
}
