import {
    ServiceRoleMapping,
    IServiceRoleMapping,
    ThirdPartyProduct,
    IThirdPartyProduct,
    ServiceModifyingTask,
    IServiceModifyingTask,
    Service,
    IService
} from './service-model.barrel';


export interface IIntegrateService extends IService {
    /*
     * Data for Role Mappings.
     */
    roleMappings ?: Array<IServiceRoleMapping>;
    /*
     * Data for Technology Attachments.
     */
    technologyAttachments ?: Array<IThirdPartyProduct>;
    /*
     * Data for Modifying Tasks.
     */
    modifyingTasks ?: Array<IServiceModifyingTask>;
}

export class IntegrateService extends Service implements IIntegrateService {
    roleMappings ?: Array<IServiceRoleMapping>;
    technologyAttachments ?: Array<IThirdPartyProduct>;
    modifyingTasks ?: Array<IServiceModifyingTask>;

    constructor(service ?: IIntegrateService) {
        super(service);
        this.setServiceRoleMappings(service.roleMappings);
        this.setServiceTechnologyAttachments(service.technologyAttachments);
        this.setServiceModifyingTasks(service.modifyingTasks);
    };

    getServiceRoleMappings(): Array<IServiceRoleMapping> {
        return this.roleMappings;
    };

    setServiceRoleMappings(roleMappings: Array<IServiceRoleMapping>) {
        this.roleMappings = [];
        for (let roleMapping in roleMappings) {
            this.roleMappings.push(new ServiceRoleMapping(roleMappings[roleMapping]));
        }
    };

    getServiceTechnologyAttachments(): Array<IThirdPartyProduct> {
        return this.technologyAttachments;
    };

    setServiceTechnologyAttachments(technologyAttachments: Array<IThirdPartyProduct>) {
        this.technologyAttachments = [];
        for (let technologyAttachment in technologyAttachments) {
            this.technologyAttachments.push(new ThirdPartyProduct(technologyAttachments[technologyAttachment]));
        }
    };

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