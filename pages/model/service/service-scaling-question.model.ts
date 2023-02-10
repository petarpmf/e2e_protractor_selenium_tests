export interface IServiceScalingQuestion {
    question: string;
    defaultAnswer: number;
    minimumAnswer: number;
    maximumAnswer: number;
    comments: string;
}

export class ServiceScalingQuestion implements IServiceScalingQuestion {
    question: string;
    defaultAnswer: number;
    minimumAnswer: number;
    maximumAnswer: number;
    comments: string;

    constructor({question, defaultAnswer, minimumAnswer, maximumAnswer, comments}: IServiceScalingQuestion) {
        this.question = question;
        this.defaultAnswer = defaultAnswer;
        this.minimumAnswer = minimumAnswer;
        this.maximumAnswer = maximumAnswer;
        this.comments = comments;
    };

    getQuestion(): string {
        return this.question;
    };

    setQuestion(value: string) {
        this.question = value;
    };

    getDefaultAnswer(): number {
        return this.defaultAnswer;
    };

    setDefaultAnswer(value: number) {
        this.defaultAnswer = value;
    };

    getMinimumAnswer(): number {
        return this.minimumAnswer;
    };

    setMinimumAnswer(value: number) {
        this.minimumAnswer = value;
    };

    getMaximumAnswer(): number {
        return this.maximumAnswer;
    };

    setMaximumAnswer(value: number) {
        this.maximumAnswer = value;
    };

    getComments(): string {
        return this.comments;
    };

    setComments(value: string) {
        this.comments = value;
    };
}