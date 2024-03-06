import React from 'react';
import { Box, Flex, Heading, VStack, Icon, HStack, Divider, Tooltip } from '@chakra-ui/react';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbBrandNextjs, TbSql } from 'react-icons/tb';
import { FaReact, FaJava, FaSass, FaJenkins, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import {
    SiPrisma,
    SiWebstorm,
    SiPostgresql,
    SiMysql,
    SiIntellijidea,
    SiScikitlearn,
    SiPandas,
    SiPlotly,
    SiPowerbi,
    SiPycharm
} from 'react-icons/si';

const TechStack: React.FC = () => {

    const TechStack = [
        {
            label: "Web Development",
            stack: [
                <Icon as={FaReact} />,
                <Icon as={BiLogoTypescript} />,
                <Icon as={TbBrandNextjs} />,
                <Icon as={SiPrisma} />,
                <Icon as={FaSass} />,
                <Icon as={SiPostgresql} />,
                <Icon as={SiWebstorm} />,
                <Icon as={FaGithub} />
            ],
            stackLabels: [
                'React.js',
                'Typescript',
                'Next.js',
                'Prisma',
                'Sass',
                'PostgreSQL',
                'WebStorm',
                'GitHub'
            ]
        },
        {
            label: "Backend Development",
            stack: [
                <Icon as={FaJava} />,
                <Icon as={TbSql} />,
                <Icon as={SiMysql} />,
                <Icon as={FaJenkins} />,
                <Icon as={SiIntellijidea} />,
                <Icon as={FaGitAlt} />
            ],
            stackLabels: [
                'Java',
                'SQL',
                'MySQL',
                'Jenkins',
                'IntelliJ',
                'Git'
            ]

        },
        {
            label: "Data Science",
            stack: [
                <Icon as={FaPython} />,
                <Icon as={SiPandas} />,
                <Icon as={SiPlotly} />,
                <Icon as={SiScikitlearn} />,
                <Icon as={TbSql} />,
                <Icon as={SiPycharm} />,
                <Icon as={SiPowerbi} />
            ],
            stackLabels: [
                'Python',
                'Pandas',
                'Plotly',
                'Scikit-learn',
                'SQL',
                'PyCharm',
                'Power BI'
            ]
        },
    ]

    return (
        <Flex>
            <VStack align='start'>
                {TechStack.map((stack, index) => (
                    <>
                        <Box>
                            <Heading fontSize='2xl' fontWeight='500' mb='3'>
                                {stack.label}
                            </Heading>
                            <HStack spacing='5'>
                                {stack.stack.map((icon, key) => (
                                    <Tooltip label={stack.stackLabels[key]} hasArrow color='white' bg='cyan.400'
                                             fontWeight='600'
                                             key={key}>
                                        <Box as='span' key={key}>
                                            {icon}
                                        </Box>
                                    </Tooltip>
                                ))}
                            </HStack>
                        </Box>
                        <Divider
                            mt='3'
                            mb='2'
                            display={(index + 1) === TechStack.length ? 'none' : 'flex'}
                        />
                    </>
                ))}
            </VStack>
        </Flex>
    );
};

export default TechStack;