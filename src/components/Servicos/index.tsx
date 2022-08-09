import { Flex, Text } from "@chakra-ui/react";
import ServiceBox from "./servicosBox";

export default function Service() {
    return (
        <div id="servicos">
            <Flex gap="4" justifyContent="flex-start" w="100%" h="200px" bg="#e7e7e7" p="2" direction="column">
                <Text marginLeft="450" fontSize="64px" fontWeight="bold">Serviços</Text>
                <Text marginLeft="450">Trabalhamos com uma linha de criação e estratégia adaptada para o perfil de cada cliente, respeitando a história e personalidade da marca.</Text>
            </Flex >
            <ServiceBox />
            <Flex >

            </Flex>
        </div>
    )
}