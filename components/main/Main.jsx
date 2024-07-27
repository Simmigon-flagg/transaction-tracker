'use client'
import { Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Summary from '../summary/Summary'
import ExpenseView from '../expense-view/Expenseview'
import { TransactionContext } from '@/app/context/TransactionContext'

const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { total } = useContext(TransactionContext)
    return (

        <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
                <Heading
                    color={'blue.400'}
                    display={['none', 'block', 'block', 'block', 'block']}
                >
                    Expense Tracker
                </Heading>
                <Flex alignItems={'center'} margin={'20'} >
                    <Button onClick={onOpen} bg={'blue.300'} color={'black'} ml={'4'}>
                        Add New Transaction
                    </Button>
                </Flex>
            </Flex>
            <Summary isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Flex
                w={'full'}
                alignItems={'flex-start'}
                justifyContent={'space-evenly'}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
            >
                <ExpenseView type={'income'} data={total.transactions.filter(transaction => { if (transaction.type === 'income') return total.transactions })} />
                <ExpenseView type={'expense'} data={total.transactions.filter(transaction => { if (transaction.type === 'expense') return total.transactions })} />

            </Flex>
        </Flex>
    )
}

export default Main