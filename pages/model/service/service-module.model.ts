export interface IServiceModule {
    moduleName: string;
    moduleDescription: string;
}

export class ServiceModule implements IServiceModule {
    moduleName: string;
    moduleDescription: string;

    constructor({moduleName, moduleDescription}: IServiceModule) {
        this.moduleName = moduleName;
        this.moduleDescription = moduleDescription;
    };

    getModuleName(): string {
        return this.moduleName;
    };

    setModuleName(value: string) {
        this.moduleName = value;
    };

    getModuleDescription(): string {
        return this.moduleDescription;
    };

    setModuleDescription(value: string) {
        this.moduleDescription = value;
    };
}