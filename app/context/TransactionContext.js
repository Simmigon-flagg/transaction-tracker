'use client';
import React, { useState, useEffect, createContext } from 'react';
import { nanoid } from 'nanoid';

export const TransactionContext = createContext({});

export const TransactionContextProvider = ({ children }) => {
    const [total, setTotal] = useState({
        balance: 0,
        transactions: [],
        netIncome: 0,
        gross: 0,
        expenses: 0,
        taxes: 0,
        localTaxes: 0,
    })

    const createTransaction = async (transaction) => {
        const newTransaction = {
            _id: nanoid(),
            ...transaction
        }
        total.transactions = [...total.transactions, newTransaction]

        if (transaction.type === 'income') {
            console.log(transaction.amount)
            total.balance = parseFloat(total.netIncome) + parseFloat(transaction.amount)
            total.netIncome = parseFloat(total.netIncome) + parseFloat(transaction.amount)

        } else if (transaction.type === 'expense') {
            console.log(transaction.amount)
            total.expenses = parseFloat(total.expenses) - parseFloat(transaction.amount)
            total.balance = parseFloat(total.balance) - parseFloat(transaction.amount)

        } else {
            alert("Error selection type")
        }
        console.log(total)
    }

    const updateTransaction = async (edit) => {

    };

    const deleteTransaction = async (_id) => {
        // total.transactions.filter()
        console.log(_id)
    };

    const contextValue = { total, createTransaction, updateTransaction, deleteTransaction };

    return (
        <TransactionContext.Provider value={contextValue}>
            {children}
        </TransactionContext.Provider>
    );
};

export default TransactionContextProvider;