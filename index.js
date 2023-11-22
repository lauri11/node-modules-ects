class ECTS {
    constructor(score) {
        this.score = score;
    }

    ectsFromScore() {
        if (this.score >= 90) {
            return 'A';
        } else if (this.score >= 80) {
            return 'B';
        } else if (this.score >= 70) {
            return 'C';
        } else if (this.score >= 60) {
            return 'D';
        } else if (this.score >= 50) {
            return 'E';
        } else {
            return 'F';
        }
    }
}

module.exports = ECTS;
