import { Phone } from "./phone";


export class PhoneWithCamera extends Phone {
    private recording :boolean;
    private buttonPhoto :boolean;

    //CONSTRUCTOR
    constructor(){
        super();
        this.recording = false;
        this.buttonPhoto = false;
    }
    
    //SPECIFIC METHODS
    public takePhoto(): void{
        this.buttonPhoto = !this.buttonPhoto;
        if(this.buttonPhoto){
            console.log("Taking photograph...");
            this.buttonPhoto = !this.buttonPhoto;
        }
    }

    public startEndRecording(type :string): void {
        this.recording = !this.recording;
        if(this.recording){
            this.recordVideo(type);
        }
    }

    private recordVideo(type :string): void{
            let duration = 0.00;
            let durationMax :number = 0;
            if(type === "short"){
                durationMax = 0.25;
            }else if (type === "long"){
                durationMax = 600;
            }
            while(this.recording && duration < durationMax){
                console.log("Recording video...");
                duration += 0.01;
            }
            console.log(`Finished video. ${duration.toFixed(2)} seg. video`);
        }
    }


