import { Rive} from "@rive-app/react-canvas";

export const Simple = () => (
  <div className="flex items-center justify-center h-screen">
    <Rive
        src="log.riv"
        stateMachine="bumpy"
    />
  </div>
);

export const Simple1 = () => (
  <div className="flex items-center justify-center h-screen">
    <Rive
        src="toogle.riv"
        stateMachine="State Machine 1"
        autoplay={true}
    />
  </div>
);