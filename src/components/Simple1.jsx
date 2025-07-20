import { useRive } from "@rive-app/react-canvas";

export default function Simple() {
    const { rive, RiveComponent } = useRive({
        src: "log.riv",
        stateMachines: "State Machine 1",
        autoplay: true
    });
    
    return (
        <div className="flex items-center justify-center h-screen">
        <RiveComponent
            noMouseEnter={() => rive && rive.play()}
            noMouseLeave={() => rive && rive.pause()}
        />
        </div>
    );
}