import { TransactionContext } from '@/app/context/TransactionContext'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, Heading, IconButton, Text } from '@chakra-ui/react'

import React, { useContext } from 'react'

const ExpenseView = ({ type, data }) => {
  const { deleteTransaction } = useContext(TransactionContext)

  return (
    <Box
      flex={1}
      width={'full'}
      bg={'white'}
      marginRight={'4'}
      marginTop={'10'}
      padding={'5'}
      pb={'4'}
      border={'1px solid'}
      borderColor={'gray.100'}
      borderRadius={'12'}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Heading
          size={'md'}
          color={'red.700'}
        >
          {type === 'income' ? 'Income' : 'Expense'}
        </Heading>
      </Flex>
      {data.map(item =>
        <Flex key={item._id}
          bg={type === 'income' ? 'blue.50' : 'red.50'}
          borderColor={type === 'income' ? 'blue.50' : 'red.50'}
          justifyContent={'space-between'}
          alignItems={'center'}
          border={'1px solid'}
          borderRadius={'8'}
          padding={'4'}
          marginTop={'4'}
        >
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
          >
            {item._id}
            <Text
              marginLeft={'3'}
              fontWeight={'bold'}
              color={'gray.600'}
            >{item.description}</Text>

          </Flex>
          <Text>${item.amount}</Text>
          <ButtonGroup size='sm' isAttached variant='outline'>
            <Button>Save</Button>
            <IconButton aria-label='Add to friends' icon={<CloseIcon onClick={() => deleteTransaction(item._id) } />} />
          </ButtonGroup>
        </Flex>)}
    </Box>
  )
}

export default ExpenseView