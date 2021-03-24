import Heap from "./heap";

export default class HeapMax extends Heap {
    protected heapfyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let maxIndex = this.getLeftIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)) {
                maxIndex = this.getRightChild(index);
            }

            if (this.heapArray[index] > this.heapArray[maxIndex]) {
                break;
            } else {
                this.swap(index, maxIndex);
            }
            index = maxIndex;
        }
    }

    protected heapfyUp() {
        let index = this._size - 1;

        while (this.hasParent(index)) {
            const parentIndex = this.getParentIndex(index);
            if (this.heapArray[index] > this.heapArray[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
}
