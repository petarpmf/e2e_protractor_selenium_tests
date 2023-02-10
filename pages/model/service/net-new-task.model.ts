import {ServiceEffort, IServiceEffort} from './service-effort.model';

export interface INetNewTask {
    phaseName: string;
    taskName: string;
    moduleName: string;
    activityTypeName: string;
    ableToDeliverOption: string;
    taskDeliveryType?: string;
    assignedDeliverableName: string;
    efforts: Array<IServiceEffort>;
}

export class NetNewTask implements INetNewTask {
    phaseName: string;
    taskName: string;
    moduleName: string;
    activityTypeName: string;
    ableToDeliverOption: string;
    taskDeliveryType?: string;
    assignedDeliverableName: string;
    efforts: Array<IServiceEffort>;

    constructor({phaseName, taskName, moduleName, activityTypeName, taskDeliveryType, ableToDeliverOption, assignedDeliverableName, efforts}: INetNewTask) {
        this.phaseName = phaseName;
        this.taskName = taskName;
        this.moduleName = moduleName;
        this.activityTypeName = activityTypeName;
        this.ableToDeliverOption = ableToDeliverOption;
        this.taskDeliveryType = taskDeliveryType;
        this.assignedDeliverableName = assignedDeliverableName;
        this.setEfforts(efforts);
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

    getEfforts(): Array<IServiceEffort> {
        return this.efforts;
    };

    setEfforts(taskEfforts: Array<IServiceEffort>) {
        this.efforts = [];
        for (let taskEffort in taskEfforts) {
            this.efforts.push(new ServiceEffort(taskEfforts[taskEffort]));
        }
    };
}