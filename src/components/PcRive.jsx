import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

/**
 * Fully customizable and universal Rive animation component.
 *
 * @param {string} src - Path to the .riv file
 * @param {string} artboard - Optional artboard name
 * @param {string|string[]} stateMachines - Optional state machine(s)
 * @param {string|string[]} animations - Optional animation(s) (used if no state machine)
 * @param {boolean} autoplay - Whether to autoplay
 * @param {object} inputs - Inputs to control state machine (e.g. { isHovering: true, speed: 2, fire: "trigger" })
 * @param {string} className - CSS classes for the Rive component
 * @param {function} onLoad - Callback when Rive is loaded
 * @param {function} onStateChange - Callback for state machine changes
 * @param {object} otherOptions - Other advanced options
 */
export default function PcRive({
  src,
  artboard,
  stateMachines,
  animations,
  autoplay = true,
  inputs = {},
  className = "w-full h-full object-contain",
  onLoad,
  onStateChange,

}) {
  const { rive, RiveComponent } = useRive({
    src,
    artboard,
    stateMachines,
    animations,
    autoplay,
    onLoad,
    onStateChange,

  });

  // Handle inputs dynamically after rive is ready
  useEffect(() => {
    if (rive && rive.loaded && stateMachines) {
      const inputMap = {};

      // Ensure inputs is an object with keys mapping to values
      Object.entries(inputs).forEach(([name, value]) => {
        const input = rive.stateMachineInputs(name);
        if (!input || input.length === 0) return;

        const inputObj = input[0]; // Rive supports multiple inputs with same name, usually we take the first

        // Handle types: bool, number, trigger
        if (inputObj.type === "trigger") {
          if (value === true || value === "trigger") inputObj.fire();
        } else {
          inputObj.value = value;
        }

        inputMap[name] = inputObj;
      });
    }
  }, [rive, inputs, stateMachines]);

  return (
    <div className="w-full h-full">
      <RiveComponent className={className} />
    </div>
  );
}
