export interface IServiceAutoscaleTimeline {
    phaseName: string;
    startWeekOverrideValue: number;
}

export class ServiceAutoscaleTimeline implements IServiceAutoscaleTimeline {
    phaseName: string;
    startWeekOverrideValue: number;

    constructor({phaseName, startWeekOverrideValue}: IServiceAutoscaleTimeline) {
        this.phaseName = phaseName;
        this.startWeekOverrideValue = startWeekOverrideValue;
    };

    getPhaseName(): string {
        return this.phaseName;
    };

    setPhaseName(value: string) {
        this.phaseName = value;
    };

    getStartWeekOverrideValue(): number {
        return this.startWeekOverrideValue;
    };

    setStartWeekOverrideValue(value: number) {
        this.startWeekOverrideValue = value;
    };
}