import { Button, Flex, Input, Text } from "@chakra-ui/react";
import SButton from "./ServiceButton";
import SInput from "./ServiceInput";

export default function VamosComecar() {
    return (
        <div id="contato">
            <Flex>
                <Flex gap="30px" p="16" justifyContent="center" w="100%" h="600px" >
                    <Flex direction="column" marginTop="10">
                        <Text fontSize="64px" fontWeight="bold">Vamos<br></br>Começar?</Text>
                        <Text >Preencha o formulário com o máximo de informações<br></br>possíveis para otimizar o nosso atendimento.</Text>
                    </Flex>
                    <Flex direction="column" >
                        <Text fontSize="18" fontWeight="bold">Quais serviços você tem interesse?</Text>
                        <SButton />
                        <SInput />
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}