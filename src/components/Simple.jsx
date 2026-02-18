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
        src="astro.riv"
        stateMachine="State Machine 1"
        autoplay={true}
    />
  </div>
);

export const Simple2 = () => (
  <div className="flex items-center justify-center h-screen">
    <Rive
        src="astro3.riv"
        stateMachine="State Machine 1"
        autoplay={true}
    />
  </div>
);

export const Simple3 = () => (
  <div className="flex items-center justify-center h-screen">
    <Rive
        src="parallax_hero.riv"
        stateMachine="MainStateMachine"
        autoplay={true}
    />
  </div>
);