import { Button, Flex, Link } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export default function Header() {
    return (
        <>
            <Flex gap="630px" p="20px" justifyContent="center" alignItems="center" w="100%" h="90px">
                <Flex><Image width="150px" height="80px" src='https://www.upagencybrasil.com.br/assets/logos/LOGO%20FINA.svg' alt='Dan Abramov' /></Flex>
                <Flex gap="2">
                    <Button bg="none" _hover={{ color: "#00DEB6" }}>Home Page</Button>
                    <Button bg="none" _hover={{ color: "#00DEB6" }}>Quem Somos</Button>
                    <Button bg="none" _hover={{ color: "#00DEB6" }}>Resultados</Button>
                    <Button bg="none" _hover={{ color: "#00DEB6" }}>Serviços</Button>
                    <Button bg="none" _hover={{ color: "#00DEB6" }}>Cases</Button>
                    <Button bg="none" _hover={{ color: "#00DEB6" }}>Contato</Button>
                    <Button borderRadius="10" color="white" bg="#00DEB6" _hover={{ color: "red" }} >Solicitar Orçamento</Button>
                </Flex>
            </Flex>
        </>

    )
}