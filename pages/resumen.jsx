import Header from 'components/Header'
import LHead from 'components/LHead'

const Resumen = () => {
   return (
      <>
         <LHead title="Resumen" />
         <Header />
         <div className="w-full h-[90vh] flex items-center justify-center">
            <p className="">Esta app es mia</p>
         </div>
      </>
   )
}

export default Resumen
