import { Flex, Input, Text, Button } from "@chakra-ui/react";

export default function SInput() {
    return (
        <Flex justifyContent="space-between">
            <Flex direction="column" >
                <Text>Nome:</Text>
                <Input placeholder="Digite seu nome" _placeholder={{ color: "gray" }} borderRadius="10" focusBorderColor="black" h="40px" w="680px"></Input>
                <Text>Telefone:</Text>
                <Input placeholder="Digite seu telefone" _placeholder={{ color: "gray" }} borderRadius="10" focusBorderColor="black" h="40px" w="680px"></Input>
                <Text>Empresa:</Text>
                <Input placeholder="Digite o nome da sua empreas" _placeholder={{ color: "gray" }} borderRadius="10" focusBorderColor="black" h="40px" w="680px"></Input>
                <Text>Detalhes do Projeto:</Text>
                <Input _placeholder={{ color: "gray" }} borderRadius="10" focusBorderColor="black" h="100px" w="680px"></Input>

            </Flex>

            <Flex direction="column">
                <Text>Email:</Text>
                <Input placeholder="Digite seu Email" _placeholder={{ color: "gray" }} borderRadius="10" focusBorderColor="black" h="40px" w="680px"></Input>
                <Text>Como nos conheceu?</Text>
                <Input placeholder="Diga como nos conheceu" _placeholder={{ color: "gray" }} borderRadius="10" focusBorderColor="black" h="40px" w="680px"></Input>
                <Text>Site:</Text>
                <Input placeholder="Digite seu site" _placeholder={{ color: "gray" }} borderRadius="10" focusBorderColor="black" h="40px" w="680px"></Input>
            </Flex>

        </Flex>
    )
}