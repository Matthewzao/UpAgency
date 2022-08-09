import { Flex, Image, Text, Button } from "@chakra-ui/react";

export default function ServiceBox() {
    return (
        <Flex gap="150px" justifyContent="center" w="100%" h="500px" bg="#e7e7e7" >
            <Flex _hover={{ bg: "#00DEB6", color: "white" }} gap="2" p="4" direction="column" bg="white" marginTop="40px" borderRadius="10" w="300px" h="300px">
                <Image p="1" borderRadius="10" bg="black" boxSize="40px" src="https://upagencybrasil.com.br/assets/icons/Ecommerce.png" />
                <Text fontWeight="bold" fontSize="16px">Desenvolvimento de E-commerces</Text>
                <Text fontFamily="sans-serif" fontSize="17px">Desenvolvemos todo o Ambiente<br></br> Digital focada na Otimização de<br></br> Tráfego e Conversões e ensinamos a você a manusear todas as ferramentas necessárias.</Text>
            </Flex>
            <Flex _hover={{ bg: "#00DEB6", color: "white" }} gap="2" p="4" direction="column" bg="white" marginTop="40px" borderRadius="10" w="300px" h="300px">
                <Image p="1" borderRadius="10" bg="black" boxSize="40px" src="https://upagencybrasil.com.br/assets/icons/Performance.png" />
                <Text fontWeight="bold" fontSize="16px">Performance de Mídia<br></br>(Trafégo pago)</Text>
                <Text fontFamily="sans-serif" fontSize="17px">Desenvolvemos todo o Ambiente<br></br> Digital focada na Otimização de<br></br> Tráfego e Conversões e ensinamos a você a manusear todas as ferramentas necessárias.</Text>
            </Flex> <Flex _hover={{ bg: "#00DEB6", color: "white" }} gap="2" p="4" direction="column" bg="white" marginTop="40px" borderRadius="10" w="300px" h="300px">
                <Image p="1" borderRadius="10" bg="black" boxSize="40px" src="https://upagencybrasil.com.br/assets/icons/Midia-social.png" />
                <Text fontWeight="bold" fontSize="16px">Desenvolvimento de E-commerces</Text>
                <Text fontFamily="sans-serif" fontSize="17px">Desenvolvemos todo o Ambiente<br></br> Digital focada na Otimização de<br></br> Tráfego e Conversões e ensinamos a você a manusear todas as ferramentas necessárias.</Text>
            </Flex>
            <Flex _hover={{ bg: "#00DEB6", color: "white" }} gap="2" p="4" direction="column" bg="white" marginTop="40px" borderRadius="10" w="300px" h="300px">
                <Image p="1" borderRadius="10" bg="black" boxSize="40px" src="https://upagencybrasil.com.br/assets/icons/Design.png" />
                <Text fontWeight="bold" fontSize="16px">Desenvolvimento de E-commerces</Text>
                <Text fontFamily="sans-serif" fontSize="17px">Desenvolvemos todo o Ambiente<br></br> Digital focada na Otimização de<br></br> Tráfego e Conversões e ensinamos a você a manusear todas as ferramentas necessárias.</Text>
            </Flex>
        </Flex>
    )
}