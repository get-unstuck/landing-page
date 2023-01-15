import { Flex, Text, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="main">
      <Flex color="white" flexDir={"column"}>
        <Flex justifyContent={"space-between"} width={"100%"}>
          <Text
            fontSize={"32px"}
            lineHeight={"32px"}
            paddingLeft={{ base: "16px", md: "40px", lg: "80px" }}
            paddingTop={"17.36px"}
            paddingBottom={"17.36px"}
          >
            feble
          </Text>
          <Flex gap={"32px"} display={{ base: "none", md: "flex" }}>
            <Text
              fontFamily={"Urbanist"}
              fontSize={"16px"}
              lineHeight={"19px"}
              textAlign={"center"}
              paddingTop={"23.86px"}
              paddingBottom={"23.86px"}
            >
              Twitter
            </Text>
            <Text
              fontFamily={"Urbanist"}
              fontSize={"16px"}
              lineHeight={"19px"}
              textAlign={"center"}
              paddingTop={"23.86px"}
              paddingBottom={"23.86px"}
            >
              Know More
            </Text>
            <Text
              fontFamily={"Urbanist"}
              fontSize={"16px"}
              lineHeight={"19px"}
              textAlign={"center"}
              paddingTop={"23.86px"}
              paddingBottom={"23.86px"}
              paddingRight={{ base: "", md: "40px", lg: "" }}
            >
              Careers
            </Text>
            <Flex
              display={{ base: "none", md: "none", lg: "flex" }}
              paddingTop={"16px"}
              paddingBottom={"16px"}
              paddingRight={"80px"}
              _hover={{ cursor: "pointer" }}
            >
              <Image
                src="button.svg"
                pointerEvents={"none"}
                userSelect={"none"}
                objectFit={"cover"}
              />
            </Flex>
          </Flex>
          <Flex display={{ base: "flex", md: "none" }} paddingRight={"19px"}>
            <Image
              src="menu.svg"
              alt="menu"
              pointerEvents={"none"}
              userSelect={"none"}
              objectFit={"cover"}
            />
          </Flex>
        </Flex>

        <Flex
          marginTop={{ base: "139px", md: "134.14px" }}
          align={"center"}
          flexDir={"column"}
        >
          <Flex justify={"center"}>
            <Image
              src="logo.svg"
              pointerEvents={"none"}
              userSelect={"none"}
              objectFit={"cover"}
            />
          </Flex>
          <Text
            fontSize={"16px"}
            textAlign={"center"}
            lineHeight={"19px"}
            marginTop={"24px"}
            fontFamily={"Urbanist"}
            width={"326px"}
            height={"38px"}
          >
            A single stop solution for developers while acting as a swiss
            pocket-knife for advocates.
          </Text>
          <Flex marginTop={"24px"} _hover={{ cursor: "pointer" }}>
            <Image
              src="button.svg"
              pointerEvents={"none"}
              userSelect={"none"}
              objectFit={"cover"}
            />
          </Flex>

          <Image
            height={{ base: "216.46px", md: "475.29px", lg: "592px" }}
            className="linear"
            marginTop={{ base: "220px", md: "111.4px" }}
            src="hero.svg"
            alt="hero"
            pointerEvents={"none"}
            userSelect={"none"}
            objectFit={"cover"}
          />
        </Flex>
      </Flex>
    </div>
  );
}
