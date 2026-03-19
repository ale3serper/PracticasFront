import { ReactNode } from "react";
import "./SectionContainer.css"

interface Props {
  children: ReactNode;
}

const SectionContainer =({ children }: Props) =>{
  return (
    <div className="sectionContainer">
      {children}
    </div>
  );
}

export default SectionContainer;