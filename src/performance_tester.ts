const { performance } = require("perf_hooks");

export default class PerformanceTester {
    public static test(action: () => void, repeat: number = 10000): number {
        const times: number[] = [];
        for (let i = 0; i < repeat; i++) {
            const t0 = performance.now();
            action();
            const t1 = performance.now();
            times.push(t1 - t0);
        }

        return times.reduce((a, b) => a + b) / times.length;
    }
}
