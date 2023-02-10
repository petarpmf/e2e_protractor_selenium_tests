import {
    ServiceModule,
    IServiceModule,
    ServiceProperties,
    IServiceProperties,
    NetNewTask,
    INetNewTask,
    ServiceScalingQuestion,
    IServiceScalingQuestion,
    ServiceScalingModel,
    IServiceScalingModel,
    ServiceInScopeAssociation,
    IServiceInScopeAssociation,
    ServiceOutOfScopeAssociation,
    IServiceOutOfScopeAssociation,
} from './service-model.barrel';

/**
 * Service model.
 *
 * Created by pristov.
 */

export interface IService {
    /*
     * Data for Properties.
     */
    properties ?: IServiceProperties;
    /*
     * Data for Modules.
     */
    modules ?: Array<IServiceModule>;
    /*
     * Data for Task And Efforts.
     */
    taskAndEfforts ?: Array<INetNewTask>;
    /*
     * Data for Scaling Questions.
     */
    scalingQuestions ?: Array<IServiceScalingQuestion>;
    /*
     * Data for Scaling Models.
     */
    scalingModels ?: Array<IServiceScalingModel>;
    /*
     * Data for In Scope Associations.
     */
    inScopeAssociations ?: Array<IServiceInScopeAssociation>;
    /*
     * Data for Out Of Scope Associations.
     */
    outOfScopeAssociations ?: Array<IServiceOutOfScopeAssociation>;
}

export class Service implements IService {
    properties ?: IServiceProperties;
    modules ?: Array<IServiceModule>;
    taskAndEfforts ?: Array<INetNewTask>;
    scalingQuestions ?: Array<IServiceScalingQuestion>;
    scalingModels ?: Array<IServiceScalingModel>;
    inScopeAssociations ?: Array<IServiceInScopeAssociation>;
    outOfScopeAssociations ?: Array<IServiceOutOfScopeAssociation>;

    constructor(service ?: IService) {
        this.setServiceProperties(new ServiceProperties(service.properties));
        this.setServiceModules(service.modules);
        this.setServiceTaskAndEfforts(service.taskAndEfforts);
        this.setServiceScalingQuestions(service.scalingQuestions);
        this.setServiceScalingModels(service.scalingModels);
        this.setServiceInScopeAssociations(service.inScopeAssociations);
        this.setServiceOutOfScopeAssociations(service.outOfScopeAssociations);
    };

    getServiceProperties(): IServiceProperties {
        return this.properties;
    };

    setServiceProperties(value ?: IServiceProperties) {
        this.properties = value;
    };

    getServiceModules(): Array<IServiceModule> {
        return this.modules;
    };

    setServiceModules(modules: Array<IServiceModule>) {
        this.modules = [];
        for (let module in modules) {
            this.modules.push(new ServiceModule(modules[module]));
        }
    };

    getServiceTaskAndEfforts(): Array<INetNewTask> {
        return this.taskAndEfforts;
    };

    setServiceTaskAndEfforts(taskAndEfforts: Array<INetNewTask>) {
        this.taskAndEfforts = [];
        for (let taskAndEffort in taskAndEfforts) {
            this.taskAndEfforts.push(new NetNewTask(taskAndEfforts[taskAndEffort]));
        }
    };

    getServiceScalingQuestions(): Array<IServiceScalingQuestion> {
        return this.scalingQuestions;
    };

    setServiceScalingQuestions(scalingQuestions: Array<IServiceScalingQuestion>) {
        this.scalingQuestions = [];
        for (let scalingQuestion in scalingQuestions) {
            this.scalingQuestions.push(new ServiceScalingQuestion(scalingQuestions[scalingQuestion]));
        }
    };

    getServiceScalingModels(): Array<IServiceScalingModel> {
        return this.scalingModels;
    };

    setServiceScalingModels(scalingModels: Array<IServiceScalingModel>) {
        this.scalingModels = [];
        for (let scalingModel in scalingModels) {
            this.scalingModels.push(new ServiceScalingModel(scalingModels[scalingModel]));
        }
    };

    getServiceInScopeAssociations(): Array<IServiceInScopeAssociation> {
        return this.inScopeAssociations;
    };

    setServiceInScopeAssociations(inScopeAssociations: Array<IServiceInScopeAssociation>) {
        this.inScopeAssociations = [];
        for (let inScopeAssociation in inScopeAssociations) {
            this.inScopeAssociations.push(new ServiceInScopeAssociation(inScopeAssociations[inScopeAssociation]));
        }
    };

    getServiceOutOfScopeAssociations(): Array<IServiceOutOfScopeAssociation> {
        return this.outOfScopeAssociations;
    };

    setServiceOutOfScopeAssociations(outOfScopeAssociations: Array<IServiceOutOfScopeAssociation>) {
        this.outOfScopeAssociations = [];
        for (let outOfScopeAssociation in outOfScopeAssociations) {
            this.outOfScopeAssociations.push(new ServiceOutOfScopeAssociation(outOfScopeAssociations[outOfScopeAssociation]));
        }
    };
}