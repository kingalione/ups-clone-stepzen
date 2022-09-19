import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import useCustomerOrders from '../hooks/useCustomerOrders'
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen';

type Props = {
    userId: String,
    name: String,
    email: String
}

function CustomerCard({ userId, name, email }: Props) {
    const {loading, error, orders} = useCustomerOrders(userId);
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>()

  return (
    <div>CustomerCard</div>
  )
}

export default CustomerCard