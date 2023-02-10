export interface IServiceOutOfScopeAssociation {
    scopeText: string;
    moduleName: string;
    inScopeTextAssociation: string;
}

export class ServiceOutOfScopeAssociation implements IServiceOutOfScopeAssociation {
    scopeText: string;
    moduleName: string;
    inScopeTextAssociation: string;

    constructor({scopeText, moduleName, inScopeTextAssociation}: IServiceOutOfScopeAssociation) {
        this.scopeText = scopeText;
        this.moduleName = moduleName;
        this.inScopeTextAssociation = inScopeTextAssociation;
    };

    getScopeText(): string {
        return this.scopeText;
    };

    setScopeText(value: string) {
        this.scopeText = value;
    };

    getModuleName(): string {
        return this.moduleName;
    };

    setModuleName(value: string) {
        this.moduleName = value;
    };

    getInScopeTextAssociation(): string {
        return this.inScopeTextAssociation;
    };

    setInScopeTextAssociation(value: string) {
        this.inScopeTextAssociation = value;
    };
}