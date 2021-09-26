import LHead from "components/LHead";
import Welcome from "components/Welcome";
console.log(process.env.BASE_URL);
export default function Home() {
   return (
      <>
         <LHead title="Goole-meet Clone" />
         <Welcome />
      </>
   );
}
