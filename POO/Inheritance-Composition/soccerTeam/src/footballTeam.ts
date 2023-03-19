import { Coach } from "./coach";
import { MassageTherapist } from "./massageTherapist";

export class FootballTeam {
    private name: string;
    private coach :Coach;
    private massageTherapist: MassageTherapist;

    public constructor(name: string, coach: Coach, massageTherapist: MassageTherapist){
        this.name = name;
        this.coach = coach;
        this.massageTherapist = massageTherapist;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }

    public setCoach(coach: Coach): void {
        this.coach = coach;
    }

    public getCoach(): Coach {
        return this.coach;
    }

    public setMassageTherapist(massageTherapist: MassageTherapist): void {
        this.massageTherapist = massageTherapist;
    }

    public getMassageTherapist(): MassageTherapist {
        return this.massageTherapist;
    }

    public showInfo(): FootballTeam{
        return this;
    }
}