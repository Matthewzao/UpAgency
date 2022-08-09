import { Flex, Text, Image } from "@chakra-ui/react";

export default function SobreNos() {
    return (
        <div id="somos">
            <Flex p="20" justifyContent="space-around" bg="#e7e7e7" w="100%" h="800px">
                <Flex gap="5" direction="column">
                    <Text fontSize="64px" fontWeight="bold">Sobre Nós</Text>
                    <Text>A UP é uma agência digital especializada no nicho de moda<br></br> feminina e acessórios. Trabalhamos como colaboradores da<br></br> sua marca, buscando de maneira estratégica e efetiva<br></br> alavancar seus resultados.</Text>
                    <Image marginTop="200px" width="400px" height="119px" src='https://www.upagencybrasil.com.br/assets/images/agency%20(1).png' />
                </Flex>
                <Flex gap="5" direction="column">
                    <Image marginBottom="150px" width="400px" height="207px" src='https://www.upagencybrasil.com.br/assets/images/up%20(1).png' />
                    <Text fontSize="64px" fontWeight="bold">Visão</Text>
                    <Text>Acreditamos em uma visão de mundo colaborativa, onde nós<br></br> criamos juntos. O que buscamos é de maneira positiva criar<br></br> uma solução prática e assertiva para o seu negócio.</Text>
                </Flex>

            </Flex>
        </div>
    )
}