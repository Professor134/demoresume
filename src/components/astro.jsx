import { useRive } from "@rive-app/react-canvas";

export default function astro() {
    const { rive, RiveComponent } = useRive({
        src: "astro3.riv",
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