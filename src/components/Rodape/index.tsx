import { Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Rodape() {
    return (
        <Flex gap="150px" alignItems="center" justifyContent="center" bg="black" w="100%" h="400px">
            <Flex direction="column">
                < Image width="250px" height="70px" src='https://upagencybrasil.com.br/assets/logos/LOGO%20FINA%20Branco.svg' />
                <Text color="gray">Mais que uma agência, um parceiro.</Text>
            </Flex>
            <Flex direction="column">
                <Text _hover={{ color: "#00DEB6" }} fontSize="17px" color="white" fontWeight="bold">Endereço</Text>
                <Text color="gray">
                    Rua dos Bandeirantes 296, Sala 01
                    <br></br>
                    Bom Retiro - São Paulo/SP
                    <br></br>
                    CEP 01124-010</Text>
            </Flex>
            <Flex direction="column">
                <Text fontSize="17px" color="white" fontWeight="bold">Contato</Text>
                <Text color="gray">
                    Email:
                    <Link _hover={{ color: "#00DEB6" }} href="">comercial@upagencybrasil.com.br</Link>
                    <br></br>
                    Whatsapp:
                    <Link _hover={{ color: "#00DEB6" }}>(11) 94110-1430</Link>
                </Text>
            </Flex>
            <Flex direction="column">
                <Text fontSize="17px" color="white" fontWeight="bold">Serviços</Text>
                <Text _hover={{ color: "#00DEB6" }} color="gray">
                    E-commerce
                    <br></br>
                    Performance de Mídia
                    <br></br>
                    Gestão de Mídia Social
                    <br></br>
                    Design Gráfico</Text>
            </Flex>
            <Flex direction="column">
                <Text fontSize="17px" color="white" fontWeight="bold">Menu</Text>
                <Link href="#home" _hover={{ color: "#00DEB6" }} color="gray">Home Page</Link>
                <Link href="#somos" _hover={{ color: "#00DEB6" }} color="gray">Quem Somos</Link>
                <Link href="#resultados" _hover={{ color: "#00DEB6" }} color="gray">Resultados</Link>
                <Link href="#servicos" _hover={{ color: "#00DEB6" }} color="gray">Serviços</Link>
                <Link href="#cases" _hover={{ color: "#00DEB6" }} color="gray">Cases</Link>
                <Link href="#contato" _hover={{ color: "#00DEB6" }} color="gray">Contato</Link>
            </Flex>
        </Flex >
    )
}