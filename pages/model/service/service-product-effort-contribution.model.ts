export interface IServiceProductEffortContribution {
    taskName: string;
    productEfforts: Array<any>
}

export class ServiceProductEffortContribution implements IServiceProductEffortContribution {
    taskName: string;
    productEfforts: Array<any>

    constructor({taskName, productEfforts}: IServiceProductEffortContribution) {
        this.taskName = taskName;
        this.productEfforts = productEfforts;
    };

    getTaskName(): string {
        return this.taskName;
    };

    setTaskName(value: string) {
        this.taskName = value;
    };

    getProductEfforts(): Array<any> {
        return this.productEfforts;
    };

    setProductEfforts(value: Array<any>) {
        this.productEfforts = value;
    };
}