class ECTS {
    constructor(score) {
        this.score = score;
    }

    ectsFromScore() {
        if (this.score >= 90) {
            return 'A';
        }
        if (this.score >= 82 && this.score <= 89) {
            return 'B';
        }
        if (this.score >= 74 && this.score <=81) {
            return 'C';
        }
        if (this.score >= 65 && this.score <=73) {
            return 'D';
        }
        if (this.score >= 60 && this.score <= 64) {
            return 'E';
        }
        if(this.score >= 0 && this.score <= 59) {
            return 'F';
        }
    }
}

module.exports = ECTS;
