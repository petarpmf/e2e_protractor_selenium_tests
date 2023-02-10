export interface IServiceScalingModel {
    taskName: string;
    questionEfforts: Array<any>;
}

export class ServiceScalingModel implements IServiceScalingModel {
    taskName: string;
    questionEfforts: Array<any>;

    constructor({taskName, questionEfforts}: IServiceScalingModel) {
        this.taskName = taskName;
        this.questionEfforts = questionEfforts;
    };

    getTaskName(): string {
        return this.taskName;
    };

    setTaskName(value: string) {
        this.taskName = value;
    };

    getQuestionEfforts(): Array<any> {
        return this.questionEfforts;
    };

    setQuestionEfforts(value: Array<any>) {
        this.questionEfforts = value;
    };
}