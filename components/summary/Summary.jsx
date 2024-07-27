import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Addtransation from '../add-transaction/Addtransation'
import ChartComponent from '../chart/ChartComponent'
import { TransactionContext } from '@/app/context/TransactionContext'

const Summary = ({ isOpen, onOpen, onClose }) => {
    const { total } = useContext(TransactionContext)
    
    return (
        <Box
            p={'6'}
            border={'1px solid'}
            borderRadius={'10'}
            borderColor={'gray.100'}
            background={'white'}
            overflow={'hidden'}
            display={'flex'}

        >
            <Flex
                w={'full'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                }}

            >
                <Flex
                    flex={1}
                    w={'full'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    // ml={'-20'}
                    mr={'2'}
                >
                    <Heading size={'md'} mb={'4'} color={'gray.600'}>
                        Balance is ${total.balance}
                    </Heading>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'}
                        w={'full'}
                        height={'100px'}
                        border={'1px solid'}
                        borderColor={'gray.100'}
                    >
                        <Flex flexDirection={'column'}>
                            <Heading color={'gray.700'}>${total.netIncome}
                                <Text color={'gray.600'}>Total income</Text>
                            </Heading>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'}
                        w={'full'}
                        height={'100px'}
                        border={'1px solid'}
                        borderColor={'gray.100'}
                    >
                        <Flex flexDirection={'column'}>
                            <Heading color={'gray.700'}>${total.expenses}
                                <Text color={'gray.600'}>Total expense</Text>
                            </Heading>
                        </Flex>
                    </Flex>
                </Flex>
                <Box
                    flex={1}
                    mt={'10'}
                    ml={'-90px'}
                    width={'300px'}
                    height={'300px'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Heading>
                        <ChartComponent  />
                    </Heading>
                </Box>
                <Addtransation onClose={onClose} isOpen={isOpen} />
            </Flex>

        </Box>
    )
}

export default Summary