import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Cases from '../components/Cases'
import Resultados from '../components/GerandoResultados'
import Header from '../components/Header'
import Investimento from '../components/Investimento'
import Rodape from '../components/Rodape'
import Service from '../components/Servicos'
import SobreNos from '../components/SobreNos'
import VamosComecar from '../components/VamosComeçar'

export default function Home() {
  return (
    <>
      <Header />
      <Resultados />
      <SobreNos />
      <Investimento />
      <Cases />
      <Service />
      <VamosComecar />
      <Rodape />
    </>
  )
}
