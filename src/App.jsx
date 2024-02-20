import FixedNavbar from "./components/FixedNavbar";
import SectionHot from "./components/SectionHot";
import SectionJuicy from "./components/SectionJuicy";
import SectionCozy from "./components/SectionCozy";

export function App() {
  return (
    <>
      <FixedNavbar></FixedNavbar>
      <SectionHot></SectionHot>
      <SectionJuicy></SectionJuicy>
      <SectionCozy></SectionCozy>
    </>
  );
}
