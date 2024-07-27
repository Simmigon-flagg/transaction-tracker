"use client"
import { TransactionContext } from '@/app/context/TransactionContext'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'

const Addtransation = ({ onClose, isOpen }) => {
    const { createTransaction } = useContext(TransactionContext)
    const [formData, setFormData] = useState({
        type: "income",
        description: "",
        amount: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRadioChange = (value) => {
        setFormData(prev => ({
            ...prev,
            type: value
        }))
    }

    const handleTransaction = () => {
        createTransaction(formData)
        setFormData({
            type: "income",
            description: "",
            amount: ""
        })
        onClose()
    }
    return (

        <Modal isOpen={isOpen} onClose={onClose}>
            <form>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Add New Transaction
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input
                                placeholder='Enter transaction Description'
                                name="description"
                                type='text'
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input
                                placeholder='Enter transaction amount'
                                name="amount"
                                value={formData.amount}
                                type='text'
                                onChange={handleChange}
                            />
                        </FormControl>

                        <RadioGroup mt={'5'} value={formData.type} onChange={handleRadioChange}>
                            <Radio value="income" colorScheme={"green"} name="blue">Income</Radio>
                            <Radio value="expense" colorScheme={"red"} name="red">Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button onClick={handleTransaction}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

export default Addtransation