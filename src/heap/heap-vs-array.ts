import PerformanceTester from "../performance_tester";
import HeapMax from "./heap-max";
import { Utils } from "../utils";

const TEST_ARRAY_LENGTH = 100000;
const TEST_ARRAY: number[] = [];
let max = 0;

for (let i = 0; i < TEST_ARRAY_LENGTH; i++) {
    const rndN = Utils.randomInt(1, 1000000000);
    TEST_ARRAY[i] = rndN;
    if (rndN > max) {
        max = rndN;
    }
}

const heapTime = PerformanceTester.test(() => {
    const heap = new HeapMax(TEST_ARRAY);
    console.log(heap.peek());
});

const arrayTime = PerformanceTester.test(() => {
    const copied = [...TEST_ARRAY];
    copied.sort((a, b) => b - a);
    console.log(copied[0]);
});

console.log(`Max number is ${max}`);
console.log(`Heap Time: ${heapTime}ms`);
console.log(`Array Time: ${arrayTime}ms`);
