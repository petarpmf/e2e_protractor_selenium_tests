export interface IServiceTaskAndEffort {
    phaseName: string;
    taskName: string;
    moduleName: string;
    activityTypeName: string;
    ableToDeliverOption: string;
    assignedDeliverableName: string;
    efforts: Array<any>;
}

export class ServiceTaskAndEffort implements IServiceTaskAndEffort {
    phaseName: string;
    taskName: string;
    moduleName: string;
    activityTypeName: string;
    ableToDeliverOption: string;
    assignedDeliverableName: string;
    efforts: Array<any>;

    constructor({phaseName, taskName, moduleName, activityTypeName, ableToDeliverOption, assignedDeliverableName, efforts}: IServiceTaskAndEffort) {
        this.phaseName = phaseName;
        this.taskName = taskName;
        this.moduleName = moduleName;
        this.activityTypeName = activityTypeName;
        this.ableToDeliverOption = ableToDeliverOption;
        this.assignedDeliverableName = assignedDeliverableName;
        this.efforts = efforts;
    };

    getPhaseName(): string {
        return this.phaseName;
    };

    setPhaseName(value: string) {
        this.phaseName = value;
    };

    getTaskName(): string {
        return this.taskName;
    };

    setTaskName(value: string) {
        this.taskName = value;
    };

    getModuleName(): string {
        return this.moduleName;
    };

    setModuleName(value: string) {
        this.moduleName = value;
    };

    getActivityTypeName(): string {
        return this.activityTypeName;
    };

    setActivityTypeName(value: string) {
        this.activityTypeName = value;
    };

    getAbleToDeliverOption(): string {
        return this.ableToDeliverOption;
    };

    setAbleToDeliverOption(value: string) {
        this.ableToDeliverOption = value;
    };

    getAssignedDeliverableName(): string {
        return this.assignedDeliverableName;
    };

    setAssignedDeliverableName(value: string) {
        this.assignedDeliverableName = value;
    };

    getEfforts(): Array<any> {
        return this.efforts;
    };

    setEfforts(value: Array<any>) {
        this.efforts = value;
    };
}