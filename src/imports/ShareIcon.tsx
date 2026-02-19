import React from 'react';
import svgPaths from "./svg-pnprbz93e3";

export default function ShareIcon(props: { className?: string, onClick?: () => void }) {
  return (
    <div className={`relative size-full ${props.className || ''}`} onClick={props.onClick} data-name="Icons">
      <div className="absolute inset-[1.04%_14.58%_15.62%_6.25%]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
          <path d={svgPaths.pc90e880} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
