export interface IServiceStakeholderPrerequisite {
    prerequisitesStatementValue: string;
}

export class ServiceStakeholderPrerequisite implements IServiceStakeholderPrerequisite {
    prerequisitesStatementValue: string;

    constructor({prerequisitesStatementValue}: IServiceStakeholderPrerequisite) {
        this.prerequisitesStatementValue = prerequisitesStatementValue;
    };

    getPrerequisitesStatementValue(): string {
        return this.prerequisitesStatementValue;
    };

    setPrerequisitesStatementValue(value: string) {
        this.prerequisitesStatementValue = value;
    };
}