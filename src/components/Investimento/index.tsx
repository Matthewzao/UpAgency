import { Flex, Text } from "@chakra-ui/react";
import Chart from 'react-apexcharts'


// const options = {

// };

// const series = [
//     { name: 'series1', data: [22, 22, 23, 34, 3, 44] }
// ]
export default function Investimento() {
    return (
        <div id="resultados">
            <Flex marginLeft="457px" p="2" justifyContent="flex-start" >
                <Text fontSize="64px" fontWeight="bold">Resultados</Text>
            </Flex                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         >
            <Flex gap="60px" justifyContent="center">
                <Flex p="3" alignItems="center" direction="column" borderRadius="10" bg="#E7E7E7" w="500px" h="130px">
                    <Text>Valor Investido</Text>
                    <Text fontSize="55px" fontWeight="bold">R$ 76.044,41</Text>
                </Flex>
                <Flex p="3" alignItems="center" direction="column" borderRadius="10" bg="#E7E7E7" w="500px" h="130px">
                    <Text>Valor Faturado:</Text>
                    <Text fontSize="55px" fontWeight="bold">R$ 302.376,61</Text>
                </Flex>
                <Flex p="3" alignItems="center" direction="column" borderRadius="10" bg="#E7E7E7" w="500px" h="130px">
                    <Text >Retorno Sobre o Investimento:</Text>
                    <Text fontSize="55px" fontWeight="bold">3,98</Text>
                </Flex>
            </Flex>
            <Flex justifyContent="center" w="100%" h="500px" >
                {/* <Chart options={options} series={series} type="area" width="1600px" height="500px" /> */}
            </Flex>
        </div>
    )
}