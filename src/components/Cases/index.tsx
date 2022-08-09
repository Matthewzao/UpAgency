import { Flex, Text, Image } from "@chakra-ui/react";

export default function Cases() {
    return (
        <div id="cases">
            <Flex justifyContent="flex-start" marginLeft="457" direction="column">
                <Text fontSize="64px" fontWeight="bold">Cases</Text>
                <Text>Veja alguns dos Parceiros que fizeram parte dessa história:</Text>
            </Flex>
            <Flex marginTop="20px" marginLeft="20px" justifyContent="center" w="100%" h="200px">
                <Image width="300px" height="100px" src='https://upagencybrasil.com.br/assets/logos/Lojas/Logo/La-Cleo.png' />
                <Image width="300px" height="100px" src='https://upagencybrasil.com.br/assets/logos/Lojas/Logo/La-Cleo.png' />
                <Image width="300px" height="100px" src='https://upagencybrasil.com.br/assets/logos/Lojas/Logo/La-Cleo.png' />
                <Image width="300px" height="100px" src='https://upagencybrasil.com.br/assets/logos/Lojas/Logo/La-Cleo.png' />
                <Image width="300px" height="100px" src='https://upagencybrasil.com.br/assets/logos/Lojas/Logo/La-Cleo.png' />
                <Image width="300px" height="100px" src='https://upagencybrasil.com.br/assets/logos/Lojas/Logo/La-Cleo.png' />
            </Flex>
        </div>

    )
}