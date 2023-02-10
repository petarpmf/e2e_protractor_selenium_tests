export interface IServiceFreeFormPrerequisite {
    prerequisitesStatementValue: string;
}

export class ServiceFreeFormPrerequisite implements IServiceFreeFormPrerequisite {
    prerequisitesStatementValue: string;

    constructor({prerequisitesStatementValue}: IServiceFreeFormPrerequisite) {
        this.prerequisitesStatementValue = prerequisitesStatementValue;
    };

    getPrerequisitesStatementValue(): string {
        return this.prerequisitesStatementValue;
    };

    setPrerequisitesStatementValue(value: string) {
        this.prerequisitesStatementValue = value;
    };
}