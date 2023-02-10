import {
    ServiceModifyingTask,
    IServiceModifyingTask,
    Service,
    IService
} from './service-model.barrel';

export interface IInteroperateService extends IService {
    /*
     * Data for Modifying Tasks.
     */
    modifyingTasks ?: Array<IServiceModifyingTask>;
}

export class InteroperateService extends Service implements IInteroperateService {
    modifyingTasks ?: Array<IServiceModifyingTask>;

    constructor(service ?: IInteroperateService) {
        super(service);
        this.setServiceModifyingTasks(service.modifyingTasks);
    }

    getServiceModifyingTasks(): Array<IServiceModifyingTask> {
        return this.modifyingTasks;
    };

    setServiceModifyingTasks(modifyingTasks: Array<IServiceModifyingTask>) {
        this.modifyingTasks = [];
        for (let modifyingTask in modifyingTasks) {
            this.modifyingTasks.push(new ServiceModifyingTask(modifyingTasks[modifyingTask]));
        }
    };
}