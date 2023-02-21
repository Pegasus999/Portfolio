import { keyframes } from "styled-components";

export const rightTotop = keyframes`
	from {
      right:  unset;
		transform: 
               rotate(0deg)
		           translate(10rem)
		           rotate(0deg);
	}
	to {
      right:  unset;
		transform: rotate(-90deg)
		           translate(10rem) 
		           rotate(90deg);
	}
 `;

export const topToRight = keyframes`
 from {
      top:  unset;
		transform: 
               rotate(0deg)
		           translateY(-10rem)
		           rotate(0deg);
	}
	to {
      top:  unset;
		transform: rotate(90deg)
		           translateY(-10rem) 
		           rotate(-90deg);
	} `;

export const leftToTop = keyframes`
from {
      left:  unset;
		transform: 
               rotate(0deg)
		           translate(-10rem)
		           rotate(0deg);
	}
	to {
      left:  unset;
		transform: rotate(90deg)
		           translate(-10rem) 
		           rotate(-90deg);
	}
`;
export const topToLeft = keyframes`
 from {
      top:  unset;
		transform: 
               rotate(0deg)
		           translateY(-10rem)
		           rotate(0deg);
	}
	to {
      top:  unset;
		transform: rotate(-90deg)
		           translateY(-10rem) 
		           rotate(90deg);
	}`;

export const rightToBottom = keyframes`
from {
      right:  unset;
		transform: 
               rotate(0deg)
		           translate(10rem)
		           rotate(0deg);
	}
	to {
      right:  unset;
		transform: rotate(90deg)
		           translate(10rem) 
		           rotate(-90deg);
	}`;

export const bottomToLeft = keyframes`
    from {
      bottom:  unset;
		transform: 
               rotate(0deg)
		           translateY(10rem)
		           rotate(0deg);
	}
	to {
      bottom:  unset;
		transform: rotate(90deg)
		           translateY(10rem) 
		           rotate(-90deg);
	}
`;

export const leftToBottom = keyframes`
 from {
      left:  unset;
		transform: 
               rotate(0deg)
		           translate(-10rem)
		           rotate(0deg);
	}
	to {
      left:  unset;
		transform: rotate(-90deg)
		           translate(-10rem) 
		           rotate(90deg);
	}
`;
export const bottomToRight = keyframes`
 from {
      bottom:  unset;
		transform: 
               rotate(0deg)
		           translateY(10rem)
		           rotate(0deg);
	}
	to {
      bottom:  unset;
		transform: rotate(-90deg)
		           translateY(10rem) 
		           rotate(90deg);
	}
`;
