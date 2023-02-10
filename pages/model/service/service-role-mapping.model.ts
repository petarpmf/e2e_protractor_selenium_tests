export interface IServiceRoleMapping {
    roleType: string;
    roleName: string;
}

export class ServiceRoleMapping implements IServiceRoleMapping {
    roleType: string;
    roleName: string;

    constructor({roleType, roleName}: IServiceRoleMapping) {
        this.roleType = roleType;
        this.roleName = roleName;
    };

    getRoleType(): string {
        return this.roleType;
    };

    setRoleType(value: string) {
        this.roleType = value;
    };

    getRoleName(): string {
        return this.roleName;
    };

    setRoleName(value: string) {
        this.roleName = value;
    };
}