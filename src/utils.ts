export class Utils {
    public static randomInt(max: number, min: number = 0) {
        return Math.floor(Math.random() * max) + min;
    }
}
