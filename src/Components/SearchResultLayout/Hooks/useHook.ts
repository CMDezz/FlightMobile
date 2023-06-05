import React,{useEffect,useState} from 'react'
import _ from 'lodash'
import { dataSearch, dataSearchProps } from '../utils/data'


const useHook = (data:Readonly<{}> | undefined )=>{
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [result,setResult] = useState<dataSearchProps[]>([])

    useEffect(()=>{
        if (!_.isEmpty(data)){
            setIsLoading(true);

            setTimeout(()=>{
                setResult([...dataSearch])
                setIsLoading(false)
            },2000)
            console.log('dat khong torng, get data ',data)
        }
    },[])

    const timKiem = (_form:{[key:string]:any}) =>{
        console.log('form tim kiem la ',_form)
    }

    return {
        result,
        isLoading
    }
}

export default useHook