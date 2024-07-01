
class Meditation {
    constructor(private duration: number) { }
    start() {
        console.log('Start meditation');
        this.countdown(this.duration);
    }
    private countdown(time: number) {
        if (time > 0) {
            console.log(time);
            setTimeout(() => this.countdown(time - 1), 1000);
        } else {
            console.log('Jay Guru Dev');
        }
    }
}
const morning_meditation = new Meditation(5);
morning_meditation.start();
//console.log(`Start meditation`);