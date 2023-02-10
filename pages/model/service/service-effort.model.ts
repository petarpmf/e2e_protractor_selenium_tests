export interface IServiceEffort {
    roleName: string;
    totalHours: number;
    remoteHours: number;
}

export class ServiceEffort implements IServiceEffort {
    roleName: string;
    totalHours: number;
    remoteHours: number;

    constructor({roleName, totalHours, remoteHours}: IServiceEffort) {
        this.roleName = roleName;
        this.totalHours = totalHours;
        this.remoteHours = remoteHours;
    };

    getRoleName(): string {
        return this.roleName;
    };

    setRoleName(value: string) {
        this.roleName = value;
    };

    getTotalHours(): number {
        return this.totalHours;
    };

    setTotalHours(value: number) {
        this.totalHours = value;
    };

    getRemoteHours(): number {
        return this.remoteHours;
    };

    setRemoteHours(value: number) {
        this.remoteHours = value;
    };
}