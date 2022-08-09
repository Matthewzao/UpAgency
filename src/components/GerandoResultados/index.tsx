import { Flex, Text, Image, Button } from "@chakra-ui/react";

export default function Resultados() {
    return (
        <div id="home">
            <Flex gap="400px" alignItems="center" justifyContent="center" direction="row">
                <Flex gap="10" direction="column">
                    <Text fontSize="64px" fontWeight="bold">Gerando Resultado</Text>
                    <Text fontFamily="sans-serif">Especialistas em Resultados Digitais. Somos uma Agência Full-Service para<br></br> quem sonha em ter ou já tem um Negócio Digital.</Text>
                    <Button bg="#00DEB6" color="white" borderRadius="10" w="200px" h="50px">Fala Conosco</Button>
                </Flex>
                <Flex>
                    <Image width="650px" height="650px" src='https://www.upagencybrasil.com.br/assets/images/celular.png' />
                </Flex>

            </Flex >
        </div>
    )
}