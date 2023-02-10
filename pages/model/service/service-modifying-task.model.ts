import {ServiceEffort, IServiceEffort} from './service-effort.model';

export interface IServiceModifyingTask {
    modifyingTaskName: string;
    firstRelatedServiceTask?: string;
    secondRelatedServiceTask?: string;
    efforts?: Array<IServiceEffort>;
}

export class ServiceModifyingTask implements IServiceModifyingTask {
    modifyingTaskName: string;
    firstRelatedServiceTask?: string;
    secondRelatedServiceTask?: string;
    efforts?: Array<IServiceEffort>;

    constructor(modifyingTasks: IServiceModifyingTask) {
        this.modifyingTaskName = modifyingTasks.modifyingTaskName;
        this.firstRelatedServiceTask = modifyingTasks.firstRelatedServiceTask;
        this.secondRelatedServiceTask = modifyingTasks.secondRelatedServiceTask;
        this.setEfforts(modifyingTasks.efforts);
    };

    getModifyingTaskName(): string {
        return this.modifyingTaskName;
    };

    setModifyingTaskName(value: string) {
        this.modifyingTaskName = value;
    };

    getFirstRelatedServiceTask(): string {
        return this.firstRelatedServiceTask;
    };

    setFirstRelatedServiceTask(value: string) {
        this.firstRelatedServiceTask = value;
    };

    getSecondRelatedServiceTask(): string {
        return this.secondRelatedServiceTask;
    };

    setSecondRelatedServiceTask(value: string) {
        this.secondRelatedServiceTask = value;
    };

    getEfforts(): Array<IServiceEffort> {
        return this.efforts;
    };

    setEfforts(modifyingTaskEfforts: Array<IServiceEffort>) {
        this.efforts = [];
        for (let modifyingTaskEffort in modifyingTaskEfforts) {
            this.efforts.push(new ServiceEffort(modifyingTaskEfforts[modifyingTaskEffort]));
        }
    };
}