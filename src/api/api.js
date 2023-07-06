import axios from 'axios'
import React from 'react'

export const api = axios.create({
    baseURL: `https://thongtienthienphuot.shop/api/v1`,
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
})