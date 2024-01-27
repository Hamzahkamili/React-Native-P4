import axios from "axios"
const BACKEND_URL='https://react-native-hk-default-rtdb.firebaseio.com/'
export function storeExpense(expenseData){
    axios.post(BACKEND_URL+'/expenses.json',expenseData);// first argument will link firebase second arg. will send the datas we want to send to our data base
}

export async function fetchExpenses(){
   const response= axios.get(BACKEND_URL+'/expenses.json');
   const expenses=[];
   for(const key in response.data){
    const expenseObj={
        id:key,
        amount : response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
    }
    expenses.push(expenseObj);
   }
}