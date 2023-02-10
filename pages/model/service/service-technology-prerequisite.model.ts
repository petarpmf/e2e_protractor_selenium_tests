export interface IServiceTechnologyPrerequisite {
    prerequisitesStatementValue: string;
    definedMinimumValue: number;
}

export class ServiceTechnologyPrerequisite implements IServiceTechnologyPrerequisite {
    prerequisitesStatementValue: string;
    definedMinimumValue: number;

    constructor({prerequisitesStatementValue, definedMinimumValue}: IServiceTechnologyPrerequisite) {
        this.prerequisitesStatementValue = prerequisitesStatementValue;
        this.definedMinimumValue = definedMinimumValue;
    };

    getPrerequisitesStatementValue(): string {
        return this.prerequisitesStatementValue;
    };

    setPrerequisitesStatementValue(value: string) {
        this.prerequisitesStatementValue = value;
    };

    getDefinedMinimumValue(): number {
        return this.definedMinimumValue;
    };

    setDefinedMinimumValue(value: number) {
        this.definedMinimumValue = value;
    };
}